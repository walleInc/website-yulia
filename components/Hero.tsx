"use client";

import { FadeIn } from "@/components/FadeIn";
import { CtaButton } from "@/components/CtaButton";
import { Plate } from "@/components/Plate";
import { Page } from "@/components/Page";
import { Sticker } from "@/components/Sticker";
import { Check, Squiggle } from "@/components/Doodles";

const POINTS = [
  "Первое занятие — бесплатно, без обязательств",
  "Онлайн, 60 минут — один на один",
  "Школьники и взрослые, от A1 до B2",
] as const;

export function Hero() {
  return (
    <section className="section">
      <Page>
      <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="flex min-w-0 flex-col items-start">
          <FadeIn>
            <Plate shape="burst" tone="cocoa" inline tilt={-6} className="-mb-6 -ml-4 relative z-10">
              <p className="font-script text-3xl leading-none sm:text-4xl">привет, я Юля ✿</p>
            </Plate>
            <Plate shape="blob" tone="blush" inline tilt={-1}>
              <h1 className="font-heading text-5xl text-ink sm:text-7xl lg:text-[5.2rem]">
                Английский
                <br />
                <span className="relative inline-block text-cocoa">
                  спокойно
                  <Squiggle className="absolute -bottom-3 left-0 h-3 w-full text-caramel" />
                </span>{" "}
                и по делу
              </h1>
            </Plate>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Plate shape="soft1" tone="cream" tilt={0.6} className="mt-8 max-w-xl">
              <p className="text-lg leading-relaxed text-ink sm:text-xl">
                Помогаю заговорить тем, кто «учил, но молчит», боится ошибок или
                начинает с нуля. Объясняю простыми словами, поправляю без
                давления — и вы слышите свой прогресс уже в первые недели.
              </p>
            </Plate>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Plate shape="stamp" tone="rose" tilt={-0.6} className="mt-7 max-w-xl">
              <ul className="space-y-2.5 px-1 py-1">
                {POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-base text-ink sm:text-lg">
                    <Check className="mt-1 h-6 w-6 shrink-0 text-accent-dark" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Plate>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-9">
              <CtaButton>Записаться на пробный урок</CtaButton>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.15} x={30} rotate={2} className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[390px]">
          <div aria-hidden className="absolute -inset-4 -z-10 rotate-[5deg] rounded-sm bg-blush shadow-[0_10px_18px_rgba(74,52,40,0.25)]" />
          <Sticker
            src="/images/yulia-hero.jpg"
            alt="Юля Юдина, преподаватель английского"
            width={767}
            height={1024}
            aspect="4 / 5"
            position="45% 18%"
            tape="center"
            priority
          />
        </FadeIn>
      </div>
      </Page>
    </section>
  );
}
