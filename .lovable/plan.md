
# Plan: "Dein Weg" Section - Side-by-Side Layout Redesign

## Übersicht

Die Section wird von einem Tab-basierten Layout zu einem übersichtlichen Side-by-Side Layout umgebaut, bei dem alle 3 Schritte permanent sichtbar sind.

## Visuelles Konzept

```text
┌─────────────────────────────────────────────────────────────────┐
│                          HEADER                                 │
│                    "So bringen wir dich                         │
│                         ans Ziel"                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌────────────────────────┐    ┌─────────────────────────────┐  │
│  │                        │    │ ① ─────────────────────────│  │
│  │                        │    │   POSITIONIERUNG & ONBOARD. │  │  ← Aktiv: Blauer Rahmen
│  │                        │    │   Im gemeinsamen Onboarding │  │     + Blaues Icon
│  │      GROSSES BILD      │    │   arbeiten wir direkt...    │  │     + Leichter blauer Glow
│  │                        │    ├─────────────────────────────┤  │
│  │       (Video/Foto)     │    │ ② ─────────────────────────│  │
│  │                        │    │   FOKUS AUF UMSATZ          │  │  ← Inaktiv: Dezent grau
│  │    60% Breite          │    │   Unsere Nummer-eins...     │  │
│  │                        │    ├─────────────────────────────┤  │
│  │                        │    │ ③ ─────────────────────────│  │
│  └────────────────────────┘    │   SKALIERUNG & NETZWERK     │  │  ← Inaktiv: Dezent grau
│                                │   Je erfolgreicher du...    │  │
│                                └─────────────────────────────┘  │
│                                                                 │
│                       [Jetzt Starten →]                         │
└─────────────────────────────────────────────────────────────────┘
```

## Interaktions-Verhalten

| Aktion | Reaktion |
|--------|----------|
| Klick auf Schritt 2 | Schritt 2 wird blau hervorgehoben, Bild wechselt mit Fade-Animation |
| Aktiver Schritt | Blauer linker Rand (#66A4FF), blaues Icon, leichter Glow-Effekt |
| Inaktive Schritte | Graue Darstellung, dezenter Glass-Style, Hover zeigt leichte Hervorhebung |

## Vorteile des neuen Layouts

- Alle Schritte auf einen Blick sichtbar
- Größeres Bild für mehr visuellen Impact
- Klare visuelle Hierarchie durch Farbcodes
- Nutzer wissen immer wo sie im Prozess stehen

---

## Technische Umsetzung

### Datei: `src/components/ProcessSection.tsx`

### Schritt 1: Layout-Struktur ändern

**Änderung des Content-Bereichs (Zeilen 109-300):**

Die aktuelle Struktur:
```
┌─ Glass Container ────────────────────┐
│  [Tab 1] [Tab 2] [Tab 3]             │  ← Tabs oben
│                                      │
│  ┌──────────┐  ┌──────────────────┐  │
│  │  Bild    │  │  Titel + Text    │  │  ← Content wechselt
│  └──────────┘  └──────────────────┘  │
└──────────────────────────────────────┘
```

Wird zu:
```
┌─ Glass Container ────────────────────┐
│                                      │
│  ┌──────────┐  ┌──────────────────┐  │
│  │          │  │ Step 1 Card      │  │
│  │  Bild    │  │ Step 2 Card      │  │  ← Alle Steps sichtbar
│  │ (groß)   │  │ Step 3 Card      │  │
│  └──────────┘  └──────────────────┘  │
└──────────────────────────────────────┘
```

### Schritt 2: Step-Card Komponente erstellen

Neue interne Komponente für jeden Schritt:

```tsx
interface StepCardProps {
  step: typeof steps[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}

const StepCard = ({ step, index, isActive, onClick }: StepCardProps) => {
  const Icon = step.icon;
  
  return (
    <motion.button
      onClick={onClick}
      className={`w-full text-left p-5 rounded-2xl transition-all duration-300 ${
        isActive ? "cursor-default" : "cursor-pointer"
      }`}
      style={{
        background: isActive
          ? "linear-gradient(135deg, hsl(var(--primary) / 0.08) 0%, hsl(var(--primary) / 0.03) 100%)"
          : "linear-gradient(145deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.3) 100%)",
        border: isActive
          ? "1.5px solid hsl(var(--primary) / 0.4)"
          : "1px solid rgba(255,255,255,0.6)",
        boxShadow: isActive
          ? "0 0 20px hsl(var(--primary) / 0.15), inset 0 1px 0 rgba(255,255,255,0.5)"
          : "0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)",
      }}
      whileHover={!isActive ? { scale: 1.01, y: -2 } : {}}
      whileTap={!isActive ? { scale: 0.99 } : {}}
    >
      <div className="flex items-start gap-4">
        {/* Step Number + Icon */}
        <div 
          className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
            isActive ? "bg-primary text-white" : "bg-muted/50 text-muted-foreground"
          }`}
        >
          <Icon className="h-5 w-5" />
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs font-semibold uppercase tracking-wider ${
              isActive ? "text-primary" : "text-muted-foreground"
            }`}>
              Schritt {index + 1}
            </span>
          </div>
          <h4 className={`text-base font-bold mb-2 ${
            isActive ? "text-foreground" : "text-foreground/70"
          }`}>
            {step.title}
          </h4>
          <p className={`text-sm leading-relaxed transition-all duration-300 ${
            isActive 
              ? "text-muted-foreground max-h-32 opacity-100" 
              : "text-muted-foreground/60 max-h-0 opacity-0 overflow-hidden"
          }`}>
            {step.description}
          </p>
        </div>
      </div>
    </motion.button>
  );
};
```

