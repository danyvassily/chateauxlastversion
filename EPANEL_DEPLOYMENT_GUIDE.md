# 🚀 Guide de Déploiement ePanel/cPanel - Château Lastours

## 📋 Table des Matières
1. [Prérequis](#prérequis)
2. [Préparation du Build](#préparation-du-build)
3. [Connexion à ePanel](#connexion-à-epanel)
4. [Upload des Fichiers](#upload-des-fichiers)
5. [Configuration Finale](#configuration-finale)
6. [Vérification](#vérification)
7. [Dépannage](#dépannage)

---

## 🎯 Prérequis

Avant de commencer, assure-toi d'avoir :
- ✅ Accès à ton compte ePanel/cPanel
- ✅ Les identifiants FTP de ton hébergeur
- ✅ Un client FTP (FileZilla recommandé) installé
- ✅ Node.js et pnpm installés sur ton ordinateur

---

## 🏗️ Préparation du Build

### Étape 1 : Nettoyer les anciens builds

```bash
cd "/Users/danyvassily/dev /chateaulastour-mvp/chateaulastour"
pnpm run clean
```

### Étape 2 : Créer le build de production

```bash
pnpm run build
```

Cette commande va créer un dossier `out/` contenant tous les fichiers statiques de ton site.

### Étape 3 : Vérifier le build

```bash
ls -la out/
```

Tu devrais voir :
- Fichiers HTML pour chaque page
- Dossier `_next/` avec les assets (CSS, JS, images)
- Dossier `public/` avec tes fichiers statiques

---

## 🌐 Connexion à ePanel

### Option A : Via le Gestionnaire de Fichiers Web

1. **Connexion**
   - Va sur l'URL de ton ePanel (généralement : `https://tondomaine.com:2083`)
   - Entre tes identifiants
   - Clique sur "Gestionnaire de fichiers" ou "File Manager"

2. **Naviguer vers le dossier web**
   - Trouve le dossier `public_html/` (ou `www/` selon l'hébergeur)
   - C'est ici que tu vas uploader ton site

### Option B : Via FTP (Recommandé pour les gros sites)

1. **Récupérer les identifiants FTP**
   - Dans ePanel, cherche "Comptes FTP" ou "FTP Accounts"
   - Note les informations :
     - **Serveur FTP** : ftp.tondomaine.com
     - **Nom d'utilisateur** : ton_utilisateur@tondomaine.com
     - **Mot de passe** : ton_mot_de_passe
     - **Port** : 21 (ou 22 pour SFTP)

2. **Configurer FileZilla**
   - Ouvre FileZilla
   - Fichier → Gestionnaire de Sites → Nouveau Site
   - **Protocole** : FTP (ou SFTP si disponible)
   - **Hôte** : ton serveur FTP
   - **Port** : 21 (ou 22 pour SFTP)
   - **Type d'authentification** : Normal
   - **Utilisateur** : ton nom d'utilisateur
   - **Mot de passe** : ton mot de passe
   - Clique sur "Connexion"

---

## 📤 Upload des Fichiers

### Méthode 1 : Via FileZilla (Recommandé)

1. **Préparer les fichiers**
   ```bash
   # Copie le fichier .htaccess dans le dossier out/
   cp .htaccess out/.htaccess
   ```

2. **Upload via FTP**
   - Dans FileZilla, partie gauche = ton ordinateur
   - Partie droite = serveur distant
   - Navigue vers `public_html/` côté serveur
   - Navigue vers le dossier `out/` de ton projet côté local
   - **Sélectionne TOUT** dans le dossier `out/` (Ctrl+A / Cmd+A)
   - Glisse-dépose vers `public_html/`
   
   ⚠️ **Important** : Upload le CONTENU du dossier `out/`, pas le dossier lui-même !

3. **Temps d'upload**
   - Selon la taille de ton site : 5-30 minutes
   - Surveille la progression en bas de FileZilla
   - Ne ferme pas FileZilla pendant l'upload !

### Méthode 2 : Via le Gestionnaire de Fichiers ePanel

1. **Créer une archive locale**
   ```bash
   cd out
   zip -r ../site-chateau-lastours.zip .
   cd ..
   ```

2. **Upload de l'archive**
   - Dans ePanel → Gestionnaire de fichiers
   - Va dans `public_html/`
   - Clique sur "Upload" ou "Téléverser"
   - Sélectionne `site-chateau-lastours.zip`
   - Attends la fin de l'upload (barre de progression)

3. **Extraire l'archive**
   - Clic droit sur `site-chateau-lastours.zip`
   - Sélectionne "Extract" ou "Extraire"
   - Choisis `public_html/` comme destination
   - Confirme l'extraction
   - **Supprime** le fichier ZIP après extraction

---

## ⚙️ Configuration Finale

### 1. Vérifier le fichier .htaccess

Dans `public_html/`, vérifie que le fichier `.htaccess` est présent :

```bash
# Dans le gestionnaire de fichiers ePanel
# ou via FTP, vérifie que .htaccess existe
```

⚠️ **Si tu ne vois pas le fichier .htaccess** :
- Dans FileZilla : Serveur → Forcer l'affichage des fichiers cachés
- Dans ePanel : Paramètres → Afficher les fichiers cachés (cocher)

### 2. Configurer le domaine (si nécessaire)

Si ton site n'est pas déjà configuré :

1. Dans ePanel → "Domaines" ou "Addon Domains"
2. Vérifie que ton domaine pointe vers `public_html/`
3. Si ce n'est pas le cas, configure-le pour pointer vers ce dossier

### 3. Activer le SSL/HTTPS (Recommandé)

1. Dans ePanel → "SSL/TLS" ou "Let's Encrypt"
2. Sélectionne ton domaine
3. Clique sur "Installer le certificat SSL gratuit" ou "Install Free SSL"
4. Attends 1-2 minutes pour l'activation

---

## ✅ Vérification

### 1. Tester le site

Ouvre ton navigateur et va sur :
- `https://tondomaine.com`
- `https://tondomaine.com/les-vins/`
- `https://tondomaine.com/domaine/histoire/`

### 2. Vérifier les redirections

Le fichier `.htaccess` doit gérer :
- ✅ Redirection HTTP → HTTPS
- ✅ Routes Next.js (avec ou sans trailing slash)
- ✅ Page 404 personnalisée

### 3. Tester la performance

Outils recommandés :
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

---

## 🔧 Dépannage

### Problème : Page 404 ou "Not Found"

**Solution** :
```bash
# Vérifie que .htaccess est présent et lisible
# Vérifie les permissions du fichier : 644
```

Dans ePanel :
- Clic droit sur `.htaccess` → Permissions → 644 (rw-r--r--)

### Problème : Les images ne s'affichent pas

**Solution** :
```bash
# Vérifie que le dossier _next/ et public/ sont bien uploadés
# Vérifie les permissions : dossiers = 755, fichiers = 644
```

### Problème : Erreur 500 (Internal Server Error)

**Cause probable** : Erreur dans le fichier `.htaccess`

**Solution** :
1. Renomme `.htaccess` en `.htaccess.bak`
2. Teste le site
3. Si ça marche, le problème vient du `.htaccess`
4. Contacte le support de ton hébergeur pour vérifier les modules Apache actifs

### Problème : Le site est lent

**Solutions** :
1. Vérifie que la compression Gzip est active (dans .htaccess)
2. Vérifie que les en-têtes de cache sont configurés
3. Contacte ton hébergeur pour vérifier les performances du serveur

### Problème : Les routes dynamiques ne fonctionnent pas

**Vérification** :
```bash
# Vérifie que le module mod_rewrite est activé sur ton serveur
# Contacte le support si nécessaire
```

---

## 📊 Structure Finale sur le Serveur

Après l'upload, ton `public_html/` devrait ressembler à :

```
public_html/
├── .htaccess                  # Configuration Apache
├── index.html                 # Page d'accueil
├── 404.html                   # Page d'erreur
├── _next/                     # Assets Next.js
│   ├── static/
│   │   ├── css/
│   │   ├── chunks/
│   │   └── media/
├── actualites/
│   └── index.html
├── les-vins/
│   ├── index.html
│   ├── claire-de-lune/
│   │   └── index.html
│   └── ...
├── domaine/
│   ├── histoire/
│   │   └── index.html
│   └── ...
└── [autres dossiers de routes]
```

---

## 🔄 Mises à Jour Futures

Pour mettre à jour ton site :

1. **Faire les modifications en local**
2. **Rebuild** :
   ```bash
   pnpm run clean
   pnpm run build
   ```
3. **Re-upload** les fichiers modifiés via FTP
4. **Vider le cache** du navigateur (Ctrl+Shift+R / Cmd+Shift+R)

💡 **Astuce** : Tu peux uploader uniquement les fichiers modifiés pour gagner du temps !

---

## 📞 Support

Si tu rencontres des problèmes :

1. **Vérifie les logs d'erreur** dans ePanel → "Error Log"
2. **Contacte le support** de ton hébergeur avec :
   - Description du problème
   - URL concernée
   - Message d'erreur exact
   - Capture d'écran si possible

---

## 🎉 Félicitations !

Ton site Château Lastours est maintenant en ligne ! 🍷

N'hésite pas si tu as besoin d'aide supplémentaire.

---

**Dernière mise à jour** : 8 octobre 2025
**Version** : 1.0.0
