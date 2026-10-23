/** Hand-drawn SVG accents. Decorative only. */

export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 220 14" fill="none" className={className} preserveAspectRatio="none">
      <path
        d="M3 9c18-8 30 6 50-1s30-6 52-1 32 6 52-1 38-4 60 0"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 32 32" fill="none" className={className}>
      <path
        d="M4 17c4 3 6 6 8 9 4-9 9-16 17-22"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 90 70" fill="none" className={className}>
      <path
        d="M6 8c24-6 56 4 62 36m0 0c-6-6-12-9-19-9m19 9c0 7-3 13-8 18"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Circle({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 300 90" fill="none" className={className} preserveAspectRatio="none">
      <path
        d="M150 6C70 4 8 22 10 48s70 38 150 34 134-18 128-44S220 4 130 8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
