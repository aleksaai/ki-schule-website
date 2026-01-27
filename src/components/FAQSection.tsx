import { motion } from "framer-motion";
import { MessageCircleQuestion, ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Was ist die KI-Schule?",
    answer: "Die KI-Schule ist dein Sprungbrett in die Welt des KI-Business! Hier lernst du knallhart, wie du ein profitables KI-Unternehmen aufbaust. Vor allem mit Coaching, Community und Tools wie dem KI-Cockpit. Kein Blabla, nur Ergebnisse.",
  },
  {
    question: "Was ist die KI-Crew im KI-Cockpit?",
    answer: "Die KI-Crew sind deine persönlichen KI-Mitarbeiter, die dir von Tag 1 an zur Seite stehen. Sie übernehmen Aufgaben wie Content-Erstellung, Kundenakquise und mehr – so kannst du dich auf das Wesentliche konzentrieren.",
  },
  {
    question: "Für wen ist die KI-Schule gedacht?",
    answer: "Für alle, die mit KI Geld verdienen wollen – egal ob kompletter Anfänger oder bereits mit Vorkenntnissen. Unser Coaching passt sich deinem Level an und bringt dich Schritt für Schritt zum Erfolg.",
  },
  {
    question: "Brauche ich Vorkenntnisse in KI?",
    answer: "Nein, überhaupt nicht! Wir starten bei Null und führen dich durch alles, was du wissen musst. Du brauchst nur die Motivation, etwas Neues zu lernen und umzusetzen.",
  },
  {
    question: "Was macht die KI-Schule anders?",
    answer: "Unser Money-First Approach: Wir fokussieren uns auf praktische Ergebnisse, nicht auf endlose Theorie. Dazu kommen Live-Events, persönliches Coaching und ein faires Preismodell für Einsteiger.",
  },
];

const FAQSection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background with subtle grid */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, hsl(220 20% 97%) 0%, hsl(222 22% 95%) 50%, hsl(220 20% 97%) 100%)",
        }}
      />
      
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground) / 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground) / 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/3 w-[50%] h-[60%] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: "radial-gradient(ellipse at center, hsl(216 100% 70% / 0.06) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container relative mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6">
            <MessageCircleQuestion className="h-4 w-4 text-primary fill-primary" />
            <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">
              FAQ's
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Häufig gestellte <span className="font-serif italic text-primary font-normal">Fragen</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Alles, was du wissen musst, bevor du startest
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="grid lg:grid-cols-[0.8fr,1.2fr] gap-8 items-start">
            {/* Left: Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div
                className="rounded-2xl p-8 text-center sticky top-8"
                style={{
                  background: "linear-gradient(145deg, hsl(var(--card) / 0.40) 0%, hsl(var(--card) / 0.15) 55%, hsl(var(--card) / 0.25) 100%)",
                  backdropFilter: "blur(40px) saturate(180%)",
                  WebkitBackdropFilter: "blur(40px) saturate(180%)",
                  border: "1.5px solid hsl(var(--card) / 0.7)",
                  boxShadow: `
                    0 20px 60px hsl(var(--foreground) / 0.10),
                    0 8px 25px hsl(var(--foreground) / 0.06),
                    inset 0 1px 0 hsl(var(--card) / 0.95),
                    inset 0 -1px 0 hsl(var(--foreground) / 0.03)
                  `,
                }}
              >
                {/* Top edge shine */}
                <div
                  className="absolute top-0 left-[15%] right-[15%] h-px"
                  style={{
                    background: "linear-gradient(90deg, transparent, hsl(var(--card) / 0.9) 50%, transparent)",
                  }}
                />

                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(145deg, hsl(var(--card) / 0.5) 0%, hsl(var(--card) / 0.2) 100%)",
                    border: "1px solid hsl(var(--card) / 0.6)",
                    boxShadow: "0 4px 15px hsl(var(--foreground) / 0.06)",
                  }}
                >
                  <MessageCircleQuestion className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  Noch Fragen?
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Wo drückt der Schuh? Buche dir ein kurzes Erstgespräch und kläre deine Fragen.
                </p>

                <motion.button
                  className="btn-liquid-glass-accent px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Zum Erstgespräch</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 relative z-10" />
                </motion.button>
              </div>
            </motion.div>

            {/* Right: Accordion FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, hsl(var(--card) / 0.35) 0%, hsl(var(--card) / 0.12) 55%, hsl(var(--card) / 0.20) 100%)",
                  backdropFilter: "blur(40px) saturate(180%)",
                  WebkitBackdropFilter: "blur(40px) saturate(180%)",
                  border: "1.5px solid hsl(var(--card) / 0.7)",
                  boxShadow: `
                    0 20px 60px hsl(var(--foreground) / 0.10),
                    0 8px 25px hsl(var(--foreground) / 0.06),
                    inset 0 1px 0 hsl(var(--card) / 0.95),
                    inset 0 -1px 0 hsl(var(--foreground) / 0.03)
                  `,
                }}
              >
                {/* Top edge shine */}
                <div
                  className="absolute top-0 left-[10%] right-[10%] h-px z-10"
                  style={{
                    background: "linear-gradient(90deg, transparent, hsl(var(--card) / 0.9) 50%, transparent)",
                  }}
                />

                <Accordion type="single" collapsible className="w-full">
                  {faqData.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="border-b-0"
                      style={{
                        borderBottom: index < faqData.length - 1 ? "1px solid hsl(var(--foreground) / 0.06)" : "none",
                      }}
                    >
                      <AccordionTrigger 
                        className="px-6 py-5 hover:no-underline group"
                      >
                        <span className="text-left text-foreground font-medium text-base group-hover:text-primary transition-colors">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-5 pt-0">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
