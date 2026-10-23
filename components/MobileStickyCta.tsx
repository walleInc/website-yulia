"use client";

import { CtaButton } from "@/components/CtaButton";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-rose-100 bg-white/90 p-3 backdrop-blur-lg md:hidden">
      <CtaButton className="w-full shadow-md">
        Записаться на пробный урок
      </CtaButton>
    </div>
  );
}
