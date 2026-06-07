import { SectionLabel } from "@/components/ui/SectionLabel";

export function HeroSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20" id="hero">
      <SectionLabel>Placeholder tecnico</SectionLabel>
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
        VAL AUDIOVISUAL landing foundation
      </h1>
      <p className="mt-6 max-w-2xl text-[var(--color-muted)]">
        Estructura base preparada. El contenido, direccion visual y experiencia final quedan pendientes de aprobacion.
      </p>
    </section>
  );
}

