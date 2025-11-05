"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

/**
 * Composant SummaryBlock
 * 
 * Affiche le résumé du devis avec lignes, sous-total, TVA et total TTC.
 * Sur desktop, position sticky côté droit. Sur mobile, section dédiée.
 */
interface DevisLigne {
  label: string
  qte: number
  puHT: number
  totalHT: number
}

interface SummaryBlockProps {
  lignes: DevisLigne[]
  sousTotalHT: number
  tva: {
    taux: number
    montant: number
  }
  totalTTC: number
  isLoading?: boolean
  className?: string
}

export function SummaryBlock({
  lignes,
  sousTotalHT,
  tva,
  totalTTC,
  isLoading = false,
  className
}: SummaryBlockProps) {
  if (lignes.length === 0) {
    return null
  }
  
  return (
    <div
      className={cn(
        "border-b lg:border lg:border-l bg-background p-6",
        "lg:sticky lg:top-[calc(var(--header-height,80px)+16px)] lg:self-start",
        className
      )}
      aria-live="polite"
      aria-label="Résumé du devis"
    >
      <h3 className="text-xl font-display mb-6">Résumé du devis</h3>
      
      {isLoading ? (
        <div className="text-center py-8 text-muted-foreground">
          Calcul en cours...
        </div>
      ) : (
        <>
          {/* Lignes du devis */}
          <div className="space-y-3 mb-6">
            {lignes.map((ligne, index) => (
              <div
                key={index}
                className="flex justify-between items-start gap-4 pb-3 border-b last:border-0"
              >
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm">{ligne.label}</div>
                  {ligne.qte > 1 && (
                    <div className="text-xs text-muted-foreground mt-1">
                      {ligne.qte} × {ligne.puHT.toFixed(2)} €
                    </div>
                  )}
                </div>
                <div className="text-right font-medium whitespace-nowrap">
                  {ligne.totalHT.toFixed(2)} €
                </div>
              </div>
            ))}
          </div>
          
          {/* Totaux */}
          <div className="space-y-2 pt-4 border-t">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Sous-total HT</span>
              <span>{sousTotalHT.toFixed(2)} €</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                TVA ({(tva.taux * 100).toFixed(0)}%)
              </span>
              <span>{tva.montant.toFixed(2)} €</span>
            </div>
            <div className="flex justify-between pt-2 border-t text-lg font-semibold">
              <span>Total TTC</span>
              <span>{totalTTC.toFixed(2)} €</span>
            </div>
          </div>
          
          {/* Bouton télécharger PDF (stub optionnel) */}
          <div className="mt-6 pt-6 border-t">
            <Button
              variant="outline"
              className="w-full min-h-[44px] focus:ring-2 focus:ring-accent"
              onClick={() => {
                // TODO: Générer et télécharger le PDF
                console.log("Téléchargement PDF stub")
              }}
            >
              <Download className="mr-2 w-4 h-4" />
              Télécharger le devis (PDF)
            </Button>
          </div>
        </>
      )}
    </div>
  )
}

