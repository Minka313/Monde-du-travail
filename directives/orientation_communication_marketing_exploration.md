# Directives d'Exploration & Intégration : Communication, Marketing, Médias & Création
**Références Officielles : École Supérieure de Publicité (ESP Métiers) & Studyrama**

---

## 1. Contexte & Objectifs

Cette directive régit l'intégration de la grande famille professionnelle **Communication, Marketing, Médias & Création** dans la plateforme *Le Monde du Travail*.
L'objectif est d'offrir une cartographie vivante, exhaustive et réaliste pour les collégiens, lycéens, étudiants et professionnels en reconversion, articulant métiers stratégiques, créatifs, digitaux et événementiels.

---

## 2. Périmètre des 6 Domaines Consolidés (Règle Anti-Doublons)

Pour éviter toute fragmentation artificielle du secteur, la famille est strictement structurée autour de **6 grands domaines d'excellence** :

1. **📣 Communication & Relations publiques**
   - *Périmètre :* Communication globale, corporate, interne, externe, relations presse, relations médias, affaires publiques/lobbying, communication de crise, e-réputation, communication RSE et responsable.
   - *Règle de fusion :* Intègre les fonctions Corporate & RSE pour éviter un 7e domaine redondant.
2. **📊 Marketing & Stratégie de marque**
   - *Périmètre :* Marketing stratégique, Brand Management, marketing produit, marketing opérationnel, Category management, Trade marketing, merchandising, marketing territorial et international.
   - *Règle :* Brand Management et Trade Marketing sont des sous-domaines à part entière de ce domaine.
3. **💻 Marketing Digital & Acquisition**
   - *Périmètre :* Acquisition d'audience, growth marketing, référencement naturel (SEO), référencement payant (SEA/Social Ads), CRM, marketing automation, e-commerce, web analytics et data marketing.
   - *Règle :* Le SEO, le CRM et l'e-commerce ne sont pas des domaines indépendants mais des spécialités du digital.
4. **📺 Médias, Publicité & Contenu**
   - *Périmètre :* Publicité agence, direction de clientèle, planning stratégique, media planning, achat d'espace (media buying), programmatique, brand content, conception-rédaction, storytelling, copywriting et production publicitaire.
5. **🎨 Création & Design**
   - *Périmètre :* Direction artistique, direction de création, design graphique, motion design, illustration, UI design, infographie, PAO, photographie professionnelle et création visuelle.
6. **🎪 Événementiel & Expérience**
   - *Périmètre :* Gestion de projets événementiels, régie technique, logistique événementielle, événements d'entreprise (corporate), congrès, salons professionnels, scénographie, hospitality et expérience client.

---

## 3. Règle Anti-Doublon & Réutilisation des Fiches

Les métiers transversaux existants ne sont pas dupliqués mais interconnectés par les tableaux `connectedFamilies` et `relatedJobSlugs` :
- `ui-designer` : Fiche unifiée dans *Création & Design* reliée à `numerique-ia`.
- `data-analyst-marketing` : Fiche unifiée dans *Marketing Digital & Acquisition* reliée à `data-decision` et `numerique-ia`.
- `responsable-experience-client` : Fiche unifiée dans *Événementiel & Expérience* reliée à `commerce-marketing` et `hotellerie-restauration-hospitalite`.
- `brand-content-manager` : Fiche unifiée dans *Médias, Publicité & Contenu* reliée à *Marketing & Stratégie de marque*.
- `growth-hacker`, `consultant-seo-sea`, `motion-designer`, `social-media-manager`, `community-manager` : Enrichis et connectés.

---

## 4. Double Ancrage Géographique

* 🇫🇷 **France** : Salaires réels en euros brut/mois selon les grilles de branche (AACC, Syntec, conventions de la communication) ; diplômes CELSA, Sciences Po, ESP, ISCOM, Sup de Pub, Gobelins, Écoles de commerce (HEC, ESSEC, ESCP, etc.), Universités (Masters Info-Com).
* 🇸🇳 **Sénégal** : Salaires réels en FCFA net/mois conformes au marché de l'Afrique de l'Ouest (agences de communication dakarises, filiales de multinationales télécom/banque, institutions internationales, médias) ; formations CESTI (UCAD), ISM Dakar, Sup de Co Dakar, ESMT, BEM Dakar, UGB Saint-Louis.

---

## 5. Protocole d'Exécution & Vérification

1. Scripts Python modulaires dans `execution/` (`communication_jobs_part1.py`, `part2.py`, `part3.py`).
2. Compilateur déterministe `execution/compile_communication_data.py` générant `frontend/js/orientation-communication-data.js`.
3. Intégration frontend dans `frontend/job.html` et `frontend/js/orientation-data.js`.
4. Tests automatisés via `execution/verify_communication_architecture.js`.
5. Déploiement automatique sur `origin/main` (Vercel).
