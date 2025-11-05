# ✅ Checklist de Déploiement ePanel - Château Lastours

## 📋 Avant de Commencer

- [ ] J'ai mes identifiants ePanel
- [ ] J'ai installé FileZilla ou un autre client FTP
- [ ] J'ai Node.js et pnpm installés
- [ ] Mon site fonctionne correctement en local (`pnpm dev`)

---

## 🏗️ Préparation du Build

### Méthode Automatique (Recommandée)

```bash
cd "/Users/danyvassily/dev /chateaulastour-mvp/chateaulastour"
./prepare-epanel-deploy.sh
```

**Le script va automatiquement :**
- ✅ Nettoyer les anciens builds
- ✅ Créer le build de production
- ✅ Copier le .htaccess
- ✅ Créer une archive ZIP (optionnel)
- ✅ Vérifier que tout est prêt

### Méthode Manuelle

- [ ] 1. Nettoyer : `pnpm run clean`
- [ ] 2. Builder : `pnpm run build`
- [ ] 3. Copier .htaccess : `cp .htaccess out/.htaccess`
- [ ] 4. Vérifier le dossier `out/`

---

## 🌐 Connexion à ePanel

### Informations Nécessaires

```
🔑 URL ePanel : https://___________________:2083
👤 Utilisateur : _______________________________
🔒 Mot de passe : ______________________________
```

### Configuration FTP

```
🌍 Serveur FTP : ftp._________________________
👤 Utilisateur : _____________________________
🔒 Mot de passe : ____________________________
📡 Port : 21 (FTP) ou 22 (SFTP)
```

- [ ] J'ai noté mes identifiants
- [ ] Je peux me connecter à ePanel
- [ ] J'ai configuré FileZilla

---

## 📤 Upload des Fichiers

### Option A : Via FileZilla (Recommandé)

- [ ] 1. Ouvrir FileZilla
- [ ] 2. Me connecter au serveur
- [ ] 3. Naviguer vers `public_html/` (serveur)
- [ ] 4. Naviguer vers `out/` (local)
- [ ] 5. Sélectionner TOUT le contenu de `out/`
- [ ] 6. Glisser-déposer vers `public_html/`
- [ ] 7. Attendre la fin de l'upload (5-30 min)
- [ ] 8. Vérifier que `.htaccess` est bien uploadé

### Option B : Via Archive ZIP

- [ ] 1. Uploader `chateau-lastours-XXXXXX.zip` via ePanel
- [ ] 2. Dans Gestionnaire de fichiers → Extraire l'archive
- [ ] 3. Supprimer le fichier ZIP après extraction
- [ ] 4. Vérifier les fichiers extraits

---

## ⚙️ Configuration Finale

### Fichiers et Permissions

- [ ] Le fichier `.htaccess` est présent dans `public_html/`
- [ ] Permissions `.htaccess` : 644 (rw-r--r--)
- [ ] Permissions dossiers : 755 (rwxr-xr-x)
- [ ] Permissions fichiers : 644 (rw-r--r--)

### SSL/HTTPS

- [ ] J'ai activé le certificat SSL dans ePanel
- [ ] Le site est accessible en HTTPS
- [ ] La redirection HTTP → HTTPS fonctionne

### Domaine

- [ ] Mon domaine pointe vers `public_html/`
- [ ] Les DNS sont correctement configurés
- [ ] Le domaine est propagé (peut prendre 24-48h)

---

## ✅ Tests et Vérification

### Tests Fonctionnels

- [ ] La page d'accueil s'affiche : `https://tondomaine.com`
- [ ] Les pages internes fonctionnent : `/les-vins/`, `/domaine/histoire/`
- [ ] Les images s'affichent correctement
- [ ] La navigation fonctionne
- [ ] Les liens internes fonctionnent
- [ ] La page 404 personnalisée s'affiche pour les URLs inexistantes

### Tests Performance

- [ ] Test PageSpeed Insights : https://pagespeed.web.dev/
- [ ] Score >= 80 sur mobile
- [ ] Score >= 90 sur desktop
- [ ] Les images sont optimisées
- [ ] La compression Gzip est active

### Tests Responsive

- [ ] Le site s'affiche bien sur mobile
- [ ] Le site s'affiche bien sur tablette
- [ ] Le site s'affiche bien sur desktop
- [ ] Tous les boutons sont cliquables

### Tests de Sécurité

- [ ] HTTPS fonctionne correctement
- [ ] Certificat SSL valide
- [ ] En-têtes de sécurité configurés
- [ ] Fichiers sensibles protégés (.env, package.json, etc.)

---

## 🔧 Dépannage

### Si quelque chose ne fonctionne pas :

#### Problème : Page blanche ou 404

- [ ] Vérifier que `index.html` est à la racine de `public_html/`
- [ ] Vérifier que `.htaccess` est présent
- [ ] Vérifier les permissions des fichiers

#### Problème : Images manquantes

- [ ] Vérifier que le dossier `_next/` est uploadé
- [ ] Vérifier que le dossier `public/` est uploadé
- [ ] Vérifier les permissions (755 pour dossiers, 644 pour fichiers)

#### Problème : Routes ne fonctionnent pas

- [ ] Vérifier que `.htaccess` contient les règles de réécriture
- [ ] Contacter le support pour activer `mod_rewrite`
- [ ] Vérifier les logs d'erreur dans ePanel

#### Problème : Erreur 500

- [ ] Renommer `.htaccess` en `.htaccess.bak`
- [ ] Tester si le site fonctionne
- [ ] Contacter le support de l'hébergeur

---

## 📊 Post-Déploiement

### Optimisations

- [ ] Configurer un CDN (Cloudflare, etc.)
- [ ] Activer la compression Brotli (si disponible)
- [ ] Mettre en place un système de monitoring
- [ ] Configurer les sauvegardes automatiques

### SEO

- [ ] Soumettre le sitemap à Google : `/sitemap.xml`
- [ ] Vérifier Google Search Console
- [ ] Configurer Google Analytics (si souhaité)
- [ ] Vérifier les meta tags

### Maintenance

- [ ] Noter la date de déploiement : _______________
- [ ] Créer une sauvegarde locale du site
- [ ] Documenter les modifications futures
- [ ] Planifier les mises à jour

---

## 📞 Contacts Utiles

### Support Hébergeur

```
📧 Email : _____________________________________
📱 Téléphone : _________________________________
💬 Chat : ______________________________________
```

### Ressources

- 📖 Guide complet : `EPANEL_DEPLOYMENT_GUIDE.md`
- 🔧 Script de préparation : `prepare-epanel-deploy.sh`
- 🌐 Site web : https://___________________________

---

## 🎉 Félicitations !

Si toutes les cases sont cochées, ton site est en ligne et fonctionnel !

**Prochaine mise à jour** :
1. Faire les modifications en local
2. Relancer `./prepare-epanel-deploy.sh`
3. Re-uploader uniquement les fichiers modifiés

---

**Date de déploiement** : ___________________
**Version** : 1.0.0
**Statut** : ☐ En préparation | ☐ En cours | ☐ Terminé
