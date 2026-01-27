import { motion } from "framer-motion";
import { Check, X, Scale } from "lucide-react";
import logoImage from "@/assets/logo.png";

const kiSchuleFeatures = [
  "4x pro Woche Live Calls geleitet vom Main Coach",
  "KI-Cockpit: Dein Team steht dank deiner KI-Crew von Tag 1",
  "Sehr hoher Praxisbezug mit Money-First Approach",
  "Durch die KI-Schule finanzierte Live-Events in Budapest",
  "Sehr faires & flexibles Preismodell, ideal für Einsteiger",
];

const othersFeatures = [
  "Weniger Live Calls geleitet vom Main Coach",
  "Keine Entlastung durch eigene On-Demand KI-Mitarbeiter",
  "Viel zu viel Theorie. Wir wollen Geld verdienen, richtig?",
  "Keine vor Ort Events. Schlechtere Grundlage zum Netzwerken.",
  "Fragwürdiges Preismodell. Nicht geeignet für Anfänger.",
];

const ComparisonSection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background with subtle grid */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, hsl(220 20% 97%) 0%, hsl(220 25% 95%) 50%, hsl(220 20% 97%) 100%)",
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

      {/* Ambient glows */}
      <div
        className="absolute top-1/3 left-1/4 w-[40%] h-[50%] -translate-y-1/2"
        style={{
          background: "radial-gradient(ellipse at center, hsl(142 70% 50% / 0.08) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-[40%] h-[50%] -translate-y-1/2"
        style={{
          background: "radial-gradient(ellipse at center, hsl(0 70% 50% / 0.06) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container relative mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
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

        {/* Comparison Cards */}
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* KI-Schule Card - Positive */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Card Header */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <img src={logoImage} alt="KI-Schule" className="h-8 w-auto" />
              </div>
              
              {/* Glass Card */}
              <div
                className="rounded-2xl p-6 lg:p-8 h-full"
                style={{
                  background: "linear-gradient(145deg, hsl(var(--card) / 0.35) 0%, hsl(var(--card) / 0.15) 100%)",
                  backdropFilter: "blur(30px) saturate(180%)",
                  WebkitBackdropFilter: "blur(30px) saturate(180%)",
                  border: "1.5px solid hsl(142 70% 45% / 0.3)",
                  boxShadow: `
                    0 20px 50px hsl(142 70% 45% / 0.08),
                    0 8px 20px hsl(var(--foreground) / 0.06),
                    inset 0 1px 0 hsl(var(--card) / 0.9),
                    inset 0 -1px 0 hsl(var(--foreground) / 0.03)
                  `,
                }}
              >
                {/* Top edge shine */}
                <div
                  className="absolute top-0 left-[15%] right-[15%] h-px"
                  style={{
                    background: "linear-gradient(90deg, transparent, hsl(142 70% 60% / 0.4) 50%, transparent)",
                  }}
                />
                
                <ul className="space-y-5">
                  {kiSchuleFeatures.map((feature, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    >
                      <div 
                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                        style={{
                          background: "linear-gradient(135deg, hsl(142 70% 45%) 0%, hsl(142 70% 35%) 100%)",
                          boxShadow: "0 2px 8px hsl(142 70% 45% / 0.4)",
                        }}
                      >
                        <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-foreground font-medium leading-relaxed">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Others Card - Negative */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Card Header */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-lg font-serif italic text-muted-foreground">
                  Andere Anbieter
                </span>
              </div>
              
              {/* Glass Card */}
              <div
                className="rounded-2xl p-6 lg:p-8 h-full"
                style={{
                  background: "linear-gradient(145deg, hsl(var(--card) / 0.25) 0%, hsl(var(--card) / 0.10) 100%)",
                  backdropFilter: "blur(30px) saturate(180%)",
                  WebkitBackdropFilter: "blur(30px) saturate(180%)",
                  border: "1.5px solid hsl(var(--foreground) / 0.08)",
                  boxShadow: `
                    0 20px 50px hsl(var(--foreground) / 0.05),
                    0 8px 20px hsl(var(--foreground) / 0.04),
                    inset 0 1px 0 hsl(var(--card) / 0.7),
                    inset 0 -1px 0 hsl(var(--foreground) / 0.02)
                  `,
                }}
              >
                <ul className="space-y-5">
                  {othersFeatures.map((feature, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    >
                      <div 
                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                        style={{
                          background: "linear-gradient(135deg, hsl(0 65% 50% / 0.15) 0%, hsl(0 65% 45% / 0.1) 100%)",
                          border: "1.5px solid hsl(0 65% 50% / 0.3)",
                        }}
                      >
                        <X className="h-3.5 w-3.5 text-destructive/70" strokeWidth={2.5} />
                      </div>
                      <span className="text-muted-foreground leading-relaxed">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
