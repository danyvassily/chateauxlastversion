/**
 * Mapping automatique des assets depuis /public/Page
 */

import { toSlug, namesMatch } from './slug'

export interface PageAssets {
  hero?: string
  gallery: string[]
  documents: string[]
}

// Mapping statique des assets disponibles (généré à partir de l'analyse du dossier)
export const ASSETS_MAP: Record<string, string[]> = {
  // Dégustation
  'degustation': [
    '/Page/Asset page dégustation/Degustation.html',
    '/page/degustation-ok/aromes-primaires-vin-chateau-lastours-gaillac-sud-ouest-france.jpg',
    '/page/degustation-ok/barrique-bois-cuve-beton-chateau-lastours-gaillac-sud-ouest-france.jpg',
    '/page/degustation-ok/caveau-degustation-cuvees-chateau-lastours-gaillac-france.jpeg',
    '/page/degustation-ok/degustation-vin-rouge-petrichor-chateau-lastours-gaillac-france.jpeg',
    '/page/degustation-ok/verre-de-vin-brut-de-cuve-chateau-lastours-aop-aoc-gaillac-france.jpg'
  ],
  
  // La vigne
  'la-vigne': [
    '/Page/Asset page la vigne/La vigne.docx',
    '/Page/Asset page la vigne/Page la vigne EN.docx',
    '/Page/La vigne - ok/[images-si-présentes]'
  ],
  
  // Notre Chai
  'notre-chai': [
    '/Page/Asset page Notre Chai/Le chai.docx',
    '/Page/Asset page Notre Chai/Notre chai En.docx',
    '/Page/Asset page Notre Chai/Notre chai.html',
    '/Page/Notre Chai - manque 1 photo/[images-si-présentes]'
  ],
  
  // Notre vignoble
  'notre-vignoble': [
    '/Page/Asset page Notre vignoble/Notre vignoble En.docx',
    '/Page/Asset page Notre vignoble/Notre vignoble Fr.html',
    '/Page/Notre vignoble - manque 1 photo/[images-si-présentes]'
  ],
  
  // Club
  'club': [
    '/Page/Page Club/Page présentation club FR EN.html',
    '/Page/Club - ok/[images-si-présentes]'
  ],
  
  // Nos engagements
  'nos-engagements': [
    '/photos/bulle-de-jazz-2021-chazo-087.jpg',
    '/photos-web-lastours/vignes/1682596442650.jpg',
    '/page/nos-engagement-ok/nos-engagements-agriculture-raisonnee-chateau-lastours-aop-aoc-gaillac-france.jpg',
    '/page/nos-engagement-ok/libellule-rouge-vigne-grappe-de-raisin.jpg',
    '/page/nos-engagement-ok/fleurs-roses-tronc-de-vigne.jpg',
    '/page/nos-engagement-ok/mobilier-upcycle-chateau-lastours-gaillac.jpg',
    '/page/nos-engagement-ok/logo-HVE3.png'
  ],
  
  // Nos événements
  'nos-evenements': [
    '/page/nos-evenements-ok/UAG-LASTOURS-infinitygraphic-16.jpg',
    '/page/nos-evenements-ok/bulle-de-jazz-2021-chazo-087.jpg',
    '/page/nos-evenements-ok/PIANO JARDINS.jpg',
    '/page/nos-evenements-ok/007.jpg',
    '/Page/Page Nos événement/Page Nos Evénement En.docx',
    '/Page/Page Nos événement/Page nos evenement Fr.docx'
  ],
  
  // Notre histoire
  'notre-histoire': [
    '/Page/Notre histoire - ok/[images-si-présentes]',
    '/Page/Page Notre histoire/Notre Histoire En.docx',
    '/Page/Page Notre histoire/Notre histoire Fr.docx'
  ],
  
  // Organiser événement
  'organiser-evenement': [
    '/Page/Organiser notre évenement - ok/[images-si-présentes]',
    '/Page/Page organiser votre événement/Page Organiser votre événement FREN.html'
  ],
  
  // Visite
  'visite': [
    '/Page/Visite - ok/[images-si-présentes]',
    '/Page/Page visite/Page visite.html'
  ],
  
  // Actualités
  'actualites': [
    '/page/page-actualite-ok/Article Petrichor En.docx',
    '/page/page-actualite-ok/Article Petrichor Fr.docx',
    '/page/page-actualite-ok/Article fête des vins de Gaillac En.docx',
    '/page/page-actualite-ok/Article fête des vins de Gaillac Fr.docx',
    '/page/page-actualite-ok/Page Actualité En.docx',
    '/page/page-actualite-ok/Page Actualité Fr.docx',
    '/page/page-actualite-ok/Article Arnaud Liard.docx',
    '/page/page-actualite-ok/Article sur vendanges 2025.docx',
    '/page/page-actualite-ok/actualites-chateau-lastours-gaillac-france.jpeg',
    '/page/page-actualite-ok/portrait-artiste-placticien-francais-arnaud-liard.jpeg',
    '/page/page-actualite-ok/actualite-evenements-chateau-lastours-gaillac-france.jpg',
    '/page/page-actualite-ok/Salon-Vignerons-Independants-Paris-2025-france.jpg',
    '/page/page-actualite-ok/machine-a-vendanger-chateau-lastours-gaillac-2025.jpg',
    '/page/page-actualite-ok/fete-des-vins-2025-gaillac-sud-ouest-france.jpeg',
    '/page/page-actualite-ok/vin-rose-gastronomique-elevage-barrique-petrichor.jpg'
  ],
  
  // Méthode Blanche
  'methode-blanche': [
    '/page/nos-cuvee-ok/gamme-methode-ancestral/page-methode Blanche/FT_la_méthode_blanc.pdf',
    '/page/nos-cuvee-ok/gamme-methode-ancestral/page-methode Blanche/LA METHODE BLANC.jpg'
  ],
  
  // Méthode Rosé
  'methode-rose': [
    '/page/nos-cuvee-ok/gamme-methode-ancestral/page-methode Rosé/FT_la_méthode_rosée_23.pdf',
    '/page/nos-cuvee-ok/gamme-methode-ancestral/page-methode Rosé/LA METHODE ROSE.jpg'
  ]
}

