import type { Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // Permet le zoom pour l'accessibilité
  userScalable: true, // Permet le zoom tactile
  // @ts-ignore
  shrinkToFit: 'no',
  themeColor: '#ffffff' // Thème clair uniquement
}
