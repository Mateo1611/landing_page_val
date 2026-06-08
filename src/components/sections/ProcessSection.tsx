"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";

import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { processChapters } from "@/data/process";

/**
 * Process as chapters (Direction A §07): a progress rail fills while the
 * right-hand media stays pinned (CSS sticky) and swaps per chapter as the
 * section scrolls. Scroll progress drives both the rail fill and the active
 * chapter, so it stays smooth and reduced-motion-safe (no layout pinning).
 */
export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Progress through the chapter column, from entering to leaving the viewport.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 70%"],
  });

  // Map scroll progress onto the chapter index (drives highlight + media swap).
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = Math.min(processChapters.length - 1, Math.max(0, Math.floor(value * processChapters.length)));
    setActiveIndex(next);
  });

  const activeChapter = processChapters[activeIndex];

  return (
    <Section id="proceso" divider>
      <div className="mb-9 text-center">
        <SectionLabel className="justify-center">Cómo trabajamos</SectionLabel>
        <h2 className="mt-3 font-display text-[clamp(1.75rem,4vw,2.75rem)] uppercase tracking-tight">
          Cinco capítulos.
        </h2>
      </div>

      <div className="grid items-start gap-8 lg:grid-cols-[auto_1fr_1.1fr] lg:gap-12">
        {/* Progress rail (hidden on small screens). */}
        <div className="relative hidden w-0.5 self-stretch bg-[var(--line-strong)] lg:block">
          <motion.div
            className="absolute inset-x-0 top-0 origin-top bg-orange"
            style={{ scaleY: scrollYProgress, height: "100%" }}
            aria-hidden
          />
        </div>

        {/* Chapter list — the scroll target. */}
        <div ref={ref}>
          {processChapters.map((chapter, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={chapter.numeral}
                className={`border-b border-[var(--line)] py-5 transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-55"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`font-display text-3xl transition-colors duration-300 ${
                      isActive ? "text-orange" : "text-[var(--line-strong)]"
                    }`}
                  >
                    {chapter.numeral}
                  </span>
                  <div>
                    <div className="font-display text-lg uppercase tracking-tight">
                      Capítulo {chapter.numeral} — {chapter.title}
                    </div>
                    <p className="text-sm text-fg-muted">{chapter.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sticky media that changes per active chapter. */}
        <div className="lg:sticky lg:top-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChapter.numeral}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <MediaFrame ratio="4/5" label={`Capítulo ${activeChapter.numeral} · ${activeChapter.title}`} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
