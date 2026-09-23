#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
COMPILATEUR DES MODULES DE DONNÉES :
1. SANTÉ, SOINS & PARAMÉDICAL (30 Métiers • 11 Domaines)
2. BIOLOGIE & CHIMIE (24 Métiers CIDJ • 15 Domaines)

Génère deux modules UMD prêts pour la production :
- frontend/js/orientation-health-data.js
- frontend/js/orientation-biochimie-data.js
"""

import json
import os
import sys

# Ajouter le répertoire d'exécution au sys.path
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.append(BASE_DIR)

from health_jobs_data import HEALTH_DOMAINS, HEALTH_JOBS
from health_jobs_data_part2 import HEALTH_JOBS_PART2
from health_jobs_data_part3 import HEALTH_JOBS_PART3

from biochimie_jobs_data import BIOCHIMIE_DOMAINS, BIOCHIMIE_JOBS
from biochimie_jobs_data_part2 import BIOCHIMIE_JOBS_PART2

# Pédagogies intégrées Santé
HEALTH_PEDAGOGICAL_PATHWAYS = [
    {
        "id": "chaine-de-soins-integree",
        "title": "Du premier symptôme au rétablissement : la chaîne de soins intégrée",
        "icon": "🏥",
        "description": "Comprendre comment les 11 domaines de santé coopèrent autour du patient pour assurer diagnostic, traitement et rééducation.",
        "steps": [
            {"order": 1, "name": "Alerte & Triage", "icon": "🚑", "desc": "Appel SAMU/15, régulation médicale et transport d'urgence"},
            {"order": 2, "name": "Examen & Diagnostic", "icon": "🩺", "desc": "Consultation générale ou d'accueil des urgences"},
            {"order": 3, "name": "Analyses & Imagerie", "icon": "🔬", "desc": "Bilans de biologie médicale et imagerie diagnostique"},
            {"order": 4, "name": "Intervention & Soins", "icon": "💉", "desc": "Chirurgie, anesthésie ou prise en charge infirmière"},
            {"order": 5, "name": "Médication", "icon": "💊", "desc": "Dispensation sécurisée par la pharmacie hospitalière ou d'officine"},
            {"order": 6, "name": "Rééducation", "icon": "🏃", "desc": "Kinésithérapie, ergothérapie ou orthophonie pour retrouver l'autonomie"},
            {"order": 7, "name": "Prévention", "icon": "🛡️", "desc": "Suivi au long cours, hygiène et éducation thérapeutique"}
        ]
    },
    {
        "id": "cycle-de-la-vie-sante",
        "title": "Le continuum de santé au fil des âges de la vie",
        "icon": "👶👵",
        "description": "L'accompagnement soignant de la conception au grand âge.",
        "steps": [
            {"order": 1, "name": "Maternité & Naissance", "icon": "🤰", "desc": "Suivi prénatal et accouchement par la sage-femme"},
            {"order": 2, "name": "Petite enfance", "icon": "🍼", "desc": "Puéricultrice et pédiatre pour la croissance et vaccinations"},
            {"order": 3, "name": "Jeunesse & Adulte", "icon": "🧑", "desc": "Médecine préventive, dentaire et santé mentale"},
            {"order": 4, "name": "Grand âge & Autonomie", "icon": "🧓", "desc": "Gériatrie, kinésithérapie, soins infirmiers et ergothérapie"}
        ]
    }
]

# Pédagogies intégrées Biologie & Chimie
BIOCHIMIE_PEDAGOGICAL_PATHWAYS = [
    {
        "id": "de-la-molecule-au-produit-fini",
        "title": "De la molécule au produit fini : l'odyssée de la formulation et bioproduction",
        "icon": "🧪",
        "description": "Le cycle complet de création, synthèse, contrôle et mise en forme de la matière pour la pharmacie, cosmétique et matériaux.",
        "steps": [
            {"order": 1, "name": "Recherche Fondamentale", "icon": "🧬", "desc": "Identification de cibles biologiques ou molécules actives"},
            {"order": 2, "name": "Synthèse Chimique", "icon": "🔬", "desc": "Réaction moléculaire en laboratoire et optimisation du rendement"},
            {"order": 3, "name": "Bioproduction", "icon": "🧫", "desc": "Culture de cellules productrices en bioréacteur industriel"},
            {"order": 4, "name": "Formulation & Galénique", "icon": "🧴", "desc": "Association d'excipients, émulsions, fabrication de comprimés ou parfums"},
            {"order": 5, "name": "Contrôle Qualité", "icon": "📊", "desc": "Analyses HPLC, CPG, microbiologie et tests de stabilité"},
            {"order": 6, "name": "Libération du Lot", "icon": "📦", "desc": "Certificat de conformité, Bonnes Pratiques de Fabrication et expédition"}
        ]
    },
    {
        "id": "de-la-trace-a-la-preuve-forensique",
        "title": "De la trace à la preuve judiciaire : la démarche scientifique de la PTS",
        "icon": "🔎",
        "description": "Comment la biologie et la chimie éclairent la justice pénale selon le principe de Locard.",
        "steps": [
            {"order": 1, "name": "Préservation de la Scène", "icon": "🚧", "desc": "Gel des lieux et tenue stérile pour éviter toute contamination"},
            {"order": 2, "name": "Révélation des Traces", "icon": "🔦", "desc": "Poudres magnétiques, fumigation cyanoacrylate et lumière UV"},
            {"order": 3, "name": "Prélèvement d'Indices", "icon": "🧪", "desc": "Conditionnement sous scellés étanches de l'ADN, sang ou résidus"},
            {"order": 4, "name": "Analyses en Laboratoire", "icon": "💻", "desc": "Typage génétique PCR, spectrométrie de masse et balistique"},
            {"order": 5, "name": "Rapprochement Fichiers", "icon": "🗄️", "desc": "Concordance dans le FNAEG (génétique) et FAED (empreintes)"},
            {"order": 6, "name": "Rapport Judiciaire", "icon": "⚖️", "desc": "Rédaction du rapport d'expertise criminalistique pour la Cour d'assises"}
        ]
    }
]

def normalize_job(job, default_family_id):
    """Normalise les champs pour garantir une compatibilité universelle avec le moteur d'affichage."""
    j = dict(job)
    
    # 1. Identifiants
    if not j.get("familyId"):
        j["familyId"] = default_family_id
    if not j.get("slug"):
        j["slug"] = j["id"]
        
    # 2. Descriptions et textes croisés (aliases de compatibilité)
    if "shortDescription" in j and "summary" not in j:
        j["summary"] = j["shortDescription"]
    elif "summary" in j and "shortDescription" not in j:
        j["shortDescription"] = j["summary"]
        
    if "longDescription" in j and "description" not in j:
        j["description"] = j["longDescription"]
    elif "description" in j and "longDescription" not in j:
        j["longDescription"] = j["description"]

    if "level" in j and "studyLevel" not in j:
        j["studyLevel"] = j["level"]
    elif "studyLevel" in j and "level" not in j:
        j["level"] = j["studyLevel"]

    # 3. Compétences (soft vs human)
    if "skills" in j and isinstance(j["skills"], dict):
        skills = dict(j["skills"])
        if "human" in skills and "soft" not in skills:
            skills["soft"] = skills["human"]
        elif "soft" in skills and "human" not in skills:
            skills["human"] = skills["soft"]
        j["skills"] = skills

    # 4. Journée type (daily vs typicalDay)
    if "typicalDay" in j and "daily" not in j:
        td = j["typicalDay"]
        morning_acts = [x["activity"] for x in td if x.get("time", "") < "13:00"]
        afternoon_acts = [x["activity"] for x in td if x.get("time", "") >= "13:00"]
        j["daily"] = {
            "morning": " • ".join(morning_acts) if morning_acts else "Consultations matinales et prise en charge des patients.",
            "afternoon": " • ".join(afternoon_acts) if afternoon_acts else "Actes techniques, analyse des dossiers et coordination médicale.",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        }
    elif "daily" in j and "typicalDay" not in j:
        d = j["daily"]
        j["typicalDay"] = [
            {"time": "08:30", "activity": d.get("morning", "Prise de poste et préparation")},
            {"time": "14:00", "activity": d.get("afternoon", "Traitements, analyses et synthèses")},
            {"time": "18:00", "activity": f"Transmission et fin de poste. Défi clé : {d.get('challenges', 'Exigence de rigueur')}"}
        ]

    # 5. Salaires (dictionnaire vs chaîne)
    if isinstance(j.get("salary"), dict):
        sal = j["salary"]
        fr = sal.get("france", {})
        sn = sal.get("senegal", {})
        fr_str = f"{fr.get('entry', 0):,} - {fr.get('expert', 0):,} € brut/an".replace(',', ' ')
        sn_str = f"{sn.get('entry', 0):,} - {sn.get('expert', 0):,} FCFA net/mois".replace(',', ' ')
        j["salaryDetail"] = sal
        j["salary"] = f"🇫🇷 France : {fr_str} • 🇸🇳 Sénégal : {sn_str}"

    # 6. URLs officielles (CIDJ / Studyrama)
    if "cidjUrl" not in j and "sources" in j and isinstance(j["sources"], list):
        for s in j["sources"]:
            if isinstance(s, dict) and s.get("organization") == "CIDJ" and s.get("url"):
                j["cidjUrl"] = s["url"]
                break

    if "studyramaUrl" not in j and "sources" in j and isinstance(j["sources"], list):
        for s in j["sources"]:
            if isinstance(s, dict) and "studyrama" in str(s.get("organization", "")).lower() and s.get("url"):
                j["studyramaUrl"] = s["url"]
                break
        
    return j

