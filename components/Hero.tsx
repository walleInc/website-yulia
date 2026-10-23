"use client";

import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { CtaButton } from "@/components/CtaButton";

export function Hero() {
  return (
    <section className="section-pad pb-16 pt-8 sm:pb-20 sm:pt-12">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <FadeIn>
          <div className="flex flex-col items-start">
            <span className="mb-5 inline-flex rounded-full border border-rose-200/80 bg-white/80 px-4 py-1.5 text-sm font-medium text-accent-dark shadow-sm">
              с нуля до уверенного B1–B2
            </span>
            <h1 className="font-heading text-4xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              Английский{" "}
              <span className="text-accent">спокойно</span>
              <br />
              и по делу
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/70 sm:text-xl">
              Юля Юдина — преподаватель английского. Персональные онлайн-уроки
              для взрослых и школьников: понятные объяснения, живая речь и темп
              без давления.
            </p>
            <p className="font-script mt-4 text-2xl text-accent-dark sm:text-3xl">
              Без страха ошибок — с видимым прогрессом
            </p>
            <div className="mt-8">
              <CtaButton>Записаться на пробный урок</CtaButton>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.12} className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[320px] sm:max-w-[360px]">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-rose-200/50 via-pink-100/40 to-transparent blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] bg-white shadow-xl shadow-rose-100/80 ring-1 ring-rose-100">
              <Image
                src="/images/yulia-hero.jpg"
                alt="Юля Юдина, преподаватель английского"
                width={720}
                height={900}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
