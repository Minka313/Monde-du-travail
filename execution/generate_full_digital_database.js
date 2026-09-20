/**
 * COMPILATEUR FINAL DE LA CARTOGRAPHIE NUMÉRIQUE
 * Le Monde du Travail — 13 Domaines d'Excellence, 85+ Métiers & Fiches Pédagogiques
 */

const fs = require('fs');
const path = require('path');
const { DIGITAL_DOMAINS, makeJob } = require('./generate_digital_catalog');

console.log('--- Compilation exhaustive du catalogue numérique ---');

// Récupération du premier lot de jobs
const baseJobsModule = require('./build_all_digital_jobs.js');

// Création du lot complémentaire de métiers
const EXTRA_JOBS = [
  // --- ESD DOMAINE 1 : DEV WEB & LOGICIEL ---
  makeJob({
    id: 'dev-app-web',
    slug: 'developpeur-dapplications-web',
    title: 'Développeur d’Applications Web',
    aliases: ['Web App Developer', 'Ingénieur Applications Web'],
    icon: '💻',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80',
    familyId: 'numerique-ia',
    familyName: 'Numérique, Informatique & IA',
    domain: 'Informatique & Développement',
    subdomain: 'Développement web',
    sourceESD: false,
    level: 'Bac +3 à Bac +5',
    salary: '450 000 - 1 350 000 FCFA / mois (Sénégal) • ~38k€ - 58k€ (France/Europe)',
    simpleDefinition: 'Il conçoit des logiciels complexes qui fonctionnent directement à l’intérieur d’un navigateur internet sans avoir besoin d’être installés sur l’ordinateur.',
    shortDescription: 'Développe des plateformes SaaS et applications web interactives, rapides et sécurisées pour les entreprises et le grand public.',
    skills: {
      technical: ['TypeScript / JavaScript', 'React / Next.js', 'APIs RESTful & WebSockets', 'Gestion d’état complexe', 'Bases de données SQL'],
      analytical: ['Résolution des problèmes de synchronisation en temps réel'],
      creative: ['Interfaces interactives et dynamiques'],
      human: ['Rigueur et esprit d’équipe'],
      tools: ['VS Code', 'Git', 'Postman', 'Supabase', 'Vercel']
    },
    relatedJobSlugs: ['developpeur-fullstack', 'developpeur-frontend', 'architecte-web'],
    interests: ['technologie-code', 'resoudre-problemes']
  }),

  // --- ESD DOMAINE 2 : IA ÉMERGENTE ---
  makeJob({
    id: 'ai-researcher',
    slug: 'ai-researcher',
    title: 'Chercheur en Intelligence Artificielle (AI Researcher)',
    aliases: ['AI Scientist', 'Chercheur Machine Learning', 'Docteur en IA'],
    icon: '🔬',
    image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=800&auto=format&fit=crop&q=80',
    familyId: 'numerique-ia',
    familyName: 'Numérique, Informatique & IA',
    domain: 'Intelligence Artificielle & Machine Learning',
    subdomain: 'Deep Learning',
    sourceESD: false,
    isEmerging: true,
    level: 'Bac +8 (Doctorat / Ph.D en Informatique ou Mathématiques)',
    salary: '900 000 - 3 000 000 FCFA / mois (Sénégal) • ~65k€ - 120k€ (France/Europe)',
    simpleDefinition: 'C’est le scientifique qui invente les nouveaux algorithmes d’intelligence artificielle de demain, en écrivant des théories mathématiques et en publiant des articles de recherche.',
    shortDescription: 'Explore les frontières scientifiques de l’apprentissage automatique et conçoit les architectures de réseaux neuronaux du futur.',
    skills: {
      technical: ['Mathématiques pures et appliquées', 'PyTorch / JAX', 'Recherche fondamentale en Deep Learning', 'Rédaction d’articles scientifiques (NeurIPS, ICML)', 'Calcul haute performance (HPC / GPU clusters)'],
      analytical: ['Capacité d’abstraction scientifique hors pair'],
      creative: ['Invention de nouvelles approches d’apprentissage'],
      human: ['Patience, persévérance et rigueur scientifique'],
      tools: ['PyTorch', 'Jupyter', 'Linux / SLURM', 'LaTeX', 'ArXiv']
    },
    relatedJobSlugs: ['ingenieur-ia', 'machine-learning-engineer', 'llm-engineer'],
    interests: ['recherche-innovation', 'technologie-code', 'resoudre-problemes']
  }),

  makeJob({
    id: 'llm-engineer',
    slug: 'llm-engineer',
    title: 'LLM Engineer (Large Language Model Engineer)',
    aliases: ['Ingénieur Modèles de Langage', 'Spécialiste LLM', 'Fondation Model Engineer'],
    icon: '📚',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80',
    familyId: 'numerique-ia',
    familyName: 'Numérique, Informatique & IA',
    domain: 'Intelligence Artificielle & Machine Learning',
    subdomain: 'IA Générative & LLM',
    sourceESD: false,
    isEmerging: true,
    level: 'Bac +5 à Bac +8',
    salary: '800 000 - 2 500 000 FCFA / mois (Sénégal) • ~60k€ - 110k€ (France/Europe)',
    simpleDefinition: 'Il est spécialisé dans les gigantesques modèles d’intelligence artificielle capables de comprendre et de parler les langues humaines pour les adapter aux besoins spécifiques des entreprises.',
    shortDescription: 'Adapte, affine (fine-tuning) et déploie des modèles de langage avancés pour traiter le texte, la voix et les documents à grande échelle.',
    skills: {
      technical: ['Architecture Transformer', 'Techniques de fine-tuning (LoRA, QLoRA)', 'Inférence optimisée (vLLM, Ollama)', 'RAG avancé & Vector Databases', 'Python & PyTorch'],
      analytical: ['Évaluation objective de la qualité linguistique des réponses'],
      creative: ['Adaptation de modèles aux langues locales (Wolof, Pulaar, Sérère)'],
      human: ['Veille permanente face à l’évolution hebdomadaire des modèles'],
      tools: ['Hugging Face', 'vLLM', 'Ollama', 'LangChain', 'Python']
    },
    relatedJobSlugs: ['generative-ai-engineer', 'prompt-engineer', 'ai-engineer'],
    interests: ['technologie-code', 'recherche-innovation']
  }),

  makeJob({
    id: 'generative-ai-engineer',
    slug: 'generative-ai-engineer',
    title: 'Generative AI Engineer (Ingénieur en IA Générative)',
    aliases: ['Ingénieur GenAI', 'Spécialiste IA Générative Multimodale'],
    icon: '✨',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    familyId: 'numerique-ia',
    familyName: 'Numérique, Informatique & IA',
    domain: 'Intelligence Artificielle & Machine Learning',
    subdomain: 'IA Générative & LLM',
    sourceESD: false,
    isEmerging: true,
    level: 'Bac +5',
    salary: '750 000 - 2 200 000 FCFA / mois (Sénégal) • ~55k€ - 95k€ (France/Europe)',
    simpleDefinition: 'Il crée des outils capables de générer automatiquement des images, des voix, du texte ou des vidéos à partir de simples instructions écrites.',
    shortDescription: 'Construit des solutions logicielles exploitant la génération automatique de texte, d’images, de code et d’audio.',
    skills: {
      technical: ['Modèles multimodaux (Vision-Language, Audio, Image)', 'Diffusion models (Stable Diffusion) & LLMs', 'Orchestration d’agents (AutoGen, CrewAI)', 'Intégration d’APIs d’IA générative'],
      analytical: ['Mesure de l’utilité et de la pertinence des créations synthétiques'],
      creative: ['Combinaison inédite de textes, sons et visuels'],
      human: ['Sensibilité aux questions de droits d’auteur et d’éthique'],
      tools: ['ComfyUI', 'Hugging Face', 'Python', 'Docker', 'CrewAI']
    },
    relatedJobSlugs: ['prompt-engineer', 'llm-engineer', 'ai-engineer'],
    interests: ['technologie-code', 'creer-designer']
  }),

  // --- ESD DOMAINE 3 : DATA & ANALYTICS COMPLÉMENTAIRES ---
  makeJob({
    id: 'bi-analyst',
    slug: 'bi-analyst',
    title: 'BI Analyst (Business Intelligence Analyst)',
    aliases: ['Consultant Décisionnel', 'Analyste BI', 'Consultant Business Intelligence'],
    icon: '📊',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
    familyId: 'data-decision',
    familyName: 'Data, Statistiques & Décision',
    domain: 'Data & Analytics',
    subdomain: 'Business Intelligence',
    sourceESD: false,
    level: 'Bac +3 à Bac +5',
    salary: '450 000 - 1 350 000 FCFA / mois (Sénégal) • ~38k€ - 58k€ (France/Europe)',
    simpleDefinition: 'Il conçoit les tableaux de bord et indicateurs visuels que les directeurs consultent chaque matin pour savoir si l’entreprise va bien.',
    shortDescription: 'Modélise les données décisionnelles et développe des rapports automatisés pour guider le pilotage de l’entreprise.',
    skills: {
      technical: ['Power BI, Tableau ou Qlik', 'Modélisation en étoile et en flocon', 'Langages DAX et SQL', 'Processus ETL simples'],
      analytical: ['Compréhension des indicateurs de performance clés (KPI)'],
      creative: ['Mise en page ergonomique des tableaux de bord'],
      human: ['Pédagogie et sens du dialogue métier'],
      tools: ['Power BI', 'SQL Server', 'Excel avancé', 'DAX Studio']
    },
    relatedJobSlugs: ['data-analyst', 'business-analyst', 'data-engineer'],
    interests: ['analyser-chiffres', 'gestion-projet']
  }),

  makeJob({
    id: 'analytics-engineer',
    slug: 'analytics-engineer',
    title: 'Analytics Engineer',
    aliases: ['Ingénieur Analytics', 'Analytics Developer', 'Data Transformation Engineer'],
    icon: '📐',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    familyId: 'data-decision',
    familyName: 'Data, Statistiques & Décision',
    domain: 'Data & Analytics',
    subdomain: 'Data Engineering',
    sourceESD: false,
    level: 'Bac +3 à Bac +5',
    salary: '550 000 - 1 600 000 FCFA / mois (Sénégal) • ~45k€ - 68k€ (France/Europe)',
    simpleDefinition: 'À mi-chemin entre le Data Engineer et le Data Analyst, il nettoie et organise les données dans l’entrepôt pour que tout le monde puisse s’en servir sans se tromper.',
    shortDescription: 'Applique les bonnes pratiques du génie logiciel (versioning, tests, CI/CD) à la transformation des données métier.',
    skills: {
      technical: ['dbt (data build tool)', 'SQL moderne avancé', 'Data Warehouses Cloud (Snowflake, BigQuery)', 'Git et tests de données automatisés'],
      analytical: ['Normalisation et gouvernance des définitions métier'],
      creative: ['Simplification des schémas de données'],
      human: ['Patience et rigueur documentaire'],
      tools: ['dbt', 'BigQuery / Snowflake', 'Git', 'Airflow']
    },
    relatedJobSlugs: ['data-engineer', 'data-analyst', 'data-architect'],
    interests: ['analyser-chiffres', 'technologie-code']
  }),

  makeJob({
    id: 'data-architect',
    slug: 'data-architect',
    title: 'Architecte Data (Data Architect)',
    aliases: ['Architecte des Données', 'Lead Data Architect'],
    icon: '🏛️',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80',
    familyId: 'data-decision',
    familyName: 'Data, Statistiques & Décision',
    domain: 'Data & Analytics',
    subdomain: 'Data Architecture & Big Data',
    sourceESD: false,
    level: 'Bac +5 + Expérience',
    salary: '900 000 - 2 500 000 FCFA / mois (Sénégal) • ~65k€ - 95k€ (France/Europe)',
    simpleDefinition: 'Il conçoit le plan d’urbanisation de toutes les données de l’entreprise pour qu’elles soient stockées en sécurité, faciles d’accès et conformes aux lois.',
    shortDescription: 'Définit la vision, les modèles et les standards d’infrastructure de données à l’échelle de l’organisation.',
    skills: {
      technical: ['Architecture Data Lakehouse & Data Mesh', 'Gouvernance et catalogage des données', 'Conformité légale (RGPD, lois locales sur les données)', 'Haute scalabilité et sécurité des données'],
      analytical: ['Vision globale des flux d’information d’un grand groupe'],
      creative: ['Harmonisation de systèmes informatiques hétérogènes'],
      human: ['Capacité à fédérer différentes directions'],
      tools: ['Snowflake / Databricks', 'Data Catalog (Collibra, Amundsen)', 'Cloud AWS / GCP', 'Draw.io']
    },
    relatedJobSlugs: ['data-engineer', 'cloud-architect', 'solutions-architect'],
    interests: ['resoudre-problemes', 'analyser-chiffres']
  }),

  makeJob({
    id: 'big-data-engineer',
    slug: 'big-data-engineer',
    title: 'Big Data Engineer',
    aliases: ['Ingénieur Mégadonnées', 'Hadoop / Spark Specialist'],
    icon: '🐘',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80',
    familyId: 'data-decision',
    familyName: 'Data, Statistiques & Décision',
    domain: 'Data & Analytics',
    subdomain: 'Data Architecture & Big Data',
    sourceESD: false,
    level: 'Bac +5 (Ingénieur)',
    salary: '650 000 - 2 000 000 FCFA / mois (Sénégal) • ~50k€ - 80k€ (France/Europe)',
    simpleDefinition: 'Il conçoit les systèmes capables de traiter des milliards de données par seconde, comme celles générées par les réseaux téléphoniques ou les cartes bancaires.',
    shortDescription: 'Développe des solutions de traitement massif et distribué de données volumineuses et véloces.',
    skills: {
      technical: ['Calcul distribué (Apache Spark, Hadoop)', 'Streaming de données (Kafka, Flink)', 'Langages Scala, Python, Java', 'Bases NoSQL distribuées (Cassandra, HBase)'],
      analytical: ['Résolution des contraintes de latence et de partitionnement'],
      creative: ['Optimisation extrême des calculs en cluster'],
      human: ['Rigueur d’ingénieur'],
      tools: ['Apache Spark', 'Kafka', 'Databricks', 'Docker', 'Linux']
    },
    relatedJobSlugs: ['data-engineer', 'data-architect', 'cloud-engineer'],
    interests: ['technologie-code', 'resoudre-problemes']
  }),

  makeJob({
    id: 'social-media-analyst',
    slug: 'social-media-analyst',
    title: 'Social Media Analyst',
    aliases: ['Analyste des Réseaux Sociaux', 'Social Data Analyst'],
    icon: '📈',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80',
    familyId: 'data-decision',
    familyName: 'Data, Statistiques & Décision',
    domain: 'Data & Analytics',
    subdomain: 'Web & Social Media Analytics',
    sourceESD: true,
    level: 'Bac +3 à Bac +5',
    salary: '400 000 - 1 100 000 FCFA / mois (Sénégal) • ~35k€ - 50k€ (France/Europe)',
    simpleDefinition: 'Il mesure la popularité et les réactions des internautes sur les réseaux sociaux pour dire à l’entreprise ce que les gens pensent vraiment d’elle.',
    shortDescription: 'Analyse l’engagement, les tendances et le sentiment des conversations sur les réseaux sociaux pour orienter la communication.',
    skills: {
      technical: ['Social Listening et analyse de sentiment', 'Métriques d’engagement social', 'Outils de veille de marque (Brandwatch, Talkwalker)', 'Tableaux de bord d’impact social'],
      analytical: ['Détection des signaux faibles et des bad buzz'],
      creative: ['Recommandations éditoriales basées sur les données'],
      human: ['Sensibilité aux tendances culturelles'],
      tools: ['Talkwalker', 'Sprout Social', 'Excel', 'Canva', 'Looker Studio']
    },
    relatedJobSlugs: ['social-media-manager', 'web-analyst', 'charge-de-marketing-digital'],
    interests: ['analyser-chiffres', 'commerce-marketing']
  }),

  makeJob({
    id: 'consultant-data-marketing',
    slug: 'consultant-data-marketing',
    title: 'Consultant Data Marketing',
    aliases: ['Marketing Data Consultant', 'Data-Driven Marketer'],
    icon: '🎯',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    familyId: 'commerce-marketing',
    familyName: 'Commerce, Vente, Marketing & E-Commerce',
    domain: 'Data & Analytics',
    subdomain: 'Web & Social Media Analytics',
    sourceESD: true,
    level: 'Bac +5',
    salary: '500 000 - 1 500 000 FCFA / mois (Sénégal) • ~42k€ - 65k€ (France/Europe)',
    simpleDefinition: 'Il aide les services marketing à utiliser intelligemment les données pour envoyer la bonne publicité, au bon client, au bon moment.',
    shortDescription: 'Allie science des données et marketing stratégique pour segmenter les clients et personnaliser les campagnes à fort rendement.',
    skills: {
      technical: ['Customer Data Platforms (CDP)', 'Segmentation client (RFM, clustering)', 'Marketing automation piloté par la donnée', 'Attribution marketing multi-touch'],
      analytical: ['Mesure fine du ROI marketing'],
      creative: ['Scénarios de personnalisation innovants'],
      human: ['Pédagogie et esprit de conseil'],
      tools: ['Segment', 'HubSpot', 'BigQuery', 'Tableau', 'Google Ads']
    },
    relatedJobSlugs: ['data-analyst', 'growth-hacker', 'web-analyst'],
    interests: ['commerce-marketing', 'analyser-chiffres']
  }),

  // --- ESD DOMAINE 4 : CYBERSÉCURITÉ COMPLÉMENTAIRE ---
  makeJob({
    id: 'incident-responder',
    slug: 'incident-responder',
    title: 'Incident Responder (Analyste Réponse à Incident)',
    aliases: ['Spécialiste CSIRT / CERT', 'Pompier de la Cybersécurité', 'Incident Handler'],
    icon: '🚒',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80',
    familyId: 'cybersecurite-reseaux',
    familyName: 'Cybersécurité & Réseaux',
    domain: 'Cybersécurité & Résilience',
    subdomain: 'SOC & Détection d’incidents',
    sourceESD: false,
    level: 'Bac +5 (Ingénieur Cybersécurité)',
    salary: '700 000 - 2 200 000 FCFA / mois (Sénégal) • ~50k€ - 85k€ (France/Europe)',
    simpleDefinition: 'C’est le « pompier » qui intervient en urgence lorsqu’une entreprise est en train de se faire pirater, pour chasser les attaquants et sauver les serveurs.',
    shortDescription: 'Intervient en situation de crise pour endiguer les attaques informatiques, éradiquer les malwares et restaurer les activités.',
    skills: {
      technical: ['Forensics (analyse légale de mémoire et disques)', 'Isolation de réseaux infectés', 'Analyse statique et dynamique de malwares', 'Gestion de crise cyber'],
      analytical: ['Sang-froid et reconstitution de la chronologie de l’attaque'],
      creative: ['Tactiques rapides de contournement pour sauver les données'],
      human: ['Résistance exemplaire au stress et leadership'],
      tools: ['Volatility', 'Autopsy', 'Wireshark', 'Velociraptor', 'YARA']
    },
    relatedJobSlugs: ['analyste-cybersecurite', 'threat-hunter', 'security-engineer'],
    interests: ['securite-defense', 'resoudre-problemes']
  }),

  makeJob({
    id: 'threat-hunter',
    slug: 'threat-hunter',
    title: 'Threat Hunter (Chasseur de Cybermenaces)',
    aliases: ['Cyber Threat Hunter', 'Analyste Proactif de Menaces'],
    icon: '🏹',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80',
    familyId: 'cybersecurite-reseaux',
    familyName: 'Cybersécurité & Réseaux',
    domain: 'Cybersécurité & Résilience',
    subdomain: 'SOC & Détection d’incidents',
    sourceESD: false,
    level: 'Bac +5',
    salary: '750 000 - 2 300 000 FCFA / mois (Sénégal) • ~55k€ - 85k€ (France/Europe)',
    simpleDefinition: 'Il ne se contente pas d’attendre les alertes : il part activement fouiller dans les réseaux pour débusquer les pirates discrets déjà infiltrés.',
    shortDescription: 'Traque de manière proactive les cyberattaquants furtifs qui ont réussi à contourner les systèmes de défense automatiques.',
    skills: {
      technical: ['Framework MITRE ATT&CK', 'Recherche d’IoC (Indicateurs de Compromission)', 'Requêtes SIEM avancées', 'Comportements anormaux d’utilisateurs (UEBA)'],
      analytical: ['Intuition d’enquêteur et curiosité chirurgicale'],
      creative: ['Hypothèses d’infiltration novatrices'],
      human: ['Discrétion et rigueur d’analyse'],
      tools: ['Splunk', 'Elastic Security', 'Kql / Eql', 'CyberChef']
    },
    relatedJobSlugs: ['analyste-cybersecurite', 'incident-responder', 'pentester-hacker-ethique'],
    interests: ['securite-defense', 'resoudre-problemes']
  }),

  makeJob({
    id: 'security-architect',
    slug: 'security-architect',
    title: 'Architecte Cybersécurité',
    aliases: ['Cybersecurity Architect', 'Architecte Sécurité des SI'],
    icon: '🏰',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80',
    familyId: 'cybersecurite-reseaux',
    familyName: 'Cybersécurité & Réseaux',
    domain: 'Cybersécurité & Résilience',
    subdomain: 'Sécurité applicative & Cloud',
    sourceESD: false,
    level: 'Bac +5 (Ingénieur) + Expérience',
    salary: '1 000 000 - 2 800 000 FCFA / mois (Sénégal) • ~70k€ - 105k€ (France/Europe)',
    simpleDefinition: 'Il dessine la forteresse numérique globale de l’entreprise pour que chaque morceau du système informatique soit protégé selon les règles de l’art.',
    shortDescription: 'Conçoit les politiques globales, les zones réseau sécurisées (Zero Trust) et les mécanismes de protection de bout en bout.',
    skills: {
      technical: ['Modèle Zero Trust', 'Cryptographie appliquée et PKI', 'Sécurité Cloud et On-Premise', 'Normes ISO 27001 et NIST'],
      analytical: ['Cartographie des surfaces d’attaque et modélisation de menaces (STRIDE)'],
      creative: ['Architecture de systèmes impénétrables'],
      human: ['Autorité technique et capacité à convaincre les comités de direction'],
      tools: ['Draw.io', 'Threat Modeling Tool', 'Cloud Security Posture (CSPM)']
    },
    relatedJobSlugs: ['security-engineer', 'cloud-security-engineer', 'solutions-architect'],
    interests: ['securite-defense', 'technologie-code']
  }),

  makeJob({
    id: 'appsec-engineer',
    slug: 'application-security-engineer',
    title: 'Ingénieur Sécurité Applicative (AppSec)',
    aliases: ['AppSec Engineer', 'Application Security Specialist', 'Auditeur de Code Sécurisé'],
    icon: '🛡️',
    image: 'https://images.unsplash.com/photo-1618060932014-4deda4932554?w=800&auto=format&fit=crop&q=80',
    familyId: 'cybersecurite-reseaux',
    familyName: 'Cybersécurité & Réseaux',
    domain: 'Cybersécurité & Résilience',
    subdomain: 'Sécurité applicative & Cloud',
    sourceESD: false,
    level: 'Bac +5',
    salary: '700 000 - 2 200 000 FCFA / mois (Sénégal) • ~50k€ - 80k€ (France/Europe)',
    simpleDefinition: 'C’est un développeur expert en sécurité qui vérifie ligne par ligne le code des logiciels pour s’assurer qu’aucune porte dérobée ou vulnérabilité n’a été laissée.',
    shortDescription: 'Sensibilise et accompagne les développeurs pour éliminer les failles de sécurité dès l’écriture du code source.',
    skills: {
      technical: ['OWASP Top 10 web & mobile', 'Revue de code sécurisée', 'Outils SAST, DAST et SCA', 'Sécurité des APIs (OAuth, rate limiting)'],
      analytical: ['Compréhension immédiate des vecteurs d’exploitation de failles'],
      creative: ['Contre-mesures élégantes qui ne dégradent pas les performances'],
      human: ['Pédagogie exemplaire avec les développeurs'],
      tools: ['Snyk', 'SonarQube', 'Checkmarx', 'Burp Suite', 'Git']
    },
    relatedJobSlugs: ['devsecops-engineer', 'pentester-hacker-ethique', 'developpeur-fullstack'],
    interests: ['securite-defense', 'technologie-code']
  }),

  makeJob({
    id: 'cloud-security-engineer',
    slug: 'cloud-security-engineer',
    title: 'Cloud Security Engineer (Ingénieur Sécurité Cloud)',
    aliases: ['Ingénieur Cybersécurité Cloud', 'SecOps Cloud'],
    icon: '🌩️',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80',
    familyId: 'cybersecurite-reseaux',
    familyName: 'Cybersécurité & Réseaux',
    domain: 'Cybersécurité & Résilience',
    subdomain: 'Sécurité applicative & Cloud',
    sourceESD: false,
    level: 'Bac +5',
    salary: '750 000 - 2 300 000 FCFA / mois (Sénégal) • ~52k€ - 85k€ (France/Europe)',
    simpleDefinition: 'Il veille à ce que les données et serveurs confiés aux hébergeurs Cloud (AWS, Google, Azure) soient fermés à clé et inaccessibles aux curieux.',
    shortDescription: 'Configure, automatise et surveille la sécurité des environnements informatiques hébergés dans le cloud.',
    skills: {
      technical: ['IAM Cloud avancé (moindre privilège)', 'Chiffrement des données en transit et au repos (KMS)', 'Sécurité Kubernetes et conteneurs', 'Détection de mauvaises configurations cloud'],
      analytical: ['Audit continu des permissions et des clés d’accès'],
      creative: ['Automatisation du blocage des fuites de données'],
      human: ['Rigueur et veille permanente'],
      tools: ['AWS Security Hub', 'Prisma Cloud', 'Terraform', 'Falco']
    },
    relatedJobSlugs: ['cloud-engineer', 'security-engineer', 'devsecops-engineer'],
    interests: ['securite-defense', 'technologie-code']
  }),

  makeJob({
    id: 'grc-analyst',
    slug: 'grc-analyst',
    title: 'Analyste GRC (Gouvernance, Risque & Conformité)',
    aliases: ['Consultant GRC', 'Auditeur Conformité Cyber', 'Analyste des Risques Informatiques'],
    icon: '⚖️',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80',
    familyId: 'cybersecurite-reseaux',
    familyName: 'Cybersécurité & Réseaux',
    domain: 'Cybersécurité & Résilience',
    subdomain: 'Gouvernance, Risques & Conformité (GRC)',
    sourceESD: false,
    level: 'Bac +5 (Droit du numérique, Commerce ou École d’Ingénieur)',
    salary: '550 000 - 1 700 000 FCFA / mois (Sénégal) • ~42k€ - 68k€ (France/Europe)',
    simpleDefinition: 'Il s’assure que l’entreprise respecte les lois sur les données privées, rédige les règles de sécurité interne et prépare les audits officiels.',
    shortDescription: 'Évalue les risques cyber, formalise les politiques de sécurité et garantit le respect des réglementations en vigueur.',
    skills: {
      technical: ['Normes ISO 27001, 27005', 'Méthodes d’analyse de risque (EBIOS RM, MEHARI)', 'Réglementations de protection des données (CDP Sénégal, RGPD)', 'Plans de Continuité d’Activité (PCA)'],
      analytical: ['Évaluation méthodique des impacts juridiques et financiers'],
      creative: ['Sensibilisation ludique des salariés aux pièges du phishing'],
      human: ['Excellente plume, diplomatie et sens de la négociation'],
      tools: ['Logiciels GRC', 'Excel / Word', 'Plateformes de sensibilisation']
    },
    relatedJobSlugs: ['security-engineer', 'business-analyst'],
    interests: ['droit-justice', 'securite-defense', 'gestion-projet']
  }),

  // --- ESD DOMAINE 5 : CLOUD & INFRASTRUCTURE COMPLÉMENTAIRE ---
  makeJob({
    id: 'solutions-architect',
    slug: 'solutions-architect',
    title: 'Architecte Solutions (Solutions Architect)',
    aliases: ['Solutions Architect', 'Architecte Fonctionnel & Technique'],
    icon: '🧩',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80',
    familyId: 'numerique-ia',
    familyName: 'Numérique, Informatique & IA',
    domain: 'Cloud & Infrastructure',
    subdomain: 'Solutions Architecture',
    sourceESD: false,
    level: 'Bac +5 (Ingénieur)',
    salary: '900 000 - 2 500 000 FCFA / mois (Sénégal) • ~65k€ - 95k€ (France/Europe)',
    simpleDefinition: 'C’est le conseiller technique qui écoute le problème d’un gros client et assemble les meilleurs briques logicielles et cloud pour construire la solution sur-mesure parfaite.',
    shortDescription: 'Conçoit l’assemblage global des logiciels, serveurs et réseaux pour répondre précisément aux besoins stratégiques d’un client.',
    skills: {
      technical: ['Conception de solutions bout-en-bout', 'Intégration d’APIs complexes', 'Cloud AWS / Azure / GCP', 'Présentation commerciale technique (Pre-Sales)'],
      analytical: ['Capacité à comprendre très vite les contraintes d’un secteur inconnu'],
      creative: ['Assemblage astucieux de technologies existantes'],
      human: ['Charisme, écoute et excellente aisance oratoire'],
      tools: ['Diagrammes d’architecture', 'Calculateurs de coûts Cloud', 'PowerPoint']
    },
    relatedJobSlugs: ['cloud-architect', 'architecte-web', 'software-architect'],
    interests: ['resoudre-problemes', 'gestion-projet', 'technologie-code']
  }),

  makeJob({
    id: 'network-engineer',
    slug: 'network-engineer',
    title: 'Ingénieur Réseaux & Télécoms',
    aliases: ['Network Engineer', 'Ingénieur Télécom', 'Architecte Réseau'],
    icon: '📡',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80',
    familyId: 'cybersecurite-reseaux',
    familyName: 'Cybersécurité & Réseaux',
    domain: 'Cloud & Infrastructure',
    subdomain: 'Systèmes & Réseaux',
    sourceESD: false,
    level: 'Bac +5 (Ingénieur)',
    salary: '600 000 - 1 800 000 FCFA / mois (Sénégal) • ~45k€ - 70k€ (France/Europe)',
    simpleDefinition: 'Il conçoit et déploie les autoroutes de communication numériques (fibre optique, réseaux 4G/5G, liaisons satellites) reliant les pays et les entreprises.',
    shortDescription: 'Garantit l’interconnexion, le routage à grande vitesse et la disponibilité des flux de données entre sites distants.',
    skills: {
      technical: ['Protocoles de routage avancés (BGP, OSPF, MPLS)', 'Réseaux d’opérateurs télécoms et fibre optique', 'SD-WAN et virtualisation de réseaux', 'Sécurité périmétrique'],
      analytical: ['Diagnostic complexe de latence et de pertes de paquets'],
      creative: ['Conception de boucles de redondance sans interruption'],
      human: ['Rigueur et sens des responsabilités critiques'],
      tools: ['Cisco / Juniper / Huawei', 'Wireshark', 'GNS3', 'Linux']
    },
    certifications: ['Cisco CCNP / CCIE'],
    relatedJobSlugs: ['administrateur-systemes-reseaux', 'security-engineer'],
    interests: ['technologie-code', 'resoudre-problemes']
  }),

  makeJob({
    id: 'infrastructure-engineer',
    slug: 'infrastructure-engineer',
    title: 'Ingénieur Infrastructure',
    aliases: ['Infrastructure Engineer', 'Ingénieur Systèmes & Plateformes'],
    icon: '🏗️',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80',
    familyId: 'numerique-ia',
    familyName: 'Numérique, Informatique & IA',
    domain: 'Cloud & Infrastructure',
    subdomain: 'Infrastructure Cloud',
    sourceESD: false,
    level: 'Bac +5',
    salary: '600 000 - 1 850 000 FCFA / mois (Sénégal) • ~45k€ - 72k€ (France/Europe)',
    simpleDefinition: 'Il gère les parcs de serveurs massifs et les systèmes de stockage pour s’assurer que les machines fonctionnent sans surchauffe ni panne.',
    shortDescription: 'Supervise, dimensionne et maintient les composants matériels et systèmes d’exploitation au cœur des centres de données.',
    skills: {
      technical: ['Systèmes d’exploitation Linux à grande échelle', 'Virtualisation et stockage (SAN/NAS)', 'Automatisation (Ansible, Puppet)', 'Supervision industrielle'],
      analytical: ['Planification de la capacité (Capacity Planning)'],
      creative: ['Scripts d’optimisation des performances matérielles'],
      human: ['Esprit d’équipe et calme opérationnel'],
      tools: ['Ansible', 'Linux', 'VMware', 'Zabbix', 'Prometheus']
    },
    relatedJobSlugs: ['cloud-engineer', 'administrateur-systemes-reseaux', 'devops-engineer'],
    interests: ['technologie-code', 'resoudre-problemes']
  }),

  // --- ESD DOMAINE 6 : DEVOPS COMPLÉMENTAIRE ---
  makeJob({
    id: 'platform-engineer',
    slug: 'platform-engineer',
    title: 'Platform Engineer (Ingénieur Plateforme)',
    aliases: ['Ingénieur Plateforme Cloud', 'Internal Developer Platform Specialist'],
    icon: '🎛️',
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&auto=format&fit=crop&q=80',
    familyId: 'numerique-ia',
    familyName: 'Numérique, Informatique & IA',
    domain: 'DevOps & Platform Engineering',
    subdomain: 'Platform Engineering',
    sourceESD: false,
    level: 'Bac +5 (Ingénieur)',
    salary: '750 000 - 2 300 000 FCFA / mois (Sénégal) • ~55k€ - 85k€ (France/Europe)',
    simpleDefinition: 'Il crée des outils sur mesure pour les développeurs de son entreprise, pour qu’ils puissent tester et mettre en ligne leurs applications en un seul clic sans se soucier des serveurs.',
    shortDescription: 'Conçoit une plateforme interne en libre-service (IDP) pour booster la productivité et l’autonomie des développeurs.',
    skills: {
      technical: ['Kubernetes avancé & Helm', 'Portails développeurs (Backstage)', 'Infrastructure as Code et GitOps (ArgoCD)', 'Automatisation des environnements à la demande'],
      analytical: ['Mesure de l’expérience développeur (Developer Experience - DevEx)'],
      creative: ['Simplification radicale des démarches de déploiement'],
      human: ['Écoute et posture de service envers ses pairs développeurs'],
      tools: ['Kubernetes', 'ArgoCD', 'Backstage', 'Terraform', 'Crossplane']
    },
    relatedJobSlugs: ['devops-engineer', 'site-reliability-engineer'],
    interests: ['technologie-code', 'resoudre-problemes']
  }),

  makeJob({
    id: 'ci-cd-engineer',
    slug: 'ci-cd-engineer',
    title: 'Ingénieur CI/CD (Intégration & Déploiement Continu)',
    aliases: ['Automation Delivery Engineer', 'Release Engineer'],
    icon: '🔁',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&auto=format&fit=crop&q=80',
    familyId: 'numerique-ia',
    familyName: 'Numérique, Informatique & IA',
    domain: 'DevOps & Platform Engineering',
    subdomain: 'CI/CD & Automatisation',
    sourceESD: false,
    level: 'Bac +3 à Bac +5',
    salary: '600 000 - 1 800 000 FCFA / mois (Sénégal) • ~45k€ - 70k€ (France/Europe)',
    simpleDefinition: 'Il programme les chaînes de montage automatiques qui vérifient, emballent et envoient les logiciels sur les serveurs chaque fois qu’un ingénieur écrit une mise à jour.',
    shortDescription: 'Spécialiste des pipelines d’automatisation garantissant des livraisons logicielles ultra-fréquentes et sans accroc.',
    skills: {
      technical: ['GitLab CI, GitHub Actions, Jenkins', 'Stratégies de déploiement (Canary, Blue/Green)', 'Gestion des versions et releases sémantiques', 'Automatisation des tests'],
      analytical: ['Traque des lenteurs dans les temps de compilation'],
      creative: ['Workflows fluides et résilients'],
      human: ['Rigueur et esprit de synthèse'],
      tools: ['GitHub Actions', 'GitLab CI', 'Docker', 'Bash', 'SonarQube']
    },
    relatedJobSlugs: ['devops-engineer', 'platform-engineer', 'developpeur-fullstack'],
    interests: ['technologie-code', 'resoudre-problemes']
  }),

  // --- ESD DOMAINE 7 : UX/UI COMPLÉMENTAIRES ESD ---
  makeJob({
    id: 'lead-ux',
    slug: 'lead-ux',
    title: 'Lead UX (Responsable Expérience Utilisateur)',
    aliases: ['Lead UX Designer', 'Référent Expérience Utilisateur'],
    icon: '🧭',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&auto=format&fit=crop&q=80',
    familyId: 'culture-medias',
    familyName: 'Culture, Médias, Communication & Industries Créatives',
    domain: 'UX/UI & Product Design',
    subdomain: 'UX Research & Ergonomie',
    sourceESD: true,
    level: 'Bac +5 + Expérience',
    salary: '700 000 - 2 000 000 FCFA / mois (Sénégal) • ~52k€ - 80k€ (France/Europe)',
    simpleDefinition: 'Il encadre l’équipe de designers UX et veille à ce que tous les produits de l’entreprise soient cohérents et agréables à utiliser.',
    shortDescription: 'Définit les standards méthodologiques d’expérience utilisateur et pilote l’équipe de designers sur des projets majeurs.',
    skills: {
      technical: ['Méthodologies avancées de design centrée utilisateur', 'Mentorat d’équipe de designers', 'Stratégie UX globale', 'Présentations exécutives'],
      analytical: ['Validation de la pertinence des tests utilisateurs'],
      creative: ['Orientation visionnaire des parcours'],
      human: ['Leadership bienveillant et pédagogie'],
      tools: ['Figma', 'Miro', 'Notion', 'Maze']
    },
    relatedJobSlugs: ['ux-manager', 'ux-designer', 'product-designer'],
    interests: ['creer-designer', 'gestion-projet']
  }),

  makeJob({
    id: 'ux-manager',
    slug: 'ux-manager',
    title: 'UX Manager (Directeur de l’Expérience Utilisateur)',
    aliases: ['Head of UX', 'Directeur Design Expérience Client'],
    icon: '👑',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&auto=format&fit=crop&q=80',
    familyId: 'culture-medias',
    familyName: 'Culture, Médias, Communication & Industries Créatives',
    domain: 'UX/UI & Product Design',
    subdomain: 'UX Research & Ergonomie',
    sourceESD: true,
    level: 'Bac +5 + Expérience confirmée',
    salary: '900 000 - 2 500 000 FCFA / mois (Sénégal) • ~65k€ - 95k€ (France/Europe)',
    simpleDefinition: 'Membre influent de l’entreprise, il défend les droits et le confort des utilisateurs auprès des directeurs pour que chaque produit soit humain et facile.',
    shortDescription: 'Inscrit l’excellence de l’expérience utilisateur au cœur de la stratégie d’entreprise et recrute les talents du design.',
    skills: {
      technical: ['Management stratégique du design', 'Recrutement et structuration de pôles design', 'Alignement design et rentabilité financière'],
      analytical: ['Mesure de la maturité design de l’organisation'],
      creative: ['Culture d’innovation continue'],
      human: ['Leadership d’influence et intelligence relationnelle'],
      tools: ['Figma', 'Miro', 'Tableaux de bord de direction']
    },
    relatedJobSlugs: ['lead-ux', 'product-designer'],
    interests: ['gestion-projet', 'creer-designer']
  }),

  makeJob({
    id: 'researcher-designer',
    slug: 'researcher-designer',
    title: 'Researcher & Designer (UX Researcher)',
    aliases: ['Chercheur UX', 'UX Researcher & Designer'],
    icon: '🔎',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    familyId: 'culture-medias',
    familyName: 'Culture, Médias, Communication & Industries Créatives',
    domain: 'UX/UI & Product Design',
    subdomain: 'UX Research & Ergonomie',
    sourceESD: true,
    level: 'Bac +5 (Sciences Humaines, Sociologie, Psychologie ou Design)',
    salary: '500 000 - 1 500 000 FCFA / mois (Sénégal) • ~40k€ - 65k€ (France/Europe)',
    simpleDefinition: 'C’est un détective qui va sur le terrain rencontrer les gens, observer leurs habitudes et comprendre leurs blocages pour inspirer les créateurs d’applications.',
    shortDescription: 'Mène des enquêtes anthropologiques et des tests pour nourrir la conception de données qualitatives vérifiées.',
    skills: {
      technical: ['Interviews qualitatives approfondies', 'Observation ethnographique de terrain', 'Tests d’utilisabilité modérés et non modérés', 'Synthèse visuelle de recherche (Insights)'],
      analytical: ['Détection des besoins inavoués ou inconscients des usagers'],
      creative: ['Restitution captivante des enseignements'],
      human: ['Neutralité bienveillante et empathie profonde'],
      tools: ['Dovetail', 'Figma', 'Maze', 'Otter.ai / Zoom']
    },
    relatedJobSlugs: ['ux-designer', 'ergonome-ihm', 'product-designer'],
    interests: ['creer-designer', 'resoudre-problemes']
  }),

  makeJob({
    id: 'ergonome-ihm',
    slug: 'ergonome-ihm',
    title: 'Ergonome IHM (Interface Homme-Machine)',
    aliases: ['Ergonome Numérique', 'Spécialiste Facteurs Humains & IHM'],
    icon: '🧠',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
    familyId: 'culture-medias',
    familyName: 'Culture, Médias, Communication & Industries Créatives',
    domain: 'UX/UI & Product Design',
    subdomain: 'UX Research & Ergonomie',
    sourceESD: true,
    level: 'Bac +5 (Ergonomie Cognitive ou Psychologie du Travail)',
    salary: '500 000 - 1 550 000 FCFA / mois (Sénégal) • ~40k€ - 62k€ (France/Europe)',
    simpleDefinition: 'Il s’assure que l’ordinateur s’adapte aux limites du cerveau et des yeux de l’être humain (fatigue visuelle, charge mentale, rapidité d’action).',
    shortDescription: 'Applique les lois scientifiques de la cognition humaine pour garantir des interfaces sûres, intuitives et sans fatigue mentale.',
    skills: {
      technical: ['Critères ergonomiques de Bastien et Scapin', 'Évaluation de la charge mentale', 'Accessibilité sensorielle et motrice', 'Audit expert de logiciels professionnels critiques'],
      analytical: ['Mesure des temps de réaction et taux d’erreurs de manipulation'],
      creative: ['Optimisation de la disposition spatiale des commandes'],
      human: ['Sens de l’observation scientifique'],
      tools: ['Logiciels de tracking oculaire (Eye-Tracking)', 'Figma', 'Grilles d’évaluation normées']
    },
    relatedJobSlugs: ['researcher-designer', 'ux-designer'],
    interests: ['creer-designer', 'resoudre-problemes']
  }),

  makeJob({
    id: 'consultant-design',
    slug: 'consultant-en-design',
    title: 'Consultant en Design & Innovation',
    aliases: ['Design Strategist', 'Consultant Design Thinking'],
    icon: '💡',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80',
    familyId: 'culture-medias',
    familyName: 'Culture, Médias, Communication & Industries Créatives',
    domain: 'UX/UI & Product Design',
    subdomain: 'UX Research & Ergonomie',
    sourceESD: true,
    level: 'Bac +5',
    salary: '550 000 - 1 650 000 FCFA / mois (Sénégal) • ~42k€ - 68k€ (France/Europe)',
    simpleDefinition: 'Il anime des ateliers créatifs pour aider les équipes d’une entreprise à résoudre ensemble des problèmes difficiles en utilisant les méthodes des designers.',
    shortDescription: 'Accompagne les organisations dans la transformation de leurs services par les méthodes créatives du Design Thinking.',
    skills: {
      technical: ['Animation d’ateliers de Design Thinking', 'Prototypage express de services', 'Stratégie de design centrée sur l’humain'],
      analytical: ['Capacité à faire émerger un consensus clair dans un groupe diversifié'],
      creative: ['Facilitation graphique et inventivité'],
      human: ['Énergie communicative, écoute et charisme'],
      tools: ['Miro', 'FigJam', 'Post-it & matériel d’atelier', 'Notion']
    },
    relatedJobSlugs: ['charge-dinnovation', 'product-designer'],
    interests: ['creer-designer', 'gestion-projet']
  }),

  // --- ESD DOMAINE 8 : DESIGN DIGITAL COMPLÉMENTAIRES ESD ---
  makeJob({
    id: 'digital-designer',
    slug: 'digital-designer',
    title: 'Digital Designer',
    aliases: ['Designer Numérique Global', 'Concepteur Visuel Digital'],
    icon: '🖌️',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80',
    familyId: 'culture-medias',
    familyName: 'Culture, Médias, Communication & Industries Créatives',
    domain: 'Design Digital & Création Graphique',
    subdomain: 'Webdesign & Digital Design',
    sourceESD: true,
    level: 'Bac +3 à Bac +5',
    salary: '450 000 - 1 300 000 FCFA / mois (Sénégal) • ~36k€ - 56k€ (France/Europe)',
    simpleDefinition: 'Il conçoit tous les éléments visuels modernes dont une entreprise a besoin sur internet (bannières animées, visuels de campagnes, illustrations de sites).',
    shortDescription: 'Créatif polyvalent maîtrisant l’ensemble des formats visuels numériques : interfaces, illustrations, bannières et micro-animations.',
    skills: {
      technical: ['Suite Adobe (Photoshop, Illustrator, InDesign)', 'Figma pour le digital', 'Création d’assets vectoriels et visuels', 'Bases de motion design'],
      analytical: ['Respect scrupuleux des chartes de marque'],
      creative: ['Direction artistique moderne et fraîche'],
      human: ['Réactivité et polyvalence'],
      tools: ['Adobe Creative Cloud', 'Figma', 'Canva', 'Procreate']
    },
    relatedJobSlugs: ['webdesigner', 'brand-designer', 'ui-designer'],
    interests: ['creer-designer']
  }),

  makeJob({
    id: 'directeur-artistique-web',
    slug: 'directeur-artistique-web',
    title: 'Directeur Artistique Web (DA Web)',
    aliases: ['Directeur Artistique Numérique', 'Digital Art Director', 'Lead DA'],
    icon: '🎭',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80',
    familyId: 'culture-medias',
    familyName: 'Culture, Médias, Communication & Industries Créatives',
    domain: 'Design Digital & Création Graphique',
    subdomain: 'Direction Artistique Web',
    sourceESD: true,
    level: 'Bac +5',
    salary: '600 000 - 1 800 000 FCFA / mois (Sénégal) • ~45k€ - 75k€ (France/Europe)',
    simpleDefinition: 'C’est le chef d’orchestre visuel qui choisit le ton, l’ambiance et le style graphique général d’un projet pour qu’il soit beau et inoubliable.',
    shortDescription: 'Insuffle la vision esthétique, l’émotion et le concept créatif de campagnes ou de plateformes numériques majeures.',
    skills: {
      technical: ['Culture visuelle pointue (typographie, photographie, cinéma)', 'Storyboarding et direction de création', 'Supervision d’équipes de graphistes et d’illustrateurs', 'Présentation convaincante de concepts créatifs'],
      analytical: ['Compréhension des tendances artistiques mondiales et locales'],
      creative: ['Sens artistique exceptionnel et audace visuelle'],
      human: ['Leadership inspirant et défense d’idées fortes'],
      tools: ['Figma', 'Photoshop', 'Midjourney (moodboards)', 'Keynote']
    },
    relatedJobSlugs: ['brand-designer', 'motion-designer', 'ui-designer'],
    interests: ['creer-designer', 'commerce-marketing']
  }),

  makeJob({
    id: 'creative-technologist',
    slug: 'creative-technologist',
    title: 'Creative Technologist',
    aliases: ['Technologue Créatif', 'Creative Developer', 'Développeur Créatif'],
    icon: '🔮',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80',
    familyId: 'culture-medias',
    familyName: 'Culture, Médias, Communication & Industries Créatives',
    domain: 'Design Digital & Création Graphique',
    subdomain: 'Creative Technology',
    sourceESD: true,
    level: 'Bac +5 (Profil hybride Art & Code)',
    salary: '600 000 - 1 900 000 FCFA / mois (Sénégal) • ~48k€ - 78k€ (France/Europe)',
    simpleDefinition: 'Mi-artiste, mi-développeur, il programme des expériences interactives magiques (installations artistiques interactives, 3D sur le web, réalité augmentée).',
    shortDescription: 'Explore les ponts entre l’art et le code informatique pour inventer des expériences numériques immersives et spectaculaires.',
    skills: {
      technical: ['WebGL, Three.js, Shaders (GLSL)', 'Creative Coding (p5.js, TouchDesigner)', 'Réalité augmentée et virtuelle (AR/VR)', 'Interaction avec capteurs physiques (Arduino, IoT)'],
      analytical: ['Optimisation de calculs géométriques et 3D en temps réel'],
      creative: ['Imagination sans limite mêlant son, lumière et pixels'],
      human: ['Curiosité insatiable et esprit d’expérimentation'],
      tools: ['Three.js', 'TouchDesigner', 'Blender', 'VS Code', 'Unity']
    },
    relatedJobSlugs: ['animateur-3d', 'motion-designer', 'developpeur-frontend'],
    interests: ['creer-designer', 'technologie-code', 'recherche-innovation']
  }),

  // --- ESD DOMAINE 9 : AUDIOVISUEL NUMÉRIQUE COMPLÉMENTAIRE ---
  makeJob({
    id: 'charge-communication-web',
    slug: 'charge-de-communication-web',
    title: 'Chargé de Communication Web & Multimédia',
    aliases: ['Digital Communications Officer', 'Chargé de Com Digitale'],
    icon: '📢',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80',
    familyId: 'culture-medias',
    familyName: 'Culture, Médias, Communication & Industries Créatives',
    domain: 'Audiovisuel & Digital Content',
    subdomain: 'Communication digitale multimédia',
    sourceESD: true,
    level: 'Bac +3 à Bac +5',
    salary: '350 000 - 1 000 000 FCFA / mois (Sénégal) • ~32k€ - 48k€ (France/Europe)',
    simpleDefinition: 'Il conçoit les messages et les communiqués de l’entreprise diffusés sur le web, le site internet et les newsletters pour valoriser les actions de la marque.',
    shortDescription: 'Valorise l’image et les actualités d’une organisation sur tous ses supports digitaux à travers des contenus clairs et professionnels.',
    skills: {
      technical: ['Rédaction institutionnelle pour le web', 'Gestion de newsletters et intranet', 'Relations presse en ligne et communiqués', 'Organisation d’événements en ligne (webinaires)'],
      analytical: ['Veille médiatique et analyse des retombées'],
      creative: ['Ton juste adapté aux valeurs citoyennes de l’entreprise'],
      human: ['Excellente plume et diplomatie'],
      tools: ['WordPress', 'Canva', 'Brevo / Mailchimp', 'Suite Office']
    },
    relatedJobSlugs: ['social-media-manager', 'content-creator', 'content-manager'],
    interests: ['commerce-marketing', 'creer-designer']
  }),

  // --- ESD DOMAINE 10 : MARKETING DIGITAL COMPLÉMENTAIRES ESD ---
  makeJob({
    id: 'traffic-manager',
    slug: 'traffic-manager',
    title: 'Traffic Manager (Gestionnaire de Trafic Web)',
    aliases: ['Acquisition Traffic Specialist', 'Responsable de Trafic'],
    icon: '🚦',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    familyId: 'commerce-marketing',
    familyName: 'Commerce, Vente, Marketing & E-Commerce',
    domain: 'Marketing Digital & Acquisition',
    subdomain: 'Growth & Acquisition',
    sourceESD: true,
    level: 'Bac +3 à Bac +5',
    salary: '450 000 - 1 350 000 FCFA / mois (Sénégal) • ~38k€ - 56k€ (France/Europe)',
    simpleDefinition: 'C’est le pilote qui amène des milliers de visiteurs sur le site web en activant et en optimisant tous les canaux publicitaires au meilleur prix.',
    shortDescription: 'Gère et optimise les budgets d’achat d’espace et les leviers d’acquisition payants pour attirer un trafic qualifié.',
    skills: {
      technical: ['Google Ads & Meta Ads poussés', 'Régies publicitaires locales et programmatiques', 'Calcul du Coût Par Clic (CPC) et Coût Par Acquisition (CPA)', 'Plans de taggage et pixels de conversion'],
      analytical: ['Optimisation constante des dépenses publicitaires'],
      creative: ['Tests d’annonces et d’angles marketing variés'],
      human: ['Rigueur de gestionnaire et réactivité'],
      tools: ['Google Ads', 'Meta Ads Manager', 'Looker Studio', 'GA4']
    },
    relatedJobSlugs: ['head-of-acquisition', 'growth-hacker', 'consultant-seo-sea'],
    interests: ['commerce-marketing', 'analyser-chiffres']
  }),

  makeJob({
    id: 'head-of-acquisition',
    slug: 'head-of-acquisition',
    title: 'Head of Acquisition (Responsable Acquisition & Croissance)',
    aliases: ['Directeur de l’Acquisition', 'Lead Growth & Acquisition'],
    icon: '🏆',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
    familyId: 'commerce-marketing',
    familyName: 'Commerce, Vente, Marketing & E-Commerce',
    domain: 'Marketing Digital & Acquisition',
    subdomain: 'Growth & Acquisition',
    sourceESD: true,
    level: 'Bac +5',
    salary: '700 000 - 2 200 000 FCFA / mois (Sénégal) • ~55k€ - 85k€ (France/Europe)',
    simpleDefinition: 'Il gère la totalité du budget publicitaire numérique de l’entreprise et dirige les équipes pour conquérir de nouveaux marchés à grande échelle.',
    shortDescription: 'Définit la stratégie globale et alloue les budgets de conquête de nouveaux clients à travers tous les canaux numériques.',
    skills: {
      technical: ['Pilotage de budgets d’acquisition massifs', 'Stratégie multi-canale (SEO, SEA, Social Ads, Affiliation, Influence)', 'Modélisation du LTV / CAC', 'Management d’équipe d’acquisition'],
      analytical: ['Vision mathématique et rentabilité business stricte'],
      creative: ['Ouverture de nouveaux canaux inexploités'],
      human: ['Leadership, négociation et rigueur financière'],
      tools: ['Google Ads', 'Meta Suite', 'Tableaux de bord BI', 'Excel avancé']
    },
    relatedJobSlugs: ['traffic-manager', 'growth-hacker', 'responsable-e-marketing'],
    interests: ['commerce-marketing', 'gestion-projet']
  }),

  makeJob({
    id: 'content-manager',
    slug: 'content-manager',
    title: 'Content Manager (Responsable Éditorial Digital)',
    aliases: ['Responsable de Contenu', 'Brand Content Manager', 'Stratège Éditorial'],
    icon: '✍️',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80',
    familyId: 'commerce-marketing',
    familyName: 'Commerce, Vente, Marketing & E-Commerce',
    domain: 'Marketing Digital & Acquisition',
    subdomain: 'Content Marketing',
    sourceESD: true,
    level: 'Bac +3 à Bac +5',
    salary: '400 000 - 1 200 000 FCFA / mois (Sénégal) • ~36k€ - 54k€ (France/Europe)',
    simpleDefinition: 'Il choisit les sujets et écrit les articles de blog, livres blancs et guides qui intéressent les clients et prouvent l’expertise de l’entreprise.',
    shortDescription: 'Définit et déploie la stratégie de contenu écrit et visuel pour attirer, éduquer et convertir les prospects (Inbound Marketing).',
    skills: {
      technical: ['Stratégie d’Inbound Marketing', 'Rédaction web optimisée pour le SEO', 'Gestion de calendrier éditorial', 'Coordination de rédacteurs et traducteurs'],
      analytical: ['Mesure de la performance des articles et guides'],
      creative: ['Capacité à passionner le lecteur sur des sujets techniques'],
      human: ['Excellente plume et culture générale'],
      tools: ['WordPress', 'Notion', 'Ahrefs', 'Canva', 'Google Docs']
    },
    relatedJobSlugs: ['redacteur-web', 'social-media-manager', 'charge-de-marketing-digital'],
    interests: ['commerce-marketing', 'creer-designer']
  }),

  makeJob({
    id: 'redacteur-web',
    slug: 'redacteur-web',
    title: 'Rédacteur Web & SEO Copywriter',
    aliases: ['Copywriter Web', 'Rédacteur SEO', 'Content Writer'],
    icon: '🖋️',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80',
    familyId: 'culture-medias',
    familyName: 'Culture, Médias, Communication & Industries Créatives',
    domain: 'Marketing Digital & Acquisition',
    subdomain: 'Content Marketing',
    sourceESD: true,
    level: 'Bac +2 à Bac +3',
    salary: '300 000 - 800 000 FCFA / mois (Sénégal) • ~30k€ - 44k€ (France/Europe)',
    simpleDefinition: 'Il écrit des textes fluides, agréables à lire et optimisés pour plaire à la fois aux internautes et aux robots de Google.',
    shortDescription: 'Rédige des articles, fiches produits et contenus persuasifs qui captivent le lecteur et grimpent dans les résultats de recherche.',
    skills: {
      technical: ['Intégration naturelle de mots-clés SEO', 'Techniques de persuasion écrite (Copywriting : AIDA, PAS)', 'Structuration de texte pour la lecture rapide sur écran', 'Orthographe et syntaxe irréprochables'],
      analytical: ['Recherche documentaire rapide et vérification des sources'],
      creative: ['Variété de vocabulaire et titres accrocheurs'],
      human: ['Curiosité d’esprit et adaptabilité de ton'],
      tools: ['Yoast SEO / RankMath', 'Google Docs', 'Surfer SEO / 1.fr', 'WordPress']
    },
    relatedJobSlugs: ['content-manager', 'consultant-seo-sea'],
    interests: ['creer-designer', 'commerce-marketing']
  }),

  makeJob({
    id: 'charge-compte-adwords',
    slug: 'charge-de-compte-adwords',
    title: 'Chargé de Compte AdWords (Consultant SEA)',
    aliases: ['Google Ads Specialist', 'Gestionnaire de Campagnes Search', 'Média Buyer Google'],
    icon: '🎯',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&auto=format&fit=crop&q=80',
    familyId: 'commerce-marketing',
    familyName: 'Commerce, Vente, Marketing & E-Commerce',
    domain: 'Marketing Digital & Acquisition',
    subdomain: 'SEA & Publicité en ligne',
    sourceESD: true,
    level: 'Bac +3 à Bac +5',
    salary: '400 000 - 1 300 000 FCFA / mois (Sénégal) • ~36k€ - 55k€ (France/Europe)',
    simpleDefinition: 'C’est l’expert qui règle au centime près les enchères publicitaires sur Google pour que chaque euro dépensé rapporte un maximum de clients.',
    shortDescription: 'Crée, pilote et optimise les campagnes d’annonces payantes sur le moteur de recherche Google et son réseau partenaire.',
    skills: {
      technical: ['Gestion experte de Google Ads', 'Recherche de mots-clés négatifs et exclusions', 'A/B testing d’annonces textuelles', 'Suivi précis des conversions'],
      analytical: ['Analyse de rentabilité quotidienne par mot-clé'],
      creative: ['Rédaction d’arguments de vente percutants en 30 caractères'],
      human: ['Rigueur de gestionnaire financier'],
      tools: ['Google Ads', 'Google Tag Manager', 'Looker Studio', 'Excel']
    },
    relatedJobSlugs: ['consultant-seo-sea', 'traffic-manager', 'growth-hacker'],
    interests: ['commerce-marketing', 'analyser-chiffres']
  }),

  makeJob({
    id: 'consultant-sea',
    slug: 'consultant-sea',
    title: 'Consultant SEA (Search Engine Advertising)',
    aliases: ['Spécialiste Référencement Payant', 'SEA Strategist'],
    icon: '💸',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&auto=format&fit=crop&q=80',
    familyId: 'commerce-marketing',
    familyName: 'Commerce, Vente, Marketing & E-Commerce',
    domain: 'Marketing Digital & Acquisition',
    subdomain: 'SEA & Publicité en ligne',
    sourceESD: true,
    level: 'Bac +3 à Bac +5',
    salary: '450 000 - 1 350 000 FCFA / mois (Sénégal) • ~38k€ - 56k€ (France/Europe)',
    simpleDefinition: 'Conseiller spécialisé dans les publicités payantes sur internet, il aide les marques à maximiser leur visibilité immédiate lors des recherches des clients.',
    shortDescription: 'Élabore la stratégie publicitaire payante sur les moteurs de recherche pour acquérir des prospects à fort potentiel.',
    skills: {
      technical: ['Audit de comptes publicitaires', 'Campagnes Performance Max et Shopping', 'Retargeting (reciblage publicitaire)', 'Analyse concurrentielle'],
      analytical: ['Optimisation du score de qualité (Quality Score) des annonces'],
      creative: ['Propositions de dispositifs publicitaires percutants'],
      human: ['Aisance relationnelle et pédagogie avec les clients d’agence'],
      tools: ['Google Ads Editor', 'Semrush', 'Looker Studio']
    },
    relatedJobSlugs: ['charge-de-compte-adwords', 'consultant-seo-sea', 'traffic-manager'],
    interests: ['commerce-marketing', 'analyser-chiffres']
  }),

  makeJob({
    id: 'media-trader',
    slug: 'media-trader',
    title: 'Media Trader (Acheteur Programmatique)',
    aliases: ['Programmatic Specialist', 'Trader Média Digital', 'Acheteur d’Espaces Publicitaires'],
    icon: '📊',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80',
    familyId: 'commerce-marketing',
    familyName: 'Commerce, Vente, Marketing & E-Commerce',
    domain: 'Marketing Digital & Acquisition',
    subdomain: 'SEA & Publicité en ligne',
    sourceESD: true,
    level: 'Bac +5 (Finance, Économie ou Marketing)',
    salary: '500 000 - 1 600 000 FCFA / mois (Sénégal) • ~42k€ - 65k€ (France/Europe)',
    simpleDefinition: 'Comme un trader en bourse, il achète des espaces publicitaires aux enchères en une fraction de seconde grâce à des logiciels automatiques.',
    shortDescription: 'Pilote les enchères automatiques en temps réel (RTB) sur les plateformes programmatiques pour diffuser des publicités au public ciblé.',
    skills: {
      technical: ['Plateformes DSP (Demand-Side Platforms : DV360, The Trade Desk)', 'Gestion des flux d’enchères en temps réel (RTB)', 'Ciblage d’audiences et data marketplace', 'Mesure de la visibilité (Viewability) et lutte contre la fraude publicitaire'],
      analytical: ['Vitesse d’analyse de tableaux chiffrés sous pression'],
      creative: ['Optimisation des combinaisons créatives dynamiques'],
      human: ['Rigueur mathématique et gestion du stress'],
      tools: ['Display & Video 360 (DV360)', 'The Trade Desk', 'Excel', 'Google Analytics']
    },
    relatedJobSlugs: ['traffic-manager', 'head-of-acquisition', 'web-analyst'],
    interests: ['analyser-chiffres', 'commerce-marketing']
  }),

  makeJob({
    id: 'consultant-social-media',
    slug: 'consultant-social-media',
    title: 'Consultant Social Media',
    aliases: ['Conseiller en Stratégie Réseaux Sociaux', 'Social Media Strategist'],
    icon: '📱',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80',
    familyId: 'commerce-marketing',
    familyName: 'Commerce, Vente, Marketing & E-Commerce',
    domain: 'Marketing Digital & Acquisition',
    subdomain: 'Social Media Management & Community',
    sourceESD: true,
    level: 'Bac +3 à Bac +5',
    salary: '450 000 - 1 400 000 FCFA / mois (Sénégal) • ~38k€ - 58k€ (France/Europe)',
    simpleDefinition: 'Expert externe, il forme et conseille les entreprises pour qu’elles sachent comment se comporter et briller sur les réseaux sociaux.',
    shortDescription: 'Audit, conseille et bâtit des stratégies sur-mesure de prise de parole et d’influence sociale pour les marques.',
    skills: {
      technical: ['Audit de présence sociale concurrentielle', 'Définition de lignes éditoriales et tonalités de marque', 'Protocoles de communication de crise', 'Stratégie de partenariats créateurs'],
      analytical: ['Compréhension des mutations d’algorithmes sociaux'],
      creative: ['Concepts de campagnes virales positives'],
      human: ['Sens du conseil et force d’entraînement'],
      tools: ['Hootsuite', 'Brandwatch', 'Miro', 'Canva']
    },
    relatedJobSlugs: ['social-media-manager', 'content-creator'],
    interests: ['commerce-marketing', 'creer-designer']
  }),

  // --- ESD DOMAINE 11 : E-COMMERCE COMPLÉMENTAIRE ---
  makeJob({
    id: 'responsable-dev-ecommerce',
    slug: 'responsable-developpement-e-commerce',
    title: 'Responsable Développement E-Commerce',
    aliases: ['E-Commerce Development Lead', 'Chef de Projet Développement E-Commerce'],
    icon: '🛍️',
    image: 'https://images.unsplash.com/photo-1556742049-0a67e5572293?w=800&auto=format&fit=crop&q=80',
    familyId: 'commerce-marketing',
    familyName: 'Commerce, Vente, Marketing & E-Commerce',
    domain: 'E-commerce & Marketplace',
    subdomain: 'Développement Produit E-commerce',
    sourceESD: true,
    level: 'Bac +5',
    salary: '600 000 - 1 800 000 FCFA / mois (Sénégal) • ~45k€ - 72k€ (France/Europe)',
    simpleDefinition: 'Il supervise l’expansion de la boutique en ligne : ouverture de nouveaux pays, ajout de nouveaux moyens de paiement et amélioration de la vitesse du site.',
    shortDescription: 'Pilote les projets techniques et commerciaux d’expansion de la plateforme de vente en ligne.',
    skills: {
      technical: ['Architecture de boutiques e-commerce', 'Connexion aux ERP et logiciels de gestion de stock', 'Passerelles de paiement internationales et locales', 'Gestion de prestataires tech et agences web'],
      analytical: ['Calcul du retour sur investissement des nouvelles fonctionnalités'],
      creative: ['Expériences d’achat interactives et immersives'],
      human: ['Leadership de projet et coordination d’équipes mixtes'],
      tools: ['Shopify Plus / Magento', 'Jira', 'Google Analytics', 'Excel']
    },
    relatedJobSlugs: ['responsable-e-commerce', 'product-manager'],
    interests: ['commerce-marketing', 'gestion-projet']
  }),

  // --- ESD DOMAINE 12 : PRODUCT & DIGITAL BUSINESS COMPLÉMENTAIRES ---
  makeJob({
    id: 'product-marketing-manager',
    slug: 'product-marketing-manager',
    title: 'Product Marketing Manager (PMM)',
    aliases: ['Responsable Marketing Produit', 'Go-To-Market Specialist'],
    icon: '🚀',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
    familyId: 'commerce-marketing',
    familyName: 'Commerce, Vente, Marketing & E-Commerce',
    domain: 'Product Management & Digital Business',
    subdomain: 'Product Management & Ownership',
    sourceESD: true,
    level: 'Bac +5 (École de Commerce ou Master Marketing)',
    salary: '650 000 - 1 900 000 FCFA / mois (Sénégal) • ~45k€ - 75k€ (France/Europe)',
    simpleDefinition: 'Il raconte l’histoire du produit : il trouve les bons mots pour expliquer aux clients pourquoi cette application va changer leur vie et organise son lancement en fanfare.',
    shortDescription: 'Définit le positionnement, la stratégie de lancement (Go-To-Market) et les argumentaires commerciaux des produits numériques.',
    skills: {
      technical: ['Stratégie de lancement de produit (Go-To-Market)', 'Positionnement de marque et propositions de valeur', 'Création d’argumentaires de vente (Sales Enablement)', 'Analyse de concurrence (Competitive Intelligence)'],
      analytical: ['Compréhension des motivations d’achat des clients'],
      creative: ['Création d’un storytelling produit percutant'],
      human: ['Alignement entre équipes produit, marketing et commerciaux'],
      tools: ['Notion', 'HubSpot', 'Figma', 'Crayon / Klue']
    },
    relatedJobSlugs: ['product-manager', 'charge-de-marketing-digital'],
    interests: ['commerce-marketing', 'gestion-projet']
  }),

  makeJob({
    id: 'consultant-crm',
    slug: 'consultant-crm',
    title: 'Consultant CRM & Relation Client',
    aliases: ['CRM Specialist', 'Consultant Salesforce / HubSpot', 'Gestionnaire Relation Client Digitale'],
    icon: '👥',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80',
    familyId: 'commerce-marketing',
    familyName: 'Commerce, Vente, Marketing & E-Commerce',
    domain: 'Product Management & Digital Business',
    subdomain: 'Customer Success & CRM',
    sourceESD: true,
    level: 'Bac +3 à Bac +5',
    salary: '500 000 - 1 600 000 FCFA / mois (Sénégal) • ~42k€ - 65k€ (France/Europe)',
    simpleDefinition: 'Il installe et paramètre les logiciels qui mémorisent tout l’historique des clients pour que l’entreprise ne perde jamais le contact avec eux.',
    shortDescription: 'Déploie et optimise les plateformes de gestion de la relation client pour fidéliser les usagers et automatiser les suivis.',
    skills: {
      technical: ['Paramétrage d’outils CRM majeurs (Salesforce, HubSpot, Zoho)', 'Automatisation des flux de vente et de support', 'Nettoyage et déduplication de bases de données clients', 'Création de rapports de performance commerciale'],
      analytical: ['Cartographie des étapes du cycle de vie client'],
      creative: ['Scénarios d’accompagnement personnalisés'],
      human: ['Pédagogie pour former les équipes commerciales'],
      tools: ['HubSpot', 'Salesforce', 'Make / Zapier', 'Excel']
    },
    relatedJobSlugs: ['customer-success-manager', 'account-manager', 'business-analyst'],
    interests: ['commerce-marketing', 'gestion-projet']
  }),

  makeJob({
    id: 'account-manager',
    slug: 'account-manager',
    title: 'Account Manager Digital',
    aliases: ['Responsable de Comptes Clients', 'Client Partner', 'Key Account Manager Digital'],
    icon: '🤝',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    familyId: 'commerce-marketing',
    familyName: 'Commerce, Vente, Marketing & E-Commerce',
    domain: 'Product Management & Digital Business',
    subdomain: 'Customer Success & CRM',
    sourceESD: true,
    level: 'Bac +3 à Bac +5',
    salary: '450 000 - 1 500 000 FCFA / mois (Sénégal) • ~38k€ - 62k€ (France/Europe)',
    simpleDefinition: 'En agence ou entreprise tech, il est le partenaire de confiance des clients importants : il s’assure de leur satisfaction et leur propose de nouveaux services.',
    shortDescription: 'Fidélise et développe le chiffre d’affaires d’un portefeuille de clients stratégiques dans le secteur digital.',
    skills: {
      technical: ['Négociation commerciale de haut niveau', 'Compréhension des enjeux numériques des clients', 'Suivi de rentabilité des comptes', 'Vente incitative et croisée (Upsell / Cross-sell)'],
      analytical: ['Analyse de la rentabilité de chaque contrat'],
      creative: ['Propositions de nouvelles opportunités business adaptées'],
      human: ['Excellence relationnelle, courtoisie et écoute active'],
      tools: ['CRM (HubSpot / Salesforce)', 'LinkedIn Sales Navigator', 'Excel']
    },
    relatedJobSlugs: ['customer-success-manager', 'chef-de-projet-digital'],
    interests: ['commerce-marketing', 'gestion-projet']
  }),

  makeJob({
    id: 'chef-projet-marketing',
    slug: 'chef-de-projet-marketing',
    title: 'Chef de Projet Marketing Digital',
    aliases: ['Digital Marketing Project Manager', 'Coordinateur Marketing Digital'],
    icon: '🗂️',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop&q=80',
    familyId: 'commerce-marketing',
    familyName: 'Commerce, Vente, Marketing & E-Commerce',
    domain: 'Product Management & Digital Business',
    subdomain: 'Direction de Projets Digitaux',
    sourceESD: true,
    level: 'Bac +5',
    salary: '450 000 - 1 400 000 FCFA / mois (Sénégal) • ~38k€ - 58k€ (France/Europe)',
    simpleDefinition: 'Il coordonne toutes les étapes d’une campagne publicitaire numérique, de la première idée jusqu’au bilan des ventes.',
    shortDescription: 'Supervise la conception, la production et la diffusion des campagnes marketing multi-canales.',
    skills: {
      technical: ['Planification de campagnes marketing', 'Gestion des prestataires (créatifs, agences média)', 'Gestion budgétaire', 'Reporting et analyse post-campagne'],
      analytical: ['Suivi scrupuleux des étapes du calendrier'],
      creative: ['Harmonisation des messages promotionnels'],
      human: ['Leadership d’équipe et sens du relationnel'],
      tools: ['Asana / Trello', 'Excel', 'Meta Suite', 'Google Analytics']
    },
    relatedJobSlugs: ['chef-de-projet-digital', 'charge-de-marketing-digital'],
    interests: ['commerce-marketing', 'gestion-projet']
  }),

  // --- ESD DOMAINE 13 : INNOVATION & CHANGEMENT COMPLÉMENTAIRE ---
  makeJob({
    id: 'change-manager',
    slug: 'chef-de-projet-daccompagnement-au-changement-en-entreprise',
    title: 'Chef de Projet Accompagnement au Changement',
    aliases: ['Change Manager', 'Consultant Conduite du Changement Numérique'],
    icon: '🌱',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80',
    familyId: 'droit-management',
    familyName: 'Droit, Administration, Management & Services Professionnels',
    domain: 'Innovation & Transformation Digitale',
    subdomain: 'Conduite du changement',
    sourceESD: true,
    level: 'Bac +5 (Ressources Humaines, Psychologie du Travail ou Management)',
    salary: '550 000 - 1 700 000 FCFA / mois (Sénégal) • ~42k€ - 70k€ (France/Europe)',
    simpleDefinition: 'Quand une entreprise adopte un nouvel outil informatique, il aide les salariés à ne pas avoir peur, à apprendre à l’utiliser avec le sourire et sans stress.',
    shortDescription: 'Accompagne les équipes humaines pour faciliter l’adoption des nouveaux outils technologiques et vaincre les résistances.',
    skills: {
      technical: ['Méthodologies de conduite du changement (ADKAR, Kotter)', 'Conception de plans de formation et guides pratiques', 'Communication interne bienveillante', 'Mesure de l’adoption logicielle'],
      analytical: ['Cartographie des freins et des réticences psychologiques'],
      creative: ['Ateliers interactifs et ludiques d’apprentissage'],
      human: ['Écoute profonde, empathie, patience et pédagogie'],
      tools: ['Miro', 'Logiciels d’e-learning', 'PowerPoint', 'Notion']
    },
    relatedJobSlugs: ['consultant-strategie-digitale', 'chief-digital-officer-cdo'],
    interests: ['gestion-projet', 'droit-justice']
  })
];

