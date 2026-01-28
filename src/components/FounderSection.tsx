import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, User } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import aleksaImage from "@/assets/aleksa-founder.jpg";
const FounderSection = () => {
  return <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background - Clean gradient without grid pattern */}
      <div className="absolute inset-0" style={{
      background: "linear-gradient(180deg, hsl(220 25% 98%) 0%, hsl(216 40% 96%) 50%, hsl(220 25% 98%) 100%)"
    }} />

      {/* Subtle ambient glow - constrained for ultra-wide */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 max-w-[1920px] mx-auto">
          <div className="absolute top-1/2 left-1/4 w-[50%] h-[60%] -translate-y-1/2" style={{
          background: "radial-gradient(ellipse at center, hsl(216 100% 70% / 0.08) 0%, transparent 60%)",
          filter: "blur(80px)"
        }} />
        </div>
      </div>

      <div className="container relative mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          {/* Badge */}
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6">
            <User className="h-4 w-4 text-primary fill-primary" />
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

        {/* Content - Full-width asymmetric layout WITHOUT glass-card wrapper */}
        <motion.div className="max-w-6xl mx-auto" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.7,
        delay: 0.2
      }}>
          <div className="grid lg:grid-cols-[1fr,1.1fr] gap-10 lg:gap-16 items-center">
            {/* Image with Glass Frame - Order 1 on mobile (Media first) */}
            <div className="relative order-1">
              {/* Glow behind image */}
              <div className="absolute inset-0 z-0 pointer-events-none" style={{
              background: "radial-gradient(circle at center, hsl(var(--primary) / 0.25) 0%, transparent 70%)",
              filter: "blur(50px)",
              transform: "scale(1.4)"
            }} />
              
              {/* Glass Frame Container */}
              <div className="relative z-10 rounded-2xl overflow-hidden max-w-sm sm:max-w-md mx-auto lg:mx-0" style={{
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
              padding: "10px"
            }}>
                {/* Top edge shine */}
                <div className="absolute top-0 left-[10%] right-[10%] h-px z-20" style={{
                background: "linear-gradient(90deg, transparent, hsl(var(--card) / 0.9) 50%, transparent)"
              }} />
                
                <AspectRatio ratio={4 / 3} className="rounded-xl overflow-hidden">
                  <img src={aleksaImage} alt="Aleksa Spalevic - Gründer der KI-Schule" className="w-full h-full object-cover object-top" />
                </AspectRatio>
              </div>
            </div>

            {/* Text Content - Order 2 on mobile (After media) */}
            <div className="relative space-y-6 lg:pl-8 order-2 text-center lg:text-left">
              {/* Vertical accent stripe - Desktop only */}
              <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{
              background: "linear-gradient(180deg, hsl(var(--primary) / 0.6) 0%, hsl(var(--primary) / 0.2) 100%)"
            }} />
              
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                  Aleksa Spalevic
                </h3>
                <p className="text-primary font-medium text-lg">DestinyMedia GmbH | Aleksa AI</p>
              </div>
              
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Unser Communityleiter, Aleksa, geht mit tollem Beispiel voran! Er gründete mit der DestinyMedia GmbH eine der ersten KI-Agenturen in Deutschland und hat sich nun mit Spalevic Consulting zu den führenden Anbietern im DACH-Raum etabliert.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <motion.a href="https://cal.com/aleksa-ai/erstgesprach" target="_blank" rel="noopener noreferrer" className="btn-liquid-glass-accent px-7 py-4 rounded-full text-base font-semibold flex items-center gap-2 group w-full sm:w-auto justify-center" whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }}>
                  <span className="relative z-10">Jetzt der Community beitreten</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 relative z-10" />
                </motion.a>
                
                <motion.button className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors px-2 py-2" whileHover={{
                x: 4
              }} onClick={() => document.getElementById('video-intro')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                  <span className="text-sm font-medium underline underline-offset-4 decoration-foreground/30 group-hover:decoration-foreground/60 transition-colors">
                    Video ansehen
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default FounderSection;