"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Наверх"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed right-5 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-cocoa text-paper shadow-md transition-all duration-500 hover:bg-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cocoa focus-visible:ring-offset-2 bottom-6 md:right-8 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <ChevronUp className="h-6 w-6" strokeWidth={2.5} aria-hidden />
    </button>
  );
}
