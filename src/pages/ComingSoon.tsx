import { ArrowLeft, Construction } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <section className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, hsl(220 20% 97%) 0%, hsl(220 25% 94%) 50%, hsl(220 20% 96%) 100%)',
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
      </div>

      <div className="container relative mx-auto px-6 lg:px-8">
        <motion.div 
          className="max-w-md mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Glass card */}
          <div className="glass-card rounded-3xl p-8 lg:p-10">
            {/* Icon */}
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 mb-6">
              <Construction className="h-8 w-8 text-primary" />
            </div>

            {/* Content */}
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Seite in Arbeit
            </h1>
            
            <p className="text-muted-foreground leading-relaxed mb-2">
              Diese Seite wird gerade neu erstellt und ist noch nicht verfügbar.
            </p>
            
            <p className="text-sm text-muted-foreground mb-8">
              Voraussichtliche Fertigstellung: <span className="font-semibold text-foreground">01.02.2026</span>
            </p>

            {/* Back button */}
            <Link 
              to="/"
              className="btn-liquid-glass inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
            >
              <ArrowLeft className="h-4 w-4" />
              Zurück zur Startseite
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoon;