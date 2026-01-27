import { useState } from "react";
import { ArrowUpRight, Compass, TrendingUp, Rocket, Route } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import StepCard from "@/components/process/StepCard";
import onboardingVideo from "@/assets/onboarding-video.mov";
import umsatzImage from "@/assets/umsatz-image.jpg";
import netzwerkImage from "@/assets/netzwerk-image.jpg";

const steps = [
  {
    id: 1,
    label: "Schritt 1",
    shortTitle: "Onboarding",
    title: "Positionierung & Onboarding",
    description:
      "Im gemeinsamen Onboarding arbeiten wir direkt an deiner Positionierung. Wir besprechen im Detail deine Produktpalette, die du deinen Kunden anbieten wirst, sowie deine Nische und Zielgruppe – das Fundament für deinen Erfolg.",
    icon: Compass,
  },
  {
    id: 2,
    label: "Schritt 2",
    shortTitle: "Umsatz",
    title: "Fokus auf Umsatz",
    description:
      "Obwohl wir dich fachlich fit machen, ist unsere Nummer-eins-Priorität, dass du dich so schnell wie möglich mit deiner Selbstständigkeit unabhängig machst. Geld löst alle Probleme – deshalb fokussieren wir uns darauf, dass du schnell Umsatz generierst.",
    icon: TrendingUp,
  },
  {
    id: 3,
    label: "Schritt 3",
    shortTitle: "Skalierung",
    title: "Skalierung & Netzwerk",
    description:
      "Je erfolgreicher du wirst, desto mehr Zugang erhältst du zu unseren exklusiven Netzwerken. Du baust dein Team auf, automatisierst dein Business und wirst vom Selbstständigen zum Unternehmer – du arbeitest nicht mehr im, sondern am Unternehmen.",
    icon: Rocket,
  },
];

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Background elements - constrained for ultra-wide */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(225 18% 96%) 0%, hsl(225 20% 94%) 50%, hsl(225 18% 96%) 100%)",
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

        {/* Subtle blur orbs - constrained to center */}
        <div className="absolute inset-0 max-w-[1920px] mx-auto">
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
            <Route className="h-4 w-4 text-primary fill-primary" />
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
          className="relative isolate rounded-3xl p-8 lg:p-12 mb-14 max-w-6xl mx-auto overflow-hidden"
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

          {/* Top edge highlight */}
          <div
            className="absolute top-0 left-0 right-0 z-20 h-[2px]"
            style={{
              background:
                "linear-gradient(90deg, transparent 5%, hsl(var(--card) / 0.8) 30%, hsl(var(--card) / 1) 50%, hsl(var(--card) / 0.8) 70%, transparent 95%)",
            }}
          />

          {/* Content Area - Different layouts for mobile vs desktop */}
          <div className="relative z-10">
            {/* Desktop Layout: Side by side */}
            <div className="hidden lg:flex gap-12">
              {/* Media: Large Image/Video */}
              <div className="w-[55%] flex-shrink-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    className="relative"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Glow behind image */}
                    <div
                      className="absolute inset-0 z-0 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(circle at center, hsl(var(--primary) / 0.2) 0%, transparent 70%)",
                        filter: "blur(40px)",
                        transform: "scale(1.3)",
                      }}
                    />

                    {/* Glass Frame Container */}
                    <div
                      className="relative z-10 rounded-2xl overflow-hidden"
                      style={{
                        background:
                          "linear-gradient(145deg, hsl(var(--card) / 0.25) 0%, hsl(var(--card) / 0.10) 100%)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        border: "1.5px solid hsl(var(--card) / 0.6)",
                        boxShadow: `
                          0 16px 48px hsl(var(--foreground) / 0.12),
                          0 4px 16px hsl(var(--foreground) / 0.06),
                          inset 0 1px 0 hsl(var(--card) / 0.9),
                          inset 0 -1px 0 hsl(var(--foreground) / 0.04)
                        `,
                        padding: "8px",
                      }}
                    >
                      {/* Top edge shine */}
                      <div
                        className="absolute top-0 left-[10%] right-[10%] h-px z-20"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent, hsl(var(--card) / 0.9) 50%, transparent)",
                        }}
                      />

                      {/* Conditional content based on active step */}
                      {activeStep === 0 ? (
                        <AspectRatio ratio={4 / 3} className="rounded-xl overflow-hidden">
                          <video
                            src={onboardingVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                            style={{ transform: "scale(1.3)", objectPosition: "center center" }}
                          />
                        </AspectRatio>
                      ) : activeStep === 1 ? (
                        <AspectRatio ratio={4 / 3} className="rounded-xl overflow-hidden">
                          <img
                            src={netzwerkImage}
                            alt="Fokus auf Umsatz"
                            className="w-full h-full object-cover"
                          />
                        </AspectRatio>
                      ) : (
                        <AspectRatio ratio={4 / 3} className="rounded-xl overflow-hidden">
                          <img
                            src={umsatzImage}
                            alt="Skalierung & Netzwerk"
                            className="w-full h-full object-cover"
                          />
                        </AspectRatio>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Steps: All Steps */}
              <div className="w-[45%] flex flex-col gap-4 justify-center">
                {steps.map((step, index) => (
                  <StepCard
                    key={step.id}
                    step={step}
                    index={index}
                    isActive={activeStep === index}
                    onClick={() => setActiveStep(index)}
                  />
                ))}
              </div>
            </div>

            {/* Mobile Layout: Tabs with media below */}
            <div className="lg:hidden">
              {/* Step Tabs */}
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {steps.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(index)}
                    className={`flex-1 min-w-[100px] px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      activeStep === index
                        ? "bg-primary text-white shadow-lg"
                        : "glass text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {step.shortTitle || `Schritt ${index + 1}`}
                  </button>
                ))}
              </div>

              {/* Active Step Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Media */}
                  <div
                    className="relative z-10 rounded-2xl overflow-hidden mb-6"
                    style={{
                      background:
                        "linear-gradient(145deg, hsl(var(--card) / 0.25) 0%, hsl(var(--card) / 0.10) 100%)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      border: "1.5px solid hsl(var(--card) / 0.6)",
                      padding: "6px",
                    }}
                  >
                    {activeStep === 0 ? (
                      <AspectRatio ratio={16 / 9} className="rounded-xl overflow-hidden">
                        <video
                          src={onboardingVideo}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                          style={{ transform: "scale(1.3)", objectPosition: "center center" }}
                        />
                      </AspectRatio>
                    ) : activeStep === 1 ? (
                      <AspectRatio ratio={16 / 9} className="rounded-xl overflow-hidden">
                        <img
                          src={netzwerkImage}
                          alt="Fokus auf Umsatz"
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                    ) : (
                      <AspectRatio ratio={16 / 9} className="rounded-xl overflow-hidden">
                        <img
                          src={umsatzImage}
                          alt="Skalierung & Netzwerk"
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                    )}
                  </div>

                  {/* Step Info */}
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                        {(() => {
                          const IconComponent = steps[activeStep].icon;
                          return <IconComponent className="w-5 h-5 text-primary" />;
                        })()}
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        {steps[activeStep].title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {steps[activeStep].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.a
            href="https://cal.com/aleksa-ai/erstgesprach"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-liquid-glass-accent px-7 py-4 rounded-full text-base font-semibold flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Jetzt Starten</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 relative z-10" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
