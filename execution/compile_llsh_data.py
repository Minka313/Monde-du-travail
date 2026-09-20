# execution/compile_llsh_data.py
# -*- coding: utf-8 -*-
"""
Assemblage, validation et génération de frontend/js/orientation-llsh-data.js
Grande Famille : 📚 LETTRES, LANGUES & SCIENCES HUMAINES
20 Domaines d'Excellence • 32 Fiches Métiers Haute Profondeur
"""

import os
import json
from llsh_jobs_part1 import LLSH_JOBS_PART1
from llsh_jobs_part2 import LLSH_JOBS_PART2

# 20 Domaines d'Excellence des Lettres, Langues & Sciences Humaines
LLSH_DOMAINS = [
    {
        "id": "lettres-litterature",
        "name": "Lettres & Littérature",
        "icon": "✍️",
        "description": "Littérature, langue française, création romanesque, analyse de textes, critique littéraire et révision stylistique.",
        "subdomains": [
            "Création littéraire & Écriture",
            "Édition & Révision de textes",
            "Langue française & Stylistique",
            "Analyse textuelle & Critique littéraire",
            "Recherche littéraire & Poétique"
        ]
    },
    {
        "id": "langues-etrangeres",
        "name": "Langues Étrangères",
        "icon": "🌍",
        "description": "Langues vivantes régionales et internationales, didactique des langues, FLE (Français Langue Étrangère) et communication interculturelle.",
        "subdomains": [
            "Didactique des langues & FLE",
            "Langues européennes & internationales",
            "Langues africaines & orientales",
            "Communication & Négociation interculturelle"
        ]
    },
    {
        "id": "traduction-interpretation",
        "name": "Traduction & Interprétation",
        "icon": "🗣️",
        "description": "Traduction littéraire, juridique et assermentée, interprétation simultanée et consécutive de conférences mondiales.",
        "subdomains": [
            "Traduction générale & spécialisée",
            "Interprétation de conférence & diplomatique",
            "Traduction assermentée & juridique",
            "Traduction audiovisuelle & Sous-titrage"
        ]
    },
    {
        "id": "traduction-technique",
        "name": "Traduction Technique",
        "icon": "🧰",
        "description": "Traduction de documentation industrielle, notices médicales et pharmaceutiques, brevets d'invention et localisation logicielle.",
        "subdomains": [
            "Documentation technique & industrielle",
            "Traduction médicale & pharmaceutique",
            "Brevets & Propriété industrielle",
            "Localisation de logiciels & Jeux vidéo"
        ]
    },
    {
        "id": "linguistique-tal",
        "name": "Linguistique & Traitement du Langage",
        "icon": "📜",
        "description": "Linguistique théorique et appliquée, phonétique, morphosyntaxe, ingénierie TAL (NLP) et constitution d'ontologies.",
        "subdomains": [
            "Traitement automatique des langues (TAL / NLP)",
            "Terminologie, Lexicographie & Normalisation",
            "Phonétique, Phonologie & Prosodie",
            "Sociolinguistique & Dialectologie"
        ]
    },
    {
        "id": "histoire-patrimoine",
        "name": "Histoire & Patrimoine",
        "icon": "🏛️",
        "description": "Histoire des civilisations, recherche archivistique, records management, valorisation des mémoires et conservation du patrimoine.",
        "subdomains": [
            "Recherche historique & Valorisation mémorielle",
            "Archives, Conservation & Records Management",
            "Conservation & Valorisation patrimoniale",
            "Histoire contemporaine & Relations internationales"
        ]
    },
    {
        "id": "archeologie",
        "name": "Archéologie",
        "icon": "🏺",
        "description": "Fouilles préventives et programmées, archéométrie, paléontologie, étude de la culture matérielle et des origines humaines.",
        "subdomains": [
            "Archéologie de terrain & préventive",
            "Paléontologie & Évolution des espèces",
            "Archéométrie & Datation physique",
            "Conservation des vestiges archéologiques"
        ]
    },
    {
        "id": "histoire-art",
        "name": "Histoire de l'Art",
        "icon": "🎨",
        "description": "Arts visuels, peinture, sculpture, muséologie, expertise d'authenticité des œuvres et marché des enchères publiques.",
        "subdomains": [
            "Arts visuels, Expertise & Muséologie",
            "Direction de musée & Muséographie",
            "Marché de l'art, Enchères & Expertise légale",
            "Histoire de l'art contemporain & Avant-gardes"
        ]
    },
    {
        "id": "philosophie-ethique",
        "name": "Philosophie & Éthique Appliquée",
        "icon": "🧠",
        "description": "Philosophie générale, épistémologie, éthique biomédicale, philosophie politique et gouvernance éthique des technologies d'IA.",
        "subdomains": [
            "Philosophie, Éthique appliquée & Bioéthique",
            "Épistémologie & Philosophie des sciences",
            "Philosophie politique & Morale",
            "Éthique de l'IA & des Technologies"
        ]
    },
    {
        "id": "sociologie-etudes",
        "name": "Sociologie & Enquêtes Sociales",
        "icon": "👥",
        "description": "Sociologie des organisations et du travail, études quantitatives et qualitatives, ethnologie, anthropologie et dynamique des populations.",
        "subdomains": [
            "Études sociologiques, Enquêtes & Analyses de population",
            "Ethnologie, Anthropologie culturelle & Récits oraux",
            "Sociologie urbaine & Développement local",
            "Sociologie du travail & Climat social"
        ]
    },
    {
        "id": "psychologie",
        "name": "Psychologie & Accompagnement",
        "icon": "🧠",
        "description": "Psychologie clinique et psychopathologie, psychologie du travail et ergonomie, psychologie du développement et orientation scolaire.",
        "subdomains": [
            "Psychologie clinique & Psychopathologie",
            "Psychologie du travail, Santé mentale & Ergonomie",
            "Orientation scolaire, Bilans & Psychologie du développement",
            "Neuropsychologie & Sciences cognitives"
        ]
    },
    {
        "id": "geographie-amenagement",
        "name": "Géographie & Aménagement",
        "icon": "🌍",
        "description": "Cartographie thématique, Systèmes d'Information Géographique (SIG), géopolitique spatiale, urbanisme et résilience environnementale.",
        "subdomains": [
            "Cartographie numérique, SIG & Analyse spatiale",
            "Aménagement du territoire & Géographie humaine",
            "Géographie physique, Climat & Risques naturels",
            "Géomatique & Télédétection par satellite"
        ]
    },
    {
        "id": "sciences-politiques-ri",
        "name": "Sciences Politiques & Relations Internationales",
        "icon": "🏛️",
        "description": "Analyse géopolitique, affaires publiques, diplomatie, prospective stratégique, régimes politiques et coopération internationale.",
        "subdomains": [
            "Géopolitique, Affaires publiques & Analyse stratégique",
            "Relations internationales & Diplomatie",
            "Gouvernance publique & Évaluation des politiques",
            "Coopération multilatérale & Développement"
        ]
    },
    {
        "id": "documentation-information",
        "name": "Documentation & Information",
        "icon": "📚",
        "description": "Recherche documentaire avancée, bibliothéconomie, médiathèques, veille stratégique et gestion électronique des connaissances.",
        "subdomains": [
            "Recherche documentaire, Gestion de l'information & Veille",
            "Bibliothèques, Médiathèques & Collections publiques",
            "Knowledge Management & GED d'entreprise",
            "Éducation aux médias & à l'information"
        ]
    },
    {
        "id": "culture-mediation",
        "name": "Médiation Culturelle",
        "icon": "🎭",
        "description": "Éducation artistique et culturelle, animation de musées et monuments, conception d'expositions et élargissement des publics.",
        "subdomains": [
            "Éducation artistique, Médiation des publics & Événements culturels",
            "Médiation muséale & Outils participatifs",
            "Action culturelle territoriale & Champ social",
            "Scénographie & Ingénierie culturelle"
        ]
    },
    {
        "id": "enseignement-shs",
        "name": "Enseignement & Pédagogie",
        "icon": "👨‍🏫",
        "description": "Enseignement secondaire (Lettres, Histoire, Philosophie, Langues), pédagogie active, formation des adultes et enseignement supérieur.",
        "subdomains": [
            "Enseignement supérieur universitaire & Direction de recherche",
            "Enseignement secondaire en humanités & Concours",
            "Pédagogie active & Didactique des disciplines",
            "Formation continue des adultes"
        ]
    },
    {
        "id": "recherche-shs",
        "name": "Recherche Fondamentale & Appliquée",
        "icon": "🔬",
        "description": "Recherche scientifique en instituts d'État, laboratoires interdisciplinaires, direction de projets internationaux et science ouverte.",
        "subdomains": [
            "Recherche interdisciplinaire, Laboratoires & Publications savantes",
            "Humanités numériques & Traitement de corpus massifs",
            "Recherche pour le développement & Savoirs endogènes",
            "Épistémologie & Évaluation par les pairs"
        ]
    },
    {
        "id": "journalisme-medias",
        "name": "Journalisme & Médias",
        "icon": "📰",
        "description": "Presse écrite, agences de presse, journalisme d'investigation, médias numériques, reportage de terrain et déontologie de l'information.",
        "subdomains": [
            "Presse écrite, Médias numériques & Investigation",
            "Secrétariat de rédaction & Édition de presse",
            "Journalisme mobile (MoJo) & Nouveaux formats",
            "Fact-checking & Vérification des sources"
        ]
    },
    {
        "id": "redaction-edition",
        "name": "Rédaction & Édition",
        "icon": "✍️",
        "description": "Maisons d'édition littéraires et savantes, direction éditoriale, conception-rédaction, écriture de marque et chaîne du livre.",
        "subdomains": [
            "Maison d'édition, Collections & Chaîne du livre",
            "Conception-rédaction & Écriture de marque",
            "Édition numérique & Livres audio",
            "Droits d'auteur & Contrats d'édition"
        ]
    },
    {
        "id": "economie-transversale",
        "name": "Études Économiques & Métiers Transversaux",
        "icon": "💼",
        "description": "Études de conjoncture économique, modélisation économétrique de marché, conseil stratégique aux dirigeants et analyse de la concurrence.",
        "subdomains": [
            "Études de conjoncture, Stratégie dirigeant & Analyse de marché",
            "Économétrie appliquée & Modélisation prédictive",
            "Conseil en politiques économiques & Régulation",
            "Analyse concurrentielle & Stratégie de prix"
        ]
    }
]

