"use client";

import { FadeIn } from "@/components/FadeIn";
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
      <div className="mx-auto w-full max-w-[900px] px-5 sm:px-8">
        <FadeIn>
          <h2 className="font-heading text-center text-5xl text-ink sm:text-6xl">
            Как проходит{" "}
            <span className="relative inline-block text-cocoa">
              урок
              <Squiggle className="absolute -bottom-2 left-0 h-3 w-full text-rose" />
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-center text-lg text-ink/80">
            Онлайн, 60 минут. Структура, которая держит фокус, и место для
            живого общения.
          </p>
        </FadeIn>

        <ol className="mt-14 space-y-10 sm:space-y-12">
          {STEPS.map((step, i) => (
            <FadeIn key={step.title} x={i % 2 ? 24 : -24}>
              <li className="flex items-start gap-5 sm:gap-8">
                <span className="font-heading w-14 shrink-0 text-right text-7xl leading-none text-caramel sm:w-20 sm:text-8xl">
                  {i + 1}
                </span>
                <div className="border-b-2 border-dashed border-cocoa/30 pb-8 flex-1">
                  <h3 className="font-heading text-4xl text-cocoa sm:text-5xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-lg leading-relaxed text-ink/85 sm:text-xl">
                    {step.text}
                  </p>
                </div>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
