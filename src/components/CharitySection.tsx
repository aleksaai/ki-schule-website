import { motion } from "framer-motion";
import { ArrowUpRight, Heart } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import kimakuyaImage from "@/assets/kimakuya-celeste.jpg";

const CharitySection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background - Clean gradient without grid pattern */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, hsl(220 25% 98%) 0%, hsl(218 35% 96%) 50%, hsl(220 25% 98%) 100%)",
        }}
      />

      {/* Subtle ambient glow */}
      <div
        className="absolute top-1/2 right-1/4 w-[50%] h-[60%] -translate-y-1/2"
        style={{
          background: "radial-gradient(ellipse at center, hsl(216 100% 70% / 0.08) 0%, transparent 60%)",
          filter: "blur(80px)",
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
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">
              Gemeinsam Gutes tun
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            5% für <span className="font-serif italic text-primary font-normal">Kimakuya</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ein Teil unserer Einnahmen fließt in humanitäre Hilfe.
          </p>
        </motion.div>

        {/* Content - Mirrored asymmetric layout (Text left, Image right) */}
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="grid lg:grid-cols-[1.1fr,1fr] gap-10 lg:gap-16 items-center">
            {/* Text Content - With accent stripe */}
            <div className="relative space-y-6 lg:pr-8 order-2 lg:order-1">
              {/* Vertical accent stripe on right side */}
              <div 
                className="hidden lg:block absolute right-0 top-0 bottom-0 w-1 rounded-full"
                style={{
                  background: "linear-gradient(180deg, hsl(var(--primary) / 0.6) 0%, hsl(var(--primary) / 0.2) 100%)",
                }}
              />
              
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                  Physiotherapie für Angola
                </h3>
                <p className="text-primary font-medium text-lg">
                  Geleitet von Celeste Graça
                </p>
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                5% aller Einnahmen der KI-Schule fließen direkt an <span className="font-semibold text-foreground">Kimakuya</span> – eine Organisation, die Physiotherapie in Angola implementiert, um das Gesundheitssystem zu verbessern und Menschen zu helfen, die es am meisten brauchen.
              </p>

              <p className="text-muted-foreground text-base leading-relaxed">
                Viele Menschen verlieren dort durch Landminen aus dem Bürgerkrieg ihre Beine. Kimakuya gibt ihnen neue Hoffnung und Mobilität zurück.
              </p>

              {/* CTA Button */}
              <motion.a
                href="https://kimakuya.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-liquid-glass-accent px-7 py-4 rounded-full text-base font-semibold inline-flex items-center gap-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Mehr über Kimakuya erfahren</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 relative z-10" />
              </motion.a>
            </div>

            {/* Image with Glass Frame - Floating freely */}
            <div className="relative order-1 lg:order-2">
              {/* Glow behind image */}
              <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at center, hsl(var(--primary) / 0.20) 0%, transparent 70%)",
                  filter: "blur(50px)",
                  transform: "scale(1.4)",
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
                    0 20px 60px hsl(var(--foreground) / 0.15),
                    0 6px 20px hsl(var(--foreground) / 0.08),
                    inset 0 1px 0 hsl(var(--card) / 0.9),
                    inset 0 -1px 0 hsl(var(--foreground) / 0.04)
                  `,
                  padding: "10px",
                }}
              >
                {/* Top edge shine */}
                <div
                  className="absolute top-0 left-[10%] right-[10%] h-px z-20"
                  style={{
                    background: "linear-gradient(90deg, transparent, hsl(var(--card) / 0.9) 50%, transparent)",
                  }}
                />
                
                <AspectRatio ratio={16 / 10} className="rounded-xl overflow-hidden">
                  <img 
                    src={kimakuyaImage} 
                    alt="Aleksa mit Celeste Graça - Gründerin von Kimakuya"
                    className="w-full h-full object-cover object-center"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CharitySection;
