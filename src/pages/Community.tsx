import { ArrowRight, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import communityHeroImage from "@/assets/community-hero.jpg";
import MainNav from "@/components/MainNav";
import MobileNav from "@/components/MobileNav";
import CommunityFeatures from "@/components/CommunityFeatures";
import CommunityNetworkSection from "@/components/CommunityNetworkSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Community = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, hsl(220 20% 97%) 0%, hsl(220 25% 94%) 50%, hsl(220 20% 96%) 100%)',
            }}
          />
          
          {/* Organic curved shapes */}
          <motion.div 
            className="absolute -top-1/4 -right-1/4 w-[80%] h-[80%]"
            style={{
              background: 'radial-gradient(ellipse at center, hsla(216, 100%, 70%, 0.15) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(60px)',
            }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.6, 0.5],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div 
            className="absolute top-1/3 -left-1/4 w-[70%] h-[70%]"
            style={{
              background: 'radial-gradient(ellipse at center, hsla(216, 100%, 70%, 0.1) 0%, transparent 65%)',
              borderRadius: '50%',
              filter: 'blur(80px)',
            }}
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.4, 0.5, 0.4],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
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

        {/* Desktop Navigation */}
        <MainNav />

        {/* Mobile Navigation */}
        <motion.div
          className="fixed top-4 right-4 z-50 md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <MobileNav />
        </motion.div>

        <div className="container relative mx-auto px-6 lg:px-8">
          {/* Spacer for fixed nav */}
          <div className="h-16 lg:h-20" />

          {/* Hero content */}
          <div className="grid lg:grid-cols-[1fr,1.1fr] gap-8 lg:gap-12 items-center pt-8 lg:pt-12 pb-16">
            {/* Left - Text content */}
            <motion.div 
              className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left order-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Badge */}
              <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6">
                <Users className="h-4 w-4 text-primary fill-primary/20" />
                <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">
                  Community
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-4xl lg:text-[3.5rem] font-bold tracking-tight text-foreground leading-tight lg:leading-[1.2] mb-5">
                Dein Netzwerk für
                <br />
                <span className="font-serif italic text-primary font-normal">
                  KI-Erfolg.
                </span>
              </h1>

              {/* Image - Mobile only */}
              <div className="block lg:hidden mb-8">
                <div className="relative w-full max-w-xs mx-auto">
                  <div className="absolute -inset-6 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-[2rem] blur-2xl" />
                  <div className="glass-card relative rounded-2xl p-2">
                    <div className="relative rounded-xl overflow-hidden">
                      <img 
                        src={communityHeroImage} 
                        alt="KI-Schule Community"
                        className="relative w-full aspect-[4/3] object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
                Werde Teil einer exklusiven Community aus über 80 KI-Agenturen im DACH-Raum. Gemeinsam lernen, wachsen und erfolgreich werden.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <motion.a
                  href="https://cal.com/aleksa-ai/erstgesprach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-liquid-glass-accent px-7 py-4 rounded-full text-base font-semibold flex items-center gap-2 group w-full sm:w-auto justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Community beitreten</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 relative z-10" />
                </motion.a>
                
                <Link 
                  to="/"
                  className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors px-2 py-2"
                >
                  <span className="text-sm font-medium underline underline-offset-4 decoration-foreground/30 group-hover:decoration-foreground/60 transition-colors">
                    Zurück zur Startseite
                  </span>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-10 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-foreground">80+</span>
                  <span className="text-muted-foreground">Agenturen</span>
                </div>
                <span className="text-border">•</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-foreground">Seit</span>
                  <span className="text-muted-foreground">Feb. 2024</span>
                </div>
                <span className="text-border">•</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-foreground">DACH</span>
                  <span className="text-muted-foreground">Raum</span>
                </div>
              </div>
            </motion.div>

            {/* Right - Image (Desktop only) */}
            <motion.div 
              className="relative hidden lg:flex justify-center lg:justify-end order-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-full max-w-sm sm:max-w-lg lg:max-w-xl">
                {/* Glow behind image */}
                <div className="absolute -inset-8 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-[3rem] blur-3xl" />
                
                {/* Glass frame */}
                <div className="glass-card relative rounded-3xl p-3 lg:p-4">
                  <div className="relative rounded-2xl overflow-hidden">
                    <img 
                      src={communityHeroImage} 
                      alt="KI-Schule Community"
                      className="relative w-full aspect-[4/3] object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10" />
                  </div>
                </div>
                
                {/* Floating glass card */}
                <motion.div 
                  className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 max-w-[220px]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-bold text-foreground">Starke Community</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Lerne von und mit über 80 KI-Agenturen.
                  </p>
                </motion.div>
                
                {/* Top floating badge */}
                <motion.div 
                  className="absolute -top-3 -right-3 glass rounded-full px-4 py-2 flex items-center gap-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <span className="text-lg">🤝</span>
                  <span className="text-xs font-semibold text-foreground">DACH-Netzwerk</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Features Section */}
      <CommunityFeatures />

      {/* Network & Events Section */}
      <CommunityNetworkSection />

      {/* Community Feedback Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Community;
