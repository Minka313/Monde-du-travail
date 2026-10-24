# Film de présentation WOW · Le Monde du Travail

Motion design qui présente le club à la fois comme **organisation** (bureau, pôles, mentors, valeurs) et comme **plateforme** (métiers, formations, mentorat, visio). Il existe en deux formats :

| Format | Fichier | Durée | Usage |
|---|---|---|---|
| 16:9 · 1920×1080 · 30 i/s | `out/WOW-Le-Monde-du-Travail-YouTube-16x9.mp4` | 60 s | YouTube, site, LinkedIn, projection |
| 9:16 · 1080×1920 · 30 i/s | `out/WOW-Le-Monde-du-Travail-TikTok-9x16.mp4` | 41 s | TikTok, Reels, Shorts, statuts WhatsApp |

Chaque format existe aussi en version `-sans-musique`, pour poser un son tendance directement dans l'application.
Le dossier `out/` contient aussi `miniature-youtube.jpg` et `couverture-tiktok.jpg`.

## Déroulé

1. **Accroche** : « On sort diplômé. *Rarement prêt.* »
2. **Le fossé** : du diplôme au premier poste ; « Le club, c'est ce *pont.* »
3. **Logo** : Le Monde du Travail · WOW · World Of Work · club fondé à Dakar en 2024.
4. **L'organisation** : Présidence, Vice-Présidence et les 8 pôles du bureau.
5. **Les mentors** : des pros du terrain, les formations qu'ils animent, le lien avec la Présidence.
6. **Le pilotage** : rapports par poste et validation (vraies captures de l'Espace Bureau et de l'Espace Mentor).
7. **Les valeurs** : Innovation, Éthique, Citoyenneté.
8. **La plateforme** : 535 fiches métiers, 12 formations avec PDF signés WOW, mentorat, forum et visio (vraies captures du site).
9. **Montage rythmé**, puis **signature** : sceau WOW, « Demain se prépare *aujourd'hui.* », adresse du site.

Les chiffres viennent du site lui-même (catalogue des métiers, formations, page « À propos »).
La musique est synthétisée par `music.js`, sans échantillon ni morceau existant : on peut donc la publier partout sans risque de droits d'auteur.

## Modifier et refabriquer

- Textes, ordre et durées des scènes : `motion.js` (constante `PLAN`, puis une section par scène).
- Styles : `motion.css`. Captures du site : `assets/shots/`. Photos, logo et sceau : `assets/img/`.
- Pour prévisualiser, ouvrez `index.html?format=h&play` (ou `format=v`) dans un navigateur. `&t=12` fige l'image à 12 s.
- Pour refabriquer tous les fichiers :

```bash
export CHROME=/chemin/vers/chrome PLAYWRIGHT=/chemin/vers/node_modules/playwright-core
./build.sh                  # les deux formats
FORMATS=v ./build.sh        # TikTok seulement
SKIP_FRAMES=1 ./build.sh    # remixer le son sans recalculer les images
```

Le rendu prend environ 5 minutes par format. Les émojis des cartes demandent la police *Noto Color Emoji*.

## Publication

- **YouTube** : téléversez la version 16:9, puis choisissez `miniature-youtube.jpg` comme miniature.
- **TikTok / Reels / Shorts** : la version 9:16 respecte les zones de l'interface (textes clés hors des 400 px du bas). Pour suivre une tendance, prenez la version sans musique et ajoutez le son dans l'application.
