/**
 * GÉNÉRATEUR DÉTERMINISTE DU CATALOGUE NUMÉRIQUE ENRICHI
 * Projet : Le Monde du Travail
 * Source de référence : https://ecole-du-digital.com/metier/ + Référentiels Tech & Compétences
 */

const fs = require('fs');
const path = require('path');

console.log('--- Génération du catalogue numérique approfondi ---');

// Définition des 13 Domaines d'Excellence Numérique
const DIGITAL_DOMAINS = [
  {
    id: 'dev-web-logiciel',
    name: 'Informatique & Développement',
    icon: '💻',
    description: 'Conception, programmation et déploiement de sites web, applications mobiles, logiciels d’entreprise et architectures logicielles.',
    subdomains: [
      'Développement web',
      'Développement Front-end',
      'Développement Back-end',
      'Développement Full-Stack',
      'Développement mobile',
      'Génie logiciel & Architecture'
    ]
  },
  {
    id: 'intelligence-artificielle',
    name: 'Intelligence Artificielle & Machine Learning',
    icon: '🤖',
    description: 'Création d’algorithmes apprenants, modèles de langage (LLM), vision par ordinateur et solutions d’IA générative.',
    subdomains: [
      'Machine Learning',
      'Deep Learning',
      'IA Générative & LLM',
      'Prompt Engineering',
      'AI Engineering',
      'MLOps'
    ]
  },
  {
    id: 'data-analytics',
    name: 'Data & Analytics',
    icon: '📊',
    description: 'Collecte, modélisation, analyse statistique et valorisation des données massives pour éclairer la prise de décision stratégique.',
    subdomains: [
      'Data Analysis',
      'Data Science',
      'Data Engineering',
      'Business Intelligence',
      'Data Architecture & Big Data',
      'Web & Social Media Analytics'
    ]
  },
  {
    id: 'cybersecurite',
    name: 'Cybersécurité & Résilience',
    icon: '🔐',
    description: 'Protection des systèmes d’information, détection d’intrusions, sécurité applicative et résilience face aux cyberattaques.',
    subdomains: [
      'SOC & Détection d’incidents',
      'Sécurité offensive & Pentest',
      'Sécurité applicative & Cloud',
      'Gouvernance, Risques & Conformité (GRC)',
      'DevSecOps'
    ]
  },
  {
    id: 'cloud-infrastructure',
    name: 'Cloud & Infrastructure',
    icon: '☁️',
    description: 'Conception, déploiement et supervision des architectures serveurs cloud, réseaux sécurisés et centres de données.',
    subdomains: [
      'Cloud Architecture',
      'Systèmes & Réseaux',
      'Infrastructure Cloud',
      'Solutions Architecture'
    ]
  },
  {
    id: 'devops-sre',
    name: 'DevOps & Platform Engineering',
    icon: '⚙️',
    description: 'Automatisation des pipelines de livraison (CI/CD), conteneurisation, fiabilité des systèmes et ingénierie de plateforme.',
    subdomains: [
      'CI/CD & Automatisation',
      'Site Reliability Engineering (SRE)',
      'Platform Engineering',
      'Conteneurs & Kubernetes'
    ]
  },
  {
    id: 'ux-ui-product-design',
    name: 'UX/UI & Product Design',
    icon: '🎨',
    description: 'Recherche utilisateur, ergonomie des parcours, conception visuelle d’interfaces numériques et design systems.',
    subdomains: [
      'UX Research & Ergonomie',
      'UI Design & Interfaces',
      'UX/UI Design',
      'Product Design',
      'Design Systems'
    ]
  },
  {
    id: 'design-digital-creation',
    name: 'Design Digital & Création Graphique',
    icon: '🖌️',
    description: 'Direction artistique digitale, création de chartes graphiques numériques, motion design et créations 3D immersives.',
    subdomains: [
      'Webdesign & Digital Design',
      'Direction Artistique Web',
      'Motion Design & Animation 3D',
      'Creative Technology'
    ]
  },
  {
    id: 'audiovisuel-contenu',
    name: 'Audiovisuel & Digital Content',
    icon: '🎬',
    description: 'Production audiovisuelle pour les médias numériques, vidéo, podcasts et création de contenus percutants.',
    subdomains: [
      'Création de contenu digital',
      'Production vidéo & audiovisuelle',
      'Communication digitale multimédia'
    ]
  },
  {
    id: 'marketing-digital',
    name: 'Marketing Digital & Acquisition',
    icon: '📣',
    description: 'Stratégies d’acquisition en ligne, référencement naturel et payant (SEO/SEA), growth hacking et engagement sur les réseaux sociaux.',
    subdomains: [
      'SEO & Référencement naturel',
      'SEA & Publicité en ligne',
      'Growth & Acquisition',
      'Social Media Management & Community',
      'Content Marketing'
    ]
  },
  {
    id: 'e-commerce',
    name: 'E-commerce & Marketplace',
    icon: '🛒',
    description: 'Pilotage de boutiques de vente en ligne, optimisation du tunnel de conversion, gestion des marketplaces et catalogue produit.',
    subdomains: [
      'E-commerce Management',
      'Développement Produit E-commerce',
      'Marketplace & Conversion'
    ]
  },
  {
    id: 'product-business',
    name: 'Product Management & Digital Business',
    icon: '📦',
    description: 'Définition de la vision produit, priorisation des fonctionnalités agiles, analyse d’affaires et pilotage de la relation client.',
    subdomains: [
      'Product Management & Ownership',
      'Business Analysis',
      'Customer Success & CRM',
      'Direction de Projets Digitaux'
    ]
  },
  {
    id: 'innovation-transformation',
    name: 'Innovation & Transformation Digitale',
    icon: '🚀',
    description: 'Accompagnement du changement numérique dans les organisations, stratégie d’innovation et modernisation des processus.',
    subdomains: [
      'Stratégie digitale & CDO',
      'Conduite du changement',
      'Management de l’innovation'
    ]
  }
];

