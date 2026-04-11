import { motion } from "framer-motion";
import { ArrowLeft, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/seo/SEO";
import { routeMeta } from "@/seo/routes";

const Impressum = () => {
  const meta = routeMeta["/impressum"];
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <SEO
        title={meta.title}
        description={meta.description}
        path="/impressum"
        robots={meta.robots}
      />
      {/* Background - matching main site */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, hsl(220 20% 97%) 0%, hsl(220 25% 94%) 50%, hsl(220 20% 96%) 100%)',
          }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(220 15% 70%) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(220 15% 70%) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />

        {/* Organic blur shapes */}
        <div className="absolute inset-0 max-w-[1920px] mx-auto overflow-hidden">
          <div 
            className="absolute -top-1/4 -right-1/4 w-[60%] h-[60%]"
            style={{
              background: 'radial-gradient(ellipse at center, hsla(216, 100%, 70%, 0.12) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(60px)',
            }}
          />
          <div 
            className="absolute bottom-0 -left-1/4 w-[50%] h-[50%]"
            style={{
              background: 'radial-gradient(ellipse at center, hsla(216, 100%, 70%, 0.08) 0%, transparent 65%)',
              borderRadius: '50%',
              filter: 'blur(80px)',
            }}
          />
        </div>
      </div>

      <div className="container relative mx-auto px-6 lg:px-8 py-12 lg:py-20">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="/"
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6">
            <Scale className="h-4 w-4 text-primary fill-primary" />
            <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">
              Rechtliches
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Impressum
          </h1>
          
          <p className="text-muted-foreground">
            Letzte Aktualisierung: 12.07.2025
          </p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div
            className="relative rounded-3xl p-8 lg:p-12 overflow-hidden"
            style={{
              background: "linear-gradient(145deg, hsl(var(--card) / 0.22) 0%, hsl(var(--card) / 0.08) 50%, hsl(var(--card) / 0.16) 100%)",
              backdropFilter: "blur(40px) saturate(180%)",
              WebkitBackdropFilter: "blur(40px) saturate(180%)",
              border: "1.5px solid hsl(var(--card) / 0.50)",
              boxShadow: `
                0 24px 64px hsl(var(--foreground) / 0.12),
                0 8px 24px hsl(var(--foreground) / 0.08),
                0 0 0 1px hsl(var(--card) / 0.3),
                inset 0 1px 0 hsl(var(--card) / 0.9),
                inset 0 -1px 0 hsl(var(--foreground) / 0.08)
              `,
            }}
          >
            {/* Top edge highlight */}
            <div
              className="absolute top-0 left-0 right-0 z-20 h-[2px]"
              style={{
                background: "linear-gradient(90deg, transparent 5%, hsl(var(--card) / 0.8) 30%, hsl(var(--card) / 1) 50%, hsl(var(--card) / 0.8) 70%, transparent 95%)",
              }}
            />

            <div className="relative z-10 space-y-10">
              {/* Angaben gemäß § 5 TMG */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Angaben gemäß § 5 TMG
                </h2>
                <div className="text-muted-foreground space-y-2">
                  <p className="font-semibold text-foreground">Spalevic Consulting Kft.</p>
                  <p>Lőcsei út 9/A</p>
                  <p>1147 Budapest, Hungary</p>
                </div>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <p>
                    <span className="font-medium text-foreground">Markenhinweis: </span>
                    Aleksa AI ist eine eingetragene Marke der Spalevic Consulting Kft.
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Beteiligungshinweis: </span>
                    DestinyMedia GmbH, Pengoro UG, Voico AI GmbH & Spalevic Consulting Kft. sind Tochtergesellschaften der Spalevic & Partner Holding Kft.
                  </p>
                </div>
              </section>

              {/* Kontakt */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Kontakt
                </h2>
                <div className="text-muted-foreground space-y-2">
                  <p>
                    <span className="font-medium text-foreground">Telefon: </span>
                    <a href="tel:+491607763741" className="hover:text-primary transition-colors">
                      +49 160 7763741
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-foreground">E-Mail: </span>
                    <a href="mailto:info@aleksa.ai" className="hover:text-primary transition-colors">
                      info@aleksa.ai
                    </a>
                  </p>
                </div>
              </section>

              {/* Vertreten durch */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Vertreten durch
                </h2>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Geschäftsführer (CEO): </span>
                  Aleksa Spalevic
                </p>
              </section>

              {/* Handelsregistereintrag */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Handelsregistereintrag
                </h2>
                <div className="text-muted-foreground space-y-2">
                  <p>
                    <span className="font-medium text-foreground">Handelsregister: </span>
                    Cg. 01-09-446084
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Registergericht: </span>
                    Amtsgericht Budapest
                  </p>
                  <p>
                    <span className="font-medium text-foreground">USt-IdNr.: </span>
                    HU32789793
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Steuernummer: </span>
                    32852954-2-42
                  </p>
                </div>
              </section>

              {/* Verantwortlich für den Inhalt */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </h2>
                <div className="text-muted-foreground space-y-1">
                  <p className="font-semibold text-foreground">Aleksa Spalevic</p>
                  <p>Révay utca 6. Fsz. 7. ajtó</p>
                  <p>1065 Budapest</p>
                  <p>Hungary</p>
                </div>
              </section>

              {/* Haftungsausschluss */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Haftungsausschluss
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Haftung für Inhalte
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Haftung für Links
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Urheberrecht
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Impressum;