# Fusion de tous les métiers LLSH
ALL_LLSH_JOBS = LLSH_JOBS_PART1 + LLSH_JOBS_PART2

print(f"Total LLSH domains: {len(LLSH_DOMAINS)}")
print(f"Total LLSH jobs: {len(ALL_LLSH_JOBS)}")

# Validation stricte des données
domain_ids = {d["id"] for d in LLSH_DOMAINS}
seen_ids = set()
seen_slugs = set()

for job in ALL_LLSH_JOBS:
    jid = job["id"]
    slug = job["slug"]
    dom_id = job["domainId"]

    if jid in seen_ids:
        raise ValueError(f"Duplicate job id found: {jid}")
    if slug in seen_slugs:
        raise ValueError(f"Duplicate job slug found: {slug}")
    if dom_id not in domain_ids:
        raise ValueError(f"Invalid domainId '{dom_id}' in job {jid}")

    seen_ids.add(jid)
    seen_slugs.add(slug)

print("Validation successful! All 32 jobs have valid unique IDs, slugs, and domain references.")

# Génération de frontend/js/orientation-llsh-data.js
output_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "../frontend/js/orientation-llsh-data.js"))

js_content = f"""/**
 * OrientationLlshData
 * Module de données officiel pour la grande famille :
 * 📚 LETTRES, LANGUES & SCIENCES HUMAINES
 * Référentiel documentaire : Imagine ton Futur (https://www.imaginetonfutur.com/les-metiers/domaine/lettres-langues-sciences-humaines.html)
 *
 * 20 Domaines d'Excellence • 32 Fiches Métiers Haute Profondeur
 */

(function (root, factory) {{
  if (typeof define === 'function' && define.amd) {{
    define([], factory);
  }} else if (typeof module === 'object' && module.exports) {{
    module.exports = factory();
  }} else {{
    root.OrientationLlshData = factory();
  }}
}})(typeof self !== 'undefined' ? self : this, function () {{
  'use strict';

  var LLSH_DOMAINS = {json.dumps(LLSH_DOMAINS, ensure_ascii=False, indent=4)};

  var LLSH_JOBS = {json.dumps(ALL_LLSH_JOBS, ensure_ascii=False, indent=4)};

  return {{
    getDomains: function () {{
      return JSON.parse(JSON.stringify(LLSH_DOMAINS));
    }},
    getJobs: function () {{
      return JSON.parse(JSON.stringify(LLSH_JOBS));
    }},
    getJobById: function (id) {{
      return LLSH_JOBS.find(function (j) {{ return j.id === id; }}) || null;
    }},
    getJobBySlug: function (slug) {{
      return LLSH_JOBS.find(function (j) {{ return j.slug === slug; }}) || null;
    }},
    getJobsByDomain: function (domainId) {{
      return LLSH_JOBS.filter(function (j) {{ return j.domainId === domainId; }});
    }}
  }};
}});
"""

with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully wrote {output_path} ({len(js_content)} characters, {os.path.getsize(output_path)} bytes)")
