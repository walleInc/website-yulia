"use client";

import { Quote } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { REVIEWS } from "@/lib/constants";
import { motion } from "framer-motion";

function ReviewCard({
  review,
}: {
  review: (typeof REVIEWS)[number];
}) {
  return (
    <motion.article
      className="relative flex h-full flex-col rounded-2xl bg-white p-5 shadow-md shadow-rose-100/50 ring-1 ring-rose-100 sm:p-6"
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      <Quote
        className="mb-3 h-8 w-8 text-rose-300"
        strokeWidth={1.5}
        aria-hidden
      />
      <p className="flex-1 text-base leading-relaxed text-ink/70 sm:text-[17px]">
        {review.text}
      </p>
      <div className="mt-5 border-t border-rose-50 pt-4">
        <p className="font-heading text-base font-bold text-ink">
          {review.name}
        </p>
        <span className="mt-1 inline-block rounded-full bg-rose-50 px-2.5 py-0.5 text-xs font-medium text-accent-dark">
          {review.role}
        </span>
      </div>
    </motion.article>
  );
}

export function Reviews() {
  return (
    <section className="snap-section" id="reviews">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <FadeIn>
          <h2 className="font-heading text-center text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Что говорят ученики
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-lg text-ink/70">
            Реальные отзывы родителей и взрослых учеников.
          </p>
        </FadeIn>

        {/* Mobile gallery */}
        <div
          className="-mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:hidden [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {REVIEWS.map((review, i) => (
            <div
              key={`mobile-${review.name}-${i}`}
              className="w-[85%] shrink-0 snap-center"
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        {/* Tablet / desktop grid */}
        <div className="mt-8 hidden gap-5 sm:grid sm:grid-cols-2">
          {REVIEWS.map((review, i) => (
            <FadeIn key={`desktop-${review.name}-${i}`} delay={i * 0.05}>
              <ReviewCard review={review} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
