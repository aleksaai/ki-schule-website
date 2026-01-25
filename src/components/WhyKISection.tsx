import { ArrowUpRight, Crown } from "lucide-react";
import { motion } from "framer-motion";
import blueOceanIcon from "@/assets/blue-ocean-icon.png";
import highIncomeIcon from "@/assets/high-income-icon.png";
import automationIcon from "@/assets/automation-icon.png";

const features = [
  {
    title: "Blue-Ocean Markt",
    description: "KI ist eine neue Innovation und es gibt am Markt mehr Anfragen als Angebote!",
    imageUrl: blueOceanIcon,
  },
  {
    title: "High-Income Skill",
    description: "Du arbeitest in einem zukunftssicheren Bereich und verkaufst hochpreisig.",
    imageUrl: highIncomeIcon,
  },
  {
    title: "Automation ist gefragt!",
    description: "Nahezu alle Branchen benötigen Unterstützung im Bereich KI!",
    imageUrl: automationIcon,
  },
];

interface FeatureCardProps {
  feature: typeof features[0];
  index: number;
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  return (
    <motion.div
      className="relative rounded-2xl p-6 lg:p-8 cursor-default text-center flex flex-col items-center overflow-hidden"
      style={{
        background: 'rgba(255, 255, 255, 0.65)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: `
          0 8px 32px rgba(0, 0, 0, 0.06),
          0 2px 8px rgba(0, 0, 0, 0.04),
          inset 0 1px 0 rgba(255, 255, 255, 0.9),
          inset 0 -1px 0 rgba(255, 255, 255, 0.3)
        `,
        border: '1px solid rgba(255, 255, 255, 0.7)',
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: `
          0 12px 40px rgba(102, 164, 255, 0.15),
          0 4px 12px rgba(0, 0, 0, 0.06),
          inset 0 1px 0 rgba(255, 255, 255, 1),
          inset 0 -1px 0 rgba(255, 255, 255, 0.4)
        `,
      }}
    >
      {/* Subtle blue glow accent */}
      <div 
        className="absolute -top-12 -right-12 w-32 h-32 opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsla(216, 100%, 70%, 0.5) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
      
      {/* Image - Larger size, centered */}
      <div className="relative mb-6 h-28 w-28">
        <img 
          src={feature.imageUrl} 
          alt={feature.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-foreground mb-3">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
};

const WhyKISection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Main gradient background */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 50% 40%, hsla(216, 100%, 70%, 0.12) 0%, transparent 60%),
              radial-gradient(ellipse 60% 50% at 80% 70%, hsla(216, 100%, 75%, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse 50% 40% at 20% 60%, hsla(216, 100%, 75%, 0.08) 0%, transparent 50%),
              linear-gradient(180deg, hsl(220 20% 97%) 0%, hsl(220 25% 96%) 50%, hsl(220 20% 97%) 100%)
            `,
          }}
        />
        
        {/* Subtle noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
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
            <Crown className="h-4 w-4 text-primary fill-primary" />
            <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">
              Deine Chance
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-4">
            Warum ein
            <br className="sm:hidden" />
            <span className="font-serif italic text-primary font-normal ml-2 sm:ml-3">
              KI-Agentur?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Weshalb du sogar ohne Vorerfahrung eine KI-Agentur starten solltest!
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
          <motion.button 
            className="btn-liquid-glass-accent px-7 py-4 rounded-full text-base font-semibold flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Erstgespräch Buchen</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 relative z-10" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyKISection;
