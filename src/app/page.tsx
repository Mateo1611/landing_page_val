import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ReelSection } from "@/components/sections/ReelSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ReelSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <AboutSection />
      <TestimonialsSection />
      <InsightsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
