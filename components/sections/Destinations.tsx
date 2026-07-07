"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { destinations } from "@/lib/data";

export function Destinations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 60%"],
  });
  // The route line draws itself as the section scrolls into view —
  // a small nod to a flight path, since this is a travel company.
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="destinations" className="relative py-28 sm:py-36">
      <div className="container-lux">
        <FadeIn>
          <p className="eyebrow">Where we go</p>
          <div className="mt-4 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <h2 className="max-w-xl text-4xl font-light sm:text-5xl">
              A short list of the places worth flying for
            </h2>
            <p className="max-w-sm text-sm text-ink-500 dark:text-ivory-400">
              Six of our most-requested destinations this season — each one
              designed around what makes it worth the trip.
            </p>
          </div>
        </FadeIn>

        <div ref={sectionRef} className="relative mt-16">
          {/* Flight-path line, desktop only — decorative, sits behind the cards */}
          <svg
            className="pointer-events-none absolute inset-x-0 -top-6 hidden h-[420px] w-full lg:block"
            viewBox="0 0 1200 420"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden
          >
            <motion.path
              d="M 20 60 C 220 180, 380 -20, 600 100 S 980 220, 1180 40"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="1 10"
              strokeLinecap="round"
              className="text-champagne-400/70"
              style={{ pathLength }}
            />
          </svg>

          <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((dest, i) => (
              <FadeIn key={dest.id} delay={i * 0.08}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group relative overflow-hidden rounded-4xl bg-ink-900 shadow-soft"
                >
                  <div className="relative h-[420px] w-full overflow-hidden">
                    <Image
                      src={dest.image}
                      alt={`${dest.name}, ${dest.country}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/10 to-transparent" />
                  </div>

                  <div className="absolute left-5 top-5 rounded-full glass glass-border px-3 py-1 text-xs font-medium text-ivory-100">
                    {dest.tag}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <h3 className="font-display text-2xl text-ivory-100">
                          {dest.name}
                        </h3>
                        <p className="text-xs uppercase tracking-wide text-ivory-400">
                          {dest.country}
                        </p>
                      </div>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-champagne-400 text-ink-900 transition-transform group-hover:rotate-45">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-ivory-300/90">{dest.blurb}</p>
                    <p className="mt-4 text-xs text-champagne-300">
                      From ${dest.priceFrom.toLocaleString()} per person
                    </p>
                  </div>
                </motion.article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