def compile_health_module():
    raw_health_jobs = HEALTH_JOBS + HEALTH_JOBS_PART2 + HEALTH_JOBS_PART3
    print(f"\n--- Compilation Module Santé : {len(HEALTH_DOMAINS)} domaines • {len(raw_health_jobs)} métiers ---")
    
    normalized_jobs = [normalize_job(j, "sante-soins-paramedical") for j in raw_health_jobs]
    
    # Assertions d'intégrité
    assert len(HEALTH_DOMAINS) == 11, f"Attendu 11 domaines santé, trouvé: {len(HEALTH_DOMAINS)}"
    assert len(normalized_jobs) == 30, f"Attendu 30 métiers santé, trouvé: {len(normalized_jobs)}"
    
    ids = [j['id'] for j in normalized_jobs]
    assert len(ids) == len(set(ids)), f"Doublon d'ID détecté dans Santé: {[x for x in ids if ids.count(x) > 1]}"
    
    domain_ids = {d['id'] for d in HEALTH_DOMAINS}
    for j in normalized_jobs:
        assert j['domainId'] in domain_ids, f"Métier Santé '{j['id']}' a un domainId inconnu: {j['domainId']}"
        assert j['familyId'] == "sante-soins-paramedical", f"familyId invalide pour {j['id']}"
        assert "salary" in j and "🇫🇷" in j["salary"] and "🇸🇳" in j["salary"], f"Salaire non conforme pour {j['id']}"
        assert "saviezVous" in j and "fait" in j["saviezVous"], f"SaviezVous manquant pour {j['id']}"

    umd_content = f"""/**
 * MODULE OFFICIEL SANTÉ, SOINS & PARAMÉDICAL
 * Base de données exhaustive : 11 Domaines • 30 Fiches Métiers Haute Profondeur
 * Double ancrage France (€) / Sénégal (FCFA)
 * Sources Principales : Studyrama Santé, Ministère de la Santé, Ordres Professionnels
 */

(function (root, factory) {{
    if (typeof define === 'function' && define.amd) {{
        define([], factory);
    }} else if (typeof module === 'object' && module.exports) {{
        module.exports = factory();
    }} else {{
        root.OrientationHealthData = factory();
    }}
}}(typeof self !== 'undefined' ? self : this, function () {{
    'use strict';

    const DOMAINS = {json.dumps(HEALTH_DOMAINS, ensure_ascii=False, indent=4)};

    const PEDAGOGICAL_PATHWAYS = {json.dumps(HEALTH_PEDAGOGICAL_PATHWAYS, ensure_ascii=False, indent=4)};

    const JOBS = {json.dumps(normalized_jobs, ensure_ascii=False, indent=4)};

    return {{
        DOMAINS: DOMAINS,
        PEDAGOGICAL_PATHWAYS: PEDAGOGICAL_PATHWAYS,
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
            return PEDAGOGICAL_PATHWAYS;
        }}
    }};
}}));
"""

    out_path = os.path.join(BASE_DIR, "..", "frontend", "js", "orientation-health-data.js")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(umd_content)
    print(f"✅ Module Santé écrit dans : {out_path} ({len(umd_content)} octets)")

