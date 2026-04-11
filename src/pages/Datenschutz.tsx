import { motion } from "framer-motion";
import { ArrowLeft, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/seo/SEO";
import { routeMeta } from "@/seo/routes";

const Datenschutz = () => {
  const meta = routeMeta["/datenschutz"];
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <SEO
        title={meta.title}
        description={meta.description}
        path="/datenschutz"
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
            <Shield className="h-4 w-4 text-primary fill-primary" />
            <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">
              Rechtliches
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Datenschutzerklärung
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
              {/* 1. Allgemeine Hinweise */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  1. Allgemeine Hinweise und Pflichtinformationen
                </h2>
                <p className="text-muted-foreground mb-4">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <div className="text-muted-foreground space-y-1 mb-4">
                  <p className="font-semibold text-foreground">Spalevic Consulting Kft.</p>
                  <p>Lőcsei út 9/A</p>
                  <p>1147 Budapest, Hungary</p>
                </div>
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

              {/* 2. Erhebung und Speicherung */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  2. Erhebung und Speicherung personenbezogener Daten
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      2.1 Aufruf unserer Website
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sog. Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:
                    </p>
                    <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                      <li>• IP-Adresse des anfragenden Rechners</li>
                      <li>• Datum und Uhrzeit des Zugriffs</li>
                      <li>• Name und URL der abgerufenen Datei</li>
                      <li>• Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                      <li>• Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      2.2 Kontaktformular und Newsletter-Anmeldung
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                    </p>
                  </div>
                </div>
              </section>

              {/* 3. Analyse-Tools */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  3. Analyse-Tools und Tools von Drittanbietern
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      3.1 Google Analytics
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Unsere Website nutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited. Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website durch Sie ermöglichen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      3.2 Facebook Pixel (Meta Pixel)
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Wir verwenden auf unserer Website das "Facebook Pixel" der Meta Platforms Ireland Ltd. Das Pixel ermöglicht es uns, Ihr Verhalten nachzuverfolgen, nachdem Sie auf eine Facebook- oder Instagram-Werbeanzeige geklickt haben.
                    </p>
                  </div>
                </div>
              </section>

              {/* 4. Hosting */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  4. Hosting
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Unsere Website wird von Framer gehostet. Dabei kann es auch zu Datenübertragungen in die USA kommen.
                </p>
              </section>

              {/* 5. Externe Dienstleister */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  5. Externe Dienstleister
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Projektmanagement-Tool "awork"
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Wir nutzen awork (awork GmbH) für die gemeinsame Projektplanung und -durchführung mit unseren Kunden.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      CRM-System "Pipedrive"
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Wir nutzen Pipedrive (Pipedrive OÜ) zur Verwaltung unserer Kundenkontakte (B2B). In diesem CRM speichern wir Kontaktinformationen, Kommunikation und Vertragsdetails.
                    </p>
                  </div>
                </div>
              </section>

              {/* 6. Speicherdauer */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  6. Speicherdauer
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Wir speichern Ihre personenbezogenen Daten nur so lange, wie es zur Erreichung der jeweiligen Zwecke erforderlich ist oder wie es die gesetzlichen Aufbewahrungsfristen vorsehen.
                </p>
              </section>

              {/* 7. Ihre Rechte */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  7. Ihre Rechte als betroffene Person
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Sie haben das Recht auf:
                </p>
                <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                  <li>• Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten</li>
                  <li>• Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten</li>
                  <li>• Löschung Ihrer bei uns gespeicherten personenbezogenen Daten</li>
                  <li>• Einschränkung der Verarbeitung Ihrer Daten</li>
                  <li>• Widerspruch gegen die Verarbeitung Ihrer Daten</li>
                  <li>• Datenübertragbarkeit</li>
                </ul>
              </section>

              {/* 8. Datensicherheit */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  8. Datensicherheit
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird.
                </p>
              </section>

              {/* 9. Aktualisierung */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  9. Aktualisierung und Änderung dieser Datenschutzerklärung
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Diese Datenschutzerklärung ist aktuell gültig und wurde zuletzt am 12.07.2025 aktualisiert. Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht.
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Datenschutz;
