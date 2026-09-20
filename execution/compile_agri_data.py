# execution/compile_agri_data.py
import json
import os
import sys
import re

# Importer les listes de métiers des 4 modules
from agri_jobs_part1 import JOBS_PART1
from agri_jobs_part2 import JOBS_PART2
from agri_jobs_part3 import JOBS_PART3
from maritime_jobs import MARITIME_JOBS
from animal_production_jobs import ANIMAL_PRODUCTION_JOBS

ALL_JOBS = JOBS_PART1 + JOBS_PART2 + JOBS_PART3 + MARITIME_JOBS + ANIMAL_PRODUCTION_JOBS

# 11 Domaines structurés de la famille Agriculture, Élevage & Agroalimentaire
AGRI_DOMAINS = [
    {
        "id": "agronomie-sciences-agricoles",
        "name": "Agronomie & Sciences Agricoles",
        "icon": "🧪",
        "description": "Recherche agronomique, amélioration génétique variétale, expérimentation végétale, fertilité des sols et protection intégrée des cultures.",
        "subdomains": [
            "Agronomie générale",
            "Génétique & semences",
            "Expérimentation végétale",
            "Protection des cultures",
            "Biométrie & agrosciences"
        ]
    },
    {
        "id": "production-vegetale",
        "name": "Production Végétale, Cultures Spécialisées & Horticulture",
        "icon": "🌾",
        "description": "Grandes cultures céréalières, maraîchage biologique et conventionnel, horticulture ornementale, pépinières et viticulture-œnologie.",
        "subdomains": [
            "Grandes cultures & céréales",
            "Maraîchage & cultures légumières",
            "Horticulture ornementale & florale",
            "Pépinières fruitières & ornementales",
            "Viticulture & œnologie",
            "Arboriculture"
        ]
    },
    {
        "id": "elevage-productions-animales",
        "name": "Production Animale, Élevage & Filières",
        "icon": "🐄",
        "description": "Conduite d'élevages (bovins, porcins, ovins, caprins, avicoles), sélection génétique, nutrition animale et provenderie, conseil zootechnique, bien-être animal, bâtiments d'élevage, collecte laitière, centres d'allotement, filières viandes, qualité sanitaire et commerce du bétail.",
        "subdomains": [
            "Élevage & conduite des animaux",
            "Génétique & reproduction animale",
            "Alimentation animale & agrofourniture",
            "Santé, bien-être & suivi des animaux",
            "Recherche & expérimentation animale",
            "Conseil & accompagnement des élevages",
            "Bâtiments & infrastructures d'élevage",
            "Filière lait & collecte",
            "Filière viande & allotement",
            "Filières avicole, porcine, ovine & caprine",
            "Qualité, hygiène, sécurité & environnement (QHSE)",
            "Achats, approvisionnement & commerce du bétail"
        ]
    },
    {
        "id": "agroecologie-ressources-sols",
        "name": "Agroécologie, Ressources, Sols & Climat",
        "icon": "🌱",
        "description": "Agriculture régénérative, conservation des sols, agroforesterie, hydraulique agricole, gestion raisonnée de l'eau et méthanisation.",
        "subdomains": [
            "Agriculture régénérative & sols vivants",
            "Agroforesterie",
            "Hydraulique agricole & gestion de l'eau",
            "Économie circulaire & biogaz",
            "Transition carbone agricole"
        ]
    },
    {
        "id": "agroequipement-machinisme",
        "name": "Agroéquipement, Machinisme & Robotique Agricole",
        "icon": "🚜",
        "description": "Tracteurs et moissonneuses connectés, maintenance d'engins agricoles, conseil technico-commercial, robotique autonome et R&D machinisme.",
        "subdomains": [
            "Conduite d'engins & traction",
            "Maintenance & SAV agroéquipement",
            "Commerce & conseil agroéquipement",
            "R&D & conception agroéquipement",
            "Robotique agricole & automatismes"
        ]
    },
    {
        "id": "peche-aquaculture",
        "name": "Pêche, Aquaculture & Ressources Marines",
        "icon": "🌊",
        "description": "Pêche commerciale et hauturière, mariculture côtière, conchyliculture, valorisation et transformation industrielle des captures marines, contrôle de la qualité halieutique et gestion durable des écosystèmes océaniques.",
        "subdomains": [
            "Pêche & capture",
            "Aquaculture & mariculture",
            "Transformation des produits marins",
            "Maintenance & équipements marins",
            "Qualité & sécurité des produits aquatiques",
            "Gestion des ressources marines",
            "Biologie marine",
            "Navigation & opérations maritimes",
            "Logistique & commercialisation",
            "Technologies marines & numériques"
        ]
    },
    {
        "id": "foret-espaces-naturels",
        "name": "Forêt, Sylviculture, Paysage & Espaces Naturels",
        "icon": "🌲",
        "description": "Gestion durable des massifs forestiers, filière bois, aménagement paysager des villes et jardins, élagage et soins aux arbres.",
        "subdomains": [
            "Gestion forestière & sylviculture",
            "Exploitation & travaux forestiers",
            "Aménagement paysager & espaces verts",
            "Soins aux arbres & élagage"
        ]
    },
    {
        "id": "agroalimentaire-transformation-qualite",
        "name": "Agroalimentaire, Transformation & Qualité Sanitaire",
        "icon": "🍲",
        "description": "Transformation industrielle des récoltes, R&D et formulation alimentaire, qualité sanitaire (HACCP, IFS), fermentation et emballages durables.",
        "subdomains": [
            "Production & conditionnement industriel",
            "R&D & procédés agroalimentaires",
            "Qualité, hygiène & sécurité sanitaire",
            "Fermentation & boissons"
        ]
    },
    {
        "id": "economie-gestion-conseil-rural",
        "name": "Économie, Gestion, Droit & Conseil Rural",
        "icon": "📊",
        "description": "Pilotage économique des exploitations, comptabilité agricole, financement bancaire du monde rural, assurances récolte et droit foncier rural.",
        "subdomains": [
            "Gestion financière & conseil stratégique",
            "Financement bancaire & assurances agricoles",
            "Droit rural & foncier",
            "Négoce & commerce agricole"
        ]
    },
    {
        "id": "agritech-agriculture-numerique",
        "name": "AgriTech, Numérique & Agriculture de Précision",
        "icon": "🛰️",
        "description": "Objets connectés (IoT), stations météo intelligentes, télédétection par drone multispectral, Big Data agronomique et intelligence artificielle.",
        "subdomains": [
            "IoT, capteurs & fermes connectées",
            "Drones, imagerie & télédétection",
            "Big Data & IA agronomique",
            "Plateformes logicielles & traçabilité"
        ]
    },
    {
        "id": "entrepreneuriat-developpement-rural",
        "name": "Entrepreneuriat, Installation & Développement Rural",
        "icon": "🏛️",
        "description": "Création et reprise de fermes (DJA), direction d'entreprises agricoles et coopératives, circuits courts et dynamisation économique des terroirs.",
        "subdomains": [
            "Entrepreneuriat & gestion d'exploitation",
            "Management coopératif & développement territorial",
            "Installation des jeunes agriculteurs",
            "Circuits courts & agritourisme"
        ]
    }
]

