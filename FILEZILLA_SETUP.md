# 🔌 Configuration FileZilla - Guide Visuel

## 📥 Téléchargement et Installation

### 1. Télécharge FileZilla

👉 **Lien officiel** : https://filezilla-project.org/download.php?type=client

- **macOS** : Télécharge le fichier `.dmg`
- **Windows** : Télécharge le fichier `.exe`
- **Linux** : Utilise ton gestionnaire de paquets

### 2. Installe FileZilla

- Double-clique sur le fichier téléchargé
- Suis les instructions d'installation
- Lance FileZilla

---

## ⚙️ Configuration de la Connexion

### Récupérer Tes Identifiants FTP

**Où les trouver ?**

1. Connecte-toi à ton **ePanel** (généralement : `https://tondomaine.com:2083`)
2. Cherche la section **"FTP Accounts"** ou **"Comptes FTP"**
3. Note ces informations :

```
┌─────────────────────────────────────────────────┐
│ 📋 INFORMATIONS FTP À NOTER                     │
├─────────────────────────────────────────────────┤
│                                                 │
│ 🌍 Serveur FTP : ftp.________________.com      │
│                                                 │
│ 👤 Utilisateur : _________________________     │
│                                                 │
│ 🔒 Mot de passe : _________________________    │
│                                                 │
│ 📡 Port : 21 (FTP) ou 22 (SFTP)                │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## 🔧 Configurer FileZilla

### Méthode 1 : Connexion Rapide (Simple)

**Dans FileZilla, en haut de la fenêtre :**

```
┌─────────────────────────────────────────────────────────────────────┐
│ FileZilla                                                           │
├─────────────────────────────────────────────────────────────────────┤
│ Hôte: [ftp.tondomaine.com] Utilisateur: [ton_user] Mot de passe:  │
│ [••••••••] Port: [21]                            [Connexion rapide] │
└─────────────────────────────────────────────────────────────────────┘
```

1. **Hôte** : Tape `ftp.tondomaine.com` (ou l'adresse fournie par ton hébergeur)
2. **Utilisateur** : Ton nom d'utilisateur FTP
3. **Mot de passe** : Ton mot de passe FTP
4. **Port** : `21` pour FTP, `22` pour SFTP
5. Clique sur **"Connexion rapide"**

---

### Méthode 2 : Gestionnaire de Sites (Recommandée)

**Avantages :**
- ✅ Sauvegarde tes identifiants
- ✅ Reconnexion en un clic
- ✅ Gestion de plusieurs sites

**Étapes :**

1. **Ouvre le Gestionnaire de Sites**
   - Menu : `Fichier` → `Gestionnaire de sites...`
   - Ou raccourci : `Ctrl+S` (Windows/Linux) / `Cmd+S` (macOS)

2. **Crée un Nouveau Site**
   - Clique sur **"Nouveau site"**
   - Nomme-le : `Château Lastours - Production`

3. **Configure les Paramètres**

```
┌─────────────────────────────────────────────────┐
│ PARAMÈTRES DU SITE                              │
├─────────────────────────────────────────────────┤
│                                                 │
│ Protocole: [FTP - File Transfer Protocol    ▼] │
│            (ou SFTP si disponible)              │
│                                                 │
│ Hôte: [ftp.tondomaine.com                    ] │
│                                                 │
│ Port: [21]  (ou 22 pour SFTP)                   │
│                                                 │
│ Chiffrement: [Utiliser le FTP explicite     ▼] │
│              (ou "Connexion FTP classique")     │
│                                                 │
│ Type d'authentification: [Normal             ▼] │
│                                                 │
│ Utilisateur: [ton_utilisateur@tondomaine.com ] │
│                                                 │
│ Mot de passe: [••••••••••••••••••••••••••••• ] │
│                                                 │
│ ☑ Enregistrer les mots de passe               │
│                                                 │
└─────────────────────────────────────────────────┘
```

4. **Paramètres Avancés (Optionnel)**

Onglet **"Paramètres de transfert"** :
- Mode de transfert : **Auto**
- Limiter le nombre de connexions : `2-5`

Onglet **"Avancé"** :
- Répertoire distant par défaut : `/public_html`
- Répertoire local par défaut : `/Users/danyvassily/dev /chateaulastour-mvp/chateaulastour/out`

5. **Connexion**
   - Clique sur **"Connexion"**
   - Si certificat SSL : accepte-le

---

## 📂 Interface FileZilla

```
┌─────────────────────────────────────────────────────────────────────┐
│ FileZilla Client                                         [_] [□] [×] │
├─────────────────────────────────────────────────────────────────────┤
│ Hôte: [...] Utilisateur: [...] Mot de passe: [...] [Connexion]     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│ 📝 Logs de connexion (messages du serveur)                         │
│                                                                     │
├──────────────────────────────────┬──────────────────────────────────┤
│ 💻 TON ORDINATEUR (LOCAL)        │ 🌐 SERVEUR (DISTANT)            │
│                                  │                                  │
│ 📁 /Users/danyvassily/dev/...   │ 📁 /public_html/                 │
│   └── 📁 out/                    │   └── (vide ou ancien contenu)  │
│       ├── 📄 index.html          │                                  │
│       ├── 📄 .htaccess           │                                  │
│       ├── 📁 _next/              │                                  │
│       ├── 📁 actualites/         │                                  │
│       └── ...                    │                                  │
│                                  │                                  │
│ [Sélectionner]  [Glisser-Déposer] → [Upload]                       │
│                                  │                                  │
├──────────────────────────────────┴──────────────────────────────────┤
│ ⏳ File d'attente des transferts                                    │
│ ▶ index.html [████████████████████████░░] 87%  1.2 Mo/s           │
│ ⏸ _next/static/... En attente...                                   │
└─────────────────────────────────────────────────────────────────────┘
```

### Zones de l'Interface

1. **Haut** : Barre de connexion rapide
2. **Centre Haut** : Logs de connexion
3. **Centre Gauche** : Ton ordinateur (fichiers locaux)
4. **Centre Droit** : Le serveur (fichiers distants)
5. **Bas** : File d'attente des transferts

---

## 📤 Processus d'Upload

### Étape par Étape

#### 1. Connecte-toi au Serveur

```
✅ Statut: Connecté à ftp.tondomaine.com
✅ Répertoire "/public_html" listé avec succès
```

#### 2. Navigue vers les Bons Dossiers

**À GAUCHE (Local) :**
- Navigue vers : `/Users/danyvassily/dev /chateaulastour-mvp/chateaulastour/out`

**À DROITE (Serveur) :**
- Navigue vers : `/public_html`

💡 **Important** : Si `public_html/` contient déjà des fichiers, **sauvegarde-les** avant de les supprimer !

#### 3. Sélectionne les Fichiers à Uploader

**Dans la partie GAUCHE (ton ordinateur) :**

```
📁 out/
  ├── 📄 .htaccess          ← IMPORTANT !
  ├── 📄 index.html
  ├── 📄 404.html
  ├── 📁 _next/
  ├── 📁 actualites/
  ├── 📁 les-vins/
  ├── 📁 domaine/
  └── ...
