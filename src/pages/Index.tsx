import HeroSection from "@/components/HeroSection";
import WhyKISection from "@/components/WhyKISection";
import BenefitsSection from "@/components/BenefitsSection";
import ProcessSection from "@/components/ProcessSection";
import FounderSection from "@/components/FounderSection";
import SuccessStorySection from "@/components/SuccessStorySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CharitySection from "@/components/CharitySection";
import ComparisonSection from "@/components/ComparisonSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WhyKISection />
      <BenefitsSection />
      <ProcessSection />
      <SuccessStorySection />
      <TestimonialsSection />
      <FounderSection />
      <CharitySection />
      <ComparisonSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
