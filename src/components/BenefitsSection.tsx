import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

// Import icons
import certificateIcon from "@/assets/icons/certificate-icon.png";
import aiTeamIcon from "@/assets/icons/ai-team-icon.png";
import blueprintIcon from "@/assets/icons/blueprint-icon.png";
import videoIcon from "@/assets/icons/video-icon.png";
import livecallIcon from "@/assets/icons/livecall-icon.png";

const benefits = [
  {
    id: 1,
    title: "KI-Zertifikate",
    description: "Erhalte anerkannte Zertifikate für deine KI-Kompetenzen und etabliere dich als Experte in deinem Bereich.",
    icon: certificateIcon,
    colSpan: 1,
  },
  {
    id: 2,
    title: "Zugang zu deinen eigenen KI-Mitarbeitern",
    description: "Du bekommst Zugang zu unserem digitalen KI-Cockpit, bei welchem deine zukünftigen KI-Mitarbeiter bereits auf dich warten! Dein eigenes Team ab Day 1!",
    icon: aiTeamIcon,
    colSpan: 2,
    isLarge: true,
  },
  {
    id: 3,
    title: "Blueprints & Ressourcen",
    description: "Nutze n8n & make.com Templates sowie Vertragsvorlagen & mehr!",
    icon: blueprintIcon,
    colSpan: 1,
  },
  {
    id: 4,
    title: "Kurs- & Videomaterial",
    description: "Bei uns findest du ausführliche Tutorials zu KI & Automation Themen.",
    icon: videoIcon,
    colSpan: 1,
  },
  {
    id: 5,
    title: "4 Live Calls pro Woche!",
    description: "Bei den Live Calls kannst du deine Fragen stellen und unterstützt werden!",
    icon: livecallIcon,
    colSpan: 1,
  },
];

interface BenefitCardProps {
  benefit: typeof benefits[0];
  index: number;
}

const BenefitCard = ({ benefit, index }: BenefitCardProps) => {
  return (
    <motion.div
      className={`glass-card rounded-2xl p-6 lg:p-8 cursor-default flex flex-col ${
        benefit.isLarge 
          ? "md:col-span-2 md:flex-row md:items-center md:gap-8" 
          : "items-center text-center"
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Icon */}
      <motion.div 
        className={`relative mb-6 flex items-center justify-center ${
          benefit.isLarge 
            ? "h-48 w-48 md:h-56 md:w-56 md:mb-0 flex-shrink-0" 
            : "h-32 w-32"
        }`}
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.img 
          src={benefit.icon} 
          alt={benefit.title}
          className="w-full h-full object-contain"
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
        />
      </motion.div>

      {/* Content */}
      <div className={benefit.isLarge ? "flex-1" : ""}>
        <h3 className={`font-bold text-white mb-3 ${
          benefit.isLarge ? "text-2xl md:text-3xl" : "text-lg"
        }`}>
          {benefit.title}
        </h3>
        <p className={`text-white/50 leading-relaxed ${
          benefit.isLarge ? "text-base md:text-lg" : "text-sm"
        }`}>
          {benefit.description}
        </p>
      </div>
    </motion.div>
  );
};

const BenefitsSection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#1a1a1f] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #1a1a1f 0%, #16161a 50%, #1a1a1f 100%)',
          }}
        />
        
        {/* Dot grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Ambient glow */}
        <motion.div 
          className="absolute top-1/3 left-1/4 w-[60%] h-[60%]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(60, 60, 70, 0.2) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
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
            <Sparkles className="h-4 w-4 text-white fill-white" />
            <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">
              Deine Vorteile
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-4">
            Was dich
            <span className="font-serif italic text-white/90 font-normal ml-2 sm:ml-3">
              erwartet
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Alles was du brauchst, um deine KI-Agentur erfolgreich aufzubauen
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.id} benefit={benefit} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
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

export default BenefitsSection;
