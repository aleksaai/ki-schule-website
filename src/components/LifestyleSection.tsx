import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import workLifeBalanceImg from "@/assets/lifestyle/work-life-balance.jpg";
import zeitFuerFreundeImg from "@/assets/lifestyle/zeit-fuer-freunde.jpg";
import reisenErlebnisseImg from "@/assets/lifestyle/reisen-erlebnisse.png";

const lifestyleItems = [
  { label: "Zeit für Freunde", image: zeitFuerFreundeImg },
  { label: "Flexibles Arbeiten", image: null },
  { label: "Finanzielle Freiheit", image: reisenErlebnisseImg },
  { label: "Reisen & Erlebnisse", image: null },
  { label: "Quality Time", image: null },
  { label: "Work-Life-Balance", image: workLifeBalanceImg },
];

const LifestyleSection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, hsl(220 20% 97%) 0%, hsl(220 20% 96%) 50%, hsl(220 20% 97%) 100%)',
          }}
        />
        
        {/* Grid pattern */}
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
        
        {/* Subtle accent blur */}
        <div className="absolute inset-0 max-w-[1920px] mx-auto">
          <div 
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[60%] h-[40%]"
            style={{
              background: "radial-gradient(ellipse at center, hsl(216 100% 70% / 0.05) 0%, transparent 60%)",
              borderRadius: '50%',
              filter: 'blur(80px)',
            }}
          />
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
          {/* Badge */}
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6">
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">
              Dein Lifestyle
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-5">
            So könnte dein Leben
            <br />
            <span className="font-serif italic text-primary font-normal">
              bald aussehen:
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
              {/* Glass Frame Card */}
              <div
                className="relative rounded-2xl overflow-hidden group"
                style={{
                  background:
                    "linear-gradient(145deg, hsl(var(--card) / 0.20) 0%, hsl(var(--card) / 0.08) 55%, hsl(var(--card) / 0.15) 100%)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid hsl(var(--card) / 0.50)",
                  boxShadow: `
                    0 20px 40px hsl(var(--foreground) / 0.10),
                    0 8px 20px hsl(var(--foreground) / 0.05),
                    inset 0 1px 0 hsl(var(--card) / 0.90)
                  `,
                  padding: "6px",
                }}
              >
                {/* Top edge shine */}
                <div
                  className="absolute top-0 left-0 right-0 z-20 h-px"
                  style={{
                    background: "linear-gradient(90deg, transparent, hsl(var(--card) / 0.85) 50%, transparent)",
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