### Schritt 3: Hauptlayout anpassen

**Neuer Content-Bereich:**

```tsx
{/* Content Area - Side by Side */}
<div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12">
  
  {/* Left: Large Image (60%) */}
  <div className="lg:w-[55%] flex-shrink-0">
    <AnimatePresence mode="wait">
      <motion.div
        key={activeStep}
        className="relative"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.4 }}
      >
        {/* Glow behind image */}
        <div className="absolute inset-0 z-0" style={{
          background: "radial-gradient(circle, hsl(var(--primary)/0.2) 0%, transparent 70%)",
          filter: "blur(40px)",
          transform: "scale(1.3)",
        }} />
        
        {/* Glass Frame */}
        <div className="relative z-10 rounded-2xl overflow-hidden" style={{
          background: "linear-gradient(145deg, hsl(var(--card)/0.25) 0%, hsl(var(--card)/0.10) 100%)",
          border: "1.5px solid hsl(var(--card)/0.6)",
          padding: "8px",
          boxShadow: "0 16px 48px hsl(var(--foreground)/0.12)",
        }}>
          <AspectRatio ratio={4/3} className="rounded-xl overflow-hidden">
            {/* Video oder Bild je nach aktivem Schritt */}
          </AspectRatio>
        </div>
      </motion.div>
    </AnimatePresence>
  </div>
  
  {/* Right: All Steps (40%) */}
  <div className="lg:w-[45%] flex flex-col gap-4">
    {steps.map((step, index) => (
      <StepCard
        key={step.id}
        step={step}
        index={index}
        isActive={activeStep === index}
        onClick={() => setActiveStep(index)}
      />
    ))}
  </div>
  
</div>
```

### Schritt 4: Alte Tab-Navigation entfernen

Die Zeilen 162-207 (die Tab-Buttons oben) werden komplett entfernt, da die Navigation jetzt über die Step-Cards rechts erfolgt.

### Schritt 5: Mobile-Responsive Anpassung

Auf Mobile (unter `lg` Breakpoint):
- Bild oben (volle Breite)
- Steps unten (volle Breite, vertikal gestapelt)
- Beschreibung nur beim aktiven Schritt sichtbar

---

## Erwartetes Ergebnis

| Vorher | Nachher |
|--------|---------|
| Tabs verstecken inaktive Schritte | Alle 3 Schritte immer sichtbar |
| Kleines Bild neben Text | Großes Bild (55% Breite) |
| Unklar wo man im Prozess ist | Klare visuelle Hierarchie |
| Einfache Tab-Buttons | Interaktive Glass-Cards mit Icons |
