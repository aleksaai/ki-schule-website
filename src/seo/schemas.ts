/**
 * JSON-LD Factories für Schema.org-Strukturdaten.
 *
 * Jede Factory liefert ein reines JavaScript-Objekt, das direkt als
 * `<script type="application/ld+json">` in Helmet eingebaut werden kann.
 *
 * Schemas, die wir erzeugen:
 * - Organization (site-wide)
 * - WebSite (site-wide, mit potenter SearchAction für Sitelinks-Searchbox)
 * - EducationalOrganization (Landing Page)
 * - Course (pro geplantem Online-Kurs)
 * - FAQPage (Landing Page, nutzt FAQSection-Daten)
 * - BreadcrumbList (jede Unterseite)
 */

import { siteConfig, absoluteUrl } from "@/config/site";

type JsonLd = Record<string, unknown>;

const ORG_ID = `${siteConfig.siteUrl}/#organization`;
const WEBSITE_ID = `${siteConfig.siteUrl}/#website`;

/** Organization — juristische Einheit hinter der Marke. */
export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: siteConfig.brand.name,
    legalName: siteConfig.brand.legalName,
    url: siteConfig.siteUrl,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/icon.png"),
      width: 512,
      height: 512,
    },
    image: absoluteUrl(siteConfig.ogImage),
    description: siteConfig.brand.description,
    foundingDate: siteConfig.brand.foundingYear,
    founder: {
      "@type": "Person",
      name: siteConfig.brand.founder,
    },
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.streetAddress,
      postalCode: siteConfig.contact.address.postalCode,
      addressLocality: siteConfig.contact.address.city,
      addressCountry: siteConfig.contact.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: siteConfig.contact.email,
      telephone: siteConfig.contact.phone,
      availableLanguage: ["German", "English"],
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
      siteConfig.social.youtube,
    ],
  };
}

/** WebSite — erlaubt Google, Sitelinks-Searchbox zu rendern. */
export function webSiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteConfig.siteUrl,
    name: siteConfig.brand.name,
    description: siteConfig.brand.description,
    inLanguage: siteConfig.brand.language,
    publisher: { "@id": ORG_ID },
  };
}

/**
 * EducationalOrganization — signalisiert Google, dass KI-Schule
 * tatsächlich ein Bildungsanbieter ist. Wichtig für "Deutscher KI-Kurs"-Rankings.
 */
export function educationalOrganizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${siteConfig.siteUrl}/#educational-org`,
    name: siteConfig.brand.name,
    alternateName: "Aleksa AI - KI-Schule",
    url: siteConfig.siteUrl,
    logo: absoluteUrl("/icon.png"),
    description:
      "KI-Schule ist die deutschsprachige Bildungsplattform für KI-Agenturen und KI-Automatisierung. Wir unterrichten Claude, Claude Code, Make.com, n8n und KI-Agenten-Entwicklung für Einsteiger und Fortgeschrittene.",
    foundingDate: siteConfig.brand.foundingYear,
    founder: {
      "@type": "Person",
      name: siteConfig.brand.founder,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.streetAddress,
      postalCode: siteConfig.contact.address.postalCode,
      addressLocality: siteConfig.contact.address.city,
      addressCountry: siteConfig.contact.address.country,
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
      siteConfig.social.youtube,
    ],
  };
}

/** Einzelner Kurs — erzeugt Rich Results für "Deutscher KI-Kurs" & Co. */
interface CourseInput {
  name: string;
  description: string;
  url?: string;
  language?: string;
  provider?: string;
}

export function courseSchema(input: CourseInput): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: input.name,
    description: input.description,
    url: input.url ?? siteConfig.siteUrl,
    inLanguage: input.language ?? siteConfig.brand.language,
    provider: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: input.provider ?? siteConfig.brand.name,
    },
    // Freie Angabe, bis echtes Offer-Objekt mit Preisen gepflegt wird.
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      inLanguage: input.language ?? siteConfig.brand.language,
      // "offers" bewusst weggelassen — Google zeigt Course Rich Results
      // auch ohne Preis, solange mindestens ein CourseInstance existiert.
    },
  };
}

