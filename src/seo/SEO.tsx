import { useEffect, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { siteConfig, absoluteUrl } from "@/config/site";

interface SEOProps {
  /** Browser-Title und OG-Title. Wird NICHT um den Brand-Namen ergänzt — volle Kontrolle bleibt bei der Seite. */
  title: string;
  /** Meta-Description und OG-Description. */
  description: string;
  /** Pfad der aktuellen Seite (z. B. "/community"). Wird zur Canonical-URL. */
  path: string;
  /** Robots-Direktiven. Default: "index,follow". */
  robots?: "index,follow" | "noindex,follow" | "noindex,nofollow";
  /** Zusätzliche OG-Image-URL (Pfad oder absolute URL). Default: siteConfig.ogImage. */
  ogImage?: string;
  /** OG-Type. Default: "website". */
  ogType?: "website" | "article" | "profile";
  /** Optionale Keyword-Liste. Rein dokumentarisch — Google ignoriert es. */
  keywords?: string[];
  /** Ein oder mehrere JSON-LD-Objekte, die als strukturierte Daten eingebettet werden. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Zentrale SEO-Komponente. Schreibt per-route Titles, Meta-Tags, OG/Twitter-Cards,
 * Canonical-URL via react-helmet-async, und JSON-LD direkt in `document.head`.
 *
 * Hinweis zu JSON-LD: react-helmet-async 3.0 rendert `<script>` Child-Content
 * nicht zuverlässig im SSR-ähnlichen Prerender-Kontext. Wir umgehen das, indem
 * ein `useEffect` den Schema-Block direkt in `document.head` anhängt. Puppeteer
 * snapshotet die Seite NACH Mount + 800ms-Delay, d.h. der Tag ist im finalen
 * statischen HTML vorhanden und wird von Google gecrawlt.
 */
export function SEO({
  title,
  description,
  path,
  robots = "index,follow",
  ogImage,
  ogType = "website",
  keywords,
  jsonLd,
}: SEOProps) {
  const canonical = absoluteUrl(path);
  const image = ogImage
    ? ogImage.startsWith("http")
      ? ogImage
      : absoluteUrl(ogImage)
    : absoluteUrl(siteConfig.ogImage);

  const jsonLdString = useMemo(() => {
    const arr = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
    if (arr.length === 0) return null;
    return JSON.stringify(arr.length === 1 ? arr[0] : arr);
  }, [jsonLd]);

  // JSON-LD direkt in document.head injizieren. Der Cleanup-Pass läuft IMMER,
  // auch wenn diese Route kein JSON-LD definiert — sonst hängen veraltete
  // Schemas von vorherigen Routen (inkl. des Prerender-Fallbacks auf `/`) im
  // DOM fest und landen im snapshotted HTML.
  useEffect(() => {
    // Zuerst alle alten `data-seo="route"` Scripts entfernen.
    const existing = document.head.querySelectorAll<HTMLScriptElement>(
      'script[type="application/ld+json"][data-seo="route"]',
    );
    existing.forEach((el) => el.remove());

    if (!jsonLdString) return;

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo", "route");
    script.text = jsonLdString;
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [jsonLdString]);

  return (
    <Helmet prioritizeSeoTags>
      <html lang="de" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      <meta name="robots" content={robots} />
      <meta name="author" content={siteConfig.brand.name} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteConfig.brand.name} />
      <meta property="og:locale" content={siteConfig.brand.locale} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content={String(siteConfig.ogImageWidth)} />
      <meta property="og:image:height" content={String(siteConfig.ogImageHeight)} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={`@${siteConfig.twitterHandle}`} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
