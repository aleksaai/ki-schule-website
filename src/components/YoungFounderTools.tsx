import { motion } from "framer-motion";
import { Wrench } from "lucide-react";
import toolsBgVideo from "@/assets/tools-bg.mp4";

const toolIcons = [
  {
    src: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/a13d1acfd046f503f987c1c95af582c8_low_res_Claude.png",
    alt: "Claude",
  },
  {
    src: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c2c4a538c2d42a8dc0927d7d6530d125_low_res_ChatGPT___Liquid_Glass__Default_.png",
    alt: "ChatGPT",
  },
  {
    src: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/9e80c50a5802d3b0a7ec66f3fe4ce348_low_res_Finder.png",
    alt: "Finder",
  },
  {
    src: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/6d26d432bd65c522b0708185c0768ec3_low_res_Maps.png",
    alt: "Maps",
  },
  {
    src: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/7c59c945731aecf4f91eb8c2c5f867ce_low_res_Safari.png",
    alt: "Safari",
  },
  {
    src: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/b7f24edc7183f63dbe34c1943bef2967_low_res_Steam___Liquid_Glass__Default_.png",
    alt: "Steam",
  },
];

const GlassIcon = ({ icon, index }: { icon: typeof toolIcons[0]; index: number }) => {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div
        className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2"
        style={{
          boxShadow: "0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Glass layers */}
        <div 
          className="absolute inset-0 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        />
        <div 
          className="absolute inset-0 rounded-2xl"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 50%)",
          }}
        />
        <div 
          className="absolute inset-[1px] rounded-2xl"
          style={{
            border: "1px solid rgba(255,255,255,0.3)",
            background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%)",
          }}
        />
        
        {/* Icon */}
        <div className="relative z-10 w-full h-full flex items-center justify-center p-3">
          <img 
            src={icon.src} 
            alt={icon.alt}
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <span className="text-xs text-white/80 font-medium whitespace-nowrap">{icon.alt}</span>
      </div>
    </motion.div>
  );
};

const YoungFounderTools = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={toolsBgVideo} type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />
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
          <div className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6">
            <Wrench className="h-4 w-4 text-primary fill-primary/20" />
            <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">
              Deine Werkzeuge
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-4">
            Lerne die
            <span className="font-serif italic text-primary font-normal ml-2 sm:ml-3">
              Top-Tools
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            Du lernst, mit den besten KI-Tools zu arbeiten und für Unternehmen Automatisierungen & KI-Systeme zu bauen.
          </p>
        </motion.div>

        {/* Glass Dock */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div 
            className="relative rounded-3xl p-4 sm:p-6"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
              backdropFilter: "blur(30px)",
              WebkitBackdropFilter: "blur(30px)",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
            }}
          >
            {/* Top edge shine */}
            <div 
              className="absolute top-0 left-4 right-4 h-px"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5) 50%, transparent)",
              }}
            />
            
            {/* Icons */}
            <div className="flex items-center gap-3 sm:gap-4">
              {toolIcons.map((icon, index) => (
                <GlassIcon key={icon.alt} icon={icon} index={index} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom text */}
        <motion.p
          className="text-center text-white/50 text-sm mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          + viele weitere Tools, die du meistern wirst
        </motion.p>
      </div>
    </section>
  );
};

export default YoungFounderTools;
