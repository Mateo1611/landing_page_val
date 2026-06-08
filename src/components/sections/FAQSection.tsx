import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/data/faqs";

/**
 * FAQ (Direction A §11): a sticky heading on the left, the accordion on the
 * right. Resolves the common objections before contact (docs/brief §6).
 */
export function FAQSection() {
  return (
    <Section id="faq" divider>
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <SectionLabel>Dudas</SectionLabel>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,4vw,2.75rem)] uppercase leading-[0.96] tracking-tight">
            Antes de
            <br />
            escribirnos.
          </h2>
        </div>
        <Accordion items={faqs} />
      </div>
    </Section>
  );
}
