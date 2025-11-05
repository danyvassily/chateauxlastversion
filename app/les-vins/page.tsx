import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollAnimation, PremiumCardAnimation, CinematicTextAnimation } from "@/components/gsap/ScrollAnimations";
import { SectionReveal, ParallaxImage } from "@/components/gsap/CinematicEffects";
import { HeroBarrelsAnimation } from "@/components/gsap/HeroBarrelsAnimation";
import { gammes } from "@/lib/wines";

export const metadata: Metadata = {
  title: "Nos Cuvées | Collections d'Exception - Château Lastours",
  description: "Découvrez toutes nos cuvées de vins d'exception : Doméni, Opus, Méthode Traditionnelle, Poussin, Petrichor et Signatures."
};

export default function WinesPageSimple() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50 to-stone-100 text-slate-900 relative">
      {/* Grain overlay for cinematic effect */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none texture-noise">
      </div>
      {/* Overlay subtil vin & terroir */}
      <div className="fixed inset-0 bg-gradient-to-r from-rose-100/10 via-amber-100/5 to-rose-100/10 pointer-events-none"></div>

      {/* Hero Section with Barrels Animation */}
      <section className="relative h-screen overflow-hidden">
        <HeroBarrelsAnimation className="absolute inset-0">
          <div className="relative z-20 text-center text-white px-4 lg:px-8">
            <CinematicTextAnimation className="space-y-8" staggerDelay={0.2}>
              <div className="text-line">
                <p className="text-2xl md:text-3xl lg:text-4xl font-light max-w-5xl mx-auto leading-relaxed opacity-95 text-shadow drop-shadow-lg">
                  Vivez l'émotion Lastours : des arômes captivants, des instants à partager, l'expression pure de notre art du vin
                </p>
              </div>
              <div className="text-line pt-8">
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-60"></div>
              </div>
            </CinematicTextAnimation>
          </div>
        </HeroBarrelsAnimation>
      </section>

      {/* Gammes Section - Style cinématique sans encadrés */}
      <section className="pt-20 pb-1 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {gammes.map((gamme, index) => {
              return (
                <div key={gamme.id} className="relative flex flex-col items-center justify-center" style={{ minHeight: 'calc(100vh - 0.5rem)' }}>
                  {/* Titre de gamme */}
                  <ScrollAnimation animation="slideUp" delay={0.2}>
                    <div className="text-center mb-8 lg:mb-12 w-full">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-wider mb-3">
                        {gamme.title}
                      </h2>
                      <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mb-4"></div>
                      <p className="text-sm md:text-base text-stone-700 leading-relaxed max-w-3xl mx-auto font-light italic">
                        {gamme.description}
                      </p>
                    </div>
                  </ScrollAnimation>
                  
                  {/* Cuvées - Centrées avec flexbox */}
                  <div className={`w-full flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10`}>
                    {gamme.cuvees.map((cuvee, cuveeIndex) => {
                      // Réduire la taille pour la gamme Poussin et la bouteille Doméni Rosé
                      const isPoussinGamme = gamme.id === "poussin";
                      const isDomeniRose = cuvee.slug === "domeni-rose";
                      const shouldReduceSize = isPoussinGamme || isDomeniRose;
                      
                      return (
                        <PremiumCardAnimation key={cuvee.slug} index={index * 10 + cuveeIndex}>
                          <Link 
                            href={cuvee.route}
                            className="group/card flex flex-col items-center justify-center space-y-4 transition-all duration-500 hover:scale-105"
                          >
                            {cuvee.image && (
                              <div className="relative w-full flex items-center justify-center bg-transparent" style={{ minHeight: shouldReduceSize ? 'clamp(180px, 40vh, 240px)' : 'clamp(200px, 45vh, 280px)' }}>
                                <Image
                                  src={cuvee.image}
                                  alt={cuvee.title}
                                  width={shouldReduceSize ? 140 : 160}
                                  height={shouldReduceSize ? 315 : 360}
                                  className="object-contain object-center transition-all duration-500 group-hover/card:scale-110 group-hover/card:drop-shadow-2xl"
                                  style={{ 
                                    maxHeight: shouldReduceSize ? '88%' : '100%', 
                                    maxWidth: shouldReduceSize ? '88%' : '100%', 
                                    width: 'auto', 
                                    height: 'auto',
                                    filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.1))'
                                  }}
                                  unoptimized={true}
                                />
                              </div>
                            )}
                            <div className="text-center space-y-2">
                              <h3 className="text-lg md:text-xl lg:text-2xl font-serif font-semibold text-stone-900 group-hover/card:text-rose-900 transition-colors duration-300">
                                {cuvee.title}
                              </h3>
                              <span className="text-xs md:text-sm text-stone-600 font-light tracking-widest uppercase group-hover/card:text-rose-800 transition-colors duration-300 inline-flex items-center gap-2">
                                Découvrir
                                <svg className="w-4 h-4 transform group-hover/card:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                                </svg>
                              </span>
                            </div>
                          </Link>
                        </PremiumCardAnimation>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
     </div>
   );
 }