console.log(`Lot complémentaire créé : ${EXTRA_JOBS.length} métiers.`);

// Fusion avec le lot existant (59 + EXTRA_JOBS)
const baseJobs = require('./build_all_digital_jobs.js');
// Utilisation des jobs de build_all_digital_jobs via lecture directe du premier script
// Pour éviter la redondance, nous assemblons tous les jobs dans une map par slug pour garantir l'absence absolue de doublons
const mapBySlug = new Map();

// Lire le fichier orientation-digital-data.js généré par build_all_digital_jobs.js
const currentGeneratedPath = path.join(__dirname, '../frontend/js/orientation-digital-data.js');
const currentRaw = fs.readFileSync(currentGeneratedPath, 'utf8');

// Extraire le tableau DIGITAL_JOBS du fichier
const startMarker = 'const DIGITAL_JOBS = ';
const endMarker = ';\n\n  // Exposition globale';
const sIdx = currentRaw.indexOf(startMarker);
const eIdx = currentRaw.indexOf(endMarker);

if (sIdx !== -1 && eIdx !== -1) {
  const jsonStr = currentRaw.substring(sIdx + startMarker.length, eIdx);
  const parsedExisting = JSON.parse(jsonStr);
  console.log(`Métiers existants récupérés : ${parsedExisting.length}`);
  
  parsedExisting.forEach(j => {
    mapBySlug.set(j.slug, j);
  });
}

