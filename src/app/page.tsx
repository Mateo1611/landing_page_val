import { HeroSection } from "@/components/sections/HeroSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { ReelSection } from "@/components/sections/ReelSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

/**
 * Single-page landing — section order follows Direction A ("El Reel") of the
 * wireframes: impact → proof → offer → process → trust → conversion. The
 * optional Insights block (docs/brief §9) is deferred to a later phase, so it's
 * intentionally not rendered here.
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <ReelSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
