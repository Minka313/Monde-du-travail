# execution/compile_energy_data.py
import json
import os
import sys

# Ensure current directory is in sys.path
sys.path.insert(0, os.path.dirname(__file__))

from energy_jobs_part1 import ENERGY_JOBS_PART1
from energy_jobs_part2 import ENERGY_JOBS_PART2

ENERGY_DOMAINS = [
    {
        "id": "recherche-ingenierie-etudes",
        "name": "Recherche, Développement & Ingénierie de Projet",
        "icon": "🔬",
        "description": "R&D sur les technologies de rupture, modélisation thermodynamique, conception de systèmes et études de faisabilité énergétique.",
        "subdomains": [
            "R&D énergétique",
            "Études thermiques du bâtiment",
            "Génie climatique CVC",
            "Études énergétiques industrielles",
            "Affaires & Ingénierie énergétique"
        ]
    },
    {
        "id": "energie-solaire-pv-thermique",
        "name": "Énergie Solaire Photovoltaïque & Thermique",
        "icon": "☀️",
        "description": "Centrales solaires au sol, toitures photovoltaïques, autoconsommation, ombrières, solaire flottant et production d'eau chaude solaire thermique.",
        "subdomains": [
            "Chefferie de projet photovoltaïque",
            "Installation & Raccordement solaire",
            "Exploitation & Maintenance de centrales PV",
            "Solaire thermique & Chauffe-eau solaires",
            "Systèmes solaires autonomes & Pompage solaire"
        ]
    },
    {
        "id": "energie-eolienne-onshore-offshore",
        "name": "Énergie Éolienne Onshore & Offshore",
        "icon": "💨",
        "description": "Développement de parcs éoliens terrestres et maritimes (posés et flottants), études de vent, travaux de raccordement et maintenance de turbines en hauteur.",
        "subdomains": [
            "Développement éolien terrestre",
            "Éolien offshore posé & flottant",
            "Maintenance de turbines éoliennes",
            "Inspection en hauteur & Pales",
            "Génie électrique éolien"
        ]
    },
    {
        "id": "hydroelectricite-hydraulique",
        "name": "Hydroélectricité & Aménagements Hydrauliques",
        "icon": "💧",
        "description": "Grands barrages de retenue, centrales au fil de l'eau, Stations de Transfert d'Énergie par Pompage (STEP) et pico/micro-turbines hydrauliques.",
        "subdomains": [
            "Ingénierie de barrages & Génie civil hydraulique",
            "Exploitation de centrales hydroélectriques",
            "Micro & Petite hydraulique rurale",
            "Maintenance des turbines hydrauliques (Pelton, Francis, Kaplan)",
            "Gestion des réservoirs & Sécurité des digues"
        ]
    },
    {
        "id": "geothermie-chaleur-terre",
        "name": "Géothermie & Énergie de la Terre",
        "icon": "🌋",
        "description": "Chaleur de la terre pour le chauffage urbain (basse enthalpie) et production d'électricité par vapeur souterraine (haute enthalpie) ou sondes géothermiques.",
        "subdomains": [
            "Géothermie haute température & Électricité",
            "Géothermie très basse énergie & Pompes à chaleur géothermiques",
            "Forage géothermique profond",
            "Réseaux de chaleur géothermiques urbains",
            "Hydrogéologie thermique"
        ]
    },
    {
        "id": "biomasse-biogaz-dechets",
        "name": "Biomasse, Biogaz & Valorisation Énergétique",
        "icon": "🌿",
        "description": "Transformation des matières organiques en énergie : méthanisation agricole et industrielle, biogaz, biométhane carburant et chaufferies bois-énergie.",
        "subdomains": [
            "Méthanisation agricole & Déchets organiques",
            "Biométhane épuré & Injection réseau",
            "Biomasse solide & Chaufferies bois",
            "Cogénération biomasse agro-industrielle",
            "Valorisation énergétique des déchets (CSR / UIOM)"
        ]
    },
    {
        "id": "reseaux-transport-distribution",
        "name": "Réseaux Électriques, Transport & Distribution",
        "icon": "⚡",
        "description": "Lignes très haute tension aériennes et souterraines, postes de transformation, dispatching temps réel et réseaux électriques intelligents (Smart Grids).",
        "subdomains": [
            "Construction & Travaux de réseaux HT/BT",
            "Conduite, Télégestion & Dispatching de réseaux",
            "Smart grids & Réseaux communicants",
            "Maintenance de lignes & Postes sources",
            "Interconnexions régionales & Électrification rurale"
        ]
    },
    {
        "id": "energie-nucleaire-surete",
        "name": "Énergie Nucléaire & Sûreté",
        "icon": "⚛️",
        "description": "Conduite des réacteurs nucléaires décarbonés, maintenance mécanique et chaudronnerie en zone contrôlée, sûreté, radioprotection et gestion des arrêts de tranche.",
        "subdomains": [
            "Conduite de réacteur & Exploitation de tranche",
            "Maintenance mécanique, chaudronnerie & robinetterie nucléaire",
            "Contrôle radiologique & Sécurité nucléaire",
            "Ingénierie de sûreté & Facteurs humains",
            "Démantèlement & Gestion des combustibles"
        ]
    },
    {
        "id": "genie-climatique-cvc",
        "name": "Génie Climatique, Froid & Systèmes CVC",
        "icon": "❄️",
        "description": "Chauffage, Ventilation, Climatisation (CVC), réfrigération industrielle et commerciale, fluides frigorigènes écologiques et pompes à chaleur réversibles.",
        "subdomains": [
            "Froid commercial/industriel & CVC tertiaire",
            "Climatisation de précision (data centers, blocs opératoires)",
            "Pompes à chaleur & Éco-conception thermique",
            "Maintenance multitechnique génie climatique",
            "Fluides naturels & Transition F-Gas"
        ]
    },
    {
        "id": "maitrise-energie-audit-meer",
        "name": "Maîtrise de l'Énergie, Audit & Performance MEER",
        "icon": "📊",
        "description": "Efficacité énergétique industrielle et tertiaire, management de l'énergie ISO 50001, audit réglementaire, valorisation CEE et récupération de chaleur fatale.",
        "subdomains": [
            "Audit énergétique & Décarbonation industrielle",
            "Management de l'énergie ISO 50001",
            "Certificats d'Économies d'Énergie (CEE)",
            "Sous-comptage & IoT énergétique",
            "Décret tertiaire & Sobriété immobilière"
        ]
    },
    {
        "id": "marches-trading-economie-energie",
        "name": "Marchés, Trading & Économie de l'Énergie",
        "icon": "📈",
        "description": "Négociation de gros de l'électricité et du gaz sur bourses spot/terme, contrats d'achat d'énergie à long terme (PPA), quotas de carbone et analyse prédictive des cours.",
        "subdomains": [
            "Trading d'électricité & Gaz / Marchés de capacité",
            "Marchés Day-Ahead & Intraday",
            "Contrats PPA (Power Purchase Agreements)",
            "Garanties d'Origine & Quotas carbone",
            "Modélisation quantitative des prix"
        ]
    },
    {
        "id": "commerce-solutions-energetiques",
        "name": "Commerce, Vente & Solutions Énergétiques B2B",
        "icon": "🤝",
        "description": "Vente de contrats de performance énergétique garantie (CPE), d'installations solaires photovoltaïques en tiers-investissement et de services d'utilités aux entreprises.",
        "subdomains": [
            "Contrats de performance énergétique (CPE) & Équipements CVC/Solaire",
            "Vente consultative de solutions photovoltaïques B2B",
            "Services d'efficacité énergétique aux collectivités",
            "Distribution de matériel électrique et EnR",
            "Montage de financements énergétiques verts"
        ]
    },
    {
        "id": "hse-securite-risques-energie",
        "name": "Hygiène, Sécurité, Environnement & Risques Énergétiques",
        "icon": "🦺",
        "description": "Gestion des risques industriels majeurs, habilitations électriques, zonage atmosphères explosives (ATEX), travaux en hauteur et conformité environnementale ICPE.",
        "subdomains": [
            "Prévention des risques électriques, chimiques & industriels",
            "Sécurité sur chantiers éoliens & solaires",
            "Réglementation ATEX & Risques atmosphériques",
            "Systèmes de management intégré ISO 14001 / ISO 45001",
            "Plans d'intervention d'urgence & Protection des sites critiques"
        ]
    },
    {
        "id": "exploration-ressources-sous-sol",
        "name": "Exploration & Ressources Géologiques du Sous-Sol",
        "icon": "🌍",
        "description": "Géosciences appliquées : exploration d'aquifères profonds pour géothermie, stockage souterrain de CO2 et d'hydrogène, et prospection de nouvelles ressources propres.",
        "subdomains": [
            "Modélisation géologique & Caractérisation de réservoirs",
            "Géophysique appliquée & Imagerie sismique",
            "Stockage géologique de gaz (CO2, H2)",
            "Prospection d'hydrogène naturel blanc",
            "Mécanique des roches & Risques de sismicité induite"
        ]
    }
]

