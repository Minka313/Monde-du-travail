# -*- coding: utf-8 -*-
"""
Compiler script for Communication, Marketing, Médias & Création Data Module.
Merges:
- communication_jobs_part1.py (DOMAINS + 23 jobs)
- communication_jobs_part2.py (21 jobs)
- communication_jobs_part3.py (21 jobs)
Total = 65 exhaustive, verified job profiles across 6 consolidated domains.
Generates: frontend/js/orientation-communication-data.js
"""

import json
import os
import sys

from communication_jobs_part1 import DOMAINS, JOBS_PART1
from communication_jobs_part2 import JOBS_PART2
from communication_jobs_part3 import JOBS_PART3

COMMUNICATION_PATHWAYS = [
    {
        "id": "publicite-strategie-marque",
        "name": "Filière Publicité & Stratégie de Marque",
        "icon": "🎯",
        "description": "De l'analyse d'insight sociologique à la création et au pilotage de campagnes de marques légendaires en agence ou chez l'annonceur.",
        "steps": [
            {"title": "Baccalauréat Général / Technologique", "level": "Bac", "duration": "3 ans"},
            {"title": "Bachelor / Licence en Communication, Publicité ou Marketing (ESP, Sup de Pub, ISCOM, BEM Dakar, Sup de Co)", "level": "Bac+3", "duration": "3 ans"},
            {"title": "Master Spécialisé / MBA en Stratégie de Marque, Publicité ou Planning Stratégique (CELSA, ESP, Sciences Po, ISM)", "level": "Bac+5", "duration": "2 ans"},
            {"title": "Postes : Chef de publicité, Planneur stratégique, Brand Manager, Directeur de clientèle, Directeur de création", "level": "Insertion & Évolution", "duration": "Carrière"}
        ]
    },
    {
        "id": "marketing-digital-performance",
        "name": "Filière Marketing Digital, Growth & E-commerce",
        "icon": "💻",
        "description": "Maîtrise de l'acquisition payante, du SEO, du CRM automatisé et de l'analyse data pour accélérer la croissance commerciale des entreprises.",
        "steps": [
            {"title": "Baccalauréat Général ou STMG", "level": "Bac", "duration": "3 ans"},
            {"title": "BUT MMI, Licence Pro E-commerce ou Bachelor Digital (IUT, ESP, ESD, BEM Dakar)", "level": "Bac+3", "duration": "3 ans"},
            {"title": "Master en Marketing Digital, Data Analytics & E-business (ESP, Dauphine, Audencia, Sup de Co Dakar)", "level": "Bac+5", "duration": "2 ans"},
            {"title": "Postes : Webmarketer, Social Ads Manager, Responsable E-commerce, Head of Acquisition, CMO", "level": "Insertion & Évolution", "duration": "Carrière"}
        ]
    },
    {
        "id": "creation-direction-artistique",
        "name": "Filière Création, Design Graphique & Direction Artistique",
        "icon": "🎨",
        "description": "L'alliance de la maîtrise plastique, de la typographie, des technologies visuelles (2D/3D/Vidéo) et du concept artistique pour sublimer l'image des marques.",
        "steps": [
            {"title": "Baccalauréat Général, STD2A ou Bac Pro Métiers d'Art", "level": "Bac", "duration": "3 ans"},
            {"title": "DN MADE Graphisme / Bachelor Design & Création Visuelle (Penninghen, Gobelins, Estienne, ENA Dakar)", "level": "Bac+3", "duration": "3 ans"},
            {"title": "Master Direction Artistique, Design de Marque ou Création Publicitaire (ESP, Gobelins, Sup de Pub, ECV)", "level": "Bac+5", "duration": "2 ans"},
            {"title": "Postes : Graphiste, Illustrateur, Directeur Artistique, Directeur de Création, Head of Design", "level": "Insertion & Évolution", "duration": "Carrière"}
        ]
    },
    {
        "id": "relations-publiques-corporate-rse",
        "name": "Filière Relations Publiques, Affaires Publiques & RSE",
        "icon": "📣",
        "description": "Préservation de la réputation, gestion de crise, relations presse, affaires publiques et communication d'engagement sociétal et environnemental.",
        "steps": [
            {"title": "Baccalauréat Général", "level": "Bac", "duration": "3 ans"},
            {"title": "Licence Information-Communication, Sciences Politiques ou Droit (CELSA, Sciences Po, Universités, CESTI UCAD)", "level": "Bac+3", "duration": "3 ans"},
            {"title": "Master Affaires Publiques, Communication de Crise ou RSE (Sciences Po, CELSA, ESP, BEM Dakar)", "level": "Bac+5", "duration": "2 ans"},
            {"title": "Postes : Attaché de presse, Chargé de relations publiques, Responsable RSE, Directeur de la Communication", "level": "Insertion & Évolution", "duration": "Carrière"}
        ]
    },
    {
        "id": "evenementiel-experience-hospitality",
        "name": "Filière Événementiel, Scénographie & Hospitality",
        "icon": "🎪",
        "description": "Conception et pilotage logistique de rassemblements marquants, congrès, salons professionnels, scénographies immersives et accueil VIP d'exception.",
        "steps": [
            {"title": "Baccalauréat Général ou STMG", "level": "Bac", "duration": "3 ans"},
            {"title": "BTS Tourisme, BTS SAM ou Bachelor Événementiel & Relations Publiques (ESP, EFAP, UGB Saint-Louis)", "level": "Bac+3", "duration": "3 ans"},
            {"title": "Master Management Événementiel, Tourisme d'Affaires ou Hospitality (ESP, Glion, Institut Paul Bocuse, BEM Dakar)", "level": "Bac+5", "duration": "2 ans"},
            {"title": "Postes : Event Coordinator, Event Manager, Régisseur Général, Scénographe, Directeur d'Agence Événementielle", "level": "Insertion & Évolution", "duration": "Carrière"}
        ]
    }
]

