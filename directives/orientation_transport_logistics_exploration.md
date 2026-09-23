# Directive SOP : Cartographie d'Excellence « Transport, Logistique & Supply Chain »

## 1. Objectifs & Cadre Opérationnel
Cette directive encadre la modélisation, l'intégration et la maintenance de la famille professionnelle **Transport, Logistique & Supply Chain** au sein de la plateforme *Le Monde du Travail*.

### Références Documentaires :
- **L'Étudiant** : `https://www.letudiant.fr/metiers/secteur/transportlogistique.html`
- **Bretagne Supply Chain** : `https://www.bretagne-supplychain.fr/emploi/les-metiers-de-la-supply-chain/`
- **AFT** (Association pour le développement de la formation professionnelle dans le transport)
- **Port Autonome de Dakar & Observatoire des Transports du Sénégal**

---

## 2. Principes d'Ingénierie & Règle Anti-Hallucination
1. **Zéro Régression** : Les 356 métiers déjà présents sur la plateforme (Numérique, Finance, Agriculture/Pêche/Élevage, Énergie, BTP, LLSH, Industrie, Géosciences) sont conservés sans altération. Le total passe à **388 métiers**.
2. **Distinction Stricte Métier vs Diplôme vs Discipline** :
   - Un métier correspond à un titre de poste d'exercice réel (ex: *Déclarant en Douane*, *Affréteur*, *Pilote de Ligne*).
   - Les diplômes (CAP, Bac Pro, BTS GTLA, BUT MLT, Master Supply Chain, Diplômes d'ingénieur ISEL/ENPC) sont consignés dans l'onglet `formations` et ne doivent jamais être utilisés comme identifiants ou titres de métiers.
3. **Double Ancrage Géographique Systématique** :
   - **France** : Salaires en € brut/an, filières nationales de formation, conventions collectives des transports routiers, maritimes et aériens.
   - **Sénégal & Afrique de l'Ouest** : Salaires en FCFA net/mois, hubs d'envergure (Port Autonome de Dakar, AIBD, Plateforme logistique de Diamniadio, corridor Dakar-Bamako, TER, ZLECAF).
4. **Architecture Standard 6 Onglets** :
   - `overview` : Définition, missions, chiffres clés, pourquoi ce métier, saviez-vous.
   - `skills` : Compétences techniques (hard skills avec niveau %), humaines (soft skills) et outils professionnels (WMS, TMS, ERP, GPS/AIS, télématique).
   - `formations` : Parcours et diplômes détaillés (France et Sénégal/Afrique).
   - `salary` : Grilles débutant / intermédiaire / senior pour les deux zones géographiques.
   - `career` : Évolutions de carrière, passerelles sectorielles et entrepreneuriat.
   - `africa` : Réalités, opportunités et grands projets en Afrique de l'Ouest.

---

## 3. Cartographie : 24 Domaines & 32 Métiers

### Les 24 Domaines :
1. `supply-chain-strategique` : Direction Supply Chain & Stratégie Globale
2. `gestion-entrepot-stockage` : Gestion d'Entrepôt & Stockage
3. `prepa-commandes-manutention` : Manutention, Préparation de Commandes & Conduite d'Engins
4. `transport-routier-marchandises` : Transport Routier de Marchandises & Longue Distance
5. `transport-urbain-livraison` : Transport Urbain, Messagerie & Livraison Dernier Kilomètre
6. `transport-ferroviaire` : Transport Ferroviaire & Conduite de Trains
7. `transport-maritime-portuaire` : Transport Maritime & Gestion Portuaire
8. `transport-aerien-aviation` : Transport Aérien, Aviation Civile & Opérations de Vol
9. `transit-douane-commerce-intl` : Transit International, Douane & Affrètement
10. `exploitation-transport` : Exploitation & Planification des Transports
11. `achats-approvisionnements-transport` : Achats Transport & Gestion des Approvisionnements
12. `ordonnancement-planning-flux` : Ordonnancement & Pilotage des Flux
13. `ingenierie-projets-logistiques` : Ingénierie & Projets Logistiques
14. `logistique-verte-durable` : Logistique Verte, Décarbonation & Éco-Mobilité
15. `transport-voyageurs-mobilite` : Transport de Voyageurs & Mobilité Partagée
16. `securite-surete-transport` : Sécurité, Sûreté des Transports & Convoyage
17. `maintenance-flottes-vehicules` : Maintenance & Gestion des Flottes
18. `systemes-info-supply-chain` : Systèmes d'Information & Digitalisation Supply Chain (WMS, TMS, IA)
19. `qualite-securite-environnement-tl` : Qualité, Sécurité & Environnement (QSE) en Transport-Logistique
20. `commercial-relation-client-tl` : Développement Commercial & Vente Transport-Logistique
21. `transport-specifique-frigorifique` : Transport Sous Température Dirigée & Chaîne du Froid
22. `logistique-humanitaire-urgence` : Logistique Humanitaire & Gestion d'Urgence
23. `intermodalite-multimodal` : Multimodalité & Plateformes Logistiques Intégrées
24. `navigation-aerienne-aeroport` : Gestion Aéroportuaire & Contrôle Aérien

---

## 4. Pipeline de Déploiement et de Validation
1. Génération modulaire via scripts Python déterministes (`execution/transport_jobs_part1.py` et `transport_jobs_part2.py`).
2. Compilation automatisée via `execution/compile_transport_logistics_data.py` vers `frontend/js/orientation-transport-logistics-data.js`.
3. Validation rigoureuse par `node execution/verify_transport_logistics_architecture.js`.
4. Commit conventionnel et push sur `origin/main` pour redéploiement Vercel.
