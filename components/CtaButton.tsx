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
    "inline-flex items-center justify-center rounded-2xl px-7 py-3.5 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";
  const styles =
    variant === "solid"
      ? "bg-accent text-white shadow-lg shadow-rose-200/60 hover:bg-accent-dark"
      : "border-2 border-accent bg-transparent text-accent hover:bg-accent/5";

  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`${base} ${styles} ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      {children}
    </motion.a>
  );
}
