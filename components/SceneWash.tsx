import Image from "next/image";

type SceneWashProps = {
  src: string;
  /** object-position for crop focus */
  position?: string;
  strength?: "soft" | "normal" | "strong";
  className?: string;
};

/** Semi-transparent photo atmosphere behind a section. Decorative only. */
export function SceneWash({
  src,
  position = "50% 50%",
  strength = "normal",
  className = "",
}: SceneWashProps) {
  const strengthClass =
    strength === "soft" ? "scene-wash--soft" : strength === "strong" ? "scene-wash--strong" : "";

  return (
    <div className={`scene-wash ${strengthClass} ${className}`} aria-hidden>
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        className="scene-wash__img"
        style={{ objectPosition: position }}
        priority={false}
      />
      <div className="scene-wash__fade" />
    </div>
  );
}
