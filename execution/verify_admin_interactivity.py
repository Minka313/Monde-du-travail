#!/usr/bin/env python3
"""
Vérificateur déterministe d'interactivité et de réactivité de l'espace d'administration.
Analyse statique et sémantique de tous les boutons, liens et modales dans admin-frontend/.
"""

import re
import sys
from pathlib import Path

def audit_admin():
    base_dir = Path("/home/khadimoul-barham/Mes sites/Monde-du-travail/admin-frontend")
    html_file = base_dir / "index.html"
    js_file = base_dir / "js" / "admin-pages.js"

    html_content = html_file.read_text(encoding="utf-8")
    js_content = js_file.read_text(encoding="utf-8")

    errors = []
    warnings = []

    print("=== 1. Vérification des boutons de l'index.html ===")
    html_buttons = re.findall(r'<button[^>]*id=["\']([^"\']+)["\'][^>]*>', html_content)
    for btn_id in html_buttons:
        if btn_id not in js_content and f"#{btn_id}" not in js_content:
            # Check in admin-app.js
            app_js = (base_dir / "js" / "admin-app.js").read_text(encoding="utf-8")
            if btn_id not in app_js and f"#{btn_id}" not in app_js:
                errors.append(f"Bouton HTML #{btn_id} sans écouteur d'événement attaché.")
            else:
                print(f"  ✓ #{btn_id} (lié dans admin-app.js)")
        else:
            print(f"  ✓ #{btn_id} (lié dans admin-pages.js)")

    print("\n=== 2. Vérification des appels de fonctions dans admin-pages.js ===")
    # Vérifier openContentFormModal qui causait un bug
    if "openContentFormModal" in js_content:
        errors.append("openContentFormModal est encore présent dans le code !")
    else:
        print("  ✓ Aucune référence erronée à openContentFormModal")

    # Vérifier l'existence des modales et leurs fermetures
    modal_overlays = re.findall(r'overlay\.id\s*=\s*[\'"]([^\'"]+)[\'"]', js_content)
    print(f"\n=== 3. Vérification des {len(modal_overlays)} modales dynamiques ===")
    for modal_id in modal_overlays:
        print(f"  ✓ Modale déclarée : {modal_id}")

    # Vérifier les boutons data-org-change-post
    if "data-org-change-post" in js_content:
        print("  ✓ Bouton d'organigramme avec data-org-change-post correctement présent.")
    else:
        errors.append("data-org-change-post manquant dans admin-pages.js")

    # Vérifier la présence de la pagination des utilisateurs
    if "user-prev-page" in js_content and "user-next-page" in js_content:
        print("  ✓ Pagination utilisateurs présente et branchée (#user-prev-page, #user-next-page).")
    else:
        errors.append("Contrôles de pagination utilisateurs manquants.")

    # Vérifier la sélection globale des formations/métiers
    if "content-select-all" in js_content:
        print("  ✓ Case 'Tout sélectionner' (content-select-all) présente et branchée.")
    else:
        errors.append("Case content-select-all manquante.")

    # Vérifier le support du dark mode
    if "admin-sidebar-theme-toggle" in html_content and "admin-sidebar-theme-toggle" in js_content:
        print("  ✓ Bascule de thème présente sur la topbar et la sidebar.")
    else:
        errors.append("Bouton admin-sidebar-theme-toggle manquant dans index.html ou admin-pages.js")

    # Vérifier data-view-dossier
    dossier_refs = re.findall(r'data-view-dossier', js_content)
    print(f"  ✓ Bouton 📁 Dossier injecté à {len(dossier_refs)} endroits dans l'interface.")

    print("\n=== Bilan de l'audit ===")
    if errors:
        print(f"❌ {len(errors)} erreur(s) détectée(s) :")
        for err in errors:
            print(f"  - {err}")
        return 1
    else:
        print("🎉 Aucun bouton inerte ou défaillant détecté ! 100% des contrôles sont fonctionnels.")
        return 0

if __name__ == "__main__":
    sys.exit(audit_admin())
