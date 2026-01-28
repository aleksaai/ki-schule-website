
# Plan: Lifestyle-Section mit hellem Akzent-Hintergrund

## Analyse

Die aktuelle dunkle Lifestyle-Section unterbricht den visuellen Fluss der Seite. Sie erscheint als isolierte "dunkle Insel" zwischen den hellen Sections, während die späteren dunklen Sections (Erfolgsgeschichte, Testimonials) als zusammenhängender Block funktionieren.

## Lösung

Die Lifestyle-Section erhält einen **hellen Hintergrund** mit:
- Sauberer weißer/heller Basis (wie VideoIntroSection)
- **KEIN Grid-Pattern** (zur Unterscheidung von WhyKI und ProcessSection)
- Subtiler **blauer Akzent-Glow** im Hintergrund (branded, aber dezent)
- Die bunten Lifestyle-Bilder werden dadurch besser hervorgehoben

## Visuelle Hierarchie (neu)

```text
┌──────────────────────────────────────┐
│  HERO              Light + Grid      │
├──────────────────────────────────────┤
│  KURZE VORSTELLUNG Light (clean)     │
├──────────────────────────────────────┤
│  DEINE CHANCE      Light + Grid      │
├──────────────────────────────────────┤
│  DEIN LIFESTYLE    Light + Blue Glow │  ← NEU: Unterscheidbar ohne Grid
├──────────────────────────────────────┤
│  DEINE VORTEILE    Video BG          │
├──────────────────────────────────────┤
│  DEIN WEG          Light + Grid      │
├──────────────────────────────────────┤
│  ERFOLGSGESCHICHTE Dark              │  ← Dunkler Block beginnt
├──────────────────────────────────────┤
│  TESTIMONIALS      Dark              │
└──────────────────────────────────────┘
```

## Technische Änderungen

### Datei: `src/components/LifestyleSection.tsx`

**Hintergrund-Änderungen:**
- Dark gradient (`hsl(220 30% 14%)`) → Light gradient (`hsl(220 20% 97%)`)
- Grid-Pattern entfernen (bleibt leer für Abwechslung)
- Subtile blaue Radial-Gradients als Akzent hinzufügen

**Typografie-Änderungen:**
- `text-white` → `text-foreground`
- `text-white/60` → `text-muted-foreground`
- `glass-dark` Badge → `glass` Badge

**Card-Styling:**
- Dunkle Glass-Cards → Helle Glass-Cards (wie in WhyKISection)
- Rahmen und Schatten für Light Mode anpassen
- Label-Overlay-Gradient für dunklen Text optimieren

## Vorteile

1. **Natürlicher Fluss**: Hell-Hell-Hell-Hell-Video-Hell-Dunkel-Dunkel
2. **Visuelle Unterscheidung**: Kein Grid + blauer Akzent hebt die Section ab
3. **Bessere Bildpräsentation**: Bunte Lifestyle-Bilder auf hellem Hintergrund
4. **Konsistenz**: Dunkle Sections bleiben als Block zusammen
