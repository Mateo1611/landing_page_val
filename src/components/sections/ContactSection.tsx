import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ContactSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-[var(--section-padding)]" id="contact">
      <SectionLabel>Contacto</SectionLabel>
      <form className="grid max-w-2xl gap-4">
        <input className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-transparent px-4 py-3" placeholder="Nombre" />
        <input className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-transparent px-4 py-3" placeholder="Email" type="email" />
        <textarea className="min-h-32 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-transparent px-4 py-3" placeholder="Mensaje" />
        <Button type="button">Enviar placeholder</Button>
      </form>
    </section>
  );
}

