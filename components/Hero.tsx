"use client";

import { FadeIn } from "@/components/FadeIn";
import { CtaButton } from "@/components/CtaButton";
import { Sticker } from "@/components/Sticker";
import { Arrow, Check, Squiggle } from "@/components/Doodles";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/constants";

const POINTS = [
  "Первое занятие — бесплатно, без обязательств",
  "Онлайн, 60 минут — один на один",
  "Школьники и взрослые, от A1 до B2",
] as const;

export function Hero() {
  return (
    <section className="section">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="flex flex-col items-start">
          <FadeIn>
            <p className="font-script text-3xl text-cocoa sm:text-4xl">
              привет, я Юля ✿
            </p>
            <h1 className="font-heading mt-2 text-6xl text-ink sm:text-7xl lg:text-[5.5rem]">
              Английский
              <br />
              <span className="relative inline-block text-cocoa">
                спокойно
                <Squiggle className="absolute -bottom-3 left-0 h-3 w-full text-rose" />
              </span>{" "}
              и по делу
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/80 sm:text-xl">
              Помогаю заговорить тем, кто «учил, но молчит», боится ошибок или
              начинает с нуля. Объясняю простыми словами, поправляю без
              давления — и вы слышите свой прогресс уже в первые недели.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <ul className="mt-7 space-y-2.5">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-base text-ink sm:text-lg">
                  <Check className="mt-1 h-6 w-6 shrink-0 text-cocoa" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-9 hidden md:block">
              <CtaButton>Записаться на пробный урок</CtaButton>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.15} x={30} rotate={2} className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[390px]">
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
          <div className="relative mt-6 -rotate-2 pl-4">
            <Arrow className="absolute -top-12 left-2 h-12 w-14 rotate-[-20deg] text-cocoa" />
            <p className="font-script text-2xl leading-tight text-ink sm:text-3xl">
              «Занимаюсь полтора года и реально вижу прогресс»
            </p>
            <p className="mt-1 font-script text-xl text-cocoa">— ученица</p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block font-script text-2xl text-cocoa underline decoration-rose decoration-[3px] underline-offset-4"
            >
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
