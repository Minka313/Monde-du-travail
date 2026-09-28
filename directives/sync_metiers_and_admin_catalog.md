# Directive : Synchronisation des Métiers & Catalogue d'Orientation (Espace Admin & Base de Données)

## 1. Contexte & Objectif
Le site public ([frontend/job.html](file:///home/khadimoul-barham/Mes%20sites/Monde-du-travail/frontend/job.html)) propose une exploration de 535 fiches métiers certifiées réparties sur 21 grandes familles professionnelles (Numérique, IA, Finance, Agriculture, BTP, Santé, Énergie, etc.).
Afin de garantir une synchronisation complète entre l'espace d'administration ([admin-frontend/index.html#metiers](file:///home/khadimoul-barham/Mes%20sites/Monde-du-travail/admin-frontend/index.html)) et la base de données PostgreSQL de Supabase, cette directive établit le protocole déterministe d'ingestion, d'administration et d'hydratation bidirectionnelle.

## 2. Architecture 3-Couches
1. **Couche 1 : Directive & Modèle de Données (`directives/`)**
   - Schéma Prisma `Job` (`backend/prisma/schema.prisma`).
   - Rubrique éditoriale *« Le saviez-vous ? »* (`saviezVous` JSONB : `statut`, `fait`, `pourquoi`, `a_retenir`).
   - RLS PostgreSQL avec politique `SELECT` publique sur `status = 'PUBLISHED'`.
2. **Couche 2 : Orchestration & Routage API (`backend/src/`)**
   - `/api/jobs/admin/list` : Renvoie les métiers filtrés par statut, créateur, domaine/famille et terme de recherche (`jobService.getJobsForAdmin`).
   - `/api/jobs` : Renvoie les métiers publiés avec mise en cache edge.
   - `statsController` : Agrège le décompte réel sans duplication artificielle.
3. **Couche 3 : Exécution Déterministe (`execution/`)**
   - [execution/sync_orientation_jobs_to_db.py](file:///home/khadimoul-barham/Mes%20sites/Monde-du-travail/execution/sync_orientation_jobs_to_db.py) : Script POO déterministe extrayant les fiches du catalogue statique, validant les données et exécutant un `UPSERT` SQL idempotent dans PostgreSQL.

## 3. Mode Opératoire de Resynchronisation (SOP)
Si de nouvelles fiches statiques sont ajoutées au catalogue JavaScript :
1. Exporter le catalogue consolidé :
   ```bash
   node -e "
   const fs = require('fs');
   const vm = require('vm');
   const context = { window: {}, console, Math };
   context.window = context;
   const files = ['orientation-digital-data.js', 'orientation-finance-data.js', 'orientation-agri-data.js', 'orientation-energy-data.js', 'orientation-btp-data.js', 'orientation-llsh-data.js', 'orientation-industry-data.js', 'orientation-geosciences-data.js', 'orientation-health-data.js', 'orientation-biochimie-data.js', 'orientation-education-data.js', 'orientation-environment-data.js', 'orientation-hospitality-data.js', 'orientation-communication-data.js', 'orientation-data.js'];
   vm.createContext(context);
   for (const f of files) vm.runInContext(fs.readFileSync('frontend/js/' + f, 'utf8'), context);
   context.window.OrientationData.getAllJobs().then(jobs => {
     fs.writeFileSync('.tmp/orientation_jobs_catalog.json', JSON.stringify(jobs, null, 2), 'utf8');
     console.log('Exporté:', jobs.length);
   });"
   ```
2. Exécuter le synchronisateur déterministe :
   ```bash
   python3 execution/sync_orientation_jobs_to_db.py
   ```
3. Vérifier le décompte :
   ```bash
   psql "$DIRECT_URL" -c "SELECT count(*), status FROM jobs GROUP BY status;"
   ```

## 4. Fonctionnalités Espace Admin (`#metiers`)
- **Barre de recherche en temps réel** : Filtrage immédiat par titre, compétences, mot-clé ou description.
- **Sélecteur de Famille / Domaine** : 21 grandes familles professionnelles certifiées.
- **Pagination fluide (25 items/page)** : Navigation réactive sans latence DOM.
- **Bouton d'accès direct** : 👁️ *Voir* ouvre instantanément la fiche publique `job.html?job=<id>`.
- **Modale d'édition enrichie** : Déduction automatique de la branche enum lors de la sélection du domaine.

## 5. Gestion des Cas Limites
- Si l'API backend est indisponible côté client, `frontend/js/orientation-data.js` utilise son fallback autonome sur le jeu de données statique certifié.
- Lorsqu'une fiche métier est mise à jour depuis l'admin (salaire, compétences, description, bloc saviez-vous), elle est dynamiquement fusionnée en priorité par `OrientationData.getAllJobs()`.
