import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { SectionTitle } from "@/components/common/SectionTitle";
import { QuoteRibbon } from "@/components/common/QuoteRibbon";
import { TransitionLink } from "@/components/gsap/TransitionLink";
import { SPACING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "La Vigne | Château Lastours",
  description: "Découvrez notre approche unique de la viticulture : respect du terroir, travail minutieux et passion pour l'excellence au cœur de nos vignes.",
  openGraph: {
    title: "La Vigne | Château Lastours",
    description: "L'art de cultiver l'excellence dans nos vignes",
    images: ["/Page/La vigne - ok/20230426_214346.jpg"],
  },
};

// Sections de contenu sur la viticulture
const vigneSections = [
  {
    id: "passion",
    text: {
      kicker: "Notre Philosophie",
      title: "Une Passion pour la Vigne",
      body: "Au Château Lastours, la vigne n'est pas simplement une culture : c'est un héritage vivant que nous cultivons avec respect et dévotion. Chaque pied de vigne est le fruit d'un travail minutieux, d'une attention constante et d'un amour profond pour notre terroir. Depuis des générations, nous perpétuons les gestes ancestraux tout en embrassant les innovations qui respectent l'équilibre naturel de nos sols."
    },
    image: {
      src: "/Page/La vigne - ok/20230426_214346.jpg",
      alt: "Vignes au coucher du soleil - Château Lastours",
      ratio: "21/9" as const
    },
    layout: "text-first"
  },
  {
    id: "travail",
    text: {
      kicker: "Savoir-Faire",
      title: "Le Travail de la Vigne",
      body: "Tout au long de l'année, nos vignerons veillent sur chaque parcelle avec un soin méticuleux. De la taille hivernale qui détermine la future récolte, au palissage printanier qui guide la croissance des sarments, chaque geste est pensé pour révéler le meilleur de nos cépages. Le palissage, cette technique ancestrale, permet à nos vignes de capter la lumière optimale tout en favorisant une bonne circulation de l'air entre les grappes."
    },
    image: {
      src: "/Page/La vigne - ok/Palissage vigne .jpg",
      alt: "Palissage des vignes - Travail traditionnel",
      ratio: "16/9" as const
    },
    layout: "image-first"
  },
  {
    id: "veraison",
    text: {
      kicker: "La Magie de la Nature",
      title: "La Véraison : Moment Clé",
      body: "La véraison marque le début de la maturation des raisins, moment magique où les baies changent de couleur et commencent à accumuler les sucres qui feront la richesse de nos vins. C'est une période cruciale où nous surveillons avec attention l'évolution de chaque parcelle. La couleur des grappes se transforme progressivement, les rouges virent au violet profond tandis que les blancs prennent des teintes dorées. Cette métamorphose naturelle est le signe que les vendanges approchent."
    },
    image: {
      src: "/Page/La vigne - ok/la véraison .jpg",
      alt: "La véraison - Changement de couleur des raisins",
      ratio: "21/9" as const
    },
    layout: "text-first"
  },
  {
    id: "terroir",
    text: {
      kicker: "Excellence",
      title: "Un Terroir d'Exception",
      body: "Nos vignes s'épanouissent sur un terroir unique, façonné par des siècles d'histoire viticole. Les sols argilo-calcaires, l'exposition privilégiée de nos coteaux et le climat tempéré créent des conditions idéales pour la culture de nos cépages nobles. Chaque parcelle possède sa propre personnalité, son propre caractère, que nous nous efforçons de révéler dans nos vins. C'est cette diversité qui fait la richesse et la complexité de notre production."
    },
    image: {
      src: "/Page/La vigne - ok/image00036.jpeg",
      alt: "Terroir et vignoble du Château Lastours",
      ratio: "16/9" as const
    },
    layout: "image-first"
  },
  {
    id: "engagement",
    text: {
      kicker: "Engagement Durable",
      title: "Une Viticulture Respectueuse",
      body: "Notre engagement envers une viticulture durable guide chacune de nos décisions. Nous favorisons les méthodes naturelles, limitons les interventions chimiques et travaillons en harmonie avec les cycles de la nature. L'enherbement naturel entre les rangs, les traitements raisonnés et le respect de la biodiversité font partie intégrante de notre démarche. Nous croyons qu'un vin d'exception naît d'abord d'un raisin cultivé dans le respect de son environnement."
    },
    image: {
      src: "/Page/La vigne - ok/image00005.jpeg",
      alt: "Viticulture durable et respectueuse",
      ratio: "21/9" as const
    },
    layout: "text-first"
  },
  {
    id: "vendanges",
    text: {
      kicker: "Point d'Orgue",
      title: "Les Vendanges : Aboutissement d'une Année",
      body: "Les vendanges représentent le moment tant attendu, l'aboutissement d'une année de travail et de patience. Nous vendangeons à maturité optimale, souvent manuellement pour préserver l'intégrité des grappes. Chaque parcelle est récoltée au moment idéal, déterminé par des dégustations régulières et des analyses précises. C'est dans ces instants que se joue la qualité de nos futurs vins, où tout le travail de l'année trouve sa récompense."
    },
    image: {
      src: "/Page/La vigne - ok/image00002.jpeg",
      alt: "Les vendanges au Château Lastours",
      ratio: "16/9" as const
    },
    layout: "image-first"
  }
];