/**
 * Katalog aller angekündigten Online-Kurse.
 * Quelle: src/components/FooterSection.tsx → footerLinks["Online-Kurse"].
 * Wird auf der Startseite als Array gerendert, damit Google jeden einzelnen
 * Kurs als separaten strukturierten Datensatz erkennt.
 */
export function courseCatalog(): JsonLd[] {
  return [
    courseSchema({
      name: "KI-Agentur Starter",
      description:
        "Aufbau einer profitablen KI-Agentur von Null — mit System, Coaching und Community. Deutscher KI-Kurs für Einsteiger ohne Vorerfahrung.",
    }),
    courseSchema({
      name: "KI-Agenten Masterclass",
      description:
        "Baue eigene KI-Agenten mit Claude, Claude Code und MCP-Servern. Praxisorientierter Kurs auf Deutsch für Entwickler und Gründer.",
    }),
    courseSchema({
      name: "Workflow-Automation",
      description:
        "Automation lernen mit Make.com und n8n. Deutscher Kurs für Workflow-Automatisierung, KI-Integration und Business-Prozesse.",
    }),
    courseSchema({
      name: "Vibe Coding Business",
      description:
        "Baue Web-Apps und digitale Produkte mit KI-gestützter Entwicklung. Claude Code lernen, Lovable, Cursor und moderne AI-Coding-Tools im deutschen KI-Kurs.",
    }),
    courseSchema({
      name: "Testkunden Gewinnung",
      description:
        "Die ersten zahlenden Kunden für deine KI-Agentur finden. Praktisches Sales-Training für KI-Business-Gründer auf Deutsch.",
    }),
  ];
}

/** FAQPage — Rich-Result-fähige FAQ-Liste. Quelle: FAQSection.tsx. */
interface FaqInput {
  question: string;
  answer: string;
}

export function faqPageSchema(faqs: FaqInput[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** Spiegelt die Fragen aus FAQSection.tsx. */
export const siteFaqs: FaqInput[] = [
  {
    question: "Was ist die KI-Schule?",
    answer:
      "Die KI-Schule ist dein Sprungbrett in die Welt des KI-Business. Hier lernst du praxisnah, wie du ein profitables KI-Unternehmen aufbaust — mit Coaching, Community und Tools wie dem KI-Cockpit. Kein Blabla, nur Ergebnisse.",
  },
  {
    question: "Was ist die KI-Crew im KI-Cockpit?",
    answer:
      "Die KI-Crew sind deine persönlichen KI-Mitarbeiter, die dir von Tag 1 an zur Seite stehen. Sie übernehmen Aufgaben wie Content-Erstellung, Kundenakquise und mehr, sodass du dich auf das Wesentliche konzentrieren kannst.",
  },
  {
    question: "Für wen ist die KI-Schule gedacht?",
    answer:
      "Für alle, die mit KI Geld verdienen wollen — egal ob kompletter Anfänger oder bereits mit Vorkenntnissen. Unser Coaching passt sich deinem Level an und bringt dich Schritt für Schritt zum Erfolg.",
  },
  {
    question: "Brauche ich Vorkenntnisse in KI?",
    answer:
      "Nein, überhaupt nicht. Wir starten bei Null und führen dich durch alles, was du wissen musst. Du brauchst nur die Motivation, etwas Neues zu lernen und umzusetzen.",
  },
  {
    question: "Was macht die KI-Schule anders?",
    answer:
      "Unser Money-First Approach: Wir fokussieren uns auf praktische Ergebnisse, nicht auf endlose Theorie. Dazu kommen Live-Events, persönliches Coaching und ein faires Preismodell für Einsteiger.",
  },
];

/** Breadcrumb-List für Unterseiten. */
interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

/** Convenience: JSON-LD stringifyen für Helmet `<script>` Inhalt. */
export function stringifyJsonLd(jsonLd: JsonLd | JsonLd[]): string {
  // Kein Escaping nötig — Helmet setzt den Text 1:1 in `<script>` ein.
  return JSON.stringify(jsonLd);
}
