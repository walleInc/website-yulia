"use client";

import { FadeIn } from "@/components/FadeIn";
import { Sticker } from "@/components/Sticker";
import { Check, Circle } from "@/components/Doodles";
import { AUDIENCE } from "@/lib/constants";

export function Audience() {
  return (
    <section className="section" id="audience">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
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
          <p className="font-script mt-6 rotate-2 text-center text-3xl text-cocoa">
            учу так, как хотела бы учиться сама
          </p>
        </FadeIn>

        <FadeIn>
          <div className="sheet-wrap">
            <div className="sheet sheet--margin px-6 pb-14 pt-8 pl-16 sm:px-12 sm:pb-16 sm:pl-24">
              <h2 className="font-heading text-5xl text-ink sm:text-6xl">
                Кому подойдут <span className="marker">занятия</span>
              </h2>
              <p className="sheet-text mt-6 text-ink/85">
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
              <div className="relative mt-10 inline-block px-8 py-3">
                <Circle className="absolute inset-0 h-full w-full text-caramel" />
                <span className="font-script relative text-3xl text-cocoa">
                  A1 → B2: понятный путь роста
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
