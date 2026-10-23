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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-rose-100/60 bg-white/75 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 sm:h-[72px] sm:px-8">
        <a
          href="#top"
          className="font-heading text-lg font-extrabold tracking-tight text-ink sm:text-xl"
        >
          Юля <span className="text-accent">Юдина</span>
        </a>
        <a
          href="#contacts"
          className="text-base font-medium text-ink/70 transition-colors hover:text-accent"
        >
          Связаться
        </a>
      </div>
    </header>
  );
}
