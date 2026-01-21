import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import founderImage from "@/assets/founder.png";
import logoImage from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[hsl(240,20%,98%)] via-background to-[hsl(262,30%,97%)] overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(262 83% 58% / 0.12) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(220 80% 60% / 0.08) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
      
      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative mx-auto px-6 lg:px-8">
        {/* Navigation with glass effect */}
        <motion.nav 
          className="flex items-center justify-between py-6 lg:py-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <img 
            src={logoImage} 
            alt="KI Schule" 
            className="h-10 lg:h-12 w-auto"
          />
          
          <div className="hidden md:flex items-center">
            <div className="glass rounded-full px-2 py-2 flex items-center gap-1">
              {['Programm', 'Community', 'Erfolge', 'Über uns'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-white/60 rounded-full transition-all duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          <button className="btn-3d btn-primary-3d text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-semibold">
            Jetzt starten
          </button>
        </motion.nav>

        {/* Hero content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-12 lg:pt-20 pb-20">
          {/* Left - Text content */}
          <motion.div 
            className="max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Badge with glass effect */}
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8">
              <span className="h-2 w-2 rounded-full bg-[hsl(var(--brand-accent))] shadow-[0_0_8px_hsl(var(--brand-accent))]" />
              <span className="text-xs font-semibold text-foreground/80 uppercase tracking-wider">
                #1 KI-Community DACH
              </span>
            </div>

            {/* Headline with mixed typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08] mb-6">
              Baue deine
              <br />
              <span className="font-serif italic text-[hsl(var(--brand-accent))] font-normal">
                KI-Agentur
              </span>
              <br />
              in 90 Tagen auf
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-md">
              Lerne von Praktikern, wie du auch ohne technisches Vorwissen 
              ein profitables KI-Business aufbaust.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <motion.button 
                className="btn-3d btn-primary-3d text-primary-foreground px-7 py-4 rounded-2xl text-base font-semibold flex items-center gap-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Kostenlos starten
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </motion.button>
              
              <motion.button 
                className="group flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors px-2 py-2"
                whileHover={{ x: 4 }}
              >
                <span className="text-sm font-medium underline underline-offset-4 decoration-foreground/30 group-hover:decoration-foreground/60 transition-colors">
                  Video ansehen
                </span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </motion.button>
            </div>

            {/* Stats - Clean inline style */}
            <div className="flex items-center gap-6 mt-14 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-bold text-foreground">500+</span>
                <span className="text-muted-foreground">Mitglieder</span>
              </div>
              <span className="text-border">•</span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-foreground">€2M+</span>
                <span className="text-muted-foreground">Umsatz</span>
              </div>
              <span className="text-border">•</span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-foreground">4.9★</span>
                <span className="text-muted-foreground">Bewertung</span>
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
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute -inset-8 bg-gradient-to-br from-[hsl(var(--brand-accent)/0.15)] via-[hsl(220,80%,60%,0.08)] to-transparent rounded-[3rem] blur-3xl" />
              
              {/* Glass frame */}
              <div className="glass-card relative rounded-3xl p-3 lg:p-4">
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src={founderImage} 
                    alt="Gründer der KI-Schule"
                    className="relative w-full max-w-md aspect-[4/5] object-cover object-top"
                  />
                  
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 via-transparent to-white/10" />
                </div>
              </div>
              
              {/* Floating glass card */}
              <motion.div 
                className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 max-w-[220px]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[hsl(var(--brand-accent))] to-[hsl(var(--brand-accent-light))] flex items-center justify-center shadow-lg shadow-[hsl(var(--brand-accent)/0.3)]">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-sm font-bold text-foreground">100% Praxisnah</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Echte Projekte, echte Ergebnisse — keine graue Theorie.
                </p>
              </motion.div>
              
              {/* Top floating badge */}
              <motion.div 
                className="absolute -top-3 -right-3 glass rounded-full px-4 py-2 flex items-center gap-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <span className="text-lg">🚀</span>
                <span className="text-xs font-semibold text-foreground">Live Community</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
