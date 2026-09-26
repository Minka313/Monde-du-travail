# SOP Directive : Module Boussole d'Orientation - Quiz RIASEC, Roue Interactive & Référentiel Éducatif Sénégalais

## 1. Contexte & Objectifs
Cette directive régit la conception, l'enrichissement des données et l'implémentation frontend de la **Boussole d'orientation interactive** sur le site *Le Monde du Travail*.
Elle tire son inspiration du modèle officiel du **CNOSP** (*Centre National d'Orientation Scolaire et Professionnelle* - [orientation.education.sn](https://orientation.education.sn/)) et du modèle psychométrique universel **RIASEC de John Holland**.

---

## 2. Le Modèle Psychométrique RIASEC

Le moteur évalue les 6 dimensions fondamentales :
1. **R - Réaliste (Terrain & Technique) :** Aime manipuler des objets, machines, outils, travailler en extérieur, construire, réparer.
   - *Familles associées :* BTP & Architecture, Agriculture & AgriTech, Énergie & Renouvelable, Industrie & Mécanique, Pêche & Maritime, Transport & Logistique.
2. **I - Investigateur (Scientifique & Analytique) :** Aime analyser, observer, rechercher, résoudre des problèmes intellectuels ou scientifiques complexes, manipuler la data.
   - *Familles associées :* Numérique & IA, Data & Décision, Cybersécurité & Réseaux, Santé & Soins, Sciences de la Terre & Géosciences, Biologie & Chimie.
3. **A - Artistique (Créatif & Expression) :** Aime créer, innover visuellement ou textuellement, concevoir des récits, dessiner, s'exprimer librement.
   - *Familles associées :* Communication & Création, Médias & Publicité, Lettres & Sciences Humaines, Design, Métiers Émergents.
4. **S - Social (Humain & Transmission) :** Aime aider, soigner, former, enseigner, écouter, animer, accompagner autrui.
   - *Familles associées :* Éducation & Formation, Santé & Paramédical, Hôtellerie & Hospitalité, Droit & Management.
5. **E - Entreprenant (Leadership & Stratégie) :** Aime convaincre, diriger, négocier, vendre, piloter des projets, prendre des initiatives économiques.
   - *Familles associées :* Commerce & Marketing, Finance & FinTech, Droit & Management, Entrepreneuriat & Startups.
6. **C - Conventionnel (Organisation & Méthode) :** Aime l'ordre, la rigueur, les règles précises, les chiffres, la gestion administrative, la conformité.
   - *Familles associées :* Finance & Banque, Droit, Logistique, Administration publique.

---

## 3. Banque de Questions Immersives (Quiz de 8 à 10 questions)

Les questions sont rédigées au **tutoiement** avec un style chaleureux, dynamique et bienveillant.
Chaque question met en scène une situation de la vie réelle ou scolaire :
- Question 1 : *Dans un travail d'équipe ou un projet d'école, quel rôle prends-tu naturellement ?*
- Question 2 : *Face à un problème complexe, quelle est ta première réaction ?*
- Question 3 : *Quel environnement de travail te fait le plus rêver au quotidien ?*
- Question 4 : *Pendant ton temps libre, quelle activité t'apporte le plus d'énergie ?*
- Question 5 : *Si tu devais créer une entreprise ou lancer une initiative au Sénégal, ce serait...*
- Question 6 : *Quelle matière ou domaine d'apprentissage t'a toujours le plus stimulé ?*
- Question 7 : *Parmi ces outils ou instruments, lequel aimerais-tu maîtriser à la perfection ?*
- Question 8 : *Face au monde de demain et aux défis de l'Afrique, où souhaites-tu avoir le plus d'impact ?*

Chaque réponse attribue des points à 1 ou 2 dimensions RIASEC majeures.

---

## 4. La Roue Interactive (Spinning Wheel)

1. **Rendu Visuel :**
   - 6 secteurs de 60 degrés chacun :
     * R - Réaliste (Bleu pétrole / Saphir #0284c7)
     * I - Investigateur (Indigo tech #4f46e5)
     * A - Artistique (Pourpre royal #9333ea)
     * S - Social (Émeraude éclatante #059669)
     * E - Entreprenant (Ambre doré #d97706)
     * C - Conventionnel (Ardoise acier #475569)
   - Moyeu central doré avec la boussole 🧭
   - Pointeur supérieur oscillant avec dynamique d'aiguille.
2. **Comportement & Révélation :**
   - Calcul de la dimension dominante à l'issue du quiz.
   - Lancement de la rotation avec vitesse initiale `omega0` et décélération logarithmique pour atterrir précisément sur le segment dominant.
   - Révélation solennelle : halo lumineux, explosion de particules douces CSS, apparition du résultat avec score RIASEC et top métiers.

---

## 5. Données Sénégalaises & Métiers Enrichis

Pour chaque profil et métier recommandé :
- **Séries de Baccalauréat sénégalais recommandées :**
  * S1 / S2 : Sciences exactes & expérimentales
  * S3 : Sciences & Technologies
  * L1 / L2 / LA : Lettres, Langues & Arts
  * STEG : Sciences et Technologies de l'Économie et de la Gestion
  * T1 / T2 : Sciences industrielles & Mécanique
  * Formation Professionnelle : CAP, BEP, BT, BTS
- **Pôles d'enseignement supérieur sénégalais de référence :**
  * UCAD (FST, FASEG, FMPO, ESP, CESTI, EBAD)
  * UGB (Saint-Louis - SAT, SEFS, SJP, CRAC)
  * EPT (École Polytechnique de Thiès)
  * ENSAE (École Nationale de la Statistique et de l'Analyse Économique)
  * ESMT (École Supérieure Multinationale des Télécommunications)
  * ISEP (Réseau des Instituts Supérieurs d'Enseignement Professionnel : Diamniadio, Thiès, Bignona, Matam, Richard-Toll)
  * UT, UADB, USSEIN, UNCHK (Université Numérique Cheikh Hamidou Kane)
- **Fourchette de rémunération estimée au Sénégal (FCFA) :**
  * Débutant (0 - 2 ans)
  * Confirmé / Senior (3 - 5+ ans)
- **Alignement Vision Sénégal 2050 / Secteur Stratégique National.**
