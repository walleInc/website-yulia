"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Initial horizontal offset in px, for notes sliding in from the side */
  x?: number;
  /** Final tilt in degrees — notes lie slightly crooked, like on a desk */
  rotate?: number;
};

const EASE = [0.25, 0.1, 0.25, 1] as const;

export function FadeIn({ children, className, delay = 0, x = 0, rotate = 0 }: FadeInProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={className} style={{ rotate: `${rotate}deg` }}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={{ willChange: "transform, opacity" }}
      initial={{ opacity: 0, y: 24, x, rotate: rotate + (x ? 1.5 : 0) }}
      whileInView={{ opacity: 1, y: 0, x: 0, rotate }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
