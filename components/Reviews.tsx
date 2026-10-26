"use client";

import { FadeIn } from "@/components/FadeIn";
import { Pin } from "@/components/Pin";
import { Plate } from "@/components/Plate";
import { REVIEWS } from "@/lib/constants";

const TILTS = [-1.2, 1.4, 1, -1.5] as const;
const TONES = ["cream", "blush", "rose", "cream"] as const;
const PINS = ["cocoa", "rose", "caramel", "cocoa"] as const;

function ReviewNote({ review, i }: { review: (typeof REVIEWS)[number]; i: number }) {
  return (
    <div className="relative h-full pt-4">
      <Pin tone={PINS[i % PINS.length]} className="left-1/2 -top-1 -translate-x-1/2" />
      <Plate shape={i % 2 ? "soft2" : "soft1"} tone={TONES[i % TONES.length]} className="h-full">
        <p className="text-lg leading-relaxed text-ink sm:text-xl">{review.text}</p>
      </Plate>
    </div>
  );
}

export function Reviews() {
  return (
    <section className="section" id="reviews">
      <div className="section-inner">
        <div className="w-full">
          <FadeIn className="flex flex-col items-center text-center">
            <Plate shape="blob" tone="blush" inline tilt={-1}>
              <h2 className="font-heading text-4xl text-ink sm:text-5xl lg:text-6xl">
                Что говорят ученики
              </h2>
            </Plate>
            <Plate shape="soft2" tone="cream" tilt={0.8} className="mt-6 max-w-2xl">
              <p className="text-xl text-ink">
                Давайте сделаем обучение не только эффективным, но и приятным — в
                вашем темпе, без страха ошибок.
              </p>
            </Plate>
          </FadeIn>

          <div
            className="-mx-2 mt-10 flex snap-x snap-mandatory items-stretch gap-5 overflow-x-auto px-5 pb-6 pt-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:hidden [&::-webkit-scrollbar]:hidden"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {REVIEWS.map((review, i) => (
              <div
                key={`mobile-${i}`}
                className="w-[88%] shrink-0 snap-center"
                style={{ rotate: `${TILTS[i % TILTS.length]}deg` }}
              >
                <ReviewNote review={review} i={i} />
              </div>
            ))}
          </div>

          <div className="mt-12 hidden gap-x-8 gap-y-10 sm:grid sm:grid-cols-2">
            {REVIEWS.map((review, i) => (
              <FadeIn key={`desktop-${i}`} delay={(i % 2) * 0.1} rotate={TILTS[i % TILTS.length]}>
                <ReviewNote review={review} i={i} />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
