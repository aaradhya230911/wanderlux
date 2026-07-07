"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { gallery } from "@/lib/data";

export function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 420, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="relative py-28 sm:py-36">
      <div className="container-lux">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">The gallery</p>
              <h2 className="mt-4 max-w-xl text-4xl font-light sm:text-5xl">
                Moments from the road
              </h2>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollBy(-1)}
                aria-label="Scroll gallery left"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-100 transition-colors hover:border-champagne-400 hover:text-champagne-600 dark:border-ivory-100/15"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => scrollBy(1)}
                aria-label="Scroll gallery right"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-100 transition-colors hover:border-champagne-400 hover:text-champagne-600 dark:border-ivory-100/15"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </FadeIn>

        <div
          ref={trackRef}
          className="mt-12 flex snap-x-mandatory gap-5 overflow-x-auto pb-4"
          style={{ scrollbarWidth: "thin" }}
        >
          {gallery.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(i)}
              className="group relative h-[380px] w-[300px] shrink-0 snap-center overflow-hidden rounded-4xl focus-visible:ring-2 focus-visible:ring-champagne-400 sm:w-[340px]"
              aria-label={`Open photo: ${item.caption}`}
            >
              <Image
                src={item.image}
                alt={item.caption}
                fill
                sizes="340px"
                className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <p className="absolute bottom-4 left-4 text-sm font-medium text-ivory-100 opacity-0 transition-opacity group-hover:opacity-100">
                {item.caption}
              </p>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={gallery[activeIndex].caption}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-900/90 p-6 backdrop-blur-sm"
            onClick={() => setActiveIndex(null)}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close photo viewer"
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-ivory-100/30 text-ivory-100 hover:border-champagne-400"
            >
              <X size={18} />
            </button>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative h-[70vh] w-full max-w-3xl overflow-hidden rounded-4xl"
            >
              <Image
                src={gallery[activeIndex].image}
                alt={gallery[activeIndex].caption}
                fill
                sizes="90vw"
                className="object-cover"
              />
              <p className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink-900/90 to-transparent p-6 text-ivory-100">
                {gallery[activeIndex].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
