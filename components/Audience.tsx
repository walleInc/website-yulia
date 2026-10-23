"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { AUDIENCE } from "@/lib/constants";

export function Audience() {
  return (
    <section className="snap-section" id="audience">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-8 px-5 sm:gap-10 sm:px-8 lg:grid-cols-2 lg:gap-14">
        <FadeIn>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Кому подойдут занятия
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">
            Работаю онлайн с теми, кто хочет заговорить уверенно — без спешки и
            лишнего стресса. Подхожу индивидуально к каждому ученику.
          </p>
          <ul className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
            {AUDIENCE.map((item) => (
              <li key={item} className="flex gap-3 text-base text-ink/85 sm:text-lg">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rose-100 text-accent-dark">
                  <Check className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="#reviews"
            className="mt-7 inline-flex items-center justify-center rounded-2xl border-2 border-accent px-6 py-3 text-base font-semibold text-accent transition-colors hover:bg-accent/5 sm:mt-8"
          >
            Читать отзывы
          </a>
        </FadeIn>

        <FadeIn delay={0.1} className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="relative col-span-2 aspect-[4/3] max-h-[280px] overflow-hidden rounded-2xl shadow-lg shadow-rose-100/60 ring-1 ring-rose-100 sm:col-span-1 sm:aspect-square sm:max-h-none sm:row-span-2">
            <Image
              src="/images/yulia-about.jpg"
              alt="Юля Юдина"
              fill
              sizes="(max-width: 1024px) 100vw, 280px"
              className="object-cover"
            />
          </div>
          <div className="relative hidden aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-rose-100 to-pink-50 ring-1 ring-rose-100 sm:block">
            <div className="absolute inset-0 flex flex-col justify-end p-5">
              <p className="font-heading text-2xl font-extrabold text-accent-dark">
                Онлайн
              </p>
              <p className="mt-1 text-base text-ink/70">60 минут · ваш темп</p>
            </div>
          </div>
          <div className="relative hidden aspect-square overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-rose-100 sm:block">
            <div className="absolute inset-0 flex flex-col justify-end p-5">
              <p className="font-heading text-2xl font-extrabold text-ink">
                A1 → B2
              </p>
              <p className="mt-1 text-base text-ink/70">понятный путь роста</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
