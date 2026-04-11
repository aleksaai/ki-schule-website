import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SEO } from "@/seo/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <SEO
        title="Seite nicht gefunden | KI-Schule"
        description="Die angeforderte Seite existiert nicht. Zurück zur Startseite von KI-Schule."
        path={location.pathname}
        robots="noindex,follow"
      />
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Seite nicht gefunden</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Zurück zur Startseite
        </a>
      </div>
    </div>
  );
};

export default NotFound;
