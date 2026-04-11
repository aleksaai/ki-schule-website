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
import { SEO } from "@/seo/SEO";
import { routeMeta } from "@/seo/routes";
import {
  educationalOrganizationSchema,
  courseCatalog,
  faqPageSchema,
  siteFaqs,
} from "@/seo/schemas";

const Index = () => {
  const meta = routeMeta["/"];
  // Organization + WebSite Schemas liegen site-wide in index.html und sind auf jeder
  // Route automatisch präsent. Hier nur die /-spezifischen Schemas ergänzen.
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={meta.title}
        description={meta.description}
        path="/"
        keywords={meta.keywords}
        jsonLd={[
          educationalOrganizationSchema(),
          ...courseCatalog(),
          faqPageSchema(siteFaqs),
        ]}
      />
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
