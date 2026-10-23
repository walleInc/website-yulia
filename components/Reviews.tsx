"use client";

import { FadeIn } from "@/components/FadeIn";
import { Page } from "@/components/Page";
import { Pin } from "@/components/Pin";
import { Plate } from "@/components/Plate";
import { REVIEWS } from "@/lib/constants";

const TILTS = [-1.2, 1.4, 1, -1.5] as const;
const TONES = ["", "sheet--blush", "sheet--rose", ""] as const;
const PINS = ["cocoa", "rose", "caramel", "cocoa"] as const;

function ReviewNote({ review, i }: { review: (typeof REVIEWS)[number]; i: number }) {
  return (
    <div className="sheet-wrap h-full pt-4">
      <Pin tone={PINS[i % PINS.length]} className="left-1/2 -top-1 -translate-x-1/2" />
      <article className={`sheet ${TONES[i % TONES.length]} h-full px-6 pb-12 pt-10 sm:px-8`}>
        <p className="sheet-text text-ink">{review.text}</p>
      </article>
    </div>
  );
}

export function Reviews() {
  return (
    <section className="section" id="reviews">
      <Page>
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

          {/* Mobile gallery */}
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

          {/* Tablet / desktop: 2 x 2 */}
          <div className="mt-12 hidden gap-x-8 gap-y-10 sm:grid sm:grid-cols-2">
            {REVIEWS.map((review, i) => (
              <FadeIn key={`desktop-${i}`} delay={(i % 2) * 0.1} rotate={TILTS[i % TILTS.length]}>
                <ReviewNote review={review} i={i} />
              </FadeIn>
            ))}
          </div>
        </div>
      </Page>
    </section>
  );
}
