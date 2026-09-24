#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
COMPILATEUR DU MODULE DE DONNÉES :
🌱 ENVIRONNEMENT, ÉCOLOGIE & DÉVELOPPEMENT DURABLE (18 Métiers • 6 Domaines)
Source Principale : Onisep (04/11/2025)

Génère le module UMD prêt pour la production :
- frontend/js/orientation-environment-data.js
"""

import json
import os
import sys

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, BASE_DIR)

from environment_jobs_part1 import DOMAINS, ENVIRONMENT_PATHWAYS, JOBS as JOBS_PART1
from environment_jobs_part2 import JOBS_PART2
from environment_jobs_part3 import JOBS_PART3

ALL_JOBS = JOBS_PART1 + JOBS_PART2 + JOBS_PART3

def normalize_job(job):
    """Garantit la conformité stricte de chaque champ au modèle de données et aux composants d'affichage UI."""
    j = dict(job)
    
    j["familyId"] = "environnement-developpement-durable"
    j["familyName"] = "Environnement, Écologie & Développement durable"
    if not j.get("slug"):
        j["slug"] = j["id"]
    
    # 1. Descriptions croisées
    if "shortDescription" not in j and "summary" in j:
        j["shortDescription"] = j["summary"]
    elif "summary" not in j and "shortDescription" in j:
        j["summary"] = j["shortDescription"]
        
    if "longDescription" not in j:
        missions_text = " ".join(j.get("missions", []))
        j["longDescription"] = f"{j.get('summary', '')} {missions_text}".strip()
    if "description" not in j:
        j["description"] = j["longDescription"]

    # 2. Niveau d'études
    if "level" in j and "studyLevel" not in j:
        j["studyLevel"] = j["level"]
    elif "studyLevel" in j and "level" not in j:
        j["level"] = j["studyLevel"]

    # 3. Compétences croisées (technical/hard, human/soft)
    if "skills" in j and isinstance(j["skills"], dict):
        skills = dict(j["skills"])
        if "hard" not in skills and "technical" in skills:
            skills["hard"] = skills["technical"]
        if "soft" not in skills and "human" in skills:
            skills["soft"] = skills["human"]
        if "hard" in skills and "technical" not in skills:
            skills["technical"] = skills["hard"]
        if "soft" in skills and "human" not in skills:
            skills["human"] = skills["soft"]
        j["skills"] = skills
    else:
        hard_skills = [
            "Maîtrise des normes et réglementations environnementales",
            "Analyse technique et protocoles de mesure sur le terrain",
            "Capacités de diagnostic et résolution de problèmes",
            "Utilisation d'outils et logiciels professionnels spécialisés"
        ]
        soft_skills = [
            "Sens aigu des responsabilités et éthique environnementale",
            "Rigueur méthodologique et vigilance opérationnelle",
            "Aptitude au travail en équipe pluridisciplinaire",
            "Capacité d'adaptation et écoute active"
        ]
        j["skills"] = {
            "hard": hard_skills,
            "soft": soft_skills,
            "technical": hard_skills,
            "human": soft_skills
        }
        
    # Compatibilité avec composants utilisant les tableaux plats à la racine
    if "hard" not in j:
        j["hard"] = j["skills"]["hard"]
    if "soft" not in j:
        j["soft"] = j["skills"]["soft"]

    # 4. Horaires quotidiens / TypicalDay
    if "dailySchedule" in j and "typicalDay" not in j:
        j["typicalDay"] = j["dailySchedule"]
    elif "typicalDay" in j and "dailySchedule" not in j:
        j["dailySchedule"] = j["typicalDay"]

    # 5. Bloc daily (morning / afternoon / challenges)
    if "daily" not in j:
        j["daily"] = {
            "morning": "Préparation opérationnelle, inspection des installations, prélèvements et analyses de début de journée.",
            "afternoon": "Traitements techniques, réunions de coordination, encodage des données et rédaction des bilans réglementaires.",
            "challenges": "Maintenir un haut niveau d'exigence technique et environnementale en permanence."
        }
    else:
        daily = dict(j["daily"])
        if "morning" not in daily:
            daily["morning"] = "Préparation opérationnelle, contrôle des équipements et déploiement sur site."
        if "afternoon" not in daily:
            daily["afternoon"] = "Interventions techniques, saisie de données et clôture des rapports journaliers."
        if "challenges" not in daily:
            daily["challenges"] = "Garantir la conformité aux normes environnementales et la sécurité collective."
        j["daily"] = daily

    # 6. Saviez-vous & chiffres clés
    if "saviezVous" not in j or not j["saviezVous"].get("fait"):
        j["saviezVous"] = {
            "fait": "Ce métier est au cœur de la transition écologique et des engagements climatiques de la France et des pays francophones.",
            "chiffre": "Le secteur de l'environnement et du développement durable génère des milliers d'emplois d'avenir qualifiés."
        }

    # 7. Sources officielles
    if "sources" not in j or len(j["sources"]) == 0:
        j["sources"] = [
            {
                "name": "Onisep - Les métiers et l'emploi dans l'environnement et le développement durable",
                "url": "https://www.onisep.fr/metier/decouvrir-le-monde-professionnel/environnement-developpement-durable/les-metiers-et-l-emploi-dans-l-environnement-et-le-developpement-durable",
                "date": "04/11/2025",
                "type": "Source officielle française"
            }
        ]

    return j

