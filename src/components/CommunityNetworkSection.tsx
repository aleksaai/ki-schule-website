import { motion } from "framer-motion";
import { ArrowUpRight, Users2, Calendar, Trophy, Plane } from "lucide-react";
import netzwerkImage from "@/assets/netzwerk-image.jpg";

const highlights = [
  {
    icon: Users2,
    title: "Gemeinsame Werbeanzeigen",
    description: "Interne Netzwerke für gemeinsame Ads-Kampagnen und Ressourcen-Sharing.",
  },
  {
    icon: Calendar,
    title: "Netzwerkveranstaltungen",
    description: "Regelmäßige Events zum Austausch und Networking mit anderen Gründern.",
  },
  {
    icon: Trophy,
    title: "Wettbewerbe & Preise",
    description: "Gutscheine, Reisen und exklusive 1:1 Treffen in Budapest zu gewinnen.",
  },
];

const CommunityNetworkSection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Dark background with gradient */}
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

        {/* Glow effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 max-w-[1920px] mx-auto">
            <div
              className="absolute top-1/2 left-1/4 w-[50%] h-[70%] -translate-y-1/2"
              style={{
                background: "radial-gradient(ellipse at center, hsl(216 100% 70% / 0.12) 0%, transparent 55%)",
                filter: "blur(60px)",
              }}
            />
            <div
              className="absolute bottom-0 right-1/3 w-[40%] h-[40%]"
              style={{
                background: "radial-gradient(ellipse at center, hsl(220 40% 30% / 0.3) 0%, transparent 60%)",
                filter: "blur(50px)",
              }}
            />
          </div>
        </div>
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
          <div className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6">
            <Users2 className="h-4 w-4 text-primary fill-primary" />
            <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">
              Netzwerk & Events
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Mehr als nur eine <span className="font-serif italic text-primary font-normal">Community.</span>
          </h2>

          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Echte Verbindungen, gemeinsame Projekte und unvergessliche Erlebnisse.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="grid lg:grid-cols-[1.1fr,1fr] gap-10 lg:gap-16 items-center">
            {/* Left - Image */}
            <div className="relative order-1">
              {/* Spotlight glow behind image */}
              <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at center, hsl(216 100% 70% / 0.35) 0%, transparent 65%)",
                  filter: "blur(50px)",
                  transform: "scale(1.5)",
                }}
              />

              {/* Glass Frame Container - Dark variant */}
              <div
                className="relative z-10 rounded-2xl overflow-hidden max-w-sm sm:max-w-md mx-auto lg:mx-0"
                style={{
                  background: "linear-gradient(145deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1.5px solid rgba(255, 255, 255, 0.15)",
                  boxShadow: `
                    0 20px 60px rgba(0, 0, 0, 0.4),
                    0 6px 20px rgba(0, 0, 0, 0.25),
                    inset 0 1px 0 rgba(255, 255, 255, 0.12),
                    inset 0 -1px 0 rgba(0, 0, 0, 0.3)
                  `,
                  padding: "10px",
                }}
              >
                {/* Top edge shine */}
                <div
                  className="absolute top-0 left-[10%] right-[10%] h-px z-20"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25) 50%, transparent)",
                  }}
                />

                <div className="rounded-xl overflow-hidden aspect-[4/3]">
                  <img
                    src={netzwerkImage}
                    alt="KI-Schule Netzwerk Events"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Budapest Badge */}
              <div
                className="hidden sm:inline-flex absolute -bottom-3 -right-3 z-30 glass-dark items-center gap-2 rounded-full px-4 py-2"
                style={{
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
                }}
              >
                <Plane className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-white">
                  Budapest Trips 🇭🇺
                </span>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6 order-2 text-center lg:text-left">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                  Gemeinsam stärker
                </h3>
                <p className="text-primary font-medium text-base sm:text-lg">
                  Von Networking bis zu exklusiven Events
                </p>
              </div>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                In unserer Community entstehen echte Freundschaften und Business-Partnerschaften. Durch gemeinsame Werbeanzeigen, regelmäßige Events und spannende Wettbewerbe wachsen wir zusammen.
              </p>

              {/* Highlights */}
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    className="glass-dark rounded-xl p-4 flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <highlight.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{highlight.title}</h4>
                      <p className="text-sm text-white/60">{highlight.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start pt-4">
                <motion.a
                  href="https://cal.com/aleksa-ai/erstgesprach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-liquid-glass-accent px-7 py-4 rounded-full text-base font-semibold flex items-center gap-2 group w-full sm:w-auto justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Jetzt Teil werden</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 relative z-10" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityNetworkSection;
