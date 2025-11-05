"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import type { StaticImageData } from "next/image";

interface FullBleedImageProps {
  src: string | StaticImageData;
  alt: string;
  priority?: boolean;
  className?: string;
  portraitSrc?: string;
  landscapeSrc?: string;
  sizes?: string;
}

/**
 * Composant FullBleedImage
 * Image plein écran avec gestion portrait/paysage et optimisation Next/Image
 */
export function FullBleedImage({
  src,
  alt,
  priority = false,
  className,
  portraitSrc,
  landscapeSrc,
  sizes = "(max-width: 768px) 100vw, 100vw",
}: FullBleedImageProps) {
  // Si on a des sources différentes pour portrait/paysage, utiliser <picture>
  if (portraitSrc || landscapeSrc) {
    return (
      <div className={cn("relative w-full overflow-hidden", className)}>
        <picture>
          {portraitSrc && (
            <source media="(orientation: portrait)" srcSet={portraitSrc} />
          )}
          {landscapeSrc && (
            <source media="(orientation: landscape)" srcSet={landscapeSrc} />
          )}
          <div className="relative w-full h-full min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh]">
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              className="object-cover object-center"
              priority={priority}
            />
          </div>
        </picture>
      </div>
    );
  }

  // Sinon, image simple avec fill
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div className="relative w-full h-full min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover object-center"
          priority={priority}
        />
      </div>
    </div>
  );
}

