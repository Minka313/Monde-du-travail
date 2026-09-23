# Directive : Intégration des Grandes Familles « Santé, Soins & Paramédical » et « Biologie & Chimie »

## 1. Objectif & Cadre d'Engagement
Intégrer et interconnecter deux grandes familles professionnelles complémentaires au sein de la plateforme [Le Monde du Travail](https://monde-du-travail.vercel.app/frontend/job.html) :
1. **🏥 SANTÉ, SOINS & PARAMÉDICAL**
2. **🧬 BIOLOGIE & CHIMIE**

### Sources documentaires de référence :
- **Studyrama - Fiches Métiers Santé** : [https://www.studyrama.com/formations/fiches-metiers/sante](https://www.studyrama.com/formations/fiches-metiers/sante)
- **CIDJ - Panorama Biologie & Chimie** : [https://www.cidj.com/s-orienter/metiers/biologie+-+chimie](https://www.cidj.com/s-orienter/metiers/biologie+-+chimie) (24 fiches métiers officielles vérifiées)
- **Ministère de la Santé / Ordre des Médecins / Ordre des Pharmaciens / Onisep** (compléments réglementaires et parcours de formation)

---

## 2. Règle Fondamentale : Zéro Régression & Anti-Duplication Stricte

1. **Préservation absolue de l'existant** :
   - Conserver les 356 métiers déjà en production (Numérique, Finance, Agriculture/Pêche, Énergie, BTP, LLSH, Industrie, Géosciences).
   - Ne rien supprimer, ne pas modifier le design, les cartes, la navigation, les filtres ou les animations.
2. **Anti-duplication stricte** :
   - `ingenieur-biomedical` : Déjà présent dans `orientation-data.js`. Enrichi avec les relations Santé et Industrie sans collision.
   - `psychologue-clinicien` : Déjà présent dans LLSH (`orientation-llsh-data.js`). Rattaché via `connectedFamilies: ['sante-soins-paramedical', 'lettres-langues-sciences-humaines']` et référencé en santé mentale sans doubler la fiche. Le médecin en santé mentale est `psychiatre`.
   - `biologiste-marin` : Déjà présent dans Pêche/Maritime (`orientation-agri-data.js`). Rattaché via `connectedFamilies`.
   - `technicien-laboratoire-geologique` : Déjà présent dans Géosciences (`orientation-geosciences-data.js`). Distinct de `technicien-laboratoire` (CIDJ) et `technicien-analyses-biomedicales` (Santé).
3. **Séparation conceptuelle stricte** :
   - **Famille** : Santé, Soins & Paramédical / Biologie & Chimie
   - **Domaine** : Microbiologie, Médecine, Formulation, etc.
   - **Métier** : Microbiologiste, Médecin généraliste, etc.
   - **Formation** : BUT Génie biologique, Licence pro, Master, Diplôme d'État
   - **Secteur** : Hôpital, Industrie pharmaceutique, Cosmétique, Agroalimentaire, Environnement

---

## 3. Architecture des Domaines & Pôles d'Excellence

### A. 🏥 Santé, Soins & Paramédical (11 Domaines)
1. 🩺 `medecine` : Médecine & Chirurgie
2. 👩⚕️ `soins-infirmiers` : Soins Infirmiers & Pratiques Avancées
3. 🦷 `sante-dentaire` : Santé Dentaire & Odontologie
4. 👶 `femme-enfant` : Santé de la Femme, Maternité & Petite Enfance
5. 🧠 `sante-mentale` : Santé Mentale & Psychiatrie
6. 🦴 `reeducation-readaptation` : Rééducation, Réadaptation & Autonomie
7. 🚑 `urgences-secours` : Urgences, Secours Médical & Régulation
8. 🔬 `laboratoires-medicaux` : Biologie Médicale & Diagnostics de Laboratoire
9. 💊 `pharmacie` : Pharmacie Clinique, Officine & Distribution
10. 🏥 `management-administration-sante` : Direction, Encadrement & Administration Hospitalière
11. ⚙️ `technologies-biomedicales` : Dispositifs Médicaux & Ingénierie Biomédicale

### B. 🧬 Biologie & Chimie (15 Domaines)
1. 🧬 `biologie-sciences-vivant` : Biologie Fondamentale & Sciences du Vivant
2. 🔬 `microbiologie` : Microbiologie, Virologie & Bactériologie
3. 🧪 `chimie-synthese` : Chimie Fondamentale, Synthèse & Analyse
4. 🧴 `formulation` : Formulation Chimique, Émulsions & Matériaux
5. 💊 `galenique-bioproduction` : Galénique, Bioproduction & Procédés Pharmaceutiques
6. 🧬 `biotechnologies` : Biotechnologies & Génie Génétique
7. 💻 `bio-informatique` : Bio-informatique & Biologie Computationnelle
8. 🌿 `botanique-biologie-vegetale` : Biologie Végétale & Botanique
9. 🧫 `laboratoires-analyses` : Laboratoires, Analyses & Essais Scientifiques
10. 🧴 `cosmetique-parfumerie-aromes` : Parfumerie, Cosmétique & Aromatologie
11. 🧵 `chimie-industrie` : Chimie Industrielle & Matériaux Spécialisés
12. 🌍 `environnement-qualite-air-depollution` : Environnement, Qualité de l'Air & Dépollution NRBC
13. 🧑🔬 `recherche-rd-produit` : Recherche, R&D & Développement Produit
14. 👮 `police-scientifique` : Police Technique & Scientifique (Criminalistique)
15. ⚰️ `sciences-thanatologiques` : Sciences Thanatologiques & Soins Funéraires

---

## 4. Passerelles Transversales & Inter-Familles
- **Biologie & Chimie ↔ Santé** : Analyses biomédicales, pharmacie galénique, bioproduction de vaccins, stérilisation, recherche médicale.
- **Biologie & Chimie ↔ Numérique & Informatique** : Bio-informaticien, données omiques, modélisation moléculaire.
- **Biologie & Chimie ↔ Agriculture & Agroalimentaire** : Botaniste, aromaticien, technicien microbiologie agro, ingénieur recherche produit.
- **Biologie & Chimie ↔ Environnement & Qualité de l'air** : Technicien qualité de l'air, dépolluant NRBC, chimiste de l'eau.
- **Biologie & Chimie ↔ Industrie & Matériaux** : Coloriste textile, ingénieur formulation, contrôle qualité.
- **Biologie & Chimie ↔ Sécurité & Défense** : Experts de la police technique et scientifique (ingénieur, technicien, technicien principal).

---

## 5. Double Ancrage Géographique Systématique
- 🇫🇷 **France** : Salaires bruts en euros (€), parcours universitaires et diplômes d'État (PACES/PASS/LAS, IFSI, DE, BUT, Masters, Écoles d'ingénieurs en chimie/biologie).
- 🇸🇳 **Sénégal & Afrique de l'Ouest** : Salaires nets en FCFA, grandes facultés et écoles (Faculté de Médecine UCAD Dakar, ESP Dakar, Institut Pasteur de Dakar, IPD, UFR Santé Thiès, Saint-Louis, Écoles Nationales de Santé).

---

## 6. Processus de Compilation & Déploiement
- Exécuter le script déterministe `python3 execution/compile_sante_biochimie_data.py`.
- Lancer le banc de validation `node execution/verify_sante_biochimie_architecture.js`.
- Vérifier la non-régression des autres suites de test.
- Réaliser le cycle Git conventionnel : `git add`, `git commit`, `git push origin main`.
