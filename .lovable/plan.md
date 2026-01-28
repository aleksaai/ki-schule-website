
# Plan: Community-Seite erstellen

## Ziel
Erstellung einer neuen Community-Seite, die alle Vorteile und Features der KI-Schule Community prasentiert und zum bestehenden Design-System passt.

## Seitenstruktur

### 1. Hero Section
Eine einladende Hero Section, die die Community vorstellt:

**Inhalte:**
- Badge: "Community" Icon (z.B. Users icon)
- Headline: "Dein Netzwerk fur" + "KI-Erfolg." (Serif italic)
- Subheadline: Kurze Beschreibung uber die 80+ KI-Agenturen aus dem DACH-Raum
- Stats: "80+ Agenturen", "Seit Feb. 2024", "DACH-Raum"
- CTA: "Community beitreten" Button

**Visuell:**
- Gleicher Hintergrund-Stil wie andere Landing Pages (Light gradient + organic shapes + grid)
- Hero-Bild: Wir konnen das bestehende Netzwerk-Bild (`src/assets/netzwerk-image.jpg`) verwenden oder ein neues hochladen
- Floating Glass Cards mit Community-Stats

---

### 2. Community Features Section (Neu)
Ein Bento-Grid Layout, das alle Community-Features prasentiert:

**6 Feature-Karten:**

| Feature | Icon | Beschreibung |
|---------|------|--------------|
| Community Feed | MessageSquare | Fragen stellen, Hilfe bekommen, Neuigkeiten teilen |
| Live Calls | Video | 4x pro Woche Gruppen-Calls mit Q&A und Support |
| Kurse & Tutorials | GraduationCap | Basics, Masterclass, Automation, Paid Ads |
| Blueprints | FileCode | n8n & make.com Templates, Vertragsvorlagen |
| Opportunities | Briefcase | Auftrage von KI-Agenturen, erste Erfahrungen sammeln |
| Zertifizierung | Award | Anerkannte Zertifikate fur LinkedIn & Website |

**Design:**
- Ahnlich wie BenefitsSection aber ohne Video-Hintergrund
- Light background mit grid pattern
- Glass cards fur jedes Feature

---

### 3. Netzwerk & Events Section (Neu)
Eine spezielle Section fur Networking und Events:

**Inhalte:**
- Interne Netzwerke (gemeinsame Werbeanzeigen)
- Netzwerkveranstaltungen
- Wettbewerbe (Gutscheine, Reisen, 1:1 Budapest)

**Design:**
- Dark mode accent section (wie SuccessStorySection)
- Asymmetrisches Layout mit Bild

---

### 4. Wiederverwendete Sections
- **TestimonialsSection** - Community Feedback
- **FAQSection** - Haufige Fragen (evtl. mit community-spezifischen FAQs)
- **CTASection** - Finale Conversion
- **FooterSection** - Standard Footer

---

## Technische Umsetzung

### Neue Dateien:
1. `src/pages/Community.tsx` - Hauptseite
2. `src/components/CommunityFeatures.tsx` - Features Bento Grid
3. `src/components/CommunityNetworkSection.tsx` - Netzwerk Section

### Anderungen:
1. `src/App.tsx` - Neue Route `/community` registrieren
2. `src/components/MainNav.tsx` - Community Link von `/coming-soon` auf `/community` andern
3. `src/components/MobileNav.tsx` - Community Link aktualisieren

---

## Design-Konsistenz

Die Seite wird folgende etablierte Patterns verwenden:
- Liquid Glass Aesthetic (`.glass`, `.glass-card` Klassen)
- Light mode Farbpalette mit Sky Blue Accent (#66A4FF)
- Framer Motion Animationen
- Mobile-first responsive Design
- MainNav + MobileNav Komponenten
- 48px Grid Pattern Hintergrund

---

## Nachste Schritte

Nach der Genehmigung dieses Plans:
1. Hero Section mit Placeholder-Bild erstellen
2. Community Features Grid implementieren
3. Netzwerk Section erstellen
4. Routing und Navigation aktualisieren
5. Optional: Hero-Bild hochladen falls gewunscht
