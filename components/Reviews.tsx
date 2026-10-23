"use client";

import { FadeIn } from "@/components/FadeIn";
import { REVIEWS } from "@/lib/constants";

const TILTS = [-1.5, 1.2, 1, -1.2] as const;

function ReviewNote({ review }: { review: (typeof REVIEWS)[number] }) {
  return (
    <div className="sheet-wrap h-full">
      <article className="sheet relative flex h-full flex-col px-6 pb-12 pt-9 sm:px-8">
        <span aria-hidden className="tape left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rotate-[-3deg]" />
        <p className="sheet-text flex-1 text-base text-ink/90 sm:text-[17px]">
          {review.text}
        </p>
        <p className="font-script mt-4 text-3xl leading-none text-cocoa">
          — {review.name},{" "}
          <span className="text-2xl text-caramel">{review.role.toLowerCase()}</span>
        </p>
      </article>
    </div>
  );
}

export function Reviews() {
  return (
    <section className="section" id="reviews">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <FadeIn>
          <h2 className="font-heading text-center text-5xl text-ink sm:text-6xl">
            Что говорят <span className="marker">ученики</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-ink/85 sm:text-xl">
            Давайте сделаем обучение не только эффективным, но и приятным — в
            вашем темпе, без страха ошибок. Вот что пишут те, кто уже начал.
          </p>
        </FadeIn>

        {/* Mobile gallery */}
        <div
          className="-mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 pt-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:hidden [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {REVIEWS.map((review, i) => (
            <div
              key={`mobile-${i}`}
              className="w-[85%] shrink-0 snap-center"
              style={{ rotate: `${TILTS[i % TILTS.length]}deg` }}
            >
              <ReviewNote review={review} />
            </div>
          ))}
        </div>

        {/* Tablet / desktop grid */}
        <div className="mt-14 hidden gap-x-8 gap-y-12 sm:grid sm:grid-cols-2">
          {REVIEWS.map((review, i) => (
            <FadeIn key={`desktop-${i}`} delay={(i % 2) * 0.1} rotate={TILTS[i % TILTS.length]}>
              <ReviewNote review={review} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
