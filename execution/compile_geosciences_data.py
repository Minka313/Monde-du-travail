#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
COMPILATEUR DU MODULE DE DONNÉES GÉOSCIENCES, SCIENCES DE LA TERRE & RESSOURCES NATURELLES
Assemble les 17 domaines et les 22 fiches métiers documentées
Génère frontend/js/orientation-geosciences-data.js au format UMD
"""

import json
import os
import subprocess
from geosciences_jobs_part1 import GEOSCIENCES_JOBS_PART1
from geosciences_jobs_part2 import GEOSCIENCES_JOBS_PART2

DOMAINS = [
    {
        "id": "geologie-fondamentale-appliquee",
        "name": "Géologie",
        "icon": "🪨",
        "order": 1,
        "chainStage": "Observation & Levés Géologiques",
        "description": "Étudier la composition, la structure et l'histoire des couches rocheuses de la Terre, sur le terrain au marteau et au laboratoire.",
        "subdomains": ["Cartographie géologique", "Géologie structurale & Tectonique", "Pétrographie & Sédimentologie", "Géoarchéologie"]
    },
    {
        "id": "hydrogeologie-ressources-eau",
        "name": "Hydrogéologie & ressources en eau",
        "icon": "💧",
        "order": 2,
        "chainStage": "Prospection & Gestion Aquifère",
        "description": "Rechercher, évaluer, capter et protéger les réserves d'eau souterraine vitales pour la consommation humaine et l'irrigation.",
        "subdomains": ["Prospection d'aquifères", "Forages & Essais de pompage", "Périmètres de protection de captages", "Hydrodynamique souterraine"]
    },
    {
        "id": "sciences-sol-pedologie",
        "name": "Sciences du sol & pédologie",
        "icon": "🌱",
        "order": 3,
        "chainStage": "Analyse de la Pellicule Vivante",
        "description": "Examiner la structure physique, la fertilité chimique et l'activité biologique des sols pour l'agriculture durable et la lutte anti-érosion.",
        "subdomains": ["Fosses pédologiques & Horizons", "Agronomie & Fertilité des terres", "Conservation des sols & Lutte anti-érosion", "Cartographie pédologique"]
    },
    {
        "id": "paleontologie-archives-vivant",
        "name": "Paléontologie",
        "icon": "🦴",
        "order": 4,
        "chainStage": "Archives Fossiles & Évolution",
        "description": "Découvrir et analyser les archives fossiles du vivant pour retracer l'évolution des espèces, les grandes crises d'extinction et les paléoenvironnements.",
        "subdomains": ["Fouilles fossilifères", "Anatomie comparée & Phylogénie", "Micro-tomographie 3D à rayons X", "Biostratigraphie"]
    },
    {
        "id": "geophysique-sous-sol",
        "name": "Géophysique",
        "icon": "🌋",
        "order": 5,
        "chainStage": "Imagerie Non Destructive",
        "description": "Ausculter les entrailles de la Terre sans forer par la propagation d'ondes sismiques, de champs magnétiques, électriques et gravitationnels.",
        "subdomains": ["Sismique réfraction & réflexion", "Tomographie électrique (ERT)", "Gravimétrie & Magnétométrie", "Radar géologique (GPR)"]
    },
    {
        "id": "geomatique-cartographie-teledetection",
        "name": "Géomatique, cartographie & télédétection",
        "icon": "🗺️",
        "order": 6,
        "chainStage": "Données Spatiales & Satellites",
        "description": "Combiner imageries satellites multispectrales, relevés LiDAR par drone et SIG pour modéliser en 3D les reliefs et suivre la dynamique planétaire.",
        "subdomains": ["SIG (QGIS, ArcGIS)", "Télédétection satellitaire Sentinel", "LiDAR & Modèles numériques de terrain", "Webmapping"]
    },
    {
        "id": "geologie-miniere-ressources",
        "name": "Géologie minière & ressources minérales",
        "icon": "⛏️",
        "order": 7,
        "chainStage": "Exploration & Estimation Minérale",
        "description": "Prospecter, forer, modéliser en 3D et quantifier les gisements de métaux et minéraux stratégiques indispensables à l'industrie et à la transition.",
        "subdomains": ["Prospection & Échantillonnage", "Carottage & Core Logging", "Modélisation 3D de gisement", "Calcul de réserves (Code JORC)"]
    },
    {
        "id": "mineralogie-cristallographie",
        "name": "Minéralogie",
        "icon": "💎",
        "order": 8,
        "chainStage": "Cristallochimie & Diffraction RX",
        "description": "Décrypter l'arrangement atomique régulier des cristaux et leur chimie pour guider l'exploration, l'industrie et la recherche fondamentale.",
        "subdomains": ["Diffraction des rayons X (DRX)", "Spectroscopie Raman & Infrarouge", "Microsonde électronique", "Cristallographie géométrique"]
    },
    {
        "id": "geomateriaux-materiaux-innovants",
        "name": "Géomatériaux & matériaux",
        "icon": "🧱",
        "order": 9,
        "chainStage": "Transformation & Valorisation Minérale",
        "description": "Concevoir et fabriquer des matériaux éco-responsables à partir de substances minérales : ciments bas carbone, céramiques avancées, argiles épuratrices.",
        "subdomains": ["Minéraux industriels (argiles, zéolithes)", "Liants hydrauliques & Ciments bas carbone", "Céramiques techniques & Réfractaires", "Écomatériaux de construction"]
    },
    {
        "id": "geotechnique-ouvrages",
        "name": "Géotechnique",
        "icon": "🏗️",
        "order": 10,
        "chainStage": "Mécanique des Sols & Fondations",
        "description": "Mesurer la portance des terrains pour dimensionner des fondations sûres, stabiliser les talus et sécuriser les ponts, tunnels et barrages.",
        "subdomains": ["Sondages & Essais pressiométriques", "Mécanique des sols & Essais triaxiaux", "Dimensionnement des fondations & pieux", "Stabilité des pentes & soutènements"]
    },
    {
        "id": "geosciences-marines-littorales",
        "name": "Géosciences marines",
        "icon": "🌊",
        "order": 11,
        "chainStage": "Exploration Océanique & Dynamique Côtière",
        "description": "Explorer les reliefs sous-marins profonds et comprendre le transport des sables littoraux pour préserver les plages et aménager les ports.",
        "subdomains": ["Bathymétrie multifaisceaux", "Carottage sous-marin", "Sédimentologie côtière & Houle", "Risques côtiers & Érosion"]
    },
    {
        "id": "environnement-sites-pollues",
        "name": "Environnement & géosciences",
        "icon": "🌍",
        "order": 12,
        "chainStage": "Dépollution & Remédiation des Sols",
        "description": "Diagnostiquer les contaminations industrielles dans les sols et les nappes phréatiques, évaluer les risques sanitaires et piloter la dépollution.",
        "subdomains": ["Diagnostics de friches industrielles", "Prélèvements d'eau, sol et gaz du sol", "Évaluation des risques sanitaires (EQRS)", "Procédés de remédiation in situ"]
    },
    {
        "id": "risques-naturels-georisques",
        "name": "Risques naturels",
        "icon": "⚠️",
        "order": 13,
        "chainStage": "Surveillance Sismique & Aléas Terrestres",
        "description": "Surveiller les tremblements de terre, les glissements de terrain et les chutes de blocs pour délimiter les zones à risque et protéger les vies humaines.",
        "subdomains": ["Sismologie & Aléa sismique", "Trajectographie de chutes de blocs", "Plans de Prévention des Risques (PPRN)", "Systèmes d'alerte précoce"]
    },
    {
        "id": "ressources-energetiques-sous-sol",
        "name": "Ressources énergétiques du sous-sol",
        "icon": "♨️",
        "order": 14,
        "chainStage": "Chaleur de la Terre & Transition Propre",
        "description": "Capter la chaleur naturelle de la Terre pour alimenter les réseaux de chauffage urbain décarbonés ou générer de l'électricité renouvelable en continu.",
        "subdomains": ["Géothermie sur nappe & sondes", "Géothermie profonde haute température", "Modélisation thermodynamique de réservoir", "Doublets géothermiques de forages"]
    },
    {
        "id": "recherche-scientifique-terre",
        "name": "Recherche scientifique",
        "icon": "🔬",
        "order": 15,
        "chainStage": "Recherche Fondamentale & Grands Instruments",
        "description": "Concevoir des protocoles d'avant-garde et utiliser les grands instruments (synchrotron, spectrométrie) pour percer les mystères de notre planète.",
        "subdomains": ["Géodynamique globale & Manteau", "Géochimie isotopique & Datations", "Paléoclimats & Cycles biogéochimiques", "Plateformes analytiques de pointe"]
    },
    {
        "id": "enseignement-mediation-terre",
        "name": "Enseignement & médiation scientifique",
        "icon": "🎓",
        "order": 16,
        "chainStage": "Transmission des Savoirs & Vulgarisation",
        "description": "Former les futurs géologues en université et sur le terrain, ou vulgariser les secrets de la Terre dans les médias et musées pour éclairer les citoyens.",
        "subdomains": ["Enseignement universitaire & Écoles de terrain", "Direction de thèses de doctorat", "Journalisme scientifique", "Médiation en géoparcs & musées"]
    },
    {
        "id": "analyse-laboratoire-instrumentation",
        "name": "Analyse, laboratoire & instrumentation",
        "icon": "🧪",
        "order": 17,
        "chainStage": "Préparation d'Échantillons & Métrologie",
        "description": "Préparer les lames minces micrométriques de roches, réaliser les essais physico-chimiques normalisés et entretenir les instruments de laboratoire.",
        "subdomains": ["Confection de lames minces (30 µm)", "Essais géotechniques normalisés (NF P)", "Granulométrie & Calcimétrie", "Maintenance d'instruments de coupe & polissage"]
    }
]

PEDAGOGICAL_PATHWAYS = [
    {
        "id": "du-terrain-au-laboratoire",
        "title": "Du terrain au laboratoire",
        "icon": "🏞️",
        "description": "Comment une observation d'affleurement se transforme en modèle géologique 3D et diagnostic d'ingénierie.",
        "steps": [
            { "order": 1, "name": "Terrain", "icon": "🏞️", "desc": "Repérage des affleurements, massifs rocheux et paysages" },
            { "order": 2, "name": "Observation", "icon": "📷", "desc": "Examen visuel, texture, stratification et pendage des failles" },
            { "order": 3, "name": "Cartographie", "icon": "🗺️", "desc": "Levés de terrain, pointage GPS et dessin des contours géologiques" },
            { "order": 4, "name": "Échantillonnage", "icon": "🧪", "desc": "Prélèvement d'échantillons de roche et carottes de forage" },
            { "order": 5, "name": "Analyse", "icon": "🔬", "desc": "Lames minces sous microscope polarisant, MEB et diffraction RX" },
            { "order": 6, "name": "Modélisation", "icon": "💻", "desc": "Interpolation 3D géostatistique des couches et réservoirs" },
            { "order": 7, "name": "Interprétation", "icon": "📊", "desc": "Compréhension de l'histoire géodynamique et des contraintes" },
            { "order": 8, "name": "Diagnostic", "icon": "📋", "desc": "Rapport d'expertise pour les aménagements et forages" },
            { "order": 9, "name": "Projet", "icon": "🏗️", "desc": "Décision d'aménagement, d'exploitation ou de sécurisation" }
        ]
    },
    {
        "id": "de-l-eau-a-l-utilisateur",
        "title": "De l'eau souterraine à l'utilisateur",
        "icon": "💧",
        "description": "Le cycle complet de gestion durable de l'or bleu sous nos pieds.",
        "steps": [
            { "order": 1, "name": "Eau", "icon": "🌧️", "desc": "Précipitations atmosphériques et fonte nivale" },
            { "order": 2, "name": "Infiltration", "icon": "🌍", "desc": "Traversée de la zone non saturée et filtration naturelle par le sol" },
            { "order": 3, "name": "Nappe", "icon": "💧", "desc": "Stockage dans les pores ou fissures des formations aquifères" },
            { "order": 4, "name": "Prospection", "icon": "🔎", "desc": "Détection géophysique et géologique des zones aquifères productives" },
            { "order": 5, "name": "Évaluation", "icon": "📊", "desc": "Forages de reconnaissance et essais de pompage par paliers" },
            { "order": 6, "name": "Analyse", "icon": "🧪", "desc": "Contrôle de la potabilité, minéralisation et recherche de polluants" },
            { "order": 7, "name": "Protection", "icon": "⚠️", "desc": "Mise en place des périmètres de protection immédiats et rapprochés" },
            { "order": 8, "name": "Exploitation", "icon": "🚰", "desc": "Pompage régulé respectant le renouvellement de la ressource" },
            { "order": 9, "name": "Utilisation", "icon": "👥", "desc": "Distribution d'eau saine aux villes, cultures et industries" }
        ]
    },
    {
        "id": "de-la-roche-a-la-ressource",
        "title": "De la roche à la ressource minérale",
        "icon": "⛏️",
        "description": "La chaîne méthodologique complète de l'exploration minérale responsable.",
        "steps": [
            { "order": 1, "name": "Sous-sol", "icon": "🪨", "desc": "Formations géologiques profondes et contextes tectoniques" },
            { "order": 2, "name": "Prospection", "icon": "🔎", "desc": "Télédétection satellitaire, géochimie de sol et géophysique" },
            { "order": 3, "name": "Cartographie", "icon": "🗺️", "desc": "Identification précise des zones d'anomalies minérales" },
            { "order": 4, "name": "Exploration", "icon": "⛏️", "desc": "Campagnes de forages carottés profonds et diagraphies" },
            { "order": 5, "name": "Analyse", "icon": "🧪", "desc": "Dosages géochimiques en laboratoire certifié (teneurs utiles)" },
            { "order": 6, "name": "Estimation", "icon": "📊", "desc": "Calcul géostatistique des réserves selon les normes (JORC, NI 43-101)" },
            { "order": 7, "name": "Exploitation", "icon": "🏭", "desc": "Extraction minière ou de carrière planifiée et sécurisée" },
            { "order": 8, "name": "Transformation", "icon": "🧱", "desc": "Procédés métallurgiques, broyage fin et formulation de matériaux" },
            { "order": 9, "name": "Valorisation", "icon": "♻️", "desc": "Utilisation dans les technologies vertes et recyclage des sous-produits" }
        ]
    },
    {
        "id": "du-fossile-a-l-histoire-de-la-vie",
        "title": "Du fossile à l'histoire de la vie",
        "icon": "🦴",
        "description": "Comment un fragment fossile enfoui éclaire l'arbre de l'évolution planétaire.",
        "steps": [
            { "order": 1, "name": "Terrain", "icon": "🪨", "desc": "Reconnaissance des niveaux sédimentaires fossilifères" },
            { "order": 2, "name": "Recherche", "icon": "🔎", "desc": "Fouilles délicates au pinceau, repérage et plâtrage in situ" },
            { "order": 3, "name": "Échantillon", "icon": "🦴", "desc": "Prélèvement protégé et transport sécurisé au laboratoire" },
            { "order": 4, "name": "Préparation", "icon": "🧪", "desc": "Dégagement minutieux de la gangue sous binoculaire" },
            { "order": 5, "name": "Analyse", "icon": "🔬", "desc": "Micro-tomographie 3D à rayons X et morphométrie géométrique" },
            { "order": 6, "name": "Comparaison", "icon": "📚", "desc": "Anatomie comparée avec les collections paléontologiques mondiales" },
            { "order": 7, "name": "Évolution", "icon": "🧬", "desc": "Positionnement phylogénétique dans l'arbre du vivant" },
            { "order": 8, "name": "Paléoenvironnement", "icon": "🌍", "desc": "Reconstitution du climat, du biotope et des écosystèmes anciens" }
        ]
    }
]

def compile_all():
    all_jobs = GEOSCIENCES_JOBS_PART1 + GEOSCIENCES_JOBS_PART2
    print(f"Compilation de {len(DOMAINS)} domaines et {len(all_jobs)} métiers Géosciences...")

    for job in all_jobs:
        if isinstance(job.get("salary"), dict):
            sal = job["salary"]
            fr = sal.get("france", {})
            sn = sal.get("senegal", {})
            fr_str = f"{fr.get('entry', 0):,} - {fr.get('expert', 0):,} € brut/an".replace(',', ' ')
            sn_str = f"{sn.get('entry', 0):,} - {sn.get('expert', 0):,} FCFA net/mois".replace(',', ' ')
            job["salaryDetail"] = sal
            job["salary"] = f"🇫🇷 France : {fr_str} • 🇸🇳 Sénégal : {sn_str}"

        if isinstance(job.get("geosciencesPedagogy"), dict):
            ped = job["geosciencesPedagogy"]
            pathway = ped.get("pathway", "")
            steps = " ➔ ".join(ped.get("steps", []))
            job["geosciencesPedagogyDetail"] = ped
            job["geosciencesPedagogy"] = f"Parcours clé « {pathway} » : {steps}"
    
    # Assertions
    ids = [j['id'] for j in all_jobs]
    assert len(ids) == len(set(ids)), f"Doublon d'ID détecté : {[x for x in ids if ids.count(x) > 1]}"
    
    # Verification des domainId
    valid_domain_ids = {d['id'] for d in DOMAINS}
    for j in all_jobs:
        assert j['domainId'] in valid_domain_ids, f"Métier {j['id']} a un domainId inconnu : {j['domainId']}"
    
    umd_content = f"""/**
 * MODULE OFFICIEL DES GÉOSCIENCES, SCIENCES DE LA TERRE & RESSOURCES NATURELLES
 * Base de données exhaustive : 17 Domaines • 22 Fiches Métiers Haute Profondeur
 * Double ancrage France (€) / Sénégal (FCFA)
 * Source Principale : Université de Poitiers - Faculté SFA - Département Géosciences
 * https://sfa.univ-poitiers.fr/geosciences/debouches-professionnels/
 */

(function (root, factory) {{
    if (typeof define === 'function' && define.amd) {{
        define([], factory);
    }} else if (typeof module === 'object' && module.exports) {{
        module.exports = factory();
    }} else {{
        root.OrientationGeosciencesData = factory();
    }}
}}(typeof self !== 'undefined' ? self : this, function () {{
    'use strict';

    const DOMAINS = {json.dumps(DOMAINS, ensure_ascii=False, indent=4)};

    const PEDAGOGICAL_PATHWAYS = {json.dumps(PEDAGOGICAL_PATHWAYS, ensure_ascii=False, indent=4)};

    const JOBS = {json.dumps(all_jobs, ensure_ascii=False, indent=4)};

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

    out_path = os.path.join(os.path.dirname(__file__), "..", "frontend", "js", "orientation-geosciences-data.js")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(umd_content)
    
    print(f"Module écrit avec succès dans : {out_path} ({len(umd_content)} octets)")

if __name__ == "__main__":
    compile_all()