def compile_data():
    all_jobs = JOBS_PART1 + JOBS_PART2 + JOBS_PART3
    print(f"Total jobs to compile: {len(all_jobs)}")

    # 1. Validation de l'unicité des IDs et des slugs
    seen_ids = set()
    seen_slugs = set()
    domain_counts = {d["id"]: 0 for d in DOMAINS}

    domain_map = {d["id"]: d["name"] for d in DOMAINS}
    domain_icons = {d["id"]: d["icon"] for d in DOMAINS}

    for job in all_jobs:
        job_id = job.get("id")
        job_slug = job.get("slug")
        domain_id = job.get("domainId")

        if not job_id or not job_slug:
            raise ValueError(f"Job missing id or slug: {job}")

        if job_id in seen_ids:
            raise ValueError(f"DUPLICATE JOB ID FOUND: {job_id}")
        seen_ids.add(job_id)

        if job_slug in seen_slugs:
            raise ValueError(f"DUPLICATE JOB SLUG FOUND: {job_slug}")
        seen_slugs.add(job_slug)

        if domain_id not in domain_counts:
            raise ValueError(f"Job '{job_id}' references unknown domainId: {domain_id}")
        domain_counts[domain_id] += 1

        # Harmonize salary / salaries
        if "salary" in job and "salaries" not in job:
            job["salaries"] = job["salary"]
        elif "salaries" in job and "salary" not in job:
            job["salary"] = job["salaries"]

        # Harmonize description / longDescription
        if "longDescription" in job and "description" not in job:
            job["description"] = job["longDescription"]
        elif "description" in job and "longDescription" not in job:
            job["longDescription"] = job["description"]

        # Harmonize domain and family names
        if not job.get("domain"):
            job["domain"] = domain_map.get(domain_id, "")
        if not job.get("familyName"):
            job["familyName"] = "Communication, Marketing, Médias & Création"
        if not job.get("icon"):
            job["icon"] = domain_icons.get(domain_id, "📣")

        # Check salaries
        salaries = job.get("salaries", {})
        if "france" not in salaries or "senegal" not in salaries:
            raise ValueError(f"Job '{job_id}' missing France or Senegal salary grounding!")

    print("\n--- Domain breakdown ---")
    for d in DOMAINS:
        print(f"[{d['order']}] {d['name']} ({d['id']}): {domain_counts[d['id']]} jobs")

    # Mise à jour des counts dans DOMAINS
    domains_with_counts = []
    for d in DOMAINS:
        d_copy = dict(d)
        d_copy["jobsCount"] = domain_counts[d["id"]]
        domains_with_counts.append(d_copy)

    # 2. Génération du fichier JS
    js_content = f"""/**
 * MODULE OFFICIEL COMMUNICATION, MARKETING, MÉDIAS & CRÉATION
 * Base de données exhaustive : 6 Domaines Consolidés • {len(all_jobs)} Fiches Métiers Haute Profondeur
 * Double ancrage France (€ brut/an) / Sénégal (FCFA net/mois)
 * Sources Principales de référence :
 * - École Supérieure de Publicité (ESP Métiers) : https://espub.org/metiers/ (94 profils vérifiés)
 * - Studyrama Fiches Métiers Communication : https://www.studyrama.com/formations/fiches-metiers/communication
 * Architecture optimisée : 0 doublons, consolidation sémantique, intégration Boussole & Recherche
 */

(function (root, factory) {{
    if (typeof define === 'function' && define.amd) {{
        define([], factory);
    }} else if (typeof module === 'object' && module.exports) {{
        const exported = factory();
        module.exports = exported;
        if (typeof global !== 'undefined') global.OrientationCommunicationData = exported;
        if (typeof window !== 'undefined') window.OrientationCommunicationData = exported;
    }} else {{
        root.OrientationCommunicationData = factory();
    }}
}}(typeof self !== 'undefined' ? self : this, function () {{
    'use strict';

    const DOMAINS = {json.dumps(domains_with_counts, indent=4, ensure_ascii=False)};

    const JOBS = {json.dumps(all_jobs, indent=4, ensure_ascii=False)};

    const COMMUNICATION_PATHWAYS = {json.dumps(COMMUNICATION_PATHWAYS, indent=4, ensure_ascii=False)};

    return {{
        getDomains: function() {{
            return DOMAINS.map(function(d) {{
                return Object.assign({{}}, d, {{
                    jobsCount: d.jobsCount || JOBS.filter(function(j) {{ return j.domainId === d.id; }}).length
                }});
            }});
        }},
        getDomainById: function(id) {{
            return DOMAINS.find(function(d) {{ return d.id === id; }});
        }},
        getJobs: function() {{
            return JOBS;
        }},
        getJobById: function(id) {{
            return JOBS.find(function(j) {{ return j.id === id; }});
        }},
        getJobBySlug: function(slug) {{
            return JOBS.find(function(j) {{ return j.slug === slug || j.id === slug; }});
        }},
        getJobsByDomain: function(domainId) {{
            return JOBS.filter(function(j) {{ return j.domainId === domainId; }});
        }},
        getPathways: function() {{
            return COMMUNICATION_PATHWAYS;
        }},
        getCommunicationPathways: function() {{
            return COMMUNICATION_PATHWAYS;
        }}
    }};
}}));
"""

    output_path = os.path.join(os.path.dirname(__file__), "..", "frontend", "js", "orientation-communication-data.js")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(js_content)

    print(f"\nSuccessfully generated: {output_path}")
    print(f"File size: {os.path.getsize(output_path)} bytes")

if __name__ == "__main__":
    compile_data()
