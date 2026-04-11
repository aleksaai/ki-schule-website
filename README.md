# KI-Schule

Die offizielle Website der **KI-Schule** — die #1 KI-Community im DACH-Raum für Personen, die KI lernen und damit ein Business aufbauen wollen.

## Stack

- **Vite 5** + **React 18** + **TypeScript**
- **Tailwind CSS 3** + **shadcn/ui**
- **react-router-dom v6** (10 Routes)
- **framer-motion** (Animationen)
- **@react-three/fiber** + **drei** (3D-Komponenten)
- **@studio-freight/lenis** (Smooth Scrolling)

## Lokale Entwicklung

Voraussetzung: Node.js (18+) und npm.

```bash
npm install
npm run dev
```

Dev-Server läuft auf `http://localhost:8080`.

## Verfügbare Scripts

| Script | Was es tut |
|--------|------------|
| `npm run dev` | Vite Dev-Server (Port 8080, HMR) |
| `npm run build` | Production Build nach `dist/` |
| `npm run build:dev` | Build im Development-Mode |
| `npm run preview` | Preview des Production Builds lokal |
| `npm run lint` | ESLint über das ganze Projekt |
| `npm run test` | Vitest Run (single pass) |
| `npm run test:watch` | Vitest im Watch-Mode |

## Routing

10 Routes, alle in `src/App.tsx` registriert:

- `/` — Landing Page
- `/community` — KI-Schule Community
- `/young-founder` — Young Founder Program
- `/agency-switcher` — Agency Switcher
- `/nine-to-five` — 9-to-5 Escape
- `/coming-soon` — Coming Soon Placeholder
- `/agb` — AGB
- `/impressum` — Impressum
- `/datenschutz` — Datenschutz
- `*` — 404 Not Found

## Deployment

Hosting läuft über **Netlify**. Production Build wird via `npm run build` erzeugt und in `dist/` abgelegt.

## Brand & Design

- **Accent Color:** Sky Blue `#66A4FF`
- **Aesthetic:** "Liquid Glass" (`.glass` / `.glass-card` Tailwind-Klassen)
- **Hintergrund:** 48px Grid Pattern
- **Typo:** Inter (Headlines + Body), Serif Italic für Akzent-Wörter
- **Color Mode:** Light

## Repo

GitHub: [`aleksaai/ki-schule`](https://github.com/aleksaai/ki-schule)
