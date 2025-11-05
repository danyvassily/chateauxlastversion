"use client"

import { cn } from "@/lib/utils"

/**
 * Composant InlineNotice
 * 
 * Affiche des alertes élégantes et discrètes pour les informations importantes
 * (capacités, indisponibilités, etc.) sans couleurs criardes.
 */
interface InlineNoticeProps {
  children: React.ReactNode
  variant?: "info" | "warning" | "success"
  className?: string
}

export function InlineNotice({ 
  children, 
  variant = "info",
  className 
}: InlineNoticeProps) {
  const variants = {
    info: "bg-muted/50 border-border text-foreground",
    warning: "bg-amber-50/50 border-amber-200/50 text-foreground",
    success: "bg-green-50/50 border-green-200/50 text-foreground"
  }
  
  return (
    <div
      role="alert"
      aria-live="polite"
      className={cn(
        "px-4 py-3 border rounded-lg text-sm leading-relaxed",
        variants[variant],
        className
      )}
    >
      {children}
    </div>
  )
}

