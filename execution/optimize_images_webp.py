#!/usr/bin/env python3
"""
OPTIMISATION DES IMAGES LOCALES EN WEBP HAUTE PERFORMANCE
Le Monde du Travail — Compression et conversion déterministe via Pillow.
"""

from pathlib import Path
from typing import Dict, Any
from PIL import Image


class ImageOptimizer:
    """Gestionnaire déterministe de conversion et compression d'images WebP."""

    def __init__(self, target_dir: Path) -> None:
        self.target_dir = target_dir

    def convert_to_webp(self, quality: int = 80) -> Dict[str, Any]:
        """Convertit toutes les images JPG/JPEG/PNG en WebP haute efficacité.

        Args:
            quality: Niveau de compression visuelle WebP (1-100).

        Returns:
            Dict contenant le bilan chiffré des gains d'espace.
        """
        results: list[dict[str, Any]] = []
        total_original_bytes = 0
        total_webp_bytes = 0

        if not self.target_dir.exists():
            raise FileNotFoundError(f"Le dossier {self.target_dir} n'existe pas.")

        for file_path in self.target_dir.iterdir():
            if not file_path.is_file() or file_path.suffix.lower() not in ('.jpg', '.jpeg', '.png'):
                continue

            orig_size = file_path.stat().st_size
            webp_name = f"{file_path.stem}.webp"
            webp_path = self.target_dir / webp_name

            try:
                with Image.open(file_path) as img:
                    # Conversion RGBA si PNG avec transparence, sinon RGB
                    if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                        converted = img.convert('RGBA')
                    else:
                        converted = img.convert('RGB')

                    converted.save(webp_path, 'WEBP', quality=quality, method=6)

                webp_size = webp_path.stat().st_size
                saving_pct = ((orig_size - webp_size) / orig_size) * 100

                total_original_bytes += orig_size
                total_webp_bytes += webp_size

                results.append({
                    'file': file_path.name,
                    'webp': webp_name,
                    'orig_kb': round(orig_size / 1024, 1),
                    'webp_kb': round(webp_size / 1024, 1),
                    'gain_pct': round(saving_pct, 1)
                })
            except Exception as exc:
                print(f"Erreur sur {file_path.name}: {exc}")

        total_gain_pct = (
            ((total_original_bytes - total_webp_bytes) / total_original_bytes * 100)
            if total_original_bytes > 0
            else 0.0
        )

        return {
            'images': results,
            'total_original_kb': round(total_original_bytes / 1024, 1),
            'total_webp_kb': round(total_webp_bytes / 1024, 1),
            'total_gain_pct': round(total_gain_pct, 1)
        }


def main() -> None:
    images_dir = Path(__file__).resolve().parent.parent / 'frontend' / 'images'
    optimizer = ImageOptimizer(images_dir)
    report = optimizer.convert_to_webp(quality=80)

    print("=== BILAN DE CONVERSION WEBP ===")
    for item in report['images']:
        print(f"📸 {item['file']} ({item['orig_kb']} Ko) -> {item['webp']} ({item['webp_kb']} Ko) | -{item['gain_pct']}%")

    print("---------------------------------")
    print(f"Total avant : {report['total_original_kb']} Ko")
    print(f"Total après : {report['total_webp_kb']} Ko")
    print(f"Économie globale de bande passante : -{report['total_gain_pct']}%")


if __name__ == '__main__':
    main()
