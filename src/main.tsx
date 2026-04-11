import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

// Hinweis zum Prerendering: Wir nutzen bewusst IMMER `createRoot`, nicht
// `hydrateRoot`. Das Prerender-Script speichert pro Route ein statisches
// HTML mit vollständigem Body (Google/Social-Crawler lesen SEO-Inhalte).
// Wenn ein echter Browser die Seite lädt, verwirft React den vorher
// gerenderten Body und rendert clientseitig neu — das vermeidet
// Hydration-Mismatches durch framer-motion Animationen und Lenis Smooth
// Scroll. SEO bleibt davon unberührt, weil der Crawler die Seite sieht,
// bevor JavaScript ausgeführt wird.
createRoot(container).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
);
