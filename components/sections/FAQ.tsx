"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { faqs } from "@/lib/data";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section id="faq" className="relative py-28 sm:py-36">
      <div className="container-lux grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
        <FadeIn>
          <p className="eyebrow">Good to know</p>
          <h2 className="mt-4 max-w-md text-4xl font-light sm:text-5xl">
            Questions we hear before every first trip
          </h2>
          <p className="mt-4 max-w-sm text-sm text-ink-500 dark:text-ivory-400">
            Can&apos;t find what you&apos;re after? Send it to us directly —
            a real trip designer answers, not a script.
          </p>
        </FadeIn>

        <div className="divide-y divide-ink-100 border-t border-ink-100 dark:divide-ivory-100/10 dark:border-ivory-100/10">
          {faqs.map((faq, i) => {
            const isOpen = openId === faq.id;
            return (
              <FadeIn key={faq.id} delay={i * 0.05}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${faq.id}`}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-lg sm:text-xl">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink-100 text-ink-700 dark:border-ivory-100/15 dark:text-ivory-300"
                    >
                      <Plus size={16} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${faq.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-12 text-sm leading-relaxed text-ink-500 dark:text-ivory-400">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