def compile_biochimie_module():
    raw_bio_jobs = BIOCHIMIE_JOBS + BIOCHIMIE_JOBS_PART2
    print(f"\n--- Compilation Module Biologie & Chimie : {len(BIOCHIMIE_DOMAINS)} domaines • {len(raw_bio_jobs)} métiers ---")
    
    normalized_jobs = [normalize_job(j, "biologie-chimie") for j in raw_bio_jobs]
    
    # Assertions d'intégrité
    assert len(BIOCHIMIE_DOMAINS) == 15, f"Attendu 15 domaines biochimie, trouvé: {len(BIOCHIMIE_DOMAINS)}"
    assert len(normalized_jobs) == 24, f"Attendu 24 métiers CIDJ biochimie, trouvé: {len(normalized_jobs)}"
    
    ids = [j['id'] for j in normalized_jobs]
    assert len(ids) == len(set(ids)), f"Doublon d'ID détecté dans Biologie-Chimie: {[x for x in ids if ids.count(x) > 1]}"
    
    domain_ids = {d['id'] for d in BIOCHIMIE_DOMAINS}
    for j in normalized_jobs:
        assert j['domainId'] in domain_ids, f"Métier BioChimie '{j['id']}' a un domainId inconnu: {j['domainId']}"
        assert j['familyId'] == "biologie-chimie", f"familyId invalide pour {j['id']}"
        assert "salary" in j and "🇫🇷" in j["salary"] and "🇸🇳" in j["salary"], f"Salaire non conforme pour {j['id']}"
        assert "saviezVous" in j and "fait" in j["saviezVous"], f"SaviezVous manquant pour {j['id']}"

    umd_content = f"""/**
 * MODULE OFFICIEL BIOLOGIE & CHIMIE
 * Base de données exhaustive : 15 Domaines • 24 Fiches Métiers Haute Profondeur (Référentiel Officiel CIDJ)
 * Double ancrage France (€) / Sénégal (FCFA)
 * Sources Principales : CIDJ Biologie-Chimie, France Chimie, Instituts de Recherche, Police Scientifique
 */

(function (root, factory) {{
    if (typeof define === 'function' && define.amd) {{
        define([], factory);
    }} else if (typeof module === 'object' && module.exports) {{
        module.exports = factory();
    }} else {{
        root.OrientationBioChimieData = factory();
    }}
}}(typeof self !== 'undefined' ? self : this, function () {{
    'use strict';

    const DOMAINS = {json.dumps(BIOCHIMIE_DOMAINS, ensure_ascii=False, indent=4)};

    const PEDAGOGICAL_PATHWAYS = {json.dumps(BIOCHIMIE_PEDAGOGICAL_PATHWAYS, ensure_ascii=False, indent=4)};

    const JOBS = {json.dumps(normalized_jobs, ensure_ascii=False, indent=4)};

    return {{
        DOMAINS: DOMAINS,
        PEDAGOGICAL_PATHWAYS: PEDAGOGICAL_PATHWAYS,
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
            return PEDAGOGICAL_PATHWAYS;
        }}
    }};
}}));
"""

    out_path = os.path.join(BASE_DIR, "..", "frontend", "js", "orientation-biochimie-data.js")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(umd_content)
    print(f"✅ Module Biologie-Chimie écrit dans : {out_path} ({len(umd_content)} octets)")

if __name__ == "__main__":
    compile_health_module()
    compile_biochimie_module()
    print("\n🎉 Compilations Santé et Biologie-Chimie terminées avec succès !\n")
