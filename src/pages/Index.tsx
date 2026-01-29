import HeroSection from "@/components/HeroSection";
import VideoIntroSection from "@/components/VideoIntroSection";
import WhyKISection from "@/components/WhyKISection";
import LifestyleSection from "@/components/LifestyleSection";
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
      <VideoIntroSection />
      <WhyKISection />
      <SuccessStorySection />
      <TestimonialsSection />
      <BenefitsSection />
      <ProcessSection />
      <LifestyleSection />
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
