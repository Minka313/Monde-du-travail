# Directive : Intégration de la Grande Famille « Sciences de la Terre, Géosciences & Ressources Naturelles »

## 1. Objectif & Cadre d'Engagement
Intégrer la grande famille professionnelle :
**🌍 SCIENCES DE LA TERRE, GÉOSCIENCES & RESSOURCES NATURELLES**
au sein de la plateforme [Le Monde du Travail](https://monde-du-travail.vercel.app/frontend/job.html).

### Source documentaire de référence :
- [Université de Poitiers - Département Géosciences : Débouchés professionnels](https://sfa.univ-poitiers.fr/geosciences/debouches-professionnels/)
- Pages spécialisées métiers : Hydrogéologue, Paléontologue, Pédologue, Géologue, Géologue minier, Ingénieur matériaux, Enseignant-chercheur, Chercheur, Master EUR Matériaux-Minéraux.

---

## 2. Règle Fondamentale : Zéro Régression & Anti-Duplication
1. **Préservation absolue de l'existant** : Ne rien supprimer, ne rien casser. Conserver intacts les 335 métiers déjà en production (Numérique, Finance, Agriculture/Élevage/Pêche, Énergie, BTP, LLSH, Industrie).
2. **Anti-duplication stricte** :
   - Si un métier existe déjà dans une autre famille (ex: `paleontologue` dans LLSH, `ingenieur-r-et-d` dans Industrie), NE PAS créer de doublon d'identifiant (`id`) ou de `slug`.
   - Utiliser `connectedFamilies: ['sciences-terre-geosciences', ...]` et `relatedJobs` pour enrichir les passerelles sans collision.
3. **Séparation conceptuelle stricte** :
   - Grande famille / domaine scientifique = Géosciences
   - Discipline = Géologie, Hydrogéologie, Pédologie, Paléontologie
   - Métier = Géologue, Hydrogéologue, Pédologue, Géologue minier
   - Diplôme / Formation = Licence Sciences de la Terre, CMI Géosciences, Master STPE

---

## 3. Architecture des 17 Domaines d'Excellence
1. 🪨 `geologie-fondamentale-appliquee` : Géologie
2. 💧 `hydrogeologie-ressources-eau` : Hydrogéologie & Ressources en Eau
3. 🌱 `sciences-sol-pedologie` : Sciences du Sol & Pédologie
4. 🦴 `paleontologie-archives-vivant` : Paléontologie
5. 🌋 `geophysique-sous-sol` : Géophysique
6. 🗺️ `geomatique-cartographie-teledetection` : Géomatique, Cartographie & Télédétection
7. ⛏️ `geologie-miniere-ressources` : Géologie Minière & Ressources Minérales
8. 🪨 `mineralogie-cristallographie` : Minéralogie
9. 🧱 `geomateriaux-materiaux-innovants` : Géomatériaux & Matériaux
10. 🏗️ `geotechnique-ouvrages` : Géotechnique
11. 🌊 `geosciences-marines-littorales` : Géosciences Marines
12. 🌍 `environnement-sites-pollues` : Environnement & Géosciences
13. ⚠️ `risques-naturels-georisques` : Risques Naturels
14. 🛢️ `ressources-energetiques-sous-sol` : Ressources Énergétiques du Sous-sol
15. 🔬 `recherche-scientifique-terre` : Recherche Scientifique
16. 🎓 `enseignement-mediation-terre` : Enseignement & Médiation Scientifique
17. 🧪 `analyse-laboratoire-instrumentation` : Analyse, Laboratoire & Instrumentation

---

## 4. Parcours Pédagogiques Transversaux
1. **Du terrain au laboratoire** : 🏞️ Terrain ➔ 📷 Observation ➔ 🗺️ Cartographie ➔ 🧪 Échantillonnage ➔ 🔬 Analyse ➔ 💻 Modélisation ➔ 📊 Interprétation ➔ 📋 Diagnostic ➔ 🏗️ Projet / décision.
2. **De l'eau souterraine à l'utilisateur** : 🌧️ Eau ➔ 🌍 Infiltration ➔ 💧 Nappe ➔ 🔎 Prospection ➔ 📊 Évaluation ➔ 🧪 Analyse ➔ ⚠️ Protection ➔ 🚰 Exploitation ➔ 👥 Utilisation.
3. **De la roche à la ressource** : 🪨 Sous-sol ➔ 🔎 Prospection ➔ 🗺️ Cartographie ➔ ⛏️ Exploration ➔ 🧪 Analyse ➔ 📊 Estimation ➔ 🏭 Exploitation ➔ 🧱 Transformation ➔ ♻️ Valorisation.
4. **Du fossile à l'histoire de la vie** : 🪨 Terrain ➔ 🔎 Recherche de fossiles ➔ 🦴 Échantillon ➔ 🧪 Préparation ➔ 🔬 Analyse ➔ 📚 Comparaison ➔ 🧬 Évolution ➔ 🌍 Paléoenvironnement.

---

## 5. Double Ancrage Géographique Systématique
- 🇫🇷 **France** : Salaires bruts en euros (€), formations universitaires (Université de Poitiers, Master STPE, CMI, BRGM, CNRS, INRAE).
- 🇸🇳 **Sénégal & Afrique de l'Ouest** : Salaires nets en FCFA, grandes écoles et instituts (Institut des Sciences de la Terre - IST / UCAD Dakar, Département de Géologie FST, EPT Thiès, Centre de Suivi Écologique - CSE, DGPRE, Direction des Mines et de la Géologie - DMG, SODEMI, etc.).

---

## 6. Vérification & Déploiement Continu
- Créer un banc de test automatisé `execution/verify_geosciences_architecture.js`.
- Tester :
  - Intégrité du module `OrientationGeosciencesData`.
  - 17 domaines enregistrés.
  - Zéro doublon d'ID et zéro doublon de slug sur l'ensemble de la plateforme.
  - Total des métiers de la plateforme >= 355 fiches.
  - Moteur de recherche et nouvelles affinités Boussole.
- Appliquer la règle permanente : `git add`, `git commit -m "feat(orientation): ..."`, `git push origin main`.