def compile_data():
    all_jobs = ENERGY_JOBS_PART1 + ENERGY_JOBS_PART2
    print(f"Loaded {len(ENERGY_JOBS_PART1)} jobs from Part 1")
    print(f"Loaded {len(ENERGY_JOBS_PART2)} jobs from Part 2")
    print(f"Total compiled jobs: {len(all_jobs)}")

    # Validation
    domain_ids = {d["id"] for d in ENERGY_DOMAINS}
    job_ids = set()
    job_slugs = set()

    for idx, job in enumerate(all_jobs):
        jid = job.get("id")
        jslug = job.get("slug")
        jtitle = job.get("title")
        jdomain_id = job.get("domainId")

        if not jid or not jslug or not jtitle:
            raise ValueError(f"Job at index {idx} missing id/slug/title")

        if jid in job_ids:
            raise ValueError(f"Duplicate job ID found: {jid}")
        job_ids.add(jid)

        if jslug in job_slugs:
            raise ValueError(f"Duplicate job slug found: {jslug}")
        job_slugs.add(jslug)

        if jdomain_id not in domain_ids:
            raise ValueError(f"Job '{jid}' has invalid domainId '{jdomain_id}' not in ENERGY_DOMAINS")

        if job.get("familyId") != "energie-renouvelable":
            raise ValueError(f"Job '{jid}' has invalid familyId '{job.get('familyId')}'")

    print(f"Validation successful! All {len(all_jobs)} jobs have valid unique IDs, slugs, and domain references.")

    # Generate JavaScript file
    domains_json = json.dumps(ENERGY_DOMAINS, ensure_ascii=False, indent=4)
    jobs_json = json.dumps(all_jobs, ensure_ascii=False, indent=4)

    js_content = f"""/**
 * CATALOGUE OFFICIEL DES MÉTIERS DE L'ÉNERGIE, ÉLECTRICITÉ & TRANSITION ÉNERGÉTIQUE
 * Le Monde du Travail — 14 Domaines d'Excellence & Référentiel Pédagogique
 * Source documentaire principale : Référentiel officiel Energierecrute (portail emploi/formation énergie)
 * Total métiers documentés : {len(all_jobs)} fiches détaillées haute profondeur
 */

(function () {{
  'use strict';

  // =========================================================================
  // 1. LES 14 DOMAINES DE L'ÉNERGIE, ÉLECTRICITÉ & TRANSITION ÉNERGÉTIQUE
  // =========================================================================
  const ENERGY_DOMAINS = {domains_json};

  // =========================================================================
  // 2. LES {len(all_jobs)} FICHES MÉTIERS DÉTAILLÉES (HAUTE PROFONDEUR)
  // =========================================================================
  const ENERGY_JOBS = {jobs_json};

  // =========================================================================
  // 3. EXPORT DU MODULE ORIENTATION ENERGY DATA
  // =========================================================================
  const OrientationEnergyData = {{
    DOMAINS: ENERGY_DOMAINS,
    JOBS: ENERGY_JOBS,
    getDomains: function () {{
      return ENERGY_DOMAINS;
    }},
    getJobs: function () {{
      return ENERGY_JOBS;
    }},
    getJobBySlug: function (slug) {{
      if (!slug) return null;
      return ENERGY_JOBS.find(j => j.slug === slug || j.id === slug) || null;
    }}
  }};

  if (typeof window !== 'undefined') {{
    window.OrientationEnergyData = OrientationEnergyData;
  }}
  if (typeof module !== 'undefined' && module.exports) {{
    module.exports = OrientationEnergyData;
  }}

  if (typeof console !== 'undefined' && console.log) {{
    console.log('⚡ OrientationEnergyData : {len(all_jobs)} fiches détaillées de l\\'Énergie, Électricité & Transition Énergétique initialisées sur {len(ENERGY_DOMAINS)} domaines.');
  }}
}})();
"""

    output_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "frontend", "js", "orientation-energy-data.js"))
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(js_content)

    print(f"Successfully wrote {output_path} ({len(js_content)} characters, {os.path.getsize(output_path)} bytes)")

if __name__ == "__main__":
    compile_data()
