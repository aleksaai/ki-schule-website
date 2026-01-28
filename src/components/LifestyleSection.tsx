import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import friendsDinner from "@/assets/lifestyle/friends-dinner.png";
import friendsGroup from "@/assets/lifestyle/friends-group.jpg";
import coupleLaughing from "@/assets/lifestyle/couple-laughing.jpg";

const images = [
  { src: coupleLaughing, alt: "Quality time together" },
  { src: friendsGroup, alt: "Celebrating with friends" },
  { src: friendsDinner, alt: "Family dinner moments" },
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
            className="absolute top-1/4 right-1/4 w-[40%] h-[40%]"
            style={{
              background: "radial-gradient(ellipse at center, hsl(216 100% 70% / 0.06) 0%, transparent 60%)",
              borderRadius: '50%',
              filter: 'blur(80px)',
            }}
          />
        </div>
      </div>

      <div className="container relative mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            className="text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-6">
              Mehr Zeit für das,
              <br />
              <span className="font-serif italic text-primary font-normal">
                was wirklich zählt.
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
              Als KI-Agentur-Inhaber bestimmst du selbst, wann und wo du arbeitest. 
              Keine festen Bürozeiten, keine langen Pendelwege — dafür mehr 
              Frühstück mit der Familie, spontane Treffen mit Freunden und echte 
              Quality Time mit den Menschen, die dir wichtig sind.
            </p>

            <p className="text-base text-muted-foreground/80 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Das ist kein Traum. Das ist der Alltag, den du dir mit einer 
              KI-Agentur aufbauen kannst.
            </p>
          </motion.div>

          {/* Right: Photo Gallery - Connected Diagonal Layout */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Gallery container with consistent diagonal flow */}
            <div 
              className="relative w-full max-w-[500px] mx-auto lg:mx-0 lg:ml-auto"
              style={{ transform: 'rotate(-6deg)' }}
            >
              <div className="flex flex-col gap-4">
                {/* Row 1: Image top-right aligned */}
                <motion.div
                  className="self-end mr-0 sm:mr-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div
                    className="relative rounded-2xl overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(145deg, hsl(var(--card) / 0.20) 0%, hsl(var(--card) / 0.08) 55%, hsl(var(--card) / 0.15) 100%)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      border: "1px solid hsl(var(--card) / 0.50)",
                      boxShadow: `
                        0 20px 40px hsl(var(--foreground) / 0.12),
                        0 8px 20px hsl(var(--foreground) / 0.06),
                        inset 0 1px 0 hsl(var(--card) / 0.90)
                      `,
                      padding: "5px",
                    }}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 z-20 h-px"
                      style={{
                        background: "linear-gradient(90deg, transparent, hsl(var(--card) / 0.85) 50%, transparent)",
                      }}
                    />
                    <div className="w-44 sm:w-52 lg:w-60 aspect-[4/3] rounded-xl overflow-hidden">
                      <img src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </motion.div>

                {/* Row 2: Image center */}
                <motion.div
                  className="self-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                >
                  <div
                    className="relative rounded-2xl overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(145deg, hsl(var(--card) / 0.20) 0%, hsl(var(--card) / 0.08) 55%, hsl(var(--card) / 0.15) 100%)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      border: "1px solid hsl(var(--card) / 0.50)",
                      boxShadow: `
                        0 20px 40px hsl(var(--foreground) / 0.12),
                        0 8px 20px hsl(var(--foreground) / 0.06),
                        inset 0 1px 0 hsl(var(--card) / 0.90)
                      `,
                      padding: "5px",
                    }}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 z-20 h-px"
                      style={{
                        background: "linear-gradient(90deg, transparent, hsl(var(--card) / 0.85) 50%, transparent)",
                      }}
                    />
                    <div className="w-44 sm:w-52 lg:w-60 aspect-[4/3] rounded-xl overflow-hidden">
                      <img src={images[1].src} alt={images[1].alt} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </motion.div>

                {/* Row 3: Image bottom-left aligned */}
                <motion.div
                  className="self-start ml-0 sm:ml-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div
                    className="relative rounded-2xl overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(145deg, hsl(var(--card) / 0.20) 0%, hsl(var(--card) / 0.08) 55%, hsl(var(--card) / 0.15) 100%)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      border: "1px solid hsl(var(--card) / 0.50)",
                      boxShadow: `
                        0 20px 40px hsl(var(--foreground) / 0.12),
                        0 8px 20px hsl(var(--foreground) / 0.06),
                        inset 0 1px 0 hsl(var(--card) / 0.90)
                      `,
                      padding: "5px",
                    }}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 z-20 h-px"
                      style={{
                        background: "linear-gradient(90deg, transparent, hsl(var(--card) / 0.85) 50%, transparent)",
                      }}
                    />
                    <div className="w-44 sm:w-52 lg:w-60 aspect-[4/3] rounded-xl overflow-hidden">
                      <img src={images[2].src} alt={images[2].alt} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
