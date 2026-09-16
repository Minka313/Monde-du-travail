#!/usr/bin/env python3
"""Deterministic Generator for Official Presentation Documents.

This module automates the compilation, rendering, and conversion of the
official presentation for "Le Monde du Travail" into Word (.docx), OpenDocument (.odt),
PDF (.pdf), HTML, and Markdown formats.

Author: Antigravity Staff Engineer
Version: 1.0.0
"""

import base64
import os
import shutil
import subprocess
from pathlib import Path
from typing import Dict, List, Optional


class PresentationDocumentGenerator:
    """Encapsulates the generation of multi-format presentation documents."""

    def __init__(self, workspace_dir: Path, user_documents_dir: Path) -> None:
        """Initialize generator paths.

        Args:
            workspace_dir: Absolute path to the project root directory.
            user_documents_dir: Absolute path to the user's system Documents directory.
        """
        self.workspace_dir = workspace_dir
        self.user_documents_dir = user_documents_dir
        self.images_src_dir = workspace_dir / "presentation" / "images"
        self.project_docs_dir = workspace_dir / "documents"
        self.user_package_dir = user_documents_dir / "Presentation_Monde_du_Travail"

    def _read_image_base64(self, filename: str) -> str:
        """Read an image file and return its base64 encoded data URI.

        Args:
            filename: Name of the image file in the presentation images directory.

        Returns:
            Data URI string (data:image/png;base64,...).
        """
        img_path = self.images_src_dir / filename
        if not img_path.exists():
            print(f"Warning: Image {img_path} not found.")
            return ""
        with open(img_path, "rb") as img_file:
            encoded = base64.b64encode(img_file.read()).decode("utf-8")
            return f"data:image/png;base64,{encoded}"

    def build_printable_html(self) -> str:
        """Construct a high-fidelity, printable HTML document with embedded images.

        Returns:
            Complete HTML string formatted for Word/ODT/PDF conversion.
        """
        img_home = self._read_image_base64("screenshot_home.png")
        img_about = self._read_image_base64("screenshot_about.png")
        img_jobs = self._read_image_base64("screenshot_jobs.png")
        img_formations = self._read_image_base64("screenshot_formations.png")
        img_blog = self._read_image_base64("screenshot_blog.png")
        img_login = self._read_image_base64("screenshot_login.png")
        img_admin = self._read_image_base64("screenshot_admin_login.png")

        html_content = f"""<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>Présentation Officielle — Le Monde du Travail</title>
<style>
    @page {{
        size: A4;
        margin: 20mm 15mm 20mm 15mm;
    }}
    body {{
        font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
        color: #1e293b;
        background-color: #ffffff;
        line-height: 1.6;
        font-size: 11pt;
        margin: 0;
        padding: 0;
    }}
    .cover-page {{
        text-align: center;
        padding: 60px 20px 40px 20px;
        page-break-after: always;
    }}
    .badge-primary {{
        display: inline-block;
        background-color: #2563eb;
        color: #ffffff;
        padding: 6px 14px;
        font-size: 10pt;
        font-weight: bold;
        border-radius: 20px;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 25px;
    }}
    h1.doc-title {{
        font-size: 32pt;
        color: #0f172a;
        margin: 0 0 10px 0;
        font-weight: 800;
        letter-spacing: -0.5px;
    }}
    .doc-subtitle {{
        font-size: 18pt;
        color: #2563eb;
        font-weight: 600;
        font-style: italic;
        margin-bottom: 30px;
    }}
    .doc-tagline {{
        font-size: 13pt;
        color: #475569;
        max-width: 650px;
        margin: 0 auto 40px auto;
        line-height: 1.5;
    }}
    .meta-box {{
        background-color: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        padding: 20px;
        max-width: 480px;
        margin: 0 auto 30px auto;
        text-align: left;
    }}
    .meta-item {{
        margin-bottom: 8px;
        font-size: 10pt;
    }}
    .meta-label {{
        font-weight: bold;
        color: #334155;
    }}
    .meta-value {{
        color: #0f172a;
    }}
    h2 {{
        font-size: 18pt;
        color: #0f172a;
        border-bottom: 2px solid #2563eb;
        padding-bottom: 6px;
        margin-top: 35px;
        margin-bottom: 15px;
        page-break-after: avoid;
    }}
    h3 {{
        font-size: 13pt;
        color: #1e3a8a;
        margin-top: 25px;
        margin-bottom: 10px;
        page-break-after: avoid;
    }}
    p {{
        margin-bottom: 12px;
        text-align: justify;
    }}
    .callout {{
        background-color: #eff6ff;
        border-left: 4px solid #2563eb;
        padding: 14px 18px;
        margin: 20px 0;
        border-radius: 0 8px 8px 0;
    }}
    .callout-success {{
        background-color: #ecfdf5;
        border-left: 4px solid #10b981;
    }}
    .callout-title {{
        font-weight: bold;
        font-size: 11pt;
        margin-bottom: 4px;
        color: #0f172a;
    }}
    table {{
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
        font-size: 10pt;
    }}
    th, td {{
        border: 1px solid #cbd5e1;
        padding: 10px 12px;
        text-align: left;
    }}
    th {{
        background-color: #f1f5f9;
        color: #0f172a;
        font-weight: bold;
    }}
    tr:nth-child(even) {{
        background-color: #f8fafc;
    }}
    .img-container {{
        text-align: center;
        margin: 25px 0;
        page-break-inside: avoid;
    }}
    .doc-img {{
        width: 100%;
        max-width: 650px;
        border-radius: 8px;
        border: 1px solid #cbd5e1;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }}
    .img-caption {{
        font-size: 9pt;
        color: #64748b;
        font-style: italic;
        margin-top: 6px;
    }}
    ul, ol {{
        margin: 10px 0 15px 25px;
    }}
    li {{
        margin-bottom: 6px;
    }}
    .page-break {{
        page-break-before: always;
    }}
    .conclusion-box {{
        background: linear-gradient(135deg, #1e3a8a, #0f172a);
        color: #ffffff;
        padding: 25px;
        border-radius: 12px;
        margin: 30px 0;
    }}
    .conclusion-box h2, .conclusion-box h3 {{
        color: #ffffff;
        border-bottom-color: #60a5fa;
    }}
    .conclusion-box p {{
        color: #e2e8f0;
    }}
</style>
</head>
<body>

<!-- PAGE DE GARDE -->
<div class="cover-page">
    <div class="badge-primary">Document Officiel de Présentation</div>
    <h1 class="doc-title">LE MONDE DU TRAVAIL</h1>
    <div class="doc-subtitle">« Demain se prépare aujourd'hui. »</div>
    <div class="doc-tagline">
        Plateforme Numérique Intégrée d'Orientation, de Formation et d'Émancipation Professionnelle pour la Jeunesse et les Membres du Club.
    </div>
    
    <div class="meta-box">
        <div class="meta-item"><span class="meta-label">Site Web en Ligne :</span> <span class="meta-value">https://monde-du-travail.vercel.app</span></div>
        <div class="meta-item"><span class="meta-label">Portail Administration :</span> <span class="meta-value">https://monde-du-travail.vercel.app/admin</span></div>
        <div class="meta-item"><span class="meta-label">Public Cible :</span> <span class="meta-value">Membres du Club, Étudiants, Jeunes Diplômés & Professionnels</span></div>
        <div class="meta-item"><span class="meta-label">Infrastructure :</span> <span class="meta-value">Vercel Serverless Edge & Supabase Cloud PostgreSQL</span></div>
        <div class="meta-item"><span class="meta-label">Date d'Édition :</span> <span class="meta-value">16 Septembre 2026</span></div>
        <div class="meta-item"><span class="meta-label">Statut Actuel :</span> <span class="meta-value">100% Déployé & Opérationnel en Production</span></div>
    </div>
</div>

<!-- SECTION 1 : VISION & AMBITION -->
<h2>1. Vision & Raison d'Être du Projet</h2>

<p>
Dans un contexte où le marché de l'emploi évolue avec une rapidité sans précédent, les jeunes diplômés, étudiants et personnes en reconversion font face à trois défis majeurs :
</p>

<ul>
    <li><strong>Le déficit d'orientation concrète :</strong> De nombreuses filières académiques restent déconnectées des attentes réelles des recruteurs et des compétences opérationnelles recherchées.</li>
    <li><strong>L'opacité des métiers émergents :</strong> Les opportunités dans le numérique, la transition énergétique, l'artisanat moderne et l'entrepreneuriat manquent de visibilité structurée.</li>
    <li><strong>L'isolement et l'absence de réseau :</strong> Les jeunes manquent d'espaces bienveillants pour échanger, solliciter des conseils et bénéficier du parrainage de professionnels aguerris.</li>
</ul>

<div class="callout callout-success">
    <div class="callout-title">Notre Réponse Fondatrice</div>
    <strong>Le Monde du Travail</strong> a été créé pour transformer cette dynamique. En combinant <em>Orientation + Formation + Information + Communauté + Technologie</em>, la plateforme offre un tremplin concret, accessible à tous, pour bâtir une trajectoire professionnelle solide dès aujourd'hui.
</div>

<div class="img-container">
    <img src="{img_home}" class="doc-img" alt="Page d'accueil Le Monde du Travail">
    <div class="img-caption">Figure 1 : Interface d'accueil de la plateforme en production (https://monde-du-travail.vercel.app)</div>
</div>

<div class="page-break"></div>

<!-- SECTION 2 : FONCTIONNALITÉS DU SITE -->
<h2>2. Fonctionnalités Actuellement Déployées</h2>

<p>
La plateforme propose aujourd'hui un écosystème complet de modules interconnectés, répondant chacun à un besoin spécifique du parcours des membres :
</p>

<h3>2.1. Fiches Métiers Détaillées & Guide d'Orientation</h3>
<p>
Un répertoire riche présentant les métiers clés du marché moderne. Chaque fiche comprend : la description du rôle, les missions quotidiennes, les compétences techniques requises, les soft skills recommandées, les perspectives salariales indicatives et les voies de formation pour y parvenir.
</p>

<div class="img-container">
    <img src="{img_jobs}" class="doc-img" alt="Catalogue des Métiers">
    <div class="img-caption">Figure 2 : Moteur de recherche et fiches descriptives des métiers</div>
</div>

<h3>2.2. Catalogue de Formations Qualifiantes</h3>
<p>
Une sélection de programmes de formation professionnelle ciblés, conçus pour combler le fossé entre théorie et pratique : compétences numériques, bureautique avancée, gestion de projet, communication et leadership.
</p>

<div class="img-container">
    <img src="{img_formations}" class="doc-img" alt="Catalogue des Formations">
    <div class="img-caption">Figure 3 : Catalogue des formations certifiantes et professionnalisantes</div>
</div>

<div class="page-break"></div>

<h3>2.3. Blog Professionnel & Veille sur le Recrutement</h3>
<p>
Des articles pratiques rédigés pour accompagner les jeunes : comment réussir son CV, préparer un entretien d'embauche, négocier son premier contrat, comprendre les attentes des entreprises et développer sa posture professionnelle.
</p>

<div class="img-container">
    <img src="{img_blog}" class="doc-img" alt="Blog et Actualités">
    <div class="img-caption">Figure 4 : Le blog professionnel et les guides carrière</div>
</div>

<h3>2.4. Espace Membre, Connexion & Adhésion</h3>
<p>
Chaque membre du club bénéficie d'un compte sécurisé lui permettant d'accéder aux fonctionnalités avancées, d'enregistrer ses préférences, de participer aux échanges du forum et de suivre la vie de l'association.
</p>

<div class="img-container">
    <img src="{img_login}" class="doc-img" alt="Portail d'Adhésion et Connexion">
    <div class="img-caption">Figure 5 : Portail d'adhésion et de connexion sécurisée</div>
</div>

<div class="page-break"></div>

<h3>2.5. Espace d'Administration & Gestion du Bureau du Club</h3>
<p>
La console d'administration offre un tableau de bord complet pour piloter la plateforme. Récemment enrichie d'une section <strong>« Organisation & Fonctionnement »</strong>, elle permet à l'Ultra Admin de gérer le bureau du club, d'attribuer des postes associatifs et de personnaliser les missions de chaque responsable.
</p>

<div class="img-container">
    <img src="{img_admin}" class="doc-img" alt="Console Administration et Bureau du Club">
    <div class="img-caption">Figure 6 : Console d'administration sécurisée avec gestion de l'organigramme</div>
</div>

<!-- SECTION 3 : SOCLE TECHNIQUE -->
<h2>3. Architecture Technique : Vercel & Supabase</h2>

<p>
Le choix de l'architecture technique a été guidé par trois impératifs : <strong>la robustesse industrielle</strong>, <strong>la rapidité de chargement</strong> et <strong>la maîtrise absolue des coûts de démarrage</strong>.
</p>

<h3>3.1. Vercel (Hébergement Cloud & Edge Serverless)</h3>
<ul>
    <li><strong>Réseau CDN Mondial (Edge Network) :</strong> Le site et ses ressources statiques sont distribués sur des dizaines de serveurs à travers le globe, garantissant un affichage instantané tant au Sénégal qu'à l'international.</li>
    <li><strong>Architecture Serverless Node.js :</strong> L'API backend s'exécute à la demande sans serveur physique continu à administrer, éliminant les risques de panne serveur non supervisée.</li>
    <li><strong>Intégration & Déploiement Continus (CI/CD) :</strong> Chaque amélioration validée sur le dépôt Git déclenche un déploiement automatique en production en moins de 60 secondes.</li>
    <li><strong>Sécurité Maximale :</strong> Certificats SSL HTTPS gérés automatiquement et protection native contre les attaques volumétriques (DDoS).</li>
</ul>

<h3>3.2. Supabase (Base de Données PostgreSQL Managée)</h3>
<ul>
    <li><strong>Puissance de PostgreSQL :</strong> Intégrité relationnelle stricte (ACID), requêtes optimisées et fiabilité éprouvée.</li>
    <li><strong>Prisma ORM :</strong> Modélisation typée et sécurisée dans le code, empêchant structurellement les failles par injection SQL.</li>
    <li><strong>Sécurité Granulaire (Row-Level Security - RLS) :</strong> Contrôle d'accès strict niveau base de données selon les rôles des utilisateurs.</li>
    <li><strong>Sauvegardes Automatiques :</strong> Préservation continue des données des membres et de l'association.</li>
</ul>

<div class="page-break"></div>

<!-- SECTION 4 : ANALYSE FINANCIÈRE & FCFA -->
<h2>4. Analyse Économique & Conversion en FCFA</h2>

<div class="callout">
    <div class="callout-title">Taux de Conversion Appliqué</div>
    Tous les tarifs internationaux sont convertis sur la base officielle de <strong>1 USD = 615 FCFA</strong>.
</div>

<h3>4.1. L'Offre Gratuite Actuelle (0 FCFA / mois)</h3>
<p>
À ce jour, la plateforme fonctionne <strong>intégralement sur les formules gratuites</strong> (Free Tier) de Vercel et de Supabase. Cela représente un avantage stratégique déterminant pour le club :
</p>

<ul>
    <li><strong>Vercel Hobby :</strong> 100 Go de bande passante mensuelle, nombre illimité de déploiements, exécutions serverless largement suffisantes pour plusieurs dizaines de milliers de requêtes quotidiennes.</li>
    <li><strong>Supabase Free Tier :</strong> 500 Mo d'espace de stockage PostgreSQL (soit plus de 50 000 profils membres complets), 1 Go de fichiers médias, et jusqu'à 50 000 utilisateurs actifs par mois.</li>
    <li><strong>Impact Budgétaire :</strong> <strong>0 FCFA / mois</strong>. Le club ne débourse aucun centime pour faire tourner la plateforme en phase de lancement et de test.</li>
</ul>

<h3>4.2. Quand Faudra-t-il Passer à un Abonnement Payant ?</h3>
<p>
Le passage à une formule payante ne sera requis que si le club franchit un cap de croissance majeur :
</p>
<ol>
    <li>Si le nombre de membres et de contenus dépasse les 500 Mo de base de données relationnelle.</li>
    <li>Si le trafic mensuel dépasse les 100 Go de données transférées.</li>
    <li>Si le club requiert une restauration continue de la base à la seconde près (Point-in-Time Recovery).</li>
</ol>

<h3>4.3. Tableau Comparatif & Tarification en FCFA</h3>

<table>
    <thead>
        <tr>
            <th>Composant Technique</th>
            <th>Formule Actuelle (Free)</th>
            <th>Formule Pro (Évolution)</th>
            <th>Coût Mensuel USD</th>
            <th>Coût Mensuel en FCFA</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Vercel</strong> (Front-end & API Serverless)</td>
            <td>Hobby (Gratuit)</td>
            <td>Vercel Pro</td>
            <td>$20 / mois</td>
            <td><strong>~12 300 FCFA / mois</strong></td>
        </tr>
        <tr>
            <td><strong>Supabase</strong> (PostgreSQL Managé)</td>
            <td>Free Tier (Gratuit)</td>
            <td>Supabase Pro</td>
            <td>$25 / mois</td>
            <td><strong>~15 375 FCFA / mois</strong></td>
        </tr>
        <tr style="background-color: #f1f5f9; font-weight: bold;">
            <td>TOTAL INFRASTRUCTURE</td>
            <td>0 FCFA / mois</td>
            <td>Pack Pro Complet</td>
            <td>$45 / mois</td>
            <td><strong>~27 675 FCFA / mois</strong><br><small>(~332 100 FCFA / an)</small></td>
        </tr>
    </tbody>
</table>

<p>
<em>À titre de comparaison :</em> La location d'un serveur dédié classique avec infogérance dans un centre de données traditionnel coûterait entre <strong>150 000 FCFA et 300 000 FCFA par mois</strong>, sans offrir la redondance mondiale ni l'évolutivité automatique de notre architecture actuelle.
</p>

<div class="page-break"></div>

<!-- SECTION 5 : PERSPECTIVES D'ÉVOLUTION -->
<h2>5. Perspectives d'Évolution</h2>

<p>
Plusieurs fonctionnalités stratégiques peuvent être développées progressivement pour enrichir la plateforme :
</p>

<h3>🎯 Orientation personnalisée</h3>
<p>
Permettre à un jeune de répondre à un questionnaire interactif en ligne et de recevoir des pistes d'orientation ciblées et adaptées à ses centres d'intérêt et compétences.
</p>

<h3>📚 Bibliothèque de ressources</h3>
<p>
Créer un espace documentaire unifié regroupant :
</p>
<ul>
    <li>guides méthodologiques ;</li>
    <li>documents et modèles téléchargeables (CV, lettres de motivation) ;</li>
    <li>vidéos et tutoriels de formation ;</li>
    <li>ressources éducatives certifiées ;</li>
    <li>liens utiles vers les organismes professionnels.</li>
</ul>

<h3>🧑🏾‍🏫 Mentorat & Parrainage</h3>
<p>
Mettre en relation directe les jeunes avec des professionnels expérimentés et des alumni du club pour un accompagnement individualisé.
</p>

<h3>📝 Simulations d'entretien</h3>
<p>
Créer des exercices pratiques et des ateliers filmés permettant aux candidats de se préparer sereinement aux questions pièges des recruteurs.
</p>

<h3>🏆 Système de progression & Gamification</h3>
<p>
Ajouter un système de motivation stimulant :
</p>
<ul>
    <li>badges de compétences acquis ;</li>
    <li>niveaux d'avancement ;</li>
    <li>certificats d'achèvement de parcours ;</li>
    <li>suivi dynamique de la progression dans les formations.</li>
</ul>

<h3>📊 Tableau de bord individuel</h3>
<p>
Permettre aux membres de visualiser en un coup d'œil leur progression, leurs candidatures, leurs formations suivies et leurs objectifs.
</p>

<h3>🤖 Intelligence artificielle</h3>
<p>
À plus long terme, l'IA pourrait intervenir comme accélérateur d'insertion pour :
</p>
<ul>
    <li>l'orientation et la recommandation intelligente de filières ;</li>
    <li>la recherche d'informations personnalisées ;</li>
    <li>la préparation interactive aux entretiens via un agent conversationnel RH ;</li>
    <li>la personnalisation dynamique des parcours d'apprentissage ;</li>
    <li>l'analyse sémantique des compétences par rapport aux offres du marché.</li>
</ul>

<div class="page-break"></div>

<!-- SECTION 6 : CONCLUSION OFFICIELLE -->
<div class="conclusion-box">
    <h2>27. Conclusion Officielle</h2>
    
    <p style="font-size: 13pt; font-weight: bold; color: #ffffff;">
        Le Monde du Travail n'est pas simplement un site web.
    </p>
    
    <p>
        C'est une première étape vers la création d'un écosystème numérique dédié à la préparation professionnelle des jeunes.
    </p>
    
    <p>
        Le projet combine de façon inédite :<br>
        <span style="font-size: 12pt; font-weight: 600; color: #93c5fd;">Orientation + Formation + Information + Communauté + Technologie</span>
    </p>
    
    <p>
        Son infrastructure actuelle permet de commencer avec des coûts très faibles grâce aux offres gratuites de services comme Supabase et Vercel.
    </p>
    
    <p>
        L'objectif n'est pas de construire immédiatement une plateforme gigantesque.
    </p>
    
    <p style="font-size: 12pt; font-weight: bold; color: #60a5fa;">
        L'objectif est de :<br>
        commencer → tester → recueillir les besoins → améliorer → développer la communauté → faire évoluer l'infrastructure.
    </p>
    
    <hr style="border-color: rgba(255,255,255,0.2); margin: 20px 0;">
    
    <p style="font-size: 13pt; color: #ffffff;">
        <strong>Notre vision :</strong><br>
        <em>Préparer aujourd'hui les professionnels et les citoyens qui construiront demain.</em>
    </p>
    
    <div style="margin-top: 25px; text-align: right;">
        <span style="font-size: 14pt; font-weight: 800; letter-spacing: 1px; color: #ffffff;">LE MONDE DU TRAVAIL</span><br>
        <span style="font-size: 11pt; color: #93c5fd; font-style: italic;">Demain se prépare aujourd'hui.</span>
    </div>
</div>

</body>
</html>
"""
        return html_content

    def generate_all(self) -> Dict[str, str]:
        """Generate all document formats and place them in the target directories.

        Returns:
            Dict mapping generated format names to file paths.
        """
        # Ensure target directories exist
        self.user_documents_dir.mkdir(parents=True, exist_ok=True)
        self.user_package_dir.mkdir(parents=True, exist_ok=True)
        self.project_docs_dir.mkdir(parents=True, exist_ok=True)
        (self.user_package_dir / "images").mkdir(parents=True, exist_ok=True)
        (self.project_docs_dir / "images").mkdir(parents=True, exist_ok=True)

        print("1. Construction du document HTML haute fidélité avec images embarquées...")
        printable_html = self.build_printable_html()
        temp_html_path = self.workspace_dir / ".tmp" / "temp_printable_presentation.html"
        temp_html_path.parent.mkdir(parents=True, exist_ok=True)
        with open(temp_html_path, "w", encoding="utf-8") as f:
            f.write(printable_html)

        print("2. Conversion OpenDocument (.odt) avec LibreOffice...")
        subprocess.run(
            [
                "libreoffice",
                "--headless",
                "--convert-to",
                "odt",
                str(temp_html_path),
                "--outdir",
                str(self.workspace_dir / ".tmp"),
            ],
            check=True,
        )
        temp_odt_path = self.workspace_dir / ".tmp" / "temp_printable_presentation.odt"

        print("3. Conversion Microsoft Word (.docx) avec LibreOffice...")
        subprocess.run(
            [
                "libreoffice",
                "--headless",
                "--convert-to",
                "docx",
                str(temp_odt_path),
                "--outdir",
                str(self.workspace_dir / ".tmp"),
            ],
            check=True,
        )
        temp_docx_path = self.workspace_dir / ".tmp" / "temp_printable_presentation.docx"

        print("4. Conversion PDF haute définition (.pdf) avec LibreOffice...")
        subprocess.run(
            [
                "libreoffice",
                "--headless",
                "--convert-to",
                "pdf",
                str(temp_odt_path),
                "--outdir",
                str(self.workspace_dir / ".tmp"),
            ],
            check=True,
        )
        temp_pdf_path = self.workspace_dir / ".tmp" / "temp_printable_presentation.pdf"

        # Copy images to package directories
        print("5. Copie des captures d'écran haute résolution...")
        for img in self.images_src_dir.glob("*.png"):
            shutil.copy2(img, self.user_package_dir / "images" / img.name)
            shutil.copy2(img, self.project_docs_dir / "images" / img.name)

        # Copy interactive web presentation
        src_interactive = self.workspace_dir / "presentation" / "index.html"
        if src_interactive.exists():
            shutil.copy2(src_interactive, self.user_package_dir / "Presentation_Interactive.html")
            shutil.copy2(src_interactive, self.project_docs_dir / "Presentation_Interactive.html")

        # Copy Markdown presentation
        src_markdown = Path(
            "/home/khadimoul-barham/.gemini/antigravity-ide/brain/efc1e973-c832-488a-bf65-91062b6e3a0f/presentation_le_monde_du_travail.md"
        )
        if src_markdown.exists():
            shutil.copy2(src_markdown, self.user_documents_dir / "Presentation_Le_Monde_du_Travail.md")
            shutil.copy2(src_markdown, self.user_package_dir / "Presentation_Le_Monde_du_Travail.md")
            shutil.copy2(src_markdown, self.project_docs_dir / "Presentation_Le_Monde_du_Travail.md")

        # Copy generated docx, odt, pdf to User Documents
        print("6. Déploiement des livrables dans ~/Documents et ./documents...")
        target_docx_user = self.user_documents_dir / "Presentation_Le_Monde_du_Travail.docx"
        target_pdf_user = self.user_documents_dir / "Presentation_Le_Monde_du_Travail.pdf"
        target_odt_user = self.user_documents_dir / "Presentation_Le_Monde_du_Travail.odt"

        shutil.copy2(temp_docx_path, target_docx_user)
        shutil.copy2(temp_pdf_path, target_pdf_user)
        shutil.copy2(temp_odt_path, target_odt_user)

        # Also copy into user package folder
        shutil.copy2(temp_docx_path, self.user_package_dir / "Presentation_Le_Monde_du_Travail.docx")
        shutil.copy2(temp_pdf_path, self.user_package_dir / "Presentation_Le_Monde_du_Travail.pdf")
        shutil.copy2(temp_odt_path, self.user_package_dir / "Presentation_Le_Monde_du_Travail.odt")
        shutil.copy2(temp_html_path, self.user_package_dir / "Presentation_Imprimable.html")

        # Also copy into workspace documents folder
        shutil.copy2(temp_docx_path, self.project_docs_dir / "Presentation_Le_Monde_du_Travail.docx")
        shutil.copy2(temp_pdf_path, self.project_docs_dir / "Presentation_Le_Monde_du_Travail.pdf")
        shutil.copy2(temp_odt_path, self.project_docs_dir / "Presentation_Le_Monde_du_Travail.odt")
        shutil.copy2(temp_html_path, self.project_docs_dir / "Presentation_Imprimable.html")

        # Clean temp
        temp_html_path.unlink(missing_ok=True)
        temp_odt_path.unlink(missing_ok=True)
        temp_docx_path.unlink(missing_ok=True)
        temp_pdf_path.unlink(missing_ok=True)

        print("Terminé avec succès !")
        return {
            "docx": str(target_docx_user),
            "pdf": str(target_pdf_user),
            "odt": str(target_odt_user),
            "package_dir": str(self.user_package_dir),
            "project_docs": str(self.project_docs_dir),
        }


def main() -> None:
    workspace_dir = Path("/home/khadimoul-barham/Mes sites/Monde-du-travail")
    user_documents_dir = Path("/home/khadimoul-barham/Documents")

    generator = PresentationDocumentGenerator(workspace_dir, user_documents_dir)
    results = generator.generate_all()

    for k, v in results.items():
        print(f"- {k}: {v}")


if __name__ == "__main__":
    main()
