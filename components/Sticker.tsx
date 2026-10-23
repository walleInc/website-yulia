import Image from "next/image";

type StickerProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** CSS object-position, to crop the shot around the face */
  position?: string;
  aspect?: string;
  tape?: "left" | "right" | "center";
  priority?: boolean;
  sizes?: string;
  className?: string;
};

const TAPE: Record<NonNullable<StickerProps["tape"]>, string> = {
  left: "-left-5 -top-3 -rotate-[32deg]",
  right: "-right-5 -top-3 rotate-[32deg]",
  center: "left-1/2 -top-4 -translate-x-1/2 rotate-[-4deg]",
};

/** A photo cropped like a cut-out sticker: white edge, uneven outline, tape. */
export function Sticker({
  src,
  alt,
  width,
  height,
  position = "50% 20%",
  aspect = "4 / 5",
  tape = "center",
  priority,
  sizes = "(max-width: 1024px) 80vw, 380px",
  className = "",
}: StickerProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="sticker-wrap">
        <div className="sticker">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: aspect }}>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              sizes={sizes}
              priority={priority}
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
