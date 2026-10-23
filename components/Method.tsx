"use client";

import { FadeIn } from "@/components/FadeIn";
import { Plate } from "@/components/Plate";
import { Page } from "@/components/Page";
import { Snapshot } from "@/components/Snapshot";
import { Squiggle } from "@/components/Doodles";

const STEPS = [
  {
    title: "Разминка",
    text: "Картинка и вопрос — мягкий вход в английский и настрой на урок. Никаких «а теперь переведите».",
  },
  {
    title: "Новая тема",
    text: "Коротко и понятно: без воды, с примерами, которые запоминаются, а не только записываются.",
  },
  {
    title: "Практика",
    text: "Упражнения и разговор — закрепляем сразу, пока тема свежая, а не «на потом».",
  },
  {
    title: "Живая лексика",
    text: "Интересные тексты, фразы из жизни и иногда песни — слова, которые пригодятся на самом деле.",
  },
  {
    title: "Повторение и ДЗ",
    text: "Домашнее задание по теме урока и регулярное повторение — прогресс виден, а не «где-то в голове».",
  },
] as const;

export function Method() {
  return (
    <section className="section" id="method">
      <Page>
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
      <div>
        <FadeIn>
          <Plate shape="blob" tone="blush" inline tilt={-1}>
            <h2 className="font-heading text-4xl text-ink sm:text-5xl lg:text-6xl">
              Как проходит{" "}
              <span className="relative inline-block text-cocoa">
                урок
                <Squiggle className="absolute -bottom-2 left-0 h-3 w-full text-caramel" />
              </span>
            </h2>
          </Plate>
          <Plate shape="soft2" tone="cream" tilt={0.7} className="mt-6 max-w-xl">
            <p className="text-lg text-ink">
              Онлайн, 60 минут. Структура, которая держит фокус, и место для
              живого общения.
            </p>
          </Plate>
        </FadeIn>

        <ol className="mt-10 space-y-6 sm:space-y-7">
          {STEPS.map((step, i) => (
            <FadeIn key={step.title} x={i % 2 ? 24 : -24}>
              <li className="flex items-center gap-4 sm:gap-6">
                <Plate shape="burst" tone={i % 2 ? "cocoa" : "rose"} className="shrink-0" tilt={i % 2 ? 8 : -8}>
                  <span className="font-heading block w-6 text-center text-4xl leading-none sm:w-8 sm:text-5xl">
                    {i + 1}
                  </span>
                </Plate>
                <Plate
                  shape={i % 2 ? "soft2" : "soft1"}
                  tone={["cream", "blush", "cream", "blush", "cream"][i] as "cream" | "blush"}
                  className="flex-1"
                  tilt={i % 2 ? 0.6 : -0.6}
                >
                  <h3 className="font-heading text-3xl text-cocoa sm:text-4xl">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-lg leading-relaxed text-ink">
                    {step.text}
                  </p>
                </Plate>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
      <FadeIn x={30} rotate={1} className="lg:sticky lg:top-28">
        <Snapshot
          src="/images/london-bigben.jpg"
          alt="Биг-Бен"
          width={335}
          height={597}
          aspect="3 / 4"
          position="50% 25%"
          tilt={2}
          tape="right"
          className="mx-auto w-[75%] max-w-[340px] lg:w-full"
        />
      </FadeIn>
      </div>
      </Page>
    </section>
  );
}
