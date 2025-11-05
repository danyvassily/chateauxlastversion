"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import type { StaticImageData } from "next/image";

interface ImageTextBlockProps {
  title: string;
  content: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  align?: "left" | "right";
  className?: string;
  portraitSrc?: string;
  landscapeSrc?: string;
}

/**
 * Composant ImageTextBlock
 * Bloc image + texte avec titre venant de l'ASSET uniquement
 * Gestion portrait/paysage et positionnement du texte
 */
export function ImageTextBlock({
  title,
  content,
  imageSrc,
  imageAlt,
  align = "left",
  className,
  portraitSrc,
  landscapeSrc,
}: ImageTextBlockProps) {
  const isLeft = align === "left";

  return (
    <section className={cn("relative w-full overflow-hidden", className)}>
      {/* Conteneur image plein écran */}
      <div className="relative w-full min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh]">
        {/* Art direction portrait/paysage */}
        {portraitSrc || landscapeSrc ? (
          <picture>
            {portraitSrc && (
              <source media="(orientation: portrait)" srcSet={portraitSrc} />
            )}
            {landscapeSrc && (
              <source media="(orientation: landscape)" srcSet={landscapeSrc} />
            )}
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              className="object-cover object-center"
            />
          </picture>
        ) : (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover object-center"
          />
        )}

        {/* Overlay léger pour lisibilité si nécessaire */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        {/* Conteneur texte positionné */}
        <div
          className={cn(
            "absolute inset-0 flex items-end",
            isLeft ? "justify-start" : "justify-end"
          )}
        >
          <div
            className={cn(
              "p-4 md:p-8 lg:p-12 xl:p-16 max-w-2xl",
              isLeft ? "text-left" : "text-right"
            )}
          >
            {/* Backplate clair semi-opaque pour contraste */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 md:p-8 lg:p-10">
              {/* Titre */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-slate-900 tracking-[0.02em] leading-[1.1] mb-4 md:mb-6">
                {title}
              </h2>

              {/* Corps de texte */}
              <p className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light tracking-wide">
                {content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

