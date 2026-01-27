
# Plan: Visuelle Abwechslung für die oberen Sections

## Problem-Analyse

Die drei aufeinanderfolgenden Sections (Hero, Video-Intro, Deine Chance) sehen zu ähnlich aus:
- Gleicher heller Gradient-Hintergrund
- Gleiches Grid-Pattern (48px)
- Ähnliche blaue Blur-Effekte

## Lösung: Komplett weißer Hintergrund für Video-Section

Die Video-Section ("Kurze Vorstellung") wird visuell vereinfacht, um einen klaren Kontrast zu den anderen Sections zu schaffen.

### Visueller Rhythmus nach der Änderung

```text
┌─────────────────────────────────────────┐
│  HERO SECTION                           │
│  • Heller Gradient + Grid-Pattern       │
│  • Animierte blaue Blur-Orbs            │
│  • Dynamisch & einladend                │
├─────────────────────────────────────────┤
│  VIDEO SECTION (NEU)                    │
│  • Komplett weißer Hintergrund          │
│  • KEIN Grid-Pattern                    │
│  • Minimalistisch, Fokus aufs Video     │
├─────────────────────────────────────────┤
│  DEINE CHANCE                           │
│  • Heller Gradient + Grid-Pattern       │
│  • Strukturiert mit Glass-Cards         │
└─────────────────────────────────────────┘
```

## Technische Umsetzung

### Datei: `src/components/VideoIntroSection.tsx`

**Änderung 1: Hintergrund-Gradient entfernen**
- Ersetze den Gradient durch reines Weiß: `background: "hsl(0 0% 100%)"`

**Änderung 2: Grid-Pattern entfernen**
- Entferne das komplette Grid-Pattern-Element (Zeilen 15-25)

**Änderung 3: Animiertes Blur dezenter machen**
- Reduziere die Opacity des blauen Glows oder entferne ihn komplett
- Das Video selbst wird zum visuellen Mittelpunkt

### Ergebnis

| Section | Hintergrund | Grid | Blur-Effekte |
|---------|-------------|------|--------------|
| Hero | Heller Gradient | Ja | Animierte Orbs |
| Video | Reines Weiß | Nein | Minimal/Keine |
| Deine Chance | Heller Gradient | Ja | Subtile Orbs |

Diese Änderung schafft einen natürlichen visuellen "Atemraum" zwischen den strukturierten Sections und lenkt den Fokus auf das Vorstellungsvideo.
