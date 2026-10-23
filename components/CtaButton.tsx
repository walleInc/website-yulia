"use client";

import { motion } from "framer-motion";
import { TELEGRAM_URL } from "@/lib/constants";

type CtaButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "solid" | "outline";
  href?: string;
};

export function CtaButton({
  children,
  className = "",
  variant = "solid",
  href = TELEGRAM_URL,
}: CtaButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-3 font-heading text-2xl font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cocoa focus-visible:ring-offset-2 focus-visible:ring-offset-paper";
  const styles =
    variant === "solid"
      ? "bg-cocoa text-paper shadow-[0_6px_0_#5d4332,0_10px_18px_rgba(74,52,40,0.3)] hover:bg-accent-dark"
      : "bg-paper/70 text-cocoa hover:bg-paper";

  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`${base} ${styles} ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ y: 3 }}
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
    >
      {children}
    </motion.a>
  );
}
