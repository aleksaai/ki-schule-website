import { ArrowUpRight, Crown } from "lucide-react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const features = [
  {
    title: "Blue-Ocean Markt",
    description: "KI ist eine neue Innovation und es gibt am Markt mehr Anfragen als Angebote!",
    lottieUrl: "https://lottie.host/41ecc2de-8106-4da4-a648-6e8f9669cf7c/O0ElGjYk1c.lottie",
  },
  {
    title: "High-Income Skill",
    description: "Du arbeitest in einem zukunftssicheren Bereich und verkaufst hochpreisig.",
    lottieUrl: "https://lottie.host/191b8763-e12d-484c-9d10-719b04213c5b/tKCjWY8Cnz.lottie",
  },
  {
    title: "Automation ist gefragt!",
    description: "Nahezu alle Branchen benötigen Unterstützung im Bereich KI!",
    lottieUrl: "https://lottie.host/da29d773-bcba-40bc-942a-1508bdaaa0f0/xKLfO86OyH.lottie",
  },
];

const WhyKISection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#1a1a1f] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #1f1f24 0%, #1a1a1f 50%, #1a1a1f 100%)',
          }}
        />
        
        {/* Dot grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
        
        {/* Subtle organic shape */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[80%]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(50, 50, 58, 0.25) 0%, transparent 60%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container relative mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6">
            <Crown className="h-4 w-4 text-white fill-white" />
            <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">
              Deine Chance
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-4">
            Warum ein
            <br className="sm:hidden" />
            <span className="font-serif italic text-white/90 font-normal ml-2 sm:ml-3">
              KI-Agentur?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Weshalb du sogar ohne Vorerfahrung eine KI-Agentur starten solltest!
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="glass-card rounded-2xl p-6 lg:p-8 group cursor-default"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Lottie Animation */}
              <div className="relative mb-5 h-16 w-16">
                <DotLottieReact
                  src={feature.lottieUrl}
                  loop
                  autoplay
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/50 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.button 
            className="btn-liquid-glass-accent px-7 py-4 rounded-full text-base font-semibold flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Erstgespräch Buchen</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 relative z-10" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyKISection;
