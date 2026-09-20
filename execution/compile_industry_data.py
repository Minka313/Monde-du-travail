#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
COMPILATEUR DU MODULE DE DONNÉES OFFICIEL INDUSTRIE, TECHNOLOGIES & INGÉNIERIE
Assemble les 30 domaines industriels et les 36 fiches métiers documentées
Génère frontend/js/orientation-industry-data.js au format UMD
"""

import json
import os
from industry_jobs_part1 import INDUSTRY_JOBS_PART1
from industry_jobs_part2 import INDUSTRY_JOBS_PART2

DOMAINS = [
    {
        "id": "conception-ingenierie-indus",
        "name": "Conception & Ingénierie",
        "icon": "📐",
        "order": 1,
        "chainStage": "Conception & Modélisation",
        "description": "Imaginer, modéliser en 3D et concevoir les pièces, mécanismes et machines spéciales de l'industrie de demain.",
        "subdomains": ["Modélisation CAO 3D", "Design produit", "Ingénierie mécanique", "Calcul de structures"]
    },
    {
        "id": "mecanique-industrielle",
        "name": "Mécanique, Usinage & Outillage",
        "icon": "⚙️",
        "order": 2,
        "chainStage": "Fabrication mécanique",
        "description": "Façonner et sculpter le métal au micron près par tournage, fraisage CN, découpe, pliage et soudage de précision.",
        "subdomains": ["Usinage à commande numérique", "Ajustage & Montage", "Outillage de précision & Moules", "Chaudronnerie & Soudure"]
    },
    {
        "id": "genie-industriel-orga",
        "name": "Génie Industriel & Organisation",
        "icon": "🏗️",
        "order": 3,
        "chainStage": "Industrialisation & Méthodes",
        "description": "Optimiser les procédés de fabrication, définir les gammes d'atelier et chasser les gaspillages selon le Lean Manufacturing.",
        "subdomains": ["Méthodes & Industrialisation", "Lean Manufacturing", "Ergonomie des postes", "Chrono-analyse & Temps standards"]
    },
    {
        "id": "production-fabrication-indus",
        "name": "Production & Fabrication en Série",
        "icon": "🏭",
        "order": 4,
        "chainStage": "Production",
        "description": "Piloter les lignes de production, animer les équipes d'ateliers et transformer les matières premières en produits finis.",
        "subdomains": ["Conduite de ligne", "Pilotage d'atelier", "Management de production", "Performance industrielle (TRS)"]
    },
    {
        "id": "automatisation-robotique-indus",
        "name": "Automatisation, Robotique & Cobotique",
        "icon": "🤖",
        "order": 5,
        "chainStage": "Automatisation",
        "description": "Programmer les automates industriels et intégrer des robots et cobots collaboratifs pour rendre les usines agiles et sûres.",
        "subdomains": ["Automates programmables (API)", "Robotique industrielle", "Cobotique collaborative", "Supervision SCADA"]
    },
    {
        "id": "maintenance-industrielle",
        "name": "Maintenance Industrielle Multi-technique",
        "icon": "🔧",
        "order": 6,
        "chainStage": "Maintenance & Fiabilisation",
        "description": "Diagnostiquer, dépanner, entretenir et fiabiliser les équipements de production pour éliminer les arrêts de ligne.",
        "subdomains": ["Maintenance préventive", "Dépannage d'urgence", "Maintenance prédictive", "GMAO & Fiabilité"]
    },
    {
        "id": "electrotechnique-electronique-indus",
        "name": "Électrotechnique & Électronique Industrielle",
        "icon": "⚡",
        "order": 7,
        "chainStage": "Puissance & Contrôle",
        "description": "Alimenter les machines en puissance électrique et concevoir les cartes électroniques et capteurs de commande.",
        "subdomains": ["Distribution électrique d'usine", "Variateurs de vitesse", "Cartes électroniques", "Systèmes embarqués"]
    },
    {
        "id": "chimie-procedes-industriels",
        "name": "Chimie Industrielle & Génie des Procédés",
        "icon": "🧪",
        "order": 8,
        "chainStage": "Transformation chimique",
        "description": "Transformer la matière à l'échelle industrielle : réactions chimiques, distillation, séparation, raffinage et formulation.",
        "subdomains": ["Génie chimique", "Chimie fine", "Raffinage & Pétrochimie", "Formulation industrielle"]
    },
    {
        "id": "materiaux-metallurgie-indus",
        "name": "Matériaux, Métallurgie & Traitements",
        "icon": "🧱",
        "order": 9,
        "chainStage": "Matières premières",
        "description": "Élaborer, traiter thermiquement et caractériser les aciers, alliages légers, polymères et composites de pointe.",
        "subdomains": ["Sidérurgie & Fonderie", "Traitements thermiques & de surface", "Composites haute performance", "Polymères"]
    },
    {
        "id": "aeronautique-spatial-indus",
        "name": "Aéronautique & Spatial",
        "icon": "🛩️",
        "order": 10,
        "chainStage": "Aéronautique & Espace",
        "description": "Construire, équiper et certifier les aéronefs civils, satellites, lanceurs spatiaux et systèmes de défense.",
        "subdomains": ["Aérostructures", "Turboréacteurs & Propulsion", "Avionique de bord", "Maintenance MRO Part-145"]
    },
    {
        "id": "automobile-mobilite-indus",
        "name": "Automobile & Mobilité Électrique",
        "icon": "🚗",
        "order": 11,
        "chainStage": "Mobilité",
        "description": "Concevoir et fabriquer les véhicules thermiques, hybrides, électriques et leurs composants critiques (batteries, moteurs).",
        "subdomains": ["Véhicules électriques & Batteries", "Emboutissage & Carrosserie", "Chaîne de traction", "Sécurité passive (Crash)"]
    },
    {
        "id": "naval-maritime-industriel",
        "name": "Construction Navale & Maritime Industriel",
        "icon": "🚢",
        "order": 12,
        "chainStage": "Naval",
        "description": "Bâtir, caréner et moderniser les navires de commerce, bâtiments militaires, bateaux de pêche et structures offshore.",
        "subdomains": ["Architecture navale", "Chaudronnerie navale & Coque", "Propulsion marine", "Réparation en cale sèche"]
    },
    {
        "id": "textile-habillement-industriel",
        "name": "Textile & Matériaux Souples Industriels",
        "icon": "🧵",
        "order": 13,
        "chainStage": "Textile technique",
        "description": "Tisser, ennoblir et façonner les textiles techniques, géotextiles, vêtements professionnels et matériaux souples composites.",
        "subdomains": ["Textiles techniques", "Filature & Tissage industriel", "Ennoblissement & Teinture", "Confection automatisée"]
    },
    {
        "id": "pharma-biotech-industrielle",
        "name": "Pharmaceutique & Biotechnologies Industrielles",
        "icon": "💊",
        "order": 14,
        "chainStage": "Santé & Pharmacie",
        "description": "Formuler, conditionner sous atmosphère stérile et produire en série les médicaments, vaccins et dispositifs médicaux.",
        "subdomains": ["Salles blanches & Stérilité", "Bonnes Pratiques de Fabrication (BPF)", "Bioréacteurs", "Conditionnement pharmaceutique"]
    },
    {
        "id": "agro-industrie-transformation",
        "name": "Agro-Industrie & Lignes Agroalimentaires",
        "icon": "🍎",
        "order": 15,
        "chainStage": "Agroalimentaire",
        "description": "Transformer à grande échelle les produits agricoles et halieutiques : meunerie, conserveries, boissons, biscuiteries.",
        "subdomains": ["Procédés agroalimentaires", "Normes HACCP & Hygiène", "Embouteillage à grande vitesse", "Lignes de surgélation"]
    },
    {
        "id": "nucleaire-industriel",
        "name": "Industrie Nucléaire & Sûreté",
        "icon": "⚛️",
        "order": 16,
        "chainStage": "Nucléaire & Énergie",
        "description": "Fabriquer et maintenir les réacteurs, cuves sous haute pression et circuits primaires sous les exigences de sûreté les plus strictes.",
        "subdomains": ["Sûreté nucléaire", "Fabrication de composants primaires", "Radioprotection", "Démantèlement industriel"]
    },
    {
        "id": "energie-industrielle-procedes",
        "name": "Énergie Industrielle & Utilités",
        "icon": "⚡",
        "order": 17,
        "chainStage": "Utilités industrielles",
        "description": "Produire et distribuer les énergies indispensables à l'usine : vapeur, air comprimé, eau glacée, électricité et chaleur fatale.",
        "subdomains": ["Chaufferies industrielles & Vapeur", "Air comprimé & Réseaux fluides", "Efficacité énergétique (ISO 50001)", "Cogénération"]
    },
    {
        "id": "rd-recherche-industrielle",
        "name": "Recherche & Développement Industrielle",
        "icon": "🔬",
        "order": 18,
        "chainStage": "R&D & Innovation",
        "description": "Explorer les ruptures technologiques, lever les verrous scientifiques, créer des preuves de concept et breveter les innovations.",
        "subdomains": ["Recherche appliquée", "Brevets & Propriété industrielle", "Prototypes de rupture", "Partenariats scientifiques"]
    },
    {
        "id": "essais-experimentation-indus",
        "name": "Essais, Bancs de Test & Expérimentation",
        "icon": "🧪",
        "order": 19,
        "chainStage": "Essais & Validation",
        "description": "Mettre les prototypes à l'épreuve des pires conditions (vibrations, chocs thermiques, fatigue) pour valider leur endurance.",
        "subdomains": ["Bancs d'essais instrumentés", "Essais climatiques & vibratoires", "Mesures physiques & Capteurs", "Corrélation essais-calcul"]
    },
    {
        "id": "qse-securite-environnement-indus",
        "name": "Qualité, Sécurité & Environnement (QSE)",
        "icon": "✅",
        "order": 20,
        "chainStage": "QSE & Sécurité",
        "description": "Garantir le zéro accident, protéger la santé des salariés, certifier l'usine (ISO 9001/14001/45001) et maîtriser les rejets.",
        "subdomains": ["Sécurité au travail & DUERP", "Systèmes de management intégré", "Gestion des rejets & Déchets", "Culture de prévention"]
    },
    {
        "id": "controle-inspection-metrologie",
        "name": "Contrôle, Inspection & Contrôle Non Destructif",
        "icon": "📏",
        "order": 21,
        "chainStage": "Contrôle & Métrologie",
        "description": "Mesurer les pièces au micron sur MMT et radiographier les métaux pour déceler les défauts internes sans détruire la pièce.",
        "subdomains": ["Contrôle Non Destructif (CND)", "Métrologie tridimensionnelle (MMT)", "Inspection réglementaire", "Gestion du parc d'étalons"]
    },
    {
        "id": "logistique-supply-chain-indus",
        "name": "Logistique Industrielle & Supply Chain",
        "icon": "📦",
        "order": 22,
        "chainStage": "Supply Chain & Flux",
        "description": "Organiser la circulation fluide des matières premières, composants et produits finis, en juste-à-temps et sans rupture.",
        "subdomains": ["Gestion des approvisionnements", "Gestion des stocks (WMS)", "Alimentation des lignes (Kanban)", "Expéditions internationales"]
    },
    {
        "id": "planification-ordonnancement-indus",
        "name": "Planification & Ordonnancement",
        "icon": "🗓️",
        "order": 23,
        "chainStage": "Planification",
        "description": "Planifier chaque seconde des machines de l'usine pour satisfaire les commandes clients dans les délais promis au coût optimal.",
        "subdomains": ["Plan Directeur de Production (PDP)", "Ordonnancement à capacité finie", "Équilibrage charge/capacité", "Suivi du taux de service"]
    },
    {
        "id": "achats-industriels",
        "name": "Achats Industriels & Sourcing",
        "icon": "🛒",
        "order": 24,
        "chainStage": "Achats & Sourcing",
        "description": "Sélectionner et négocier auprès des fournisseurs mondiaux les matières premières, composants critiques et équipements d'usine.",
        "subdomains": ["Sourcing international", "Négociation de contrats industriels", "Gestion des risques fournisseurs", "Achats durables & RSE"]
    },
    {
        "id": "commerce-technico-commercial-indus",
        "name": "Commerce & Ingénierie Commerciale B2B",
        "icon": "💼",
        "order": 25,
        "chainStage": "Vente & Affaires",
        "description": "Vendre des solutions industrielles complexes chiffrées en millions d'euros en conjuguant expertise technique et stratégie d'affaires.",
        "subdomains": ["Vente de biens d'équipement", "Chiffrage d'affaires complexes", "Avant-vente technique", "Gestion de grands comptes industriels"]
    },
    {
        "id": "eco-conception-industrie-durable",
        "name": "Éco-Conception & Industrie Durable",
        "icon": "🌱",
        "order": 26,
        "chainStage": "Décarbonation & Recyclage",
        "description": "Réduire l'empreinte carbone dès la planche à dessin : analyse du cycle de vie (ACV), réparabilité, allègement et recyclabilité.",
        "subdomains": ["Analyse du Cycle de Vie (ACV)", "Économie circulaire industrielle", "Matériaux recyclés & Biosourcés", "Décarbonation des usines"]
    },
    {
        "id": "industrie-4-0-usines-intelligentes",
        "name": "Industrie 4.0 & Usines Intelligentes",
        "icon": "🧠",
        "order": 27,
        "chainStage": "Transformation 4.0",
        "description": "Connecter les machines par l'IoT industriel (IIoT), collecter les données d'atelier et piloter les usines par les données en temps réel.",
        "subdomains": ["IoT industriel (IIoT)", "Systèmes d'exécution (MES)", "Cybersécurité industrielle (OT)", "Cloud manufacturier"]
    },
    {
        "id": "jumeau-numerique-simulation-indus",
        "name": "Jumeau Numérique & Simulation",
        "icon": "🥽",
        "order": 28,
        "chainStage": "Jumeau Numérique",
        "description": "Créer la réplique virtuelle interactive de l'usine pour tester virtuellement les automatismes et anticiper les pannes.",
        "subdomains": ["Virtual Commissioning", "Réalité virtuelle & Augmentée", "Simulation de flux d'usine", "Jumeaux numériques prédictifs"]
    },
    {
        "id": "fabrication-additive-impression3d",
        "name": "Fabrication Additive & Impression 3D",
        "icon": "🖨️",
        "order": 29,
        "chainStage": "Impression 3D",
        "description": "Fabriquer des pièces métalliques ou polymères couche par couche par fusion laser pour alléger et créer des formes inédites.",
        "subdomains": ["Impression 3D métal (SLM / DMLS)", "Design for Additive Manufacturing (DfAM)", "Optimisation topologique", "Polymères industriels (SLS)"]
    },
    {
        "id": "management-industriel-direction",
        "name": "Management Industriel & Direction de Site",
        "icon": "🏢",
        "order": 30,
        "chainStage": "Direction & Gouvernance",
        "description": "Diriger l'ensemble des femmes, hommes, budgets et machines d'un site industriel avec une vision stratégique et humaine.",
        "subdomains": ["Direction d'usine (P&L)", "Gouvernance industrielle", "Dialogue social & CSE", "Investissements stratégiques (CAPEX)"]
    }
]

ALL_JOBS = INDUSTRY_JOBS_PART1 + INDUSTRY_JOBS_PART2

def compile_data():
    print(f"📦 Compilation des données Industrie...")
    print(f" - {len(DOMAINS)} Domaines définis")
    print(f" - {len(ALL_JOBS)} Métiers assemblés ({len(INDUSTRY_JOBS_PART1)} Bloc A + {len(INDUSTRY_JOBS_PART2)} Bloc B)")

    # Assertions d'intégrité
    assert len(DOMAINS) == 30, f"Erreur : 30 domaines attendus, trouvé {len(DOMAINS)}"
    assert len(ALL_JOBS) == 36, f"Erreur : 36 métiers attendus, trouvé {len(ALL_JOBS)}"

    ids = set()
    slugs = set()
    for job in ALL_JOBS:
        assert job["id"] not in ids, f"ID en doublon : {job['id']}"
        assert job["slug"] not in slugs, f"Slug en doublon : {job['slug']}"
        ids.add(job["id"])
        slugs.add(job["slug"])

        # Formatage standard du salaire et salaryRanges
        if isinstance(job.get("salary"), dict):
            raw_salary = job["salary"]
            fr = raw_salary.get("france", {})
            sn = raw_salary.get("senegal", {})
            fr_str = f"{fr.get('entry', 0):,} - {fr.get('expert', 0):,} € brut/an".replace(",", " ")
            sn_str = f"{sn.get('entry', 0):,} - {sn.get('expert', 0):,} FCFA net/mois".replace(",", " ")
            salary_str = f"🇫🇷 France : {fr_str} • 🇸🇳 Sénégal : {sn_str}"
            
            job["salaryRanges"] = {
                "france": {
                    "source": fr.get("note", "L'Étudiant & UIMM"),
                    "range": fr_str,
                    "junior": f"{fr.get('entry', 0):,} € brut/an".replace(",", " "),
                    "senior": f"{fr.get('expert', 0):,} € brut/an".replace(",", " ")
                },
                "senegal": {
                    "source": sn.get("note", "Marché Sénégal & UEMOA"),
                    "range": sn_str,
                    "junior": f"{sn.get('entry', 0):,} FCFA net/mois".replace(",", " "),
                    "senior": f"{sn.get('expert', 0):,} FCFA net/mois".replace(",", " ")
                }
            }
            job["salary"] = salary_str

        # Harmonisation des champs pour l'interface UI
        if not job.get("simpleDefinition"):
            job["simpleDefinition"] = job.get("shortDescription", "")

        if not job.get("level"):
            title_lower = job["title"].lower()
            if any(k in title_lower for k in ["ingénieur", "directeur", "responsable", "chercheur"]):
                job["level"] = "Bac +5 (Diplôme d'Ingénieur / Master)"
            elif any(k in title_lower for k in ["technicien", "dessinateur", "programmeur", "qualiticien"]):
                job["level"] = "Bac +2 à Bac +3 (BTS / BUT / Licence pro)"
            else:
                job["level"] = "CAP / Bac Pro à Bac +2"

        if "studies" in job and isinstance(job["studies"], dict):
            if "schools" in job["studies"]:
                schools = job["studies"]["schools"]
                france_schools = [s["name"] if isinstance(s, dict) else s for s in schools if (isinstance(s, dict) and (s.get("country") == "France" or s.get("scope") == "France")) or ("France" in str(s))]
                senegal_schools = [s["name"] if isinstance(s, dict) else s for s in schools if (isinstance(s, dict) and (s.get("country") == "Sénégal" or s.get("scope") == "Sénégal")) or ("Sénégal" in str(s) or "Dakar" in str(s) or "Thiès" in str(s))]
                if not france_schools:
                    france_schools = ["IUT et Lycées Techniques de France (BTS / BUT)", "Grandes Écoles d'Ingénieurs (Arts et Métiers, INSA, Polytech)"]
                if not senegal_schools:
                    senegal_schools = ["École Supérieure Polytechnique de Dakar (ESP)", "Institut Supérieur d'Enseignement Professionnel (ISEP Diamniadio)", "Lycée Technique Industriel Delafosse"]
                job["studies"]["france"] = france_schools
                job["studies"]["senegal"] = senegal_schools

    # Construction du fichier JS UMD
    domains_json = json.dumps(DOMAINS, ensure_ascii=False, indent=2)
    jobs_json = json.dumps(ALL_JOBS, ensure_ascii=False, indent=2)

    js_content = f"""/**
 * 🏭 MODULE OFFICIEL DES MÉTIERS DE L'INDUSTRIE, TECHNOLOGIES & INGÉNIERIE
 * Le Monde du Travail - Cartographie d'Excellence Métiers
 * 
 * Sources de référence :
 * - L'Étudiant : Métiers du secteur Industrie et Technologies (https://www.letudiant.fr/metiers/secteur/industrie.html)
 * - Onisep : Référentiel des métiers du domaine mécanique (99 métiers)
 * 
 * Double contexte géographique :
 * - France (€ brut/an, BTS, BUT, Grandes Écoles d'ingénieurs)
 * - Sénégal & Afrique de l'Ouest (FCFA net/mois, ESP Dakar, EPT Thiès, ISEP, Dakar Marine, SOCOCIM)
 * 
 * 30 Domaines structurés • 36 Fiches métiers haute fidélité (6 onglets conformes)
 */

