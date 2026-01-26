
# Plan: Glaseffekt für "Deine Vorteile" Boxen

## Ziel
Die fünf Boxen in der "Deine Vorteile" Section sollen einen echten Glaseffekt haben, durch den man das Hintergrundvideo milchig-verschwommen sehen kann - genau wie beim Navigations-Hintergrund.

## Aktuelles Problem
1. **Boxen zu opak**: Die Boxen verwenden `glass-card` mit 85% Weiß-Hintergrund
2. **Video-Overlay zu stark**: Ein `bg-white/80` Overlay macht das gesamte Video fast unsichtbar

## Lösung

### Schritt 1: Video-Overlay reduzieren
Das weiße Overlay von `bg-white/80` auf `bg-white/30` reduzieren, damit das Video im Hintergrund sichtbar wird.

### Schritt 2: Boxen-Styling anpassen
Die `glass-card` Klasse durch die transparentere `.glass` Klasse ersetzen, die bereits für die Navigation verwendet wird:
- `rgba(255, 255, 255, 0.7)` bis `0.5` statt `0.85`
- Gleicher `backdrop-filter: blur(24px)`
- Gleiche Specular-Highlights

### Schritt 3: Gradient-Overlay anpassen
Den Gradient-Overlay ebenfalls transparenter machen, damit der Glaseffekt der Boxen zur Geltung kommt.

## Technische Änderungen

**Datei: `src/components/BenefitsSection.tsx`**

1. Zeile 118: `bg-white/80` → `bg-white/30`
2. Zeile 125: Gradient-Transparenz erhöhen
3. Zeile 59: `glass-card` → `glass` Klasse für BenefitCard

## Erwartetes Ergebnis
- Das Hintergrundvideo ist durch die Boxen milchig-verschwommen sichtbar
- Die Boxen haben denselben Glaseffekt wie die Navigation
- Der Text bleibt gut lesbar durch den Blur-Effekt
