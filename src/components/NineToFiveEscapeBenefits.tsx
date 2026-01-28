import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ntfBenefit1 from "@/assets/ntf-benefit-1.png";
import ntfBenefit2 from "@/assets/ntf-benefit-2.png";
import ntfBenefit3 from "@/assets/ntf-benefit-3.png";

const features = [
  {
    title: "Kein Risiko, volle Kontrolle",
    description: "Baue dein KI-Business nebenbei auf, während du weiter dein Gehalt bekommst. Erst kündigen, wenn dein Einkommen steht.",
    imageUrl: ntfBenefit2,
  },
  {
    title: "Schneller Skillaufbau",
    description: "Lerne in wenigen Wochen die gefragtesten KI-Skills. Deine Berufserfahrung wird dabei zum wertvollen Vorteil.",
    imageUrl: ntfBenefit1,
  },
  {
    title: "Raus aus dem Hamsterrad",
    description: "Verdiene mehr als in deinem Job — mit flexiblen Arbeitszeiten, ortsunabhängig und selbstbestimmt.",
    imageUrl: ntfBenefit3,
  },
];

interface FeatureCardProps {
  feature: typeof features[0];
  index: number;
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  return (
    <motion.div
      className="relative isolate rounded-2xl p-6 lg:p-8 cursor-default text-center flex flex-col items-center overflow-hidden"
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
      transition={{ duration: 0.5, delay: index * 0.15 }}
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

      {/* Top edge specular highlight */}
      <div
        className="absolute top-0 left-0 right-0 z-20 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(var(--card) / 0.75) 50%, transparent)",
        }}
      />
      
      {/* Image */}
      <div className="relative mb-6 h-28 w-28 z-10">
        <img 
          src={feature.imageUrl} 
          alt={feature.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-foreground mb-3 relative z-10">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
        {feature.description}
      </p>
    </motion.div>
  );
};

const NineToFiveEscapeBenefits = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient background */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, hsl(220 20% 97%) 0%, hsl(220 20% 96%) 50%, hsl(220 20% 97%) 100%)',
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
        
        {/* Subtle blur orbs for depth */}
        <div className="absolute inset-0 max-w-[1920px] mx-auto">
          <div 
            className="absolute top-1/3 left-1/4 w-[50%] h-[50%]"
            style={{
              background:
                "radial-gradient(ellipse at center, hsl(var(--foreground) / 0.05) 0%, transparent 62%)",
              borderRadius: '50%',
              filter: 'blur(60px)',
            }}
          />
          <div 
            className="absolute bottom-1/4 right-1/3 w-[40%] h-[40%]"
            style={{
              background:
                "radial-gradient(ellipse at center, hsl(var(--foreground) / 0.04) 0%, transparent 62%)",
              borderRadius: '50%',
              filter: 'blur(50px)',
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
            <Sparkles className="h-4 w-4 text-primary fill-primary" />
            <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">
              Deine Vorteile
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-4">
            Warum jetzt
            <br className="sm:hidden" />
            <span className="font-serif italic text-primary font-normal ml-2 sm:ml-3">
              wechseln?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Dein 9-to-5 Job muss nicht deine Zukunft sein — nutze KI als deinen Ausweg.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.a
            href="https://cal.com/aleksa-ai/erstgesprach"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-liquid-glass-accent px-7 py-4 rounded-full text-base font-semibold flex items-center gap-2 group w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Jetzt durchstarten</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 relative z-10" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default NineToFiveEscapeBenefits;
