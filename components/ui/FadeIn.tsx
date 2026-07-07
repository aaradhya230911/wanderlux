"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  /** Use "up" for the default rise, or "none" for a plain fade */
  direction?: "up" | "none";
};

/**
 * Fades and lifts content into view once it enters the viewport.
 * `once: true` keeps re-render cost low and avoids distracting re-triggers
 * on every scroll direction change.
 */
export function FadeIn({
  children,
  delay = 0,
  y = 24,
  className,
  direction = "up",
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: direction === "up" ? y : 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
