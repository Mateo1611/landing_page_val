"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

/**
 * Services as "modes of production" (Direction A §05): an interactive list on
 * the left controls a sticky preview on the right. Hover or focus a row to swap
 * the preview — the active row lights up, the rest dim. Grouped by need, not
 * industry (docs/brief §3). Client component for the active-item state.
 */
export function ServicesSection() {
  const [activeId, setActiveId] = useState(services[0].id);
  const active = services.find((service) => service.id === activeId) ?? services[0];

  return (
    <Section id="servicios" divider>
      <div className="mb-8">
        <SectionLabel>Qué hacemos</SectionLabel>
        <h2 className="mt-3 max-w-[18ch] font-display text-[clamp(1.75rem,4vw,2.75rem)] uppercase leading-[0.96] tracking-tight">
          Servicios por necesidad, no por industria.
        </h2>
      </div>

      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr]">
        {/* Interactive list. */}
        <ul className="border-t border-[var(--line)]">
          {services.map((service) => {
            const isActive = service.id === activeId;
            return (
              <li key={service.id} className="border-b border-[var(--line)]">
                <button
                  type="button"
                  // Pointer + focus both drive selection so it works for keyboard too.
                  onMouseEnter={() => setActiveId(service.id)}
                  onFocus={() => setActiveId(service.id)}
                  onClick={() => setActiveId(service.id)}
                  aria-pressed={isActive}
                  className="flex w-full items-center justify-between gap-5 py-5 text-left"
                >
                  <span className="flex items-center gap-5">
                    <span
                      className={`font-display text-3xl tabular-nums transition-colors duration-300 ${
                        isActive ? "text-orange" : "text-[var(--line-strong)]"
                      }`}
                    >
                      {service.index}
                    </span>
                    <span>
                      <span
                        className={`block font-display text-xl uppercase tracking-tight transition-colors duration-300 ${
                          isActive ? "text-fg" : "text-fg-muted"
                        }`}
                      >
                        {service.title}
                      </span>
                      <span className="block text-sm text-fg-muted">{service.need}</span>
                    </span>
                  </span>
                  <span
                    className={`font-mono text-[0.7rem] uppercase tracking-[0.14em] transition-colors duration-300 ${
                      isActive ? "text-orange" : "text-fg-faint"
                    }`}
                  >
                    {isActive ? "Activo ▸" : "→"}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Sticky preview of the active service. */}
        <div className="lg:sticky lg:top-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <MediaFrame ratio="4/3" label={`PREVIEW · ${active.title}`} />
            </motion.div>
          </AnimatePresence>

          <div className="mt-5">
            <h3 className="font-display text-xl uppercase tracking-tight">{active.title}</h3>
            <p className="mt-2 max-w-[40ch] text-sm text-fg-muted">{active.description}</p>
            <div className="mt-5">
              <Button href="#contacto" size="md">
                {active.ctaLabel} →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