# Normalisation et enrichissement de chaque fiche métier
for job in ALL_JOBS:
    # Harmonisation domaine Pêche, Aquaculture & Ressources Marines
    if job.get("domainId") == "peche-aquaculture":
        job["domain"] = "Pêche, Aquaculture & Ressources Marines"
        if job.get("subdomain") == "Aquaculture continentale & marine":
            job["subdomain"] = "Aquaculture & mariculture"
        elif job.get("subdomain") == "Gestion des stocks & biologie marine":
            job["subdomain"] = "Gestion des ressources marines"

    # Harmonisation domaine Production Animale, Élevage & Filières
    if job.get("domainId") == "elevage-productions-animales":
        job["domain"] = "Production Animale, Élevage & Filières"
        if job.get("id") == "responsable-elevage":
            job["subdomain"] = "Élevage & conduite des animaux"
        elif job.get("id") == "technicien-conseil-elevage":
            job["subdomain"] = "Conseil & accompagnement des élevages"
        elif job.get("id") == "aviculteur":
            job["subdomain"] = "Filières avicole, porcine, ovine & caprine"

    # Construction ou normalisation de salaryRanges
    if not job.get("salaryRanges") and job.get("salary"):
        parts = job["salary"].split("•")
        fr_part = next((p for p in parts if "France" in p or "🇫🇷" in p), "")
        qc_part = next((p for p in parts if "Québec" in p or "Canada" in p or "🇨🇦" in p), "")
        sn_part = next((p for p in parts if "Sénégal" in p or "🇸🇳" in p or "Afrique" in p), "")

        sr = {}
        if fr_part:
            fr_clean = re.sub(r"^.*?🇫🇷\s*France\s*:\s*", "", fr_part, flags=re.IGNORECASE).strip()
            sr["france"] = {
                "raw": fr_clean,
                "range": fr_clean,
                "source": "Groupe ESA / APEC / Référentiel Élevage" if job.get("sourceESA") else ("Onisep / Studyrama" if job.get("sourceOnisep") else "APECITA / Marché agro-maritime")
            }
        if qc_part:
            qc_clean = re.sub(r"^.*?🇨🇦\s*(?:Québec|Canada)\s*:\s*", "", qc_part, flags=re.IGNORECASE).strip()
            sr["quebec"] = {
                "raw": qc_clean,
                "range": qc_clean,
                "source": "ÉvoluPêches" if job.get("sourceEvoluPeches") else "Référentiel Québec"
            }
        if sn_part:
            sn_clean = re.sub(r"^.*?(?:🇸🇳\s*Sénégal|🇸🇳\s*International\s*/\s*Afrique)\s*:\s*", "", sn_part, flags=re.IGNORECASE).strip()
            sr["senegal"] = {
                "raw": sn_clean,
                "range": sn_clean,
                "source": "Filières animales & élevage (Sénégal / UEMOA)" if job.get("sourceESA") else ("Filières maritimes & halieutiques (Sénégal / UEMOA)" if job.get("sourceEvoluPeches") else "Filières agricoles & agro-industries (Sénégal / UEMOA)")
            }
        job["salaryRanges"] = sr

