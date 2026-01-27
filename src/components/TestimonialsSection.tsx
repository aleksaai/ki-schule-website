import { motion } from "framer-motion";

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
  { src: fabian, alt: "Fabian's Feedback zur KI-Hochschule" },
  { src: wojtek, alt: "Wojtek's Empfehlung der KI-Hochschule" },
  { src: davidM, alt: "David's Bewertung der KI-Hochschule" },
  { src: vito, alt: "Vito's Erfahrung mit der Community" },
  { src: timo, alt: "Timo's Feedback zur KI-Agentur Aufbau" },
  { src: niclas, alt: "Niclas' Bewertung der Videos" },
  { src: daniel, alt: "Daniel's Feedback zur Community" },
  { src: lucas, alt: "Lucas' Erfolg mit der KI-Hochschule" },
  { src: tim, alt: "Tim's Dankbarkeit für die Community" },
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background - Light gradient for contrast with dark screenshots */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220_20%_97%)] via-[hsl(215_25%_95%)] to-[hsl(220_20%_97%)]" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground) / 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground) / 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="text-lg">💬</span>
            <span className="text-sm font-medium text-foreground/80">
              Echte Nachrichten aus unserer Community
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Was unsere Mitglieder sagen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ungeschönt und direkt – echte Screenshots von Menschen, die mit der KI-Hochschule durchstarten
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
                ease: "easeOut"
              }}
              className="break-inside-avoid"
            >
              <div className="relative group">
                {/* Glass frame around screenshot */}
                <div className="relative rounded-2xl overflow-hidden glass-card p-2 md:p-3 transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]">
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Screenshot */}
                  <img
                    src={testimonial.src}
                    alt={testimonial.alt}
                    className="w-full h-auto rounded-xl shadow-lg"
                    loading="lazy"
                  />
                </div>
                
                {/* Subtle ambient glow on hover */}
                <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Werde Teil unserer wachsenden Community
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Jetzt Mitglied werden
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
