import { motion } from "framer-motion";
import { Check, X, Scale } from "lucide-react";
import logoImage from "@/assets/logo.png";

const comparisonData = [
  {
    kiSchule: "4x pro Woche Live Calls geleitet vom Main Coach",
    andere: "Weniger Live Calls geleitet vom Main Coach",
  },
  {
    kiSchule: "KI-Cockpit: Dein Team steht dank deiner KI-Crew von Tag 1",
    andere: "Keine Entlastung durch eigene On-Demand KI-Mitarbeiter",
  },
  {
    kiSchule: "Sehr hoher Praxisbezug mit Money-First Approach",
    andere: "Viel zu viel Theorie. Wir wollen Geld verdienen, richtig?",
  },
  {
    kiSchule: "Durch die KI-Schule finanzierte Live-Events in Budapest",
    andere: "Keine vor Ort Events. Schlechtere Grundlage zum Netzwerken.",
  },
  {
    kiSchule: "Sehr faires & flexibles Preismodell, ideal für Einsteiger",
    andere: "Fragwürdiges Preismodell. Nicht geeignet für Anfänger.",
  },
];

const ComparisonSection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background with subtle grid */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, hsl(220 20% 97%) 0%, hsl(225 22% 95%) 50%, hsl(220 20% 97%) 100%)",
        }}
      />
      
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground) / 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground) / 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 w-[60%] h-[60%] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: "radial-gradient(ellipse at center, hsl(216 100% 70% / 0.08) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container relative mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6">
            <Scale className="h-4 w-4 text-primary fill-primary" />
            <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">
              Vergleich
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Warum die <span className="font-serif italic text-primary font-normal">KI-Schule?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lass uns anschauen, weshalb wir die beste Wahl sind!
          </p>
        </motion.div>

        {/* Single Glass Table */}
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(145deg, hsl(var(--card) / 0.35) 0%, hsl(var(--card) / 0.12) 55%, hsl(var(--card) / 0.20) 100%)",
              backdropFilter: "blur(40px) saturate(180%)",
              WebkitBackdropFilter: "blur(40px) saturate(180%)",
              border: "1.5px solid hsl(var(--card) / 0.7)",
              boxShadow: `
                0 25px 80px hsl(var(--foreground) / 0.12),
                0 10px 30px hsl(var(--foreground) / 0.08),
                inset 0 1px 0 hsl(var(--card) / 0.95),
                inset 0 -1px 0 hsl(var(--foreground) / 0.03)
              `,
            }}
          >
            {/* Top edge shine */}
            <div
              className="absolute top-0 left-[10%] right-[10%] h-px z-20"
              style={{
                background: "linear-gradient(90deg, transparent, hsl(var(--card) / 0.9) 50%, transparent)",
              }}
            />

            {/* Table Header */}
            <div 
              className="grid grid-cols-2"
              style={{
                borderBottom: "1px solid hsl(var(--foreground) / 0.08)",
              }}
            >
              {/* KI-Schule Header */}
              <div 
                className="flex items-center justify-center gap-3 py-5 px-6"
                style={{
                  background: "linear-gradient(180deg, hsl(var(--primary) / 0.12) 0%, hsl(var(--primary) / 0.05) 100%)",
                  borderRight: "1px solid hsl(var(--foreground) / 0.08)",
                }}
              >
                <img src={logoImage} alt="KI-Schule" className="h-7 w-auto" />
              </div>
              
              {/* Andere Header */}
              <div className="flex items-center justify-center py-5 px-6">
                <span className="text-base font-serif italic text-muted-foreground">
                  Andere Anbieter
                </span>
              </div>
            </div>

            {/* Table Rows */}
            {comparisonData.map((row, index) => (
              <motion.div 
                key={index}
                className="grid grid-cols-2"
                style={{
                  borderBottom: index < comparisonData.length - 1 ? "1px solid hsl(var(--foreground) / 0.06)" : "none",
                }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
              >
                {/* KI-Schule Cell */}
                <div 
                  className="flex items-start gap-4 py-5 px-6"
                  style={{
                    background: "hsl(var(--primary) / 0.03)",
                    borderRight: "1px solid hsl(var(--foreground) / 0.06)",
                  }}
                >
                  <div 
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{
                      background: "hsl(var(--primary))",
                      boxShadow: "0 2px 8px hsl(var(--primary) / 0.35)",
                    }}
                  >
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-foreground text-sm lg:text-base leading-relaxed">
                    {row.kiSchule}
                  </span>
                </div>

                {/* Andere Cell */}
                <div className="flex items-start gap-4 py-5 px-6">
                  <div 
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{
                      background: "hsl(var(--foreground) / 0.08)",
                      border: "1px solid hsl(var(--foreground) / 0.12)",
                    }}
                  >
                    <X className="h-3 w-3 text-muted-foreground" strokeWidth={2.5} />
                  </div>
                  <span className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                    {row.andere}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