// Helper de création de fiche métier conforme au standard élevé du Monde du Travail
function makeJob(c) {
  return {
    id: c.id,
    slug: c.slug,
    title: c.title,
    aliases: c.aliases || [],
    icon: c.icon || '💻',
    image: c.image || 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80',
    familyId: c.familyId || 'numerique-ia',
    familyName: c.familyName || 'Numérique, Informatique & IA',
    domain: c.domain,
    subdomain: c.subdomain,
    sourceESD: c.sourceESD !== false,
    isEmerging: !!c.isEmerging,
    level: c.level || 'Bac +3 à Bac +5',
    salary: c.salary || 'Donnée locale non disponible / à vérifier',
    
    // Définitions
    simpleDefinition: c.simpleDefinition || c.shortDescription,
    shortDescription: c.shortDescription,
    longDescription: c.longDescription,
    mainObjective: c.mainObjective || 'Concevoir et délivrer des solutions numériques fiables et performantes.',
    companyRole: c.companyRole || 'Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.',
    
    // Quotidien
    workEnvironment: c.workEnvironment || [
      '💻 Travail sur ordinateur (100%)',
      '👥 Équipe agile multidisciplinaire',
      '🌍 Télétravail possible (local ou international)',
      '⚡ Apprentissage continu'
    ],
    missions: c.missions || {
      main: ['Concevoir et développer les solutions selon les besoins', 'Assurer la qualité, la sécurité et la pérennité des livrables'],
      secondary: ['Documenter le travail et transmettre les bonnes pratiques', 'Effectuer une veille technologique continue']
    },
    typicalDay: c.typicalDay || [
      { time: '09:00', title: 'Point synchronisation d’équipe', desc: 'Coordination rapide pour aligner les priorités de la journée.' },
      { time: '10:00', title: 'Travail approfondi & Production', desc: 'Réalisation des tâches prioritaires de conception ou développement.' },
      { time: '14:00', title: 'Collaboration & Résolution', desc: 'Échanges avec les collègues, revues ou ateliers de conception.' },
      { time: '16:30', title: 'Validation, tests et clôture', desc: 'Vérification de la qualité des livrables et préparation du lendemain.' }
    ],
    
    // Compétences
    skills: {
      technical: c.skills?.technical || [],
      analytical: c.skills?.analytical || ['Rigueur logique', 'Capacité de synthèse'],
      creative: c.skills?.creative || ['Sens du détail', 'Innovation utile'],
      human: c.skills?.human || ['Esprit d’équipe', 'Communication claire', 'Curiosité'],
      tools: c.skills?.tools || []
    },
    
    specializations: c.specializations || [],
    
    // Études
    studies: {
      schoolSubjects: c.studies?.schoolSubjects || ['Mathématiques', 'Français & Anglais', 'Sciences & Informatique'],
      pathway: c.studies?.pathway || [
        { step: 'Baccalauréat', title: 'Bac S, L, T ou équivalent', desc: 'Bases solides en raisonnement logique, curiosité ou créativité.' },
        { step: 'Bac +2 / +3', title: 'BTS / DUT / Licence Informatique ou Digitale', desc: 'Fondations théoriques solides et mise en pratique opérationnelle.' },
        { step: 'Bac +5', title: 'Master spécialisé ou Diplôme d’Ingénieur', desc: 'Expertise avancée, architecture de solutions complexes et leadership.' }
      ],
      schools: c.studies?.schools || [
        { name: 'École Supérieure Polytechnique (ESP) de Dakar', country: 'Sénégal', scope: 'Sénégal' },
        { name: 'Université Numérique Cheikh Hamidou Kane (UN-CHK)', country: 'Sénégal', scope: 'Sénégal' },
        { name: 'École Supérieure Multinationale des Télécommunications (ESMT)', country: 'Sénégal', scope: 'Sénégal' },
        { name: 'Institut Africain d’Informatique (IAI)', country: 'Afrique Centrale', scope: 'Afrique' },
        { name: 'École Supérieure du Digital (ESD)', country: 'France', scope: 'International' }
      ],
      certifications: c.studies?.certifications || [],
      alternatives: c.studies?.alternatives || 'Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée.'
    },
    
    // Carrière
    career: {
      sectors: c.career?.sectors || ['Startups & Tech', 'Sociétés de Services Numériques (ESN)', 'Grandes entreprises & Banques', 'Agences digitales'],
      employerTypes: c.career?.employerTypes || ['Startups tech', 'Entreprises de services numériques (ESN)', 'PME / Multinationales', 'Freelance remote'],
      teamInterlocutors: c.career?.teamInterlocutors || ['Product Managers', 'Développeurs', 'Designers', 'Responsables métier'],
      evolution: c.career?.evolution || 'Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat',
      pros: c.career?.pros || 'Forte demande sur le marché, opportunités internationales, travail stimulant.',
      cons: c.career?.cons || 'Exige une actualisation permanente des compétences.'
    },
    
    // Pour commencer
    gettingStarted: c.gettingStarted || {
      beginnerProject: 'Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.',
      intermediateProject: 'Bâtir une réalisation autonome répondant à un besoin réel concret.',
      advancedProject: 'Déployer un projet complet accessible au public ou collaborer en équipe.',
      portfolioIdeas: ['Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus.']
    },
    
    reality: c.reality || {
      advantages: 'Évolution salariale rapide, autonomie, possibilité d’impact visible.',
      difficulties: 'Nécessite persévérance face aux blocages et gestion rigoureuse du temps.',
      continuousLearning: 'Dédier un temps régulier chaque semaine à la découverte des nouveautés.',
      constraints: 'Travail prolongé sur écran nécessitant une bonne hygiène de posture.'
    },
    
    aiImpact: c.aiImpact || {
      assistedTasks: 'Recherche documentaire, génération d’ébauches, détection d’erreurs de base.',
      automatedTasks: 'Tâches répétitives de saisie, conversion de formats, modèles standardisés.',
      crucialHumanSkills: 'Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.',
      emergingSpecializations: 'Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité.'
    },
    
    africaContext: c.africaContext || {
      localSectors: ['Écosystème technologique dakarois', 'Services financiers mobiles', 'E-santé & AgriTech', 'Commerce connecté'],
      employerTypes: ['Pépinières (CTIC Dakar, Jokkolabs)', 'Opérateurs télécoms', 'Agences locales', 'Missions en télétravail international'],
      remoteWork: 'Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.',
      entrepreneurship: 'Grand potentiel d’innovation pour résoudre les défis concrets du continent.',
      senegalInsight: 'Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation.'
    },
    
    relatedJobSlugs: c.relatedJobSlugs || [],
    resources: c.resources || [],
    sources: c.sources || ['École Supérieure du Digital (ESD)', 'Observatoire International des Métiers du Numérique'],
    interests: c.interests || ['technologie-code', 'resoudre-problemes']
  };
}

module.exports = {
  DIGITAL_DOMAINS,
  makeJob
};
