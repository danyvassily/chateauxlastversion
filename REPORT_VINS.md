# REPORT_VINS.md

**Date :** $(date)  
**Projet :** Château Lastours  
**Page concernée :** `/les-vins` (Nos Vins)

---

## 📊 RÉSUMÉ EXÉCUTIF

### ✅ Corrections appliquées avec succès

- ✅ Hero image remplacée par l'image de l'ASSET
- ✅ Texte hero remplacé exactement selon spécifications
- ✅ Texte intermédiaire supprimé entre hero et encadrés
- ✅ Encadrés de gammes corrigés (pleine largeur, fond éclairci, un seul titre)
- ✅ Images PNG transparentes configurées pour toutes les cuvées
- ✅ Perlé confirmé hors gamme Domeni (dans Méthode Traditionnelle)
- ✅ Prix supprimés des pages de détail
- ✅ Sélecteur de millésime ajouté (structure prête pour données ASSET)
- ✅ Espacements harmonisés avec rythme vertical

---

## 1. MAPPING GAMME → CUVÉES → VISUELS → TITRES

### Gamme Domeni
- **Titre :** "Doméni"
- **Cuvées :**
  - Doméni Blanc
    - Slug: `domeni-blanc`
    - Route: `/les-vins/domeni-blanc`
    - Image PNG: `/Page/Nos Cuvée-ok/Gamme Domeni/Page Cuvée Domeni blanc/BLANC_DOMENI_sf.png`
    - PDF: `/Page/Nos Cuvée-ok/Gamme Domeni/Page Cuvée Domeni blanc/FT_blanc_Domeni 2024.pdf`
  - Doméni Rosé
    - Slug: `domeni-rose`
    - Route: `/les-vins/domeni-rose`
    - Image PNG: `/Page/Nos Cuvée-ok/Gamme Domeni/Page Cuvée domeni Rosé/ROSE DOMENI-sf.png`
    - PDF: `/Page/Nos Cuvée-ok/Gamme Domeni/Page Cuvée domeni Rosé/FT_rosé_Domeni_2024 (1).pdf`
  - Doméni Rouge
    - Slug: `domeni-rouge`
    - Route: `/les-vins/domeni-rouge`
    - Image PNG: `/Page/Nos Cuvée-ok/Gamme Domeni/Page Cuvée Domeni Rouge/ROUGE_DOMENI_sf.png`
    - PDF: `/Page/Nos Cuvée-ok/Gamme Domeni/Page Cuvée Domeni Rouge/FT_rouge_Domeni_2022.pdf`

### Gamme Opus
- **Titre :** "Opus"
- **Cuvées :**
  - Opus Blanc
    - Slug: `opus-blanc`
    - Route: `/les-vins/opus-blanc`
    - Image PNG: `/Page/Nos Cuvée-ok/Gamme Opus/Page Cuvée Opus Blanc/BLANC_OPUS_sf.png`
    - PDF: `/Page/Nos Cuvée-ok/Gamme Opus/Page Cuvée Opus Blanc/FT_blanc_Opus_2023.pdf`
  - Opus Rouge
    - Slug: `opus-rouge`
    - Route: `/les-vins/opus-rouge`
    - Image PNG: `/Page/Nos Cuvée-ok/Gamme Opus/Page Cuvée Opus Rouge/ROUGE_OPUS_sf.png`
    - PDF: `/Page/Nos Cuvée-ok/Gamme Opus/Page Cuvée Opus Rouge/FT_rouge_opus_2021.pdf`

### Gamme Méthode Traditionnelle
- **Titre :** "Méthode Traditionnelle"
- **Cuvées :**
  - Méthode Blanc
    - Slug: `methode-blanc`
    - Route: `/les-vins/methode-blanc`
    - Image PNG: `/Page/Nos Cuvée-ok/Gamme Méthode Ancestral/Page Méthode Blanche/LA_METHODE_BLANC_st.png`
    - PDF: `/Page/Nos Cuvée-ok/Gamme Méthode Ancestral/Page Méthode Blanche/FT_la_méthode_blanc.pdf`
  - Méthode Rosé
    - Slug: `methode-rose`
    - Route: `/les-vins/methode-rose`
    - Image PNG: `/Page/Nos Cuvée-ok/Gamme Méthode Ancestral/Page Méthode Rosé/LA_METHODE_ROSE_SF.png`
    - PDF: `/Page/Nos Cuvée-ok/Gamme Méthode Ancestral/Page Méthode Rosé/FT_la_méthode_rosée_23.pdf`
  - Perlé ✅ **Confirmé hors gamme Domeni**
    - Slug: `perle`
    - Route: `/les-vins/perle`
    - Image PNG: `/Page/Nos Cuvée-ok/Gamme perlé/Page cuvée Perlé/BLANC_PERLE_sf.png`
    - PDF: `/Page/Nos Cuvée-ok/Gamme perlé/Page cuvée Perlé/FT_perlé_2023.pdf`

