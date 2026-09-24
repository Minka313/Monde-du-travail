# Directives d'Exploration & Intégration : Hôtellerie, Restauration & Hospitalité
**Référence Officielle : France Travail / MétierScope (Secteur 102 & Fiches ROME)**

---

## 1. Contexte & Objectifs

Cette directive régit l'intégration de la grande famille professionnelle **Hôtellerie, Restauration & Hospitalité** dans la plateforme *Le Monde du Travail*.
L'objectif est d'offrir une cartographie vivante, exhaustive et réaliste pour les collégiens, lycéens, étudiants et professionnels en reconversion, articulant métiers opérationnels et fonctions de direction.

---

## 2. Périmètre & Règle Anti-Doublon

* **Source Première** : [France Travail MétierScope - Secteur 102](https://candidat.francetravail.fr/metierscope/secteurs-activite/102/hotellerie-et-restauration)
* **21 Métiers Référencés** :
  1. `commis-cuisine` : Commis de cuisine (ROME G1602)
  2. `cuisinier` : Cuisinier / Cuisinière (ROME G1602)
  3. `second-cuisine` : Second de cuisine (ROME G1601)
  4. `chef-cuisinier` : Chef cuisinier / Cheffe de cuisine (ROME G1601)
  5. `plongeur-restauration` : Plongeur en restauration (ROME G1605)
  6. `patissier` : Pâtissier de restaurant / Desserts (ROME D1104)
  7. `employe-restaurant` : Employé de restaurant (polyvalent) (ROME G1603)
  8. `serveur` : Serveur en restauration (salle) (ROME G1803)
  9. `garcon-cafe` : Garçon / Serveuse de café-brasserie (ROME G1801)
  10. `maitre-d-hotel` : Maître d'hôtel (ROME G1802)
  11. `barman` : Barman / Barmaid (ROME G1801)
  12. `sommelier` : Sommelier / Sommelière (ROME G1804)
  13. `receptionniste` : Réceptionniste en hôtellerie (ROME G1703)
  14. `voiturier` : Voiturier / Voiturier-bagagiste (ROME G1701)
  15. `employe-menage` : Employé de ménage (ROME K2204)
  16. `valet-de-chambre` : Valet / Femme de chambre (ROME G1501)
  17. `gouvernant` : Gouvernant / Gouvernante d'hôtel (ROME G1502)
  18. `directeur-restaurant` : Directeur de restaurant (ROME G1402)
  19. `directeur-hotel` : Directeur d'hôtel / Resort (ROME G1401)
  20. `gerant-restauration-collective` : Gérant de restauration collective (ROME G1403)
  21. `yield-manager` : Yield Manager / Revenue Manager (ROME M1704 / G1401)

* **Règle Anti-Doublon** : 
  Chaque métier est strictement unique au sein de la plateforme. Les liaisons avec d'autres familles (`tourisme-hotellerie`, `commerce-marketing`, `agriculture-agritech`, `transport-logistique`, `numerique-ia`) s'effectuent par le tableau `connectedFamilies`.

---

## 3. Double Ancrage Géographique

* 🇫🇷 **France** : Salaires réels en euros brut/mois conformes à la Convention Collective Nationale des Hôtels, Cafés, Restaurants (CCN HCR) et aux données France Travail ; diplômes de l'Éducation Nationale (CAP, Bac Pro, BTS MHR, Licences Pro, Écoles Ferrandi, Paul Bocuse/Lyfe, Vatel).
* 🇸🇳 **Sénégal** : Salaires réels en FCFA net/mois conformes à la Convention Collective de l'Hôtellerie et du Tourisme du Sénégal et aux pratiques de terrain (Dakar Almadies/Plateau, station balnéaire de Saly Portudal, Somone, Cap Skirring) ; formations ENFHT Dakar, UGB Saint-Louis, CFP hôteliers.

---

## 4. Protocole d'Exécution

1. **Génération Déterministe** : Découpage des fiches en scripts Python modulaires (`execution/hospitality_jobs_part1.py`, `part2.py`, `part3.py`) pour une parfaite lisibilité et maintenabilité.
2. **Compilation JS** : `execution/compile_hospitality_data.py` produit `frontend/js/orientation-hospitality-data.js` au format UMD.
3. **Branchage Frontend** : Intégration dans `frontend/js/orientation-data.js`, `frontend/job.html` et `frontend/js/orientation-ui.js`.
4. **Validation Automatisée** : Script `execution/verify_hospitality_architecture.js` vérifiant les 14 assertions de validation.
5. **Déploiement Continu** : Commit et push sur `origin/main` pour redéploiement Vercel.