```

- Entre dans le dossier `out/`
- Sélectionne **TOUT** le contenu (Cmd+A / Ctrl+A)
- ⚠️ Ne sélectionne PAS le dossier `out/` lui-même, seulement son contenu !

#### 4. Upload !

**Méthode A : Glisser-Déposer**
- Glisse les fichiers sélectionnés de la gauche vers la droite

**Méthode B : Clic Droit**
- Clic droit sur la sélection → "Envoyer"

**Méthode C : Bouton**
- Clique sur le bouton "Upload" dans la barre d'outils

#### 5. Attends la Fin du Transfert

```
⏳ Transfert en cours...
▶ Fichiers: 1247 / 2580
▶ Progression: 48%
▶ Vitesse: 2.5 Mo/s
▶ Temps restant: 12 min 34 s
```

**Temps estimé selon ta connexion :**
- Fibre (100 Mbps) : 5-10 minutes
- ADSL (10 Mbps) : 20-30 minutes
- 4G/5G : variable

#### 6. Vérifie le Transfert

Une fois terminé, vérifie que **tous les fichiers** sont présents à droite :

```
✅ Total: 2580 fichiers uploadés
✅ Erreurs: 0
✅ Transfert réussi: 100%
```

---

## 🔍 Vérifications Post-Upload

### Dans FileZilla

**À DROITE (Serveur - public_html/) :**

- [ ] ✅ Le fichier `.htaccess` est présent
- [ ] ✅ Le fichier `index.html` est présent
- [ ] ✅ Le fichier `404.html` est présent
- [ ] ✅ Le dossier `_next/` est présent
- [ ] ✅ Les dossiers de routes sont présents (actualites/, les-vins/, etc.)

### Dans ton Navigateur

- [ ] ✅ Teste : `https://tondomaine.com`
- [ ] ✅ Teste : `https://tondomaine.com/les-vins/`
- [ ] ✅ Teste : `https://tondomaine.com/domaine/histoire/`
- [ ] ✅ Les images s'affichent correctement
- [ ] ✅ La navigation fonctionne

