"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="snap-section" id="faq">
      <div className="mx-auto w-full max-w-[720px] px-5 sm:px-8">
        <FadeIn>
          <h2 className="font-heading text-center text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            FAQ
          </h2>
        </FadeIn>

        <div className="mt-8 space-y-2.5 sm:mt-10 sm:space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <FadeIn key={item.q} delay={i * 0.05}>
                <div className="overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-3.5 text-left text-base font-semibold text-ink sm:px-6 sm:py-4 sm:text-lg"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-rose-50 px-5 pb-4 pt-3 text-base leading-relaxed text-ink/70 sm:px-6">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
