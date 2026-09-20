# execution/compile_btp_data.py
# Assemblage, validation et génération de frontend/js/orientation-btp-data.js

import os
import json
from btp_jobs_part1 import BTP_JOBS_PART1
from btp_jobs_part2 import BTP_JOBS_PART2
from btp_jobs_part3 import BTP_JOBS_PART3

# 15 Domaines d'Excellence du BTP, Architecture & Construction
BTP_DOMAINS = [
    {
        "id": "architecture-conception",
        "name": "Architecture & Conception",
        "icon": "🏛️",
        "description": "Conception d'édifices, architecture d'intérieur, aménagement d'espaces et scénographie du cadre bâti.",
        "subdomains": [
            "Conception d'édifices & Maîtrise d'œuvre",
            "Architecture d'intérieur & Design d'espace",
            "Rénovation patrimoniale & Réhabilitation",
            "Décoration & Aménagement intérieur"
        ]
    },
    {
        "id": "ingenierie-bureaux-etudes",
        "name": "Ingénierie & Bureaux d'Études",
        "icon": "📐",
        "description": "Calculs de structures, résistance des matériaux, génie civil, dessin technique CAO/DAO et ingénierie acoustique.",
        "subdomains": [
            "Ingénierie de chantier & Travaux",
            "Génie civil, Calculs & Ouvrages d'art",
            "Calcul de structures & Stabilité",
            "Dessin technique & Modélisation CAO/DAO",
            "Ingénierie acoustique & Confort sonore"
        ]
    },
    {
        "id": "economie-construction-metres",
        "name": "Économie de la Construction & Métrés",
        "icon": "📊",
        "description": "Métrés, études de prix, chiffrage analytique, estimation financière et montage stratégique des appels d'offres.",
        "subdomains": [
            "Métrés, Chiffrage & Estimation financière",
            "Chiffrage stratégique & Appels d'offres",
            "Sous-détails de prix & Déboursés secs",
            "Suivi budgétaire & Vérification des situations"
        ]
    },
    {
        "id": "geometre-topographie",
        "name": "Géomètre, Topographie & Cartographie",
        "icon": "🗺️",
        "description": "Mesures de haute précision, délimitation foncière, photogrammétrie par drone, SIG et implantation de chantiers.",
        "subdomains": [
            "Topographie, Implantation & Foncier",
            "Bornage & Délimitation juridique",
            "Photogrammétrie par drone & LiDAR",
            "Systèmes d'Information Géographique (SIG)"
        ]
    },
    {
        "id": "urbanisme-amenagement",
        "name": "Urbanisme, Paysage & Aménagement",
        "icon": "🏙️",
        "description": "Planification urbaine, conception d'éco-quartiers, mobilités douces et aménagement durable du territoire.",
        "subdomains": [
            "Planification urbaine & Éco-quartiers",
            "Mobilités & Réseaux de transport",
            "Espaces publics & Végétalisation urbaine",
            "Concertation citoyenne & Sociologie urbaine"
        ]
    },
    {
        "id": "gros-oeuvre-maconnerie",
        "name": "Gros Œuvre, Maçonnerie & Béton",
        "icon": "🧱",
        "description": "Élévation des murs porteurs, maçonnerie de parpaings et briques, coffrage industriel de banches et coulage du béton.",
        "subdomains": [
            "Maçonnerie, Murs porteurs & Fondations",
            "Coffrage industriel, Banches & Béton armé",
            "Polyvalence gros œuvre & Chantiers",
            "Ferraillage & Éléments préfabriqués"
        ]
    },
    {
        "id": "charpente-enveloppe-couverture",
        "name": "Charpente, Couverture & Enveloppe",
        "icon": "🪵",
        "description": "Taille et levage d'ossatures bois et métalliques, couverture en tuiles, ardoises, zinc et étanchéité de toitures.",
        "subdomains": [
            "Charpente bois, Métal & Ossature",
            "Couverture, Zinguerie & Étanchéité",
            "Étanchéité toitures-terrasses & Façades",
            "Isolation sous toiture (Sarking)"
        ]
    },
    {
        "id": "travaux-publics-infrastructures",
        "name": "Travaux Publics & Infrastructures",
        "icon": "🛣️",
        "description": "Construction de routes, autoroutes, ponts, viaducs, voiries et réseaux divers (VRD) et aménagements urbains.",
        "subdomains": [
            "Construction routière, Enrobés & Voiries",
            "Ponts, Viaducs & Ouvrages d'art",
            "Voiries et Réseaux Divers (VRD)",
            "Terrassement routier & Assainissement"
        ]
    },
    {
        "id": "engins-terrassement-chantier",
        "name": "Terrassement & Engins de Chantier",
        "icon": "🚧",
        "description": "Conduite de pelles mécaniques, bulldozers, tombereaux et pilotage de grues à tour pour le levage lourd.",
        "subdomains": [
            "Conduite d'engins, Terrassement & Pelles",
            "Grutage à tour, Grue mobile & Levage lourd",
            "Nivellement guidé par GPS 3D",
            "Maintenance des matériels de terrassement"
        ]
    },
    {
        "id": "conduite-gestion-chantier",
        "name": "Gestion & Conduite de Chantier",
        "icon": "👷",
        "description": "Conduite de travaux, chefferie de chantier, maîtrise d'œuvre (MOE), coordination SPS et management opérationnel.",
        "subdomains": [
            "Conduite d'opérations & Coordination",
            "Management terrain & Sécurité de chantier",
            "Supervision technique & Encadrement direct",
            "Maîtrise d'œuvre & Coordination globale"
        ]
    },
    {
        "id": "second-oeuvre-finitions",
        "name": "Second Œuvre, Finitions & Carrelage",
        "icon": "🎨",
        "description": "Peinture en bâtiment, plâtrerie, pose de cloisons sèches, faux-plafonds, carrelage, faïence et revêtements de sol.",
        "subdomains": [
            "Peinture, Enduits & Ravalement",
            "Plaques de plâtre, Cloisons & Faux-plafonds",
            "Carrelage, Faïence & Mosaïque",
            "Revêtements de sol souples & Parquets"
        ]
    },
    {
        "id": "menuiserie-agencement",
        "name": "Menuiserie & Métiers Spécialisés",
        "icon": "🪚",
        "description": "Menuiserie bois, aluminium et PVC, agencement sur mesure, taille de pierre patrimoniale et travaux sur cordes.",
        "subdomains": [
            "Menuiserie bois, Aluminium & PVC",
            "Taille de pierre & Restauration patrimoniale",
            "Travaux acrobatiques & Grande hauteur",
            "Agencement intérieur & Ébénisterie"
        ]
    },
    {
        "id": "electricite-plomberie-cvc",
        "name": "Équipements : Électricité, Plomberie & CVC",
        "icon": "⚡",
        "description": "Électricité tertiaire et résidentielle, plomberie sanitaire, génie climatique, climatisation et ventilation.",
        "subdomains": [
            "Électricité du bâtiment & Distribution",
            "Plomberie sanitaire, Chauffage & Réseaux d'eau",
            "Climatisation, Ventilation & Traitement d'air",
            "Sécurité électrique & Énergies du bâtiment"
        ]
    },
    {
        "id": "bim-construction-numerique",
        "name": "BIM & Bâtiment Intelligent",
        "icon": "💻",
        "description": "Maquette numérique 3D (BIM), détection de clashs, domotique, Gestion Technique du Bâtiment (GTB) et Smart Building.",
        "subdomains": [
            "Maquette numérique 3D, BIM & Données",
            "Domotique, Gestion Technique (GTB) & Smart Building",
            "Coordination numérique de projet (openBIM)",
            "Jumeaux numériques & Bâtiments connectés"
        ]
    },
    {
        "id": "construction-durable-performance",
        "name": "Construction Durable, Éco-Conception & Affaires",
        "icon": "🌱",
        "description": "Éco-conception bas-carbone (RE2020), matériaux biosourcés, diagnostics immobiliers obligatoires et affaires BTP.",
        "subdomains": [
            "Éco-conception, Bâtiment bas-carbone & ACV",
            "Inspection technique, DPE & Sécurité",
            "Développement commercial & Gestion de contrats",
            "Économie circulaire & Réemploi de matériaux"
        ]
    }
]

