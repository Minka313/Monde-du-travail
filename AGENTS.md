# Instructions & Règles du Projet

## Stack Technologique par Défaut (Règle Permanente)
Sauf indication ou précision contraire explicite de l'utilisateur :
1. **Base de données** : **Supabase** (PostgreSQL managé) avec Prisma ORM.
2. **Déploiement** : **Vercel** avec architecture Serverless (`api/index.js` et `vercel.json`).

---

## Règle de Déploiement Continu (Règle Permanente)
**Après CHAQUE ensemble de modifications apportées au code**, tu dois OBLIGATOIREMENT :
1. Faire un `git add` des fichiers modifiés.
2. Faire un `git commit` avec un message conventionnel (`feat:`, `fix:`, `chore:`, etc.) décrivant clairement les changements.
3. Faire un `git push origin main` pour déclencher le redéploiement automatique sur Vercel.

```bash
git add <fichiers modifiés>
git commit -m "type: description courte des changements"
git push origin main
```

Ne jamais laisser des modifications en attente sans les pousser. Vercel se charge du déploiement automatiquement après chaque push sur `main`.

