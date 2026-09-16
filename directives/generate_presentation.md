# SOP : Génération Déterministe des Documents de Présentation Officielle

## Objectif
Générer et synchroniser les documents exécutifs et supports de présentation de la plateforme « Le Monde du Travail » en formats bureautiques (.docx, .odt, .pdf, .html, .md) directement dans le dossier Documents de l'utilisateur (`/home/khadimoul-barham/Documents`) et dans le dossier versionné du projet (`documents/`).

## Entrées Requises
- Captures d'écran haute résolution dans `presentation/images/` :
  - `screenshot_home.png`
  - `screenshot_about.png`
  - `screenshot_jobs.png`
  - `screenshot_formations.png`
  - `screenshot_blog.png`
  - `screenshot_login.png`
  - `screenshot_admin_login.png`
- Contenu officiel de présentation incluant :
  - L'URL de production : `https://monde-du-travail.vercel.app`
  - L'analyse de l'architecture technique (Supabase PostgreSQL + Vercel Serverless Edge)
  - Le comparatif économique (Free Tier à 0 FCFA vs Pro à ~27 675 FCFA/mois)
  - Les 7 perspectives d'évolution (Orientation, Ressources, Mentorat, Simulations d'entretien, Progression, Tableau de bord, IA)
  - La conclusion officielle avec la vision d'impact.

## Scripts & Outils Associés
- Script d'exécution : `execution/generate_presentation_docs.py`
- Moteur de conversion : `libreoffice --headless` pour l'encapsulation native OpenDocument et Microsoft Word (.docx).

## Sorties Attendues
- `/home/khadimoul-barham/Documents/` :
  - `Presentation_Le_Monde_du_Travail.docx`
  - `Presentation_Le_Monde_du_Travail.pdf`
  - `Presentation_Le_Monde_du_Travail.odt`
  - Dossier `Presentation_Monde_du_Travail/` contenant l'ensemble des formats et le package autonome.
- `documents/` (dans le projet) :
  - Formats synchronisés et versionnés sur Git.