print(f"Loaded {len(BTP_JOBS_PART1)} jobs from Part 1")
print(f"Loaded {len(BTP_JOBS_PART2)} jobs from Part 2")
print(f"Loaded {len(BTP_JOBS_PART3)} jobs from Part 3")

ALL_BTP_JOBS = BTP_JOBS_PART1 + BTP_JOBS_PART2 + BTP_JOBS_PART3
print(f"Total compiled jobs: {len(ALL_BTP_JOBS)}")

# Validation
domain_ids = {d["id"] for d in BTP_DOMAINS}
seen_ids = set()
seen_slugs = set()

for job in ALL_BTP_JOBS:
    jid = job.get("id")
    slug = job.get("slug")
    dom_id = job.get("domainId")
    title = job.get("title")

    if not jid or not slug or not title:
        raise ValueError(f"Missing mandatory field in job: {job}")
    if jid in seen_ids:
        raise ValueError(f"Duplicate job ID: {jid}")
    if slug in seen_slugs:
        raise ValueError(f"Duplicate job slug: {slug}")
    if dom_id not in domain_ids:
        raise ValueError(f"Invalid domainId '{dom_id}' in job {jid}")

    seen_ids.add(jid)
    seen_slugs.add(slug)

print("Validation successful! All 37 jobs have valid unique IDs, slugs, and domain references.")

# Generate frontend/js/orientation-btp-data.js
output_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "../frontend/js/orientation-btp-data.js"))

js_content = f"""/**
 * OrientationBtpData
 * Module de données officiel pour la grande famille :
 * 🏗️ BTP, ARCHITECTURE & CONSTRUCTION
 * Référentiel documentaire : L'Étudiant (Futurs métiers et fiches BTP)
 *
 * 15 Domaines d'Excellence • 37 Fiches Métiers Haute Profondeur
 */

(function (root, factory) {{
  if (typeof define === 'function' && define.amd) {{
    define([], factory);
  }} else if (typeof module === 'object' && module.exports) {{
    module.exports = factory();
  }} else {{
    root.OrientationBtpData = factory();
  }}
}})(typeof self !== 'undefined' ? self : this, function () {{
  'use strict';

  var BTP_DOMAINS = {json.dumps(BTP_DOMAINS, ensure_ascii=False, indent=4)};

  var BTP_JOBS = {json.dumps(ALL_BTP_JOBS, ensure_ascii=False, indent=4)};

  return {{
    getDomains: function () {{
      return JSON.parse(JSON.stringify(BTP_DOMAINS));
    }},
    getJobs: function () {{
      return JSON.parse(JSON.stringify(BTP_JOBS));
    }},
    getJobById: function (id) {{
      return BTP_JOBS.find(function (j) {{ return j.id === id; }}) || null;
    }},
    getJobBySlug: function (slug) {{
      return BTP_JOBS.find(function (j) {{ return j.slug === slug; }}) || null;
    }},
    getJobsByDomain: function (domainId) {{
      return BTP_JOBS.filter(function (j) {{ return j.domainId === domainId; }});
    }}
  }};
}});
"""

with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully wrote {output_path} ({len(js_content)} characters, {os.path.getsize(output_path)} bytes)")
