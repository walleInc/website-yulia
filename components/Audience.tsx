"use client";

import { FadeIn } from "@/components/FadeIn";
import { Plate } from "@/components/Plate";
import { Page } from "@/components/Page";
import { Sticker } from "@/components/Sticker";
import { Check } from "@/components/Doodles";
import { AUDIENCE } from "@/lib/constants";

export function Audience() {
  return (
    <section className="section" id="audience">
      <Page>
      <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <FadeIn x={-30} rotate={-2} className="relative mx-auto w-full max-w-[320px] lg:max-w-[380px]">
          <Sticker
            src="/images/yulia-about.jpg"
            alt="Юля Юдина"
            width={908}
            height={1024}
            aspect="4 / 5"
            position="22% 22%"
            tape="left"
          />
        </FadeIn>

        <FadeIn>
          <div className="sheet-wrap">
            <div className="sheet sheet--margin px-6 pb-14 pt-8 pl-16 sm:px-12 sm:pb-16 sm:pl-24">
              <Plate shape="blob" tone="blush" inline tilt={-1}>
                <h2 className="font-heading text-3xl text-ink sm:text-5xl">
                  Кому подойдут занятия
                </h2>
              </Plate>
              <p className="sheet-text mt-6 text-ink">
                Работаю онлайн с теми, кто хочет заговорить уверенно — без
                спешки и лишнего стресса.
              </p>
              <ul className="sheet-text mt-4">
                {AUDIENCE.map((item) => (
                  <li key={item} className="flex gap-3 text-ink">
                    <Check className="mt-1 h-6 w-6 shrink-0 text-cocoa" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Plate shape="burst" tone="cocoa" inline tilt={-4} className="mt-8">
                <span className="font-script text-3xl leading-tight">
                  A1 → B2:
                  <br />
                  понятный путь
                </span>
              </Plate>
            </div>
          </div>
        </FadeIn>
      </div>
      </Page>
    </section>
  );
}