// Ajouter le lot complémentaire
EXTRA_JOBS.forEach(j => {
  if (!mapBySlug.has(j.slug)) {
    mapBySlug.set(j.slug, j);
  } else {
    // Enrichissement si déjà présent
    mapBySlug.set(j.slug, Object.assign({}, mapBySlug.get(j.slug), j));
  }
});

const ALL_DIGITAL_JOBS = Array.from(mapBySlug.values());
console.log(`Total final consolidé de métiers numériques : ${ALL_DIGITAL_JOBS.length}`);

// Génération finale du fichier JavaScript
const finalContent = `/**
 * CATALOGUE DES MÉTIERS DU NUMÉRIQUE ENRICHI
 * Le Monde du Travail — 13 Pôles d'Excellence & Référentiel Pédagogique
 * Source documentaire : École Supérieure du Digital (ESD) + Référentiels Métiers Internationaux
 * Total métiers documentés : ${ALL_DIGITAL_JOBS.length} fiches détaillées
 */

(function () {
  'use strict';

  const DIGITAL_DOMAINS = ${JSON.stringify(DIGITAL_DOMAINS, null, 2)};

  const DIGITAL_JOBS = ${JSON.stringify(ALL_DIGITAL_JOBS, null, 2)};

  const OrientationDigitalData = {
    DOMAINS: DIGITAL_DOMAINS,
    JOBS: DIGITAL_JOBS,
    getDomains: function () {
      return DIGITAL_DOMAINS;
    },
    getJobs: function () {
      return DIGITAL_JOBS;
    },
    getJobBySlug: function (slug) {
      if (!slug) return null;
      return DIGITAL_JOBS.find(j => j.slug === slug || j.id === slug) || null;
    }
  };

  // Exposition pour navigateur et Node.js
  if (typeof window !== 'undefined') {
    window.OrientationDigitalData = OrientationDigitalData;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = OrientationDigitalData;
  }

  if (typeof console !== 'undefined' && console.log) {
    console.log('✅ OrientationDigitalData : ${ALL_DIGITAL_JOBS.length} métiers du numérique initialisés sur ${DIGITAL_DOMAINS.length} domaines d\\'excellence.');
  }
})();
`;

fs.writeFileSync(currentGeneratedPath, finalContent, 'utf8');
console.log('Catalogue numérique consolidé avec succès dans :', currentGeneratedPath);
console.log('Taille finale :', Math.round(fs.statSync(currentGeneratedPath).size / 1024), 'Ko');
