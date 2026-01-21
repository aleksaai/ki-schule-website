import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[hsl(var(--brand-pink)/0.15)] blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-[hsl(var(--brand-cyan)/0.15)] blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-64 w-64 rounded-full bg-[hsl(var(--brand-yellow)/0.15)] blur-3xl" />
        <div className="absolute top-1/3 left-1/3 h-48 w-48 rounded-full bg-[hsl(var(--brand-green)/0.1)] blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-20 lg:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-lg shadow-[hsl(var(--brand-pink)/0.1)]">
            <span className="flex h-2 w-2">
              <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-[hsl(var(--brand-green))] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[hsl(var(--brand-green))]"></span>
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              #1 KI-Community im DACH-Raum
            </span>
          </div>

          {/* 3D Logo Element */}
          <div className="mb-10 relative">
            <div className="relative flex items-center justify-center">
              {/* 3D pill elements in Slack-style pinwheel */}
              <div className="relative h-32 w-32 lg:h-40 lg:w-40">
                {/* Top - Cyan */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-12 w-5 rounded-full bg-gradient-to-b from-[hsl(var(--brand-cyan))] to-[hsl(190,85%,40%)] shadow-lg shadow-[hsl(var(--brand-cyan)/0.4)]" />
                {/* Right - Green */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-5 w-12 rounded-full bg-gradient-to-r from-[hsl(145,65%,35%)] to-[hsl(var(--brand-green))] shadow-lg shadow-[hsl(var(--brand-green)/0.4)]" />
                {/* Bottom - Yellow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-12 w-5 rounded-full bg-gradient-to-t from-[hsl(var(--brand-yellow))] to-[hsl(45,95%,45%)] shadow-lg shadow-[hsl(var(--brand-yellow)/0.4)]" />
                {/* Left - Pink */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-12 rounded-full bg-gradient-to-l from-[hsl(330,85%,50%)] to-[hsl(var(--brand-pink))] shadow-lg shadow-[hsl(var(--brand-pink)/0.4)]" />
                
                {/* Diagonal elements */}
                <div className="absolute top-4 right-4 h-8 w-4 rotate-45 rounded-full bg-gradient-to-b from-[hsl(var(--brand-cyan))] to-[hsl(var(--brand-green))] opacity-60 shadow-lg" />
                <div className="absolute bottom-4 right-4 h-8 w-4 -rotate-45 rounded-full bg-gradient-to-b from-[hsl(var(--brand-green))] to-[hsl(var(--brand-yellow))] opacity-60 shadow-lg" />
                <div className="absolute bottom-4 left-4 h-8 w-4 rotate-45 rounded-full bg-gradient-to-b from-[hsl(var(--brand-yellow))] to-[hsl(var(--brand-pink))] opacity-60 shadow-lg" />
                <div className="absolute top-4 left-4 h-8 w-4 -rotate-45 rounded-full bg-gradient-to-b from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-cyan))] opacity-60 shadow-lg" />
              </div>
            </div>
          </div>

          {/* Headline */}
          <h1 className="mb-6 max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl">
            Starte dein{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-[hsl(var(--brand-pink))] via-[hsl(var(--brand-yellow))] to-[hsl(var(--brand-cyan))] bg-clip-text text-transparent">
                KI-Business
              </span>
            </span>
            <br />
            mit der KI-Schule
          </h1>

          {/* Subheadline */}
          <p className="mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Werde Teil der größten KI-Community im DACH-Raum und lerne, wie du 
            auch ohne Vorerfahrung eine profitable KI-Agentur aufbauen kannst.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(330,85%,50%)] px-8 text-lg font-semibold shadow-xl shadow-[hsl(var(--brand-pink)/0.3)] transition-all hover:shadow-2xl hover:shadow-[hsl(var(--brand-pink)/0.4)] hover:scale-105"
            >
              Jetzt starten
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 text-lg font-semibold border-2 hover:bg-secondary transition-all hover:scale-105"
            >
              Mehr erfahren
            </Button>
          </div>

          {/* Social proof */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            <div className="flex flex-col items-center">
              <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[hsl(var(--brand-cyan))] to-[hsl(190,85%,40%)] shadow-lg shadow-[hsl(var(--brand-cyan)/0.3)]">
                <Users className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-bold text-foreground">500+</span>
              <span className="text-sm text-muted-foreground">Community Mitglieder</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[hsl(var(--brand-green))] to-[hsl(145,65%,35%)] shadow-lg shadow-[hsl(var(--brand-green)/0.3)]">
                <Sparkles className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-bold text-foreground">6</span>
              <span className="text-sm text-muted-foreground">Business Ideen</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[hsl(var(--brand-yellow))] to-[hsl(45,95%,45%)] shadow-lg shadow-[hsl(var(--brand-yellow)/0.3)]">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-bold text-foreground">100%</span>
              <span className="text-sm text-muted-foreground">Praxisnah</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--secondary))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