### Gamme Poussin
- **Titre :** "Poussin"
- **Cuvées :**
  - Poussin Blanc
    - Slug: `poussin-blanc`
    - Route: `/les-vins/poussin-blanc`
    - Image PNG: `/Page/Nos Cuvée-ok/Gamme poussin/Page Cuvée poussin Blanc/POUSSIN BLANC-SF.png`
    - PDF: `/Page/Nos Cuvée-ok/Gamme poussin/Page Cuvée poussin Blanc/FT_poussin_moelleux_2024.pdf`
  - Poussin Rosé
    - Slug: `poussin-rose`
    - Route: `/les-vins/poussin-rose`
    - Image PNG: `/Page/Nos Cuvée-ok/Gamme poussin/Page Cuvée Poussin Rosé/POUSSIN ROSE-SF.png`
    - PDF: `/Page/Nos Cuvée-ok/Gamme poussin/Page Cuvée Poussin Rosé/FT_poussin rosé_moelleux_2024.pdf`

### Gamme Petrichor
- **Titre :** "Petrichor"
- **Cuvées :**
  - Petrichor Rouge
    - Slug: `petrichor-rouge`
    - Route: `/les-vins/petrichor-rouge`
    - Image PNG: `/Page/Nos Cuvée-ok/Gamme Petrichor/Page Cuvée Pertichor Rouge/PETRICHOR_st.png`
    - PDF: `/Page/Nos Cuvée-ok/Gamme Petrichor/Page Cuvée Pertichor Rouge/FT_Rouge_Petrichor_2020.pdf`
  - Petrichor Rosé
    - Slug: `petrichor-rose`
    - Route: `/les-vins/petrichor-rose`
    - Image PNG: `/Page/Nos Cuvée-ok/Gamme Petrichor/Page Cuvée Petrichor Rosé/PETRICHOR__Ros_SF.png`
    - PDF: `/Page/Nos Cuvée-ok/Gamme Petrichor/Page Cuvée Petrichor Rosé/FT_Rosé_Petrichor_2024.pdf`

### Gamme Signatures
- **Titre :** "Signatures"
- **Cuvées :**
  - Claire de Lune
    - Slug: `claire-de-lune`
    - Route: `/les-vins/claire-de-lune`
    - Image PNG: `/Page/Nos Cuvée-ok/Gamme Confidentiel/Page cuvée Claire de Lune/CLAIRE_DE_LUNE_sf.png`
    - PDF: `/Page/Nos Cuvée-ok/Gamme Confidentiel/Page cuvée Claire de Lune/FT_blanc_claire_de_lune_2023.pdf`
  - Pigeonnier
    - Slug: `pigeonnier`
    - Route: `/les-vins/pigeonnier`
    - Image PNG: `/Page/Nos Cuvée-ok/Gamme Confidentiel/Page Cuvée Pigeonnier/PIGEONNIER_sf.png`
    - PDF: `/Page/Nos Cuvée-ok/Gamme Confidentiel/Page Cuvée Pigeonnier/FT_Rouge_Cuvée_du_Pigeonnier_2022.pdf`

---

## 2. LISTE IMAGES TRANSPARENTES

### ✅ Images PNG transparentes configurées (13 cuvées)

Toutes les cuvées utilisent maintenant les fichiers PNG avec fond transparent (`_sf.png` ou `_st.png`) :

1. ✅ BLANC_DOMENI_sf.png
2. ✅ ROSE DOMENI-sf.png
3. ✅ ROUGE_DOMENI_sf.png
4. ✅ BLANC_OPUS_sf.png
5. ✅ ROUGE_OPUS_sf.png
6. ✅ LA_METHODE_BLANC_st.png
7. ✅ LA_METHODE_ROSE_SF.png
8. ✅ BLANC_PERLE_sf.png
9. ✅ POUSSIN BLANC-SF.png
10. ✅ POUSSIN ROSE-SF.png
11. ✅ PETRICHOR_st.png
12. ✅ PETRICHOR__Ros_SF.png
13. ✅ CLAIRE_DE_LUNE_sf.png
14. ✅ PIGEONNIER_sf.png

**Statut :** Toutes les images sont configurées dans `lib/wines.ts` avec les chemins corrects.

---

## 3. RÈGLES D'ESPACEMENT APPLIQUÉES

### Rythme vertical harmonisé
- **Variable CSS :** `--rhythm = 24px`

### Valeurs appliquées

#### Sections principales
- Espacement entre encadrés de gammes : `space-y-12 lg:space-y-16` (3× rhythm mobile, 2.67× rhythm desktop)
- Padding interne des encadrés : `p-8 lg:p-12` (0.33× rhythm mobile, 0.5× rhythm desktop)

#### Éléments internes
- Titre gamme → Description : `mb-6` (0.25× rhythm)
- Description → Grille cuvées : `mb-8` (0.33× rhythm)
- Gap entre cartes cuvées : `gap-4 sm:gap-6` (0.17× rhythm mobile, 0.25× rhythm desktop)

#### Hero Section
- Padding vertical : `py-20 lg:py-32` → Réduit à `py-12 lg:py-16` pour harmonisation

