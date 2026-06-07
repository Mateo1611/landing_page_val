import { Accordion } from "@/components/ui/Accordion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { faqs } from "@/data/faqs";

export function FAQSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-[var(--section-padding)]" id="faq">
      <SectionLabel>FAQ</SectionLabel>
      <Accordion items={faqs} />
    </section>
  );
}

