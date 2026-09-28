#!/usr/bin/env python3
"""
Module de synchronisation déterministe du composant Footer sur les pages HTML frontend.
Applique le nouveau design de footer (carte émeraude, lignes vectorielles et bandeau ambré)
à l'ensemble des pages statiques pour assurer l'homogénéité et éviter tout FOUC.
"""

import os
import re
from typing import List, Dict, Any


class FooterSynchronizer:
    """
    Gestionnaire orienté objet de synchronisation du balisage Footer.
    """

    def __init__(self, frontend_dir: str, fragment_path: str) -> None:
        """
        Initialise le synchroniseur avec les chemins de base.

        Args:
            frontend_dir (str): Chemin absolu ou relatif vers le dossier frontend.
            fragment_path (str): Chemin vers le fragment footer.html maître.
        """
        self.frontend_dir: str = frontend_dir
        self.fragment_path: str = fragment_path
        self.target_files: List[str] = [
            'about.html',
            'blog-post.html',
            'blog.html',
            'formations.html',
            'forum-create.html',
            'forum-topic.html',
            'forum.html',
            'index.html',
            'job.html',
            'login.html',
            'profile.html',
            'reset-password.html'
        ]
        self.pattern: re.Pattern = re.compile(
            r'<footer\s+data-layout=[\"\']footer[\"\'][^>]*>.*?</footer>',
            re.DOTALL
        )

    def load_fragment(self) -> str:
        """
        Charge le contenu HTML du fragment footer maître.

        Returns:
            str: Contenu HTML formaté du nouveau footer.

        Raises:
            FileNotFoundError: Si le fichier de fragment n'existe pas.
            IOError: Si une erreur de lecture survient.
        """
        try:
            with open(self.fragment_path, 'r', encoding='utf-8') as f:
                content: str = f.read().strip()
                if not content:
                    raise ValueError(f"Le fragment {self.fragment_path} est vide.")
                return content
        except FileNotFoundError as err:
            raise FileNotFoundError(f"Fragment introuvable : {self.fragment_path}") from err
        except OSError as err:
            raise IOError(f"Erreur d'accès au fragment {self.fragment_path}: {err}") from err

    def sync_file(self, filename: str, new_markup: str) -> bool:
        """
        Met à jour le footer dans un fichier HTML cible.

        Args:
            filename (str): Nom du fichier relatif au dossier frontend.
            new_markup (str): Nouveau balisage HTML du footer.

        Returns:
            bool: True si le fichier a été modifié, False sinon.
        """
        filepath: str = os.path.join(self.frontend_dir, filename)
        if not os.path.exists(filepath):
            return False

        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                original_content: str = f.read()

            if not self.pattern.search(original_content):
                return False

            updated_content: str = self.pattern.sub(new_markup, original_content)
            if updated_content == original_content:
                return False

            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(updated_content)

            return True
        except (IOError, OSError) as err:
            print(f"[ERREUR] Échec de la mise à jour pour {filename}: {err}")
            return False

    def execute(self) -> Dict[str, Any]:
        """
        Exécute la synchronisation sur l'ensemble des fichiers cibles.

        Returns:
            Dict[str, Any]: Rapport d'exécution contenant les succès et erreurs.
        """
        report: Dict[str, Any] = {
            'total_target_files': len(self.target_files),
            'updated': [],
            'skipped': [],
            'errors': []
        }

        try:
            markup: str = self.load_fragment()
        except (FileNotFoundError, IOError, ValueError) as err:
            report['errors'].append(str(err))
            return report

        for filename in self.target_files:
            try:
                success: bool = self.sync_file(filename, markup)
                if success:
                    report['updated'].append(filename)
                else:
                    report['skipped'].append(filename)
            except Exception as ex:  # Garde-fou spécifique pour reporting
                report['errors'].append(f"{filename}: {ex}")

        return report


def main() -> None:
    """
    Point d'entrée principal pour l'exécution en ligne de commande.
    """
    base_dir: str = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    frontend_dir: str = os.path.join(base_dir, 'frontend')
    fragment_path: str = os.path.join(frontend_dir, 'fragments', 'footer.html')

    synchronizer: FooterSynchronizer = FooterSynchronizer(frontend_dir, fragment_path)
    result: Dict[str, Any] = synchronizer.execute()

    print("=== RAPPORT DE SYNCHRONISATION DU FOOTER ===")
    print(f"Fichiers modifiés ({len(result['updated'])}): {', '.join(result['updated'])}")
    if result['skipped']:
        print(f"Fichiers ignorés ({len(result['skipped'])}): {', '.join(result['skipped'])}")
    if result['errors']:
        print(f"Erreurs ({len(result['errors'])}): {result['errors']}")


if __name__ == '__main__':
    main()
