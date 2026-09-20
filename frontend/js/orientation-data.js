/**
 * ORIENTATION & MÉTIERS — SOURCE DE VÉRITÉ DATA-DRIVEN
 * Le Monde du Travail — 21 Grandes Familles, Sous-domaines, Métiers & Affinités
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. LES 21 GRANDES FAMILLES PROFESSIONNELLES
  // =========================================================================
  const FAMILIES = [
    {
      id: 'numerique-ia',
      order: 1,
      name: 'Numérique, Informatique & IA',
      slug: 'numerique-ia',
      icon: '💻',
      color: '#3b82f6', // Bleu vibrant
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80',
      description: 'Concevoir les logiciels, architectures cloud, applications et intelligences artificielles qui automatisent et transforment les organisations.',
      stats: { jobsEstimate: '100+ métiers', subdomainsCount: 24 },
      representativeJobs: ['Développeur Full-Stack', 'Ingénieur IA & ML', 'Prompt Engineer', 'DevOps Engineer', 'Product Designer', 'Cloud Architect'],
      subdomains: [
        'Développement web', 'Développement Front-end', 'Développement Back-end', 'Développement Full-Stack',
        'Développement mobile', 'Génie logiciel & Architecture', 'Intelligence artificielle', 'Machine Learning',
        'Deep Learning', 'IA Générative & LLM', 'Prompt Engineering', 'AI Engineering', 'MLOps',
        'Data Analysis', 'Data Science', 'Data Engineering', 'SOC & Détection d’incidents',
        'Sécurité offensive & Pentest', 'Cloud Architecture', 'CI/CD & Automatisation', 'UX/UI Design',
        'Product Design', 'Growth & Acquisition', 'Innovation & Stratégie'
      ]
    },
    {
      id: 'cybersecurite-reseaux',
      order: 2,
      name: 'Cybersécurité & Réseaux',
      slug: 'cybersecurite-reseaux',
      icon: '🔐',
      color: '#0ea5e9', // Cyan / Bleu ciel
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=80',
      description: 'Protéger les systèmes d’information, déjouer les cyberattaques, auditer les failles et sécuriser les réseaux d’infrastructures critiques.',
      stats: { jobsEstimate: '45+ métiers', subdomainsCount: 14 },
      representativeJobs: ['Analyste SOC', 'Pentester', 'Ingénieur Cybersécurité', 'Architecte Sécurité Cloud', 'Consultant GRC'],
      subdomains: [
        'Sécurité réseau', 'Sécurité cloud', 'SOC', 'Threat Intelligence', 'Pentest',
        'Sécurité applicative', 'IAM', 'GRC', 'Forensics', 'Réponse à incident',
        'Sécurité offensive', 'Sécurité défensive', 'Audit', 'Gouvernance cyber'
      ]
    },
    {
      id: 'data-decision',
      order: 3,
      name: 'Data, Statistiques & Décision',
      slug: 'data-decision',
      icon: '📊',
      color: '#8b5cf6', // Violet
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
      description: 'Collecter, modéliser, explorer et valoriser les données massives pour guider les décisions stratégiques et financières des entreprises.',
      stats: { jobsEstimate: '35+ métiers', subdomainsCount: 11 },
      representativeJobs: ['Data Scientist', 'Data Engineer', 'Data Analyst', 'Business Intelligence Analyst', 'Actuaire'],
      subdomains: [
        'Data Analysis', 'Data Science', 'Data Engineering', 'Business Intelligence',
        'Statistiques', 'Économétrie', 'Actuariat', 'Data Governance',
        'Data Architecture', 'Bases de données', 'Analytics'
      ]
    },
    {
      id: 'finance-fintech',
      order: 4,
      name: 'Finance, Banque, Assurance & FinTech',
      slug: 'finance-fintech',
      icon: '🏦',
      color: '#10b981', // Émeraude
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=80',
      description: 'Gérer les capitaux, structurer les investissements, piloter les risques et concevoir les solutions de paiement et d’inclusion financière.',
      stats: { jobsEstimate: '50+ métiers', subdomainsCount: 13 },
      representativeJobs: ['Analyste Financier', 'Expert-Comptable', 'Chargé d’Affaires Entreprises', 'FinTech Product Manager', 'Contrôleur de Gestion'],
      subdomains: [
        'Banque', 'Finance d’entreprise', 'Comptabilité', 'Audit', 'Assurance',
        'Risque', 'Trésorerie', 'Investissement', 'FinTech', 'Paiements',
        'Crédit', 'Conformité', 'Finance quantitative'
      ]
    },
    {
      id: 'commerce-marketing',
      order: 5,
      name: 'Commerce, Vente, Marketing & E-Commerce',
      slug: 'commerce-marketing',
      icon: '🛒',
      color: '#f59e0b', // Ambre / Orange
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
      description: 'Conquérir de nouveaux marchés, fidéliser les clients, orchestrer les campagnes digitales et piloter les plateformes de vente en ligne.',
      stats: { jobsEstimate: '60+ métiers', subdomainsCount: 13 },
      representativeJobs: ['Business Developer', 'Growth Marketer', 'E-commerce Manager', 'Key Account Manager', 'SEO Specialist'],
      subdomains: [
        'Vente', 'Commerce', 'Business Development', 'Marketing', 'Marketing digital',
        'Growth', 'E-commerce', 'SEO', 'CRM', 'Communication commerciale',
        'Customer Success', 'Brand', 'Études de marché'
      ]
    },
    {
      id: 'agriculture-agritech',
      order: 6,
      name: 'Agriculture, Agronomie & AgriTech',
      slug: 'agriculture-agritech',
      icon: '🌾',
      color: '#84cc16', // Vert lime
      image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&auto=format&fit=crop&q=80',
      description: 'Moderniser les cultures, optimiser les rendements grâce aux biotechnologies et aux capteurs IoT, et assurer la sécurité alimentaire durable.',
      stats: { jobsEstimate: '40+ métiers', subdomainsCount: 11 },
      representativeJobs: ['Ingénieur Agronome', 'Spécialiste AgriTech', 'Responsable d’Exploitation', 'Ingénieur Irrigation', 'Agroéconomiste'],
      subdomains: [
        'Agronomie', 'Production végétale', 'Irrigation', 'Agriculture durable',
        'Agriculture de précision', 'Agroéconomie', 'Transformation agroalimentaire',
        'AgriTech', 'Agriculture numérique', 'Conseil agricole', 'Gestion des exploitations'
      ]
    },
    {
      id: 'peche-maritime',
      order: 7,
      name: 'Pêche, Aquaculture & Économie Maritime',
      slug: 'peche-maritime',
      icon: '🐟',
      color: '#06b6d4', // Cyan océan
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80',
      description: 'Valoriser les ressources marines, développer les fermes aquacoles durables et organiser la logistique portuaire et de haute mer.',
      stats: { jobsEstimate: '25+ métiers', subdomainsCount: 8 },
      representativeJobs: ['Ingénieur Halieute', 'Responsable Aquaculture', 'Biologiste Marin', 'Technicien de Transformation des Produits de la Mer'],
      subdomains: [
        'Pêche', 'Aquaculture', 'Biologie marine', 'Océanographie',
        'Transformation des produits de la mer', 'Gestion des ressources halieutiques',
        'Économie maritime', 'Logistique maritime'
      ]
    },
    {
      id: 'elevage-veterinaire',
      order: 8,
      name: 'Élevage, Vétérinaire & Productions Animales',
      slug: 'elevage-veterinaire',
      icon: '🐄',
      color: '#d97706', // Ocre chaud
      image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&auto=format&fit=crop&q=80',
      description: 'Prendre soin de la santé animale, perfectionner la zootechnie, améliorer la nutrition et encadrer la filière laitière et avicole.',
      stats: { jobsEstimate: '30+ métiers', subdomainsCount: 8 },
      representativeJobs: ['Docteur Vétérinaire', 'Zootechnicien', 'Nutritionniste Animalier', 'Responsable Filière Avicole'],
      subdomains: [
        'Médecine vétérinaire', 'Zootechnie', 'Élevage bovin', 'Aviculture',
        'Nutrition animale', 'Production animale', 'Santé animale', 'Reproduction animale'
      ]
    },
    {
      id: 'energie-renouvelable',
      order: 9,
      name: 'Énergie, Électricité & Énergies Renouvelables',
      slug: 'energie-renouvelable',
      icon: '⚡',
      color: '#eab308', // Or électrique
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=80',
      description: 'Bâtir la transition énergétique : solaire photovoltaïque, parcs éoliens, réseaux intelligents (Smart Grids) et stockage batterie.',
      stats: { jobsEstimate: '45+ métiers', subdomainsCount: 9 },
      representativeJobs: ['Ingénieur Solaire', 'Chef de Projet Énergies Renouvelables', 'Auditeur Énergétique', 'Ingénieur Réseaux Électriques'],
      subdomains: [
        'Électricité', 'Énergie solaire', 'Énergie éolienne', 'Réseaux électriques',
        'Stockage', 'Batteries', 'Efficacité énergétique', 'Smart Grid', 'Maintenance énergétique'
      ]
    },
    {
      id: 'btp-architecture',
      order: 10,
      name: 'BTP, Architecture, Urbanisme & Immobilier',
      slug: 'btp-architecture',
      icon: '🏗️',
      color: '#64748b', // Ardoise BTP
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=80',
      description: 'Concevoir, modéliser (BIM) et ériger les infrastructures durables, les édifices modernes et les éco-quartiers de demain.',
      stats: { jobsEstimate: '65+ métiers', subdomainsCount: 11 },
      representativeJobs: ['Architecte DPLG', 'Ingénieur Génie Civil', 'Conducteur de Travaux', 'BIM Manager', 'Urbaniste'],
      subdomains: [
        'Génie civil', 'Architecture', 'Construction', 'Topographie', 'Urbanisme',
        'Aménagement', 'BIM', 'Immobilier', 'Gestion immobilière', 'Promotion immobilière', 'Maintenance des bâtiments'
      ]
    },
    {
      id: 'industrie-mecanique',
      order: 11,
      name: 'Industrie, Mécanique & Automatisation',
      slug: 'industrie-mecanique',
      icon: '🏭',
      color: '#475569', // Métal
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80',
      description: 'Piloter les lignes de production robotisées, usiner les pièces de précision, garantir le Lean manufacturing et maintenir les parcs machines.',
      stats: { jobsEstimate: '50+ métiers', subdomainsCount: 10 },
      representativeJobs: ['Ingénieur Automatisme', 'Roboticien Industriel', 'Ingénieur Mécanique', 'Responsable Qualité & Lean'],
      subdomains: [
        'Génie industriel', 'Génie mécanique', 'Maintenance', 'Automatisation',
        'Robotique', 'Production', 'Qualité', 'Lean Manufacturing', 'Électromécanique', 'Métallurgie'
      ]
    },
    {
      id: 'mines-geosciences',
      order: 12,
      name: 'Mines, Pétrole, Gaz & Géosciences',
      slug: 'mines-geosciences',
      icon: '⛏️',
      color: '#b45309', // Cuivre
      image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=800&auto=format&fit=crop&q=80',
      description: 'Explorer les sous-sols, cartographier les gisements de minerais et d’hydrocarbures, et superviser les forages dans le respect des normes HSE.',
      stats: { jobsEstimate: '35+ métiers', subdomainsCount: 10 },
      representativeJobs: ['Géologue d’Exploration', 'Ingénieur Minier', 'Ingénieur Forage / Petroleum', 'Responsable HSE Pétro-gazier'],
      subdomains: [
        'Géologie', 'Géophysique', 'Mines', 'Pétrole', 'Gaz', 'Forage',
        'Réservoir', 'HSE', 'Laboratoire', 'Environnement minier'
      ]
    },
    {
      id: 'transport-logistique',
      order: 13,
      name: 'Transport, Logistique & Supply Chain',
      slug: 'transport-logistique',
      icon: '🚚',
      color: '#2563eb', // Bleu transport
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80',
      description: 'Planifier les flux de marchandises mondiaux, gérer les entrepôts automatisés, affréter les navires et optimiser le transport multimodal.',
      stats: { jobsEstimate: '45+ métiers', subdomainsCount: 10 },
      representativeJobs: ['Supply Chain Manager', 'Responsable Logistique & Fret', 'Transit & Douane Specialist', 'Gestionnaire de Flotte'],
      subdomains: [
        'Logistique', 'Transport', 'Supply Chain', 'Achats', 'Entrepôt',
        'Import-export', 'Douane', 'Fret', 'Gestion de flotte', 'Planification'
      ]
    },
    {
      id: 'sante-biomedical',
      order: 14,
      name: 'Santé, Pharmacie & Biomédical',
      slug: 'sante-biomedical',
      icon: '🏥',
      color: '#ef4444', // Rouge santé
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&fit=crop&q=80',
      description: 'Soigner, rechercher de nouvelles thérapies, maintenir les technologies d’imagerie médicale et déployer la télémédecine.',
      stats: { jobsEstimate: '70+ métiers', subdomainsCount: 12 },
      representativeJobs: ['Médecin Spécialiste', 'Pharmacien Industriel', 'Ingénieur Biomédical', 'Biologiste Médical', 'Data Analyst Santé'],
      subdomains: [
        'Médecine', 'Soins infirmiers', 'Pharmacie', 'Odontologie', 'Sage-femme',
        'Biologie médicale', 'Imagerie', 'Rééducation', 'Nutrition', 'Santé publique',
        'Biomédical', 'Santé numérique'
      ]
    },
    {
      id: 'education-formation',
      order: 15,
      name: 'Éducation, Enseignement & Formation',
      slug: 'education-formation',
      icon: '🎓',
      color: '#6366f1', // Indigo
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=80',
      description: 'Transmettre le savoir, concevoir des parcours d’apprentissage innovants (EdTech), encadrer l’orientation et former les talents adultes.',
      stats: { jobsEstimate: '35+ métiers', subdomainsCount: 8 },
      representativeJobs: ['Ingénieur Pédagogique (Instructional Designer)', 'Professeur / Enseignant-Chercheur', 'EdTech Specialist', 'Responsable L&D'],
      subdomains: [
        'Enseignement primaire', 'Enseignement secondaire', 'Enseignement supérieur',
        'Formation professionnelle', 'Orientation', 'Ingénierie pédagogique', 'EdTech', 'Learning & Development'
      ]
    },
    {
      id: 'sciences-biotech',
      order: 16,
      name: 'Sciences, Recherche & Biotechnologies',
      slug: 'sciences-biotech',
      icon: '🧪',
      color: '#ec4899', // Rose scientifique
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop&q=80',
      description: 'Explorer les lois de la matière, innover en biotechnologies, séquencer l’ADN végétal et conduire les programmes de R&D de rupture.',
      stats: { jobsEstimate: '40+ métiers', subdomainsCount: 10 },
      representativeJobs: ['Chercheur en Biotechnologies', 'Biologiste Moléculaire', 'Physicien des Matériaux', 'Ingénieur R&D'],
      subdomains: [
        'Mathématiques', 'Physique', 'Chimie', 'Biologie', 'Microbiologie',
        'Biotechnologies', 'Génétique', 'Recherche', 'R&D', 'Laboratoire'
      ]
    },
    {
      id: 'environnement-climat',
      order: 17,
      name: 'Environnement, Climat & Métiers Verts',
      slug: 'environnement-climat',
      icon: '🌱',
      color: '#15803d', // Vert forêt
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=80',
      description: 'Préserver la biodiversité, mesurer l’empreinte carbone, manager la transition RSE et concevoir des boucles d’économie circulaire.',
      stats: { jobsEstimate: '40+ métiers', subdomainsCount: 10 },
      representativeJobs: ['Ingénieur Écologue', 'Responsable RSE & Développement Durable', 'Hydrologue', 'Analyste Bilan Carbone'],
      subdomains: [
        'Environnement', 'Écologie', 'Climat', 'Hydrologie', 'Déchets',
        'Économie circulaire', 'Carbone', 'Développement durable', 'RSE', 'Transition énergétique'
      ]
    },
    {
      id: 'tourisme-hotellerie',
      order: 18,
      name: 'Tourisme, Hôtellerie, Restauration & Événementiel',
      slug: 'tourisme-hotellerie',
      icon: '🧳',
      color: '#f97316', // Orange soleil
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80',
      description: 'Créer des expériences d’accueil exceptionnelles, promouvoir le patrimoine touristique, manager les complexes hôteliers et grands événements.',
      stats: { jobsEstimate: '45+ métiers', subdomainsCount: 7 },
      representativeJobs: ['Directeur d’Hôtel / Resort', 'Event & Wedding Planner', 'Revenue Manager', 'Chef de Cuisine Gastronomique'],
      subdomains: [
        'Tourisme', 'Hôtellerie', 'Restauration', 'Voyage', 'Événementiel',
        'Hospitality Management', 'Revenue Management'
      ]
    },
    {
      id: 'culture-medias',
      order: 19,
      name: 'Culture, Médias, Communication & Industries Créatives',
      slug: 'culture-medias',
      icon: '🎨',
      color: '#a855f7', // Pourpre créatif
      image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&auto=format&fit=crop&q=80',
      description: 'Raconter des histoires percutantes, produire des contenus vidéo/cinéma, designer des identités de marques et animer les communautés.',
      stats: { jobsEstimate: '55+ métiers', subdomainsCount: 12 },
      representativeJobs: ['Directeur Artistique', 'Motion Designer 3D', 'Journaliste d’Investigation', 'Social Media Strategist', 'Game Designer'],
      subdomains: [
        'Design graphique', 'UX/UI', 'Photographie', 'Vidéo', 'Cinéma',
        'Animation', '3D', 'Jeu vidéo', 'Journalisme', 'Communication', 'Production média', 'Création de contenu'
      ]
    },
    {
      id: 'droit-management',
      order: 20,
      name: 'Droit, Administration, Management & Services Professionnels',
      slug: 'droit-management',
      icon: '⚖️',
      color: '#1e3a8a', // Bleu institutionnel
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80',
      description: 'Conseiller juridiquement, défendre les droits, piloter les ressources humaines, orchestrer la stratégie d’entreprise et la conformité légale.',
      stats: { jobsEstimate: '55+ métiers', subdomainsCount: 11 },
      representativeJobs: ['Avocat d’Affaires', 'Juriste d’Entreprise', 'Consultant en Stratégie', 'DRH (Directeur RH)', 'Chef de Projet PMO'],
      subdomains: [
        'Droit', 'Administration', 'Management', 'Gestion de projet', 'Ressources humaines',
        'Conseil', 'Stratégie', 'Opérations', 'Conformité', 'Audit', 'Transformation'
      ]
    },
    {
      id: 'metiers-emergents',
      order: 21,
      name: 'Métiers Émergents & Métiers du Futur',
      slug: 'metiers-emergents',
      icon: '🌟',
      color: '#0284c7', // Bleu technologique lumineux
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80',
      description: 'Les rôles pionniers nés des révolutions technologiques, climatiques et sociales : gouvernance de l’IA, véhicules autonomes et économie décarbonée.',
      stats: { jobsEstimate: '30+ métiers', subdomainsCount: 14 },
      representativeJobs: ['Prompt Engineer & AI Specialist', 'Auditeur de Gouvernance IA', 'Ingénieur Véhicules Électriques & Systèmes Autonomes', 'Analyste Risques Climatiques'],
      subdomains: [
        'AI Engineering', 'AI Product', 'AI Governance', 'AI Safety', 'AI Integration',
        'AgriTech', 'HealthTech', 'FinTech', 'ClimateTech', 'GreenTech',
        'MobilityTech', 'Robotics', 'Autonomous Systems', 'Digital Transformation'
      ]
    }
  ];

  // =========================================================================
  // 2. CENTRES D'INTÉRÊT & AFFINITÉS (« Je ne sais pas encore »)
  // =========================================================================
  const INTEREST_AFFINITIES = [
    {
      id: 'resoudre-problemes',
      icon: '🧩',
      label: 'Résoudre des énigmes & des problèmes logiques',
      description: 'Tu aimes décortiquer les puzzles, analyser pourquoi quelque chose ne fonctionne pas et concevoir une solution astucieuse.',
      familyIds: ['numerique-ia', 'cybersecurite-reseaux', 'data-decision', 'industrie-mecanique', 'sciences-biotech']
    },
    {
      id: 'creer-designer',
      icon: '🎨',
      label: 'Créer, dessiner, imaginer & designer',
      description: 'Tu as une sensibilité visuelle, tu aimes inventer de nouveaux concepts, assembler des formes et des couleurs.',
      familyIds: ['culture-medias', 'numerique-ia', 'btp-architecture', 'commerce-marketing']
    },
    {
      id: 'donnees-chiffres',
      icon: '📊',
      label: 'Travailler avec les données & les chiffres',
      description: 'Tu es à l’aise avec les statistiques, les tableurs, la rentabilité financière et la mise en évidence de tendances.',
      familyIds: ['data-decision', 'finance-fintech', 'commerce-marketing', 'droit-management']
    },
    {
      id: 'technologie-code',
      icon: '⚡',
      label: 'Manipuler la technologie, coder & automatiser',
      description: 'Tu es fasciné par les ordinateurs, les applications mobiles, l’IA, les robots et les objets connectés.',
      familyIds: ['numerique-ia', 'cybersecurite-reseaux', 'energie-renouvelable', 'metiers-emergents']
    },
    {
      id: 'soigner-aider',
      icon: '❤️',
      label: 'Aider, soigner & accompagner les gens',
      description: 'Tu souhaites avoir un impact direct sur la vie des personnes, leur bien-être, leur santé ou leur éducation.',
      familyIds: ['sante-biomedical', 'education-formation', 'elevage-veterinaire']
    },
    {
      id: 'nature-environnement',
      icon: '🌱',
      label: 'Travailler avec la terre, la mer & l’environnement',
      description: 'Tu aimes le plein air, la biodiversité, les plantes, la météo, la lutte contre le réchauffement climatique.',
      familyIds: ['agriculture-agritech', 'environnement-climat', 'peche-maritime', 'elevage-veterinaire']
    },
    {
      id: 'construire-fabriquer',
      icon: '🏗️',
      label: 'Construire des édifices ou fabriquer des objets',
      description: 'Tu aimes voir du concret sortir de terre, coordonner des chantiers, comprendre le fonctionnement des ponts et machines.',
      familyIds: ['btp-architecture', 'industrie-mecanique', 'mines-geosciences', 'energie-renouvelable']
    },
    {
      id: 'negocier-convaincre',
      icon: '🤝',
      label: 'Négocier, convaincre, entreprendre & vendre',
      description: 'Tu aimes le contact humain, le challenge commercial, conclure des partenariats et pitcher des projets.',
      familyIds: ['commerce-marketing', 'finance-fintech', 'tourisme-hotellerie', 'droit-management']
    },
    {
      id: 'proteger-defendre',
      icon: '🛡️',
      label: 'Protéger, faire respecter les règles & défendre',
      description: 'Tu as un sens aigu de la justice, de l’éthique, de la protection des biens, des données ou des citoyens.',
      familyIds: ['cybersecurite-reseaux', 'droit-management', 'metiers-emergents']
    },
    {
      id: 'explorer-decouvrir',
      icon: '🧭',
      label: 'Rechercher en labo & explorer de nouvelles frontières',
      description: 'Tu as une insatiable curiosité scientifique, tu aimes tester des hypothèses et manipuler des microscopes ou télescopes.',
      familyIds: ['sciences-biotech', 'mines-geosciences', 'environnement-climat', 'sante-biomedical']
    }
  ];

  // =========================================================================
  // 3. CATALOGUE REPRÉSENTATIF DE FICHES MÉTIERS RICHES & PROFONDES
  // =========================================================================
  const JOBS = [
    // -----------------------------------------------------------------------
    // NUMÉRIQUE & IA
    // -----------------------------------------------------------------------
    {
      id: 'dev-fullstack',
      slug: 'developpeur-fullstack',
      title: 'Développeur Full-stack',
      icon: '💻',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80',
      familyId: 'numerique-ia',
      familyName: 'Numérique, Informatique & IA',
      subdomain: 'Développement web',
      shortDescription: 'Conçoit et programme les applications web de bout en bout, de l’interface utilisateur intuitive (Front-end) aux serveurs et bases de données (Back-end).',
      longDescription: 'Le développeur Full-stack est l’artisan polyvalent du web moderne. Il maîtrise à la fois l’ergonomie visible par les utilisateurs (HTML/CSS, React, Vue) et l’architecture invisible en coulisses (API Node.js, Python, bases SQL ou NoSQL, déploiement cloud). Il transforme des besoins d’utilisateurs en plateformes robustes et rapides.',
      level: 'Bac +3 à Bac +5',
      salary: '450 000 - 1 400 000 FCFA / mois',
      workEnvironment: [
        '💻 Travail sur ordinateur (100%)',
        '👥 Travail collaboratif en équipe agile',
        '🧠 Résolution continue de bugs et logique',
        '🌍 Possibilité forte de télétravail international',
        '⚡ Environnement dynamique en évolution permanente'
      ],
      typicalDay: [
        { time: '09:00', title: 'Daily Stand-up Meeting', desc: 'Point synchronisation de 15 minutes avec l’équipe produit pour partager les avancées de la veille et lever les blocages.' },
        { time: '09:30', title: 'Revue de code (Code Review)', desc: 'Lecture critique des fonctionnalités proposées par les pairs sur GitHub pour valider la qualité et la sécurité.' },
        { time: '11:00', title: 'Session de développement Back-end', desc: 'Création d’un nouvel endpoint API REST sécurisé avec tests unitaires automatisés.' },
        { time: '14:00', title: 'Intégration de maquettes UI/UX', desc: 'Implémentation responsive des nouvelles interfaces conçues par le Product Designer.' },
        { time: '16:30', title: 'Tests et déploiement Staging', desc: 'Vérification sur l’environnement de test et livraison continue vers le cloud.' }
      ],
      skills: {
        technical: ['JavaScript / TypeScript', 'React / Vue.js / Next.js', 'Node.js / Express / Python', 'Bases de données SQL (PostgreSQL) & NoSQL', 'Conception d’API REST & GraphQL', 'Git & CI/CD'],
        human: ['Esprit d’analyse & rigueur', 'Communication claire avec les non-techniques', 'Autonomie et curiosité d’apprentissage', 'Gestion des priorités'],
        tools: ['VS Code', 'Git / GitHub / GitLab', 'Docker', 'Postman', 'Supabase / Firebase', 'Vercel / AWS']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac S, T, L (avec appétence numérique) ou équivalent', desc: 'Bases solides en raisonnement logique et anglais.' },
          { step: 'Bac +2 / +3', title: 'DUT / Licence Informatique / Bootcamps certifiants', desc: 'Fondations solides en programmation, algorithmique et bases de données.' },
          { step: 'Bac +5', title: 'Master Génie Logiciel / Diplôme d’Ingénieur', desc: 'Architecture logicielle distribuée, sécurité, gestion de projet agile.' }
        ],
        schools: [
          { name: 'École Supérieure Polytechnique (ESP) de Dakar', country: 'Sénégal', scope: 'Sénégal' },
          { name: 'Université Numérique Cheikh Hamidou Kane (ex-UVS)', country: 'Sénégal', scope: 'Sénégal' },
          { name: 'Institut Africain d’Informatique (IAI)', country: 'Afrique Centrale / Gabon', scope: 'Afrique' },
          { name: '2iE — Institut International d’Ingénierie', country: 'Burkina Faso', scope: 'Afrique' },
          { name: 'Plateformes internationales & Open Source (Coursera, 42 Network)', country: 'International', scope: 'International' }
        ],
        certifications: ['AWS Certified Developer', 'Meta Front-End & Back-End Professional Certificates']
      },
      career: {
        sectors: ['Startups & Tech', 'FinTech & Banques', 'Télécoms (Orange, Sonatel, Free)', 'Agences digitales', 'Sociétés d’ingénierie'],
        employerTypes: ['PME digitales locales', 'Multinationales', 'Travailleur indépendant / Freelance remote international'],
        evolution: 'Lead Développeur ➔ Software Architect ➔ Directeur Technique (CTO) ➔ Fondateur Tech',
        pros: 'Très forte demande sur le marché de l’emploi, salaires attractifs, flexibilité géographique grâce au remote.',
        cons: 'Nécessite une veille technologique quasi-hebdomadaire pour ne pas être dépassé par l’évolution des frameworks.'
      },
      relatedJobSlugs: ['ingenieur-ia', 'analyste-cybersecurite', 'product-designer-ux-ui', 'devops-engineer'],
      resources: [
        { type: 'video', title: 'Une journée dans la peau d’un Développeur Web en Afrique', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', source: 'Le Monde du Travail', duration: '12 min' },
        { type: 'mooc', title: 'The Odin Project — Formation complète au développement Full-Stack', url: 'https://www.theodinproject.com', source: 'The Odin Project', duration: 'En autonomie' }
      ],
      sources: ['Observatoire International des Métiers du Numérique', 'Syntec Numérique'],
      interests: ['resoudre-problemes', 'technologie-code', 'creer-designer']
    },
    {
      id: 'ingenieur-ia',
      slug: 'ingenieur-ia',
      title: 'Ingénieur en Intelligence Artificielle & Machine Learning',
      icon: '🧠',
      image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80',
      familyId: 'numerique-ia',
      familyName: 'Numérique, Informatique & IA',
      subdomain: 'Intelligence artificielle',
      shortDescription: 'Conçoit et déploie des algorithmes d’apprentissage automatique capables d’analyser des volumes géants de données, de prédire des événements ou de traiter le langage naturel.',
      longDescription: 'L’ingénieur IA crée des modèles mathématiques et algorithmiques qui confèrent aux ordinateurs la capacité d’apprendre par eux-mêmes à partir d’exemples passés. De la reconnaissance vocale en langues africaines (Wolof, Haoussa) à la détection précoce de maladies sur des radios ou la détection de fraudes bancaires, ses créations modifient radicalement tous les secteurs.',
      level: 'Bac +5 (Master ou Ingénieur) à Bac +8 (Doctorat)',
      salary: '600 000 - 2 000 000 FCFA / mois',
      workEnvironment: [
        '💻 Travail sur ordinateur haute performance (GPU / Cloud)',
        '🧠 Forte composante mathématique et recherche appliquée',
        '👥 Collaboration étroite avec les Data Scientists et chefs de produits',
        '🌍 Débouchés mondiaux et télétravail possible'
      ],
      typicalDay: [
        { time: '09:00', title: 'Revue des modèles de nuit', desc: 'Vérification de la convergence des entraînements de modèles lancés sur les clusters cloud de serveurs GPU.' },
        { time: '10:30', title: 'Nettoyage et Feature Engineering', desc: 'Préparation et validation de la qualité des jeux de données d’apprentissage.' },
        { time: '14:00', title: 'Fine-tuning de modèles de langage (LLM)', desc: 'Adaptation d’un modèle pré-entraîné pour une application d’orientation locale.' },
        { time: '16:00', title: 'Optimisation MLOps & Déploiement', desc: 'Compression du modèle (quantization) pour permettre une inférence ultra-rapide sur mobile.' }
      ],
      skills: {
        technical: ['Python (PyTorch, TensorFlow, Scikit-Learn)', 'Algèbre linéaire, probabilités & statistiques', 'Deep Learning & Réseaux de neurones', 'Traitement automatique du langage (NLP / LLM)', 'MLOps & Inférence cloud'],
        human: ['Rigueur scientifique', 'Curiosité intellectuelle insatiable', 'Capacité de vulgarisation d’algorithmes complexes', 'Sens de l’éthique'],
        tools: ['JupyterLab', 'Hugging Face', 'Docker', 'Weights & Biases', 'Google Colab / AWS SageMaker']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac S1 ou S2 (Mathématiques / Sciences Physiques)', desc: 'Excellente maîtrise du raisonnement analytique.' },
          { step: 'Bac +3', title: 'Licence Mathématiques & Informatique', desc: 'Fondations d’algèbre, calcul différentiel, programmation orientée objet.' },
          { step: 'Bac +5', title: 'Master Spécialisé IA ou Diplôme d’Ingénieur Data/IA', desc: 'Théorie de l’apprentissage automatique, vision par ordinateur, LLMs.' }
        ],
        schools: [
          { name: 'Institut Sénégalais de Recherche Agricole / ESP IA Lab', country: 'Sénégal', scope: 'Sénégal' },
          { name: 'AIMS — African Institute for Mathematical Sciences', country: 'Sénégal (Mbour) / Rwanda', scope: 'Afrique' },
          { name: 'Data Science Tech Institute / Polytechnique', country: 'International', scope: 'International' }
        ],
        certifications: ['DeepLearning.AI Machine Learning Specialization', 'TensorFlow Developer Certificate']
      },
      career: {
        sectors: ['Santé & Télémédecine', 'FinTech & Télécoms', 'AgriTech de précision', 'Laboratoires de recherche', 'Automobile & Mobilité'],
        employerTypes: ['Centres de R&D internationaux', 'Licornes Tech africaines', 'Cabinets de conseil', 'Instituts de recherche publique'],
        evolution: 'Senior ML Engineer ➔ Lead AI Researcher ➔ Chief AI Officer (CAIO)',
        pros: 'Métier à la pointe de l’innovation mondiale, salaires parmi les plus élevés du secteur technologique.',
        cons: 'Nécessite un solide niveau préalable en mathématiques abstraites et statistiques.'
      },
      relatedJobSlugs: ['data-scientist', 'dev-fullstack', 'prompt-engineer-ai', 'data-engineer'],
      resources: [
        { type: 'article', title: 'Comment l’Afrique révolutionne l’IA appliquée aux langues locales', url: '#', source: 'Revue Tech Africaine' },
        { type: 'mooc', title: 'Machine Learning Specialization par Andrew Ng', url: 'https://www.coursera.org', source: 'Coursera / DeepLearning.AI' }
      ],
      sources: ['AIMS Network', 'Stanford AI Index'],
      interests: ['resoudre-problemes', 'technologie-code', 'donnees-chiffres', 'explorer-decouvrir']
    },

    // -----------------------------------------------------------------------
    // CYBERSÉCURITÉ
    // -----------------------------------------------------------------------
    {
      id: 'analyste-cybersecurite',
      slug: 'analyste-cybersecurite',
      title: 'Analyste Cybersécurité / SOC Analyst',
      icon: '🛡️',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80',
      familyId: 'cybersecurite-reseaux',
      familyName: 'Cybersécurité & Réseaux',
      subdomain: 'SOC',
      shortDescription: 'Surveille en temps réel les flux informatiques, détecte les tentatives d’intrusion, analyse les malwares et déclenche les mesures de riposte immédiate.',
      longDescription: 'Tel une sentinelle dans la tour de contrôle d’une organisation (le SOC - Security Operations Center), l’analyste cybersécurité surveille les alertes de sécurité 24/7. Il identifie les comportements anormaux, isole les machines compromises, décortique les tactiques des cybercriminels et renforce la résilience des infrastructures.',
      level: 'Bac +3 (Licence Pro Cyber) à Bac +5 (Ingénieur Sécurité)',
      salary: '500 000 - 1 600 000 FCFA / mois',
      workEnvironment: [
        '💻 Salle de surveillance (SOC) ou poste distant sécurisé',
        '🚨 Gestion d’alertes d’incidents en temps réel',
        '👥 Coordination étroite avec les administrateurs systèmes et réseaux',
        '🔍 Enquêtes méthodiques sur les traces numériques laissées par les attaquants'
      ],
      typicalDay: [
        { time: '08:30', title: 'Triage de la console SIEM', desc: 'Analyse des 50 alertes générées dans la nuit par les sondes de détection d’intrusions.' },
        { time: '10:00', title: 'Investigation d’une alerte critique', desc: 'Recherche des indicateurs de compromission (IoC) sur une tentative d’hameçonnage ciblé (phishing).' },
        { time: '13:30', title: 'Analyse de malware en sandbox', desc: 'Exécution contrôlée d’une pièce jointe suspecte dans un environnement isolé pour observer son comportement.' },
        { time: '15:30', title: 'Rédaction du rapport d’incident', desc: 'Documentation des mesures correctives et mise à jour des règles de détection sur les pare-feux.' }
      ],
      skills: {
        technical: ['Réseaux informatiques (TCP/IP, DNS, VPN)', 'Systèmes Linux & Windows Internals', 'Outils SIEM (Splunk, Elastic, Sentinel)', 'Analyse de paquets (Wireshark)', 'Scripting d’automatisation (Python, Bash)', 'Cadres MITRE ATT&CK'],
        human: ['Calme sous pression et réactivité', 'Sens de la discrétion et intégrité absolue', 'Esprit d’enquête et ténacité', 'Esprit d’équipe'],
        tools: ['Wireshark', 'Splunk / Wazuh', 'VirusTotal', 'Nmap', 'Suricata / Snort', 'Metasploit']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac S ou STI2D', desc: 'Goût prononcé pour les technologies et la logique.' },
          { step: 'Bac +2 / +3', title: 'BTS SIO / DUT Réseaux & Télécoms / Licence Cyber', desc: 'Administration système et principes fondamentaux de sécurité.' },
          { step: 'Bac +5', title: 'Master Sécurité des Systèmes d’Information / Diplôme d’Ingénieur', desc: 'Gestion de crise cyber, forensics avancé, gouvernance et normes ISO 27001.' }
        ],
        schools: [
          { name: 'ESMT — École Supérieure Multinationale des Télécommunications', country: 'Sénégal (Dakar)', scope: 'Sénégal' },
          { name: 'École Militaire d’Administration et de Cybersécurité', country: 'Sénégal', scope: 'Sénégal' },
          { name: 'Institut National Polytechnique Houphouët-Boigny (INP-HB)', country: 'Côte d’Ivoire', scope: 'Afrique' },
          { name: 'ANSSI & Formations labellisées SecNumedu', country: 'International', scope: 'International' }
        ],
        certifications: ['CompTIA Security+', 'Certified SOC Analyst (CSA)', 'CISSP / CEH']
      },
      career: {
        sectors: ['Banques & Assurances', 'Opérateurs Télécoms', 'Ministères & Défense', 'Cabinets de conseil en cybersécurité', 'Hôpitaux'],
        employerTypes: ['Opérateurs d’importance vitale (OIV)', 'Entreprises de services numériques (ESN)', 'Organismes gouvernementaux'],
        evolution: 'Analyste Tier 1 ➔ Analyste Incident Response (Tier 3) ➔ Responsable SOC ➔ CISO (Directeur Cybersécurité)',
        pros: 'Pénurie mondiale de talents, garantissant une employabilité maximale et un travail valorisant au service de la protection collective.',
        cons: 'Peut comporter des astreintes de nuit ou de week-end en cas de cyberattaque d’ampleur.'
      },
      relatedJobSlugs: ['pentester', 'devops-engineer', 'dev-fullstack', 'ingenieur-reseau'],
      resources: [
        { type: 'video', title: 'Immersion au cœur d’un Security Operations Center (SOC)', url: '#', source: 'CyberAcadémie', duration: '15 min' },
        { type: 'article', title: 'Les 5 cybermenaces qui visent l’Afrique de l’Ouest en 2026', url: '#', source: 'CIRT Sénégal' }
      ],
      sources: ['CIRT Sénégal', 'ENISA', 'Cybersecurity Ventures'],
      interests: ['proteger-defendre', 'resoudre-problemes', 'technologie-code']
    },
    {
      id: 'pentester',
      slug: 'pentester-hacker-ethique',
      title: 'Pentester / Hacker Éthique',
      icon: '🔓',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80',
      familyId: 'cybersecurite-reseaux',
      familyName: 'Cybersécurité & Réseaux',
      subdomain: 'Pentest',
      shortDescription: 'Teste la résistance des systèmes informatiques en simulant des attaques réelles avec l’autorisation de l’entreprise pour identifier les failles avant les pirates.',
      longDescription: 'Le Pentester (testeur d’intrusion) agit comme un pirate informatique mais avec une éthique irréprochable et un cadre contractuel strict. Il s’infiltre dans les applications web, les réseaux internes ou les téléphones pour découvrir les brèches techniques et humaines, puis fournit aux équipes des recommandations concrètes de colmatage.',
      level: 'Bac +3 à Bac +5',
      salary: '550 000 - 1 800 000 FCFA / mois',
      workEnvironment: [
        '💻 Travail offensif sur machine dédiée (Kali Linux)',
        '🎯 Missions variées d’audit (web, mobile, infrastructure, ingénierie sociale)',
        '📝 Rédaction de rapports d’audit détaillés et démonstrations de faisabilité (PoC)'
      ],
      typicalDay: [
        { time: '09:00', title: 'Reconnaissance passive & active', desc: 'Cartographie des sous-domaines, ports ouverts et technologies utilisées par la cible.' },
        { time: '11:00', title: 'Recherche de vulnérabilités applicatives', desc: 'Tests d’injections SQL, contournements d’authentification et failles de logique métier.' },
        { time: '14:30', title: 'Exploitation et élévation de privilèges', desc: 'Démonstration de prise de contrôle sécurisée d’un serveur sans impacter la production.' },
        { time: '16:30', title: 'Débriefing technique avec les développeurs', desc: 'Explication pédagogique des failles trouvées et validation des correctifs préconisés.' }
      ],
      skills: {
        technical: ['Sécurité web (OWASP Top 10)', 'Systèmes d’exploitation (Linux/Windows internals)', 'Scripting Python & Bash', 'Ingénierie inverse (Reverse Engineering)', 'Protocoles réseaux et cryptographie'],
        human: ['Curiosité créative (penser comme un attaquant)', 'Éthique irréprochable', 'Pédagogie pour expliquer les failles aux décideurs'],
        tools: ['Burp Suite Professional', 'Kali Linux', 'Metasploit', 'Nmap', 'Wireshark', 'Ghidra']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac S ou technique', desc: 'Bases solides en mathématiques et algorithmes.' },
          { step: 'Bac +3', title: 'Licence Informatique ou Réseaux', desc: 'Compréhension intime du fonctionnement des protocoles et serveurs.' },
          { step: 'Bac +5', title: 'Master Sécurité Offensive / CTF compétitifs', desc: 'Techniques avancées d’exploitation et d’évasion de défenses.' }
        ],
        schools: [
          { name: 'École Supérieure Polytechnique (ESP) Dakar', country: 'Sénégal', scope: 'Sénégal' },
          { name: 'ESMT Dakar', country: 'Sénégal', scope: 'Sénégal' },
          { name: 'Plateformes d’entraînement reconnues (HackTheBox, TryHackMe, Root-Me)', country: 'International', scope: 'International' }
        ],
        certifications: ['OSCP (Offensive Security Certified Professional)', 'eJPT', 'CEH Practical']
      },
      career: {
        sectors: ['Sociétés de conseil en cyber (Big 4, ESN spécialisées)', 'Banques et plateformes de paiement', 'Éditeurs de logiciels'],
        employerTypes: ['Cabinets d’audit', 'Équipes Red Team internes des grands groupes'],
        evolution: 'Pentester Junior ➔ Senior Red Teamer ➔ Lead Security Auditor ➔ Directeur Technique Cyber',
        pros: 'Métier passionnant, challenge intellectuel permanent, sentiment d’utilité très fort.',
        cons: 'Exige une rigueur juridique totale (ne jamais tester sans autorisation écrite préalable).'
      },
      relatedJobSlugs: ['analyste-cybersecurite', 'dev-fullstack', 'devops-engineer'],
      resources: [
        { type: 'video', title: 'Une journée dans la peau d’un hacker éthique professionnel', url: '#', source: 'SecuriteInfo', duration: '18 min' }
      ],
      sources: ['OWASP Foundation', 'Offensive Security'],
      interests: ['proteger-defendre', 'resoudre-problemes', 'technologie-code']
    },

    // -----------------------------------------------------------------------
    // DATA, STATISTIQUES & DÉCISION
    // -----------------------------------------------------------------------
    {
      id: 'data-scientist',
      slug: 'data-scientist',
      title: 'Data Scientist',
      icon: '📊',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
      familyId: 'data-decision',
      familyName: 'Data, Statistiques & Décision',
      subdomain: 'Data Science',
      shortDescription: 'Fait parler les données massives pour aider l’entreprise à prédire le comportement de ses clients, réduire ses coûts et prendre les bonnes décisions.',
      longDescription: 'À la croisée de l’informatique, des mathématiques et de la stratégie d’entreprise, le Data Scientist extrait de la valeur des téraoctets de données collectées. Il élabore des algorithmes prédictifs pour anticiper le désabonnement des clients télécoms, calculer les prix des assurances ou optimiser les stocks agricoles.',
      level: 'Bac +5 (Master Data / Diplôme d’Ingénieur)',
      salary: '550 000 - 1 700 000 FCFA / mois',
      workEnvironment: [
        '💻 Travail sur ordinateur avec suites d’analyse et bases de données',
        '📊 Création de visualisations et présentations synthétiques',
        '👥 Pont permanent entre les ingénieurs techniques et les directeurs de département'
      ],
      typicalDay: [
        { time: '09:00', title: 'Exploration de données (EDA)', desc: 'Analyse descriptive des comportements d’achat sur un échantillon de 500 000 transactions bancaires.' },
        { time: '11:00', title: 'Construction et test de modèle', desc: 'Entraînement d’un modèle XGBoost pour prédire le risque de non-remboursement de micro-crédits.' },
        { time: '14:30', title: 'Visualisation & Storytelling', desc: 'Création d’un tableau de bord interactif sur Tableau/Power BI pour présenter les conclusions au comité de direction.' },
        { time: '16:30', title: 'Documentation et reproductibilité', desc: 'Nettoyage des notebooks Jupyter et publication du code sur le repository interne.' }
      ],
      skills: {
        technical: ['Python (Pandas, NumPy, Scikit-Learn)', 'Requêtes SQL complexes', 'Statistiques appliquées et modélisation', 'Data Visualization (Matplotlib, Seaborn, Tableau)', 'Notions de Machine Learning & MLOps'],
        human: ['Storytelling et communication visuelle', 'Esprit critique face aux biais statistiques', 'Compréhension du business', 'Curiosité'],
        tools: ['Jupyter Notebook', 'SQL / PostgreSQL / BigQuery', 'Power BI / Tableau', 'Git', 'Docker']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac S1 ou S2 (Sciences & Mathématiques)', desc: 'Solides fondations en analyse de fonctions et probabilités.' },
          { step: 'Bac +3', title: 'Licence Mathématiques Appliquées ou Informatique', desc: 'Modélisation probabiliste et programmation informatique.' },
          { step: 'Bac +5', title: 'Master Data Science / Diplôme d’Ingénieur Statisticien', desc: 'Statistiques avancées, fouille de données massives (Big Data), IA.' }
        ],
        schools: [
          { name: 'ENSAE Dakar — École Nationale de la Statistique et de l’Analyse Économique', country: 'Sénégal', scope: 'Sénégal' },
          { name: 'Université Cheikh Anta Diop (UCAD) — FST', country: 'Sénégal', scope: 'Sénégal' },
          { name: 'ENSEA Abidjan', country: 'Côte d’Ivoire', scope: 'Afrique' },
          { name: 'ISUP / ENSAE Paris', country: 'France', scope: 'International' }
        ],
        certifications: ['IBM Data Science Professional Certificate', 'Google Data Analytics Professional Certificate']
      },
      career: {
        sectors: ['Opérateurs Télécoms & Mobile Money', 'Banque & Microfinance', 'Grandes plateformes e-commerce', 'Santé & Épidémiologie'],
        employerTypes: ['Grandes entreprises régionales', 'Cabinets d’audit', 'Organisations internationales (ONU, Banque Mondiale)'],
        evolution: 'Data Scientist ➔ Senior Data Scientist ➔ Head of Data ➔ Chief Data Officer (CDO)',
        pros: 'Impact stratégique direct sur les décisions clés de l’entreprise, forte reconnaissance managériale.',
        cons: 'Une grande partie du temps de travail (jusqu’à 70%) est souvent consacrée au nettoyage laborieux de données brutes.'
      },
      relatedJobSlugs: ['ingenieur-ia', 'data-analyst', 'actuaire', 'dev-fullstack'],
      resources: [
        { type: 'video', title: 'Qu’est-ce qu’un bon Data Scientist en 2026 ?', url: '#', source: 'DataCamp Fr', duration: '11 min' },
        { type: 'article', title: 'La Data Science au secours de l’agriculture ouest-africaine', url: '#', source: 'Revue AgroData' }
      ],
      sources: ['ENSAE Dakar', 'KDnuggets'],
      interests: ['donnees-chiffres', 'resoudre-problemes', 'technologie-code']
    },
    {
      id: 'data-analyst',
      slug: 'data-analyst',
      title: 'Data Analyst / Business Intelligence Analyst',
      icon: '📈',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
      familyId: 'data-decision',
      familyName: 'Data, Statistiques & Décision',
      subdomain: 'Data Analysis',
      shortDescription: 'Extrait, organise et traduit les données chiffrées de l’entreprise en tableaux de bord visuels et indicateurs clés faciles à comprendre par les managers.',
      longDescription: 'Le Data Analyst répond aux questions concrètes du quotidien : Quels produits se vendent le mieux ce mois-ci ? Pourquoi les livraisons prennent-elles du retard dans telle région ? Grâce à des requêtes SQL et des tableaux de bord interactifs (Power BI), il offre aux décideurs une boussole chiffrée infaillible.',
      level: 'Bac +3 (Licence Pro) à Bac +5',
      salary: '400 000 - 1 200 000 FCFA / mois',
      workEnvironment: [
        '💻 Travail quotidien sur outils de BI et bases de données',
        '📊 Échanges permanents avec les responsables marketing, ventes et opérations',
        '🎯 Réalisation d’analyses concrètes à forte utilité opérationnelle'
      ],
      typicalDay: [
        { time: '09:00', title: 'Mise à jour des KPI quotidiens', desc: 'Vérification de l’actualisation automatique des tableaux de bord de ventes.' },
        { time: '10:30', title: 'Requête sur mesure pour le marketing', desc: 'Extraction SQL de la liste des utilisateurs inactifs depuis 30 jours pour une campagne de relance.' },
        { time: '14:00', title: 'Design d’un dashboard exécutif', desc: 'Conception d’un rapport Power BI synthétique pour le comité de gestion mensuel.' },
        { time: '16:00', title: 'Restitution et explications', desc: 'Présentation des résultats aux chefs de produit et recommandations d’optimisation.' }
      ],
      skills: {
        technical: ['SQL (PostgreSQL, MySQL, SQL Server)', 'Outils BI (Power BI, Tableau, Looker)', 'Excel avancé & Power Query', 'Python pour l’analyse (Pandas basic)', 'Data Warehousing basique'],
        human: ['Sens pédagogique et clarté d’élocution', 'Capacité de synthèse visuelle', 'Écoute des besoins métiers', 'Rigueur méthodologique'],
        tools: ['Power BI', 'Excel', 'PostgreSQL / DBeaver', 'Tableau', 'Looker Studio']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Baccalauréat général ou technologique', desc: 'Aisance avec les chiffres et la logique.' },
          { step: 'Bac +2 / +3', title: 'DUT / BTS Gestion ou Licence Informatique / Gestion', desc: 'Maîtrise des bases de données relationnelles et du tableur.' },
          { step: 'Bac +5 (Optionnel)', title: 'Master Business Analytics / Systèmes d’Information Décisionnels', desc: 'Gouvernance des données, modélisation dimensionnelle.' }
        ],
        schools: [
          { name: 'Institut Supérieur de Management (ISM) Dakar', country: 'Sénégal', scope: 'Sénégal' },
          { name: 'CESAG — Centre Africain d’Études Supérieures en Gestion', country: 'Sénégal (Dakar)', scope: 'Sénégal' },
          { name: 'BEM Dakar — Bordeaux Management School', country: 'Sénégal', scope: 'Sénégal' }
        ],
        certifications: ['Microsoft Certified: Power BI Data Analyst Associate (PL-300)', 'Google Data Analytics Certificate']
      },
      career: {
        sectors: ['Distribution & Commerce', 'Télécoms', 'Banques & Fintechs', 'Logistique & Transport', 'Organisations publiques'],
        employerTypes: ['Toutes entreprises disposant d’un système informatique et de clients réguliers'],
        evolution: 'Data Analyst ➔ Senior Data Analyst ➔ Data Scientist ou Analytics Engineer ➔ Responsable BI',
        pros: 'Accès très rapide au marché de l’emploi, compétences directement visibles et appréciées de la hiérarchie.',
        cons: 'Doit parfois composer avec des données de mauvaise qualité ou des systèmes informatiques obsolètes.'
      },
      relatedJobSlugs: ['data-scientist', 'growth-marketer', 'analyste-financier'],
      resources: [
        { type: 'video', title: 'Comment créer son premier dashboard Power BI professionnel', url: '#', source: 'Le Monde du Travail', duration: '14 min' }
      ],
      sources: ['Coursera Career Data', 'Association Française des Économistes d’Entreprise'],
      interests: ['donnees-chiffres', 'resoudre-problemes', 'negocier-convaincre']
    },

    // -----------------------------------------------------------------------
    // FINANCE & FINTECH
    // -----------------------------------------------------------------------
    {
      id: 'analyste-financier',
      slug: 'analyste-financier',
      title: 'Analyste Financier',
      icon: '🏦',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80',
      familyId: 'finance-fintech',
      familyName: 'Finance, Banque, Assurance & FinTech',
      subdomain: 'Finance d’entreprise',
      shortDescription: 'Évalue la santé économique des entreprises, réalise des projections de rentabilité et conseille les dirigeants et investisseurs sur leurs choix financiers.',
      longDescription: 'L’analyste financier décortique les bilans, comptes de résultat et plans d’affaires. Il calcule les ratios de solvabilité et évalue les opportunités d’investissement ou de rachat d’entreprises. Ses modélisations permettent de sécuriser les financements bancaires et d’attirer les fonds d’investissement régionaux ou internationaux.',
      level: 'Bac +5 (Master Finance / École de Commerce)',
      salary: '500 000 - 1 600 000 FCFA / mois',
      workEnvironment: [
        '💻 Travail sur tableurs financiers complexes et rapports annuels',
        '📊 Réunions avec les directeurs financiers (DAF) et banquiers',
        '⚖️ Respect strict des normes comptables et réglementaires'
      ],
      typicalDay: [
        { time: '08:30', title: 'Veille sur les marchés et devises', desc: 'Revue des cours de la bourse régionale (BRVM), des matières premières et des taux d’intérêt de la BCEAO.' },
        { time: '10:00', title: 'Modélisation de flux de trésorerie (DCF)', desc: 'Simulation sur Excel de la rentabilité sur 5 ans d’une nouvelle usine agroalimentaire.' },
        { time: '14:00', title: 'Entretien avec le comité de crédit', desc: 'Défense d’un dossier de prêt d’investissement devant les directeurs de la banque.' },
        { time: '16:30', title: 'Rédaction d’une note de synthèse', desc: 'Production du mémorandum d’investissement pour les actionnaires.' }
      ],
      skills: {
        technical: ['Analyse financière & comptabilité d’entreprise (SYSCOHADA, IFRS)', 'Modélisation financière avancée sous Excel', 'Évaluation d’entreprise (DCF, multiples de marché)', 'Analyse des risques de crédit', 'Réglementation bancaire BCEAO'],
        human: ['Esprit d’analyse rigoureux', 'Capacité de synthèse et esprit critique', 'Aisance relationnelle et argumentation', 'Sens élevé de l’éthique'],
        tools: ['Excel avancé (VBA / Power Query)', 'Logiciels comptables et ERP (SAP, Sage)', 'Bases de données de marché (Bloomberg, Refinitiv, BRVM)']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Baccalauréat général ou technique de gestion (G)', desc: 'Goût pour la comptabilité et les mathématiques financières.' },
          { step: 'Bac +3', title: 'Licence Économie-Gestion ou Comptabilité-Finance', desc: 'Fondamentaux de finance d’entreprise et comptabilité générale.' },
          { step: 'Bac +5', title: 'Master Banque & Finance ou Diplôme Grande École de Commerce', desc: 'Ingénierie financière, fusions-acquisitions, gestion de portefeuille.' }
        ],
        schools: [
          { name: 'CESAG Dakar — Centre Africain d’Études Supérieures en Gestion', country: 'Sénégal', scope: 'Sénégal' },
          { name: 'BEM Management School Dakar', country: 'Sénégal', scope: 'Sénégal' },
          { name: 'Université Cheikh Anta Diop (FASEG)', country: 'Sénégal', scope: 'Sénégal' },
          { name: 'ESCA Abidjan', country: 'Côte d’Ivoire', scope: 'Afrique' }
        ],
        certifications: ['CFA (Chartered Financial Analyst)', 'FMVA (Financial Modeling & Valuation Analyst)']
      },
      career: {
        sectors: ['Banques commerciales et d’affaires', 'Fonds d’investissement & Capital-risque (Venture Capital)', 'Grandes entreprises industrielles', 'Sociétés de bourse (SGI)'],
        employerTypes: ['Institutions financières régionales (BOAD, Ecobank, CBAO, Société Générale)', 'Cabinets d’audit (PwC, Deloitte, EY, KPMG)'],
        evolution: 'Analyste Junior ➔ Chargé d’Affaires Senior ➔ Directeur des Engagements ➔ Directeur Financier (CFO)',
        pros: 'Prestige professionnel, rémunération attractive avec primes sur performance, réseau d’affaires puissant.',
        cons: 'Horaires intenses en période de clôture des comptes ou de bouclage d’opérations financières.'
      },
      relatedJobSlugs: ['expert-comptable', 'controleur-de-gestion', 'data-analyst'],
      resources: [
        { type: 'video', title: 'Comment analyser le bilan d’une entreprise en 10 minutes', url: '#', source: 'Le Monde du Travail', duration: '16 min' },
        { type: 'article', title: 'Panorama de l’écosystème FinTech et bancaire en Afrique de l’Ouest', url: '#', source: 'FinTech Mag' }
      ],
      sources: ['BCEAO', 'CFA Institute'],
      interests: ['donnees-chiffres', 'negocier-convaincre', 'resoudre-problemes']
    },

    // -----------------------------------------------------------------------
    // AGRICULTURE & AGRITECH
    // -----------------------------------------------------------------------
    {
      id: 'ingenieur-agronome',
      slug: 'ingenieur-agronome',
      title: 'Ingénieur Agronome / Spécialiste AgriTech',
      icon: '🌾',
      image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&auto=format&fit=crop&q=80',
      familyId: 'agriculture-agritech',
      familyName: 'Agriculture, Agronomie & AgriTech',
      subdomain: 'Agronomie',
      shortDescription: 'Développe des méthodes de culture modernes et résilientes au climat pour augmenter la production agricole tout en préservant les sols et l’eau.',
      longDescription: 'Pilier de la souveraineté alimentaire, l’ingénieur agronome étudie les sols, sélectionne les semences adaptées à la sécheresse, conçoit des systèmes d’irrigation intelligents au goutte-à-goutte et intègre le numérique (drones, capteurs d’humidité) pour optimiser les exploitations maraîchères, céréalières et fruitières.',
      level: 'Bac +5 (Diplôme d’Ingénieur Agronome)',
      salary: '450 000 - 1 500 000 FCFA / mois',
      workEnvironment: [
        '🌾 Partage équilibré entre terrain agricole et bureau/laboratoire',
        '🌍 Déplacements réguliers dans les zones rurales de production',
        '☀️ Travail au grand air et observation directe des cultures'
      ],
      typicalDay: [
        { time: '07:30', title: 'Visite d’une parcelle expérimentale', desc: 'Contrôle visuel de la croissance des plants et mesure de la teneur en eau du sol.' },
        { time: '10:00', title: 'Revue des données de capteurs IoT', desc: 'Analyse sur tablette des relevés de température et d’humidité transmis par les stations météo connectées.' },
        { time: '14:00', title: 'Formation de producteurs locaux', desc: 'Animation d’un atelier pratique sur la fertilisation organique et la gestion raisonnée de l’irrigation.' },
        { time: '16:30', title: 'Rapport technique et recommandations', desc: 'Rédaction d’un protocole de protection biologique contre un ravageur des cultures.' }
      ],
      skills: {
        technical: ['Pédologie (science des sols) & fertilisation', 'Systèmes d’irrigation & gestion de l’eau', 'Protection des végétaux & lutte intégrée', 'Technologies AgriTech (capteurs connectés, imagerie par drone)', 'Agroéconomie & gestion d’exploitation'],
        human: ['Sens du contact avec les agriculteurs', 'Pédagogie et adaptabilité', 'Résistance physique pour le travail de terrain', 'Sens aigu de l’observation'],
        tools: ['Systèmes d’Information Géographique (QGIS)', 'Sondes d’humidité connectées', 'Drones agricoles de cartographie', 'Logiciels de gestion d’exploitation']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac S1, S2 (Sciences expérimentales) ou S4/S5 (Agricole)', desc: 'Bases solides en biologie, chimie et physique.' },
          { step: 'Bac +2', title: 'Classes Préparatoires Biologie ou BTS Agricole', desc: 'Approfondissement en sciences naturelles et sciences du vivant.' },
          { step: 'Bac +5', title: 'Diplôme d’Ingénieur Agronome', desc: 'Spécialisations en productions végétales, hydraulique agricole ou agroalimentaire.' }
        ],
        schools: [
          { name: 'ENSA Thiès — École Nationale Supérieure d’Agriculture', country: 'Sénégal', scope: 'Sénégal' },
          { name: 'Université Gaston Berger (UGB) — UFR Sciences Agronomiques (Saint-Louis)', country: 'Sénégal', scope: 'Sénégal' },
          { name: 'Institut National Polytechnique Houphouët-Boigny (INP-HB Yamoussoukro)', country: 'Côte d’Ivoire', scope: 'Afrique' },
          { name: 'Institut Agronomique et Vétérinaire Hassan II (IAV)', country: 'Maroc', scope: 'Afrique' }
        ],
        certifications: ['Certifications en Agriculture de Précision et Télédétection appliquée']
      },
      career: {
        sectors: ['Grandes exploitations agro-industrielles', 'Startups AgriTech', 'Instituts de recherche agronomique (ISRA, CIRAD)', 'ONG de développement rural', 'Ministère de l’Agriculture'],
        employerTypes: ['Coopératives agricoles', 'Agro-industries régionales', 'Bureaux d’études internationaux'],
        evolution: 'Ingénieur d’exploitation ➔ Chef de projet développement rural ➔ Directeur d’exploitation agro-industrielle ➔ Consultant international FAO',
        pros: 'Métier hautement noble et stratégique pour le continent africain, contact permanent avec la nature, fortes opportunités entrepreneuriales.',
        cons: 'Nécessite d’aimer vivre ou séjourner fréquemment hors des grandes métropoles.'
      },
      relatedJobSlugs: ['veterinaire', 'ingenieur-ecologue', 'responsable-rse'],
      resources: [
        { type: 'video', title: 'L’essor de l’irrigation intelligente dans la vallée du fleuve Sénégal', url: '#', source: 'AgriReport Afrique', duration: '13 min' }
      ],
      sources: ['ISRA Sénégal', 'ENSA Thiès', 'FAO'],
      interests: ['nature-environnement', 'resoudre-problemes', 'technologie-code', 'construire-fabriquer']
    },

    // -----------------------------------------------------------------------
    // ÉNERGIE & ÉNERGIES RENOUVELABLES
    // -----------------------------------------------------------------------
    {
      id: 'ingenieur-solaire',
      slug: 'ingenieur-solaire-energies-renouvelables',
      title: 'Ingénieur en Énergies Renouvelables & Solaire',
      icon: '⚡',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=80',
      familyId: 'energie-renouvelable',
      familyName: 'Énergie, Électricité & Énergies Renouvelables',
      subdomain: 'Énergie solaire',
      shortDescription: 'Conçoit, dimensionne et supervise la construction de centrales solaires photovoltaïques, de mini-réseaux ruraux et de solutions de stockage par batterie.',
      longDescription: 'Face à l’abondance de soleil sur le continent africain, l’ingénieur solaire est au cœur de l’indépendance énergétique. Il calcule le rayonnement solaire, dimensionne les onduleurs et parcs de panneaux photovoltaïques, s’assure du raccordement au réseau électrique national ou installe des micro-réseaux autonomes dans les villages enclavés.',
      level: 'Bac +5 (Master Énergie ou Ingénieur Électrique)',
      salary: '500 000 - 1 600 000 FCFA / mois',
      workEnvironment: [
        '⚡ Bureau d’études techniques (calculs de production) & chantiers de centrales',
        '☀️ Travail sous le soleil lors des phases d’audit et de mise en service',
        '📐 Manipulation de schémas unifilaires et modélisations logicielles'
      ],
      typicalDay: [
        { time: '08:30', title: 'Simulation d’ensoleillement sur PVSyst', desc: 'Modélisation du rendement annuel d’une centrale solaire de 30 MW à Thiès.' },
        { time: '11:00', title: 'Sélection d’onduleurs et de batteries', desc: 'Analyse comparative des fiches techniques pour un projet d’électrification hybride solaire-stockage.' },
        { time: '14:00', title: 'Inspection de sécurité sur site', desc: 'Vérification du raccordement des câbles haute tension et des mises à la terre sur une toiture industrielle.' },
        { time: '16:30', title: 'Réunion avec la compagnie d’électricité (Senelec)', desc: 'Discussion technique sur les protocoles d’injection d’énergie dans le réseau public.' }
      ],
      skills: {
        technical: ['Génie électrique & haute tension', 'Dimensionnement photovoltaïque (PVSyst, AutoCAD)', 'Réseaux de distribution & Smart Grids', 'Systèmes de stockage par batterie (BESS)', 'Normes de sécurité électrique'],
        human: ['Rigueur de calcul', 'Capacité de coordination sur chantier', 'Sens de la négociation avec les sous-traitants', 'Prévoyance des risques'],
        tools: ['PVSyst', 'AutoCAD Electrical', 'HelioScope', 'Multimètres & caméras thermiques']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac S1, S2, S3 ou T1 (Technique)', desc: 'Solides bases en physique, électromagnétisme et calculs.' },
          { step: 'Bac +3', title: 'Licence Génie Électrique ou Physique Appliquée', desc: 'Circuits électriques, conversion d’énergie, thermodynamique.' },
          { step: 'Bac +5', title: 'Diplôme d’Ingénieur Énergie / Électrotechnique', desc: 'Conception de grandes centrales solaires, éoliennes et micro-grids.' }
        ],
        schools: [
          { name: 'École Polytechnique de Thiès (EPT)', country: 'Sénégal', scope: 'Sénégal' },
          { name: 'ESP Dakar — Département Génie Électrique', country: 'Sénégal', scope: 'Sénégal' },
          { name: '2iE — Institut International d’Ingénierie de l’Eau et de l’Environnement', country: 'Burkina Faso', scope: 'Afrique' }
        ],
        certifications: ['Certifications internationales NABCEP (North American Board of Certified Energy Practitioners)']
      },
      career: {
        sectors: ['Producteurs indépendants d’électricité (IPP)', 'Opérateurs nationaux (Senelec, CIE)', 'Installateurs de toitures solaires', 'Bureaux d’études internationaux'],
        employerTypes: ['Entreprises internationales d’énergies renouvelables', 'Agences d’électrification rurale', 'PME locales'],
        evolution: 'Ingénieur d’études ➔ Chef de projet centrales solaires ➔ Directeur Technique Énergie ➔ Développeur de projets indépendants',
        pros: 'Secteur en plein essor mondial bénéficiant d’investissements massifs, impact écologique concret et mesurable.',
        cons: 'Chantiers parfois isolés géographiquement nécessitant des semaines d’intervention loin du domicile.'
      },
      relatedJobSlugs: ['ingenieur-genie-civil', 'responsable-rse', 'ingenieur-agronome'],
      resources: [
        { type: 'video', title: 'Visite guidée d’une des plus grandes centrales solaires d’Afrique de l’Ouest', url: '#', source: 'Énergie Renouvelable Info', duration: '12 min' }
      ],
      sources: ['ANER Sénégal (Agence Nationale pour les Énergies Renouvelables)', 'IRENA'],
      interests: ['nature-environnement', 'construire-fabriquer', 'technologie-code', 'resoudre-problemes']
    },

    // -----------------------------------------------------------------------
    // BTP, ARCHITECTURE & URBANISME
    // -----------------------------------------------------------------------
    {
      id: 'ingenieur-genie-civil',
      slug: 'ingenieur-genie-civil',
      title: 'Ingénieur en Génie Civil & BTP',
      icon: '🏗️',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=80',
      familyId: 'btp-architecture',
      familyName: 'BTP, Architecture, Urbanisme & Immobilier',
      subdomain: 'Génie civil',
      shortDescription: 'Conçoit, calcule et supervise la construction d’immeubles, de ponts, de routes, de barrages et d’infrastructures de transport majeures.',
      longDescription: 'Bâtisseur du cadre de vie, l’ingénieur en génie civil s’assure que les ouvrages résistent aux forces de la gravité, au vent, aux séismes et au temps. Il calcule les structures en béton armé ou en acier, choisit les fondations adaptées au sol et veille au respect des plannings, des coûts et de la sécurité des ouvriers sur le chantier.',
      level: 'Bac +5 (Diplôme d’Ingénieur Génie Civil)',
      salary: '500 000 - 1 700 000 FCFA / mois',
      workEnvironment: [
        '🏗️ Équilibre dynamique entre bureau d’études (calculs) et terrain (chantier)',
        '🦺 Port d’équipement de protection individuelle (casque, chaussures de sécurité)',
        '👥 Management d’équipes pluridisciplinaires (architectes, conducteurs de travaux, ouvriers)'
      ],
      typicalDay: [
        { time: '07:30', title: 'Briefing de sécurité sur chantier', desc: 'Rappel des consignes de sécurité aux chefs d’équipe avant le coulage d’une dalle en béton armé.' },
        { time: '09:30', title: 'Vérification du ferraillage', desc: 'Contrôle méticuleux de la conformité du positionnement des armatures métalliques avec les plans de structure.' },
        { time: '14:00', title: 'Calcul de descente de charges sur Robot', desc: 'Simulation numérique de la résistance au vent des piliers d’un pont enjambant un fleuve.' },
        { time: '16:30', title: 'Réunion de coordination de chantier', desc: 'Point d’avancement avec le maître d’ouvrage et validation du calendrier des livraisons de ciment.' }
      ],
      skills: {
        technical: ['Résistance des matériaux (RDM) & mécanique des structures', 'Béton armé, précontraint et charpente métallique', 'Mécanique des sols et géotechnique', 'Modélisation BIM et CAO/DAO', 'Gestion de projet BTP et suivi budgétaire'],
        human: ['Leadership et autorité bienveillante', 'Capacité de prise de décision rapide', 'Résistance au stress des délais', 'Organisation méthodique'],
        tools: ['Robot Structural Analysis', 'AutoCAD / Revit (BIM)', 'MS Project / Primavera', 'Essais au scléromètre et contrôle béton']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac S1, S2 ou T1 (Génie Civil)', desc: 'Excellente base en mécanique, géométrie dans l’espace et physique.' },
          { step: 'Bac +2', title: 'Classes Préparatoires Scientifiques ou BTS Bâtiment', desc: 'Mathématiques avancées et physique de la matière.' },
          { step: 'Bac +5', title: 'Diplôme d’Ingénieur en Génie Civil', desc: 'Calcul de structures complexes, barrages, autoroutes et grands travaux.' }
        ],
        schools: [
          { name: 'École Polytechnique de Thiès (EPT)', country: 'Sénégal', scope: 'Sénégal' },
          { name: 'ESP Dakar — Génie Civil', country: 'Sénégal', scope: 'Sénégal' },
          { name: '2iE Ouagadougou', country: 'Burkina Faso', scope: 'Afrique' },
          { name: 'INP-HB Yamoussoukro (ESTP)', country: 'Côte d’Ivoire', scope: 'Afrique' }
        ],
        certifications: ['Ordre des Ingénieurs Diplômés du Sénégal (OIDS)', 'Certifications BIM Management']
      },
      career: {
        sectors: ['Grandes entreprises de BTP (Eiffage, CSE, Satrec, etc.)', 'Bureaux d’études et d’ingénierie conseil', 'Agences publiques de gestion des routes (Ageroute)', 'Ministères des Infrastructures'],
        employerTypes: ['Groupes internationaux de construction', 'Bureaux de contrôle technique (Apave, Veritas)', 'PME de construction locale'],
        evolution: 'Ingénieur d’études structures ➔ Conducteur de travaux ➔ Directeur de travaux ➔ Directeur d’agence BTP',
        pros: 'Voir concrètement s’élever dans la réalité les bâtiments et ponts conçus sur écran, fierté bâtisseuse.',
        cons: 'Pression soutenue liée aux délais de livraison des chantiers et aux conditions météo.'
      },
      relatedJobSlugs: ['ingenieur-solaire', 'architecte', 'geologue'],
      resources: [
        { type: 'video', title: 'Le chantier du siècle : défi d’ingénierie du Pont de Rosso', url: '#', source: 'Génie Civil Info', duration: '17 min' }
      ],
      sources: ['Ordre des Ingénieurs du Sénégal', 'Fédération des Travaux Publics'],
      interests: ['construire-fabriquer', 'resoudre-problemes', 'donnees-chiffres']
    },

    // -----------------------------------------------------------------------
    // SANTÉ & BIOMÉDICAL
    // -----------------------------------------------------------------------
    {
      id: 'ingenieur-biomedical',
      slug: 'ingenieur-biomedical',
      title: 'Ingénieur Biomédical',
      icon: '🏥',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=80',
      familyId: 'sante-biomedical',
      familyName: 'Santé, Pharmacie & Biomédical',
      subdomain: 'Biomédical',
      shortDescription: 'Fait le lien vital entre la médecine et la technologie en garantissant l’acquisition, la maintenance et la fiabilité des équipements de pointe hospitaliers.',
      longDescription: 'Dans un hôpital moderne, aucun médecin ne peut opérer sans respirateurs fiables, scanners IRM ou moniteurs cardiaques calibrés. L’ingénieur biomédical choisit les équipements médicaux les plus performants, forme le personnel soignant à leur usage et organise la maintenance préventive pour éviter toute panne en pleine réanimation.',
      level: 'Bac +5 (Ingénieur Biomédical ou Master Technologies de Santé)',
      salary: '450 000 - 1 500 000 FCFA / mois',
      workEnvironment: [
        '🏥 Évolution dans les blocs opératoires, laboratoires et ateliers hospitaliers',
        '🔬 Manipulation d’appareils électroniques et optiques de très haute précision',
        '👥 Collaboration étroite avec les chirurgiens, anesthésistes et directeurs d’hôpitaux'
      ],
      typicalDay: [
        { time: '08:00', title: 'Tournée de contrôle au bloc opératoire', desc: 'Vérification de la calibration des respirateurs et des bistouris électriques avant les interventions du matin.' },
        { time: '10:30', title: 'Dépannage d’urgence d’un échographe', desc: 'Diagnostic d’une sonde ultrasonore défectueuse et remise en service immédiate pour les urgences.' },
        { time: '14:00', title: 'Dépouillement d’un appel d’offres Scanner IRM', desc: 'Analyse comparative des spécifications techniques de Siemens, GE Healthcare et Philips.' },
        { time: '16:00', title: 'Session de formation des infirmiers', desc: 'Atelier pratique sur les nouvelles pompes à perfusion connectées.' }
      ],
      skills: {
        technical: ['Électronique médicale & capteurs biologiques', 'Technologies d’imagerie (Rayons X, Échographie, IRM)', 'Sécurité électrique hospitalière & stérilisation', 'Maintenance préventive & curative', 'Réglementation des dispositifs médicaux'],
        human: ['Calme absolu lors des urgences techniques', 'Sens de la diplomatie et écoute des médecins', 'Rigueur méthodologique et traçabilité'],
        tools: ['Oscilloscope et simulateurs de signaux patients', 'Logiciels de GMAO (Gestion de maintenance)', 'Analyseurs de sécurité électrique']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac S1 ou S2', desc: 'Goût combiné pour la biologie et la physique/électronique.' },
          { step: 'Bac +3', title: 'Licence Génie Électrique ou Maintenance Industrielle', desc: 'Électronique, automatique, traitement du signal.' },
          { step: 'Bac +5', title: 'Diplôme d’Ingénieur Biomédical', desc: 'Dispositifs médicaux, imagerie avancée, gestion hospitalière.' }
        ],
        schools: [
          { name: 'École Supérieure Polytechnique (ESP) Dakar — Génie Biomédical', country: 'Sénégal', scope: 'Sénégal' },
          { name: 'Faculté de Médecine UCAD (formations associées)', country: 'Sénégal', scope: 'Sénégal' },
          { name: 'Institut Supérieur des Sciences de la Santé (INP-HB)', country: 'Côte d’Ivoire', scope: 'Afrique' }
        ],
        certifications: ['Certifications constructeurs (GE, Siemens, Draeger)']
      },
      career: {
        sectors: ['Hôpitaux publics et cliniques privées', 'Fabricants internationaux d’équipements médicaux', 'Distributeurs de matériel de santé', 'Ministère de la Santé'],
        employerTypes: ['Centres hospitaliers universitaires (CHU)', 'Multinationales médicales'],
        evolution: 'Ingénieur biomédical de maintenance ➔ Responsable de service biomédical ➔ Directeur des équipements hospitaliers ➔ Directeur commercial région Afrique',
        pros: 'Sauver des vies par la technologie sans être médecin, secteur à l’abri des crises économiques.',
        cons: 'Astreintes d’urgence possibles pour rétablir des appareils critiques de survie.'
      },
      relatedJobSlugs: ['analyste-cybersecurite', 'ingenieur-ia', 'medecin'],
      resources: [
        { type: 'video', title: 'Au cœur de la technologie hospitalière : le métier d’ingénieur biomédical', url: '#', source: 'SantéTech', duration: '14 min' }
      ],
      sources: ['Société Française de Génie Biomédical', 'OMS Santé & Technologies'],
      interests: ['soigner-aider', 'technologie-code', 'construire-fabriquer', 'resoudre-problemes']
    },

    // -----------------------------------------------------------------------
    // ENVIRONNEMENT & MÉTIERS VERTS
    // -----------------------------------------------------------------------
    {
      id: 'responsable-rse',
      slug: 'responsable-rse-developpement-durable',
      title: 'Responsable RSE & Transition Écologique',
      icon: '🌱',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=80',
      familyId: 'environnement-climat',
      familyName: 'Environnement, Climat & Métiers Verts',
      subdomain: 'RSE',
      shortDescription: 'Définit et pilote la stratégie éco-responsable d’une entreprise : réduction de l’empreinte carbone, gestion des déchets, équité sociale et achats durables.',
      longDescription: 'Face aux exigences climatiques et aux nouvelles normes internationales, le Responsable RSE (Responsabilité Sociétale des Entreprises) transforme les pratiques internes. Il calcule le bilan carbone de l’organisation, élimine les gaspillages, garantit des conditions de travail exemplaires chez les fournisseurs et valorise les actions positives auprès des clients et investisseurs.',
      level: 'Bac +5 (Master RSE / Développement Durable / École de Commerce)',
      salary: '450 000 - 1 500 000 FCFA / mois',
      workEnvironment: [
        '🌱 Travail en transversalité avec tous les services (achats, RH, usines, direction)',
        '📊 Mesure d’impacts environnementaux et audits sur le terrain',
        '📢 Communication interne et externe sur les engagements sociétaux'
      ],
      typicalDay: [
        { time: '09:00', title: 'Calcul du bilan carbone Scope 1, 2 et 3', desc: 'Collecte des factures énergétiques et des trajets des collaborateurs pour évaluer les émissions de CO2.' },
        { time: '11:00', title: 'Mise en place d’un tri sélectif et valorisation', desc: 'Négociation d’un partenariat avec une entreprise locale de recyclage du plastique.' },
        { time: '14:30', title: 'Audit d’un fournisseur agricole', desc: 'Vérification sur le terrain du non-recours au travail des enfants et de la traçabilité équitable des matières premières.' },
        { time: '16:30', title: 'Rédaction du rapport de durabilité', desc: 'Alignement du reporting annuel sur les standards internationaux (GRI, ISO 26000).' }
      ],
      skills: {
        technical: ['Normes ISO 14001 & ISO 26000', 'Méthodologie Bilan Carbone (GHG Protocol)', 'Économie circulaire & gestion des déchets', 'Critères ESG (Environnement, Social, Gouvernance)', 'Reporting extra-financier'],
        human: ['Pouvoir de conviction et enthousiasme communicatif', 'Diplomatie pour faire évoluer les mentalités', 'Sens du dialogue avec les ONG et riverains', 'Patience et vision long terme'],
        tools: ['Outils de calcul carbone', 'Logiciels de reporting ESG', 'Tableurs de modélisation d’impact']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Baccalauréat général', desc: 'Ouverture sur le monde contemporain et intérêt pour l’écologie.' },
          { step: 'Bac +3', title: 'Licence Sciences de l’Environnement ou Gestion', desc: 'Principes d’écologie scientifique et de management d’entreprise.' },
          { step: 'Bac +5', title: 'Master RSE & Développement Durable ou Mastère Spécialisé', desc: 'Stratégie bas-carbone, éthique des affaires et gouvernance durable.' }
        ],
        schools: [
          { name: 'Institut des Sciences de l’Environnement (ISE) — UCAD Dakar', country: 'Sénégal', scope: 'Sénégal' },
          { name: 'BEM Dakar — Mastère Développement Durable & RSE', country: 'Sénégal', scope: 'Sénégal' },
          { name: '2iE Ouagadougou — Spécialité Environnement', country: 'Burkina Faso', scope: 'Afrique' }
        ],
        certifications: ['Certifications Bilan Carbone® agréées', 'Auditeur certifié ISO 26000']
      },
      career: {
        sectors: ['Agroalimentaire & Grande distribution', 'Mines, Pétrole & BTP', 'Banques & Organismes de crédit responsable', 'Industries pharmaceutiques & cosmétiques'],
        employerTypes: ['Grandes entreprises et multinationales', 'Cabinets d’audit et conseil RSE', 'Institutions internationales'],
        evolution: 'Chargé de mission RSE ➔ Responsable RSE ➔ Directeur du Développement Durable & Affaires Publiques ➔ Membre du Comité Exécutif',
        pros: 'Être au cœur de la transition indispensable de notre siècle, donner un sens concret à son travail quotidien.',
        cons: 'Peut devoir affronter des réticences internes ou des accusations de "greenwashing" si les moyens alloués sont insuffisants.'
      },
      relatedJobSlugs: ['ingenieur-agronome', 'ingenieur-solaire', 'analyste-financier'],
      resources: [
        { type: 'video', title: 'Le rôle clé du responsable RSE dans l’entreprise africaine moderne', url: '#', source: 'Le Monde du Travail', duration: '10 min' }
      ],
      sources: ['Institut des Sciences de l’Environnement UCAD', 'Pacte Mondial des Nations Unies'],
      interests: ['nature-environnement', 'negocier-convaincre', 'soigner-aider']
    },

    // -----------------------------------------------------------------------
    // CULTURE, MÉDIAS & DESIGN
    // -----------------------------------------------------------------------
    {
      id: 'product-designer-ux-ui',
      slug: 'product-designer-ux-ui',
      title: 'Product Designer (UX/UI Designer)',
      icon: '🎨',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop&q=80',
      familyId: 'culture-medias',
      familyName: 'Culture, Médias, Communication & Industries Créatives',
      subdomain: 'UX/UI',
      shortDescription: 'Imagine des applications et sites web faciles et agréables à utiliser en observant les besoins réels des utilisateurs et en créant des interfaces élégantes.',
      longDescription: 'Le Product Designer résout des problèmes humains par le design visuel et interactif. Il conduit des entretiens avec les utilisateurs réels, conçoit des parcours fluides sans friction, dessine des prototypes interactifs sous Figma et crée un système de design (Design System) harmonieux pour guider les développeurs.',
      level: 'Bac +3 à Bac +5 (Design interactif / Multimédia)',
      salary: '450 000 - 1 400 000 FCFA / mois',
      workEnvironment: [
        '🎨 Environnement très créatif, visuel et collaboratif',
        '💻 Travail sur écran haute définition avec tablette graphique ou souris de précision',
        '🗣️ Ateliers de co-conception avec les utilisateurs et les ingénieurs'
      ],
      typicalDay: [
        { time: '09:00', title: 'Entretien utilisateur (User Research)', desc: 'Test d’ergonomie en visioconférence avec un lycéen pour observer comment il navigue dans une application.' },
        { time: '11:00', title: 'Wireframing & Parcours utilisateur', desc: 'Esquisse des écrans clés et de l’arborescence d’une nouvelle fonctionnalité sur FigJam.' },
        { time: '14:00', title: 'Création d’interface haute fidélité sur Figma', desc: 'Design des composants, typographies, micro-interactions et états de boutons.' },
        { time: '16:30', title: 'Transmission aux développeurs (Design Handoff)', desc: 'Explication des animations et des contraintes d’accessibilité aux équipes de dev front-end.' }
      ],
      skills: {
        technical: ['Recherche utilisateur (interviews, tests d’utilisabilité)', 'Architecture de l’information & wireframes', 'UI Design (typographie, grille, couleurs, responsive)', 'Design Systems & composants modulaires', 'Notions de code HTML/CSS'],
        human: ['Empathie profonde pour l’utilisateur', 'Capacité à accepter et intégrer la critique', 'Créativité visuelle', 'Sens du détail'],
        tools: ['Figma / FigJam', 'Miro', 'Notion', 'Adobe Creative Cloud (Illustrator, Photoshop)']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Baccalauréat toutes séries', desc: 'Sensibilité artistique, curiosité pour le numérique et l’humain.' },
          { step: 'Bac +3', title: 'Licence Métiers du Multimédia ou Design Numérique', desc: 'Bases de graphisme, sémiologie, typographie et ergonomie.' },
          { step: 'Bac +5', title: 'Master Design Interactif / Direction Artistique Digitale', desc: 'Stratégie produit, psychologie cognitive, design d’expérience globale.' }
        ],
        schools: [
          { name: 'Sup’Imax — Institut Supérieur des Arts et Métiers Numériques', country: 'Sénégal (Dakar)', scope: 'Sénégal' },
          { name: 'Institut Africain de Management (IAM) — Digital School', country: 'Sénégal', scope: 'Sénégal' },
          { name: 'École de Design Nantes Atlantique / Gobelins', country: 'France / International', scope: 'International' }
        ],
        certifications: ['Google UX Design Professional Certificate', 'Nielsen Norman Group UX Certification']
      },
      career: {
        sectors: ['Startups tech & applications mobiles', 'Agences de design et de communication', 'Grands groupes (Orange, banques)', 'Studios de jeux vidéo'],
        employerTypes: ['Équipes produit internes', 'Agences digitales', 'Freelance pour des clients internationaux'],
        evolution: 'UX/UI Designer ➔ Senior Product Designer ➔ Lead Designer ➔ Head of Design / VP Design',
        pros: 'Métier stimulant mêlant art, psychologie et technologie, forte demande sur le marché international en remote.',
        cons: 'Nécessite de savoir défendre ses choix esthétiques et fonctionnels face à des avis subjectifs multiples.'
      },
      relatedJobSlugs: ['dev-fullstack', 'growth-marketer', 'prompt-engineer-ai'],
      resources: [
        { type: 'video', title: 'Comment construire son premier portfolio UX/UI professionnel', url: '#', source: 'DesignAfrique', duration: '15 min' }
      ],
      sources: ['Nielsen Norman Group', 'Interaction Design Foundation'],
      interests: ['creer-designer', 'technologie-code', 'soigner-aider']
    },

    // -----------------------------------------------------------------------
    // MÉTIERS ÉMERGENTS & DU FUTUR
    // -----------------------------------------------------------------------
    {
      id: 'prompt-engineer-ai',
      slug: 'prompt-engineer-specialiste-ia-generative',
      title: 'Prompt Engineer & Spécialiste IA Générative',
      icon: '🌟',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80',
      familyId: 'metiers-emergents',
      familyName: 'Métiers Émergents & Métiers du Futur',
      subdomain: 'AI Integration',
      shortDescription: 'Maîtrise l’art de dialoguer avec les modèles d’IA générative (LLM) et conçoit des architectures logiques pour automatiser les tâches complexes des organisations.',
      longDescription: 'Né avec l’explosion des modèles de langage comme ChatGPT, Claude ou Llama, le Prompt Engineer & Intégrateur IA conçoit des instructions et des pipelines d’évaluation hyper-précis pour obtenir des réponses fiables, sans hallucinations, des systèmes d’IA. Il connecte les modèles d’IA aux bases de connaissances privées des entreprises (RAG - Retrieval Augmented Generation).',
      level: 'Bac +3 à Bac +5 (Informatique, Linguistique computationnelle ou Data)',
      salary: '600 000 - 2 000 000 FCFA / mois',
      workEnvironment: [
        '💻 Travail 100% sur ordinateur et interfaces d’API IA',
        '⚡ Travail en expérimentation rapide (essai, mesure d’erreur, amélioration)',
        '🌍 Métier ultra-flexible avec forte opportunité de télétravail mondial'
      ],
      typicalDay: [
        { time: '09:00', title: 'Analyse des taux d’hallucination', desc: 'Exécution d’une suite de 500 tests automatisés pour vérifier la précision des réponses juridiques générées par l’agent IA.' },
        { time: '11:00', title: 'Optimisation de prompt système complexe', desc: 'Raffinement des instructions d’un assistant d’orientation pour lui apprendre à adopter un ton chaleureux et concis.' },
        { time: '14:00', title: 'Architecture RAG (Retrieval-Augmented Generation)', desc: 'Indexation vectorielle de 200 documents de fiches métiers dans une base vectorielle Pinecone.' },
        { time: '16:30', title: 'Veille technique sur les nouveaux modèles', desc: 'Benchmark des capacités de raisonnement du dernier modèle open-source publié sur Hugging Face.' }
      ],
      skills: {
        technical: ['Maîtrise des LLMs et techniques avancées de prompting (Few-shot, Chain-of-Thought, ReAct)', 'Python (LangChain, LlamaIndex)', 'Bases de données vectorielles (Pinecone, Chroma, pgvector)', 'Évaluation de modèles d’IA et métriques de cohérence', 'Notions de cybersécurité appliquée à l’IA (Prompt Injection)'],
        human: ['Excellente clarté de rédaction et de logique sémantique', 'Patience et curiosité expérimentale', 'Esprit d’analyse critique', 'Adaptation ultrarapide'],
        tools: ['OpenAI / Anthropic APIs', 'LangChain / LlamaIndex', 'Hugging Face', 'Python', 'Vector DBs']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Baccalauréat toutes séries', desc: 'Capacités supérieures d’expression écrite et d’esprit logique.' },
          { step: 'Bac +3', title: 'Licence Informatique, Linguistique ou Sciences Cognitives', desc: 'Syntaxe, logique formelle, programmation Python.' },
          { step: 'Bac +5 (Évolutif)', title: 'Master IA / Génie Logiciel / Autoformation de pointe', desc: 'Architectures de transformers, fine-tuning et sécurité des modèles d’IA.' }
        ],
        schools: [
          { name: 'Formations universitaires en Informatique & IA (ESP, UCAD)', country: 'Sénégal', scope: 'Sénégal' },
          { name: 'AIMS Network', country: 'Afrique', scope: 'Afrique' },
          { name: 'Certifications DeepLearning.ai / OpenAI Guides', country: 'International', scope: 'International' }
        ],
        certifications: ['DeepLearning.AI Prompt Engineering Specialization', 'LangChain Certified Developer']
      },
      career: {
        sectors: ['Startups technologiques', 'Cabinets de conseil en transformation digitale', 'Banques, Médias & Édition de logiciels'],
        employerTypes: ['Entreprises internationales en quête d’automatisation', 'Agences IA innovantes', 'Consultant indépendant'],
        evolution: 'Prompt Engineer ➔ AI Integration Specialist ➔ AI Product Manager ➔ Head of Generative AI',
        pros: 'Métier d’avant-garde sans barrière rigide à l’entrée, salaires d’entrée très attractifs sur les marchés globaux.',
        cons: 'Métier jeune qui évolue très vite vers des compétences plus globales d’ingénierie logicielle IA.'
      },
      relatedJobSlugs: ['ingenieur-ia', 'dev-fullstack', 'data-scientist'],
      resources: [
        { type: 'video', title: 'Comment maîtriser le Prompt Engineering moderne de A à Z', url: '#', source: 'TechAvenir', duration: '20 min' }
      ],
      sources: ['OpenAI Research', 'Anthropic Prompt Guide'],
      interests: ['technologie-code', 'resoudre-problemes', 'creer-designer', 'explorer-decouvrir']
    },

    // -----------------------------------------------------------------------
    // DROIT & MANAGEMENT
    // -----------------------------------------------------------------------
    {
      id: 'juriste-entreprise',
      slug: 'juriste-entreprise-conformite',
      title: 'Juriste d’Entreprise & Responsable Conformité',
      icon: '⚖️',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80',
      familyId: 'droit-management',
      familyName: 'Droit, Administration, Management & Services Professionnels',
      subdomain: 'Droit',
      shortDescription: 'Sécurise juridiquement les contrats, protège les intérêts de l’entreprise et veille au strict respect des lois et de la protection des données personnelles.',
      longDescription: 'Le juriste d’entreprise est le bouclier juridique et le conseiller stratégique des dirigeants. Il rédige les partenariats commerciaux, analyse les risques légaux, protège la propriété intellectuelle (marques, brevets) et veille à la conformité avec les réglementations régionales (OHADA, protection des données personnelles CDP).',
      level: 'Bac +5 (Master en Droit des Affaires ou Droit Fiscal)',
      salary: '450 000 - 1 500 000 FCFA / mois',
      workEnvironment: [
        '⚖️ Bureau d’études juridiques et réunions de négociation',
        '📖 Lecture approfondie de textes de lois, jurisprudences et contrats',
        '🤝 Conseil direct auprès de la direction générale et des départements'
      ],
      typicalDay: [
        { time: '09:00', title: 'Revue d’un contrat de partenariat international', desc: 'Analyse des clauses de responsabilité et de juridiction compétente en cas de litige.' },
        { time: '11:00', title: 'Conseil aux équipes Ressources Humaines', desc: 'Validation de la conformité d’un projet d’accord d’entreprise avec le Code du travail.' },
        { time: '14:30', title: 'Gestion de conformité données personnelles', desc: 'Audit des consentements clients en accord avec la Commission des Données Personnelles (CDP).' },
        { time: '16:30', title: 'Veille réglementaire OHADA', desc: 'Synthèse des récents avis de la Cour Commune de Justice et d’Arbitrage.' }
      ],
      skills: {
        technical: ['Droit des affaires OHADA & droit des contrats', 'Droit du travail & droit fiscal', 'Conformité et protection des données (RGPD / Lois nationales)', 'Négociation contractuelle & résolution de conflits'],
        human: ['Rigueur intellectuelle et précision du vocabulaire', 'Sens de la diplomatie et éthique', 'Capacité de persuasion', 'Sens de la discrétion'],
        tools: ['Bases de données juridiques (LexisNexis, Juriafrica)', 'Logiciels de gestion de contrats', 'Suites bureautiques']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac L ou Baccalauréat général', desc: 'Aisance en expression écrite, argumentation et synthèse.' },
          { step: 'Bac +3', title: 'Licence en Droit Privé ou Droit des Affaires', desc: 'Droit civil, obligations, droit commercial, droit constitutionnel.' },
          { step: 'Bac +5', title: 'Master 2 Droit des Affaires, Fiscalité ou DJCE', desc: 'Contrats complexes, fusions-acquisitions, contentieux d’affaires.' }
        ],
        schools: [
          { name: 'Faculté des Sciences Juridiques et Politiques (FSJP) — UCAD Dakar', country: 'Sénégal', scope: 'Sénégal' },
          { name: 'Université Gaston Berger (UGB) — UFR Sciences Juridiques', country: 'Sénégal', scope: 'Sénégal' },
          { name: 'Université Alassane Ouattara / Université Félix Houphouët-Boigny', country: 'Côte d’Ivoire', scope: 'Afrique' }
        ],
        certifications: ['Certifications DPO (Délégué à la Protection des Données)', 'Compliance Officer Certifications']
      },
      career: {
        sectors: ['Télécoms & Numérique', 'Banques & Assurances', 'Énergie, Mines & BTP', 'Multinationales de grande consommation', 'Cabinets d’avocats'],
        employerTypes: ['Grandes entreprises privées', 'Institutions publiques & agences de régulation'],
        evolution: 'Juriste Junior ➔ Juriste Senior ➔ Secrétaire Général / Directeur Juridique',
        pros: 'Position influente et respectée dans l’entreprise, proximité directe avec la direction générale.',
        cons: 'Responsabilité lourde en cas de litige mal anticipé ou de pénalité financière.'
      },
      relatedJobSlugs: ['analyste-financier', 'responsable-rse', 'analyste-cybersecurite'],
      resources: [
        { type: 'video', title: 'Le quotidien d’un juriste d’affaires en Afrique de l’Ouest', url: '#', source: 'DroitPro', duration: '12 min' }
      ],
      sources: ['Secrétariat Permanent de l’OHADA', 'Commission des Données Personnelles du Sénégal (CDP)'],
      interests: ['proteger-defendre', 'negocier-convaincre', 'resoudre-problemes']
    }
  ];

  // =========================================================================
  // 4. SERVICE DATA & MÉTHODES D'ACCÈS DU MODULE
  // =========================================================================
  const OrientationData = {
    // Récupérer toutes les 21 familles triées par ordre
    getFamilies: function () {
      return [...FAMILIES].sort((a, b) => a.order - b.order);
    },

    // Récupérer une famille par son ID ou son Slug
    getFamily: function (idOrSlug) {
      if (!idOrSlug) return null;
      return FAMILIES.find(f => f.id === idOrSlug || f.slug === idOrSlug) || null;
    },

    // Récupérer les centres d'intérêt / affinités
    getAffinities: function () {
      return [...INTEREST_AFFINITIES];
    },

    // Récupérer tous les métiers locaux
    getStaticJobs: function () {
      return [...JOBS];
    },

    // Cache pour les jobs combinés
    _allJobsCache: null,

    // Chargement hybride : combine la base statique enrichie avec le catalogue numérique et les métiers publiés du backend
    getAllJobs: async function () {
      if (this._allJobsCache) return this._allJobsCache;

      let combined = [...JOBS];

      // 1. Intégration du catalogue numérique enrichi (OrientationDigitalData)
      const digitalData = (typeof window !== 'undefined' && window.OrientationDigitalData) 
        ? window.OrientationDigitalData 
        : (typeof global !== 'undefined' && global.OrientationDigitalData ? global.OrientationDigitalData : null);

      if (digitalData && typeof digitalData.getJobs === 'function') {
        const digitalJobs = digitalData.getJobs();
        digitalJobs.forEach(dJob => {
          const existingIdx = combined.findIndex(j => j.slug === dJob.slug || j.id === dJob.id);
          if (existingIdx >= 0) {
            // Enrichissement préservant les données existantes
            combined[existingIdx] = Object.assign({}, dJob, combined[existingIdx], {
              aliases: [...new Set([...(dJob.aliases || []), ...(combined[existingIdx].aliases || [])])],
              specializations: [...new Set([...(dJob.specializations || []), ...(combined[existingIdx].specializations || [])])],
              domain: dJob.domain || combined[existingIdx].domain,
              gettingStarted: dJob.gettingStarted || combined[existingIdx].gettingStarted,
              aiImpact: dJob.aiImpact || combined[existingIdx].aiImpact,
              africaContext: dJob.africaContext || combined[existingIdx].africaContext,
              sourceESD: dJob.sourceESD,
              isEmerging: dJob.isEmerging
            });
          } else {
            combined.push(dJob);
          }
        });
      }

      // 2. Récupérer les métiers dynamiques du backend sans impacter l'expérience si l'API est indisponible
      try {
        if (typeof window !== 'undefined' && window.Api && window.Api.jobs && typeof window.Api.jobs.getAll === 'function') {
          const res = await window.Api.jobs.getAll();
          const apiJobs = res && res.data ? res.data : [];

          if (Array.isArray(apiJobs) && apiJobs.length > 0) {
            apiJobs.forEach(apiJob => {
              const exists = combined.some(j => j.id === apiJob.id || j.title.toLowerCase() === (apiJob.title || '').toLowerCase());
              if (!exists) {
                combined.push({
                  id: apiJob.id || 'job-' + Math.random().toString(36).substr(2, 9),
                  slug: (apiJob.title || 'metier').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                  title: apiJob.title,
                  icon: apiJob.icon || '💼',
                  image: apiJob.image || 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80',
                  familyId: this._mapCategoryToFamily(apiJob.category),
                  familyName: apiJob.category || 'Métier du Monde du Travail',
                  subdomain: apiJob.domain || 'Spécialisation professionnelle',
                  shortDescription: apiJob.description || '',
                  longDescription: apiJob.content || apiJob.description || '',
                  level: 'Niveau d’études adapté',
                  salary: apiJob.salary || 'Rémunération selon profil',
                  workEnvironment: ['💼 Environnement professionnel stimulant', '👥 Travail d’équipe'],
                  typicalDay: [],
                  skills: {
                    technical: Array.isArray(apiJob.skills) ? apiJob.skills : (apiJob.skills ? String(apiJob.skills).split(',').map(s => s.trim()) : []),
                    human: ['Sens relationnel', 'Rigueur', 'Adaptabilité'],
                    tools: []
                  },
                  studies: {
                    pathway: [{ step: 'Formation', title: apiJob.studies || 'Cursus recommandé', desc: '' }],
                    schools: [],
                    certifications: []
                  },
                  career: {
                    sectors: [apiJob.domain || 'Secteur d’activité'],
                    employerTypes: ['Entreprises partenaires', 'Institutions'],
                    evolution: 'Évolution vers des postes à responsabilités accrues.',
                    pros: apiJob.advantages || 'Secteur d’avenir porteur.',
                    cons: apiJob.disadvantages || 'Exige rigueur et implication.'
                  },
                  relatedJobSlugs: [],
                  resources: apiJob.videoUrl ? [{ type: 'video', title: 'Découvrir en vidéo', url: apiJob.videoUrl, source: 'Vidéo métier' }] : [],
                  sources: ['Le Monde du Travail'],
                  interests: []
                });
              }
            });
          }
        }
      } catch (err) {
        console.warn('Backend jobs fetch skipped or unreachable, relying on rich static dataset:', err);
      }

      this._allJobsCache = combined;
      return combined;
    },

    // Récupérer les métiers d'une grande famille
    getJobsByFamily: async function (familyId) {
      const all = await this.getAllJobs();
      if (familyId === 'numerique-ia') {
        // Pour la grande famille numérique, inclure l'ensemble de la cartographie numérique
        return all.filter(j => j.familyId === 'numerique-ia' || (j.domain && j.domain.length > 0));
      }
      return all.filter(j => j.familyId === familyId);
    },

    // Récupérer les métiers d'un sous-domaine au sein d'une famille
    getJobsBySubdomain: async function (familyId, subdomain, domain = null) {
      const all = await this.getAllJobs();
      return all.filter(j => {
        const matchesFamily = (familyId === 'numerique-ia')
          ? (j.familyId === 'numerique-ia' || (j.domain && j.domain.length > 0))
          : (j.familyId === familyId);

        if (!matchesFamily) return false;

        // Filtrage optionnel par domaine numérique (par ID ou par Nom)
        if (domain && domain !== 'all') {
          const digitalData = (typeof window !== 'undefined' && window.OrientationDigitalData)
            ? window.OrientationDigitalData
            : (typeof global !== 'undefined' && global.OrientationDigitalData
              ? global.OrientationDigitalData
              : (typeof OrientationDigitalData !== 'undefined' ? OrientationDigitalData : null));
          const digitalDomains = (digitalData && digitalData.DOMAINS) ? digitalData.DOMAINS : [];
          const domObj = digitalDomains.find(d => d.id.toLowerCase() === domain.toLowerCase() || d.name.toLowerCase() === domain.toLowerCase()) || null;
          const targetName = domObj ? domObj.name.toLowerCase() : domain.toLowerCase();
          const targetId = domObj ? domObj.id.toLowerCase() : domain.toLowerCase();

          const jobDom = (j.domain || '').toLowerCase();
          const jobDomId = (j.domainId || '').toLowerCase();
          const matchesDom = jobDom === targetName || jobDom === targetId || jobDomId === targetId || (domObj && domObj.subdomains && domObj.subdomains.some(s => s.toLowerCase() === (j.subdomain || '').toLowerCase()));
          if (!matchesDom) return false;
        }

        // Filtrage par sous-domaine
        if (!subdomain || subdomain === 'all') return true;
        return (j.subdomain || '').toLowerCase() === subdomain.toLowerCase();
      });
    },

    // Récupérer un métier par son slug ou son id
    getJobBySlug: async function (slugOrId) {
      if (!slugOrId) return null;
      const all = await this.getAllJobs();
      return all.find(j => j.slug === slugOrId || j.id === slugOrId) || null;
    },

    // Récupérer les métiers proches pour une fiche métier
    getRelatedJobs: async function (currentJob) {
      if (!currentJob) return [];
      const all = await this.getAllJobs();
      
      // 1. Chercher par slugs explicites s'ils existent
      if (currentJob.relatedJobSlugs && currentJob.relatedJobSlugs.length > 0) {
        const found = all.filter(j => currentJob.relatedJobSlugs.includes(j.slug) || currentJob.relatedJobSlugs.includes(j.id));
        if (found.length > 0) return found;
      }

      // 2. Sinon chercher dans la même famille ou le même sous-domaine
      return all.filter(j => j.id !== currentJob.id && (j.familyId === currentJob.familyId || j.domain === currentJob.domain)).slice(0, 3);
    },

    // Recommandations croisées (« Parcours Découverte » / Passerelles interdisciplinaires)
    getCrossRecommendations: async function (currentJob) {
      if (!currentJob) return [];
      const all = await this.getAllJobs();
      
      // Recherche de métiers hors de la famille d'origine pour élargir les perspectives d'orientation
      const otherJobs = all.filter(j => j.id !== currentJob.id && j.familyId !== currentJob.familyId);
      
      // Score de proximité par centres d'intérêt ou compétences transversales
      const scored = otherJobs.map(j => {
        let score = 0;
        if (Array.isArray(currentJob.interests) && Array.isArray(j.interests)) {
          const common = currentJob.interests.filter(int => j.interests.includes(int));
          score += common.length * 3;
        }
        if (currentJob.level && j.level && currentJob.level === j.level) {
          score += 1;
        }
        return { job: j, score };
      });

      scored.sort((a, b) => b.score - a.score);
      const results = scored.filter(s => s.score > 0).slice(0, 3).map(s => s.job);
      if (results.length > 0) return results;

      // Secours : 3 métiers populaires diversifiés
      return otherJobs.slice(0, 3);
    },

    // Recherche universelle en temps réel (métier, alias, famille, domaine, sous-domaine, compétence, outil, formation, école)
    searchJobs: async function (query) {
      if (!query || typeof query !== 'string' || !query.trim()) {
        return [];
      }
      const q = query.trim().toLowerCase();
      const all = await this.getAllJobs();

      return all.filter(job => {
        if (job.title && job.title.toLowerCase().includes(q)) return true;
        if (job.aliases && Array.isArray(job.aliases) && job.aliases.some(a => a.toLowerCase().includes(q))) return true;
        if (job.domain && job.domain.toLowerCase().includes(q)) return true;
        if (job.familyName && job.familyName.toLowerCase().includes(q)) return true;
        if (job.subdomain && job.subdomain.toLowerCase().includes(q)) return true;
        if (job.shortDescription && job.shortDescription.toLowerCase().includes(q)) return true;
        if (job.longDescription && job.longDescription.toLowerCase().includes(q)) return true;
        if (job.simpleDefinition && job.simpleDefinition.toLowerCase().includes(q)) return true;

        // Spécialisations
        if (job.specializations && Array.isArray(job.specializations) && job.specializations.some(s => s.toLowerCase().includes(q))) return true;

        // Compétences & Outils
        if (job.skills) {
          if (Array.isArray(job.skills.technical) && job.skills.technical.some(s => s.toLowerCase().includes(q))) return true;
          if (Array.isArray(job.skills.tools) && job.skills.tools.some(s => s.toLowerCase().includes(q))) return true;
          if (Array.isArray(job.skills.human) && job.skills.human.some(s => s.toLowerCase().includes(q))) return true;
          if (Array.isArray(job.skills.analytical) && job.skills.analytical.some(s => s.toLowerCase().includes(q))) return true;
          if (Array.isArray(job.skills.creative) && job.skills.creative.some(s => s.toLowerCase().includes(q))) return true;
        }

        // Formations & Écoles
        if (job.studies) {
          if (Array.isArray(job.studies.schools) && job.studies.schools.some(sc => sc.name.toLowerCase().includes(q))) return true;
          if (Array.isArray(job.studies.certifications) && job.studies.certifications.some(c => c.toLowerCase().includes(q))) return true;
        }

        // Secteurs & Employeurs
        if (job.career) {
          if (Array.isArray(job.career.sectors) && job.career.sectors.some(sec => sec.toLowerCase().includes(q))) return true;
          if (Array.isArray(job.career.employerTypes) && job.career.employerTypes.some(emp => emp.toLowerCase().includes(q))) return true;
        }

        return false;
      });
    },

    // Moteur d'affinités : trouver les familles et métiers correspondant à une sélection d'affinités
    getExplorationByAffinities: async function (selectedAffinityIds) {
      if (!selectedAffinityIds || selectedAffinityIds.length === 0) {
        return { matchedFamilies: [], matchedJobs: [] };
      }

      const affinities = INTEREST_AFFINITIES.filter(a => selectedAffinityIds.includes(a.id));
      const targetFamilyIds = new Set();
      affinities.forEach(a => {
        (a.familyIds || []).forEach(fid => targetFamilyIds.add(fid));
      });

      const matchedFamilies = FAMILIES.filter(f => targetFamilyIds.has(f.id));
      const allJobs = await this.getAllJobs();
      
      const matchedJobs = allJobs.filter(job => {
        // Métier associé directement aux tags d'affinités
        const hasDirectAffinity = Array.isArray(job.interests) && job.interests.some(int => selectedAffinityIds.includes(int));
        // Ou métier appartenant à une des familles recommandées
        const inFamily = targetFamilyIds.has(job.familyId);
        return hasDirectAffinity || inFamily;
      });

      return {
        matchedFamilies,
        matchedJobs
      };
    },

    getDigitalDomains: function () {
      const digitalData = (typeof window !== 'undefined' && window.OrientationDigitalData)
        ? window.OrientationDigitalData
        : (typeof global !== 'undefined' && global.OrientationDigitalData
          ? global.OrientationDigitalData
          : (typeof OrientationDigitalData !== 'undefined' ? OrientationDigitalData : null));
      if (digitalData && digitalData.DOMAINS) {
        return digitalData.DOMAINS;
      }
      return [];
    },

    // Aide pour mapper les catégories d'anciennes versions vers les nouvelles 21 familles
    _mapCategoryToFamily: function (category) {
      if (!category) return 'numerique-ia';
      const c = category.toUpperCase();
      switch (c) {
        case 'TECH': return 'numerique-ia';
        case 'SECURITE': return 'cybersecurite-reseaux';
        case 'FINANCE': return 'finance-fintech';
        case 'ENERGIE': return 'energie-renouvelable';
        case 'SANTE': return 'sante-biomedical';
        case 'EDUCATION': return 'education-formation';
        default: return 'droit-management';
      }
    }
  };

  // Exposer sur l'objet global window et module.exports
  if (typeof window !== 'undefined') {
    window.OrientationData = OrientationData;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = OrientationData;
  }
})();
