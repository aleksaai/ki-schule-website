import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import founderImage from "@/assets/founder.png";
const HeroSection = () => {
  return <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
      backgroundSize: '60px 60px'
    }} />
      
      {/* Gradient orb - subtle and premium */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--brand-accent)/0.15)] via-[hsl(var(--brand-accent-light)/0.08)] to-transparent blur-3xl" />
      </div>

      <div className="container relative mx-auto px-6 lg:px-8">
        {/* Navigation */}
        <nav className="flex items-center justify-between py-6 lg:py-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-foreground flex items-center justify-center">
              <span className="text-background font-bold text-sm">KI</span>
            </div>
            <span className="font-semibold text-lg tracking-tight">KI-Schule</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Programm</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Community</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Erfolge</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Über uns</a>
          </div>
          
          <Button size="sm" className="font-medium">
            Jetzt starten
          </Button>
        </nav>

        {/* Hero content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-12 lg:pt-24 pb-20">
          {/* Left - Text content */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5 mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--brand-accent))]" />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                #1 KI-Community DACH
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              Baue deine
              <br />
              <span className="text-[hsl(var(--brand-accent))]">KI-Agentur</span>
              <br />
              in 90 Tagen auf
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
              Lerne von Praktikern, wie du auch ohne technisches Vorwissen 
              ein profitables KI-Business aufbaust.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button size="lg" className="group bg-foreground text-background hover:bg-foreground/90 px-6 h-12 text-base font-medium">
                Kostenlos starten
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              
              <button className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background group-hover:border-foreground/20 transition-colors">
                  <Play className="h-4 w-4 ml-0.5" />
                </span>
                <span className="text-sm font-medium">Video ansehen</span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Mitglieder</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <div className="text-2xl font-bold text-foreground">€2M+</div>
                <div className="text-sm text-muted-foreground">Umsatz generiert</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <div className="text-2xl font-bold text-foreground">#1 KI-SCHULE | COACHING & COMMUNITY</div>
                <div className="text-sm text-muted-foreground">Bewertung</div>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[hsl(var(--brand-accent)/0.1)] to-transparent rounded-3xl blur-2xl" />
              
              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden bg-secondary">
                <img src={founderImage} alt="Gründer der KI-Schule" className="relative w-full max-w-md aspect-square object-cover" />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent" />
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-4 -left-4 bg-background rounded-xl border border-border shadow-xl p-4 max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-8 w-8 rounded-full bg-[hsl(var(--brand-accent))] flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm font-semibold text-foreground">Praxisnah</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Echte Projekte, echte Ergebnisse
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;