def main():
    print(f"Compilation de {len(ALL_JOBS)} fiches métiers pour {len(DOMAINS)} domaines...")
    
    normalized_jobs = [normalize_job(job) for job in ALL_JOBS]
    
    # Vérification d'unicité des IDs
    ids = [j["id"] for j in normalized_jobs]
    if len(ids) != len(set(ids)):
        duplicates = [x for x in ids if ids.count(x) > 1]
        print(f"❌ ERREUR: IDs en doublon détectés dans les nouvelles fiches : {set(duplicates)}")
        sys.exit(1)
        
    print(f"✅ {len(normalized_jobs)} fiches uniques validées avec succès.")

    # Génération du module JavaScript UMD
    output_path = os.path.join(os.path.dirname(BASE_DIR), "frontend", "js", "orientation-environment-data.js")
    
    domains_json = json.dumps(DOMAINS, ensure_ascii=False, indent=4)
    pathways_json = json.dumps(ENVIRONMENT_PATHWAYS, ensure_ascii=False, indent=4)
    jobs_json = json.dumps(normalized_jobs, ensure_ascii=False, indent=4)
    
    js_content = f"""/**
 * MODULE OFFICIEL ENVIRONNEMENT, ÉCOLOGIE & DÉVELOPPEMENT DURABLE
 * Base de données exhaustive : 6 Domaines d'Excellence • 18 Fiches Métiers Haute Profondeur
 * Double ancrage France (€) / Sénégal (FCFA)
 * Source Principale de référence : Onisep (04/11/2025)
 * https://www.onisep.fr/metier/decouvrir-le-monde-professionnel/environnement-developpement-durable/les-metiers-et-l-emploi-dans-l-environnement-et-le-developpement-durable
 */

(function (root, factory) {{
    if (typeof define === 'function' && define.amd) {{
        define([], factory);
    }} else if (typeof module === 'object' && module.exports) {{
        module.exports = factory();
    }} else {{
        root.OrientationEnvironmentData = factory();
    }}
}}(typeof self !== 'undefined' ? self : this, function () {{
    'use strict';

    const DOMAINS = {domains_json};

    const ENVIRONMENT_PATHWAYS = {pathways_json};

    const JOBS = {jobs_json};

    return {{
        DOMAINS: DOMAINS,
        ENVIRONMENT_PATHWAYS: ENVIRONMENT_PATHWAYS,
        JOBS: JOBS,
        getDomains: function() {{
            return DOMAINS;
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
            return ENVIRONMENT_PATHWAYS;
        }},
        getEnvironmentPathways: function() {{
            return ENVIRONMENT_PATHWAYS;
        }}
    }};
}}));
"""

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(js_content)

    print(f"🚀 Fichier généré avec succès : {output_path} ({os.path.getsize(output_path)} octets)")

if __name__ == "__main__":
    main()
