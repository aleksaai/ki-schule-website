
# Behebung des Dropdown Glass-Effekt Problems

## Problem-Analyse

Das Dropdown-Menü zeigt keinen "milchigen" Blur-Effekt, obwohl `backdrop-filter: blur()` korrekt gesetzt ist. Die Ursache ist ein **CSS Stacking Context Problem**:

1. Die Navigation verwendet die `.glass` Klasse mit `isolation: isolate`
2. Dies erstellt einen neuen Rendering-Kontext
3. Das Dropdown liegt innerhalb dieses Kontexts
4. Der Browser kann `backdrop-filter` nur auf Elemente innerhalb dieses Kontexts anwenden
5. Deshalb "sieht" das Dropdown nur die Navigation als Hintergrund, nicht die eigentliche Seite

## Lösung: React Portal

Das Dropdown wird aus der Navigation herausgezogen und direkt in den `<body>` gerendert. So kann es seinen eigenen `backdrop-filter` auf den echten Seitenhintergrund anwenden.

## Technische Umsetzung

### Schritt 1: Portal-basiertes Dropdown erstellen

Die `NavItem` Komponente wird erweitert:

- Import von `createPortal` aus `react-dom`
- Berechnung der Dropdown-Position relativ zum Trigger-Button
- Rendern des Dropdowns via Portal direkt in den Body

### Schritt 2: Positionsberechnung

```text
┌─────────────────────────────────────────────────┐
│  Browser Window                                 │
│                                                 │
│  ┌─────────────────────────────────────────┐    │
│  │  Navigation Bar (.glass)                 │    │
│  │  ┌──────────┐                           │    │
│  │  │ Coaching │ ◄── getBoundingClientRect()   │
│  │  └──────────┘                           │    │
│  └─────────────────────────────────────────┘    │
│         │                                       │
│         ▼ Position wird berechnet               │
│  ┌──────────────────┐                          │
│  │  Dropdown        │ ◄── Rendered via Portal  │
│  │  (im <body>)     │     mit backdrop-filter  │
│  │  backdrop-filter │     auf echten Hintergrund│
│  └──────────────────┘                          │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Schritt 3: Code-Änderungen in HeroSection.tsx

1. **Import hinzufügen:**
   ```tsx
   import { createPortal } from "react-dom";
   ```

2. **Position State hinzufügen:**
   ```tsx
   const [position, setPosition] = useState({ x: 0, y: 0 });
   const buttonRef = useRef<HTMLButtonElement>(null);
   ```

3. **Position beim Öffnen berechnen:**
   ```tsx
   const handleMouseEnter = () => {
     if (buttonRef.current) {
       const rect = buttonRef.current.getBoundingClientRect();
       setPosition({
         x: rect.left + rect.width / 2,
         y: rect.bottom + 8
       });
     }
     setIsOpen(true);
   };
   ```

4. **Dropdown via Portal rendern:**
   ```tsx
   {isOpen && createPortal(
     <motion.div
       style={{
         position: 'fixed',
         left: position.x,
         top: position.y,
         transform: 'translateX(-50%)',
         zIndex: 9999
       }}
     >
       <div className="glass rounded-2xl p-2 min-w-[280px]">
         {/* Dropdown Inhalt */}
       </div>
     </motion.div>,
     document.body
   )}
   ```

## Erwartetes Ergebnis

Nach dieser Änderung wird das Dropdown:
- Denselben milchigen, verschwommenen Glaseffekt haben wie die Navigation
- Den echten Seitenhintergrund (Hero-Bild, Grid-Muster) durch den Blur-Effekt zeigen
- Visuell konsistent mit der "100% Praxisnah" Box und der Navigation sein

## Dateien die geändert werden

| Datei | Änderung |
|-------|----------|
| `src/components/HeroSection.tsx` | Portal-Logik für Dropdown implementieren |
