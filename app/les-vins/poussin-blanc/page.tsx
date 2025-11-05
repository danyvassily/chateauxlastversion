import { WinePageLuxe } from "@/components/wine-page-luxe"
import { getWineBySlug } from "@/lib/wines-data"
import { notFound } from "next/navigation"

export default function PoussinBlancPage() {
  const wine = getWineBySlug("poussin-blanc-2024")
  
  if (!wine) {
    notFound()
  }

  return (
    <WinePageLuxe
      wine={wine}
      imagePath="/Page/Nos Cuvée-ok/Gamme poussin/Page Cuvée poussin Blanc/POUSSIN BLANC.jpg"
      pdfPath="/Page/Nos Cuvée-ok/Gamme poussin/Page Cuvée poussin Blanc/FT_poussin_moelleux_2024.pdf"
    />
  )
}

export async function generateMetadata() {
  const wine = getWineBySlug("poussin-blanc-2024")
  
  if (!wine) {
    return {
      title: "Vin non trouvé",
    }
  }

  return {
    title: `${wine.name} ${wine.vintage} - Château Lastours`,
    description: wine.longDescription,
    openGraph: {
      title: `${wine.name} ${wine.vintage} - Château Lastours`,
      description: wine.longDescription,
      images: ["/Page/Nos Cuvée-ok/Gamme poussin/Page Cuvée poussin Blanc/POUSSIN BLANC.jpg"],
    },
  }
}
