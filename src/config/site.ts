/**
 * KI-Schule — Zentrale Site-Konfiguration
 * Einzige Stelle, an der Brand-Daten, URLs, Kontakte und Social-Profile gepflegt werden.
 * Wenn die echte Produktiv-Domain feststeht, nur `siteUrl` anpassen.
 */

export const siteConfig = {
  /** Canonical Produktiv-URL ohne trailing Slash. */
  siteUrl: "https://ki-hochschule.de",

  /** Marken- und Unternehmensdaten. */
  brand: {
    name: "KI-Schule",
    legalName: "Spalevic Consulting Kft.",
    tagline: "Starte dein KI-Business",
    founder: "Aleksa Spalevic",
    foundingYear: "2024",
    description:
      "KI-Schule ist die #1 deutschsprachige Community für Personen, die mit KI eine eigene Agentur aufbauen und online Geld verdienen wollen. Deutscher KI-Kurs, Coaching und Community — praxisnah, ohne Vorerfahrung.",
    shortDescription:
      "Werde Teil der #1 KI-Community im DACH-Raum. Lerne, wie du ohne Vorerfahrung eine profitable KI-Agentur aufbaust.",
    language: "de-DE",
    locale: "de_DE",
  },

  /** Kontakt für Schema.org und Impressum. */
  contact: {
    email: "info@aleksa.ai",
    phone: "+49 160 7763741",
    address: {
      streetAddress: "Lőcsei út 9/A",
      postalCode: "1147",
      city: "Budapest",
      country: "HU",
      countryName: "Hungary",
    },
  },

  /** Vollständige Liste aller Social-Profile (für JSON-LD `sameAs`). */
  social: {
    instagram: "https://www.instagram.com/iamaleksa.ai/",
    linkedin: "https://www.linkedin.com/in/aleksaspalevic/",
    youtube: "https://www.youtube.com/@aleksa-ai",
  },

  /** Default Social-Preview-Bild (liegt in public/). */
  ogImage: "/og-image.png",
  ogImageWidth: 1200,
  ogImageHeight: 630,

  /** Handle ohne @ — wird beim Rendern formatiert. */
  twitterHandle: "KISchule",

  /** Primäre Zielmärkte (für hreflang-Planung; aktuell nur de-DE). */
  locales: ["de-DE"] as const,
} as const;

/** Alle öffentlich indexierbaren Routen (ohne /coming-soon und Catch-all). */
export const publicRoutes = [
  "/",
  "/community",
  "/young-founder",
  "/agency-switcher",
  "/nine-to-five",
  "/impressum",
  "/datenschutz",
  "/agb",
] as const;

export type PublicRoute = (typeof publicRoutes)[number];

/** Convenience: Absolute URL zu einer Route bauen. */
export function absoluteUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  // Root path behält trailing slash — bleibt konsistent mit sitemap.xml.
  if (cleanPath === "/") return `${siteConfig.siteUrl}/`;
  return `${siteConfig.siteUrl}${cleanPath}`;
}
