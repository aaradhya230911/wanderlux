"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  className?: string;
  /** Decimal places to preserve — e.g. 4.9 rating */
  decimals?: number;
};

export function AnimatedCounter({
  value,
  suffix = "",
  className,
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 24, stiffness: 60 });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${latest.toFixed(decimals)}${suffix}`;
      }
    });
  }, [springValue, suffix, decimals]);

  return (
    <motion.span ref={ref} className={className} aria-label={`${value}${suffix}`}>
      0{suffix}
    </motion.span>
  );
}
