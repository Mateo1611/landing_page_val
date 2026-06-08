import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { CountUp } from "@/components/ui/CountUp";
import { FadeIn } from "@/components/animation/FadeIn";
import { aboutCopy, aboutStats } from "@/data/about";

/**
 * About (Direction A §08): humanizes the studio in a short, two-column block
 * with three animated stats. Brief and real — never a long bio (docs/brief §6).
 * TODO(assets): swap MediaFrame for a real behind-the-scenes photo/video.
 */
export function AboutSection() {
  return (
    <Section id="sobre" divider>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <FadeIn>
          <SectionLabel>Quiénes somos</SectionLabel>
          <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(1.75rem,4vw,2.75rem)] uppercase leading-[0.96] tracking-tight">
            {aboutCopy.heading}
          </h2>
          <p className="mt-4 max-w-[42ch] text-fg-muted">{aboutCopy.body}</p>

          <div className="mt-8 flex flex-wrap gap-10">
            {aboutStats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl uppercase tracking-tight text-orange">
                  <CountUp value={stat.value} />
                </div>
                <div className="mt-1 text-sm text-fg-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <MediaFrame ratio="4/3" label="EQUIPO / DETRÁS DE CÁMARAS · foto o video" />
        </FadeIn>
      </div>
    </Section>
  );
}
