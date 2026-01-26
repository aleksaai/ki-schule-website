import { useState } from "react";
import { ArrowUpRight, Compass, TrendingUp, Rocket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    id: 1,
    label: "Schritt 1",
    title: "Positionierung & Onboarding",
    description:
      "Im gemeinsamen Onboarding arbeiten wir direkt an deiner Positionierung. Wir besprechen im Detail deine Produktpalette, die du deinen Kunden anbieten wirst, sowie deine Nische und Zielgruppe – das Fundament für deinen Erfolg.",
    icon: Compass,
  },
  {
    id: 2,
    label: "Schritt 2",
    title: "Fokus auf Umsatz",
    description:
      "Obwohl wir dich fachlich fit machen, ist unsere Nummer-eins-Priorität, dass du dich so schnell wie möglich mit deiner Selbstständigkeit unabhängig machst. Geld löst alle Probleme – deshalb fokussieren wir uns darauf, dass du schnell Umsatz generierst.",
    icon: TrendingUp,
  },
  {
    id: 3,
    label: "Schritt 3",
    title: "Skalierung & Netzwerk",
    description:
      "Je erfolgreicher du wirst, desto mehr Zugang erhältst du zu unseren exklusiven Netzwerken. Du baust dein Team auf, automatisierst dein Business und wirst vom Selbstständigen zum Unternehmer – du arbeitest nicht mehr im, sondern am Unternehmen.",
    icon: Rocket,
  },
];

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const currentStep = steps[activeStep];
  const Icon = currentStep.icon;

  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Background elements - same as WhyKI Section */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(220 20% 97%) 0%, hsl(220 20% 96%) 50%, hsl(220 20% 97%) 100%)",
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
            backgroundSize: "48px 48px",
          }}
        />

        {/* Subtle blur orbs */}
        <div
          className="absolute top-1/4 right-1/4 w-[45%] h-[45%]"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(var(--foreground) / 0.04) 0%, transparent 62%)",
            borderRadius: "50%",
            filter: "blur(50px)",
          }}
        />
      </div>

      <div className="container relative mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6">
            <Compass className="h-4 w-4 text-primary fill-primary" />
            <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">
              Dein Weg
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-4">
            So bringen wir dich
            <span className="font-serif italic text-primary font-normal ml-2 sm:ml-3">
              ans Ziel
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Unser bewährter 3-Schritte-Prozess für deinen Erfolg
          </p>
        </motion.div>

        {/* Main Glass Container - Taller with more whitespace */}
        <motion.div
          className="relative isolate rounded-3xl p-10 lg:p-16 lg:py-20 mb-14 max-w-5xl mx-auto overflow-hidden"
          style={{
            background:
              "linear-gradient(145deg, hsl(var(--card) / 0.22) 0%, hsl(var(--card) / 0.08) 50%, hsl(var(--card) / 0.16) 100%)",
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Premium refraction layers */}
          <div
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              background: `
                radial-gradient(ellipse 150% 100% at 15% -10%, hsl(var(--card) / 0.6) 0%, transparent 50%),
                radial-gradient(ellipse 100% 70% at 95% 20%, hsl(var(--card) / 0.3) 0%, transparent 55%),
                radial-gradient(ellipse 80% 50% at 50% 100%, hsl(var(--primary) / 0.05) 0%, transparent 60%),
                linear-gradient(180deg, transparent 0%, hsl(var(--foreground) / 0.03) 100%)
              `,
            }}
          />

          {/* Top edge highlight - premium shine */}
          <div
            className="absolute top-0 left-0 right-0 z-20 h-[2px]"
            style={{
              background:
                "linear-gradient(90deg, transparent 5%, hsl(var(--card) / 0.8) 30%, hsl(var(--card) / 1) 50%, hsl(var(--card) / 0.8) 70%, transparent 95%)",
            }}
          />

          {/* Subtle ambient glow */}
          <div
            className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[60%] h-32 z-0"
            style={{
              background: "radial-gradient(ellipse at center, hsl(var(--primary) / 0.08) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          {/* Step Tabs - Glass Style */}
          <div className="relative z-10 flex flex-wrap justify-center gap-4 mb-16">
            {steps.map((step, index) => (
              <motion.button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className="relative px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden text-white"
                style={{
                  background: activeStep === index
                    ? "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(216 100% 60%) 100%)"
                    : "linear-gradient(145deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.65) 100%)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: activeStep === index
                    ? "1.5px solid hsl(var(--primary) / 0.6)"
                    : "1px solid rgba(255, 255, 255, 0.9)",
                  boxShadow: activeStep === index
                    ? `
                        0 0 20px hsl(var(--primary) / 0.35),
                        0 8px 24px hsl(var(--primary) / 0.25),
                        inset 0 1px 0 rgba(255, 255, 255, 0.35)
                      `
                    : `
                        0 4px 16px rgba(0, 0, 0, 0.06),
                        inset 0 1px 0 rgba(255, 255, 255, 0.95),
                        inset 0 -1px 0 rgba(0, 0, 0, 0.03)
                      `,
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Top edge shine */}
                <div
                  className="absolute top-0 left-[10%] right-[10%] h-px z-0"
                  style={{
                    background: activeStep === index
                      ? "linear-gradient(90deg, transparent, rgba(255,255,255,0.5) 50%, transparent)"
                      : "linear-gradient(90deg, transparent, rgba(255,255,255,0.9) 50%, transparent)",
                  }}
                />
                <span className="relative z-10">{step.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Content Area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-24"
              initial={{ opacity: 0, y: 25, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Icon/Graphic - Larger Premium Glass */}
              <div className="flex-shrink-0 relative pointer-events-none">
                {/* Glow behind icon */}
                <div
                  className="absolute inset-0 z-0 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at center, hsl(var(--primary) / 0.25) 0%, transparent 70%)",
                    filter: "blur(40px)",
                    transform: "scale(1.8)",
                  }}
                />
                <div
                  className="relative z-10 flex items-center justify-center w-48 h-48 lg:w-72 lg:h-72 rounded-3xl"
                  style={{
                    background: "linear-gradient(145deg, hsl(var(--primary) / 0.12) 0%, hsl(var(--primary) / 0.06) 100%)",
                    border: "1.5px solid hsl(var(--primary) / 0.2)",
                    boxShadow: `
                      0 16px 48px hsl(var(--primary) / 0.12),
                      inset 0 1px 0 hsl(var(--card) / 0.7),
                      inset 0 -1px 0 hsl(var(--foreground) / 0.04)
                    `,
                  }}
                >
                  <Icon className="w-24 h-24 lg:w-36 lg:h-36 text-primary" strokeWidth={1} />
                </div>
              </div>

              {/* Text Content - Smaller */}
              <div className="flex-1 text-center lg:text-left lg:pl-8">
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4 tracking-tight">
                  {currentStep.title}
                </h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed max-w-md">
                  {currentStep.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.button
            className="btn-liquid-glass-accent px-7 py-4 rounded-full text-base font-semibold flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Jetzt Starten</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 relative z-10" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
