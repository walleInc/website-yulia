import type { ReactNode } from "react";

type PlateProps = {
  children: ReactNode;
  shape?: "soft1" | "soft2" | "blob" | "burst" | "stamp";
  tone?: "cream" | "blush" | "rose" | "cocoa";
  className?: string;
  /** Tilt in degrees; plates lie slightly crooked like cut paper */
  tilt?: number;
  /** Shrink to the text instead of filling the row */
  inline?: boolean;
};

/** Shaped paper backing behind a piece of text. */
export function Plate({
  children,
  shape = "soft1",
  tone = "cream",
  className = "",
  tilt = 0,
  inline = false,
}: PlateProps) {
  return (
    <div
      className={`plate-wrap ${inline ? "inline-block" : ""} ${className}`}
      style={{ rotate: `${tilt}deg` }}
    >
      <div className={`plate plate--${shape} plate--${tone}`}>{children}</div>
    </div>
  );
}
