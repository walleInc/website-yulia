import type { ReactNode } from "react";

/** A white sheet of paper that carries one section's content. */
export function Page({
  children,
  className = "",
  tilt = 0,
}: {
  children: ReactNode;
  className?: string;
  tilt?: number;
}) {
  return (
    <div className="page-wrap mx-auto w-full max-w-[1200px]" style={{ rotate: `${tilt}deg` }}>
      <div className={`page ${className}`}>{children}</div>
    </div>
  );
}
