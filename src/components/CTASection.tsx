import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background - Clean gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, hsl(220 25% 98%) 0%, hsl(218 30% 96%) 50%, hsl(220 25% 97%) 100%)",
        }}
      />

      {/* Animated floating blur orbs */}
      <motion.div
        className="absolute top-1/4 left-1/5 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(216 100% 70% / 0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/5 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(200 80% 65% / 0.10) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
        animate={{
          x: [0, -25, 0],
          y: [0, 25, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Sparkle elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full pointer-events-none"
          style={{
            background: "hsl(var(--primary))",
            boxShadow: "0 0 6px 2px hsl(var(--primary) / 0.4)",
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      ))}

      {/* Additional subtle sparkles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`spark-${i}`}
          className="absolute pointer-events-none"
          style={{
            left: `${25 + i * 18}%`,
            top: `${35 + (i % 2) * 30}%`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0.8, 1.5, 0.8],
          }}
          transition={{
            duration: 3 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5 + i * 1.2,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 0L6.5 4.5L11 6L6.5 6.5L6 11L5.5 6.5L1 6L5.5 5.5L6 0Z"
              fill="hsl(var(--primary))"
              fillOpacity="0.6"
            />
          </svg>
        </motion.div>
      ))}

      <div className="container relative mx-auto px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Subtle decorative line with text */}
          <motion.div 
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div 
              className="h-px w-12"
              style={{
                background: "linear-gradient(90deg, transparent, hsl(var(--foreground) / 0.2))",
              }}
            />
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2">
              <Clock className="h-4 w-4 text-primary fill-primary" />
              <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">
                Es wird Zeit
              </span>
            </div>
            <div 
              className="h-px w-12"
              style={{
                background: "linear-gradient(90deg, hsl(var(--foreground) / 0.2), transparent)",
              }}
            />
          </motion.div>

          {/* Main Headline */}
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Im Leben geht es um Entscheidungen.
            <br />
            <span className="font-serif italic text-primary font-normal">
              Triff heute die richtige!
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Buche jetzt dein Erstgespräch und lege los
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button
              className="btn-liquid-glass-accent px-8 py-4 rounded-full text-base font-semibold inline-flex items-center gap-2 group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Erstgespräch buchen</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 relative z-10" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