print(f"Compilation de {len(ALL_JOBS)} fiches métiers sur {len(AGRI_DOMAINS)} domaines...")

# Construction du fichier JS
header = """/**
 * CATALOGUE DES MÉTIERS DE L'AGRICULTURE, ÉLEVAGE, AGROALIMENTAIRE, PRODUCTION ANIMALE & RESSOURCES MARINES
 * Le Monde du Travail — 11 Domaines d'Excellence & Référentiel Pédagogique
 * Sources documentaires principales :
 * - Groupe ESA (École Supérieure des Agricultures d'Angers - Filières Productions Animales, BTS Métiers de l'élevage, Licence Pro PA, URSE)
 * - ÉvoluPêches (Comité sectoriel de main-d'œuvre de la pêche maritime du Québec)
 * - Onisep (Agronomie, Halieutique, Forêt, Agroalimentaire)
 * - Studyrama (Agriculture, Élevage, Viticulture, Machinisme)
 * Contextualisation Afrique de l'Ouest : EISMV Dakar, ISFAR Bambey, ISRA LNERV, ENSA Thiès, ENFM Dakar, CRODT, IUPA, ANA
 * Total métiers documentés : 67 fiches détaillées haute profondeur (dont 25 dédiées aux productions animales et 12 aux métiers maritimes)
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. LES 11 DOMAINES DE L'AGRICULTURE, ÉLEVAGE, AGROALIMENTAIRE & RESSOURCES MARINES
  // =========================================================================
  const AGRI_DOMAINS = """ + json.dumps(AGRI_DOMAINS, ensure_ascii=False, indent=4) + """;

  // =========================================================================
  // 2. LES 67 FICHES MÉTIERS DÉTAILLÉES HAUTE PROFONDEUR
  // =========================================================================
  const AGRI_JOBS = """ + json.dumps(ALL_JOBS, ensure_ascii=False, indent=4) + """;

  // =========================================================================
  // 3. EXPORT DU MODULE ORIENTATION AGRI DATA
  // =========================================================================
  const OrientationAgriData = {
    DOMAINS: AGRI_DOMAINS,
    JOBS: AGRI_JOBS,
    getDomains: function () {
      return AGRI_DOMAINS;
    },
    getJobs: function () {
      return AGRI_JOBS;
    },
    getJobBySlug: function (slug) {
      if (!slug) return null;
      return AGRI_JOBS.find(j => j.slug === slug || j.id === slug) || null;
    }
  };

  if (typeof window !== 'undefined') {
    window.OrientationAgriData = OrientationAgriData;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = OrientationAgriData;
  }

  if (typeof console !== 'undefined' && console.log) {
    console.log('✅ OrientationAgriData : ' + AGRI_JOBS.length + ' fiches détaillées Agriculture, Élevage, Agroalimentaire & Pêche maritime initialisées sur ' + AGRI_DOMAINS.length + ' domaines d\\\'excellence.');
  }
})();
"""

output_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "../frontend/js/orientation-agri-data.js"))
with open(output_path, "w", encoding="utf-8") as f:
    f.write(header)

print(f"✅ Fichier généré avec succès : {output_path} ({os.path.getsize(output_path)} octets)")
