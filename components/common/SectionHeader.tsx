"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  imageSrc: string
  cta?: {
    label: string
    href: string
  }
  className?: string
}

/**
 * Composant SectionHeader réutilisable
 * Affiche une photo de fin de section SANS transparence (opacité 1)
 * avec conteneur media responsive (object-fit: cover)
 */
export function SectionHeader({
  title,
  subtitle,
  imageSrc,
  cta,
  className
}: SectionHeaderProps) {
  return (
    <section 
      className={cn(
        "relative w-full overflow-hidden",
        "scroll-mt-20", // Offset pour sticky header
        className
      )}
      id={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Conteneur media responsive */}
      <div 
        className={cn(
          "relative w-full",
          "h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]",
          "opacity-100", // Forcer opacité 1, pas de transparence
        )}
        style={{
          mixBlendMode: 'normal', // Pas de mix-blend
          backdropFilter: 'none', // Pas de backdrop-filter non voulu
        }}
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover object-center"
          priority={false}
          sizes="100vw"
          style={{
            opacity: 1, // Forcer opacité 1
            mixBlendMode: 'normal',
          }}
        />
        
        {/* Overlay optionnel pour la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        {/* Contenu texte centré */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 md:pb-12 lg:pb-16 px-4 md:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white tracking-wide leading-tight">
              {title}
            </h2>
            
            {subtitle && (
              <p className="text-base md:text-lg lg:text-xl text-white/90 font-light max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
            
            {cta && (
              <div className="pt-4">
                <Button asChild variant="default" size="lg" className="bg-wine-gold hover:bg-wine-gold/90 text-white">
                  <Link href={cta.href}>{cta.label}</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

