"use client";

import { FadeIn } from "@/components/FadeIn";
import { Plate } from "@/components/Plate";
import { StickerCollage } from "@/components/StickerCollage";
import { Check } from "@/components/Doodles";
import { AUDIENCE } from "@/lib/constants";

export function Audience() {
  return (
    <section className="section" id="audience">
      <div className="section-inner">
        <div className="mx-auto max-w-3xl lg:max-w-4xl lg:grid lg:grid-cols-[1fr_16rem] lg:items-center lg:gap-10">
        <div className="flex flex-col items-start gap-6">
          <FadeIn>
            <Plate shape="blob" tone="blush" inline tilt={-1}>
              <h2 className="font-heading text-3xl text-ink sm:text-5xl">
                Кому подойдут занятия
              </h2>
            </Plate>
            <Plate shape="soft2" tone="cream" tilt={0.5} className="mt-5 max-w-xl">
              <p className="text-lg text-ink sm:text-xl">
                Работаю онлайн с теми, кто хочет заговорить уверенно — без
                спешки и лишнего стресса. Для путешествий, для себя и для
                спокойного прогресса в большом мире.
              </p>
            </Plate>
          </FadeIn>

          <FadeIn delay={0.08}>
            <Plate shape="soft1" tone="blush" tilt={-0.4} className="w-full">
              <ul className="space-y-3">
                {AUDIENCE.map((item) => (
                  <li key={item} className="flex gap-3 text-lg text-ink sm:text-xl">
                    <Check className="mt-1 h-6 w-6 shrink-0 text-cocoa" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Plate>
          </FadeIn>

          <FadeIn delay={0.12}>
            <Plate shape="burst" tone="cocoa" inline tilt={-4}>
              <span className="font-script text-3xl leading-tight">
                A1 → B2:
                <br />
                понятный путь
              </span>
            </Plate>
          </FadeIn>
        </div>

        <StickerCollage
          items={[
            { src: "/images/stickers/audience-nyc.jpg", tilt: 3 },
            { src: "/images/stickers/audience-suitcase.jpg", tilt: -3 },
          ]}
          className="mt-8 w-full max-w-xs lg:mt-0 lg:max-w-none"
        />
        </div>
      </div>
    </section>
  );
}
