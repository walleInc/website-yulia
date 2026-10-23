import { Send, Instagram } from "lucide-react";
import {
  TELEGRAM_URL,
  INSTAGRAM_URL,
  TELEGRAM_HANDLE,
  INSTAGRAM_HANDLE,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer id="contacts" className="bg-slate-900 text-white">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-3 lg:gap-8">
        <div>
          <p className="font-heading text-xl font-extrabold">
            Юля <span className="text-rose-300">Юдина</span>
          </p>
          <p className="mt-3 text-base text-slate-300">
            Преподаватель английского · с нуля до B1–B2
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-wide text-slate-400">
            Контакты
          </p>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg text-slate-100 transition-colors hover:text-rose-300"
          >
            <Send className="h-5 w-5" />
            Telegram {TELEGRAM_HANDLE}
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg text-slate-100 transition-colors hover:text-rose-300"
          >
            <Instagram className="h-5 w-5" />
            Instagram {INSTAGRAM_HANDLE}
          </a>
        </div>

        <div>
          <p className="text-lg leading-relaxed text-slate-200">
            Свяжитесь удобным способом — отвечу и подберём время для пробного
            урока.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <p className="mx-auto max-w-[1200px] px-5 py-5 text-sm text-slate-500 sm:px-8">
          © 2026 Юля Юдина. Индивидуальные занятия английским языком онлайн.
          Не является публичной офертой.
        </p>
      </div>
    </footer>
  );
}
