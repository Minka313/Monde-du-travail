#!/usr/bin/env bash
# Fabrique les films WOW (YouTube 16:9 et TikTok 9:16) : images, bande-son, mixage final.
# Prérequis : Node, ffmpeg, Chromium + playwright-core (variables CHROME et PLAYWRIGHT),
# police d'émojis installée (ou FONTCONFIG_FILE pointant vers une configuration qui l'inclut).
set -euo pipefail
cd "$(dirname "$0")"
OUT=out
mkdir -p "$OUT"
for f in ${FORMATS:-h v}; do
  [ "${SKIP_FRAMES:-}" = 1 ] || node render.js --format "$f" --out "$OUT"
  node music.js --format "$f" --out "$OUT"
  name=$([ "$f" = h ] && echo "WOW-Le-Monde-du-Travail-YouTube-16x9" || echo "WOW-Le-Monde-du-Travail-TikTok-9x16")
  # Avec la bande-son originale, volume normalisé pour les plateformes (-14 LUFS)
  ffmpeg -y -loglevel error -i "$OUT/video-$f.mp4" -i "$OUT/music-$f.wav" -map 0:v -map 1:a -c:v copy \
    -af "loudnorm=I=-14:TP=-1.5:LRA=9" -ar 48000 -c:a aac -b:a 256k -shortest -movflags +faststart "$OUT/$name.mp4"
  # Sans musique : pour poser un son tendance directement dans TikTok, Reels ou Shorts
  ffmpeg -y -loglevel error -i "$OUT/video-$f.mp4" -f lavfi -i anullsrc=r=48000:cl=stereo -map 0:v -map 1:a -c:v copy \
    -c:a aac -b:a 128k -shortest -movflags +faststart "$OUT/$name-sans-musique.mp4"
  echo "→ $OUT/$name.mp4"
done
# Miniature YouTube (1280×720) et couverture TikTok (1080×1920)
[ -f "$OUT/video-h.mp4" ] && ffmpeg -y -loglevel error -ss 4.2 -i "$OUT/video-h.mp4" -frames:v 1 -vf scale=1280:720 -q:v 2 "$OUT/miniature-youtube.jpg"
[ -f "$OUT/video-v.mp4" ] && ffmpeg -y -loglevel error -ss 9.6 -i "$OUT/video-v.mp4" -frames:v 1 -q:v 2 "$OUT/couverture-tiktok.jpg"
echo "Terminé."
