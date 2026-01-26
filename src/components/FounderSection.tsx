import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import aleksaImage from "@/assets/aleksa-founder.jpg";

const FounderSection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Background grid pattern */}
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

      <div className="container relative mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6">
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_hsla(216,100%,70%,0.5)]" />
            <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">
              Unser Community Founder
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Wer ist <span className="font-serif italic text-primary font-normal">Aleksa Spalevic?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schau dir an wer hinter der KI-Schule steckt.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="glass-card rounded-3xl p-6 lg:p-10">
            <div className="grid lg:grid-cols-[1fr,1.2fr] gap-8 lg:gap-12 items-center">
              {/* Image with Glass Frame - Same style as ProcessSection */}
              <div className="relative">
                {/* Glow behind image */}
                <div
                  className="absolute inset-0 z-0 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at center, hsl(var(--primary) / 0.25) 0%, transparent 70%)",
                    filter: "blur(40px)",
                    transform: "scale(1.5)",
                  }}
                />
                
                {/* Glass Frame Container */}
                <div
                  className="relative z-10 rounded-2xl overflow-hidden"
                  style={{
                    background: "linear-gradient(145deg, hsl(var(--card) / 0.25) 0%, hsl(var(--card) / 0.10) 100%)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1.5px solid hsl(var(--card) / 0.6)",
                    boxShadow: `
                      0 16px 48px hsl(var(--foreground) / 0.12),
                      0 4px 16px hsl(var(--foreground) / 0.06),
                      inset 0 1px 0 hsl(var(--card) / 0.9),
                      inset 0 -1px 0 hsl(var(--foreground) / 0.04)
                    `,
                    padding: "8px",
                  }}
                >
                  {/* Top edge shine */}
                  <div
                    className="absolute top-0 left-[10%] right-[10%] h-px z-20"
                    style={{
                      background: "linear-gradient(90deg, transparent, hsl(var(--card) / 0.9) 50%, transparent)",
                    }}
                  />
                  
                  <AspectRatio ratio={4 / 3} className="rounded-xl overflow-hidden">
                    <img 
                      src={aleksaImage} 
                      alt="Aleksa Spalevic - Gründer der KI-Schule"
                      className="w-full h-full object-cover object-top"
                    />
                  </AspectRatio>
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                    Aleksa Spalevic
                  </h3>
                  <p className="text-primary font-medium">
                    DestinyMedia GmbH
                  </p>
                </div>
                
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Unser Communityleiter, Aleksa, geht mit tollem Beispiel voran! Er gründete mit der DestinyMedia GmbH eine der ersten KI-Agenturen in Deutschland und hat sich nun mit Spalevic Consulting zu den führenden Anbietern im DACH-Raum etabliert.
                </p>

                {/* CTA Button */}
                <motion.button
                  className="btn-liquid-glass-accent px-7 py-4 rounded-full text-base font-semibold flex items-center gap-2 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Jetzt der Community beitreten</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 relative z-10" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;
