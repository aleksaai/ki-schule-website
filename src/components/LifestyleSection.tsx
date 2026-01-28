import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import workLifeBalanceImg from "@/assets/lifestyle/work-life-balance.jpg";
import zeitFuerFreundeImg from "@/assets/lifestyle/zeit-fuer-freunde.jpg";
import reisenErlebnisseImg from "@/assets/lifestyle/reisen-erlebnisse.jpg";
import reisenElephantImg from "@/assets/lifestyle/reisen-elephant.png";
import eigeneMitarbeiterImg from "@/assets/lifestyle/eigene-mitarbeiter.png";
import flexiblesArbeitenImg from "@/assets/lifestyle/flexibles-arbeiten.jpg";
import finanzielleFreiheitImg from "@/assets/lifestyle/finanzielle-freiheit.png";

const lifestyleItems = [
  { label: "Zeit für Freunde", image: zeitFuerFreundeImg },
  { label: "Flexibles Arbeiten", image: flexiblesArbeitenImg },
  { label: "Finanzielle Freiheit", image: finanzielleFreiheitImg },
  { label: "Reisen & Erlebnisse", image: reisenErlebnisseImg },
  { label: "Eigene Mitarbeiter", image: eigeneMitarbeiterImg },
  { label: "Work-Life-Balance", image: workLifeBalanceImg },
];

const LifestyleSection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Dark background - matching Testimonials/SuccessStory */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(220 30% 14%) 0%, hsl(220 35% 12%) 50%, hsl(220 30% 14%) 100%)",
          }}
        />

        {/* Subtle grid pattern for dark mode */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(220 20% 50%) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(220 20% 50%) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Ambient glow effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 max-w-[1920px] mx-auto">
            <div
              className="absolute top-1/4 left-1/4 w-[40%] h-[50%]"
              style={{
                background: "radial-gradient(ellipse at center, hsl(216 100% 70% / 0.08) 0%, transparent 55%)",
                filter: "blur(60px)",
              }}
            />
            <div
              className="absolute bottom-1/4 right-1/4 w-[35%] h-[45%]"
              style={{
                background: "radial-gradient(ellipse at center, hsl(220 40% 30% / 0.25) 0%, transparent 60%)",
                filter: "blur(50px)",
              }}
            />
          </div>
        </div>
      </div>

      <div className="container relative mx-auto px-6 lg:px-8">
        {/* Header - Centered */}
        <motion.div 
          className="text-center mb-14 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge - Dark glass variant */}
          <div className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6">
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">
              Dein Lifestyle
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-5">
            So könnte dein Leben
            <br />
            <span className="font-serif italic text-primary font-normal">
              bald aussehen:
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Als KI-Agentur-Inhaber bestimmst du selbst, wann und wo du arbeitest — 
            für mehr Zeit mit den Menschen, die dir wichtig sind.
          </p>
        </motion.div>

        {/* 3x2 Grid of Lifestyle Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto">
          {lifestyleItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Dark Glass Frame Card */}
              <div
                className="relative rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1.5px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: `
                    0 12px 40px rgba(0, 0, 0, 0.3),
                    0 4px 12px rgba(0, 0, 0, 0.2),
                    inset 0 1px 0 rgba(255, 255, 255, 0.08)
                  `,
                  padding: "8px",
                }}
              >
                {/* Top edge shine */}
                <div
                  className="absolute top-0 left-[15%] right-[15%] h-px z-20"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15) 50%, transparent)",
                  }}
                />
                
                {/* Image Container */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted/30">
                  {/* Image or Placeholder */}
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.label} 
                      className="absolute inset-0 w-full h-full object-cover"
                      style={item.label === "Eigene Mitarbeiter" ? { objectPosition: "center 25%" } : 
                            item.label === "Flexibles Arbeiten" ? { objectPosition: "top center" } : undefined}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted/50 to-muted/30">
                      <span className="text-muted-foreground/40 text-sm">Bild {index + 1}</span>
                    </div>
                  )}
                  
                  {/* Gradient Overlay for Label */}
                  <div 
                    className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to top, hsl(var(--foreground) / 0.7) 0%, transparent 100%)',
                    }}
                  />
                  
                  {/* Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-white font-semibold text-base lg:text-lg drop-shadow-lg">
                      {item.label}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
