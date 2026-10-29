import Image from "next/image";

type StickerCollageProps = {
  items: readonly { src: string; tilt: number }[];
  className?: string;
};

/** Small photo stickers with white edges and tape, scattered in pairs. Decorative only. */
export function StickerCollage({ items, className = "" }: StickerCollageProps) {
  return (
    <div className={`grid grid-cols-2 gap-6 sm:gap-8 ${className}`} aria-hidden>
      {items.map((item, i) => (
        <div
          key={item.src}
          className={`relative ${i % 2 ? "mt-6 sm:mt-10" : ""}`}
          style={{ transform: `rotate(${item.tilt}deg)` }}
        >
          <div className="sticker-chip">
            <Image
              src={item.src}
              alt=""
              width={480}
              height={600}
              sizes="(max-width: 640px) 45vw, 220px"
              className="h-auto w-full"
            />
          </div>
          <span aria-hidden className="tape left-1/2 -top-3 -translate-x-1/2 rotate-[-4deg]" />
        </div>
      ))}
    </div>
  );
}
