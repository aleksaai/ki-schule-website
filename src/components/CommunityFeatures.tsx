import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

// Import custom icons
import communityFeedIcon from "@/assets/icons/community-feed-icon.png";
import livecallIcon from "@/assets/icons/livecall-community-icon.png";
import coursesIcon from "@/assets/icons/courses-icon.png";
import blueprintsIcon from "@/assets/icons/blueprints-community-icon.png";
import opportunitiesIcon from "@/assets/icons/opportunities-icon.png";
import certificateIcon from "@/assets/icons/certificate-community-icon.png";

const features = [
  {
    icon: communityFeedIcon,
    title: "Community Feed",
    description: "Stelle Fragen, bekomme Hilfe und teile Neuigkeiten mit der Community. Bleib immer auf dem neuesten Stand der KI-Welt.",
  },
  {
    icon: livecallIcon,
    title: "4x Live Calls",
    description: "Viermal pro Woche Gruppen-Calls mit Q&A, Support und direktem Feedback zu deinen Projekten.",
  },
  {
    icon: coursesIcon,
    title: "Premium Kurse",
    description: "Zugang zu allen Kursen: KI-Basics, Masterclass, Automation, Paid Ads und Neukunden-Gewinnung.",
  },
  {
    icon: blueprintsIcon,
    title: "Blueprints",
    description: "Fertige n8n & make.com Templates, Vertragsvorlagen und Automations – sofort einsatzbereit.",
  },
  {
    icon: opportunitiesIcon,
    title: "Opportunities",
    description: "Echte Aufträge von KI-Agenturen. Sammle erste Erfahrungen und verdiene direkt Geld.",
  },
  {
    icon: certificateIcon,
    title: "Zertifizierung",
    description: "Anerkannte Zertifikate für dein LinkedIn-Profil und deine Website. Zeige deine Expertise.",
  },
];

const CommunityFeatures = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, hsl(220 20% 96%) 0%, hsl(220 20% 97%) 50%, hsl(220 20% 96%) 100%)',
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

        {/* Subtle glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 max-w-[1920px] mx-auto">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%]"
              style={{
                background: 'radial-gradient(ellipse at center, hsl(216 100% 70% / 0.08) 0%, transparent 60%)',
                filter: 'blur(60px)',
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
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-primary fill-primary" />
            <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">
              Deine Vorteile
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Alles was du <span className="font-serif italic text-primary font-normal">brauchst.</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unser Online-Campus bietet dir alles, um deine KI-Agentur erfolgreich aufzubauen und zu skalieren.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="glass-card rounded-2xl p-6 lg:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="mb-5">
                <img 
                  src={feature.icon} 
                  alt={feature.title} 
                  className="h-14 w-14 object-contain"
                />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityFeatures;
