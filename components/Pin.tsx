/** Push-pin holding a note to the paper. Decorative only. */
export function Pin({
  className = "",
  tone = "cocoa",
}: {
  className?: string;
  tone?: "cocoa" | "rose" | "caramel";
}) {
  const fill = { cocoa: "#7a4a58", rose: "#e0a8b8", caramel: "#c48a9a" }[tone];
  const gradId = `pinShade-${tone}`;
  return (
    <svg
      aria-hidden
      viewBox="0 0 40 52"
      className={`pointer-events-none absolute z-10 h-12 w-9 drop-shadow-[2px_4px_3px_rgba(58,31,42,0.4)] ${className}`}
    >
      <path d="M19 26h2l-1 24z" fill="#9a9a9a" />
      <ellipse cx="20" cy="17" rx="14" ry="14" fill={fill} />
      <ellipse cx="20" cy="17" rx="14" ry="14" fill={`url(#${gradId})`} />
      <ellipse cx="14.5" cy="11.5" rx="4.5" ry="3" fill="#fff" opacity="0.45" transform="rotate(-30 14.5 11.5)" />
      <defs>
        <radialGradient id={gradId} cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#fff" stopOpacity="0.25" />
          <stop offset="1" stopColor="#000" stopOpacity="0.28" />
        </radialGradient>
      </defs>
    </svg>
  );
}