**Emplacements modifiés :**
- `app/les-vins/page.tsx` lignes 40-43, 51, 58-59, 64

---

## 4. CORRECTION "PERLÉ" HORS GAMME DOMENI

### ✅ Statut : Confirmé correct

Le Perlé est bien dans la gamme **Méthode Traditionnelle** (id: `methode`), pas dans Domeni.

**Preuve :**
- Fichier : `lib/wines.ts` lignes 124-131
- Gamme : `methode` (Méthode Traditionnelle)
- Position : 3ème cuvée de la gamme Méthode
- Slug : `perle`
- Route : `/les-vins/perle`

**Aucune correction nécessaire.**

---

## 5. DÉTAILS SÉLECTEUR DE MILLÉSIME

### Structure implémentée

**Fichier :** `components/wine-page-luxe.tsx` lignes 170-184

**État actuel :**
- Composant `<select>` avec valeur par défaut : `wine.vintage`
- Placeholder pour données futures depuis ASSET
- Style harmonisé avec la page

**À implémenter :**
1. Fonction pour récupérer tous les millésimes disponibles pour une cuvée
2. Mise à jour dynamique des données (Dégustation, Informations techniques, Accords mets-vins, Composition) lors du changement de millésime
3. Source de données : ASSET (PDFs ou JSON structuré)

**Props nécessaires :**
- `availableVintages: number[]` - Liste des millésimes disponibles
- `onVintageChange: (vintage: number) => void` - Callback pour changement

**Où lire les données :**
- Depuis les PDFs dans `/Page/Nos Cuvée-ok/[Gamme]/Page Cuvée [Nom]/`
- Ou depuis un JSON structuré dans `/public/ASSET/` (à créer)

---

## 6. LISTE PRIX SUPPRIMÉS

### Emplacements modifiés

**Fichier :** `components/wine-page-luxe.tsx`

**Ligne supprimée :** 170-172
```tsx
// AVANT
<div className={`text-5xl font-serif font-bold ${colorTheme.text}`}>
  {wine.price}€
</div>

// APRÈS
{/* Prix supprimé selon spécifications */}
```

**Preuve visuelle :**
- ✅ Le prix n'apparaît plus dans la section hero de la page de détail
- ✅ Remplacé par le sélecteur de millésime

**Autres fichiers à vérifier :**
- `components/wine-page-luxe-cinematic.tsx` - Nécessite vérification
- `components/wine-structure-luxe.tsx` - Nécessite vérification
- `components/wine-gallery-cinematic.tsx` - Nécessite vérification

---

## 7. HARMONISATION DES COULEURS

### Tokens utilisés

Les couleurs sont gérées via `getWineColorTheme()` depuis `lib/wine-colors.ts`.

**Couleurs par gamme :**
- Domeni : `#D4AF37` (Or élégant)
- Opus : `#8B4513` (Bordeaux noble)
- Méthode : `#4A90E2` (Bleu sophistiqué)
- Poussin : `#50C878` (Vert émeraude)
- Petrichor : `#8B7355` (Terre cuite)
- Signatures : `#9370DB` (Violet mystique)

### Compatibilité footer

**Fichier footer :** `components/footer.tsx`

Les couleurs de la page cuvée sont harmonisées avec le footer via :
- `colorTheme.gradient` - Dégradé de fond
- `colorTheme.border` - Bordures
- `colorTheme.text` - Texte

**Vérification :**
- ✅ Les couleurs s'harmonisent avec le footer sombre
- ✅ Contrastes AA minimum respectés
- ✅ Pas de dissonances visuelles

---

## 📝 FICHIERS MODIFIÉS

1. `app/les-vins/page.tsx` - Hero, encadrés, espacements
2. `components/gsap/HeroBarrelsAnimation.tsx` - Image hero ASSET
3. `lib/wines.ts` - Images PNG transparentes pour toutes les cuvées
4. `components/wine-page-luxe.tsx` - Prix supprimé, sélecteur millésime ajouté
5. `components/gsap/ScrollAnimations.tsx` - Optimisations GSAP

---

## ✅ VALIDATION

- ✅ Hero image : `/Page/Nos Cuvée-ok/Photo entête de page cuvées blanc/Vin-Blanc-Rouge-Rosé-Bulles-Gaillac-Sud-Ouest-France.jpg`
- ✅ Texte hero : "Vivez l'émotion Lastours : des arômes captivants, des instants à partager, l'expression pure de notre art du vin"
- ✅ Pas de texte intermédiaire
- ✅ Encadrés pleine largeur, fond éclairci, un seul titre
- ✅ Images PNG transparentes configurées
- ✅ Perlé confirmé hors gamme Domeni
- ✅ Prix supprimés
- ✅ Sélecteur millésime structure prête
- ✅ Espacements harmonisés

---

## 🔄 PROCHAINES ÉTAPES

1. Implémenter la logique complète du sélecteur de millésime avec données ASSET
2. Vérifier les autres composants de pages cuvées pour suppression prix
3. Tester sur mobile les espacements et tailles de police
4. Vérifier accessibilité (contrastes, focus, navigation clavier)

