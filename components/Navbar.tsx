"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 12);
    // Hide on the way down, return as soon as the user scrolls up
    if (y > prev && y > 80) setHidden(true);
    else if (y < prev) setHidden(false);
  });

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-blush/90 shadow-[0_1px_0_rgba(133,71,109,0.2)] backdrop-blur-md" : "bg-transparent"
      }`}
      animate={{ y: hidden ? "-100%" : 0 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 sm:h-[72px] sm:px-8">
        <a href="#top" className="font-heading text-3xl font-bold text-ink sm:text-4xl">
          Юля <span className="text-cocoa">Юдина</span>
        </a>
        <a
          href="#contacts"
          className="font-heading text-2xl font-bold text-cocoa underline decoration-rose decoration-[3px] underline-offset-4 transition-colors hover:text-ink"
        >
          Связаться
        </a>
      </div>
    </motion.header>
  );
}
