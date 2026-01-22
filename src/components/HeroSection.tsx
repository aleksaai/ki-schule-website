import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import kiIcon from "@/assets/ki-icon.png";

// Placeholder until new founder image is uploaded
const founderImage = "/placeholder.svg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[#1a1a1f] overflow-hidden">
      {/* Dark gradient background with organic curved shapes */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #1a1a1f 0%, #2a2a32 50%, #1f1f24 100%)',
          }}
        />
        
        {/* Organic curved shapes like in the reference */}
        <motion.div 
          className="absolute -top-1/4 -right-1/4 w-[80%] h-[80%]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(60, 60, 68, 0.4) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.6, 0.5],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div 
          className="absolute top-1/3 -left-1/4 w-[70%] h-[70%]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(50, 50, 58, 0.35) 0%, transparent 65%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
          }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.4, 0.5, 0.4],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        <motion.div 
          className="absolute -bottom-1/4 right-1/4 w-[60%] h-[60%]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(55, 55, 62, 0.3) 0%, transparent 60%)',
            borderRadius: '50%',
            filter: 'blur(70px)',
          }}
          animate={{
            scale: [1, 1.06, 1],
            opacity: [0.35, 0.45, 0.35],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>
      
      {/* Dot grid pattern - subtle tech/notebook aesthetic */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
      
      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative mx-auto px-6 lg:px-8">
        {/* Navigation with glass effect */}
        <motion.nav 
          className="flex justify-center py-6 lg:py-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass rounded-full px-3 py-2 flex items-center gap-2">
            <div className="hidden md:flex items-center gap-1">
              {['Programm', 'Community', 'Erfolge', 'Über uns'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
            
            <button className="btn-liquid-glass px-4 py-2 rounded-full text-sm font-semibold ml-1">
              Jetzt starten
            </button>
          </div>
        </motion.nav>

        {/* Hero content */}
        <div className="grid lg:grid-cols-[1fr,1.1fr] gap-10 lg:gap-12 items-center pt-8 lg:pt-12 pb-16">
          {/* Left - Text content */}
          <motion.div 
            className="max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Badge with glass effect */}
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
              <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">
                KI-Schule | Coaching & Community
              </span>
            </div>

            {/* Headline with mixed typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.1] mb-5">
              Starte Heute dein
              <br />
              <span className="font-serif italic text-white/90 font-normal">
                KI-Business.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-md">
              Lerne von Praktikern, wie du auch ohne technisches Vorwissen 
              ein profitables KI-Business aufbaust.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <motion.button 
                className="btn-liquid-glass-accent px-7 py-4 rounded-full text-base font-semibold flex items-center gap-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Kostenlos starten</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 relative z-10" />
              </motion.button>
              
              <motion.button 
                className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors px-2 py-2"
                whileHover={{ x: 4 }}
              >
                <span className="text-sm font-medium underline underline-offset-4 decoration-white/30 group-hover:decoration-white/60 transition-colors">
                  Video ansehen
                </span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </motion.button>
            </div>

            {/* Stats - Clean inline style */}
            <div className="flex items-center gap-6 mt-10 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white">500+</span>
                <span className="text-white/50">Mitglieder</span>
              </div>
              <span className="text-white/20">•</span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white">€2M+</span>
                <span className="text-white/50">Umsatz</span>
              </div>
              <span className="text-white/20">•</span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white">4.9★</span>
                <span className="text-white/50">Bewertung</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Image with glass frame */}
          <motion.div 
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full max-w-lg lg:max-w-xl">
              {/* Glow behind image */}
              <div className="absolute -inset-8 bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent rounded-[3rem] blur-3xl" />
              
              {/* Glass frame */}
              <div className="glass-card relative rounded-3xl p-3 lg:p-4">
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src={founderImage} 
                    alt="Gründer der KI-Schule"
                    className="relative w-full aspect-[4/3] object-cover object-top"
                  />
                  
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/5" />
                </div>
              </div>
              
              {/* Floating glass card */}
              <motion.div 
                className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 glass-card rounded-2xl p-3 lg:p-4 max-w-[200px] lg:max-w-[220px]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="flex items-center gap-2 lg:gap-3 mb-1.5 lg:mb-2">
                  <div className="h-8 w-8 lg:h-10 lg:w-10 rounded-xl bg-white/10 flex items-center justify-center p-1.5 border border-white/10">
                    <img src={kiIcon} alt="" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-xs lg:text-sm font-bold text-white">100% Praxisnah</span>
                </div>
                <p className="text-[10px] lg:text-xs text-white/50 leading-relaxed">
                  Echte Projekte, echte Ergebnisse — keine graue Theorie.
                </p>
              </motion.div>
              
              {/* Top floating badge */}
              <motion.div 
                className="absolute -top-2 -right-2 lg:-top-3 lg:-right-3 glass rounded-full px-3 lg:px-4 py-1.5 lg:py-2 flex items-center gap-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <span className="text-base lg:text-lg">🚀</span>
                <span className="text-[10px] lg:text-xs font-semibold text-white">Live Community</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
