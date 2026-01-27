import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";

const VideoIntroSection = () => {
  return (
    <section id="video-intro" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Clean white background */}
      <div className="absolute inset-0 bg-background" />

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

          {/* CTA Button */}
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a
              href="https://cal.com/aleksa-ai/erstgesprach"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-liquid-glass-accent px-7 py-4 rounded-full text-base font-semibold flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Erstgespräch buchen</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 relative z-10" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoIntroSection;