---

## 🆘 Résolution de Problèmes

### Impossible de se Connecter

**Erreur : "Connection refused" ou "Connexion refusée"**

✅ Solutions :
- Vérifie que tu as les bons identifiants
- Essaye le port **21** (FTP) ou **22** (SFTP)
- Contacte le support de ton hébergeur

**Erreur : "Login incorrect" ou "Authentification échouée"**

✅ Solutions :
- Double-vérifie ton nom d'utilisateur
- Réinitialise ton mot de passe FTP dans ePanel
- Vérifie les majuscules/minuscules

### Upload Très Lent

✅ Solutions :
- Limite le nombre de connexions simultanées (2-3)
- Vérifie ta connexion Internet
- Essaye à un autre moment (moins de charge serveur)
- Utilise la méthode ZIP (voir guide principal)

### Certains Fichiers Ne S'Uploadent Pas

✅ Solutions :
- Re-upload uniquement les fichiers échoués (clic droit → "Ajouter à la file")
- Vérifie les permissions du dossier de destination
- Vérifie l'espace disque disponible sur le serveur

### Le Fichier .htaccess N'Apparaît Pas

✅ Solutions :
- Dans FileZilla : Menu `Serveur` → `Forcer l'affichage des fichiers cachés`
- Vérifie qu'il a bien été uploadé (regarde dans les logs)
- Upload-le manuellement si nécessaire

---

## 📊 Paramètres Optimaux

### Pour un Upload Rapide et Stable

```
┌─────────────────────────────────────────────────┐
│ Édition → Paramètres → Transferts               │
├─────────────────────────────────────────────────┤
│                                                 │
│ ☑ Nombre max de transferts simultanés: [3]     │
│                                                 │
│ ☑ Nombre max de connexions simultanées: [2]    │
│                                                 │
│ ☑ Limitation de vitesse:                        │
│   Upload: [illimité]                            │
│   Download: [illimité]                          │
│                                                 │
│ ☑ Délai d'attente: [20] secondes               │
│                                                 │
│ ☑ Nombre de tentatives: [3]                    │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## 🎯 Raccourcis Clavier Utiles

| Action | Windows/Linux | macOS |
|--------|---------------|-------|
| Gestionnaire de sites | `Ctrl+S` | `Cmd+S` |
| Connexion rapide | `Ctrl+Q` | `Cmd+Q` |
| Déconnexion | `Ctrl+D` | `Cmd+D` |
| Rafraîchir | `F5` | `F5` |
| Sélectionner tout | `Ctrl+A` | `Cmd+A` |
| Annuler transfert | `Échap` | `Échap` |

---

## 💡 Conseils Pro

### Avant l'Upload

1. **Sauvegarde** toujours l'ancien contenu du serveur
2. **Teste** ton build en local avant : `pnpm run build && pnpm start`
3. **Vérifie** que le script `prepare-epanel-deploy.sh` s'est bien terminé

### Pendant l'Upload

1. **Ne ferme pas** FileZilla pendant le transfert
2. **Surveille** la progression et les erreurs
3. **Garde** une connexion Internet stable
4. ☕ **Prends un café** : ça peut prendre 20-30 minutes !

### Après l'Upload

1. **Vide le cache** de ton navigateur (Ctrl+Shift+R / Cmd+Shift+R)
2. **Teste** toutes les pages principales
3. **Vérifie** les logs d'erreur dans ePanel si problème
4. **Teste** sur mobile et desktop

---

## ✨ Upload Réussi !

Une fois l'upload terminé et les tests passés, félicitations ! 🎉

Ton site Château Lastours est maintenant en ligne ! 🍷

**Prochaine étape** : Teste les performances avec Google PageSpeed Insights

---

**Besoin d'aide ?** Consulte `EPANEL_DEPLOYMENT_GUIDE.md` (section Dépannage)
