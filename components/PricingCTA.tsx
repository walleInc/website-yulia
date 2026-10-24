"use client";

import { FadeIn } from "@/components/FadeIn";
import { CtaButton } from "@/components/CtaButton";
import { Plate } from "@/components/Plate";
import { Pin } from "@/components/Pin";
import { SceneWash } from "@/components/SceneWash";
import { Check } from "@/components/Doodles";
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
      <SceneWash src="/images/overlay-city-plane.jpg" position="50% 30%" strength="strong" />
      <div className="section-inner">
        <div className="grid w-full grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn rotate={-1}>
            <Plate shape="blob" tone="blush" inline tilt={-1}>
              <h2 className="font-heading text-4xl text-ink sm:text-5xl lg:text-6xl">Пробный урок</h2>
            </Plate>
            <div className="mt-4">
              <Plate shape="burst" tone="cocoa" inline tilt={-5}>
                <span className="font-heading text-4xl sm:text-6xl">бесплатно</span>
              </Plate>
            </div>
            <Plate shape="soft1" tone="cream" tilt={0.6} className="mt-6">
              <ul className="space-y-3">
                {BENEFITS.map((text) => (
                  <li key={text} className="flex items-start gap-3 text-lg text-ink sm:text-xl">
                    <Check className="mt-1 h-6 w-6 shrink-0 text-cocoa" />
                    {text}
                  </li>
                ))}
              </ul>
            </Plate>
            <div className="mt-10">
              <CtaButton>Записаться</CtaButton>
            </div>
          </FadeIn>

          <FadeIn x={30} rotate={1}>
            <div className="relative pt-4">
              <Pin tone="rose" className="left-1/2 -top-1 -translate-x-1/2" />
              <Plate shape="soft2" tone="blush" tilt={-0.5}>
                <h3 className="font-heading text-4xl text-cocoa sm:text-5xl">Цены</h3>
                <ul className="mt-4 space-y-3">
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
                <p className="font-script mt-5 text-2xl text-caramel">
                  цена за 60 минут — чем больше пакет, тем выгоднее
                </p>
              </Plate>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
