"use client";

import {
  Image as ImageIcon,
  BookOpen,
  MessageCircle,
  Sparkles,
  RefreshCw,
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { motion } from "framer-motion";

const STEPS = [
  {
    icon: ImageIcon,
    title: "Разминка",
    text: "Картинка и вопрос — мягкий вход в английский и настрой на урок.",
  },
  {
    icon: BookOpen,
    title: "Новая тема",
    text: "Коротко и понятно: без воды, с примерами, которые запоминаются.",
  },
  {
    icon: MessageCircle,
    title: "Практика",
    text: "Упражнения и разговор — закрепляем сразу, а не «на потом».",
  },
  {
    icon: Sparkles,
    title: "Живая лексика",
    text: "Интересные тексты и слова, которые пригодятся в реальной жизни.",
  },
  {
    icon: RefreshCw,
    title: "Повторение и ДЗ",
    text: "Домашнее задание по теме урока и регулярное повторение — прогресс виден.",
  },
] as const;

export function Method() {
  return (
    <section className="section-pad bg-white/50" id="method">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <FadeIn>
          <h2 className="font-heading text-center text-3xl font-extrabold tracking-tight text-accent sm:text-4xl">
            Как проходит урок
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-ink/70">
            Онлайн, 60 минут. Структура, которая держит фокус и оставляет место
            для живого общения.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <FadeIn key={step.title} delay={i * 0.06}>
                <motion.article
                  className="h-full rounded-2xl bg-white p-7 shadow-md shadow-rose-100/50 ring-1 ring-rose-100/80"
                  whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(244, 114, 182, 0.15)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-accent-dark">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/70 sm:text-lg">
                    {step.text}
                  </p>
                </motion.article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
