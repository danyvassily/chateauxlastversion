# 🔧 Guide de Résolution - Images Manquantes Hostinger

## 🎯 Situation Actuelle

**Site déployé** : https://blanchedalmond-bat-934784.hostingersite.com/
**Problème** : Les images ne s'affichent pas
**Cause** : Upload incomplet ou problème de structure

---

## ✅ Bonne Nouvelle

**Toutes les images SONT présentes** dans votre build local et dans l'archive ZIP !
Le problème vient uniquement du déploiement sur Hostinger.

---

## 🚀 Solution : Re-upload via FTP (Méthode Fiable)

### Pourquoi FTP plutôt que ZIP ?

| Méthode | Avantages | Inconvénients |
|---------|-----------|---------------|
| **Upload ZIP via hPanel** | Rapide si ça marche | ⚠️ Timeout possible, extraction incomplète |
| **FTP via FileZilla** ✅ | Fiable, vous voyez la progression | Plus long (mais fiable) |

---

## 📝 Étapes Détaillées (30-60 minutes)

### Étape 1 : Télécharger FileZilla (si pas déjà fait)

1. Allez sur : https://filezilla-project.org/
2. Téléchargez **FileZilla Client** (gratuit)
3. Installez-le

### Étape 2 : Récupérer vos Identifiants FTP Hostinger

1. **Connectez-vous à hPanel** : https://hpanel.hostinger.com/
2. Allez dans **Fichiers** → **Comptes FTP**
3. Notez :
   ```
   Serveur FTP  : ftp.votredomaine.com (ou l'IP fournie)
   Utilisateur  : votre_utilisateur@votredomaine.com
   Mot de passe : [cliquez sur "Afficher" si nécessaire]
   Port         : 21 (FTP) ou 22 (SFTP - recommandé)
   ```

### Étape 3 : Configurer FileZilla

1. Ouvrez FileZilla
2. **Fichier** → **Gestionnaire de Sites** → **Nouveau Site**
3. Configurez :
   ```
   Nom du site : Hostinger Château Lastours
   
   Protocole : SFTP (ou FTP)
   Hôte : ftp.votredomaine.com
   Port : 22 (SFTP) ou 21 (FTP)
   Type d'authentification : Normal
   Utilisateur : votre_utilisateur@votredomaine.com
   Mot de passe : votre_mot_de_passe
   ```
4. Cliquez sur **Connexion**

### Étape 4 : Nettoyer public_html (Important !)

⚠️ **Avant de tout supprimer, vérifiez qu'il n'y a pas de contenu important !**

1. Dans FileZilla, **côté serveur (droite)**, naviguez vers `/public_html/`
2. Vérifiez la structure actuelle :
   
   **SI vous voyez** :
   ```
   public_html/
   └── out/
       ├── index.html
       └── ...
   ```
   → ❌ **ERREUR** : Le dossier `out` ne devrait PAS être là !
   
   **OU SI vous voyez** :
   ```
   public_html/
   ├── index.html (vide ou ancien site)
   └── old_files/
   ```
   → Vous avez uploadé l'archive mais pas extrait correctement

3. **Supprimez TOUT** dans `public_html/` :
   - Sélectionnez tous les fichiers/dossiers
   - Clic droit → Supprimer
   - Confirmez

### Étape 5 : Upload du Site Complet

1. **Côté LOCAL (gauche)** dans FileZilla :
   - Naviguez vers : `/Users/danyvassily/dev /chateaulastour-mvp/chateaulastour/out/`

2. **Côté SERVEUR (droite)** :
   - Vous devriez être dans : `/public_html/` (vide)

3. **Upload** :
   - Dans le panneau de gauche, **entrez** dans le dossier `out/`
   - Sélectionnez **TOUT** le contenu (Ctrl+A ou Cmd+A)
   - **Important** : Sélectionnez le CONTENU de `out/`, pas le dossier `out/` lui-même !
   - Glissez-déposez vers le panneau de droite (`public_html/`)

4. **Progression** :
   - En bas de FileZilla, vous voyez la file d'attente
   - Attendez que **TOUS les fichiers** soient transférés
   - **Ne fermez pas FileZilla !**

**Temps estimé** : 30-60 minutes selon votre connexion

### Étape 6 : Vérification Après Upload

1. Dans FileZilla, **côté serveur**, vérifiez que `public_html/` contient maintenant :
   ```
   public_html/
   ├── .htaccess                        ✅
   ├── index.html                       ✅
   ├── 404.html                         ✅
   ├── chateau-lastours-hero.jpg        ✅ Important !
   ├── logo-chateau-lastours.png        ✅ Important !
   ├── _next/
   │   └── static/
   │       ├── css/
   │       ├── chunks/
   │       └── media/
   ├── Page/
   │   └── homepage/
   │       ├── Nos vins gamme pétrichor.jpg    ✅
   │       ├── Château côté jardin.JPG         ✅
   │       ├── Chapelle et vignes.jpeg         ✅
   │       └── Mariage au château.jpg          ✅
   ├── PHOTOS-WEB-LASTOURS/
   │   └── LOGO/
   │       └── logo-chateau-lastours.jpg       ✅
   ├── les-vins/
   ├── domaine/
   └── [autres dossiers]
   ```

