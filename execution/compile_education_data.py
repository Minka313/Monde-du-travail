#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
COMPILATEUR DU MODULE DE DONNÉES :
ENSEIGNEMENT, ÉDUCATION & FORMATION (21 Métiers • 8 Domaines)
Source Principale : Studyrama (https://www.studyrama.com/formations/fiches-metiers/enseignement)

Génère le module UMD prêt pour la production :
- frontend/js/orientation-education-data.js
"""

import json
import os
import sys

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, BASE_DIR)
sys.path.insert(0, os.path.dirname(BASE_DIR))

try:
    from execution.education_jobs_data import DOMAINS, PEDAGOGICAL_PATHWAYS, JOBS
except ImportError:
    from education_jobs_data import DOMAINS, PEDAGOGICAL_PATHWAYS, JOBS

SAVIEZ_VOUS_DATA = {
    "professeur-des-ecoles": {
        "fait": "En France, les professeurs des écoles enseignent en moyenne 24 heures hebdomadaires en présence d'élèves, complétées par 108 heures annuelles obligatoires consacrées aux activités pédagogiques complémentaires (APC), réunions d'équipe et relations avec les parents.",
        "chiffre": "Plus de 380 000 professeurs des écoles exercent en France dans environ 48 000 écoles primaires."
    },
    "professeur-college-lycee": {
        "fait": "Le corps des professeurs certifiés (CAPES) effectue un service hebdomadaire de 18 heures d'enseignement, tandis que les professeurs agrégés effectuent 15 heures, complétées par les temps de préparation, de correction et de réunions.",
        "chiffre": "Le Ministère de l'Éducation Nationale est l'un des plus grands employeurs d'Europe avec près de 850 000 enseignants au total."
    },
    "professeur-lycee-professionnel-plp": {
        "fait": "Les professeurs de lycée professionnel assurent souvent une bivalence originale : ils peuvent enseigner à la fois les Lettres et l'Histoire-Géographie, ou les Mathématiques et les Sciences Physiques appliquées à leur filière.",
        "chiffre": "Près d'un tiers des bacheliers de France préparent un baccalauréat professionnel, tremplin vers l'emploi direct ou la poursuite en BTS."
    },
    "professeur-eps": {
        "fait": "L'EPS est la seule discipline scolaire obligatoire dispensée de l'école maternelle jusqu'en classe de terminale, contribuant directement aux objectifs nationaux de santé publique et de lutte contre la sédentarité.",
        "chiffre": "L'UNSS (Union Nationale du Sport Scolaire) compte plus d'un million de licenciés collégiens et lycéens encadrés par leurs professeurs d'EPS."
    },
    "professeur-arts-plastiques": {
        "fait": "L'enseignement des arts plastiques en France ne se limite pas au dessin : il englobe la sculpture, la photographie, la création numérique, l'installation spatiale et l'histoire des arts depuis l'Antiquité jusqu'à l'art contemporain.",
        "chiffre": "Tous les collégiens bénéficient d'une heure hebdomadaire d'arts plastiques tout au long des quatre années de collège."
    },
    "professeur-musique": {
        "fait": "La pratique collective de la voix et du chant choral est reconnue par les neurosciences comme l'un des plus puissants stimulateurs du développement cognitif, de la concentration et de l'empathie chez les adolescents.",
        "chiffre": "Plus de 250 000 élèves participent chaque année aux chorales des collèges et lycées en France."
    },
    "enseignant-chercheur": {
        "fait": "Le temps de travail statutaire d'un enseignant-chercheur est strictement réparti à parité : 50% dédié à l'enseignement supérieur (192 heures équivalent TD annuelles) et 50% consacré à la recherche fondamentale ou appliquée.",
        "chiffre": "La France compte environ 56 000 enseignants-chercheurs titulaires dans ses universités et grands établissements."
    },
    "conseiller-principal-education": {
        "fait": "Le corps des Conseillers Principaux d'Éducation (CPE) est une spécificité reconnue du système éducatif français, créé en 1970 pour remplacer les anciens 'surveillants généraux' par des cadres pédagogiques de l'éducation.",
        "chiffre": "Environ 12 500 CPE veillent quotidiennement au climat scolaire et au suivi éducatif de plusieurs millions d'adolescents."
    },
    "assistant-education": {
        "fait": "Créé en 2003, le statut d'assistant d'éducation (AED) offre des aménagements d'emploi du temps spécifiques aux étudiants pour leur permettre de concilier leurs études supérieures et leur activité professionnelle.",
        "chiffre": "Plus de 60 000 assistants d'éducation exercent dans les collèges et lycées français."
    },
    "psychologue-scolaire": {
        "fait": "Depuis la réforme de 2017, les psychologues scolaires et conseillers d'orientation sont réunis au sein d'un corps unique : les Psychologues de l'Éducation Nationale (PsyEN), avec la spécialité EDA pour le 1er degré et EDO pour le 2nd degré.",
        "chiffre": "Chaque psychologue de l'Éducation Nationale EDA suit en moyenne un secteur de 1 200 à 1 500 élèves répartis sur plusieurs écoles maternelles et élémentaires."
    },
    "inspecteur-education-nationale": {
        "fait": "L'Inspecteur de l'Éducation Nationale est le représentant du recteur sur son territoire ; il a autorité sur une circonscription regroupant en moyenne 20 à 40 écoles primaires et 200 à 400 professeurs des écoles.",
        "chiffre": "On compte environ 2 200 IEN en exercice sur le territoire national français."
    },
    "inspecteur-academie": {
        "fait": "Les IA-IPR président les commissions académiques d'harmonisation du baccalauréat et veillent à l'équité nationale des notations des épreuves pour des dizaines de milliers de candidats.",
        "chiffre": "Chaque académie compte entre 30 et 80 IA-IPR répartis selon les différentes disciplines d'enseignement."
    },
    "directeur-ecole": {
        "fait": "La loi Rilhac promulguée en 2021 a renforcé l'autorité fonctionnelle et l'autonomie de décision des directeurs d'école en France pour animer l'équipe pédagogique et organiser la vie scolaire.",
        "chiffre": "Il existe près de 45 000 directeurs et directrices d'école en France, dont une majorité cumule la direction avec la charge d'une classe."
    },
    "chef-etablissement-scolaire": {
        "fait": "Le chef d'établissement (Principal ou Proviseur) est personnellement responsable de la sécurité des personnes et des biens de son établissement 24h/24, et dispose pour cela d'un logement de fonction par nécessité absolue de service.",
        "chiffre": "La France compte environ 14 000 personnels de direction pilotant les collèges et lycées publics."
    },
    "infirmier-scolaire": {
        "fait": "L'infirmier scolaire est habilité à délivrer la contraception d'urgence sans ordonnance et sans accord parental, dans le respect de l'anonymat et du secret professionnel le plus strict.",
        "chiffre": "Plus de 7 700 infirmiers et infirmières scolaires exercent au sein de l'Éducation Nationale."
    },
    "agent-territorial-specialise-ecoles-maternelles": {
        "fait": "Le concours d'ATSEM est l'un des concours les plus sélectifs de la fonction publique territoriale avec des taux de réussite souvent inférieurs à 10% des candidats inscrits.",
        "chiffre": "Plus de 54 000 ATSEM accompagnent quotidiennement les tout-petits dans les écoles maternelles françaises."
    },
    "accompagnant-eleves-situation-handicap-aesh": {
        "fait": "Le nombre d'AESH a plus que doublé en dix ans pour accompagner la scolarisation de plus de 430 000 élèves en situation de handicap dans l'école ordinaire en France.",
        "chiffre": "Avec plus de 135 000 agents, les AESH représentent aujourd'hui le deuxième effectif le plus nombreux de l'Éducation Nationale après les enseignants."
    },
    "responsable-pedagogique": {
        "fait": "Face à l'essor du e-learning et des formations hybrides, le métier d'ingénieur pédagogique figure parmi les profils les plus recherchés du secteur EdTech et des universités modernes.",
        "chiffre": "Le marché mondial des technologies de l'éducation (EdTech) dépasse les 300 milliards de dollars d'investissements."
    },
    "charge-admissions": {
        "fait": "Le chargé des admissions d'une grande école gère souvent plusieurs milliers de dossiers par an et coordonne les jurys d'oraux de sélection réunissant enseignants et diplômés professionnels.",
        "chiffre": "L'enseignement supérieur privé accueille plus de 750 000 étudiants en France, soit plus de 25% de la population étudiante totale."
    },
    "learning-community-manager": {
        "fait": "Les études en sciences cognitives démontrent que le taux d'abandon dans un cours en ligne autonome passe de 85% à moins de 15% lorsqu'une communauté apprenante est activement animée par un Learning Community Manager.",
        "chiffre": "Les bootcamps en ligne et académies d'entreprises comptent des communautés atteignant plusieurs dizaines de milliers d'apprenants connectés simultanément."
    },
    "formateur-professionnel-adultes": {
        "fait": "Le secteur de la formation professionnelle continue en France représente plus de 32 milliards d'euros d'investissements annuels pour l'adaptation des compétences et la reconversion des actifs.",
        "chiffre": "Plus de 60 000 organismes de formation détiennent la certification nationale de qualité Qualiopi en France."
    }
}

def normalize_job(job):
    """Garantit la conformité stricte de chaque champ au modèle de données et aux composants d'affichage UI."""
    j = dict(job)
    
    j["familyId"] = "education-formation"
    j["familyName"] = "Enseignement, Éducation & Formation"
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
        j["hard"] = skills.get("hard", [])
        j["soft"] = skills.get("soft", [])

    # 4. Journée type (typicalDay, dailySchedule, daily)
    if "dailySchedule" in j and "typicalDay" not in j:
        j["typicalDay"] = j["dailySchedule"]
    elif "typicalDay" in j and "dailySchedule" not in j:
        j["dailySchedule"] = j["typicalDay"]

    if "typicalDay" in j and "daily" not in j:
        td = j["typicalDay"]
        morning_acts = [x["activity"] for x in td if x.get("time", "") < "13:00"]
        afternoon_acts = [x["activity"] for x in td if x.get("time", "") >= "13:00"]
        j["daily"] = {
            "morning": " • ".join(morning_acts) if morning_acts else "Séquences pédagogiques matinales et accueil des apprenants.",
            "afternoon": " • ".join(afternoon_acts) if afternoon_acts else "Ateliers didactiques, concertation et suivi personnalisé.",
            "challenges": "Régulation des dynamiques de groupe, transmission bienveillante et exigence éducative."
        }

    # 5. Assurer les familles connectées
    connected = list(j.get("connectedFamilies", []))
    if "education-formation" not in connected:
        connected.insert(0, "education-formation")
    j["connectedFamilies"] = connected
    
    # 6. Saviez-vous officiel
    if j["id"] in SAVIEZ_VOUS_DATA:
        j["saviezVous"] = SAVIEZ_VOUS_DATA[j["id"]]
    else:
        j["saviezVous"] = {
            "fait": f"Le métier de {j['title']} joue un rôle déterminant dans la transmission des savoirs et le service public d'éducation.",
            "chiffre": "Secteur de l'Éducation, Enseignement & Formation."
        }
    
    j["studyramaSource"] = True
    
    return j

def compile_education_module():
    print(f"\n--- Compilation Module Enseignement, Éducation & Formation : {len(DOMAINS)} domaines • {len(JOBS)} métiers ---")
    
    normalized_jobs = [normalize_job(j) for j in JOBS]
    
    # Assertions d'intégrité
    assert len(DOMAINS) == 8, f"Attendu 8 domaines éducation, trouvé: {len(DOMAINS)}"
    assert len(normalized_jobs) == 21, f"Attendu 21 métiers éducation, trouvé: {len(normalized_jobs)}"
    
    ids = [j['id'] for j in normalized_jobs]
    duplicates = [x for x in ids if ids.count(x) > 1]
    assert len(ids) == len(set(ids)), f"Doublon d'ID détecté dans Éducation: {duplicates}"
    
    domain_ids = {d['id'] for d in DOMAINS}
    for j in normalized_jobs:
        assert j['domainId'] in domain_ids, f"Métier Éducation '{j['id']}' a un domainId inconnu: {j['domainId']}"
        assert j['familyId'] == "education-formation", f"familyId invalide pour {j['id']}"
        assert "salary" in j and "🇫🇷" in j["salary"] and "🇸🇳" in j["salary"], f"Salaire non conforme pour {j['id']}"
        assert "missions" in j and len(j["missions"]) > 0, f"Missions manquantes pour {j['id']}"
        assert "skills" in j and "hard" in j["skills"], f"Compétences manquantes pour {j['id']}"
        assert "studyramaUrl" in j and "studyrama.com" in j["studyramaUrl"], f"URL Studyrama manquante pour {j['id']}"

    umd_content = f"""/**
 * MODULE OFFICIEL ENSEIGNEMENT, ÉDUCATION & FORMATION
 * Base de données exhaustive : 8 Domaines d'Excellence • 21 Fiches Métiers Haute Profondeur
 * Double ancrage France (€) / Sénégal (FCFA)
 * Source Principale de référence : Studyrama Enseignement (https://www.studyrama.com/formations/fiches-metiers/enseignement)
 */

(function (root, factory) {{
    if (typeof define === 'function' && define.amd) {{
        define([], factory);
    }} else if (typeof module === 'object' && module.exports) {{
        module.exports = factory();
    }} else {{
        root.OrientationEducationData = factory();
    }}
}}(typeof self !== 'undefined' ? self : this, function () {{
    'use strict';

    const DOMAINS = {json.dumps(DOMAINS, ensure_ascii=False, indent=4)};

    const PEDAGOGICAL_PATHWAYS = {json.dumps(PEDAGOGICAL_PATHWAYS, ensure_ascii=False, indent=4)};

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
        }},
        getPedagogicalPathways: function() {{
            return PEDAGOGICAL_PATHWAYS;
        }}
    }};
}}));
"""

    out_path = os.path.join(BASE_DIR, "..", "frontend", "js", "orientation-education-data.js")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(umd_content)
    print(f"✅ Module Éducation écrit dans : {out_path} ({len(umd_content)} octets)")

if __name__ == "__main__":
    compile_education_module()
    print("\n🎉 Compilation Enseignement, Éducation & Formation terminée avec succès !\n")
