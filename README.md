# 🍷 Château Lastours - MVP Site Vitrine

Site web vitrine premium pour le Château Lastours, domaine viticole d'exception situé dans le vignoble de Gaillac.

## 📋 Table des matières

- [Technologies utilisées](#technologies-utilisées)
- [Structure du projet](#structure-du-projet)
- [Installation](#installation)
- [⚠️ Important : Gestion des Assets](#️-important--gestion-des-assets)
- [Déploiement sur GitHub](#déploiement-sur-github)
- [Scripts disponibles](#scripts-disponibles)
- [Architecture](#architecture)
- [Fonctionnalités](#fonctionnalités)

## 🛠️ Technologies utilisées

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **Animations** : GSAP (GreenSock Animation Platform)
- **UI Components** : Shadcn/ui + Radix UI
- **Icons** : Lucide React
- **Déploiement** : Netlify / Vercel

## 📁 Structure du projet

```
chateaulastour/
├── app/                      # Pages et routes (Next.js App Router)
│   ├── domaine/             # Pages du domaine (histoire, terroir, etc.)
│   ├── les-vins/            # Pages des vins et cuvées
│   ├── savoir-faire/        # Pages vigne et chais
│   ├── club/                # Espace club membre
│   └── ...
├── components/              # Composants React réutilisables
│   ├── common/             # Composants UI communs
│   ├── gsap/               # Composants avec animations GSAP
│   └── ui/                 # Composants de base (shadcn)
├── lib/                    # Utilitaires et configurations
│   ├── wines-data.ts       # Données des vins
│   ├── constants.ts        # Constantes de l'application
│   └── utils.ts           # Fonctions utilitaires
├── public/                 # Assets statiques (⚠️ voir section importante)
│   ├── Page/              # Assets organisés par page
│   ├── PHOTOS-WEB-LASTOURS/ # Photos du domaine
│   └── ...
├── styles/                # Styles globaux
└── scripts/               # Scripts utilitaires
```

## 🚀 Installation

### Prérequis

- Node.js 18+ 
- pnpm (recommandé) ou npm

### Étapes d'installation

```bash
# Cloner le repository
git clone git@github.com:danyvassily/mvpfinal.git
cd mvpfinal/chateaulastour

# Installer les dépendances
pnpm install
# ou
npm install

# Lancer le serveur de développement
pnpm dev
# ou
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## ⚠️ Important : Gestion des Assets

### 🎯 Contexte

**Tous les fichiers du dossier `public/` ne sont pas versionnés sur GitHub** en raison de leur taille et de leur nombre. Le fichier `.gitignore` exclut une grande partie des assets (images, PDFs, etc.) pour maintenir un repository léger.

### 📦 Assets requis

Pour que l'application fonctionne correctement, vous devez disposer des assets suivants dans le dossier `public/` :

#### Structure des assets essentiels :

```
public/
├── Page/                           # Assets organisés par page
│   ├── La vigne - ok/             # Images pour la page vigne
│   │   ├── 20230426_214346.jpg
│   │   ├── Palissage vigne .jpg
│   │   ├── la véraison .jpg
│   │   ├── image00002.jpeg
│   │   ├── image00005.jpeg
│   │   ├── image00036.jpeg
│   │   └── IMG_20230809_124834.jpg
│   ├── Notre histoire - ok/       # Images pour la page histoire
│   ├── Club - ok/                 # Images pour la page club
│   ├── Dégustation - ok/          # Images pour la page dégustation
│   ├── Notre Chai - ok/           # Images pour la page chai
│   └── _common/                   # Assets partagés
│       ├── histoire-hero.jpg
│       └── hero-fallback.webp
├── PHOTOS-WEB-LASTOURS/           # Photos du domaine
│   ├── VINIFICATION/
│   └── Photos-GENERAL/
├── photos/                        # Photos générales
├── wine-*.png/jpg                 # Images des bouteilles de vin
├── gamme-*.jpg                    # Images des gammes
└── *.pdf                          # Fiches techniques
```

### 📥 Récupération des assets

Si vous n'avez pas les assets localement :

1. **Récupérer les fichiers depuis la source** (Drive, serveur, backup local)
2. **Placer tous les fichiers dans le dossier `public/`** en respectant la structure ci-dessus
3. **Vérifier que les assets sont bien présents** avant de lancer l'application

### 🔍 Vérification des assets

```bash
# Depuis le dossier chateaulastour/
ls -R public/Page/
ls -R public/PHOTOS-WEB-LASTOURS/
```

## 🚢 Déploiement sur GitHub

### 📤 Pusher l'application sur le nouveau repository

Une fois que vous avez placé tous les assets dans le dossier `public/`, suivez ces étapes :

#### 1. Configuration du remote Git

```bash
# Se placer dans le dossier du projet
cd /Users/danyvassily/dev\ /chateaulastour-mvp/chateaulastour

# Vérifier les remotes existants
git remote -v

# Ajouter le nouveau remote (si pas déjà fait)
git remote add origin git@github.com:danyvassily/mvpfinal.git

# Ou mettre à jour le remote existant
git remote set-url origin git@github.com:danyvassily/mvpfinal.git
```

#### 2. Préparer les fichiers

```bash
# Vérifier le statut
git status

# Ajouter tous les fichiers (sauf ceux dans .gitignore)
git add .

# Créer un commit
git commit -m "feat: Application MVP Château Lastours complète"
```

#### 3. Pusher sur GitHub

```bash
# Pusher sur la branche main
git push -u origin main

# Si vous avez des conflits avec l'historique existant, vous pouvez forcer (⚠️ attention)
git push -u origin main --force
```

### 🔐 Configuration SSH

Si vous n'avez pas encore configuré SSH avec GitHub :

```bash
# Générer une clé SSH (si nécessaire)
ssh-keygen -t ed25519 -C "votre.email@example.com"

# Copier la clé publique
cat ~/.ssh/id_ed25519.pub

# Ajouter la clé dans GitHub :
# GitHub > Settings > SSH and GPG keys > New SSH key
```

### 📝 Notes importantes sur le push

- ⚠️ **Les assets du dossier `public/` peuvent être trop volumineux** pour GitHub si vous les versionnez tous
- 💡 **Solution recommandée** : 
  - Garder les assets volumineux en local ou sur un CDN
  - Versionner uniquement les assets critiques (< 100MB au total)
  - Utiliser Git LFS (Large File Storage) pour les gros fichiers si nécessaire

#### Installation de Git LFS (optionnel)

Si vous devez versionner des gros fichiers :

```bash
# Installer Git LFS
brew install git-lfs  # macOS
# ou télécharger depuis https://git-lfs.github.com/

# Initialiser Git LFS
git lfs install

# Tracker les types de fichiers volumineux
git lfs track "*.jpg"
git lfs track "*.jpeg"
git lfs track "*.png"
git lfs track "*.pdf"

# Ajouter le fichier .gitattributes
git add .gitattributes
git commit -m "chore: configure Git LFS"
```

## 📜 Scripts disponibles

```bash
# Développement
pnpm dev              # Lancer le serveur de développement

# Build
pnpm build            # Créer un build de production
pnpm start            # Lancer le serveur en production

# Linting et formatage
pnpm lint             # Vérifier le code avec ESLint

# Tests
pnpm test             # Lancer les tests (Vitest)

# Utilitaires
node scripts/verify-wine-images.mjs    # Vérifier les images des vins
node scripts/clean-unused-assets.js    # Nettoyer les assets inutilisés
```

## 🏗️ Architecture

### Pages principales

- **Accueil** : Présentation du domaine, vins phares
- **Domaine** : Histoire, terroir, équipe, engagement
- **Les Vins** : Catalogue des cuvées, fiches techniques
- **Savoir-Faire** : La vigne, les chais, vinification
- **Club** : Espace membre, inscription, avantages
- **Événements** : Actualités et événements du domaine
- **Réservation** : Visites et dégustations

### Composants clés

- **Header** : Navigation principale avec mega-menu
- **Footer** : Informations de contact, liens utiles
- **Wine Cards** : Affichage des cuvées
- **Cinematic Effects** : Animations GSAP avancées
- **PageTransition** : Transitions fluides entre pages

## ✨ Fonctionnalités

- ✅ Design premium et élégant (style Ruinart)
- ✅ Animations fluides avec GSAP
- ✅ Responsive (mobile, tablette, desktop)
- ✅ SEO optimisé (metadata, sitemap)
- ✅ Accessibilité (WCAG)
- ✅ Performance optimisée (Next.js 14)
- ✅ Gestion du panier (Context API)
- ✅ Authentification utilisateur
- ✅ Espace club membre
- ✅ Système de réservation

## 📞 Support

Pour toute question ou problème :
- **Email** : contact@chateau-lastours.com
- **Téléphone** : +33 (0)X XX XX XX XX

## 📄 Licence

© 2024 Château Lastours. Tous droits réservés.

---

**Développé avec ❤️ et 🍷 pour le Château Lastours**

