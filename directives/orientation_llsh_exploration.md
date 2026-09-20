# Directive : Exploration Métiers — Lettres, Langues & Sciences Humaines

## 1. Objectifs & Cadre
Cette directive régit la structuration, l'enrichissement documentaire et l'intégration de la Grande Famille professionnelle :
**📚 LETTRES, LANGUES & SCIENCES HUMAINES** (`lettres-langues-sciences-humaines`).

Référentiels documentaires de base :
- **Imagine ton Futur** : [Domaine Lettres, Langues & Sciences Humaines](https://www.imaginetonfutur.com/les-metiers/domaine/lettres-langues-sciences-humaines.html)
- Référentiels universitaires et professionnels : ESIT, ISIT, ENSAE, École des Chartes, CELSA, Sorbonne Université, UCAD Dakar (FLSH, FASTEF, EBAD, IFAN Ch. Anta Diop), UGB Saint-Louis, SFT (Société Française des Traducteurs).

---

## 2. Architecture des 20 Domaines d'Excellence
1. `lettres-litterature` : ✍️ Lettres & Littérature
2. `langues-etrangeres` : 🌍 Langues Étrangères
3. `traduction-interpretation` : 🗣️ Traduction & Interprétation
4. `traduction-technique` : 🧰 Traduction Technique
5. `linguistique-tal` : 📜 Linguistique & Traitement du Langage
6. `histoire-patrimoine` : 🏛️ Histoire & Conservation du Patrimoine
7. `archeologie` : 🏺 Archéologie & Recherches de Terrain
8. `histoire-art` : 🎨 Histoire de l'Art & Muséologie
9. `philosophie-ethique` : 🧠 Philosophie & Éthique Appliquée
10. `sociologie-etudes` : 👥 Sociologie & Enquêtes Sociales
11. `psychologie` : 🧠 Psychologie & Accompagnement
12. `geographie-amenagement` : 🌍 Géographie & Analyse Spatiale
13. `sciences-politiques-ri` : 🏛️ Sciences Politiques & Relations Internationales
14. `documentation-information` : 📚 Documentation & Veille Informationnelle
15. `culture-mediation` : 🎭 Médiation Culturelle & Action Artistique
16. `enseignement-shs` : 👨‍🏫 Enseignement & Pédagogie
17. `recherche-shs` : 🔬 Recherche Fondamentale & Appliquée en Sciences Humaines
18. `journalisme-medias` : 📰 Journalisme & Médias d'Information
19. `redaction-edition` : ✍️ Rédaction & Édition
20. `economie-transversale` : 💼 Études Économiques & Métiers Transversaux

---

## 3. Règles Métier & Anti-Hallucination
1. **Distinguer strictement Métier, Diplôme et Discipline** :
   - *Philosophie* = Discipline académique.
   - *Master de Philosophie* = Diplôme / Formation.
   - *Enseignant-chercheur en philosophie* / *Consultant en éthique* = Métiers.
2. **Réglementation des professions de santé psychique** :
   - Le *Psychologue clinicien* (titre protégé, Bac+5 universitaire) est distinct du *Psychiatre* (médecin spécialisé) et du *Coach*.
3. **Double Ancrage Géographique** :
   - Contextualisation des études en France (Licence/Master, concours CAPES/Agrégation) et au Sénégal / Afrique de l'Ouest (UCAD, FASTEF, EBAD, CESTI, UGB).
   - Salaires précisés avec devise locale (€ brut/an pour France, FCFA net/mois pour Sénégal).

---

## 4. Pipeline d'Exécution Déterministe
1. Exécution de `execution/llsh_jobs_part1.py` et `execution/llsh_jobs_part2.py`.
2. Compilation via `execution/compile_llsh_data.py` produisant `frontend/js/orientation-llsh-data.js`.
3. Validation avec `execution/verify_llsh_architecture.js`.
4. Git commit & push sur `main` pour déploiement Vercel.
