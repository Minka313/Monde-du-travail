# Directive : Architecture & Exploration du Module « Orientation & Métiers »

## 1. Objectif & Philosophie
Le module **« Orientation & Métiers »** de la plateforme *« Le Monde du Travail »* constitue un moteur d'exploration professionnelle progressif à destination des lycéens, étudiants et jeunes diplômés (en particulier au Sénégal et en Afrique subsaharienne).

La règle d'or est :
```
BEAUCOUP DE PROFONDEUR ➔ PEU DE CHARGE VISUELLE ➔ EXPLORATION PROGRESSIVE
```
L'utilisateur ne doit jamais être submergé par une encyclopédie compacte, mais guidé à travers un entonnoir clair :
1. **Grandes Familles professionnelles (21)**
2. **Sous-domaines spécialisés**
3. **Fiches Métiers concrètes**
4. **Parcours de compétences, formations, débouchés et passerelles**
5. **Ressources multimédias et orientation personnalisée**

---

## 2. Les 3 Portes d'Entrée UX
- **Porte A (« Je sais ce que je cherche »)** : Barre de recherche universelle instantanée tolérante aux fautes (métier, compétence, outil, formation, école).
- **Porte B (« Je veux explorer »)** : Navigation hiérarchique : Sélection d'une des 21 grandes familles, filtrage par sous-domaine, puis consultation d'une fiche métier.
- **Porte C (« Je ne sais pas encore quoi choisir »)** : Moteur d'affinités et de centres d'intérêt (« J'aime résoudre des problèmes, soigner, créer, travailler avec la nature... ») suggérant les univers professionnels les plus adaptés sans étiquetage rigide.

---

## 3. Taxonomie Officielle des 21 Grandes Familles
1. **Numérique, Informatique & IA** (`numerique-ia`)
2. **Cybersécurité & Réseaux** (`cybersecurite-reseaux`)
3. **Data, Statistiques & Décision** (`data-decision`)
4. **Finance, Banque, Assurance & FinTech** (`finance-fintech`)
5. **Commerce, Vente, Marketing & E-Commerce** (`commerce-marketing`)
6. **Agriculture, Agronomie & AgriTech** (`agriculture-agritech`)
7. **Pêche, Aquaculture & Économie Maritime** (`peche-maritime`)
8. **Élevage, Vétérinaire & Productions Animales** (`elevage-veterinaire`)
9. **Énergie, Électricité & Énergies Renouvelables** (`energie-renouvelable`)
10. **BTP, Architecture, Urbanisme & Immobilier** (`btp-architecture`)
11. **Industrie, Mécanique & Automatisation** (`industrie-mecanique`)
12. **Mines, Pétrole, Gaz & Géosciences** (`mines-geosciences`)
13. **Transport, Logistique & Supply Chain** (`transport-logistique`)
14. **Santé, Pharmacie & Biomédical** (`sante-biomedical`)
15. **Éducation, Enseignement & Formation** (`education-formation`)
16. **Sciences, Recherche & Biotechnologies** (`sciences-biotech`)
17. **Environnement, Climat & Métiers Verts** (`environnement-climat`)
18. **Tourisme, Hôtellerie, Restauration & Événementiel** (`tourisme-hotellerie`)
19. **Culture, Médias, Communication & Industries Créatives** (`culture-medias`)
20. **Droit, Administration, Management & Services Professionnels** (`droit-management`)
21. **Métiers Émergents & Métiers du Futur** (`metiers-emergents`)

---

## 4. Modèle de Données & Source Unique de Vérité (`orientation-data.js`)
Chaque métier est représenté par une structure de données unique et typée :
- `id` / `slug` : Identifiants pérennes.
- `title`, `icon`, `image` : Identité visuelle.
- `familyId`, `subdomain` : Rattachement taxonomique.
- `shortDescription`, `longDescription`, `missions` : Contenu éditorial accessible.
- `workEnvironment` : Tags d'environnement (ordinateur, équipe, terrain, télétravail, etc.).
- `typicalDay` : Échéancier indicatif d'une journée type.
- `skills` : Strictement partitionnées en `technical`, `human`, `tools`.
- `studies` : Niveaux (Bac+2 à Bac+8), parcours types, certifications et établissements géolocalisés (Sénégal, Afrique, International).
- `career` : Secteurs recruteurs, types d'employeurs, salaires indicatifs, évolutions, atouts et points de vigilance.
- `relatedJobSlugs` : Liens relationnels vers d'autres métiers.
- `resources` : Vidéos, podcasts, MOOCs, articles.
- `sources` : Sources officielles de référence.

---

## 5. Hybridation Backend & Évolutivité
- Le module charge la base de données statique optimisée et s'hybride silencieusement avec les données dynamiques de l'API `/api/jobs` de Supabase si disponible.
- Aucun changement dans le frontend ne nécessite de recompilation : l'ajout d'un métier se fait via une nouvelle entrée JSON ou via l'API d'administration.
- Le cycle de vie d'affichage respecte les principes d'accessibilité WCAG et de performance (lazy loading, zero CLS).