export default function VignePage() {
  return (
    <div className="min-h-screen relative bg-premium" data-page="vigne">
      {/* Texture grain prononcée - Style premium */}
      <div className="fixed inset-0 opacity-12 pointer-events-none texture-paper" />
      
      {/* Grain additionnel plus fin */}
      <div className="fixed inset-0 opacity-8 pointer-events-none texture-grain" />
      
      {/* Gradient subtil pour la profondeur */}
      <div className="fixed inset-0 opacity-30 pointer-events-none gradient-depth" />

      {/* Hero Section - Style Premium */}
      <section className="relative py-24 lg:py-40 xl:py-48 overflow-hidden z-10">
        <div className={cn(SPACING.container, "relative z-10")}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Contenu texte hero */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="py-12 lg:py-16">
                <SectionTitle
                  kicker="Savoir-Faire"
                  title="La Vigne"
                  subtitle="Au cœur de notre métier, la vigne est l'expression vivante de notre terroir et de notre passion. Découvrez les gestes, les saisons et les moments qui rythment le travail minutieux de nos vignerons."
                  align="left"
                />
              </div>
            </div>

            {/* Image hero */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative h-[450px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-all duration-700 group">
                <img
                  src="/Page/La vigne - ok/IMG_20230809_124834.jpg"
                  alt="La Vigne - Château Lastours"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-stone-800/20" />
                <div className="absolute inset-0 grain-subtle" />
              </div>
            </div>
          </div>
        </div>

        {/* Espace aéré après le hero */}
        <div className="h-16 lg:h-24" />
      </section>

      {/* Citation principale */}
      <QuoteRibbon
        text="La vigne est une plante noble qui demande respect et patience. C'est elle qui nous enseigne l'humilité et la persévérance."
        author="Château Lastours"
      />

      {/* Sections panoramiques - Style Premium */}
      {vigneSections.map((section) => (
        <section 
          key={section.id}
          className="relative z-10 mb-12 lg:mb-16 xl:mb-20"
        >
          {/* Image panoramique pleine largeur */}
          <div className="relative h-[60vh] lg:h-[70vh] xl:h-[80vh] overflow-hidden">
            <img
              src={section.image.src}
              alt={section.image.alt}
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
            />
            
            {/* Overlay gradient subtil */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Grain texture */}
            <div className="absolute inset-0 opacity-[0.03] texture-grain-fine" />

            {/* Texte en overlay - Position selon layout */}
            <div className={`absolute inset-0 flex items-end ${section.layout === "text-first" ? "justify-start" : "justify-end"}`}>
              <div className={`p-8 lg:p-16 xl:p-20 max-w-2xl ${section.layout === "text-first" ? "text-left" : "text-right"}`}>
                {/* Kicker */}
                <div className="mb-6">
                  <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md text-white text-xs font-bold tracking-[0.2em] uppercase border border-white/20">
                    {section.text.kicker}
                  </span>
                </div>
                
                {/* Titre */}
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-white tracking-[0.02em] leading-[1.1] mb-8">
                  {section.text.title}
                </h2>
                
                {/* Corps de texte */}
                <p className="text-lg lg:text-xl leading-relaxed text-white/90 font-light tracking-wide max-w-xl">
                  {section.text.body}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Footer local - Style Premium */}
      <section className="py-24 lg:py-32 xl:py-40 relative z-10 gradient-footer-premium">
        <div className={SPACING.container}>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
              {/* Texte CTA */}
              <div className="lg:col-span-7 text-center lg:text-left">
                <div className="space-y-8">
                  <div className="w-32 h-px bg-gradient-to-r from-transparent via-slate-500/60 to-transparent mx-auto lg:mx-0" />
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 tracking-[0.02em] font-light leading-[1.1]">
                    Découvrez nos Chais
                  </h3>
                  <p className="text-xl md:text-2xl leading-relaxed text-slate-600 font-light tracking-wide">
                    Poursuivez votre voyage et explorez le travail de vinification dans nos chais.
                  </p>
                </div>
              </div>
              
              {/* CTA button */}
              <div className="lg:col-span-5 text-center lg:text-right">
                <TransitionLink 
                  href="/savoir-faire/chais"
                  className="inline-flex items-center px-16 py-6 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-white font-light text-lg tracking-wide transition-all duration-700 backdrop-blur-sm hover:scale-[1.02] shadow-2xl group"
                >
                  Visiter nos Chais
                </TransitionLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
