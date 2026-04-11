/**
 * Postbuild-Prerender für die KI-Schule SPA.
 *
 * Problem: React SPAs liefern nur `<div id="root"></div>`, Google-Crawler
 * (und alle Social-Preview-Crawler) sehen keinen Inhalt, bevor JavaScript
 * ausgeführt wurde. Für SEO müssen wir pro Route ein statisches HTML mit
 * bereits gerendertem Markup liefern.
 *
 * Strategie:
 *   1. Kleinen Static-Server starten, der `dist/` ausliefert und alle
 *      unbekannten Pfade auf `index.html` fallback-rewrite'et.
 *   2. Puppeteer startet einen Headless-Chrome, besucht jede öffentliche
 *      Route, wartet auf Hydration + Helmet-Meta, snapshotet das DOM.
 *   3. Das gerenderte HTML (inkl. richtigem <title>, allen Meta-Tags,
 *      JSON-LD und sichtbarem Body) wird als `dist/<route>/index.html`
 *      gespeichert. Beim nächsten Request liefert Netlify diese Datei
 *      direkt aus, React hydratisiert darauf.
 *
 * Three.js-Canvas-Komponenten: werden beim Rendern unter Puppeteer
 * erzeugt, aber wir warten NICHT auf ihren GL-Context. Netzwerk-idle +
 * fester Timeout reichen, danach snapshoten wir das DOM. Wenn ein
 * Canvas-Component während des Snapshots crashed, fangen wir das
 * pro Route ab — der Build bricht dann nicht komplett.
 */

import { chromium } from "playwright";
import { createServer } from "http";
import { readFile, writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import { join, dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = resolve(__dirname, "..");
const DIST_DIR = join(PROJECT_ROOT, "dist");

// Routen, die prerendert werden sollen. Muss mit `publicRoutes` in
// `src/config/site.ts` übereinstimmen — halte beide manuell in Sync.
const ROUTES = [
  "/",
  "/community",
  "/young-founder",
  "/agency-switcher",
  "/nine-to-five",
  "/impressum",
  "/datenschutz",
  "/agb",
];

const PORT = 4327;
const HOST = `http://127.0.0.1:${PORT}`;

// Content-Type-Mapping für den Static-Server.
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".mp4": "video/mp4",
  ".mov": "video/quicktime",
  ".webm": "video/webm",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};

function contentType(path) {
  const ext = path.slice(path.lastIndexOf("."));
  return MIME[ext] ?? "application/octet-stream";
}

/** Static-Server mit SPA-Fallback auf index.html. */
function startServer() {
  return new Promise((resolvePromise) => {
    const server = createServer(async (req, res) => {
      try {
        const url = new URL(req.url, HOST);
        let filePath = join(DIST_DIR, decodeURIComponent(url.pathname));

        // Wenn der Pfad auf ein konkretes File zeigt, direkt ausliefern.
        if (existsSync(filePath) && !filePath.endsWith("/")) {
          const stat = (await import("fs/promises")).stat;
          const s = await stat(filePath);
          if (s.isFile()) {
            const body = await readFile(filePath);
            res.writeHead(200, { "Content-Type": contentType(filePath) });
            res.end(body);
            return;
          }
        }

        // Sonst: SPA-Fallback auf index.html.
        const fallback = join(DIST_DIR, "index.html");
        const body = await readFile(fallback);
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(body);
      } catch (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end(`Server error: ${err.message}`);
      }
    });

    server.listen(PORT, "127.0.0.1", () => resolvePromise(server));
  });
}

/** Eine Route rendern und als statisches HTML speichern. */
async function prerenderRoute(browser, route) {
  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Prerender/1.0 Chrome/120.0.0.0 Safari/537.36",
    viewport: { width: 1280, height: 800 },
  });
  const page = await context.newPage();

  // WebGL-Canvas-Fehler sollen den Build nicht killen.
  page.on("pageerror", (err) => {
    console.warn(`  [page error on ${route}] ${err.message}`);
  });

  const url = `${HOST}${route}`;
  let html = null;

  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 45000 });

    // Helmet braucht einen Tick, um <head> zu befüllen.
    await page.waitForTimeout(800);

    // Warte bis der Title nicht mehr leer oder gleich dem Index-Fallback ist.
    // Das ist der sauberste Indikator, dass Helmet durchgelaufen ist.
    await page
      .waitForFunction(
        () => {
          const t = document.title ?? "";
          // Title muss länger als 5 Zeichen und nicht der Whitespace-Default sein.
          return t.trim().length > 5;
        },
        { timeout: 5000 },
      )
      .catch(() => {
        console.warn(`  [warn] Title-Warten-Timeout für ${route}`);
      });

    html = await page.content();
  } catch (err) {
    console.error(`  [fail] ${route}: ${err.message}`);
    await context.close();
    return false;
  }

  await context.close();

  // Zielpfad bestimmen. Root-Route überschreibt dist/index.html direkt.
  // Andere Routen landen in dist/<route>/index.html.
  const outPath =
    route === "/"
      ? join(DIST_DIR, "index.html")
      : join(DIST_DIR, route.replace(/^\//, ""), "index.html");

  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, html, "utf8");

  // Spot-Check: enthält das File einen eigenen Title + mindestens eine Meta-Tag?
  const titleMatch = html.match(/<title>([^<]*)<\/title>/);
  const title = titleMatch ? titleMatch[1] : "(kein title)";
  console.log(`  ✓ ${route.padEnd(20)} → ${outPath.replace(PROJECT_ROOT + "/", "")}`);
  console.log(`    title: "${title.slice(0, 80)}"`);

  return true;
}

async function main() {
  console.log("\n🏗  Prerender Start");
  console.log(`   Routes: ${ROUTES.length}`);

  if (!existsSync(DIST_DIR)) {
    console.error(`\n❌ dist/ nicht gefunden. Lauf erst 'npm run build'.`);
    process.exit(1);
  }

  console.log(`\n🚀 Starte lokalen Static-Server auf ${HOST} ...`);
  const server = await startServer();

  console.log(`🌐 Starte Chromium ...`);
  const browser = await chromium.launch({ headless: true });

  let successCount = 0;
  const failed = [];

  for (const route of ROUTES) {
    const ok = await prerenderRoute(browser, route);
    if (ok) successCount++;
    else failed.push(route);
  }

  await browser.close();
  server.close();

  console.log(`\n✨ Prerender fertig: ${successCount}/${ROUTES.length} Routen OK`);
  if (failed.length > 0) {
    console.log(`   ❌ Fehlgeschlagen: ${failed.join(", ")}`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Prerender crashed:", err);
  process.exit(1);
});
