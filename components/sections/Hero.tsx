"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background photograph */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2400&auto=format&fit=crop"
          alt="Sunrise over a mountain range and low clouds"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/40 to-ink-900/90" />
        <div className="absolute inset-0 bg-grain mix-blend-overlay" />
      </div>

      {/* Floating ambient orbs — quiet, brand-tinted, decorative only */}
      <div
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-champagne-400/20 blur-3xl animate-float-slow"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-24 h-96 w-96 rounded-full bg-teal-300/10 blur-3xl animate-float"
        aria-hidden
      />

      <div className="container-lux relative z-10 pt-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="eyebrow text-champagne-300"
        >
          Bespoke journeys, designed by hand
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-3xl text-5xl font-light leading-[1.05] text-ivory-100 sm:text-6xl md:text-7xl"
        >
          Travel the way it used to feel
          <span className="text-champagne-300">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-lg text-ivory-300/90"
        >
          WanderLux designs private, fully-tailored itineraries across the
          world&apos;s most extraordinary places — with a concierge behind
          every mile.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-champagne-400 px-7 py-3.5 text-sm font-medium text-ink-900 transition-all hover:bg-ivory-100"
          >
            Start planning
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#destinations"
            className="inline-flex items-center gap-2 rounded-full border border-ivory-100/30 px-7 py-3.5 text-sm font-medium text-ivory-100 transition-colors hover:border-ivory-100 hover:bg-white/5"
          >
            Explore destinations
          </a>
        </motion.div>

        {/* Stat strip */}
        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 grid max-w-2xl grid-cols-2 gap-6 border-t border-ivory-100/15 pt-8 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.id}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-2xl text-ivory-100 sm:text-3xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.id === "s3" ? 1 : 0}
                />
              </dd>
              <p className="mt-1 text-xs uppercase tracking-wide text-ivory-400/80">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.a
        href="#destinations"
        aria-label="Scroll to destinations"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-ivory-200/70 transition-colors hover:text-ivory-100"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <ChevronDown size={20} />
        </motion.span>
      </motion.a>
    </section>
  );
}
