import Image from "next/image";

type SnapshotProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  aspect?: string;
  position?: string;
  tilt?: number;
  tape?: "left" | "right" | "center";
  className?: string;
};

const TAPE = {
  left: "-left-4 -top-2 -rotate-[30deg]",
  right: "-right-4 -top-2 rotate-[30deg]",
  center: "left-1/2 -top-3 -translate-x-1/2 -rotate-3",
} as const;

/** Photo on a white backing with a slightly crooked cut — sits on the page like a pasted print. */
export function Snapshot({
  src,
  alt,
  width,
  height,
  aspect = "4 / 5",
  position = "50% 50%",
  tilt = 0,
  tape = "center",
  className = "",
}: SnapshotProps) {
  return (
    <div className={`relative ${className}`} style={{ rotate: `${tilt}deg` }}>
      <div className="snap-wrap">
        <div className="snap-card">
          <div className="snap-photo relative w-full overflow-hidden" style={{ aspectRatio: aspect }}>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              sizes="(max-width: 1024px) 70vw, 380px"
              className="h-full w-full object-cover"
              style={{ objectPosition: position }}
            />
          </div>
        </div>
      </div>
      <span aria-hidden className={`tape ${TAPE[tape]}`} />
    </div>
  );
}
