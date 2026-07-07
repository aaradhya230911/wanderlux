"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { packages } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Packages() {
  return (
    <section id="packages" className="relative py-28 sm:py-36">
      <div className="container-lux">
        <FadeIn>
          <p className="eyebrow">Packages</p>
          <h2 className="mt-4 max-w-xl text-4xl font-light sm:text-5xl">
            Three ways to begin, all fully tailored
          </h2>
          <p className="mt-4 max-w-lg text-sm text-ink-500 dark:text-ivory-400">
            Every price is a starting point for two travelers — your trip
            designer will refine it once we know what you&apos;re after.
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <FadeIn key={pkg.id} delay={i * 0.1} className="h-full">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className={cn(
                  "relative flex h-full flex-col rounded-4xl border p-8",
                  pkg.featured
                    ? "border-champagne-400 bg-ink-900 text-ivory-100 shadow-glow"
                    : "border-ink-100 bg-white dark:border-ivory-100/10 dark:bg-ink-800"
                )}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-champagne-400 px-3 py-1 text-xs font-medium text-ink-900">
                    Most booked
                  </span>
                )}

                <h3 className="font-display text-2xl">{pkg.name}</h3>
                <p
                  className={cn(
                    "mt-2 text-sm",
                    pkg.featured ? "text-ivory-300/80" : "text-ink-500 dark:text-ivory-400"
                  )}
                >
                  {pkg.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-4xl">
                    ${pkg.price.toLocaleString()}
                  </span>
                  <span
                    className={cn(
                      "text-sm",
                      pkg.featured ? "text-ivory-400" : "text-ink-400 dark:text-ivory-500"
                    )}
                  >
                    / from, per person
                  </span>
                </div>
                <p
                  className={cn(
                    "mt-1 text-xs uppercase tracking-wide",
                    pkg.featured ? "text-champagne-300" : "text-champagne-600 dark:text-champagne-300"
                  )}
                >
                  {pkg.duration}
                </p>

                <ul className="mt-8 flex-1 space-y-3">
                  {pkg.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3 text-sm">
                      <Check
                        size={16}
                        className={cn(
                          "mt-0.5 shrink-0",
                          pkg.featured ? "text-champagne-400" : "text-teal-500 dark:text-teal-200"
                        )}
                      />
                      <span
                        className={
                          pkg.featured ? "text-ivory-200" : "text-ink-600 dark:text-ivory-300"
                        }
                      >
                        {perk}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={cn(
                    "mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors",
                    pkg.featured
                      ? "bg-champagne-400 text-ink-900 hover:bg-ivory-100"
                      : "bg-ink-900 text-ivory-100 hover:bg-champagne-500 hover:text-ink-900 dark:bg-champagne-400 dark:text-ink-900 dark:hover:bg-ivory-100"
                  )}
                >
                  Enquire about {pkg.name}
                </a>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
