import { MediaFrame } from "@/components/ui/MediaFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ReelSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-[var(--section-padding)]" id="reel">
      <SectionLabel>Reel</SectionLabel>
      <MediaFrame>
        <div className="grid aspect-video place-items-center text-sm text-[var(--color-muted)]">
          Placeholder de media temporal
        </div>
      </MediaFrame>
    </section>
  );
}

