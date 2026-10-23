"use client";

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
  );
}

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

        {/* Mobile gallery */}
        <div
          className="-mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:hidden [&::-webkit-scrollbar]:hidden"
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

        {/* Tablet / desktop columns */}
        <div className="mt-12 hidden columns-1 gap-5 sm:block sm:columns-2 lg:columns-3">
          {REVIEWS.map((review, i) => (
            <FadeIn
              key={`desktop-${review.name}-${i}`}
              delay={i * 0.05}
              className="mb-5 break-inside-avoid"
            >
              <ReviewCard review={review} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
