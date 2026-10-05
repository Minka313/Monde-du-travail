#!/usr/bin/env python3
"""
Module d'optimisation déterministe des assets frontend pour Le Monde du Travail.
Applique la minification CSS sans régression et modernise les balises d'images
(adoption de WebP et dimensions explicites pour supprimer le CLS).
"""

import os
import re
from pathlib import Path
from typing import Dict, List, Tuple


class CssMinifier:
    """Minifie les feuilles de style CSS de manière sécurisée et déterministe."""

    @staticmethod
    def minify(css_content: str) -> str:
        """Minifie le CSS en préservant la validité des propriétés personnalisées et calcs.

        Args:
            css_content: Contenu CSS brut.

        Returns:
            Contenu CSS minifié.
        """
        # 1. Suppression des commentaires de bloc
        css = re.sub(r'/\*[\s\S]*?\*/', '', css_content)
        # 2. Réduction des espaces multiples et retours à la ligne
        css = re.sub(r'[ \t\r\n]+', ' ', css)
        # 3. Espacements autour des accolades et points-virgules
        css = re.sub(r'\s*\{\s*', '{', css)
        css = re.sub(r'\s*\}\s*', '}', css)
        css = re.sub(r'\s*;\s*', ';', css)
        css = re.sub(r';\}', '}', css)
        # 4. Suppression des espaces superflus après deux-points et virgules
        css = re.sub(r':\s+', ':', css)
        css = re.sub(r'\s*,\s*', ',', css)
        return css.strip()

    def process_file(self, source_path: Path, dest_path: Path) -> Tuple[int, int]:
        """Traite et enregistre le fichier minifié.

        Args:
            source_path: Chemin du fichier source.
            dest_path: Chemin du fichier minifié de destination.

        Returns:
            Tuple (taille originale, nouvelle taille en octets).
        """
        with open(source_path, 'r', encoding='utf-8') as f:
            raw = f.read()

        minified = self.minify(raw)

        with open(dest_path, 'w', encoding='utf-8') as f:
            f.write(minified)

        return len(raw.encode('utf-8')), len(minified.encode('utf-8'))


class HtmlAssetOptimizer:
    """Met à jour les fichiers HTML pour référencer les assets optimisés."""

    def __init__(self, frontend_dir: Path) -> None:
        self.frontend_dir = frontend_dir

    def optimize_html_content(self, html: str) -> str:
        """Remplace les références lentes par leurs équivalents haute performance.

        Args:
            html: Code source HTML.

        Returns:
            Code source HTML optimisé.
        """
        # 1. Utilisation du CSS minifié
        html = re.sub(
            r'href="css/styles\.css"',
            'href="css/styles.min.css"',
            html
        )

        # 2. Favicon WebP plus léger
        html = re.sub(
            r'<link rel="icon" type="image/png" href="logo\.png">',
            '<link rel="icon" type="image/webp" href="logo.webp">',
            html
        )

        # 3. Utilisation de logo.webp au lieu de logo.png dans la navbar avec dimensions anti-CLS
        html = re.sub(
            r'<img src="logo\.png" alt="Logo Le Monde du Travail" class="logo-img">',
            '<img src="logo.webp" alt="Logo Le Monde du Travail" class="logo-img" width="40" height="40" onerror="this.onerror=null; this.src=\'logo.png\';">',
            html
        )
        html = re.sub(
            r'<img src="logo\.png" alt="Logo Le Monde du Travail" class="mobile-nav-logo">',
            '<img src="logo.webp" alt="Logo Le Monde du Travail" class="mobile-nav-logo" width="36" height="36" onerror="this.onerror=null; this.src=\'logo.png\';">',
            html
        )

        return html

    def process_directory(self) -> Dict[str, bool]:
        """Parcourt les fichiers HTML du frontend et des fragments pour appliquer les optimisations.

        Returns:
            Dictionnaire des fichiers traités avec statut de modification.
        """
        results = {}
        target_files: List[Path] = list(self.frontend_dir.glob('*.html'))
        fragments_dir = self.frontend_dir / 'fragments'
        if fragments_dir.is_dir():
            target_files.extend(fragments_dir.glob('*.html'))

        for file_path in target_files:
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    original = f.read()

                updated = self.optimize_html_content(original)

                if updated != original:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(updated)
                    results[file_path.name] = True
                else:
                    results[file_path.name] = False
            except Exception as e:
                results[file_path.name] = False

        return results


def main() -> None:
    """Point d'entrée principal pour l'optimisation des assets."""
    base_dir = Path(__file__).resolve().parent.parent
    frontend_dir = base_dir / 'frontend'
    css_src = frontend_dir / 'css' / 'styles.css'
    css_min = frontend_dir / 'css' / 'styles.min.css'

    print("=== OPTIMISATION DES ASSETS FRONTEND ===")
    minifier = CssMinifier()
    orig_size, min_size = minifier.process_file(css_src, css_min)
    reduction = ((orig_size - min_size) / orig_size) * 100
    print(f"[CSS] Minification : {orig_size:,} octets -> {min_size:,} octets (-{reduction:.1f}%)")

    html_opt = HtmlAssetOptimizer(frontend_dir)
    modified = html_opt.process_directory()
    updated_count = sum(1 for m in modified.values() if m)
    print(f"[HTML] {updated_count}/{len(modified)} fichiers mis à jour avec styles.min.css et logo.webp anti-CLS.")


if __name__ == '__main__':
    main()
