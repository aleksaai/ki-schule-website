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

        {/* Main Glass Container */}
        <motion.div
          className="relative isolate rounded-3xl p-6 lg:p-10 mb-14 max-w-5xl mx-auto overflow-hidden"
          style={{
            background:
              "linear-gradient(145deg, hsl(var(--card) / 0.16) 0%, hsl(var(--card) / 0.06) 55%, hsl(var(--card) / 0.12) 100%)",
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",
            border: "1px solid hsl(var(--card) / 0.40)",
            boxShadow: `
              0 18px 52px hsl(var(--foreground) / 0.10),
              0 6px 18px hsl(var(--foreground) / 0.06),
              inset 0 1px 0 hsl(var(--card) / 0.85),
              inset 0 -1px 0 hsl(var(--foreground) / 0.07)
            `,
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Inner refraction layer */}
          <div
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(ellipse 140% 90% at 18% 0%, hsl(var(--card) / 0.55) 0%, transparent 58%), radial-gradient(ellipse 120% 80% at 92% 18%, hsl(var(--card) / 0.22) 0%, transparent 62%), linear-gradient(180deg, transparent 0%, hsl(var(--foreground) / 0.05) 100%)",
              opacity: 0.35,
            }}
          />

          {/* Top edge highlight */}
          <div
            className="absolute top-0 left-0 right-0 z-20 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, hsl(var(--card) / 0.75) 50%, transparent)",
            }}
          />

          {/* Step Tabs */}
          <div className="relative z-10 flex flex-wrap justify-center gap-3 mb-10">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeStep === index
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-background/50 text-muted-foreground hover:bg-background/80 hover:text-foreground"
                }`}
              >
                {step.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon/Graphic */}
              <div className="flex-shrink-0 flex items-center justify-center w-32 h-32 lg:w-44 lg:h-44 rounded-2xl bg-primary/10">
                <Icon className="w-16 h-16 lg:w-24 lg:h-24 text-primary" strokeWidth={1.5} />
              </div>

              {/* Text Content */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {currentStep.title}
                </h3>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
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
