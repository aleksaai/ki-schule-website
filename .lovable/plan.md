

# Plan: Neue "Prozess" Section mit 3 Schritten

## Übersicht
Eine neue Section, die den Ablauf des Coaching-Programms in drei interaktiven Schritten erklärt. Der Nutzer kann zwischen den Schritten wechseln, wobei jeder Schritt eine Grafik und Beschreibung zeigt.

## Design-Konzept

```text
┌─────────────────────────────────────────────────────────────┐
│                         [Label]                             │
│                    DEIN WEG ZUM ERFOLG                      │
│              So bringen wir dich ans Ziel                   │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                                                       │  │
│  │   [ Schritt 1 ]   [ Schritt 2 ]   [ Schritt 3 ]      │  │
│  │       ●              ○              ○                 │  │
│  │                                                       │  │
│  │  ┌──────────┐    ┌────────────────────────────────┐  │  │
│  │  │          │    │  Positionierung & Onboarding   │  │  │
│  │  │  GRAFIK  │    │                                │  │  │
│  │  │          │    │  Im gemeinsamen Onboarding     │  │  │
│  │  │          │    │  arbeiten wir an deiner        │  │  │
│  │  │          │    │  Positionierung, Produktpalette│  │  │
│  │  │          │    │  und Zielgruppe.               │  │  │
│  │  └──────────┘    └────────────────────────────────┘  │  │
│  │                                                       │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│                   [ Jetzt Starten → ]                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Die drei Schritte

**Schritt 1 - Positionierung & Onboarding**
- Gemeinsames Onboarding
- Erarbeitung der Positionierung
- Definition von Produktpalette und Zielgruppe

**Schritt 2 - Fokus auf Umsatz**
- Priorität: schnell unabhängig werden
- Fachliche Kompetenz aufbauen
- Erste Einnahmen generieren

**Schritt 3 - Skalierung & Netzwerk**
- Zugang zu exklusiven Netzwerken
- Vom Selbstständigen zum Unternehmer
- Team aufbauen, Business automatisieren

## Technische Umsetzung

### Neue Dateien

**1. `src/components/ProcessSection.tsx`**
- React-Komponente mit useState für aktiven Schritt
- Framer Motion Animationen für Schritt-Wechsel
- Responsive Layout (Mobile: vertikal, Desktop: horizontal)

### Komponenten-Struktur

```tsx
const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  return (
    <section>
      {/* Header: Badge, Titel, Untertitel */}
      
      {/* Große Glasbox */}
      <div className="glass-card">
        {/* Step-Tabs oben */}
        <div className="flex gap-4">
          {steps.map((step, i) => (
            <button onClick={() => setActiveStep(i)}>
              Schritt {i + 1}
            </button>
          ))}
        </div>
        
        {/* Content: Grafik links, Text rechts */}
        <div className="flex">
          <div>{/* Grafik/Icon */}</div>
          <div>{/* Titel + Beschreibung */}</div>
        </div>
      </div>
      
      {/* CTA Button */}
    </section>
  );
};
```

### Styling-Details
- Große horizontale Glasbox mit `glass-card` Klasse
- Step-Tabs als Buttons mit aktivem Zustand (Primary-Farbe)
- Sanfte Fade-Animation beim Wechsel zwischen Schritten
- Gleicher Hintergrund wie "Warum KI-Agentur?" Section (Grid-Pattern)

### Integration

**`src/pages/Index.tsx`**
```tsx
import ProcessSection from "@/components/ProcessSection";

// Nach BenefitsSection einfügen
<ProcessSection />
```

### Grafiken/Icons
Für jeden Schritt wird ein passendes Icon benötigt:
- Schritt 1: Zielscheibe/Kompass (Positionierung)
- Schritt 2: Aufwärtspfeil/Chart (Umsatz)
- Schritt 3: Netzwerk/Rakete (Skalierung)

Optionen:
1. Lucide Icons verwenden (sofort verfügbar)
2. Eigene Grafiken hochladen (wie bei anderen Sections)

## Responsive Verhalten

**Desktop (lg+)**
- Horizontales Layout: Grafik links, Text rechts
- Step-Tabs nebeneinander

**Tablet/Mobile**
- Vertikales Layout: Grafik oben, Text unten
- Step-Tabs bleiben nebeneinander, aber kompakter

