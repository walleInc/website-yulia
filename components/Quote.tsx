"use client";

import { FadeIn } from "@/components/FadeIn";

export function Quote() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <FadeIn>
          <div className="grid items-center gap-8 rounded-3xl border border-rose-100/80 bg-white/70 p-8 shadow-lg shadow-rose-100/40 backdrop-blur-md sm:p-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-12">
            <h2 className="font-heading text-2xl font-extrabold leading-snug tracking-tight text-ink sm:text-3xl lg:text-[2.1rem]">
              Давайте сделаем обучение не только{" "}
              <span className="text-accent">эффективным</span>, но и{" "}
              <span className="text-accent">приятным</span> — в вашем темпе, без
              страха ошибок.
            </h2>
            <p className="text-lg leading-relaxed text-ink/70 lg:border-l lg:border-rose-100 lg:pl-10">
              Спокойная атмосфера и понятные шаги помогают ученикам говорить
              увереннее и замечать прогресс от урока к уроку.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
