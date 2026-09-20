# execution/compile_agri_data.py
import json
import os
import sys

# Importer les listes de métiers des 3 parties
from agri_jobs_part1 import JOBS_PART1
from agri_jobs_part2 import JOBS_PART2
from agri_jobs_part3 import JOBS_PART3

ALL_JOBS = JOBS_PART1 + JOBS_PART2 + JOBS_PART3

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
        "name": "Élevage, Santé & Productions Animales",
        "icon": "🐄",
        "description": "Élevage bovin, ovin, caprin et porcin, aviculture moderne, conseil zootechnique, nutrition et reproduction animale.",
        "subdomains": [
            "Élevage bovin, ovin & caprin",
            "Aviculture & petits élevages",
            "Conseil zootechnique & nutrition",
            "Santé animale & reproduction"
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
        "name": "Pêche, Aquaculture & Ressources Halieutiques",
        "icon": "🐟",
        "description": "Élevage en eau douce et mer (pisciculture, conchyliculture), gestion durable des stocks halieutiques, biologie marine et océanographie des pêches.",
        "subdomains": [
            "Pêche maritime & fluviale",
            "Aquaculture continentale & marine",
            "Conchyliculture",
            "Gestion des stocks & biologie marine"
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

print(f"Compilation de {len(ALL_JOBS)} fiches métiers sur {len(AGRI_DOMAINS)} domaines...")

# Construction du fichier JS
header = """/**
 * CATALOGUE DES MÉTIERS DE L'AGRICULTURE, ÉLEVAGE & AGROALIMENTAIRE ENRICHI
 * Le Monde du Travail — 11 Domaines d'Excellence & Référentiel Pédagogique
 * Sources documentaires principales : Onisep (Agronome, Expérimentation, Halieutique, Forêt, Agroalimentaire)
 * & Studyrama (Fiches Métiers Agriculture, Élevage, Viticulture, Paysage, Agroéquipement)
 * Contextualisation Afrique de l'Ouest : ISRA, ENSA Thiès, CFPH Cambérène, ITA Dakar, SAED
 * Total métiers documentés : 35 fiches détaillées haute profondeur
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. LES 11 DOMAINES DE L'AGRICULTURE, ÉLEVAGE & AGROALIMENTAIRE
  // =========================================================================
  const AGRI_DOMAINS = """ + json.dumps(AGRI_DOMAINS, ensure_ascii=False, indent=4) + """;

  // =========================================================================
  // 2. LES 35 FICHES MÉTIERS DÉTAILLÉES HAUTE PROFONDEUR
  // =========================================================================
  const AGRI_JOBS = """ + json.dumps(ALL_JOBS, ensure_ascii=False, indent=4) + """;

  // =========================================================================
  // 2.b NORMALISATION MULTI-TERRITORIALE DES SALAIRES
  // =========================================================================
  AGRI_JOBS.forEach(job => {
    if (!job.salaryRanges && job.salary) {
      const parts = job.salary.split('•');
      const frPart = parts.find(p => p.includes('France') || p.includes('🇫🇷')) || '';
      const snPart = parts.find(p => p.includes('Sénégal') || p.includes('🇸🇳') || p.includes('Afrique')) || '';

      const frRange = frPart.replace(/🇫🇷\s*France\s*:\s*/i, '').trim();
      const snRange = snPart.replace(/(?:🇸🇳\s*Sénégal|🇸🇳\s*International\s*\/\s*Afrique)\s*:\s*/i, '').trim();

      job.salaryRanges = {
        france: {
          raw: frRange,
          range: frRange,
          source: job.sourceOnisep ? (job.sourceStudyrama ? 'Onisep / Studyrama' : 'Onisep') : 'Studyrama / APECITA'
        },
        senegal: {
          raw: snRange,
          range: snRange,
          source: 'Filières agricoles & agro-industries (Sénégal / UEMOA)'
        }
      };
    }
  });

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
    console.log('✅ OrientationAgriData : ' + AGRI_JOBS.length + ' fiches détaillées Agriculture, Élevage & Agroalimentaire initialisées sur ' + AGRI_DOMAINS.length + ' domaines d\\\'excellence.');
  }
})();
"""

output_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "../frontend/js/orientation-agri-data.js"))
with open(output_path, "w", encoding="utf-8") as f:
    f.write(header)

print(f"✅ Fichier généré avec succès : {output_path} ({os.path.getsize(output_path)} octets)")
