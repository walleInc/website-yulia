"use client";

import { CtaButton } from "@/components/CtaButton";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-paper/90 p-3 shadow-[0_-1px_0_rgba(134,99,79,0.25)] backdrop-blur-md md:hidden">
      <CtaButton className="w-full shadow-md">
        Записаться на пробный урок
      </CtaButton>
    </div>
  );
}
