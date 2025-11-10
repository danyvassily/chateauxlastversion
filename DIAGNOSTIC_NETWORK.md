# Guide de Diagnostic - Images Non Affichées (Console Vide)

## 🔍 Diagnostic : Console Vide

Si la console ne montre rien, cela signifie que :
- ✅ Pas d'erreurs JavaScript
- ✅ Pas d'erreurs de chargement côté client
- ⚠️ Le problème est probablement au niveau des requêtes HTTP

## 📊 Vérification de l'Onglet Network

### Étapes à Suivre :

1. **Ouvrir l'onglet Network**
   - Dans les DevTools (F12), cliquez sur l'onglet **"Network"** (Réseau)
   - Rafraîchissez la page (F5 ou Cmd+R)

2. **Filtrer les Requêtes d'Images**
   - Dans le filtre, sélectionnez **"Img"** ou tapez `jpg|jpeg|png|webp|avif` dans la barre de recherche
   - Vous devriez voir toutes les requêtes d'images

3. **Vérifier les Statuts HTTP**
   - Regardez la colonne **"Status"** pour chaque requête d'image
   - Les codes importants :
     - **200** = Image chargée avec succès ✅
     - **404** = Image non trouvée ❌
     - **401** = Non autorisé (preview protégé) ⚠️
     - **403** = Accès interdit ❌
     - **500** = Erreur serveur ❌

4. **Vérifier les URLs des Images**
   - Cliquez sur une requête d'image pour voir les détails
   - Regardez l'**URL complète** dans l'onglet "Headers"
   - Les images Next.js devraient être servies via `/_next/image?url=...`

## 🔧 Solutions selon le Code de Statut

### Si vous voyez des **404** :
- Les chemins d'images sont incorrects
- Les fichiers n'existent pas dans `public/`
- **Solution** : Vérifier que les chemins dans le code correspondent aux fichiers

### Si vous voyez des **401** :
- Le preview deployment est protégé
- **Solution** : Tester sur le domaine de production (pas preview)

### Si vous voyez des **403** :
- Problème de permissions
- **Solution** : Vérifier la configuration Vercel

### Si les images ne s'affichent pas dans Network :
- Les images ne sont peut-être pas chargées du tout
- **Solution** : Vérifier que le composant `<Image>` est bien utilisé

## 📝 Informations à Me Fournir

Pour mieux diagnostiquer, pouvez-vous me donner :

1. **Dans l'onglet Network** :
   - Combien de requêtes d'images voyez-vous ?
   - Quel est le code de statut de chaque requête ?
   - Quelle est l'URL complète d'une requête qui échoue ?

2. **Dans l'onglet Headers** (pour une requête d'image) :
   - Request URL : `...`
   - Status Code : `...`
   - Response Headers : `...`

3. **Test Local** :
   - Est-ce que `pnpm build && pnpm start` fonctionne en local ?
   - Les images s'affichent-elles en local ?

## 🚀 Test Rapide

Pour tester rapidement si les images sont accessibles :

1. **Ouvrir l'onglet Network**
2. **Rafraîchir la page**
3. **Chercher une requête vers `/_next/image`**
4. **Cliquer dessus et regarder l'onglet "Preview"**
   - Si vous voyez l'image = elle est chargée ✅
   - Si vous voyez une erreur = problème de chargement ❌

## 💡 Astuce

Si vous ne voyez aucune requête d'image dans Network :
- Les images ne sont peut-être pas chargées du tout
- Vérifiez que le composant `<Image>` est bien rendu
- Vérifiez que les chemins `src` sont corrects dans le code

