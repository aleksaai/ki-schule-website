import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Zap } from "lucide-react";
import { Suspense, lazy } from "react";

const Logo3D = lazy(() => import("./Logo3D"));

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[hsl(220,25%,97%)] via-background to-[hsl(330,30%,97%)]">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container relative mx-auto px-4 py-12 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left column - Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-[hsl(var(--border))] px-4 py-2 shadow-sm">
              <span className="flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-[hsl(var(--brand-green))] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[hsl(var(--brand-green))]"></span>
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                #1 KI-Community im DACH-Raum
              </span>
            </div>

            {/* Headline */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Starte dein{" "}
              <span className="bg-gradient-to-r from-[hsl(var(--brand-pink))] via-[hsl(var(--brand-yellow))] to-[hsl(var(--brand-cyan))] bg-clip-text text-transparent">
                KI-Business
              </span>
              <br />
              mit der KI-Schule
            </h1>

            {/* Subheadline */}
            <p className="mb-8 max-w-xl text-lg text-muted-foreground">
              Werde Teil der größten KI-Community im DACH-Raum und lerne, wie du 
              auch ohne Vorerfahrung eine profitable KI-Agentur aufbauen kannst.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(330,85%,50%)] px-8 text-lg font-semibold shadow-xl shadow-[hsl(var(--brand-pink)/0.25)] transition-all duration-300 hover:shadow-2xl hover:shadow-[hsl(var(--brand-pink)/0.35)] hover:scale-[1.02]"
              >
                Jetzt starten
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 text-lg font-semibold bg-white/50 backdrop-blur-sm border-2 hover:bg-white/80 transition-all duration-300"
              >
                Mehr erfahren
              </Button>
            </div>

            {/* Social proof */}
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-10">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[hsl(var(--brand-cyan))] to-[hsl(190,85%,40%)] shadow-lg shadow-[hsl(var(--brand-cyan)/0.25)]">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <span className="block text-xl font-bold text-foreground">500+</span>
                  <span className="text-sm text-muted-foreground">Mitglieder</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[hsl(var(--brand-green))] to-[hsl(145,65%,35%)] shadow-lg shadow-[hsl(var(--brand-green)/0.25)]">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <span className="block text-xl font-bold text-foreground">6</span>
                  <span className="text-sm text-muted-foreground">Business Ideen</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[hsl(var(--brand-yellow))] to-[hsl(45,95%,45%)] shadow-lg shadow-[hsl(var(--brand-yellow)/0.25)]">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <span className="block text-xl font-bold text-foreground">100%</span>
                  <span className="text-sm text-muted-foreground">Praxisnah</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - 3D Logo */}
          <div className="order-1 lg:order-2">
            <Suspense fallback={
              <div className="h-[400px] lg:h-[500px] flex items-center justify-center">
                <div className="h-32 w-32 rounded-3xl bg-gradient-to-br from-secondary to-muted animate-pulse" />
              </div>
            }>
              <Logo3D />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
