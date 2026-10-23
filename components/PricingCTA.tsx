"use client";

import { Clock, MessageSquare, Target, Wifi, Heart, ListChecks } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { CtaButton } from "@/components/CtaButton";
import { PRICES } from "@/lib/constants";

const BENEFITS_LEFT = [
  { icon: Clock, text: "Онлайн, 60 минут" },
  { icon: MessageSquare, text: "Разбор ваших трудностей" },
  { icon: Target, text: "План под ваши цели" },
] as const;

const BENEFITS_RIGHT = [
  { icon: ListChecks, text: "Обратная связь на уроке" },
  { icon: Wifi, text: "Формат онлайн" },
  { icon: Heart, text: "Спокойный темп" },
] as const;

export function PricingCTA() {
  return (
    <section className="snap-section" id="pricing">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <FadeIn>
          <div className="rounded-3xl bg-white p-6 shadow-lg shadow-rose-100/50 ring-1 ring-rose-100 sm:p-10">
            <h2 className="font-heading text-center text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Пробный урок и цены
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-lg text-ink/70">
              Познакомимся, оценим уровень и наметим комфортный маршрут.
            </p>

            <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
              <ul className="space-y-2.5 sm:space-y-3">
                {BENEFITS_LEFT.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-base text-ink/80 sm:text-lg">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-50 text-accent-dark">
                      <Icon className="h-5 w-5" />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
              <ul className="space-y-2.5 sm:space-y-3">
                {BENEFITS_RIGHT.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-base text-ink/80 sm:text-lg">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-50 text-accent-dark">
                      <Icon className="h-5 w-5" />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-5 border-t border-rose-100 pt-6 sm:mt-10 sm:flex-row sm:gap-8 sm:pt-8">
              <div className="text-center sm:text-left">
                <p className="text-sm font-medium uppercase tracking-wide text-ink/50">
                  Первое занятие
                </p>
                <p className="font-heading text-4xl font-extrabold text-accent sm:text-5xl">
                  Бесплатно
                </p>
              </div>
              <div className="hidden w-full sm:w-auto md:block">
                <CtaButton className="w-full sm:w-auto">Записаться</CtaButton>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
              {PRICES.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-rose-100 bg-rose-50/40 px-4 py-3.5 text-center sm:py-4"
                >
                  <p className="text-sm font-medium text-ink/60">{item.label}</p>
                  <p className="mt-1 font-heading text-2xl font-extrabold text-ink">
                    {item.price}
                  </p>
                  <p className="text-sm text-ink/55">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
