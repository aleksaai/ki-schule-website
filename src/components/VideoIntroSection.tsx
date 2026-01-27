import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VideoIntroSection = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Light Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, hsl(220 25% 97%) 0%, hsl(218 30% 96%) 50%, hsl(220 25% 97%) 100%)",
        }}
      />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(220 20% 80%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(220 20% 80%) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Subtle ambient blur */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[80%] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, hsl(216 100% 70% / 0.08) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container relative mx-auto px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Label */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2">
              <Play className="h-4 w-4 text-primary fill-primary" />
              <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">
                Kurze Vorstellung
              </span>
            </div>
          </motion.div>

          {/* Video Container - Glass Frame */}
          <motion.div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(145deg, hsl(var(--card) / 0.5) 0%, hsl(var(--card) / 0.2) 50%, hsl(var(--card) / 0.4) 100%)",
              backdropFilter: "blur(30px) saturate(180%)",
              WebkitBackdropFilter: "blur(30px) saturate(180%)",
              boxShadow: `
                0 25px 50px -12px hsl(var(--foreground) / 0.08),
                0 12px 24px -8px hsl(var(--foreground) / 0.04),
                inset 0 1px 0 hsl(var(--card) / 0.9),
                inset 0 -1px 0 hsl(var(--foreground) / 0.05)
              `,
              border: "1px solid hsl(var(--card) / 0.6)",
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Top shine effect */}
            <div 
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background: "linear-gradient(90deg, transparent, hsl(var(--card) / 0.95), transparent)",
              }}
            />

            {/* Inner padding for glass effect */}
            <div className="p-2 sm:p-3">
              {/* Video wrapper with aspect ratio */}
              <div 
                className="relative w-full rounded-xl overflow-hidden"
                style={{
                  paddingBottom: "56.25%", // 16:9 aspect ratio
                }}
              >
                <iframe
                  src="https://player.vimeo.com/video/1077984885?badge=0&autopause=0&player_id=0&app_id=58479"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="KI-Hochschule Vorstellung"
                />
              </div>
            </div>

            {/* Bottom subtle glow */}
            <div 
              className="absolute bottom-0 left-1/4 right-1/4 h-24 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at bottom, hsl(var(--primary) / 0.1) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoIntroSection;
