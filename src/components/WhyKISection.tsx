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
      className="glass-card rounded-2xl p-6 lg:p-8 cursor-default text-center flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
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
        {/* Base gradient background */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, hsl(220 20% 97%) 0%, hsl(220 20% 96%) 50%, hsl(220 20% 97%) 100%)',
          }}
        />
        
        {/* Grid pattern - same as Hero Section */}
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
        <div 
          className="absolute top-1/3 left-1/4 w-[50%] h-[50%]"
          style={{
            background: 'radial-gradient(ellipse at center, hsla(216, 100%, 70%, 0.08) 0%, transparent 60%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/3 w-[40%] h-[40%]"
          style={{
            background: 'radial-gradient(ellipse at center, hsla(216, 100%, 75%, 0.06) 0%, transparent 60%)',
            borderRadius: '50%',
            filter: 'blur(50px)',
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
