"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import type { FAQItem } from "@/types/portfolio";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type AccordionProps = {
  items: FAQItem[];
  /** Index open by default (the wireframe opens the first one). */
  defaultOpen?: number;
};

/**
 * Premium single-open accordion. Built on real <button> headers with
 * aria-expanded/controls for keyboard + screen-reader support; the answer
 * height animates with Motion (skipped under reduced motion).
 */
export function Accordion({ items, defaultOpen = 0 }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[defaultOpen]?.id ?? null);
  const reducedMotion = useReducedMotion();

  return (
    <div className="border-t border-[var(--line)]">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `faq-panel-${item.id}`;
        const buttonId = `faq-button-${item.id}`;

        return (
          <div className="border-b border-[var(--line)]" key={item.id}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="text-base font-bold text-fg">{item.question}</span>
                <span
                  className={`grid size-6 flex-none place-items-center rounded-[6px] border font-mono text-sm transition-colors duration-300 ${
                    isOpen
                      ? "border-orange bg-orange text-[var(--color-base)]"
                      : "border-[var(--line-strong)] text-fg-muted"
                  }`}
                  aria-hidden
                >
                  {isOpen ? "–" : "+"}
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={reducedMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-prose pb-5 text-sm text-fg-muted">{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
