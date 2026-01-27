import { motion } from "framer-motion";
import { ArrowUpRight, Trophy, Plane, Calendar } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import davidImage from "@/assets/david-success.jpg";

const SuccessStorySection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(220 20% 97%) 0%, hsl(220 20% 96%) 50%, hsl(220 20% 97%) 100%)",
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
            backgroundSize: "48px 48px",
          }}
        />

        {/* Subtle blur orb */}
        <div
          className="absolute top-1/3 left-1/4 w-[40%] h-[40%]"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(var(--foreground) / 0.04) 0%, transparent 62%)",
            borderRadius: "50%",
            filter: "blur(50px)",
          }}
        />
      </div>

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
            <Trophy className="h-4 w-4 text-primary fill-primary" />
            <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">
              Erfolgsgeschichte
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Von 0 zum <span className="font-serif italic text-primary font-normal">Umsatz-Champion</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wie David mit 19 Jahren unseren Community-Wettbewerb gewonnen hat
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
            <div className="grid lg:grid-cols-[1.2fr,1fr] gap-8 lg:gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6 order-2 lg:order-1">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                    David – Unser Q4 2024 Champion
                  </h3>
                  <p className="text-primary font-medium">
                    19 Jahre, KI-Agentur Gründer
                  </p>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  David ist im Februar 2024 als 19-Jähriger unserer Community beigetreten. Im letzten Quartal 2024 hat er unseren Wettbewerb gewonnen – mit dem höchsten Umsatz aller KI-Agenturen in der KI-Schule.
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-4">
                  <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-foreground/80">
                      Mitglied seit Feb 2024
                    </span>
                  </div>
                  <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2">
                    <Trophy className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-foreground/80">
                      Q4 2024 Gewinner
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Als Belohnung für seinen Erfolg haben wir David nach Budapest eingeladen – Flug und Unterkunft inklusive. Gemeinsam haben wir dort gearbeitet, Strategien besprochen und eine unvergessliche Zeit in meiner Lieblingsstadt Europas verbracht.
                </p>

                {/* CTA Button */}
                <motion.button
                  className="btn-liquid-glass-accent px-7 py-4 rounded-full text-base font-semibold flex items-center gap-2 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Werde die nächste Erfolgsgeschichte</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 relative z-10" />
                </motion.button>
              </div>

              {/* Image with Glass Frame */}
              <div className="relative order-1 lg:order-2">
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

                  <AspectRatio ratio={1} className="rounded-xl overflow-hidden">
                    <img
                      src={davidImage}
                      alt="Aleksa und David in Budapest"
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>

                {/* Budapest Badge */}
                <div
                  className="absolute -bottom-3 -right-3 z-30 glass inline-flex items-center gap-2 rounded-full px-4 py-2 shadow-lg"
                >
                  <Plane className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">
                    Budapest Trip 🇭🇺
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStorySection;
