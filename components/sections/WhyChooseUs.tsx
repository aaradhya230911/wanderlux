"use client";

import { motion } from "framer-motion";
import { Compass, Shield, Sparkles, Headset, Globe2, Gem } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { features, type Feature } from "@/lib/data";

const ICONS: Record<Feature["icon"], typeof Compass> = {
  compass: Compass,
  shield: Shield,
  sparkles: Sparkles,
  concierge: Headset,
  globe: Globe2,
  gem: Gem,
};

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-28 sm:py-36">
      <div className="container-lux">
        <FadeIn>
          <p className="eyebrow">Why WanderLux</p>
          <h2 className="mt-4 max-w-xl text-4xl font-light sm:text-5xl">
            The difference is in what you never have to think about
          </h2>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = ICONS[feature.icon];
            return (
              <FadeIn key={feature.id} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="group h-full rounded-4xl border border-ink-100 bg-white p-7 shadow-soft transition-colors hover:border-champagne-300 dark:border-ivory-100/10 dark:bg-ink-800"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-500 transition-colors group-hover:bg-champagne-400 group-hover:text-ink-900 dark:text-teal-200">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 font-display text-xl">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ivory-400">
                    {feature.description}
                  </p>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
