"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Page } from "@/components/Page";
import { Snapshot } from "@/components/Snapshot";
import { Plate } from "@/components/Plate";
import { FadeIn } from "@/components/FadeIn";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section" id="faq">
      <Page>
      <div className="mx-auto w-full max-w-[760px]">
        <FadeIn>
          <div className="text-center">
            <Plate shape="blob" tone="blush" inline tilt={-1}>
              <h2 className="font-heading text-4xl text-ink sm:text-5xl lg:text-6xl">Частые вопросы</h2>
            </Plate>
          </div>
        </FadeIn>

        <FadeIn>
          <Snapshot
            src="/images/london-bus.jpg"
            alt="Лондонский автобус"
            width={597}
            height={335}
            aspect="16 / 9"
            position="50% 60%"
            tilt={-1.5}
            tape="center"
            className="mx-auto mt-10 w-full max-w-[460px]"
          />
        </FadeIn>

        <div className="mt-12">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <FadeIn key={item.q} delay={i * 0.05}>
                <div className="mb-5">
                  <Plate shape={i % 2 ? "soft2" : "soft1"} tone="blush" tilt={i % 2 ? 0.5 : -0.5}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="font-heading text-3xl text-ink sm:text-4xl">
                      {item.q}
                    </span>
                    <motion.span
                      aria-hidden
                      className="font-heading text-5xl leading-none text-cocoa"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      +
                    </motion.span>
                  </button>
                  </Plate>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3"><Plate shape="soft1" tone="cream"><p className="text-lg leading-relaxed text-ink sm:text-xl">
                          {item.a}
                        </p></Plate></div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
      </Page>
    </section>
  );
}
