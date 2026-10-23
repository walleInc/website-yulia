import { Send, Instagram } from "lucide-react";
import {
  TELEGRAM_URL,
  INSTAGRAM_URL,
  TELEGRAM_HANDLE,
  INSTAGRAM_HANDLE,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer
      id="contacts"
      className="bg-cocoa text-paper"
    >
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-3 lg:gap-8 lg:py-14">
        <div>
          <p className="font-heading text-4xl">
            Юля <span className="text-rose">Юдина</span>
          </p>
          <p className="mt-3 text-base text-blush">
            Преподаватель английского · с нуля до B1–B2
          </p>
        </div>

        <div className="space-y-3">
          <p className="font-script text-2xl text-rose">
            Контакты
          </p>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg text-paper transition-colors hover:text-rose"
          >
            <Send className="h-5 w-5 text-rose" />
            Telegram {TELEGRAM_HANDLE}
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg text-paper transition-colors hover:text-rose"
          >
            <Instagram className="h-5 w-5 text-rose" />
            Instagram {INSTAGRAM_HANDLE}
          </a>
        </div>

        <div>
          <p className="text-lg leading-relaxed text-blush">
            Свяжитесь удобным способом — отвечу и подберём время для пробного
            урока.
          </p>
        </div>
      </div>

      <div className="border-t border-paper/20">
        <p className="mx-auto max-w-[1200px] px-5 py-5 text-sm text-rose sm:px-8">
          © 2026 Юля Юдина. Индивидуальные занятия английским языком онлайн.
          Не является публичной офертой.
        </p>
      </div>
    </footer>
  );
}
