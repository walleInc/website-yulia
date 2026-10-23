"use client";

import { FadeIn } from "@/components/FadeIn";
import { REVIEWS } from "@/lib/constants";
import { motion } from "framer-motion";

export function Reviews() {
  return (
    <section className="section-pad" id="reviews">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <FadeIn>
          <h2 className="font-heading text-center text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Что говорят ученики
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-ink/70">
            Реальные отзывы родителей и взрослых учеников.
          </p>
        </FadeIn>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {REVIEWS.map((review, i) => (
            <FadeIn key={`${review.name}-${i}`} delay={i * 0.05} className="mb-5 break-inside-avoid">
              <motion.article
                className="rounded-2xl bg-slate-800 p-6 text-white shadow-lg sm:p-7"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                <div className="mb-4">
                  <p className="font-heading text-lg font-bold">{review.name}</p>
                  <p className="mt-0.5 text-base text-rose-200">{review.role}</p>
                </div>
                <p className="text-base leading-relaxed text-slate-100 sm:text-[17px]">
                  {review.text}
                </p>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
