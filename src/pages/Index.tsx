import HeroSection from "@/components/HeroSection";
import WhyKISection from "@/components/WhyKISection";
import BenefitsSection from "@/components/BenefitsSection";
import ProcessSection from "@/components/ProcessSection";
import FounderSection from "@/components/FounderSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WhyKISection />
      <BenefitsSection />
      <ProcessSection />
      <FounderSection />
    </div>
  );
};

export default Index;
