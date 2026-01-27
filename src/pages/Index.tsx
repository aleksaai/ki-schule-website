import HeroSection from "@/components/HeroSection";
import WhyKISection from "@/components/WhyKISection";
import BenefitsSection from "@/components/BenefitsSection";
import ProcessSection from "@/components/ProcessSection";
import FounderSection from "@/components/FounderSection";
import SuccessStorySection from "@/components/SuccessStorySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CharitySection from "@/components/CharitySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WhyKISection />
      <BenefitsSection />
      <ProcessSection />
      <FounderSection />
      <SuccessStorySection />
      <TestimonialsSection />
      <CharitySection />
    </div>
  );
};

export default Index;
