/**
 * Per-Route SEO-Metadaten für KI-Schule.
 *
 * Keyword-Verteilung basiert auf der Liste von Aleksa (2026-04-11):
 *   KI Schule · Deutscher KI Kurs · Deutscher Claude Kurs · Deutscher Make.com / n8n Kurs
 *   claude · claude code · claude code lernen · automation mit n8n lernen
 *   KI Community · KI Agentur gründen · mit KI Geld verdienen · AI/KI Business starten
 *
 * Regel: Primär-Keyword steht im Title und in der Meta-Description. Sekundär-Keywords
 * werden NATÜRLICH im Content-Fluss einer Seite erwähnt (nicht gestuffed).
 * Title-Länge: 50–60 Zeichen. Description: 140–160 Zeichen.
 */

import type { PublicRoute } from "@/config/site";

export interface RouteMeta {
  /** Browser-Title / OG-Title. */
  title: string;
  /** Meta-Description und OG-Description. */
  description: string;
  /** Zusätzliche Keywords. Google ignoriert das Meta-Tag — dient nur als Dokumentation. */
  keywords: string[];
  /** Optional: Alternative OG-Image pro Route. Default ist siteConfig.ogImage. */
  ogImage?: string;
  /** Crawl-Indexing-Direktiven. */
  robots?: "index,follow" | "noindex,follow" | "noindex,nofollow";
}

export const routeMeta: Record<PublicRoute, RouteMeta> = {
  "/": {
    title: "KI-Schule | Deutscher KI-Kurs & KI-Agentur gründen",
    description:
      "Starte dein KI-Business mit der #1 deutschsprachigen KI-Schule. Lerne Claude, Claude Code, Make.com und n8n. Gründe deine eigene KI-Agentur — ohne Vorerfahrung.",
    keywords: [
      "KI Schule",
      "Deutscher KI Kurs",
      "KI Agentur gründen",
      "mit KI Geld verdienen",
      "KI Business starten",
      "AI Business starten",
      "claude code lernen",
      "KI lernen Deutsch",
    ],
  },

  "/community": {
    title: "KI-Community DACH | Das Netzwerk für KI-Gründer",
    description:
      "Werde Teil der größten deutschsprachigen KI-Community. Über 80 KI-Agenturen, Live-Calls, Coaching und ein Netzwerk aus Gründern, die gemeinsam KI-Business aufbauen.",
    keywords: [
      "KI Community",
      "KI Community DACH",
      "deutsche KI Community",
      "KI Netzwerk",
      "KI Gründer Community",
      "Claude Community",
    ],
  },

  "/young-founder": {
    title: "Young Founder | KI lernen als Schüler, Azubi, Student",
    description:
      "Nutze deinen Vorsprung: Baue dir als Schüler, Auszubildender oder Student dein eigenes KI-Business auf. Ohne Startkapital, ohne Vorerfahrung, mit Coaching.",
    keywords: [
      "KI Kurs Schüler",
      "KI lernen Studenten",
      "KI Azubi",
      "KI Business als Student",
      "Young Founder Deutschland",
      "mit KI Geld verdienen als Schüler",
    ],
  },

  "/agency-switcher": {
    title: "Agency Switcher | Agentur auf KI umstellen",
    description:
      "Erweitere deine bestehende Agentur mit KI-Dienstleistungen. Vom Red Ocean zum Blue Ocean — nutze Claude, n8n und Make.com, um höhere Margen zu erzielen.",
    keywords: [
      "Agentur auf KI umstellen",
      "KI Dienstleistungen anbieten",
      "Agentur KI erweitern",
      "KI Agentur Umstieg",
      "automation mit n8n lernen",
      "Make.com Agentur",
    ],
  },

  "/nine-to-five": {
    title: "9-to-5 Escape | Nebenberuflich KI-Business aufbauen",
    description:
      "Raus aus dem 9-to-5 Hamsterrad. Baue dir nebenbei dein eigenes KI-Business auf — Schritt für Schritt zu einem Einkommen, das deinen Job ersetzt.",
    keywords: [
      "nebenberuflich KI lernen",
      "raus aus 9 to 5",
      "KI Nebeneinkommen",
      "KI Side Hustle",
      "mit KI Geld verdienen nebenbei",
      "KI Business neben Job",
    ],
  },

  "/impressum": {
    title: "Impressum | KI-Schule",
    description:
      "Impressum und gesetzliche Anbieterkennzeichnung der KI-Schule (Spalevic Consulting Kft.).",
    keywords: [],
    robots: "noindex,follow",
  },

  "/datenschutz": {
    title: "Datenschutz | KI-Schule",
    description:
      "Datenschutzerklärung der KI-Schule. Wie wir deine personenbezogenen Daten verarbeiten, speichern und schützen.",
    keywords: [],
    robots: "noindex,follow",
  },

  "/agb": {
    title: "AGB | KI-Schule",
    description:
      "Allgemeine Geschäftsbedingungen der KI-Schule für Coaching, Community und Online-Kurse.",
    keywords: [],
    robots: "noindex,follow",
  },
};

/** Catch-all für nicht-öffentliche Routen (/coming-soon, 404). */
export const noIndexMeta: RouteMeta = {
  title: "KI-Schule",
  description: siteConfigShortDescription(),
  keywords: [],
  robots: "noindex,follow",
};

// Late-bound, damit wir keinen direkten Import-Cycle mit site.ts bauen.
function siteConfigShortDescription(): string {
  // Bewusst duplik., damit dieses Modul kollisionsfrei bleibt.
  return "Werde Teil der #1 KI-Community im DACH-Raum. Lerne, wie du ohne Vorerfahrung eine profitable KI-Agentur aufbaust.";
}
