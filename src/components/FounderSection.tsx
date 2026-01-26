import { motion } from "framer-motion";
import aleksaImage from "@/assets/aleksa-founder.jpg";

const FounderSection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Background grid pattern */}
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
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_hsla(216,100%,70%,0.5)]" />
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

        {/* Content */}
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="glass-card rounded-3xl p-6 lg:p-10">
            <div className="grid lg:grid-cols-[1fr,1.2fr] gap-8 lg:gap-12 items-center">
              {/* Image */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src={aleksaImage} 
                    alt="Aleksa Spalevic - Gründer der KI-Schule"
                    className="w-full aspect-[4/3] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                    Aleksa Spalevic
                  </h3>
                  <p className="text-primary font-medium">
                    DestinyMedia GmbH
                  </p>
                </div>
                
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Unser Communityleiter, Aleksa, geht mit tollem Beispiel voran! Er gründete mit der DestinyMedia GmbH eine der ersten KI-Agenturen in Deutschland und hat sich nun mit Spalevic Consulting zu den führenden Anbietern im DACH-Raum etabliert.
                </p>

                {/* Optional: Stats or highlights */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="glass rounded-xl px-4 py-3">
                    <span className="text-sm text-muted-foreground">Gründer</span>
                    <p className="font-semibold text-foreground">DestinyMedia GmbH</p>
                  </div>
                  <div className="glass rounded-xl px-4 py-3">
                    <span className="text-sm text-muted-foreground">Consulting</span>
                    <p className="font-semibold text-foreground">Spalevic Consulting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;
