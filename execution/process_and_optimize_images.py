#!/usr/bin/env python3
"""
TRAITEMENT, CONVERSION ET OPTIMISATION DES IMAGES
Le Monde du Travail — Valorisation de l'identité africaine et sénégalaise
Conversion WebP haute performance via Pillow (method=6, quality=80)
"""

import os
from pathlib import Path
from PIL import Image

ARTIFACTS_DIR = Path("/home/khadimoul-barham/.gemini/antigravity-ide/brain/615f0eae-e3fb-48ac-bff4-df8e8880bd0c")
IMAGES_DIR = Path("frontend/images")

# Mapping des fichiers sources générés vers les fichiers cibles finaux
IMAGE_MAPPINGS = [
    {
        "source": "hero_senegalese_youth_1791204176203.jpg",
        "targets": [
            ("hero_senegalese_youth.webp", (1200, 675), 80),
            ("hero_senegalese_youth_960.webp", (960, 540), 75),
            ("hero_senegalese_youth_480.webp", (480, 270), 70),
        ]
    },
    {
        "source": "formations_hero_african_1791204416553.jpg",
        "targets": [
            ("formations_hero.webp", (1200, 675), 80),
            ("formations_hero_960.webp", (960, 540), 75),
            ("formations_hero_480.webp", (480, 270), 70),
        ]
    },
    {
        "source": "pillar_orientation_1791204196681.jpg",
        "targets": [
            ("orientation.webp", (800, 450), 80),
        ]
    },
    {
        "source": "pillar_communication_1791204220674.jpg",
        "targets": [
            ("communication.webp", (800, 450), 80),
        ]
    },
    {
        "source": "pillar_leadership_1791204248308.jpg",
        "targets": [
            ("leadership.webp", (800, 450), 80),
        ]
    },
    {
        "source": "pillar_innovation_1791204270599.jpg",
        "targets": [
            ("innovation.webp", (800, 450), 80),
        ]
    },
    {
        "source": "pillar_ethique_1791204305178.jpg",
        "targets": [
            ("ethique.webp", (800, 450), 80),
        ]
    },
    {
        "source": "pillar_citoyennete_1791204337045.jpg",
        "targets": [
            ("citoyennete.webp", (800, 450), 80),
        ]
    },
    {
        "source": "about_team_african_1791204363700.jpg",
        "targets": [
            ("about_team.webp", (800, 450), 80),
        ]
    },
    {
        "source": "about_mission_african_1791204392266.jpg",
        "targets": [
            ("about_mission.webp", (800, 450), 80),
        ]
    },
]


def process_images() -> None:
    IMAGES_DIR.mkdir(parents=True, exist_ok=True)
    print("🚀 Début du traitement et de l'optimisation des images...")

    for item in IMAGE_MAPPINGS:
        src_path = ARTIFACTS_DIR / item["source"]
        if not src_path.exists():
            print(f"⚠️ Fichier source introuvable : {src_path}")
            continue

        with Image.open(src_path) as img:
            img = img.convert("RGB")
            for filename, size, quality in item["targets"]:
                target_path = IMAGES_DIR / filename
                # Redimensionnement avec ré-échantillonnage Lanczos haute qualité
                resized = img.resize(size, Image.Resampling.LANCZOS)
                resized.save(target_path, "WEBP", quality=quality, method=6)
                size_kb = target_path.stat().st_size / 1024
                print(f"✅ {filename:35} -> {size[0]}x{size[1]} ({size_kb:.1f} Ko)")

    # Nettoyage des anciens doublons redondants (.jpg, .jpeg, accents)
    obsolete_files = [
        "Communication.jpg", "Communication.webp",
        "Innovation.jpg", "Innovation.webp",
        "Orientation.jpeg", "Orientation.webp",
        "citoyennete.jpeg", "citoyennete.jpg",
        "citoyenneté.jpeg", "citoyenneté.webp",
        "communication.jpg", "innovation.jpg",
        "orientation.jpg"
    ]

    cleaned = 0
    for obs in obsolete_files:
        p = IMAGES_DIR / obs
        if p.exists():
            p.unlink()
            cleaned += 1

    print(f"\n🧹 Nettoyage terminé : {cleaned} fichiers redondants/obsolètes supprimés.")


if __name__ == "__main__":
    process_images()
