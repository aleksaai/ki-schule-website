import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";

// Import all testimonial screenshots
import fabian from "@/assets/testimonials/fabian.jpg";
import wojtek from "@/assets/testimonials/wojtek.jpg";
import davidM from "@/assets/testimonials/david-m.jpg";
import vito from "@/assets/testimonials/vito.jpg";
import timo from "@/assets/testimonials/timo.jpg";
import niclas from "@/assets/testimonials/niclas.jpg";
import daniel from "@/assets/testimonials/daniel.jpg";
import lucas from "@/assets/testimonials/lucas.jpg";
import tim from "@/assets/testimonials/tim.jpg";

const testimonials = [
  { src: lucas, alt: "Lucas' Erfolg mit der KI-Hochschule" },
  { src: fabian, alt: "Fabian's Feedback zur KI-Hochschule" },
  { src: wojtek, alt: "Wojtek's Empfehlung der KI-Hochschule" },
  { src: davidM, alt: "David's Bewertung der KI-Hochschule" },
  { src: vito, alt: "Vito's Erfahrung mit der Community" },
  { src: timo, alt: "Timo's Feedback zur KI-Agentur Aufbau" },
  { src: niclas, alt: "Niclas' Bewertung der Videos" },
  { src: daniel, alt: "Daniel's Feedback zur Community" },
  { src: tim, alt: "Tim's Dankbarkeit für die Community" },
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Dark background with gradient - matching SuccessStorySection */}
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

        {/* Ambient glow effects - constrained for ultra-wide */}
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
        {/* Section Header - Matching other sections */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge - Dark glass variant with filled icon */}
          <div className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6">
            <MessageCircle className="h-4 w-4 text-primary fill-primary" />
            <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">
              Community Feedback
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Was unsere{" "}
            <span className="font-serif italic text-primary font-normal">
              Mitglieder
            </span>{" "}
            sagen
          </h2>

          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Echte Nachrichten aus unserer Community – ungeschönt und authentisch
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="break-inside-avoid"
            >
              {/* Dark glass frame for screenshot */}
              <div
                className="relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
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

                {/* Screenshot */}
                <img
                  src={testimonial.src}
                  alt={testimonial.alt}
                  className="w-full h-auto rounded-xl"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Matching button style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-6">
            Werde Teil unserer wachsenden Community
          </p>
          <motion.a
            href="https://cal.com/aleksa-ai/erstgesprach"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-liquid-glass-accent px-7 py-4 rounded-full text-base font-semibold inline-flex items-center gap-2 group w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Jetzt Mitglied werden</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 relative z-10" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
