"use client";

import { FadeIn } from "@/components/FadeIn";
import { CtaButton } from "@/components/CtaButton";
import { Check, Circle } from "@/components/Doodles";
import { PRICES } from "@/lib/constants";

const BENEFITS = [
  "Познакомимся и оценим ваш уровень",
  "Разберём трудности и цели",
  "Наметим комфортный маршрут",
  "Спокойный темп и обратная связь на уроке",
] as const;

export function PricingCTA() {
  return (
    <section className="section" id="pricing">
      <div className="mx-auto grid w-full max-w-[1200px] items-start gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <FadeIn rotate={-1}>
          <h2 className="font-heading text-5xl text-ink sm:text-6xl">
            Пробный урок
          </h2>
          <div className="relative mt-6 inline-block px-10 py-4">
            <Circle className="absolute inset-0 h-full w-full text-cocoa" />
            <span className="font-heading relative text-6xl text-cocoa sm:text-7xl">
              бесплатно
            </span>
          </div>
          <ul className="mt-8 space-y-3">
            {BENEFITS.map((text) => (
              <li key={text} className="flex items-start gap-3 text-lg text-ink sm:text-xl">
                <Check className="mt-1 h-6 w-6 shrink-0 text-cocoa" />
                {text}
              </li>
            ))}
          </ul>
          <div className="mt-10 hidden md:block">
            <CtaButton>Записаться</CtaButton>
          </div>
        </FadeIn>

        <FadeIn x={30} rotate={1}>
          <div className="sheet-wrap">
            <div className="sheet px-6 pb-14 pt-9 sm:px-10">
              <span aria-hidden className="tape left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rotate-[3deg]" />
              <h3 className="font-heading text-4xl text-cocoa sm:text-5xl">Цены</h3>
              <ul className="sheet-text mt-3">
                {PRICES.map((item) => (
                  <li key={item.label} className="flex items-baseline gap-3 text-lg text-ink">
                    <span>{item.label}</span>
                    <span className="dotted-leader" />
                    <span className="font-heading text-3xl font-bold text-cocoa">
                      {item.price} ₽
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-script mt-4 text-2xl text-caramel">
                цена за 60 минут — чем больше пакет, тем выгоднее
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
