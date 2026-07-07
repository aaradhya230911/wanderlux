"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const go = (dir: 1 | -1) => {
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative overflow-hidden bg-teal-500 py-28 text-ivory-100 sm:py-36 dark:bg-teal-700">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-champagne-400/10 blur-3xl"
        aria-hidden
      />
      <div className="container-lux relative">
        <FadeIn>
          <p className="eyebrow text-champagne-300">In their words</p>
          <h2 className="mt-4 max-w-xl text-4xl font-light sm:text-5xl">
            Trips people still talk about
          </h2>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto]">
          <div className="relative min-h-[280px]">
            <Quote
              className="absolute -left-2 -top-4 text-champagne-400/30"
              size={64}
              strokeWidth={1}
              aria-hidden
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-6"
              >
                <div className="mb-4 flex gap-1" aria-label={`${active.rating} out of 5 stars`}>
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-champagne-400 text-champagne-400" />
                  ))}
                </div>
                <p className="max-w-2xl text-2xl font-light leading-snug sm:text-3xl">
                  &ldquo;{active.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="font-medium">{active.name}</p>
                  <p className="text-sm text-ivory-300/80">
                    {active.location} · {active.trip}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-3 lg:flex-col lg:items-end lg:justify-between">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory-100/25 transition-colors hover:border-champagne-400 hover:text-champagne-300"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory-100/25 transition-colors hover:border-champagne-400 hover:text-champagne-300"
              >
                <ChevronRight size={18} />
              </button>
            </div>
            <div className="flex gap-2 lg:flex-col">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial from ${t.name}`}
                  aria-current={i === index}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-champagne-400" : "w-1.5 bg-ivory-100/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