(function (root, factory) {{
    if (typeof define === 'function' && define.amd) {{
        define([], factory);
    }} else if (typeof module === 'object' && module.exports) {{
        var exp = factory();
        module.exports = exp;
        if (typeof global !== 'undefined') {{
            global.OrientationIndustryData = exp;
        }}
    }} else {{
        root.OrientationIndustryData = factory();
    }}
}}(typeof self !== 'undefined' ? self : this, function () {{
    'use strict';

    var DOMAINS = {domains_json};

    var JOBS = {jobs_json};

    return {{
        DOMAINS: DOMAINS,
        JOBS: JOBS,
        getDomains: function () {{
            return DOMAINS.slice();
        }},

        getJobs: function () {{
            return JOBS.slice();
        }},

        getJobById: function (id) {{
            if (!id) return null;
            var cleanId = String(id).toLowerCase().trim();
            for (var i = 0; i < JOBS.length; i++) {{
                if (JOBS[i].id.toLowerCase() === cleanId || JOBS[i].slug.toLowerCase() === cleanId) {{
                    return JOBS[i];
                }}
                if (JOBS[i].aliases && Array.isArray(JOBS[i].aliases)) {{
                    for (var a = 0; a < JOBS[i].aliases.length; a++) {{
                        if (JOBS[i].aliases[a].toLowerCase() === cleanId) {{
                            return JOBS[i];
                        }}
                    }}
                }}
            }}
            return null;
        }},

        getJobsByDomain: function (domainId) {{
            if (!domainId) return [];
            var cleanDomain = String(domainId).toLowerCase().trim();
            return JOBS.filter(function (job) {{
                return job.domainId && job.domainId.toLowerCase() === cleanDomain;
            }});
        }},

        getStats: function () {{
            return {{
                domainsCount: DOMAINS.length,
                jobsCount: JOBS.length,
                familyId: 'industrie-mecanique',
                familyName: 'Industrie, Technologies & Ingénierie',
                sources: ["L'Étudiant", "Onisep"]
            }};
        }}
    }};
}}));
"""

    output_path = os.path.join(os.path.dirname(__file__), "..", "frontend", "js", "orientation-industry-data.js")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(js_content)

    print(f"✅ Fichier généré avec succès : {output_path} ({len(js_content.encode('utf-8'))} octets)")

if __name__ == "__main__":
    compile_data()