2. **Comptez les fichiers** :
   - Dossiers : ~50+
   - Fichiers HTML : ~92
   - Images : ~369

### Étape 7 : Tester le Site

1. **Videz le cache de votre navigateur** :
   - Chrome/Firefox : Ctrl+Shift+Delete (Cmd+Shift+Delete sur Mac)
   - Cochez "Images et fichiers en cache"
   - Validez

2. **Ouvrez le site** :
   - https://blanchedalmond-bat-934784.hostingersite.com/

3. **Vérifiez les images** :
   - Image hero (grande image vignoble) ✅
   - Logo Château Lastours (header) ✅
   - Section "Nos Vins" avec image gamme Pétrichor ✅
   - Section "Visiter le Château" avec jardin ✅
   - Section "Histoire" avec chapelle ✅
   - Section "Art de Vivre" avec mariage ✅
   - Logo footer ✅

4. **Console Développeur** :
   - Appuyez sur F12
   - Onglet "Console" : Ne devrait pas avoir d'erreurs 404
   - Onglet "Network" → Rechargez (Ctrl+Shift+R)
   - Filtrez par "Img" : toutes les images devraient être en status 200

---

## 🔍 Diagnostic si Ça ne Fonctionne Toujours Pas

### Problème 1 : Erreurs 404 pour les Images

**Symptômes** :
- Console montre : `404 /chateau-lastours-hero.jpg`

**Cause** : Fichier manquant ou mauvais chemin

**Solution** :
1. Via FileZilla, vérifiez que le fichier existe dans `public_html/`
2. Vérifiez le nom exact (sensible à la casse !)
3. Re-uploadez le fichier spécifique

### Problème 2 : Erreurs 403 Forbidden

**Symptômes** :
- Console montre : `403 Forbidden`

**Cause** : Problème de permissions

**Solution** :
1. Dans FileZilla, clic droit sur les fichiers images
2. **Permissions de fichier** → **Valeur numérique : 644**
3. Appliquez à tous les fichiers (récursif)

### Problème 3 : Structure Incorrecte

**Symptômes** :
- Page blanche ou 404

**Cause** : `index.html` n'est pas à la racine de `public_html/`

**Solution** :
```
❌ MAUVAIS :
public_html/out/index.html

✅ BON :
public_html/index.html
```

---

## 📋 Checklist Post-Déploiement

### Vérifications Visuelles
- [ ] Image hero s'affiche sur la page d'accueil
- [ ] Logo Château Lastours visible en haut
- [ ] Section "Nos Vins" avec image gamme
- [ ] Section "Visiter le Château" avec image jardin
- [ ] Section "Histoire" avec chapelle et vignes
- [ ] Section "Art de Vivre" avec mariage
- [ ] Logo footer s'affiche

### Vérifications Techniques
- [ ] Aucune erreur 404 dans la console (F12)
- [ ] Toutes les images ont un status HTTP 200
- [ ] `.htaccess` présent à la racine
- [ ] SSL/HTTPS activé
- [ ] Redirections fonctionnent

### Tests de Navigation
- [ ] Page d'accueil charge en < 5 secondes
- [ ] Navigation vers /les-vins/ fonctionne
- [ ] Navigation vers /domaine/histoire/ fonctionne
- [ ] Clic sur les boutons fonctionne
- [ ] Menu déroulant fonctionne

---

## 🎯 Résultats Attendus

Après avoir suivi ce guide :

✅ **Site complètement fonctionnel**
✅ **Toutes les 369 images accessibles**
✅ **Page d'accueil visuellement parfaite**
✅ **Aucune erreur dans la console**
✅ **Navigation fluide sur toutes les pages**

---

## 📞 Support

### Si Vous Rencontrez des Problèmes

1. **Vérifiez le rapport d'audit** : `HOSTINGER_IMAGE_ISSUE_REPORT.md`
2. **Consultez le guide de déploiement** : `HOSTINGER_DEPLOYMENT_GUIDE.md`
3. **Contactez le support Hostinger** :
   - Chat en direct 24/7 dans hPanel
   - Décrivez le problème : "Images ne s'affichent pas après upload FTP"
   - Fournissez l'URL et les captures d'écran

### Logs à Vérifier

Si problème persistant :
1. hPanel → File Manager
2. Naviguez vers `/logs/`
3. Téléchargez `error_log`
4. Recherchez les erreurs liées aux images

---

## 💡 Conseils Bonus

### Optimisation Future

Une fois le site fonctionnel, pensez à :
1. **Optimiser les images** (voir `HOSTINGER_IMAGE_OPTIMIZATION.md`)
2. **Activer le CDN** Cloudflare via hPanel
3. **Configurer le cache** serveur
4. **Tester la performance** avec PageSpeed Insights

### Maintenance

Pour les mises à jour futures :
1. Modifiez votre code en local
2. Rebuild : `pnpm run clean && pnpm run build`
3. Uploadez UNIQUEMENT les fichiers modifiés via FTP
4. Videz le cache navigateur pour tester

---

**Durée totale estimée** : 30-60 minutes
**Difficulté** : Facile
**Fiabilité** : 99%

Bon courage ! 🚀🍷


