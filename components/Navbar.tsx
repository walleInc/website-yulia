"use client";

import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-blush/90 shadow-[0_1px_0_rgba(134,99,79,0.2)] backdrop-blur-md" : "bg-transparent"
      }`}
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
    </header>
  );
}