// Pages qui manquent des photos selon la spécification
export const MISSING_ASSETS: Record<string, string[]> = {
  'notre-chai': ['Une photo supplémentaire du chai'],
  'notre-vignoble': ['Une photo supplémentaire du vignoble']
}

/**
 * Récupère les assets d'une page
 * @param pageId - L'ID de la page (slug)
 * @returns Les assets de la page
 */
export function getPageAssets(pageId: string): PageAssets {
  const assets = ASSETS_MAP[pageId] || []
  
  // Sépare les images, documents et autres
  const images = assets.filter(asset => 
    asset.match(/\.(jpg|jpeg|png|webp)$/i) && !asset.includes('[images-si-présentes]')
  )
  
  const documents = assets.filter(asset => 
    asset.match(/\.(pdf|docx|html)$/i)
  )
  
  // Détermine l'image hero (priorité : contient "hero", "cover", "art de la table", ou première image)
  let hero: string | undefined
  
  // Recherche d'une image hero prioritaire
  const heroImage = images.find(img => 
    img.toLowerCase().includes('hero') || 
    img.toLowerCase().includes('cover') ||
    img.toLowerCase().includes('art de la table')
  )
  
  if (heroImage) {
    hero = heroImage
  } else if (images.length > 0) {
    // Prend la première image comme hero
    hero = images[0]
  }
  
  // Galerie = toutes les images sauf le hero
  const gallery = hero ? images.filter(img => img !== hero) : images
  
  return {
    hero,
    gallery,
    documents
  }
}

/**
 * Récupère les fallbacks pour une page
 * @param pageId - L'ID de la page
 * @returns Les fallbacks nécessaires
 */
export function getPageFallbacks(pageId: string): {
  missingAssets: string[]
  needsHeroFallback: boolean
} {
  const assets = getPageAssets(pageId)
  const missingAssets = MISSING_ASSETS[pageId] || []
  
  return {
    missingAssets,
    needsHeroFallback: !assets.hero
  }
}

/**
 * Vérifie si une page a tous ses assets
 * @param pageId - L'ID de la page
 * @returns true si la page a tous ses assets
 */
export function hasCompleteAssets(pageId: string): boolean {
  const assets = getPageAssets(pageId)
  const missingAssets = MISSING_ASSETS[pageId] || []
  
  return assets.hero !== undefined && missingAssets.length === 0
}
