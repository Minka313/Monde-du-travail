# Concours & opportunités : alimenter et mettre à jour

## Deux façons d'ajouter une annonce

1. **Espace admin → « Concours & opportunités »** (module `opportunite`) : créer, modifier, publier, archiver, supprimer. Le formulaire couvre tous les champs : public, calendrier, session annuelle, fiche concours (frais, places, limite d'âge, séries du bac, épreuves avec durée et coefficient, comment candidater, contact), source officielle.
2. **Fichiers de données** `scripts/data/opportunites/*.json` puis, depuis `backend/` :
   - `npm run import:opportunites -- --dry` : vérifie les fichiers (mêmes règles que l'admin) sans rien écrire ;
   - `npm run import:opportunites` : crée les annonces absentes (clé : `slug`) ;
   - `npm run import:opportunites -- --update` : réécrit aussi le contenu des annonces existantes (**écrase les corrections faites dans l'admin**).
   Une annonce avec `"linkChecked": true` et un lien officiel est publiée ; sinon elle reste en brouillon.

## Règles éditoriales

- Pas de publication sans lien officiel. Cocher « J'ai vérifié aujourd'hui… » seulement après contrôle sur le site officiel ; la vérification de plus de 30 jours est signalée dans l'admin.
- `sourceNote` dit d'où viennent les informations quand elles n'ont pas été revérifiées (ex. communiqué 2026 repris par le *Manuel des concours au Sénégal*).
- Concours et bourses annuels : cocher « Session annuelle » et renseigner le calendrier habituel. Une fois la date limite passée (ou tant qu'aucune date n'est publiée), l'annonce affiche « Prochaine session » au lieu de « Clôturé ».
- À chaque nouvelle session : mettre à jour dates, frais et conditions depuis le communiqué officiel, puis cocher la vérification.

## Sources

- Concours nationaux : communiqués officiels des écoles, repris dans *Le Manuel des concours au Sénégal*, édition 2026 (Wakil Mouhamed Ba, STAR SCHOOL).
- Bourses, stages, programmes : sites officiels (Campus France, Chevening, Stipendium Hungaricum, Türkiye Bursları, DAAD, MEXT, Mastercard Foundation, YALI, Erasmus+, ONU, Banque mondiale, AMCI, AIMS, GKS).
- maboursedetudes.com a servi d'inspiration pour les rubriques (licence, master, doctorat, stages, programmes) ; son contenu n'a pas été copié.
