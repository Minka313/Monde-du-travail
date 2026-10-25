# Concours & opportunités : alimenter et mettre à jour

## Deux façons d'ajouter une annonce

1. **Espace admin → « Concours & opportunités »** (module `opportunite`) : créer, modifier, publier, archiver, supprimer. Le formulaire est découpé en 7 onglets (essentiel, public & conditions, calendrier, dossier & épreuves, candidature & avantages, conseils/FAQ/liens, source & publication) avec un indicateur « Fiche complète à X % » qui liste ce qui manque. Visez plus de 85 % avant de publier, et relisez l'**Aperçu** (fiche publique, visible même en brouillon par l'équipe).
   - **Nouvelle session** (menu ⋯) : copie la fiche en brouillon sans les dates ni la vérification, à compléter avec le nouveau communiqué.
   - **Signalements** : les erreurs signalées par les visiteurs (« Signaler une erreur » sur chaque fiche) apparaissent en tête de la page admin ; corriger l'annonce puis « Marquer traité ».
2. **Fichiers de données** `scripts/data/opportunites/*.json` puis, depuis `backend/` :
   - `npm run import:opportunites -- --dry` : vérifie les fichiers (mêmes règles que l'admin) sans rien écrire ;
   - `npm run import:opportunites` : crée les annonces absentes (clé : `slug`) ;
   - `npm run import:opportunites -- --update` : réécrit aussi le contenu des annonces existantes (**écrase les corrections faites dans l'admin**) ;
   - `npm run import:opportunites -- --update --fields=domains,location` : ne met à jour que les champs listés (le reste, y compris les corrections admin, est conservé).
   Une annonce avec `"linkChecked": true` et un lien officiel est publiée ; sinon elle reste en brouillon.

## Règles éditoriales

- Pas de publication sans lien officiel. Cocher « J'ai vérifié aujourd'hui… » seulement après contrôle sur le site officiel ; la vérification de plus de 30 jours est signalée dans l'admin.
- `sourceNote` dit d'où viennent les informations quand elles n'ont pas été revérifiées (ex. communiqué 2026 repris par le *Manuel des concours au Sénégal*).
- Concours et bourses annuels : cocher « Session annuelle » et renseigner le calendrier habituel. Une fois la date limite passée (ou tant qu'aucune date n'est publiée), l'annonce affiche « Prochaine session » au lieu de « Clôturé ».
- À chaque nouvelle session : mettre à jour dates, frais et conditions depuis le communiqué officiel, puis cocher la vérification.

## Organisation de la rubrique

- **Liste** (`/opportunites`) : recherche, statistiques, bandeau « À ne pas manquer » (60 jours), filtres combinables avec compteurs (type, statut, date limite, niveau, série du bac, domaine, destination, bourse complète, favoris), tri, vue **Fiches** groupée par statut ou vue **Calendrier** par mois. Les filtres sont dans l'adresse : un lien filtré se partage.
- **Fiche** (`/opportunite?slug=…`) : parcours du candidat, conditions, calendrier, dossier à cocher, épreuves, candidature, avantages, conseils, FAQ, source et date de vérification, export agenda (.ics), partage WhatsApp, impression, signalement, annonces similaires. Les fiches sont dans le sitemap.
- **Domaines** : à renseigner pour chaque annonce (filtre « Domaine »). « Toutes filières » pour les bourses et lycées généralistes.
- Pour une session annuelle passée, la date de la prochaine session est **estimée** au même moment de l'année que la dernière et toujours affichée comme estimation.

## Sources

- Concours nationaux : communiqués officiels des écoles, repris dans *Le Manuel des concours au Sénégal*, édition 2026 (Wakil Mouhamed Ba, STAR SCHOOL).
- Bourses, stages, programmes : sites officiels (Campus France, Chevening, Stipendium Hungaricum, Türkiye Bursları, DAAD, MEXT, Mastercard Foundation, YALI, Erasmus+, ONU, Banque mondiale, AMCI, AIMS, GKS).
- maboursedetudes.com a servi d'inspiration pour les rubriques (licence, master, doctorat, stages, programmes) ; son contenu n'a pas été copié.
