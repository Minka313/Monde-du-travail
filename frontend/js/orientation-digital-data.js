/**
 * CATALOGUE DES MÉTIERS DU NUMÉRIQUE ENRICHI
 * Le Monde du Travail — 13 Pôles d'Excellence & Référentiel Pédagogique
 * Source documentaire : École Supérieure du Digital (ESD) + Référentiels Métiers Internationaux
 * Total métiers documentés : 103 fiches détaillées
 */

(function () {
  'use strict';

  const DIGITAL_DOMAINS = [
  {
    "id": "dev-web-logiciel",
    "name": "Informatique & Développement",
    "icon": "💻",
    "description": "Conception, programmation et déploiement de sites web, applications mobiles, logiciels d’entreprise et architectures logicielles.",
    "subdomains": [
      "Développement web",
      "Développement Front-end",
      "Développement Back-end",
      "Développement Full-Stack",
      "Développement mobile",
      "Génie logiciel & Architecture"
    ]
  },
  {
    "id": "intelligence-artificielle",
    "name": "Intelligence Artificielle & Machine Learning",
    "icon": "🤖",
    "description": "Création d’algorithmes apprenants, modèles de langage (LLM), vision par ordinateur et solutions d’IA générative.",
    "subdomains": [
      "Machine Learning",
      "Deep Learning",
      "IA Générative & LLM",
      "Prompt Engineering",
      "AI Engineering",
      "MLOps"
    ]
  },
  {
    "id": "data-analytics",
    "name": "Data & Analytics",
    "icon": "📊",
    "description": "Collecte, modélisation, analyse statistique et valorisation des données massives pour éclairer la prise de décision stratégique.",
    "subdomains": [
      "Data Analysis",
      "Data Science",
      "Data Engineering",
      "Business Intelligence",
      "Data Architecture & Big Data",
      "Web & Social Media Analytics"
    ]
  },
  {
    "id": "cybersecurite",
    "name": "Cybersécurité & Résilience",
    "icon": "🔐",
    "description": "Protection des systèmes d’information, détection d’intrusions, sécurité applicative et résilience face aux cyberattaques.",
    "subdomains": [
      "SOC & Détection d’incidents",
      "Sécurité offensive & Pentest",
      "Sécurité applicative & Cloud",
      "Gouvernance, Risques & Conformité (GRC)",
      "DevSecOps"
    ]
  },
  {
    "id": "cloud-infrastructure",
    "name": "Cloud & Infrastructure",
    "icon": "☁️",
    "description": "Conception, déploiement et supervision des architectures serveurs cloud, réseaux sécurisés et centres de données.",
    "subdomains": [
      "Cloud Architecture",
      "Systèmes & Réseaux",
      "Infrastructure Cloud",
      "Solutions Architecture"
    ]
  },
  {
    "id": "devops-sre",
    "name": "DevOps & Platform Engineering",
    "icon": "⚙️",
    "description": "Automatisation des pipelines de livraison (CI/CD), conteneurisation, fiabilité des systèmes et ingénierie de plateforme.",
    "subdomains": [
      "CI/CD & Automatisation",
      "Site Reliability Engineering (SRE)",
      "Platform Engineering",
      "Conteneurs & Kubernetes"
    ]
  },
  {
    "id": "ux-ui-product-design",
    "name": "UX/UI & Product Design",
    "icon": "🎨",
    "description": "Recherche utilisateur, ergonomie des parcours, conception visuelle d’interfaces numériques et design systems.",
    "subdomains": [
      "UX Research & Ergonomie",
      "UI Design & Interfaces",
      "UX/UI Design",
      "Product Design",
      "Design Systems"
    ]
  },
  {
    "id": "design-digital-creation",
    "name": "Design Digital & Création Graphique",
    "icon": "🖌️",
    "description": "Direction artistique digitale, création de chartes graphiques numériques, motion design et créations 3D immersives.",
    "subdomains": [
      "Webdesign & Digital Design",
      "Direction Artistique Web",
      "Motion Design & Animation 3D",
      "Creative Technology"
    ]
  },
  {
    "id": "audiovisuel-contenu",
    "name": "Audiovisuel & Digital Content",
    "icon": "🎬",
    "description": "Production audiovisuelle pour les médias numériques, vidéo, podcasts et création de contenus percutants.",
    "subdomains": [
      "Création de contenu digital",
      "Production vidéo & audiovisuelle",
      "Communication digitale multimédia"
    ]
  },
  {
    "id": "marketing-digital",
    "name": "Marketing Digital & Acquisition",
    "icon": "📣",
    "description": "Stratégies d’acquisition en ligne, référencement naturel et payant (SEO/SEA), growth hacking et engagement sur les réseaux sociaux.",
    "subdomains": [
      "SEO & Référencement naturel",
      "SEA & Publicité en ligne",
      "Growth & Acquisition",
      "Social Media Management & Community",
      "Content Marketing"
    ]
  },
  {
    "id": "e-commerce",
    "name": "E-commerce & Marketplace",
    "icon": "🛒",
    "description": "Pilotage de boutiques de vente en ligne, optimisation du tunnel de conversion, gestion des marketplaces et catalogue produit.",
    "subdomains": [
      "E-commerce Management",
      "Développement Produit E-commerce",
      "Marketplace & Conversion"
    ]
  },
  {
    "id": "product-business",
    "name": "Product Management & Digital Business",
    "icon": "📦",
    "description": "Définition de la vision produit, priorisation des fonctionnalités agiles, analyse d’affaires et pilotage de la relation client.",
    "subdomains": [
      "Product Management & Ownership",
      "Business Analysis",
      "Customer Success & CRM",
      "Direction de Projets Digitaux"
    ]
  },
  {
    "id": "innovation-transformation",
    "name": "Innovation & Transformation Digitale",
    "icon": "🚀",
    "description": "Accompagnement du changement numérique dans les organisations, stratégie d’innovation et modernisation des processus.",
    "subdomains": [
      "Stratégie digitale & CDO",
      "Conduite du changement",
      "Management de l’innovation"
    ]
  }
];

  const DIGITAL_JOBS = [
  {
    "id": "dev-fullstack",
    "slug": "developpeur-fullstack",
    "title": "Développeur Full-Stack",
    "aliases": [
      "Full-Stack Developer",
      "Développeur Web & Mobile Fullstack",
      "Ingénieur Full Stack",
      "Développeur Polyvalent"
    ],
    "icon": "💻",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "Informatique & Développement",
    "subdomain": "Développement Full-Stack",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "450 000 - 1 400 000 FCFA / mois (Sénégal) • ~38k€ - 60k€ (France/Europe)",
    "simpleDefinition": "Un développeur Full-Stack est capable de créer une application de A à Z : aussi bien la partie visible avec laquelle l’utilisateur interagit (l’écran, les boutons, les menus) que les coulisses invisibles (les serveurs, les calculs et les bases de données).",
    "shortDescription": "Conçoit et programme les applications web de bout en bout, de l’interface utilisateur intuitive (Front-end) aux serveurs et bases de données (Back-end).",
    "longDescription": "Le développeur Full-stack est le profil polyvalent par excellence dans les équipes technologiques. Il comprend l’ensemble de la chaîne de création logicielle : il sait intégrer une maquette graphique élégante et réactive en JavaScript/React, tout en construisant des APIs sécurisées en Python, Node.js ou Java reliées à des bases de données SQL ou NoSQL. Dans une startup ou une PME, sa vision globale est un atout stratégique pour prototyper rapidement des fonctionnalités.",
    "mainObjective": "Créer des applications web et logicielles complètes, sécurisées, rapides et agréables à utiliser.",
    "saviezVous": {
      "statut": "en_transformation",
      "fait": "L'adoption des assistants de code IA accélère de 35 % à 50 % la production des fonctionnalités courantes selon plusieurs études d'ingénierie logicielle.",
      "pourquoi": "Les outils génératifs automatisent les tâches répétitives comme les tests unitaires et le boilerplate. Le rôle du développeur évolue vers la supervision d'architecture, la sécurité applicative, la validation critique du code et la compréhension fine des logiques métier.",
      "a_retenir": "L'expertise se déplace de la simple saisie de syntaxe vers la conception système globale et le contrôle qualité exigeant."
    },
    "companyRole": "Pilier technique transversal faisant le lien entre les besoins utilisateurs, le design et l’infrastructure serveur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "JavaScript / TypeScript",
        "React / Vue / Next.js",
        "Node.js / Python / Java",
        "Bases SQL (PostgreSQL, MySQL) & NoSQL (MongoDB)",
        "Conception d’APIs REST & GraphQL",
        "Git, Docker & Déploiement Cloud"
      ],
      "analytical": [
        "Résolution logique de bugs complexes",
        "Optimisation des temps de réponse et performances",
        "Compréhension globale de l’architecture logicielle"
      ],
      "creative": [
        "Capacité à transformer une idée abstraite en prototype interactif",
        "Sensibilité à l’ergonomie utilisateur"
      ],
      "human": [
        "Autonomie et curiosité technologique",
        "Communication claire avec les profils non techniques",
        "Esprit d’équipe agile"
      ],
      "tools": [
        "VS Code",
        "Git / GitHub / GitLab",
        "Postman",
        "Docker",
        "Vercel / Supabase / AWS"
      ]
    },
    "specializations": [
      "Front-end First",
      "Back-end First",
      "Architecture Cloud & Serverless",
      "Performance Web"
    ],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Sciences & Informatique (NSI)",
        "Anglais technique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, T, L (avec logique)",
          "desc": "Bases solides en mathématiques, logique et pratique de l’anglais."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT Informatique / Licence Génie Logiciel / Bootcamps certifiants",
          "desc": "Apprentissage approfondi des algorithmes, structures de données et langages web."
        },
        {
          "step": "Bac +5",
          "title": "Master Informatique ou Diplôme d’Ingénieur",
          "desc": "Architecture distribuée, sécurité applicative et gestion de projet d’envergure."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "ESMT Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Simplon Sénégal & Sonatel Academy",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [
        "AWS Certified Developer Associate",
        "Meta Full-Stack Developer Certificate"
      ],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups tech & FinTech",
        "Télécoms & Mobile Money",
        "Sociétés de Services Numériques (ESN)",
        "Agences web",
        "Secteur bancaire"
      ],
      "employerTypes": [
        "Startups en croissance",
        "Entreprises de services numériques",
        "Grandes entreprises télécoms",
        "Freelance international remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Développeur Full-stack Junior ➔ Confirmé ➔ Lead Tech ➔ Software Architect ➔ Directeur Technique (CTO) / Fondateur de Startup",
      "pros": "Très forte employabilité, possibilité réelle de travailler en 100% télétravail pour des entreprises internationales, salaires attractifs.",
      "cons": "Nécessite une veille permanente car les technologies, frameworks et outils évoluent rapidement chaque année."
    },
    "gettingStarted": {
      "beginnerProject": "Créer un site personnel ou un blog simple avec HTML, CSS et JavaScript vanilla.",
      "intermediateProject": "Développer une application Todo list ou de suivi des dépenses connectée à une base de données Supabase ou Firebase.",
      "advancedProject": "Bâtir une plateforme e-commerce complète avec panier, authentification sécurisée et paiement par API (ex: PayDunya, Stripe).",
      "portfolioIdeas": [
        "Présenter un dépôt GitHub soigné avec README explicatif, démo en ligne sur Vercel et code propre."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Génération de squelettes de code, auto-complétion intelligente (Copilot, Cursor), écriture de tests unitaires standards.",
      "automatedTasks": "Débogage de syntaxe basique, conversion entre formats de données (JSON/CSV), génération de documentation brute.",
      "crucialHumanSkills": "Compréhension du besoin métier réel, choix d’architecture pérenne, discernement sécuritaire et arbitrage de compromis techniques.",
      "emergingSpecializations": "Intégration d’APIs d’IA générative dans les applications existantes et utilisation d’outils d’orchestration de modèles."
    },
    "africaContext": {
      "localSectors": [
        "FinTech (Wave, Orange Money, InTouch)",
        "AgriTech & Logistique locale",
        "E-commerce panafricain"
      ],
      "employerTypes": [
        "Startups de la tech sénégalaise",
        "Filiales locales de multinationales",
        "Missions de consulting en freelance remote"
      ],
      "remoteWork": "Forte ouverture sur le télétravail avec des entreprises basées en France, au Canada, aux États-Unis ou dans la sous-région ouest-africaine.",
      "entrepreneurship": "Nombreuses opportunités de digitaliser les commerces, cliniques et services administratifs de proximité.",
      "senegalInsight": "Dakar s’affirme comme un hub numérique majeur d’Afrique de l’Ouest avec des opportunités croissantes portées par le Pôle de Diamniadio."
    },
    "relatedJobSlugs": [
      "developpeur-frontend",
      "developpeur-backend",
      "software-engineer",
      "ingenieur-ia",
      "devops-engineer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "technologie-code",
      "resoudre-problemes",
      "creer-designer"
    ]
  },
  {
    "id": "dev-frontend",
    "slug": "developpeur-frontend",
    "title": "Développeur Front-End",
    "aliases": [
      "Front-End Developer",
      "Intégrateur Front",
      "Développeur UI / Client-side"
    ],
    "icon": "🖥️",
    "image": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "Informatique & Développement",
    "subdomain": "Développement Front-end",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +2 à Bac +5",
    "salary": "400 000 - 1 200 000 FCFA / mois (Sénégal) • ~36k€ - 55k€ (France/Europe)",
    "simpleDefinition": "Le développeur Front-End donne vie aux maquettes graphiques : il programme tout ce qui s’affiche sur l’écran de l’ordinateur ou du téléphone (animations, boutons, formulaires, fluidité de navigation).",
    "shortDescription": "Spécialiste de l’interface utilisateur, il transforme les maquettes de design en pages web interactives, rapides et accessibles sur tous les écrans.",
    "longDescription": "Le développeur Front-End est l’artisan de l’expérience utilisateur numérique. Il maîtrise les subtilités des navigateurs modernes, du responsive design (tablette, mobile, desktop) et des bibliothèques réactives comme React, Vue.js ou Angular. Il veille scrupuleusement aux performances de chargement, à l’accessibilité numérique pour les personnes en situation de handicap, et à la fidélité visuelle absolue par rapport aux maquettes créées par les UI/UX Designers.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "HTML5 sémantique & CSS3 avancé",
        "JavaScript moderne (ES6+) & TypeScript",
        "React / Next.js / Vue.js",
        "Responsive Web Design & Mobile First",
        "Accessibilité web (WCAG / RGAA)",
        "Optimisation des performances web (Core Web Vitals)"
      ],
      "analytical": [
        "Débogage dans les DevTools du navigateur",
        "Analyse des temps de rendu et de fluidité des animations"
      ],
      "creative": [
        "Sens aigu du détail visuel et des micro-animations",
        "Respect scrupuleux des grilles graphiques et typographiques"
      ],
      "human": [
        "Collaboration étroite avec les UI/UX designers",
        "Patience et rigueur d’intégration"
      ],
      "tools": [
        "VS Code",
        "Chrome DevTools",
        "Figma (lecture et inspection)",
        "Git & GitHub",
        "Tailwind CSS / Sass"
      ]
    },
    "specializations": [
      "Performance & Core Web Vitals",
      "Accessibilité numérique (a11y)",
      "Design Systems & Composants",
      "Animation Web (GSAP, Three.js)"
    ],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "developpeur-fullstack",
      "integrateur-web",
      "ui-designer",
      "product-designer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "creer-designer",
      "technologie-code"
    ]
  },
  {
    "id": "dev-backend",
    "slug": "developpeur-backend",
    "title": "Développeur Back-End",
    "aliases": [
      "Back-End Developer",
      "Développeur Serveur & API",
      "Ingénieur Backend"
    ],
    "icon": "⚙️",
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "Informatique & Développement",
    "subdomain": "Développement Back-end",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "450 000 - 1 500 000 FCFA / mois (Sénégal) • ~40k€ - 62k€ (France/Europe)",
    "simpleDefinition": "Le développeur Back-End s’occupe de la machinerie invisible du web : il gère le stockage des données, la sécurité des connexions, les calculs et les échanges avec d’autres systèmes (paiement, SMS, notifications).",
    "shortDescription": "Bâtit le moteur et le cerveau des plateformes web : serveurs, logique métier, bases de données, sécurité des flux et APIs.",
    "longDescription": "Si une application était un restaurant, le développeur Back-End serait le chef d’orchestre des cuisines : il veille à ce que les commandes reçues soient traitées vite et sans erreur, que les ingrédients (données) soient bien conservés dans le réfrigérateur (base de données) et que personne d’indésirable ne puisse entrer. Il écrit des programmes performants capables d’encaisser des millions de requêtes par seconde sans flancher.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Node.js, Python (Django/FastAPI), Java (Spring Boot) ou Go",
        "Bases de données relationnelles (PostgreSQL) et NoSQL (Redis, MongoDB)",
        "Conception d’APIs RESTful et GraphQL",
        "Sécurité web (OWASP, chiffrement, JWT, OAuth2)",
        "Architecture microservices et serverless",
        "Gestion de cache et optimisation des requêtes"
      ],
      "analytical": [
        "Algorithmique avancée et modélisation de données",
        "Gestion de la concurrence et montée en charge (scalabilité)"
      ],
      "creative": [
        "Conception de schémas de bases de données élégants et évolutifs"
      ],
      "human": [
        "Rigueur absolue sur la sécurité",
        "Clarté dans la documentation des APIs"
      ],
      "tools": [
        "Postman / Insomnia",
        "Docker",
        "DBeaver / pgAdmin",
        "Linux / Bash",
        "GitLab CI / GitHub Actions"
      ]
    },
    "specializations": [
      "APIs & Microservices",
      "Bases de données & Haute Performance",
      "Sécurité & Chiffrement",
      "Systèmes distribués"
    ],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "developpeur-fullstack",
      "data-engineer",
      "devops-engineer",
      "cloud-engineer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "resoudre-problemes",
      "technologie-code"
    ]
  },
  {
    "id": "dev-web",
    "slug": "developpeur-web",
    "title": "Développeur Web",
    "aliases": [
      "Web Developer",
      "Programmeur Web"
    ],
    "icon": "🌐",
    "image": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "Informatique & Développement",
    "subdomain": "Développement web",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +2 à Bac +3",
    "salary": "350 000 - 900 000 FCFA / mois (Sénégal) • ~34k€ - 48k€ (France/Europe)",
    "simpleDefinition": "Le développeur web crée et met à jour des sites internet fonctionnels, clairs et adaptés aux besoins des clients et des internautes.",
    "shortDescription": "Programme et assemble les fonctionnalités d’un site web, de la vitrine interactive au portail dynamique avec base de données.",
    "longDescription": "Profil fondamental de l’économie numérique, le développeur web maîtrise les standards du Web pour concevoir des sites institutionnels, marchands ou applicatifs. Il configure les hébergements, personnalise des systèmes de gestion de contenu (CMS) ou développe des scripts sur mesure pour répondre aux objectifs commerciaux et informatifs de son organisation.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "HTML5, CSS3, JavaScript",
        "PHP / MySQL ou Node.js",
        "CMS (WordPress, Strapi)",
        "Notions de SEO technique",
        "Intégration d’APIs tierces (formulaires, paiements, cartographies)"
      ],
      "analytical": [
        "Résolution rapide des anomalies de compatibilité",
        "Optimisation de la vitesse de chargement"
      ],
      "creative": [
        "Mise en page dynamique et harmonieuse"
      ],
      "human": [
        "Écoute des besoins clients",
        "Pédagogie et réactivité"
      ],
      "tools": [
        "VS Code",
        "Git",
        "FileZilla / SSH",
        "cPanel / Vercel",
        "WordPress"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "developpeur-fullstack",
      "integrateur-web",
      "webmaster"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "technologie-code",
      "creer-designer"
    ]
  },
  {
    "id": "integrateur-web",
    "slug": "integrateur-web-developpeur-integrateur",
    "title": "Intégrateur Web & Développeur Intégrateur",
    "aliases": [
      "Intégrateur HTML/CSS",
      "Frontend Integrator",
      "Développeur Intégrateur"
    ],
    "icon": "📐",
    "image": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "Informatique & Développement",
    "subdomain": "Développement web",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +2 à Bac +3",
    "salary": "300 000 - 750 000 FCFA / mois (Sénégal) • ~32k€ - 44k€ (France/Europe)",
    "simpleDefinition": "L’intégrateur web prend les dessins et maquettes des graphistes pour les transformer en code HTML et CSS parfaitement fidèle et navigable.",
    "shortDescription": "Passerelle entre le graphisme et la technique, il traduit fidèlement les maquettes graphiques en pages web responsives et respectueuses des normes d’accessibilité.",
    "longDescription": "Spécialiste de la structure et du style, l’intégrateur garantit que le rendu visuel imaginé par le designer s’affiche impeccablement sur un vieil écran d’ordinateur comme sur le dernier smartphone pliable. Il accorde une importance critique à la sémantique HTML, aux contrastes de couleurs, au poids des images et à la conformité aux standards du W3C.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Maîtrise experte de HTML5 et CSS3 (Flexbox, CSS Grid)",
        "Animations CSS fluides",
        "Préprocesseurs Sass / PostCSS",
        "Bases de JavaScript pour les interactions",
        "Normes d’accessibilité WCAG"
      ],
      "analytical": [
        "Contrôle qualité multi-écrans et multi-navigateurs"
      ],
      "creative": [
        "Sensibilité esthétique et respect du pixel-perfect"
      ],
      "human": [
        "Rigueur, souci du détail et patience"
      ],
      "tools": [
        "Figma",
        "VS Code",
        "Git",
        "Lighthouse",
        "BrowserStack"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "developpeur-frontend",
      "webdesigner",
      "developpeur-web"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "creer-designer",
      "technologie-code"
    ]
  },
  {
    "id": "architecte-web",
    "slug": "architecte-web",
    "title": "Architecte Web",
    "aliases": [
      "Web Architect",
      "Lead Architecte Solutions Web",
      "Architecte Technique Web"
    ],
    "icon": "🏛️",
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "Informatique & Développement",
    "subdomain": "Génie logiciel & Architecture",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +5 (Ingénieur ou Master)",
    "salary": "900 000 - 2 500 000 FCFA / mois (Sénégal) • ~65k€ - 95k€ (France/Europe)",
    "simpleDefinition": "L’architecte web conçoit les plans généraux des très grandes plateformes internet pour s’assurer qu’elles résisteront à des millions d’utilisateurs et dureront des années sans s’écrouler.",
    "shortDescription": "Définit les orientations techniques, la structure globale, les choix de technologies et les normes de sécurité des grands systèmes web.",
    "longDescription": "Fort d’une solide expérience de développeur senior, l’architecte web prend de la hauteur pour penser la viabilité technique à long terme. Il choisit les langages, les serveurs, les formats d’échanges de données et les protocoles de sécurité. Il guide les équipes de développeurs, veille à la scalabilité (capacité à grandir sans ralentir) et anticipe les évolutions technologiques futures.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Architectures distribuées & microservices",
        "Cloud computing (AWS, Azure, GCP)",
        "Haute disponibilité et reprise après sinistre (DRP)",
        "Sécurité applicative et chiffrement",
        "Gouvernance des APIs",
        "Bases de données massives (SQL sharding, NoSQL)"
      ],
      "analytical": [
        "Vision systémique et capacité d’anticipation des goulots d’étranglement"
      ],
      "creative": [
        "Résolution innovante de contraintes techniques complexes"
      ],
      "human": [
        "Leadership d’influence, pédagogie et négociation avec les directions"
      ],
      "tools": [
        "Diagrammes d’architecture (UML, C4 model)",
        "Docker & Kubernetes",
        "Terraform",
        "Kafka / RabbitMQ"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "software-architect",
      "cloud-architect",
      "developpeur-fullstack"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "resoudre-problemes",
      "technologie-code"
    ]
  },
  {
    "id": "webmaster",
    "slug": "webmaster",
    "title": "Webmaster",
    "aliases": [
      "Administrateur de Site Web",
      "Gestionnaire de Site Web",
      "Webmaster Technique & Éditorial"
    ],
    "icon": "🛠️",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "Informatique & Développement",
    "subdomain": "Développement web",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +2 à Bac +3",
    "salary": "300 000 - 700 000 FCFA / mois (Sénégal) • ~30k€ - 42k€ (France/Europe)",
    "simpleDefinition": "Le webmaster veille au bon fonctionnement quotidien d’un site web : mise à jour des textes, sauvegarde des données, vérification des liens et résolution des petits soucis techniques.",
    "shortDescription": "Gère la maintenance, les mises à jour de contenu, la sécurité de base et la disponibilité permanente des sites internet.",
    "longDescription": "Véritable couteau suisse du web, le webmaster cumule des compétences techniques (gestion de nom de domaine, SSL, hébergement, petits correctifs de code) et éditoriales (publication d’articles, optimisation d’images, vérification du SEO). Il est le garant de la fraîcheur et du bon fonctionnement du site au jour le jour.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "CMS (WordPress, Drupal)",
        "HTML/CSS de base",
        "Gestion de noms de domaine et DNS",
        "Outils d’analyse d’audience (Google Analytics)",
        "Sauvegardes et sécurité des accès"
      ],
      "analytical": [
        "Surveillance des indicateurs de disponibilité et de fréquentation"
      ],
      "creative": [
        "Mise en valeur attrayante des contenus"
      ],
      "human": [
        "Polyvalence, réactivité et sens du service"
      ],
      "tools": [
        "WordPress",
        "Google Search Console",
        "FileZilla",
        "Canva / Photoshop (retouche d’images)"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "developpeur-web",
      "content-manager",
      "integrateur-web"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "technologie-code",
      "creer-designer"
    ]
  },
  {
    "id": "developpeur-informatique",
    "slug": "developpeur-informatique",
    "title": "Développeur Informatique",
    "aliases": [
      "Programmeur Informatique",
      "Développeur Logiciel Polyvalent",
      "Analyste Développeur"
    ],
    "icon": "⌨️",
    "image": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "Informatique & Développement",
    "subdomain": "Génie logiciel & Architecture",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +2 à Bac +5",
    "salary": "400 000 - 1 200 000 FCFA / mois (Sénégal) • ~36k€ - 54k€ (France/Europe)",
    "simpleDefinition": "Le développeur informatique écrit des lignes d’instructions dans des langages de programmation pour créer des logiciels utilisables par des entreprises ou des particuliers.",
    "shortDescription": "Conçoit, code, teste et déploie des applications logicielles pour automatiser des tâches ou répondre aux besoins métiers d’une organisation.",
    "longDescription": "Figure centrale de l’informatique, le développeur analyse les besoins des utilisateurs, choisit les bonnes structures algorithmiques et traduit la logique en code informatique robuste. Il travaille aussi bien sur des applications de gestion d’entreprise que sur des outils internes, des plateformes bancaires ou des logiciels scientifiques.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Java, C#, Python, C++ ou PHP",
        "Bases de données SQL",
        "Algorithmique et structures de données",
        "Tests unitaires et d’intégration",
        "Modélisation UML"
      ],
      "analytical": [
        "Rigueur d’esprit et décomposition de problèmes complexes"
      ],
      "creative": [
        "Optimisation de l’efficacité des algorithmes"
      ],
      "human": [
        "Autonomie, discipline intellectuelle et travail en équipe"
      ],
      "tools": [
        "IntelliJ IDEA / Eclipse / VS Code",
        "Git",
        "Maven / Gradle",
        "MySQL / PostgreSQL"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "software-engineer",
      "concepteur-developpeur",
      "developpeur-fullstack"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "resoudre-problemes",
      "technologie-code"
    ]
  },
  {
    "id": "software-engineer",
    "slug": "software-engineer",
    "title": "Ingénieur Logiciel (Software Engineer)",
    "aliases": [
      "Software Engineer",
      "Ingénieur d’Études et Développement",
      "Génie Logiciel"
    ],
    "icon": "🧠",
    "image": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "Informatique & Développement",
    "subdomain": "Génie logiciel & Architecture",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +5 (Diplôme d’Ingénieur ou Master)",
    "salary": "600 000 - 1 800 000 FCFA / mois (Sénégal) • ~45k€ - 75k€ (France/Europe)",
    "simpleDefinition": "Un ingénieur logiciel applique les principes scientifiques et de l’ingénierie pour créer des systèmes logiciels fiables, sécurisés et capables de durer dans le temps.",
    "shortDescription": "Applique une démarche d’ingénierie rigoureuse à la conception, la fabrication et l’évolution de systèmes logiciels complexes.",
    "longDescription": "Au-delà de la simple écriture de code, le Software Engineer s’intéresse au cycle de vie complet du logiciel : conception architecturale, robustesse face aux pannes, performances à grande échelle, automatisations des tests et maintenabilité sur plusieurs décennies. Il met en place des patrons de conception (Design Patterns) et garantit la qualité industrielle des produits informatiques.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Génie logiciel & Design Patterns (SOLID)",
        "Langages typés avancés (Go, Rust, TypeScript, Java, C++)",
        "Architecture logicielle & DDD (Domain-Driven Design)",
        "Tests automatisés (TDD, BDD, tests de charge)",
        "Pipelines CI/CD & Déploiements automatisés"
      ],
      "analytical": [
        "Pensée systémique et analyse de la complexité algorithmique"
      ],
      "creative": [
        "Élégance de la conception logicielle"
      ],
      "human": [
        "Capacité à encadrer techniquement des développeurs juniors",
        "Communication claire des choix techniques"
      ],
      "tools": [
        "Git",
        "Docker",
        "SonarQube",
        "Linux",
        "Kubernetes"
      ]
    },
    "specializations": [
      "Distributed Systems",
      "Backend Systems",
      "Embedded Software",
      "High-Performance Computing"
    ],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "software-architect",
      "developpeur-fullstack",
      "devops-engineer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "resoudre-problemes",
      "technologie-code"
    ]
  },
  {
    "id": "concepteur-developpeur",
    "slug": "concepteur-developpeur",
    "title": "Concepteur Développeur",
    "aliases": [
      "Lead Concepteur",
      "Analyste Concepteur Développeur"
    ],
    "icon": "📝",
    "image": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "Informatique & Développement",
    "subdomain": "Génie logiciel & Architecture",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "450 000 - 1 300 000 FCFA / mois (Sénégal) • ~38k€ - 58k€ (France/Europe)",
    "simpleDefinition": "Il conçoit les plans détaillés de l’application avant de la programmer, en s’assurant que chaque fonction correspond parfaitement à ce dont les utilisateurs ont besoin.",
    "shortDescription": "Traduit les besoins fonctionnels en spécifications techniques détaillées et pilote la réalisation du code correspondant.",
    "longDescription": "Le concepteur développeur intervient en amont du codage pur. Il échange avec les responsables métier pour rédiger les dossiers de conception, modélise les bases de données et les flux de travail, puis réalise ou supervise le développement. C’est un rôle charnière entre la stratégie métier et l’exécution informatique.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Modélisation (UML, Merise)",
        "Développement objet (Java, C#, Python)",
        "Bases de données relationnelles",
        "Rédaction de spécifications techniques",
        "Méthodes Agiles (Scrum)"
      ],
      "analytical": [
        "Esprit de synthèse et capacité à formaliser des flux complexes"
      ],
      "creative": [
        "Conception de solutions fonctionnelles ergonomiques"
      ],
      "human": [
        "Excellente écoute et capacité de vulgarisation"
      ],
      "tools": [
        "Jira / Confluence",
        "Enterprise Architect / Draw.io",
        "Git",
        "Postman"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "concepteur-dapplications-informatiques",
      "software-engineer",
      "business-analyst"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "resoudre-problemes",
      "technologie-code"
    ]
  },
  {
    "id": "concepteur-applications",
    "slug": "concepteur-dapplications-informatiques",
    "title": "Concepteur d’Applications Informatiques",
    "aliases": [
      "Concepteur d’Applications",
      "Architecte Applicatif Junior"
    ],
    "icon": "📱",
    "image": "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "Informatique & Développement",
    "subdomain": "Génie logiciel & Architecture",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "450 000 - 1 350 000 FCFA / mois (Sénégal) • ~38k€ - 60k€ (France/Europe)",
    "simpleDefinition": "Il imagine l’organisation générale d’une application numérique (ordinateur ou mobile) pour qu’elle soit fluide, pratique et sans bug pour les usagers.",
    "shortDescription": "Définit l’architecture et l’ergonomie fonctionnelle des applications numériques d’entreprise ou grand public.",
    "longDescription": "Ce professionnel s’assure que l’application répond aux contraintes des utilisateurs finaux tout en s’intégrant harmonieusement dans le système informatique existant de l’entreprise. Il élabore les maquettes logiques, définit les règles de gestion et encadre le cycle de fabrication.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Architecture applicative",
        "Conception d’interfaces applicatives",
        "APIs et connecteurs de données",
        "Programmation web ou mobile moderne"
      ],
      "analytical": [
        "Anticipation des cas limites et erreurs d’utilisation"
      ],
      "creative": [
        "Simplification de processus fastidieux pour l’usager"
      ],
      "human": [
        "Pédagogie et esprit collaboratif"
      ],
      "tools": [
        "Figma",
        "VS Code",
        "Swagger / OpenAPI",
        "Miro"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "concepteur-developpeur",
      "product-owner",
      "developpeur-fullstack"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "resoudre-problemes",
      "creer-designer",
      "technologie-code"
    ]
  },
  {
    "id": "software-architect",
    "slug": "software-architect",
    "title": "Architecte Logiciel (Software Architect)",
    "aliases": [
      "Software Architect",
      "Architecte Système Logiciel",
      "Lead Architect"
    ],
    "icon": "🏗️",
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "Informatique & Développement",
    "subdomain": "Génie logiciel & Architecture",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +5 (Ingénieur) + Expérience confirmée",
    "salary": "1 000 000 - 2 600 000 FCFA / mois (Sénégal) • ~70k€ - 100k€ (France/Europe)",
    "simpleDefinition": "C’est l’architecte en chef qui dessine la structure invisible des grands logiciels pour qu’ils soient ultra-rapides, incassables et faciles à améliorer par des dizaines de développeurs.",
    "shortDescription": "Prend les décisions technologiques de haut niveau qui déterminent la viabilité, la sécurité et la capacité d’évolution des logiciels majeurs.",
    "longDescription": "L’architecte logiciel définit les normes, les cadres techniques et les patrons que l’ensemble des développeurs doivent suivre. Il arbitre les choix cornéliens : faut-il utiliser une base de données SQL ou NoSQL ? Faut-il découper en microservices ou garder un monolithe modulaire ? Ses choix impactent directement la vitesse et la sécurité de l’entreprise.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Microservices, Event-Driven Architecture, CQRS",
        "Sécurité des systèmes distribués",
        "Performance et tolérance aux pannes",
        "Gouvernance technologique"
      ],
      "analytical": [
        "Évaluation des compromis coûts / performances / délais"
      ],
      "creative": [
        "Création de modèles d’architecture épurés"
      ],
      "human": [
        "Pédagogie de haut niveau, écoute et autorité technique bienveillante"
      ],
      "tools": [
        "C4 Model",
        "PlantUML",
        "Kubernetes",
        "Apache Kafka",
        "Cloud Providers"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "architecte-web",
      "cloud-architect",
      "software-engineer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "resoudre-problemes",
      "technologie-code"
    ]
  },
  {
    "id": "dev-mobile",
    "slug": "developpeur-dapplications-mobiles",
    "title": "Développeur d’Applications Mobiles",
    "aliases": [
      "Mobile Developer",
      "Développeur Mobile",
      "Développeur iOS & Android"
    ],
    "icon": "📲",
    "image": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "Informatique & Développement",
    "subdomain": "Développement mobile",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "450 000 - 1 400 000 FCFA / mois (Sénégal) • ~38k€ - 60k€ (France/Europe)",
    "simpleDefinition": "Il crée les applications que nous téléchargeons et utilisons chaque jour sur nos smartphones (messageries, jeux, paiements mobiles, transport).",
    "shortDescription": "Programme et publie des applications optimisées pour smartphones et tablettes, sous Android et iOS.",
    "longDescription": "En Afrique, où le mobile est la porte d’entrée principale vers internet (Mobile-First), le développeur mobile joue un rôle économique crucial. Il crée des applications économes en batterie et en données internet, fluides au toucher, capables de fonctionner même avec une connexion instable ou hors-ligne (mode offline).",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Flutter (Dart), React Native, Kotlin (Android) ou Swift (iOS)",
        "Gestion du stockage local (SQLite, Realm)",
        "Consommation d’APIs et notifications push",
        "Publication sur Google Play Store et Apple App Store",
        "Optimisation des performances et autonomie batterie"
      ],
      "analytical": [
        "Débogage sur une multitude de modèles d’appareils différents"
      ],
      "creative": [
        "Animations gestuelles intuitives et fluides"
      ],
      "human": [
        "Sens de l’expérience utilisateur tactile"
      ],
      "tools": [
        "Android Studio",
        "Xcode",
        "Flutter / Dart",
        "Firebase (Crashlytics, FCM)",
        "Figma"
      ]
    },
    "specializations": [
      "Cross-Platform (Flutter / React Native)",
      "Natif Android (Kotlin)",
      "Natif iOS (Swift)",
      "Sécurité mobile & FinTech"
    ],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Paiement mobile (Wave, Orange Money)",
        "Services de livraison et transport (Yassir, Heetch)",
        "E-commerce local"
      ],
      "employerTypes": [
        "FinTechs sénégalaises",
        "Startups de livraison",
        "Agences mobiles",
        "Télétravail international"
      ],
      "remoteWork": "Très forte demande internationale pour les profils Flutter et React Native.",
      "senegalInsight": "Le taux de pénétration du smartphone au Sénégal en fait le métier le plus proche du quotidien des populations."
    },
    "relatedJobSlugs": [
      "developpeur-flutter",
      "developpeur-react-native",
      "developpeur-fullstack",
      "ui-designer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "technologie-code",
      "creer-designer"
    ]
  },
  {
    "id": "dev-flutter",
    "slug": "developpeur-flutter",
    "title": "Développeur Flutter / Cross-Platform",
    "aliases": [
      "Flutter Developer",
      "Ingénieur Flutter",
      "Dart Developer"
    ],
    "icon": "⚡",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "Informatique & Développement",
    "subdomain": "Développement mobile",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "450 000 - 1 500 000 FCFA / mois (Sénégal) • ~40k€ - 62k€ (France/Europe)",
    "simpleDefinition": "Grâce au framework Flutter de Google, il écrit un seul code pour faire fonctionner une application en même temps sur Android, iPhone et sur le web.",
    "shortDescription": "Spécialiste de la technologie Flutter de Google pour créer des applications multiplateformes élégantes, véloces et unifiées.",
    "longDescription": "Flutter est devenu incontournable dans les startups et grandes entreprises car il permet de réduire les coûts et délais par deux : une seule équipe développe la version Android et la version iOS simultanément. Le développeur Flutter maîtrise le langage Dart et l’architecture des widgets réactifs.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Dart & Framework Flutter",
        "State Management (Bloc, Riverpod, Provider)",
        "Animations personnalisées Flutter",
        "Intégration d’APIs REST & GraphQL",
        "Publication sur stores mobiles"
      ],
      "analytical": [
        "Optimisation du taux de rafraîchissement (60fps / 120fps)"
      ],
      "creative": [
        "Création de composants visuels sur mesure"
      ],
      "human": [
        "Esprit d’efficacité et d’agilité"
      ],
      "tools": [
        "VS Code / Android Studio",
        "Dart DevTools",
        "Firebase",
        "GitHub Actions"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "developpeur-dapplications-mobiles",
      "developpeur-react-native",
      "developpeur-frontend"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "technologie-code",
      "creer-designer"
    ]
  },
  {
    "id": "dev-react-native",
    "slug": "developpeur-react-native",
    "title": "Développeur React Native",
    "aliases": [
      "React Native Developer",
      "Mobile React Engineer"
    ],
    "icon": "⚛️",
    "image": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "Informatique & Développement",
    "subdomain": "Développement mobile",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "450 000 - 1 450 000 FCFA / mois (Sénégal) • ~40k€ - 62k€ (France/Europe)",
    "simpleDefinition": "Il utilise les technologies du web (JavaScript et React) pour construire de véritables applications mobiles rapides pour iPhone et smartphones Android.",
    "shortDescription": "Conçoit des applications mobiles cross-platform performantes en s’appuyant sur l’écosystème React et JavaScript.",
    "longDescription": "React Native permet aux développeurs web de basculer facilement vers le mobile. Le développeur React Native exploite les composants natifs des téléphones tout en conservant la flexibilité du langage JavaScript/TypeScript et de l’écosystème open-source de Meta.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "React Native & Expo",
        "JavaScript moderne & TypeScript",
        "Bridges natifs (liaison avec code natif)",
        "State management (Redux, Zustand)",
        "Navigation mobile (React Navigation)"
      ],
      "analytical": [
        "Résolution des spécificités d’affichage entre iOS et Android"
      ],
      "creative": [
        "Ergonomie fluide et interfaces modernes"
      ],
      "human": [
        "Collaboration facile entre équipes web et mobile"
      ],
      "tools": [
        "Expo",
        "VS Code",
        "React DevTools",
        "Flipper",
        "GitHub"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "developpeur-dapplications-mobiles",
      "developpeur-flutter",
      "developpeur-frontend"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "technologie-code",
      "creer-designer"
    ]
  },
  {
    "id": "dev-android",
    "slug": "developpeur-android",
    "title": "Développeur Android",
    "aliases": [
      "Android Developer",
      "Ingénieur Android Natif",
      "Kotlin Developer"
    ],
    "icon": "🤖",
    "image": "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "Informatique & Développement",
    "subdomain": "Développement mobile",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "450 000 - 1 400 000 FCFA / mois (Sénégal) • ~38k€ - 60k€ (France/Europe)",
    "simpleDefinition": "Spécialiste du système Android de Google, il conçoit des applications natives ultra-rapides tirant le meilleur parti des appareils Android.",
    "shortDescription": "Développe des applications mobiles natives en Kotlin spécifiquement optimisées pour l’écosystème Android.",
    "longDescription": "Android représentant plus de 85% des parts de marché des smartphones en Afrique, ce développeur maîtrise en profondeur les composants de l’écosystème Google (Jetpack Compose, Coroutines, Material Design).",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Kotlin & Java",
        "Jetpack Compose",
        "Architecture MVVM / MVI",
        "Room DB & SQLite",
        "Google Play Services"
      ],
      "analytical": [
        "Gestion fine des ressources mémoires sur appareils d’entrée de gamme"
      ],
      "creative": [
        "Application stricte des directives Material Design 3"
      ],
      "human": [
        "Persévérance et veille sur les évolutions Android"
      ],
      "tools": [
        "Android Studio",
        "Gradle",
        "Firebase",
        "Git"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "developpeur-dapplications-mobiles",
      "developpeur-ios",
      "developpeur-flutter"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "technologie-code",
      "resoudre-problemes"
    ]
  },
  {
    "id": "dev-ios",
    "slug": "developpeur-ios",
    "title": "Développeur iOS",
    "aliases": [
      "iOS Developer",
      "Ingénieur iOS Natif",
      "Swift Developer"
    ],
    "icon": "🍎",
    "image": "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "Informatique & Développement",
    "subdomain": "Développement mobile",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "500 000 - 1 600 000 FCFA / mois (Sénégal) • ~42k€ - 65k€ (France/Europe)",
    "simpleDefinition": "Spécialiste de l’écosystème Apple, il conçoit des applications natives pour iPhone, iPad, Apple Watch et Mac.",
    "shortDescription": "Développe des applications haut de gamme en Swift adaptées aux standards stricts de fluidité et de sécurité d’Apple.",
    "longDescription": "Le développeur iOS façonne des expériences utilisateur raffinées en utilisant les technologies propriétaires d’Apple (Swift, SwiftUI, Core Data). Très recherché pour les applications bancaires et les marchés internationaux à fort pouvoir d’achat.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Swift & SwiftUI",
        "Combine & Concurrency",
        "Human Interface Guidelines (HIG)",
        "Core Data / SwiftData",
        "App Store Connect & TestFlight"
      ],
      "analytical": [
        "Optimisation de la fluidité à 120 Hz (ProMotion)"
      ],
      "creative": [
        "Sens exceptionnel des finitions visuelles et haptiques"
      ],
      "human": [
        "Exigence esthétique et rigueur technique"
      ],
      "tools": [
        "Xcode",
        "Instruments",
        "CocoaPods / Swift Package Manager",
        "Git"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "developpeur-dapplications-mobiles",
      "developpeur-android",
      "product-designer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "technologie-code",
      "creer-designer"
    ]
  },
  {
    "id": "prompt-engineer",
    "slug": "prompt-engineer",
    "title": "Prompt Engineer & Spécialiste IA Générative",
    "aliases": [
      "Prompt Designer",
      "Ingénieur de Prompts",
      "Spécialiste IA Générative",
      "AI Interaction Designer"
    ],
    "icon": "✍️",
    "image": "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "Intelligence Artificielle & Machine Learning",
    "subdomain": "Prompt Engineering",
    "sourceESD": true,
    "isEmerging": true,
    "level": "Bac +3 à Bac +5",
    "salary": "500 000 - 1 500 000 FCFA / mois (Sénégal) • ~40k€ - 65k€ (France/Europe)",
    "simpleDefinition": "Le Prompt Engineer est l’expert qui sait exactement comment parler aux Intelligences Artificielles génératives (comme ChatGPT, Claude ou Midjourney) pour en obtenir des résultats précis, fiables et utiles.",
    "shortDescription": "Optimise les requêtes, consignes et protocoles de dialogue avec les modèles d’IA pour automatiser des processus métier sans hallucinations.",
    "longDescription": "Métier émergent par excellence, le Prompt Engineer combine une grande finesse linguistique, une logique rigoureuse et une compréhension intime des modèles de langage (LLM). Il conçoit des bibliothèques de consignes complexes (Few-Shot Prompting, Chain-of-Thought, RAG) permettant aux entreprises d’intégrer l’IA dans leurs services clients, leurs rédactions juridiques ou la création de code, tout en limitant les erreurs et les biais.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Compréhension des architectures LLM (Transformers, tokens, context window)",
        "Techniques avancées de prompting (Few-Shot, CoT, ReAct)",
        "Python & APIs OpenAI, Anthropic, Mistral",
        "Bases vectorielles (Pinecone, ChromaDB)",
        "Évaluation de la précision (evals, benchmark)"
      ],
      "analytical": [
        "Détection fine des biais et hallucinations des modèles"
      ],
      "creative": [
        "Formulation d’instructions structurées et inventives"
      ],
      "human": [
        "Excellente maîtrise du langage écrit",
        "Esprit critique et discernement éthique"
      ],
      "tools": [
        "LangChain / LlamaIndex",
        "Python",
        "Jupyter Notebook",
        "OpenAI API / Claude API",
        "Hugging Face"
      ]
    },
    "specializations": [
      "RAG (Retrieval-Augmented Generation)",
      "Agents IA autonomes",
      "Prompting pour le code",
      "Fine-tuning assisté"
    ],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "ai-engineer",
      "generative-ai-engineer",
      "data-scientist"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "technologie-code",
      "resoudre-problemes",
      "creer-designer"
    ]
  },
  {
    "id": "ai-engineer",
    "slug": "ai-engineer",
    "title": "AI Engineer (Ingénieur en Intelligence Artificielle)",
    "aliases": [
      "Ingénieur IA Applicative",
      "AI Software Engineer",
      "Ingénieur Solutions IA"
    ],
    "icon": "🤖",
    "image": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "Intelligence Artificielle & Machine Learning",
    "subdomain": "AI Engineering",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +5 (Master ou Diplôme d’Ingénieur)",
    "salary": "700 000 - 2 200 000 FCFA / mois (Sénégal) • ~50k€ - 85k€ (France/Europe)",
    "simpleDefinition": "L’AI Engineer intègre des briques d’intelligence artificielle dans des applications concrètes : reconnaissance faciale, assistants vocaux, traduction automatique ou prédiction.",
    "shortDescription": "Fait le pont entre les modèles mathématiques d’IA et les applications logicielles prêtes à être utilisées par des millions d’utilisateurs.",
    "longDescription": "Alors que le chercheur invente les modèles, l’AI Engineer les rend opérationnels dans le monde réel. Il connecte les modèles d’apprentissage profond à des logiciels d’entreprise, optimise leur temps de calcul pour qu’ils répondent en quelques millisecondes, et met en place les pipelines de données nécessaires à leur alimentation continue.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Python, C++, TypeScript",
        "Frameworks IA (PyTorch, TensorFlow, Hugging Face)",
        "Intégration d’architectures RAG et agents IA",
        "Déploiement sur GPU et optimisation (ONNX, TensorRT)",
        "Bases de données vectorielles",
        "APIs et conteneurs Docker"
      ],
      "analytical": [
        "Résolution des compromis entre précision du modèle et vitesse d’exécution"
      ],
      "creative": [
        "Conception de nouveaux cas d’usage à fort impact sociétal"
      ],
      "human": [
        "Veille scientifique permanente",
        "Sensibilité aux enjeux éthiques de l’IA"
      ],
      "tools": [
        "PyTorch",
        "Docker",
        "Kubernetes",
        "Hugging Face Hub",
        "LangGraph"
      ]
    },
    "specializations": [
      "Vision par ordinateur",
      "Traitement du Langage Naturel (NLP)",
      "IA pour la santé",
      "Agents intelligents autonomes"
    ],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "ingenieur-ia",
      "machine-learning-engineer",
      "mlops-engineer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "technologie-code",
      "resoudre-problemes"
    ]
  },
  {
    "id": "machine-learning-engineer",
    "slug": "machine-learning-engineer",
    "title": "Machine Learning Engineer",
    "aliases": [
      "ML Engineer",
      "Ingénieur en Apprentissage Automatique"
    ],
    "icon": "📈",
    "image": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "Intelligence Artificielle & Machine Learning",
    "subdomain": "Machine Learning",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +5 (Diplôme d’Ingénieur ou Master Recherche)",
    "salary": "700 000 - 2 000 000 FCFA / mois (Sénégal) • ~48k€ - 80k€ (France/Europe)",
    "simpleDefinition": "Il conçoit et entraîne des programmes capables d’apprendre tout seuls à partir de milliers d’exemples passés pour prédire des résultats futurs.",
    "shortDescription": "Conçoit, entraîne, teste et optimise les algorithmes d’apprentissage supervisé et non supervisé.",
    "longDescription": "Au carrefour des mathématiques appliquées, des statistiques et du génie logiciel, le Machine Learning Engineer transforme les données brutes en algorithmes prédictifs fiables (ex: détection de fraudes bancaires, prévisions météo agricoles, diagnostics médicaux). Il s’assure que le modèle s’améliore avec le temps sans tomber dans le piège du sur-apprentissage.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Mathématiques (Algèbre linéaire, probabilités, calcul différentiel)",
        "Python, R, C++",
        "Scikit-Learn, PyTorch, XGBoost",
        "Feature Engineering & Préparation des données",
        "Métriques d’évaluation (ROC-AUC, F1-Score, RMSE)"
      ],
      "analytical": [
        "Rigueur scientifique absolue et esprit expérimental"
      ],
      "creative": [
        "Imagination d’indicateurs prédictifs originaux"
      ],
      "human": [
        "Patience lors des entraînements de modèles",
        "Capacité de synthèse"
      ],
      "tools": [
        "Jupyter",
        "MLflow",
        "Pandas & NumPy",
        "Weights & Biases",
        "AWS SageMaker"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "data-scientist",
      "ai-engineer",
      "mlops-engineer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "resoudre-problemes",
      "technologie-code"
    ]
  },
  {
    "id": "developpeur-data-ia",
    "slug": "developpeur-data-ia",
    "title": "Développeur Data & IA",
    "aliases": [
      "Data & AI Developer",
      "Développeur IA",
      "Programmeur Data Intelligence"
    ],
    "icon": "🧬",
    "image": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "Intelligence Artificielle & Machine Learning",
    "subdomain": "AI Engineering",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "500 000 - 1 600 000 FCFA / mois (Sénégal) • ~42k€ - 68k€ (France/Europe)",
    "simpleDefinition": "C’est un développeur qui combine le code informatique traditionnel avec les données et l’intelligence artificielle pour créer des outils intelligents.",
    "shortDescription": "Développe des solutions logicielles intégrant le traitement massif de données et des algorithmes d’apprentissage automatique.",
    "longDescription": "Ce profil hybride maîtrise à la fois l’ingénierie logicielle (création d’APIs, front-ends interactifs, bases de données) et les principes du Machine Learning. Il est capable de prendre un modèle conçu par un Data Scientist et de le transformer en un produit logiciel complet et convivial.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Python (Flask, FastAPI, Streamlit)",
        "SQL & NoSQL",
        "Intégration de modèles de Machine Learning",
        "Traitement et nettoyage de données (Pandas, ETL)",
        "Docker et déploiement"
      ],
      "analytical": [
        "Compréhension des flux de données et validation des sorties"
      ],
      "creative": [
        "Création de tableaux de bord intelligents et interactifs"
      ],
      "human": [
        "Polyvalence et curiosité pluridisciplinaire"
      ],
      "tools": [
        "VS Code",
        "FastAPI",
        "Pandas",
        "Streamlit",
        "Docker"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "developpeur-fullstack",
      "data-scientist",
      "ai-engineer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "technologie-code",
      "resoudre-problemes"
    ]
  },
  {
    "id": "mlops-engineer",
    "slug": "mlops-engineer",
    "title": "MLOps Engineer (Machine Learning Operations)",
    "aliases": [
      "MLOps Specialist",
      "Ingénieur Déploiement IA",
      "Machine Learning Infrastructure Engineer"
    ],
    "icon": "🔄",
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "Intelligence Artificielle & Machine Learning",
    "subdomain": "MLOps",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +5 (Ingénieur)",
    "salary": "750 000 - 2 300 000 FCFA / mois (Sénégal) • ~55k€ - 85k€ (France/Europe)",
    "simpleDefinition": "Le MLOps Engineer s’assure que les modèles d’intelligence artificielle restent performants, rapides et à jour une fois qu’ils sont lancés en production dans le monde réel.",
    "shortDescription": "Industrialise, déploie, surveille et automatise le réentraînement continu des modèles d’IA à grande échelle.",
    "longDescription": "Un modèle d’IA n’est utile que s’il fonctionne de manière stable et fiable en production. Le MLOps Engineer combine les pratiques DevOps avec les exigences du Machine Learning : gestion du versioning des données, surveillance de la dérive des données (data drift), réentraînement automatique et optimisation des coûts d’infrastructure serveur.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Pipelines CI/CD pour le Machine Learning",
        "Kubernetes & Kubeflow",
        "Monitoring de modèles (Prometheus, Grafana, Evidently)",
        "Orchestration (Airflow, Prefect)",
        "Infrastructure as Code (Terraform)"
      ],
      "analytical": [
        "Détection précoce de la baisse d’exactitude d’un modèle"
      ],
      "creative": [
        "Automatisation complète de processus complexes"
      ],
      "human": [
        "Capacité à faire dialoguer Data Scientists et ingénieurs infrastructure"
      ],
      "tools": [
        "Kubeflow",
        "MLflow",
        "Docker & Kubernetes",
        "DVC",
        "Terraform"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "devops-engineer",
      "machine-learning-engineer",
      "data-engineer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "technologie-code",
      "resoudre-problemes"
    ]
  },
  {
    "id": "data-analyst",
    "slug": "data-analyst",
    "title": "Data Analyst / Business Intelligence Analyst",
    "aliases": [
      "Analyste de Données",
      "BI Analyst",
      "Analytics Consultant",
      "Data Business Analyst"
    ],
    "icon": "📊",
    "image": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80",
    "familyId": "data-decision",
    "familyName": "Data, Statistiques & Décision",
    "domain": "Data & Analytics",
    "subdomain": "Data Analysis",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "450 000 - 1 300 000 FCFA / mois (Sénégal) • ~38k€ - 55k€ (France/Europe)",
    "simpleDefinition": "Le Data Analyst fait parler les chiffres : il explore les données de l’entreprise pour trouver des explications, créer des tableaux de bord visuels et aider les dirigeants à prendre de bonnes décisions.",
    "shortDescription": "Collecte, nettoie, analyse et met en scène les données pour transformer des chiffres bruts en décisions stratégiques claires.",
    "longDescription": "À l’ère du Big Data, les organisations accumulent des millions d’informations (ventes, visites web, stocks, données clients). Le Data Analyst extrait ces données à l’aide de requêtes SQL, vérifie leur fiabilité, puis crée des visualisations percutantes sur Power BI ou Tableau. Il permet aux décideurs de comprendre ce qui fonctionne et d’anticiper les tendances commerciales.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "SQL avancé (jointures, fenêtrage, CTE)",
        "Outils de Data Visualisation (Power BI, Tableau, Looker Studio)",
        "Python / R (Pandas, Matplotlib, Seaborn)",
        "Excel avancé (Power Query, formules complexes)",
        "Statistiques descriptives et tests d’hypothèses"
      ],
      "analytical": [
        "Esprit critique aiguisé face aux chiffres",
        "Détection d’anomalies et de corrélations"
      ],
      "creative": [
        "Storytelling par la donnée (Data Storytelling) et conception de dashboards clairs"
      ],
      "human": [
        "Capacité à vulgariser des analyses auprès de personnes non spécialistes"
      ],
      "tools": [
        "SQL (PostgreSQL, BigQuery)",
        "Power BI / Tableau",
        "Excel",
        "Python",
        "Jupyter"
      ]
    },
    "specializations": [
      "Marketing Analytics",
      "Product Analytics",
      "Finance & Risque",
      "Supply Chain Analytics"
    ],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "data-scientist",
      "business-analyst",
      "data-engineer",
      "web-analyst"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "resoudre-problemes",
      "analyser-chiffres"
    ]
  },
  {
    "id": "data-scientist",
    "slug": "data-scientist",
    "title": "Data Scientist",
    "aliases": [
      "Scientifique de Données",
      "Data Science Specialist"
    ],
    "icon": "🔬",
    "image": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&auto=format&fit=crop&q=80",
    "familyId": "data-decision",
    "familyName": "Data, Statistiques & Décision",
    "domain": "Data & Analytics",
    "subdomain": "Data Science",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +5 (Master ou Diplôme d’Ingénieur)",
    "salary": "650 000 - 1 800 000 FCFA / mois (Sénégal) • ~45k€ - 72k€ (France/Europe)",
    "simpleDefinition": "Le Data Scientist utilise les mathématiques et la programmation pour prédire l’avenir à partir des données passées et découvrir des règles cachées dans les masses de données.",
    "shortDescription": "Conçoit des modèles mathématiques et prédictifs avancés pour résoudre des problématiques stratégiques à fort enjeu.",
    "longDescription": "Expert de haut vol, le Data Scientist ne se contente pas de regarder ce qui s’est passé : il construit des modèles statistiques complexes pour prédire ce qui va se passer (attrition client, anticipation des pannes de machines, scoring de crédit bancaire). Il travaille en étroite collaboration avec les équipes métier et les ingénieurs de données.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Mathématiques & Statistiques avancées",
        "Python & R pour la Data Science",
        "Machine Learning (Scikit-Learn, LightGBM)",
        "Traitement de données massives (Spark, SQL)",
        "Deep Learning de base"
      ],
      "analytical": [
        "Rigueur expérimentale et modélisation scientifique"
      ],
      "creative": [
        "Capacité à formuler de nouvelles approches prédictives"
      ],
      "human": [
        "Esprit de synthèse et communication orientée valeur métier"
      ],
      "tools": [
        "Python",
        "Jupyter",
        "SQL",
        "Git",
        "Google Cloud / BigQuery"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "data-analyst",
      "machine-learning-engineer",
      "data-engineer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "resoudre-problemes",
      "analyser-chiffres",
      "technologie-code"
    ]
  },
  {
    "id": "data-engineer",
    "slug": "data-engineer",
    "title": "Data Engineer (Ingénieur Données)",
    "aliases": [
      "Ingénieur Pipeline Données",
      "Big Data Engineer",
      "Architecte de Flux de Données"
    ],
    "icon": "🚰",
    "image": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80",
    "familyId": "data-decision",
    "familyName": "Data, Statistiques & Décision",
    "domain": "Data & Analytics",
    "subdomain": "Data Engineering",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +5 (Ingénieur ou Master)",
    "salary": "600 000 - 1 900 000 FCFA / mois (Sénégal) • ~45k€ - 75k€ (France/Europe)",
    "simpleDefinition": "Le Data Engineer construit la « plomberie » des données : les tuyaux qui aspirent les données brutes de partout, les nettoient et les livrent prêtes à l’emploi aux analystes.",
    "shortDescription": "Conçoit, construit et maintient les autoroutes de données (pipelines ETL/ELT) et les entrepôts de stockage (Data Warehouses / Data Lakes).",
    "longDescription": "Sans Data Engineer, les Data Scientists et Analysts n’auraient rien à analyser. Le Data Engineer résout les problèmes de volume, de vitesse et de fiabilité des flux de données. Il collecte des millions d’événements en temps réel et les organise dans des architectures optimisées pour la consultation ultra-rapide.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Python, SQL avancé, Scala ou Java",
        "Orchestration de pipelines (Apache Airflow, dbt)",
        "Entrepôts de données Cloud (Snowflake, BigQuery, Databricks)",
        "Streaming de données (Kafka)",
        "Bases distribuées et Data Lakes"
      ],
      "analytical": [
        "Optimisation des coûts de calcul et des performances de requêtes"
      ],
      "creative": [
        "Conception de flux automatisés résilients aux pannes"
      ],
      "human": [
        "Rigueur et esprit de service envers les équipes consommatrices"
      ],
      "tools": [
        "Airflow",
        "dbt",
        "Snowflake / BigQuery",
        "Docker",
        "Git"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "data-analyst",
      "data-scientist",
      "cloud-engineer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "technologie-code",
      "resoudre-problemes"
    ]
  },
  {
    "id": "web-analyst",
    "slug": "web-analyst",
    "title": "Web Analyst",
    "aliases": [
      "Analyste Web & Trafic",
      "Digital Analytics Specialist",
      "Analyste d’Audience"
    ],
    "icon": "🖱️",
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    "familyId": "data-decision",
    "familyName": "Data, Statistiques & Décision",
    "domain": "Data & Analytics",
    "subdomain": "Web & Social Media Analytics",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "400 000 - 1 100 000 FCFA / mois (Sénégal) • ~36k€ - 52k€ (France/Europe)",
    "simpleDefinition": "Le Web Analyst étudie le comportement des visiteurs sur les sites internet : par où ils arrivent, ce qu’ils regardent et où ils bloquent avant d’acheter.",
    "shortDescription": "Mesure, analyse et optimise le parcours des utilisateurs sur les plateformes web et mobiles pour booster les conversions.",
    "longDescription": "Expert du plan de taggage et des outils d’analyse d’audience (comme Google Analytics 4), le Web Analyst trace chaque clic, chaque défilement et chaque étape du tunnel de vente. Ses recommandations permettent d’éliminer les points de friction et d’augmenter le retour sur investissement des campagnes publicitaires.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Google Analytics 4 (GA4)",
        "Google Tag Manager (GTM)",
        "A/B Testing & Optimisation du taux de conversion (CRO)",
        "Tableaux de bord Looker Studio",
        "Bases de JavaScript pour le taggage"
      ],
      "analytical": [
        "Analyse de tunnels de conversion et de cohortes"
      ],
      "creative": [
        "Hypothèses d’amélioration ergonomique et commerciale"
      ],
      "human": [
        "Clarté dans la communication des constats"
      ],
      "tools": [
        "GA4",
        "GTM",
        "Looker Studio",
        "Hotjar",
        "Mixpanel"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "data-analyst",
      "traffic-manager",
      "growth-hacker",
      "ux-designer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "analyser-chiffres",
      "commerce-marketing"
    ]
  },
  {
    "id": "business-analyst",
    "slug": "business-analyst",
    "title": "Business Analyst Digital",
    "aliases": [
      "Analyste d’Affaires",
      "Digital Business Analyst",
      "Consultant MOA"
    ],
    "icon": "💼",
    "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
    "familyId": "data-decision",
    "familyName": "Data, Statistiques & Décision",
    "domain": "Data & Analytics",
    "subdomain": "Business Intelligence",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +5 (École de Commerce ou Ingénieur)",
    "salary": "500 000 - 1 600 000 FCFA / mois (Sénégal) • ~42k€ - 65k€ (France/Europe)",
    "simpleDefinition": "Le Business Analyst fait le pont entre les besoins économiques de l’entreprise et les solutions informatiques que doivent construire les développeurs.",
    "shortDescription": "Analyse les processus métier d’une organisation pour concevoir des solutions numériques créatrices de valeur et de rentabilité.",
    "longDescription": "À la croisée de la gestion, de la finance et de l’informatique, le Business Analyst étudie les problèmes opérationnels d’une entreprise (pertes de temps, coûts excessifs, satisfaction client perfectible) et modélise les fonctionnalités logicielles nécessaires pour y remédier. Il rédige les cahiers des charges et s’assure que le projet final délivre la valeur attendue.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Modélisation des processus métier (BPMN)",
        "Analyse de données (SQL, Excel avancé)",
        "Méthodologies Agiles (Scrum, Kanban)",
        "Rédaction de spécifications fonctionnelles",
        "Calcul de ROI et analyse de rentabilité"
      ],
      "analytical": [
        "Capacité d’audit et d’identification des gaspillages"
      ],
      "creative": [
        "Proposition de réorganisations innovantes"
      ],
      "human": [
        "Excellente aisance relationnelle et conduite d’ateliers"
      ],
      "tools": [
        "Jira / Confluence",
        "Miro / Visio",
        "Excel",
        "SQL",
        "Power BI"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "product-owner",
      "data-analyst",
      "product-manager"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "resoudre-problemes",
      "analyser-chiffres",
      "gestion-projet"
    ]
  },
  {
    "id": "analyste-cybersecurite",
    "slug": "analyste-cybersecurite",
    "title": "Analyste Cybersécurité / SOC Analyst",
    "aliases": [
      "SOC Analyst",
      "Analyste Sécurité",
      "Opérateur SOC",
      "Cyber Defense Analyst"
    ],
    "icon": "🛡️",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80",
    "familyId": "cybersecurite-reseaux",
    "familyName": "Cybersécurité & Réseaux",
    "domain": "Cybersécurité & Résilience",
    "subdomain": "SOC & Détection d’incidents",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "500 000 - 1 600 000 FCFA / mois (Sénégal) • ~42k€ - 65k€ (France/Europe)",
    "simpleDefinition": "L’analyste cybersécurité est la sentinelle du système informatique : il surveille jour et nuit les écrans de contrôle pour détecter les attaques pirates et donner l’alerte.",
    "shortDescription": "Surveille les réseaux et serveurs en temps réel, qualifie les alertes de sécurité et neutralise les cybermenaces.",
    "longDescription": "Installé dans le centre de surveillance de la sécurité (Security Operations Center - SOC), l’analyste scrute des milliers de signaux suspects (tentatives de connexion frauduleuses, virus, exfiltration de données). Il analyse les journaux d’événements (logs), bloque les adresses malveillantes et participe à la riposte pour préserver l’intégrité des données bancaires ou industrielles.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "saviezVous": {
      "statut": "valeur_sure",
      "fait": "Le déficit mondial de professionnels qualifiés en cybersécurité dépasse 3,5 millions de postes ouverts selon les observatoires internationaux.",
      "pourquoi": "La numérisation critique des services publics, des banques et de la santé démultiplie les surfaces d'attaque. Les compétences en détection d'intrusions, en réponse à incident et en conformité restent indispensables et indépendantes des fluctuations économiques.",
      "a_retenir": "Un rempart stratégique durable offrant une employabilité pérenne et des perspectives stables sur tous les continents."
    },
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Gestion des événements de sécurité (SIEM : Splunk, Wazuh, Elastic)",
        "Réseaux informatiques (TCP/IP, pare-feu, DNS)",
        "Analyse de journaux (logs Linux/Windows)",
        "Détection de malwares et menaces (EDR)",
        "Procédures de réponse à incident"
      ],
      "analytical": [
        "Esprit d’enquête et capacité à relier des indices dispersés"
      ],
      "creative": [
        "Anticipation des ruses déployées par les attaquants"
      ],
      "human": [
        "Calme sous pression et réactivité immédiate"
      ],
      "tools": [
        "Wireshark",
        "Splunk / Wazuh",
        "TheHive",
        "Suricata / Snort",
        "VirusTotal"
      ]
    },
    "specializations": [
      "SOC Niveau 1 (Triage)",
      "SOC Niveau 2 (Investigation)",
      "Threat Intelligence",
      "Digital Forensics"
    ],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "pentester-hacker-ethique",
      "incident-responder",
      "security-engineer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "securite-defense",
      "resoudre-problemes",
      "technologie-code"
    ]
  },
  {
    "id": "pentester",
    "slug": "pentester-hacker-ethique",
    "title": "Pentester / Hacker Éthique",
    "aliases": [
      "Ethical Hacker",
      "Auditeur en Sécurité Offensive",
      "Consultant Pentest",
      "Red Teamer"
    ],
    "icon": "🎯",
    "image": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
    "familyId": "cybersecurite-reseaux",
    "familyName": "Cybersécurité & Réseaux",
    "domain": "Cybersécurité & Résilience",
    "subdomain": "Sécurité offensive & Pentest",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "600 000 - 1 900 000 FCFA / mois (Sénégal) • ~45k€ - 75k€ (France/Europe)",
    "simpleDefinition": "Le hacker éthique est payé par les entreprises pour essayer de pirater leurs propres systèmes, afin de trouver les failles de sécurité avant les vrais criminels et les réparer.",
    "shortDescription": "Simule des cyberattaques réalistes pour éprouver la solidité des défenses informatiques et recommander des correctifs.",
    "longDescription": "Agissant toujours avec une autorisation légale stricte, le pentester utilise les mêmes méthodes que les cyberpirates pour s’infiltrer dans les réseaux, applications web ou smartphones. À l’issue de son test d’intrusion, il rédige un rapport détaillé expliquant chaque vulnérabilité découverte et la manière exacte de la corriger pour protéger les clients.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Méthodologies d’intrusion (OWASP Testing Guide, PTES)",
        "Scripts d’automatisation (Python, Bash)",
        "Audit de sécurité web, réseau et Active Directory",
        "Connaissance approfondie des protocoles et failles (CVE, SQLi, XSS, SSRF)",
        "Rédaction de rapports d’audit clairs pour dirigeants et techniciens"
      ],
      "analytical": [
        "Perspicacité et logique de contournement des défenses"
      ],
      "creative": [
        "Ingéniosité pour trouver des chemins d’attaque inattendus"
      ],
      "human": [
        "Éthique irréprochable et sens du devoir légal"
      ],
      "tools": [
        "Kali Linux",
        "Burp Suite",
        "Nmap",
        "Metasploit",
        "Wireshark"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "analyste-cybersecurite",
      "application-security-engineer",
      "security-engineer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "securite-defense",
      "technologie-code",
      "resoudre-problemes"
    ]
  },
  {
    "id": "security-engineer",
    "slug": "security-engineer",
    "title": "Ingénieur Sécurité des Systèmes d’Information",
    "aliases": [
      "Security Engineer",
      "Ingénieur Cybersécurité",
      "SecOps Specialist"
    ],
    "icon": "🔒",
    "image": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
    "familyId": "cybersecurite-reseaux",
    "familyName": "Cybersécurité & Réseaux",
    "domain": "Cybersécurité & Résilience",
    "subdomain": "Sécurité applicative & Cloud",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +5 (Ingénieur ou Master Cybersécurité)",
    "salary": "700 000 - 2 200 000 FCFA / mois (Sénégal) • ~50k€ - 80k€ (France/Europe)",
    "simpleDefinition": "Il conçoit et met en place les barrières de protection informatique (pare-feu, antivirus avancés, règles d’accès chiffrées) pour blinder les serveurs et les données.",
    "shortDescription": "Conçoit, configure et déploie les architectures de défense et les solutions techniques de protection contre les cybermenaces.",
    "longDescription": "L’ingénieur sécurité intervient pour bâtir les défenses. Il configure les équipements de sécurité (VPN, firewalls nouvelle génération, gestion des accès et des identités IAM, systèmes anti-DDoS). Il veille à ce que chaque nouvelle application respecte les règles de sécurité dès sa conception (Security by Design).",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Sécurité des réseaux et protocoles cryptographiques",
        "Gestion des identités et des accès (IAM / Active Directory)",
        "Hardening (durcissement) de systèmes Linux et Windows",
        "Sécurité Cloud (AWS, Azure, GCP)",
        "Veille sur les vulnérabilités du marché"
      ],
      "analytical": [
        "Évaluation objective des risques opérationnels"
      ],
      "creative": [
        "Conception de défenses multicouches imperméables"
      ],
      "human": [
        "Rigueur, pédagogie auprès des utilisateurs et fermeté sur les règles"
      ],
      "tools": [
        "Palo Alto / Fortinet",
        "OpenVPN / WireGuard",
        "Vault / Keycloak",
        "Terraform",
        "CrowdStrike"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "analyste-cybersecurite",
      "devsecops-engineer",
      "cloud-security-engineer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "securite-defense",
      "technologie-code"
    ]
  },
  {
    "id": "devsecops-engineer",
    "slug": "devsecops-engineer",
    "title": "DevSecOps Engineer",
    "aliases": [
      "Ingénieur DevSecOps",
      "Security Automation Engineer"
    ],
    "icon": "⚡",
    "image": "https://images.unsplash.com/photo-1618060932014-4deda4932554?w=800&auto=format&fit=crop&q=80",
    "familyId": "cybersecurite-reseaux",
    "familyName": "Cybersécurité & Réseaux",
    "domain": "Cybersécurité & Résilience",
    "subdomain": "DevSecOps",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +5 (Ingénieur)",
    "salary": "750 000 - 2 400 000 FCFA / mois (Sénégal) • ~55k€ - 85k€ (France/Europe)",
    "simpleDefinition": "Il automatise les contrôles de sécurité tout au long de la fabrication du logiciel pour bloquer les failles avant même qu’elles n’arrivent en production.",
    "shortDescription": "Intègre la sécurité de manière transparente et automatisée au cœur des pipelines de développement et de livraison logicielle.",
    "longDescription": "Dans le monde du développement ultra-rapide, attendre la fin d’un projet pour tester la sécurité est dangereux. Le DevSecOps Engineer injecte des scans de vulnérabilités automatiques à chaque commit de code, vérifie la sécurité des conteneurs Docker et des composants open-source, sans jamais ralentir le rythme de livraison des équipes.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "CI/CD sécurisé (GitLab CI, GitHub Actions)",
        "Analyse de code statique et dynamique (SAST/DAST)",
        "Sécurité des conteneurs et clusters Kubernetes",
        "Infrastructure as Code sécurisée",
        "Gestion sécurisée des secrets (Vault)"
      ],
      "analytical": [
        "Arbitrage entre vitesse de livraison et seuils de risque de sécurité"
      ],
      "creative": [
        "Automatisation astucieuse des contrôles de conformité"
      ],
      "human": [
        "Pédagogie bienveillante envers les développeurs"
      ],
      "tools": [
        "Snyk / SonarQube",
        "HashiCorp Vault",
        "Trivy",
        "GitLab CI",
        "Docker"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "devops-engineer",
      "security-engineer",
      "software-engineer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "securite-defense",
      "technologie-code"
    ]
  },
  {
    "id": "cloud-engineer",
    "slug": "cloud-engineer",
    "title": "Cloud Engineer (Ingénieur Cloud)",
    "aliases": [
      "Ingénieur Cloud Computing",
      "Cloud Operations Specialist"
    ],
    "icon": "☁️",
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "Cloud & Infrastructure",
    "subdomain": "Cloud Architecture",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "600 000 - 1 800 000 FCFA / mois (Sénégal) • ~45k€ - 75k€ (France/Europe)",
    "simpleDefinition": "Il installe, configure et gère les serveurs et disques virtuels hébergés dans les centres de données distants des géants du Cloud (Amazon, Microsoft, Google).",
    "shortDescription": "Déploie et gère les infrastructures et services hébergés dans le cloud pour assurer leur disponibilité et leur évolutivité.",
    "longDescription": "Les entreprises ne possèdent plus de salles de serveurs physiques bruyantes : elles louent de la puissance informatique dans le Cloud. Le Cloud Engineer est le spécialiste qui conçoit, dimensionne et supervise ces ressources virtuelles pour qu’elles soient disponibles 24h/24 au meilleur coût financier.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Plateformes Cloud (AWS, Microsoft Azure ou Google Cloud Platform)",
        "Automatisation & Scripting (Bash, Python, Terraform)",
        "Réseaux Cloud (VPC, sous-réseaux, passerelles, routage)",
        "Conteneurisation (Docker, Kubernetes)",
        "Gestion des coûts du cloud (FinOps)"
      ],
      "analytical": [
        "Optimisation de la consommation des ressources et de la facture cloud"
      ],
      "creative": [
        "Conception de solutions haute disponibilité résilientes"
      ],
      "human": [
        "Rigueur opérationnelle et réactivité en cas d’incident"
      ],
      "tools": [
        "AWS Console / CLI",
        "Terraform",
        "Docker",
        "Linux",
        "Datadog"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "cloud-architect",
      "devops-engineer",
      "administrateur-systemes-reseaux"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "technologie-code",
      "resoudre-problemes"
    ]
  },
  {
    "id": "cloud-architect",
    "slug": "cloud-architect",
    "title": "Architecte Cloud (Cloud Architect)",
    "aliases": [
      "Architecte Solutions Cloud",
      "Lead Cloud Architect"
    ],
    "icon": "🌐",
    "image": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "Cloud & Infrastructure",
    "subdomain": "Cloud Architecture",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +5 (Ingénieur) + Expérience",
    "salary": "900 000 - 2 500 000 FCFA / mois (Sénégal) • ~65k€ - 95k€ (France/Europe)",
    "simpleDefinition": "C’est le grand architecte qui dessine la stratégie d’adoption du Cloud pour l’ensemble des applications d’une entreprise.",
    "shortDescription": "Conçoit l’architecture globale des systèmes d’information dans le cloud et pilote la migration des applications critiques.",
    "longDescription": "L’architecte Cloud intervient au niveau stratégique. Il évalue quelles applications doivent migrer vers le Cloud, choisit entre approches privées, publiques ou hybrides, et garantit que les choix respectent les réglementations sur la souveraineté des données personnelles.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Architecture multi-cloud et cloud hybride",
        "Stratégies de migration (Lift-and-Shift, Re-platforming, Re-architecting)",
        "Gouvernance et sécurité cloud à grande échelle",
        "Résilience globale et plans de reprise (DRP)"
      ],
      "analytical": [
        "Analyse de risques et modélisation financière globale"
      ],
      "creative": [
        "Conception de plans d’architecture épurés"
      ],
      "human": [
        "Leadership stratégique et influence auprès des comités de direction"
      ],
      "tools": [
        "AWS / Azure / GCP",
        "Terraform",
        "Lucidchart / C4",
        "Kubernetes"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "cloud-engineer",
      "architecte-web",
      "software-architect"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "resoudre-problemes",
      "technologie-code"
    ]
  },
  {
    "id": "admin-sys-reseaux",
    "slug": "administrateur-systemes-reseaux",
    "title": "Administrateur Systèmes & Réseaux",
    "aliases": [
      "SysAdmin",
      "Administrateur Réseaux & Télécoms",
      "Network & System Administrator"
    ],
    "icon": "🖥️",
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80",
    "familyId": "cybersecurite-reseaux",
    "familyName": "Cybersécurité & Réseaux",
    "domain": "Cloud & Infrastructure",
    "subdomain": "Systèmes & Réseaux",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +2 à Bac +3",
    "salary": "350 000 - 950 000 FCFA / mois (Sénégal) • ~34k€ - 48k€ (France/Europe)",
    "simpleDefinition": "Il installe, configure et entretient le matériel informatique, les câbles réseau, le wifi et les serveurs pour que tous les employés puissent travailler sans coupure.",
    "shortDescription": "Garantit le bon fonctionnement, la performance et la sécurité des ordinateurs, serveurs et liaisons réseau d’une organisation.",
    "longDescription": "Pilier historique de l’informatique d’entreprise, l’administrateur systèmes et réseaux installe les postes de travail, gère les routeurs, les switchs et le réseau Wi-Fi, attribue les droits d’accès et résout les pannes de connexion. Il s’assure que les sauvegardes quotidiennes sont bien exécutées pour parer à tout incident.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Administration Linux & Windows Server",
        "Réseaux (VLAN, routage, sous-réseaux, DNS, DHCP)",
        "Configuration d’équipements (Cisco, MikroTik, Ubiquiti)",
        "Sauvegardes et virtualisation (VMware, Proxmox)",
        "Assistance utilisateur et dépannage"
      ],
      "analytical": [
        "Méthode rigoureuse de diagnostic lors des coupures réseau"
      ],
      "creative": [
        "Optimisation de l’agencement physique et logique des baies de serveurs"
      ],
      "human": [
        "Sens du service, réactivité et pédagogie auprès des utilisateurs"
      ],
      "tools": [
        "Cisco Packet Tracer / GNS3",
        "Wireshark",
        "Proxmox / VMware",
        "Active Directory",
        "Putty / SSH"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "cloud-engineer",
      "analyste-cybersecurite"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "technologie-code",
      "resoudre-problemes"
    ]
  },
  {
    "id": "devops-engineer",
    "slug": "devops-engineer",
    "title": "DevOps Engineer",
    "aliases": [
      "Ingénieur DevOps",
      "Spécialiste Intégration Continue",
      "Automatisation CI/CD"
    ],
    "icon": "♾️",
    "image": "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "DevOps & Platform Engineering",
    "subdomain": "CI/CD & Automatisation",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "650 000 - 1 900 000 FCFA / mois (Sénégal) • ~48k€ - 75k€ (France/Europe)",
    "simpleDefinition": "Le DevOps réunit les développeurs (qui créent le code) et les administrateurs (qui gèrent les serveurs) pour que les mises à jour soient publiées automatiquement et sans bug en quelques minutes.",
    "shortDescription": "Automatise le cycle de vie des applications, de l’écriture du code jusqu’à son déploiement en production, en améliorant la vitesse et la fiabilité.",
    "longDescription": "Le mot « DevOps » est la contraction de Développement et Opérations. Le DevOps Engineer met en place des chaînes de livraison continue (CI/CD) : dès qu’un développeur valide une modification, des robots automatiques testent le code, fabriquent un conteneur Docker et le déploient sur les serveurs sans la moindre interruption pour les usagers.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Intégration & Déploiement continus (CI/CD : GitHub Actions, GitLab CI)",
        "Conteneurisation (Docker, Kubernetes)",
        "Infrastructure as Code (Terraform, Ansible)",
        "Scripting avancé (Bash, Python, Go)",
        "Supervision & Observabilité (Prometheus, Grafana)"
      ],
      "analytical": [
        "Détection des goulots d’étranglement dans la chaîne de production logicielle"
      ],
      "creative": [
        "Conception de pipelines d’automatisation fluides et autonomes"
      ],
      "human": [
        "Culture de la collaboration bienveillante et du partage"
      ],
      "tools": [
        "Docker",
        "Kubernetes",
        "Terraform",
        "GitHub Actions",
        "Grafana"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "site-reliability-engineer",
      "cloud-engineer",
      "developpeur-fullstack"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "technologie-code",
      "resoudre-problemes"
    ]
  },
  {
    "id": "sre",
    "slug": "site-reliability-engineer",
    "title": "Site Reliability Engineer (SRE)",
    "aliases": [
      "Ingénieur Fiabilité des Systèmes",
      "SRE Specialist"
    ],
    "icon": "⏱️",
    "image": "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "DevOps & Platform Engineering",
    "subdomain": "Site Reliability Engineering (SRE)",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +5 (Ingénieur)",
    "salary": "750 000 - 2 200 000 FCFA / mois (Sénégal) • ~52k€ - 85k€ (France/Europe)",
    "simpleDefinition": "Le SRE applique des compétences de programmation pour s’assurer que les très grands sites web ne tombent jamais en panne, même en cas de tempête de connexions.",
    "shortDescription": "Garantit la haute disponibilité, la résilience et la scalabilité des systèmes distribués à très forte charge.",
    "longDescription": "Initié à l’origine par Google, le métier de SRE traite les opérations comme s’il s’agissait d’un problème de logiciel. Il définit les budgets d’erreurs (Error Budgets) et les objectifs de niveau de service (SLO/SLA). Quand une panne survient, il pilote la résolution d’urgence puis écrit des post-mortems constructifs pour automatiser la prévention du problème.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Gestion des métriques et alertes (SLI/SLO, Grafana, Prometheus)",
        "Ingénierie du chaos et tests de résilience",
        "Systèmes distribués à grande échelle",
        "Scripting de haute performance (Go, Python)",
        "Gestion de crise et gestion des incidents critiques"
      ],
      "analytical": [
        "Diagnostic rapide sous pression extrême"
      ],
      "creative": [
        "Création de scripts d’auto-guérison des serveurs"
      ],
      "human": [
        "Culture du post-mortem sans blâme (Blameless Post-Mortem)"
      ],
      "tools": [
        "Prometheus",
        "Grafana",
        "Kubernetes",
        "PagerDuty",
        "Terraform"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "devops-engineer",
      "cloud-architect",
      "software-engineer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "technologie-code",
      "resoudre-problemes"
    ]
  },
  {
    "id": "ux-designer",
    "slug": "ux-designer",
    "title": "UX Designer (User Experience Designer)",
    "aliases": [
      "Designer d’Expérience Utilisateur",
      "Ergonome Web",
      "Concepteur UX"
    ],
    "icon": "🧭",
    "image": "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&auto=format&fit=crop&q=80",
    "familyId": "culture-medias",
    "familyName": "Culture, Médias, Communication & Industries Créatives",
    "domain": "UX/UI & Product Design",
    "subdomain": "UX Research & Ergonomie",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "450 000 - 1 300 000 FCFA / mois (Sénégal) • ~38k€ - 58k€ (France/Europe)",
    "simpleDefinition": "L’UX Designer étudie comment les gens pensent et agissent pour rendre un site ou une application si facile et agréable à utiliser qu’on n’a jamais besoin de mode d’emploi.",
    "shortDescription": "Conçoit l’architecture de l’information, les parcours utilisateurs et les wireframes pour rendre l’expérience d’utilisation simple et intuitive.",
    "longDescription": "L’UX Designer place l’utilisateur au centre de chaque décision. Il mène des entretiens avec de vrais usagers, observe leurs difficultés, cartographie leurs parcours (User Journeys) et dessine les plans fonctionnels en noir et blanc (wireframes). Il teste ses hypothèses auprès des utilisateurs pour supprimer toute incompréhension avant que les développeurs ne commencent à coder.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Recherche utilisateur (User Research, interviews, tests d’utilisabilité)",
        "Architecture de l’information & User Flows",
        "Création de personas et Experience Maps",
        "Prototypage basse et moyenne fidélité (Wireframing)",
        "Psychologie cognitive appliquée au numérique"
      ],
      "analytical": [
        "Analyse qualitative et quantitative des comportements utilisateurs"
      ],
      "creative": [
        "Capacité à inventer des parcours simples pour des problèmes compliqués"
      ],
      "human": [
        "Empathie profonde, écoute active et absence de préjugés"
      ],
      "tools": [
        "Figma",
        "Miro / FigJam",
        "Maze",
        "Notion",
        "Hotjar"
      ]
    },
    "specializations": [
      "UX Research",
      "UX Writing (conception des textes d’interface)",
      "Ergonomie mobile",
      "Accessibilité"
    ],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "ui-designer",
      "product-designer",
      "researcher-designer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "creer-designer",
      "resoudre-problemes"
    ]
  },
  {
    "id": "ui-designer",
    "slug": "ui-designer",
    "title": "UI Designer (User Interface Designer)",
    "aliases": [
      "Designer d’Interface",
      "Designer Graphique d’Interface",
      "Concepteur Visuel Web"
    ],
    "icon": "🎨",
    "image": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",
    "familyId": "culture-medias",
    "familyName": "Culture, Médias, Communication & Industries Créatives",
    "domain": "UX/UI & Product Design",
    "subdomain": "UI Design & Interfaces",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "400 000 - 1 200 000 FCFA / mois (Sénégal) • ~36k€ - 54k€ (France/Europe)",
    "simpleDefinition": "L’UI Designer s’occupe de la beauté visuelle de l’écran : il choisit les jolies couleurs, les typographies, les icônes, les animations de boutons et la mise en page.",
    "shortDescription": "Sublime les parcours en créant des interfaces graphiques élégantes, modernes, cohérentes et attractives.",
    "longDescription": "Là où l’UX Designer s’intéresse à la logique du parcours, l’UI Designer crée l’identité visuelle concrète. Il façonne des composants graphiques harmonieux, crée le Design System de l’entreprise (la bibliothèque de boutons, cartes et champs de saisie) et s’assure que l’univers de la marque procure une émotion positive immédiate.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Maîtrise de Figma (Auto-layout, Components, Variables, Tokens)",
        "Théorie des couleurs et harmonie visuelle",
        "Typographie numérique et hiérarchie de lecture",
        "Création et maintenance de Design Systems",
        "Prototypage interactif haute fidélité"
      ],
      "analytical": [
        "Vérification des contrastes et de la lisibilité sur tous les écrans"
      ],
      "creative": [
        "Sens artistique prononcé et sens du détail millimétré"
      ],
      "human": [
        "Sensibilité esthétique et communication bienveillante"
      ],
      "tools": [
        "Figma",
        "Adobe Creative Suite (Photoshop, Illustrator)",
        "Principle",
        "IconJar"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "ux-designer",
      "product-designer",
      "webdesigner",
      "developpeur-frontend"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "creer-designer",
      "technologie-code"
    ]
  },
  {
    "id": "ux-ui-designer",
    "slug": "ux-ui-designer",
    "title": "UX/UI Designer",
    "aliases": [
      "Concepteur UX/UI",
      "Designer Polyvalent Interface & Expérience"
    ],
    "icon": "✨",
    "image": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80",
    "familyId": "culture-medias",
    "familyName": "Culture, Médias, Communication & Industries Créatives",
    "domain": "UX/UI & Product Design",
    "subdomain": "UX/UI Design",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "450 000 - 1 400 000 FCFA / mois (Sénégal) • ~38k€ - 60k€ (France/Europe)",
    "simpleDefinition": "Le profil double-compétence le plus recherché : il conçoit à la fois la simplicité du parcours (UX) et la beauté du résultat visuel (UI).",
    "shortDescription": "Prend en charge l’ensemble du processus de conception d’interface, de l’écoute utilisateur au rendu graphique final.",
    "longDescription": "Dans beaucoup de startups et d’agences au Sénégal et en Afrique, avoir une personne dédiée uniquement à l’UX et une autre à l’UI n’est pas toujours possible. L’UX/UI Designer possède les deux casquettes : il anime la phase d’enquête, dessine les wireframes et produit directement les maquettes finales prêtes pour l’intégration.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Recherche utilisateur et tests d’utilisabilité",
        "Wireframing & Prototypage interactif sur Figma",
        "Design visuel et typographie",
        "Création de Design Systems",
        "Passation fluide des maquettes aux développeurs (Design Handoff)"
      ],
      "analytical": [
        "Analyse des retours d’utilisateurs"
      ],
      "creative": [
        "Créativité globale alliant ergonomie et beauté"
      ],
      "human": [
        "Écoute, diplomatie et sens du travail en équipe"
      ],
      "tools": [
        "Figma",
        "FigJam",
        "Notion",
        "Illustrator"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "ux-designer",
      "ui-designer",
      "product-designer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "creer-designer",
      "resoudre-problemes"
    ]
  },
  {
    "id": "product-designer",
    "slug": "product-designer",
    "title": "Product Designer",
    "aliases": [
      "Designer Produit Numérique",
      "Lead Product Designer"
    ],
    "icon": "💎",
    "image": "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&auto=format&fit=crop&q=80",
    "familyId": "culture-medias",
    "familyName": "Culture, Médias, Communication & Industries Créatives",
    "domain": "UX/UI & Product Design",
    "subdomain": "Product Design",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +5 (Master Design Numérique ou Ingénieur)",
    "salary": "600 000 - 1 800 000 FCFA / mois (Sénégal) • ~45k€ - 75k€ (France/Europe)",
    "simpleDefinition": "Le Product Designer ne s’arrête pas au dessin de l’écran : il s’assure que l’application résout un vrai problème, fait gagner de l’argent à l’entreprise et fidélise les utilisateurs.",
    "shortDescription": "Conçoit les produits numériques en alignant parfaitement les désirs des utilisateurs avec les impératifs économiques de l’entreprise.",
    "longDescription": "Rôle hautement stratégique dans les startups technologiques, le Product Designer participe aux décisions produit aux côtés du Product Manager et du CTO. Il s’appuie sur les données d’utilisation, mène des tests d’utilisabilité continus et conçoit des solutions viables à la fois pour le client et pour le modèle économique de l’entreprise.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Maîtrise avancée de Figma et des Design Systems",
        "Compréhension des modèles économiques de produits (SaaS, FinTech)",
        "Analyse de données de comportement (Mixpanel, Hotjar)",
        "Méthodes de conception itérative (Design Sprints)",
        "Bases solides de développement front-end"
      ],
      "analytical": [
        "Mesure de l’impact business des décisions de design (ROI, conversion, rétention)"
      ],
      "creative": [
        "Capacité à imaginer des propositions de valeur uniques"
      ],
      "human": [
        "Leadership, communication d’influence et posture de partenaire stratégique"
      ],
      "tools": [
        "Figma",
        "Miro",
        "Mixpanel",
        "Notion",
        "Loom"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "ux-ui-designer",
      "product-manager",
      "product-owner"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "creer-designer",
      "resoudre-problemes",
      "gestion-projet"
    ]
  },
  {
    "id": "motion-designer",
    "slug": "motion-designer",
    "title": "Motion Designer",
    "aliases": [
      "Animateur Graphique",
      "Graphiste Vidéo & Mouvement",
      "Motion Graphics Artist"
    ],
    "icon": "🎞️",
    "image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80",
    "familyId": "culture-medias",
    "familyName": "Culture, Médias, Communication & Industries Créatives",
    "domain": "Design Digital & Création Graphique",
    "subdomain": "Motion Design & Animation 3D",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +2 à Bac +5",
    "salary": "400 000 - 1 300 000 FCFA / mois (Sénégal) • ~36k€ - 55k€ (France/Europe)",
    "simpleDefinition": "Le Motion Designer donne vie aux images fixes en créant des animations graphiques pour les vidéos, publicités, applications et réseaux sociaux.",
    "shortDescription": "Conçoit des contenus graphiques animés combinant illustration, typographie, son et vidéo pour captiver l’attention.",
    "longDescription": "Très sollicité dans la publicité digitale, les lancements de produits et les médias sociaux, le Motion Designer maîtrise le rythme, le timing et la physique du mouvement. Il transforme des concepts complexes en courtes animations dynamiques de 15 à 60 secondes immédiatement compréhensibles par le grand public.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "After Effects & Cinema 4D / Blender",
        "Principes fondamentaux de l’animation (Disney’s 12 principles)",
        "Illustrator & Photoshop pour la préparation des assets",
        "Sound Design et synchronisation audio",
        "Formats d’export web et réseaux sociaux (Lottie, MP4, WebM)"
      ],
      "analytical": [
        "Sens du rythme et de la narration visuelle"
      ],
      "creative": [
        "Sensibilité esthétique exceptionnelle et inventivité graphique"
      ],
      "human": [
        "Patience méticuleuse et réactivité face aux retours"
      ],
      "tools": [
        "Adobe After Effects",
        "Adobe Premiere Pro",
        "Blender",
        "Illustrator",
        "LottieFiles"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "animateur-3d",
      "content-creator",
      "directeur-artistique"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "creer-designer",
      "audiovisuel-cinema"
    ]
  },
  {
    "id": "webdesigner",
    "slug": "webdesigner",
    "title": "Webdesigner",
    "aliases": [
      "Designer de Sites Web",
      "Graphiste Web"
    ],
    "icon": "🎨",
    "image": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",
    "familyId": "culture-medias",
    "familyName": "Culture, Médias, Communication & Industries Créatives",
    "domain": "Design Digital & Création Graphique",
    "subdomain": "Webdesign & Digital Design",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +2 à Bac +3",
    "salary": "350 000 - 850 000 FCFA / mois (Sénégal) • ~32k€ - 45k€ (France/Europe)",
    "simpleDefinition": "Le webdesigner imagine et crée l’aspect visuel général d’un site web : les bannières, le style des images et la mise en page harmonieuse.",
    "shortDescription": "Crée les chartes graphiques, maquettes et visuels destinés aux sites web et aux supports de communication numérique.",
    "longDescription": "Spécialiste de la communication visuelle sur internet, le webdesigner s’assure que l’image de marque de l’entreprise est parfaitement respectée et valorisée sur le web. Il crée les visuels promotionnels, les bannières publicitaires et les habillages graphiques des portails internet.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Conception de maquettes web",
        "Retouche photo et illustration vectorielle",
        "Notions solides de HTML5 et CSS3",
        "Respect des contraintes techniques du web (poids, formats)"
      ],
      "analytical": [
        "Adaptation de la mise en page selon les publics visés"
      ],
      "creative": [
        "Inventivité visuelle et composition harmonieuse"
      ],
      "human": [
        "Sens du contact client et réactivité"
      ],
      "tools": [
        "Figma",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Canva"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "integrateur-web-developpeur-integrateur",
      "ui-designer",
      "brand-designer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "creer-designer",
      "commerce-marketing"
    ]
  },
  {
    "id": "brand-designer",
    "slug": "brand-designer",
    "title": "Brand Designer Numérique",
    "aliases": [
      "Designer de Marque",
      "Brand Identity Designer",
      "Directeur d’Identité Visuelle"
    ],
    "icon": "🏷️",
    "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80",
    "familyId": "culture-medias",
    "familyName": "Culture, Médias, Communication & Industries Créatives",
    "domain": "Design Digital & Création Graphique",
    "subdomain": "Webdesign & Digital Design",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "450 000 - 1 350 000 FCFA / mois (Sénégal) • ~38k€ - 58k€ (France/Europe)",
    "simpleDefinition": "Le Brand Designer invente la personnalité visuelle d’une entreprise : son logo, ses couleurs officielles, sa typographie et la façon dont elle s’affiche sur le web et dans la rue.",
    "shortDescription": "Construit l’identité visuelle et l’univers de marque complet des entreprises pour les rendre uniques et mémorables.",
    "longDescription": "À l’ère du digital, une marque vit principalement sur les écrans (avatars sociaux, icônes d’applications mobiles, favicons, vidéos). Le Brand Designer conçoit des chartes graphiques pensées dès le départ pour vivre sur les plateformes numériques et susciter l’attachement émotionnel des clients.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Création de logos et systèmes d’identité visuelle",
        "Conception de Brand Guidelines complètes",
        "Typographie et choix de palettes de couleurs",
        "Déclinaison cross-canal (print, web, mobile, goodies)"
      ],
      "analytical": [
        "Étude du positionnement des marques concurrentes"
      ],
      "creative": [
        "Capacité à résumer les valeurs d’une entreprise en un symbole fort"
      ],
      "human": [
        "Pédagogie pour faire adhérer les dirigeants à une vision de marque"
      ],
      "tools": [
        "Adobe Illustrator",
        "Figma",
        "Photoshop",
        "InDesign"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "directeur-artistique",
      "ui-designer",
      "motion-designer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "creer-designer",
      "commerce-marketing"
    ]
  },
  {
    "id": "animateur-3d",
    "slug": "animateur-3d",
    "title": "Animateur 3D & Infographiste 3D",
    "aliases": [
      "3D Artist",
      "Infographiste 3D",
      "3D Generalist",
      "Modélisateur 3D"
    ],
    "icon": "🧊",
    "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    "familyId": "culture-medias",
    "familyName": "Culture, Médias, Communication & Industries Créatives",
    "domain": "Design Digital & Création Graphique",
    "subdomain": "Motion Design & Animation 3D",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "400 000 - 1 400 000 FCFA / mois (Sénégal) • ~36k€ - 58k€ (France/Europe)",
    "simpleDefinition": "Il modèle et anime des objets, des décors et des personnages en trois dimensions pour le cinéma, les jeux vidéo, la publicité ou la réalité virtuelle.",
    "shortDescription": "Donne vie à des univers virtuels en relief grâce à la modélisation, la texturation, l’éclairage et l’animation 3D.",
    "longDescription": "Dans un secteur en pleine expansion en Afrique (animation, cinéma, patrimoine culturel virtuel, visualisations architecturales), l’animateur 3D maîtrise les logiciels volumiques pour sculpter des objets virtuels, leur appliquer des matières réalistes (textures) et leur insuffler du mouvement.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Modélisation 3D polygonale et sculpturale",
        "Texturing & Shading (PBR)",
        "Rigging et animation de personnages",
        "Éclairage et moteurs de rendu (Cycles, Arnold, Unreal Engine)",
        "Optimisation pour la 3D en temps réel sur le web"
      ],
      "analytical": [
        "Compréhension spatiale et physique de la lumière"
      ],
      "creative": [
        "Créativité plastique et sens de l’anatomie en mouvement"
      ],
      "human": [
        "Patience d’artisan et rigueur d’organisation des fichiers"
      ],
      "tools": [
        "Blender",
        "Autodesk Maya",
        "Substance 3D Painter",
        "Unreal Engine",
        "ZBrush"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "motion-designer",
      "creative-technologist",
      "content-creator"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "creer-designer",
      "audiovisuel-cinema"
    ]
  },
  {
    "id": "content-creator",
    "slug": "content-creator",
    "title": "Créateur de Contenu Digital (Content Creator)",
    "aliases": [
      "Content Creator",
      "Créateur de Médias Digitaux",
      "Vidéaste Web",
      "Digital Producer"
    ],
    "icon": "📹",
    "image": "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop&q=80",
    "familyId": "culture-medias",
    "familyName": "Culture, Médias, Communication & Industries Créatives",
    "domain": "Audiovisuel & Digital Content",
    "subdomain": "Création de contenu digital",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +2 à Bac +3",
    "salary": "350 000 - 1 100 000 FCFA / mois (Sénégal) • ~32k€ - 50k€ (France/Europe)",
    "simpleDefinition": "Le créateur de contenu produit des vidéos, des visuels et des textes accrocheurs pour captiver l’attention du public sur TikTok, YouTube, Instagram et LinkedIn.",
    "shortDescription": "Écrit, filme, monte et diffuse des contenus audiovisuels créatifs adaptés aux nouveaux usages des réseaux sociaux.",
    "longDescription": "À l’ère du streaming et des flux vidéo courts (Reels, TikTok), le créateur de contenu sait capter l’attention en moins de 3 secondes. Il maîtrise toute la chaîne de production légère : écriture du script (storytelling), tournage au smartphone ou caméra pro, éclairage, prise de son, montage rythmé et sous-titrage dynamique.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Cadrage et tournage vidéo",
        "Montage vidéo rythmé (Premiere Pro, CapCut)",
        "Prise de son et mixage vocal propre",
        "Techniques de Storytelling et de Hook (accroche)",
        "Optimisation pour les algorithmes des plateformes"
      ],
      "analytical": [
        "Analyse des statistiques de rétention et d’engagement"
      ],
      "creative": [
        "Inventivité constante et adaptation aux tendances culturelles"
      ],
      "human": [
        "Aisance face caméra et authenticité"
      ],
      "tools": [
        "Premiere Pro / DaVinci Resolve",
        "CapCut",
        "Microphones sans fil",
        "Canva",
        "YouTube Studio"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "motion-designer",
      "social-media-manager",
      "community-manager"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "creer-designer",
      "audiovisuel-cinema",
      "commerce-marketing"
    ]
  },
  {
    "id": "charge-production",
    "slug": "charge-de-production",
    "title": "Chargé de Production Digitale",
    "aliases": [
      "Digital Production Coordinator",
      "Producteur de Contenus Digitaux"
    ],
    "icon": "🎬",
    "image": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop&q=80",
    "familyId": "culture-medias",
    "familyName": "Culture, Médias, Communication & Industries Créatives",
    "domain": "Audiovisuel & Digital Content",
    "subdomain": "Production vidéo & audiovisuelle",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "400 000 - 1 200 000 FCFA / mois (Sénégal) • ~35k€ - 52k€ (France/Europe)",
    "simpleDefinition": "Il organise les tournages et les créations audiovisuelles : plannings, budgets, équipes, matériel et autorisations, pour que tout soit prêt le jour J.",
    "shortDescription": "Coordonne l’ensemble des aspects techniques, logistiques, financiers et humains des productions audiovisuelles numériques.",
    "longDescription": "Le chargé de production est le garant logistique et financier des projets médias. Il veille au respect du budget alloué, réserve les lieux de tournage, recrute les techniciens (cadreurs, monteurs, preneurs de son) et s’assure que les livrables sont fournis dans les délais impartis au client.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Gestion de budget de production",
        "Planification logistique et feuilles de route",
        "Droit à l’image et contrats d’auteurs",
        "Connaissance de la chaîne technique audiovisuelle"
      ],
      "analytical": [
        "Maîtrise des coûts et des calendriers serrés"
      ],
      "creative": [
        "Capacité à trouver des solutions logistiques ingénieuses"
      ],
      "human": [
        "Sens de l’organisation, diplomatie et leadership d’équipe"
      ],
      "tools": [
        "Excel / Google Sheets",
        "Notion",
        "Asana / Trello",
        "Logiciels de devis"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "content-creator",
      "chef-de-projet-digital"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "gestion-projet",
      "audiovisuel-cinema"
    ]
  },
  {
    "id": "charge-marketing-digital",
    "slug": "charge-de-marketing-digital",
    "title": "Chargé de Marketing Digital",
    "aliases": [
      "Digital Marketing Specialist",
      "Coordinateur Marketing Digital",
      "Chargé d’Acquisition & Visibilité"
    ],
    "icon": "📣",
    "image": "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop&q=80",
    "familyId": "commerce-marketing",
    "familyName": "Commerce, Vente, Marketing & E-Commerce",
    "domain": "Marketing Digital & Acquisition",
    "subdomain": "Growth & Acquisition",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "400 000 - 1 200 000 FCFA / mois (Sénégal) • ~35k€ - 52k€ (France/Europe)",
    "simpleDefinition": "Il met en œuvre les actions sur internet pour faire connaître une entreprise, attirer de nouveaux clients et les inciter à acheter.",
    "shortDescription": "Déploie et pilote les campagnes de promotion en ligne à travers les emails, les réseaux sociaux, la publicité et le contenu.",
    "longDescription": "Le chargé de marketing digital exécute la stratégie commerciale sur les canaux numériques. Il rédige et envoie des newsletters, gère des budgets de publicité en ligne, collabore avec des influenceurs et analyse les résultats de chaque action pour améliorer le chiffre d’affaires.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Gestion de campagnes publicitaires (Meta Ads, Google Ads)",
        "Emailing et marketing automation (Brevo, Mailchimp)",
        "Gestion de réseaux sociaux professionnels",
        "Notions de SEO et création de contenu",
        "Analyse du retour sur investissement (ROI)"
      ],
      "analytical": [
        "Suivi rigoureux des taux de clics et de transformation"
      ],
      "creative": [
        "Rédaction de messages accrocheurs"
      ],
      "human": [
        "Curiosité, réactivité et sens commercial"
      ],
      "tools": [
        "Meta Business Suite",
        "Google Ads",
        "Mailchimp / Brevo",
        "Canva",
        "Google Analytics"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "growth-hacker",
      "traffic-manager",
      "social-media-manager"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "commerce-marketing",
      "creer-designer"
    ]
  },
  {
    "id": "consultant-seo-sea",
    "slug": "consultant-seo-sea",
    "title": "Consultant SEO / SEA (Référencement Web)",
    "aliases": [
      "Search Marketer",
      "Expert Référencement Google",
      "Consultant Search"
    ],
    "icon": "🔍",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&auto=format&fit=crop&q=80",
    "familyId": "commerce-marketing",
    "familyName": "Commerce, Vente, Marketing & E-Commerce",
    "domain": "Marketing Digital & Acquisition",
    "subdomain": "SEO & Référencement naturel",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "450 000 - 1 400 000 FCFA / mois (Sénégal) • ~38k€ - 58k€ (France/Europe)",
    "simpleDefinition": "C’est le spécialiste qui place les sites web en première position sur Google, soit gratuitement grâce à un bon contenu (SEO), soit par des annonces publicitaires payantes (SEA).",
    "shortDescription": "Optimise la visibilité des sites sur les moteurs de recherche pour attirer un flux constant de visiteurs qualifiés.",
    "longDescription": "Google est la première source de clients pour beaucoup d’entreprises. Le consultant SEO/SEA analyse les mots recherchés par les internautes, optimise le code et les textes du site (SEO naturel) et gère les enchères publicitaires Google Ads (SEA) pour garantir que l’entreprise apparaisse avant ses concurrents lors des recherches clés.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Audit technique SEO (crawl, vitesse, balisage, indexation)",
        "Recherche de mots-clés et stratégie sémantique",
        "Gestion de campagnes Google Ads (Search, Display, Performance Max)",
        "Netlinking et autorité de domaine",
        "Suivi du positionnement et reporting"
      ],
      "analytical": [
        "Compréhension fine des algorithmes de recherche Google"
      ],
      "creative": [
        "Rédaction de titres et méta-descriptions irrésistibles au clic"
      ],
      "human": [
        "Patience face aux délais d’indexation et force de conseil"
      ],
      "tools": [
        "Google Search Console",
        "Ahrefs / Semrush",
        "Google Ads",
        "Screaming Frog",
        "GA4"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "charge-de-compte-adwords",
      "growth-hacker",
      "web-analyst"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "commerce-marketing",
      "analyser-chiffres"
    ]
  },
  {
    "id": "growth-hacker",
    "slug": "growth-hacker",
    "title": "Growth Hacker / Growth Marketer",
    "aliases": [
      "Growth Marketer",
      "Spécialiste Croissance Digitale",
      "Responsable Growth"
    ],
    "icon": "🚀",
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    "familyId": "commerce-marketing",
    "familyName": "Commerce, Vente, Marketing & E-Commerce",
    "domain": "Marketing Digital & Acquisition",
    "subdomain": "Growth & Acquisition",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "500 000 - 1 600 000 FCFA / mois (Sénégal) • ~40k€ - 68k€ (France/Europe)",
    "simpleDefinition": "Le Growth Hacker utilise des méthodes astucieuses, des outils d’automatisation et des tests rapides pour faire grandir le nombre d’utilisateurs d’une startup à toute vitesse.",
    "shortDescription": "Combine le marketing, les données et le code pour expérimenter et accélérer la croissance rapide d’un produit.",
    "longDescription": "Né dans les startups de la Silicon Valley, le Growth Hacker s’appuie sur le framework AARRR (Acquisition, Activation, Rétention, Recommandation, Revenu). Il teste en permanence de nouvelles idées (scraping éthique, automatisations d’emails, tests de pages d’atterrissage) et ne garde que ce qui génère une croissance exponentielle avec un budget modeste.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Framework AARRR et méthodologie d’expérimentation rapide",
        "Scraping de données et automatisation (Make, Zapier, Python)",
        "A/B Testing et optimisation de conversion",
        "Copywriting persuasif et landing pages rapides",
        "Analyse de données de cohorte"
      ],
      "analytical": [
        "Orientation totale vers les indicateurs de croissance"
      ],
      "creative": [
        "Idées originales et non conventionnelles pour capter des prospects"
      ],
      "human": [
        "Résilience face aux échecs d’expériences et curiosité insatiable"
      ],
      "tools": [
        "Make / Zapier",
        "Phantombuster",
        "Google Tag Manager",
        "PostHog / Mixpanel",
        "Webflow"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "charge-de-marketing-digital",
      "product-manager",
      "data-analyst"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "commerce-marketing",
      "resoudre-problemes",
      "technologie-code"
    ]
  },
  {
    "id": "social-media-manager",
    "slug": "social-media-manager",
    "title": "Social Media Manager",
    "aliases": [
      "Responsable Médias Sociaux",
      "Stratège Réseaux Sociaux",
      "SMM"
    ],
    "icon": "📱",
    "image": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80",
    "familyId": "commerce-marketing",
    "familyName": "Commerce, Vente, Marketing & E-Commerce",
    "domain": "Marketing Digital & Acquisition",
    "subdomain": "Social Media Management & Community",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "400 000 - 1 200 000 FCFA / mois (Sénégal) • ~35k€ - 52k€ (France/Europe)",
    "simpleDefinition": "Il définit la stratégie d’une marque sur tous les réseaux sociaux pour faire grandir la communauté et soigner la réputation de l’entreprise.",
    "shortDescription": "Élabore la stratégie de présence, la ligne éditoriale et les campagnes d’engagement d’une organisation sur les plateformes sociales.",
    "longDescription": "Le Social Media Manager pilote la voix de l’entreprise sur LinkedIn, Instagram, TikTok, Facebook ou X. Il établit le calendrier de publication, coordonne les créateurs de contenu et les community managers, noue des partenariats avec des créateurs d’influence et veille à protéger l’e-réputation de la marque en cas de crise.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Stratégie de contenu social et calendriers éditoriaux",
        "Gestion de l’e-réputation et communication de crise",
        "Publicité payante sur les réseaux sociaux (Social Ads)",
        "Marketing d’influence et relations créateurs",
        "Analyse des KPI d’engagement et de portée"
      ],
      "analytical": [
        "Compréhension des tendances et des métriques d’audience"
      ],
      "creative": [
        "Inventivité éditoriale et ton conversationnel adapté"
      ],
      "human": [
        "Excellente plume, diplomatie et réactivité"
      ],
      "tools": [
        "Buffer / Hootsuite / Metricool",
        "Canva",
        "Meta Business Suite",
        "Notion",
        "Brand24"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "community-manager",
      "content-creator",
      "charge-de-marketing-digital"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "commerce-marketing",
      "creer-designer"
    ]
  },
  {
    "id": "community-manager",
    "slug": "community-manager",
    "title": "Community Manager",
    "aliases": [
      "Animateur de Communauté en Ligne",
      "Modérateur Web & Réseaux Sociaux"
    ],
    "icon": "💬",
    "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",
    "familyId": "commerce-marketing",
    "familyName": "Commerce, Vente, Marketing & E-Commerce",
    "domain": "Marketing Digital & Acquisition",
    "subdomain": "Social Media Management & Community",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +2 à Bac +3",
    "salary": "300 000 - 800 000 FCFA / mois (Sénégal) • ~30k€ - 42k€ (France/Europe)",
    "simpleDefinition": "Il parle tous les jours avec les abonnés sur les réseaux sociaux : il répond aux messages, anime les discussions et crée une ambiance conviviale.",
    "shortDescription": "Fédère, anime et modère au quotidien les échanges entre les membres de la communauté autour d’une marque ou d’un projet.",
    "longDescription": "Le Community Manager est le visage chaleureux et accessible de l’entreprise sur le web. Il répond aux questions des internautes avec courtoisie, désamorce les mécontentements, publie des sondages et des quiz pour susciter l’engagement et fait remonter les avis des clients aux équipes techniques et commerciales.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Animation de communautés (Discord, WhatsApp, Instagram, LinkedIn)",
        "Modération et gestion des commentaires sensibles",
        "Création de visuels et carrousels simples",
        "Maîtrise parfaite de l’orthographe et de la grammaire"
      ],
      "analytical": [
        "Mesure de l’activité quotidienne de la communauté"
      ],
      "creative": [
        "Sens de l’humour bienveillant et de la répartie"
      ],
      "human": [
        "Empathie, patience et grand sens du contact humain"
      ],
      "tools": [
        "Canva",
        "WhatsApp Business",
        "Meta Suite",
        "Discord",
        "Trello"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "social-media-manager",
      "content-creator"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "commerce-marketing",
      "creer-designer"
    ]
  },
  {
    "id": "responsable-e-commerce",
    "slug": "responsable-e-commerce",
    "title": "Responsable E-Commerce",
    "aliases": [
      "E-Commerce Manager",
      "Directeur Vente en Ligne",
      "Head of E-Commerce"
    ],
    "icon": "🛒",
    "image": "https://images.unsplash.com/photo-1556742049-0a67e5572293?w=800&auto=format&fit=crop&q=80",
    "familyId": "commerce-marketing",
    "familyName": "Commerce, Vente, Marketing & E-Commerce",
    "domain": "E-commerce & Marketplace",
    "subdomain": "E-commerce Management",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +5 (Master Marketing / E-business)",
    "salary": "600 000 - 1 800 000 FCFA / mois (Sénégal) • ~45k€ - 70k€ (France/Europe)",
    "simpleDefinition": "C’est le patron du magasin en ligne : il s’assure que les produits sont bien présentés, que les commandes arrivent vite aux clients et que le chiffre d’affaires augmente.",
    "shortDescription": "Pilote la stratégie commerciale, la logistique et l’expérience d’achat des boutiques en ligne pour maximiser les ventes.",
    "longDescription": "Le responsable e-commerce orchestre tout ce qui permet de vendre sur internet : le choix des plateformes marchandes (Shopify, WooCommerce, Magento), l’intégration des moyens de paiement sécurisés (cartes, Mobile Money), la fluidité des livraisons à domicile et le service après-vente.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Plateformes E-Commerce (Shopify, PrestaShop, WooCommerce)",
        "Intégration de paiements locaux (Wave, Orange Money) et internationaux",
        "Optimisation du tunnel de vente et gestion des paniers abandonnés",
        "Gestion de stocks et logistique de livraison du dernier kilomètre",
        "Calcul des marges et du coût d’acquisition client (CAC)"
      ],
      "analytical": [
        "Analyse quotidienne des indicateurs de vente et de rentabilité"
      ],
      "creative": [
        "Création d’offres promotionnelles irrésistibles"
      ],
      "human": [
        "Leadership commercial et négociation avec les fournisseurs"
      ],
      "tools": [
        "Shopify",
        "Google Analytics 4",
        "Klaviyo",
        "Excel",
        "Stripe / PayDunya"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "traffic-manager",
      "product-manager",
      "charge-de-marketing-digital"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "commerce-marketing",
      "gestion-projet"
    ]
  },
  {
    "id": "product-manager",
    "slug": "product-manager",
    "title": "Product Manager (PM)",
    "aliases": [
      "Chef de Produit Numérique",
      "Digital Product Manager",
      "Lead PM"
    ],
    "icon": "🎯",
    "image": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80",
    "familyId": "commerce-marketing",
    "familyName": "Commerce, Vente, Marketing & E-Commerce",
    "domain": "Product Management & Digital Business",
    "subdomain": "Product Management & Ownership",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +5 (École de Commerce ou Ingénieur)",
    "salary": "700 000 - 2 200 000 FCFA / mois (Sénégal) • ~50k€ - 85k€ (France/Europe)",
    "simpleDefinition": "Le Product Manager est le « mini-PDG » d’une application : il décide quelles nouvelles fonctions doivent être créées en priorité pour ravir les utilisateurs tout en développant le business.",
    "shortDescription": "Définit la vision, la stratégie et la feuille de route d’un produit numérique en guidant les équipes de développeurs et de designers.",
    "longDescription": "Au carrefour de la technologie, du design et du business, le Product Manager ne manage personne directement par autorité hiérarchique : il convainc par la clarté de sa vision et par la solidité des données. Il analyse les retours des utilisateurs, priorise la feuille de route (Roadmap) et s’assure que chaque nouvelle version du logiciel résout un vrai problème.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Définition de Roadmap produit et priorisation (RICE, MoSCoW)",
        "Compréhension solide de l’architecture logicielle et des APIs",
        "Analyse de métriques produit (NPS, churn, rétention, LTV)",
        "Méthodologies Agiles et pilotage de sprints",
        "Animation d’ateliers de découverte utilisateur (Product Discovery)"
      ],
      "analytical": [
        "Arbitrage pragmatique entre ce qui est souhaitable et ce qui est faisable"
      ],
      "creative": [
        "Sens aigu de l’innovation utile et intuitive"
      ],
      "human": [
        "Excellente communication orale et écrite, écoute et négociation"
      ],
      "tools": [
        "Jira / Linear",
        "Productboard / Notion",
        "Mixpanel",
        "Figma (lecture)",
        "Miro"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "product-owner",
      "product-designer",
      "business-analyst"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "gestion-projet",
      "commerce-marketing",
      "resoudre-problemes"
    ]
  },
  {
    "id": "product-owner",
    "slug": "product-owner",
    "title": "Product Owner (PO)",
    "aliases": [
      "Responsable Produit Agile",
      "Propriétaire de Produit"
    ],
    "icon": "📋",
    "image": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
    "familyId": "droit-management",
    "familyName": "Droit, Administration, Management & Services Professionnels",
    "domain": "Product Management & Digital Business",
    "subdomain": "Product Management & Ownership",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "550 000 - 1 600 000 FCFA / mois (Sénégal) • ~42k€ - 65k€ (France/Europe)",
    "simpleDefinition": "Le Product Owner travaille au quotidien avec les développeurs : il découpe les grandes idées en fiches de tâches précises et vérifie que tout fonctionne avant la livraison.",
    "shortDescription": "Gère le carnet de commandes (Backlog) de l’équipe de développement et clarifie chaque fonctionnalité au jour le jour.",
    "longDescription": "Acteur clé des méthodes Agiles (Scrum), le Product Owner transforme la vision stratégique en « User Stories » détaillées. Pendant les réunions quotidiennes et les revues de sprint, il répond aux questions techniques des développeurs, valide les fonctionnalités terminées et s’assure que l’équipe produit toujours ce qui a le plus de valeur pour les utilisateurs.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Méthode Scrum et rédaction de User Stories",
        "Gestion et priorisation du Backlog produit",
        "Définition des critères d’acceptation (Acceptance Criteria)",
        "Participation active aux cérémonies agiles (Sprint Planning, Retro)",
        "Tests de recette fonctionnelle"
      ],
      "analytical": [
        "Précision logique et traçabilité des exigences"
      ],
      "creative": [
        "Capacité à trouver des solutions simples pour livrer vite"
      ],
      "human": [
        "Disponibilité permanente pour l’équipe technique et bienveillance"
      ],
      "tools": [
        "Jira",
        "Trello / Linear",
        "Confluence",
        "Figma"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "product-manager",
      "chef-de-projet-digital",
      "business-analyst"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "gestion-projet",
      "resoudre-problemes"
    ]
  },
  {
    "id": "customer-success-manager",
    "slug": "customer-success-manager",
    "title": "Customer Success Manager (CSM)",
    "aliases": [
      "Responsable Réussite Client",
      "Gestionnaire Succès Client",
      "Client Success Specialist"
    ],
    "icon": "🤝",
    "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80",
    "familyId": "commerce-marketing",
    "familyName": "Commerce, Vente, Marketing & E-Commerce",
    "domain": "Product Management & Digital Business",
    "subdomain": "Customer Success & CRM",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "450 000 - 1 350 000 FCFA / mois (Sénégal) • ~38k€ - 58k€ (France/Europe)",
    "simpleDefinition": "Le CSM accompagne les clients après leur achat pour s’assurer qu’ils utilisent bien le logiciel, qu’ils en tirent profit et qu’ils restent abonnés pour longtemps.",
    "shortDescription": "Accompagne les clients professionnels dans la prise en main et la rentabilisation de leurs solutions logicielles.",
    "longDescription": "Dans le modèle économique des logiciels sur abonnement (SaaS), le succès de l’entreprise dépend du fait que les clients ne se désabonnent pas. Le CSM forme les utilisateurs, surveille leur niveau d’activité sur la plateforme et les aide à surmonter les blocages. Il transforme des clients hésitants en ambassadeurs fidèles.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Outils CRM (HubSpot, Salesforce)",
        "Analyse de la santé client (Customer Health Score)",
        "Techniques d’onboarding et de formation logicielle",
        "Gestion des risques de résiliation (Churn)"
      ],
      "analytical": [
        "Détection des signaux faibles d’insatisfaction"
      ],
      "creative": [
        "Création de guides d’utilisation clairs et inspirants"
      ],
      "human": [
        "Sens profond du service, empathie et aisance relationnelle"
      ],
      "tools": [
        "HubSpot",
        "Zendesk",
        "Gainsight",
        "Loom",
        "Slack"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "account-manager",
      "product-manager",
      "consultant-crm"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "commerce-marketing",
      "gestion-projet"
    ]
  },
  {
    "id": "chef-de-projet-digital",
    "slug": "chef-de-projet-digital",
    "title": "Chef de Projet Digital",
    "aliases": [
      "Chef de Projet Web & Multimédia",
      "Digital Project Manager",
      "Coordinateur de Projet Digital"
    ],
    "icon": "🗂️",
    "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80",
    "familyId": "droit-management",
    "familyName": "Droit, Administration, Management & Services Professionnels",
    "domain": "Product Management & Digital Business",
    "subdomain": "Direction de Projets Digitaux",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "450 000 - 1 400 000 FCFA / mois (Sénégal) • ~38k€ - 58k€ (France/Europe)",
    "simpleDefinition": "C’est le chef d’orchestre du projet numérique : il coordonne les graphistes, les développeurs et les clients pour que le site soit livré à l’heure et dans le budget.",
    "shortDescription": "Planifie, coordonne et supervise la réalisation de projets internet, mobiles ou multimédias du début à la fin.",
    "longDescription": "Le chef de projet digital prend le projet en main dès la signature : il rédige le calendrier de production, répartit les missions entre les différents spécialistes, veille au respect du budget et reste l’interlocuteur privilégié du client pour le rassurer et lui présenter les avancées.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Gestion de projet classique et Agile",
        "Élaboration de plannings (Gantt) et budgets",
        "Culture générale web (code, design, référencement)",
        "Recette et contrôle qualité des livrables"
      ],
      "analytical": [
        "Anticipation des retards et gestion des imprévus"
      ],
      "creative": [
        "Capacité à trouver des compromis acceptables par tous"
      ],
      "human": [
        "Organisation sans faille, leadership et diplomatie"
      ],
      "tools": [
        "Trello / Asana",
        "MS Project / Notion",
        "Miro",
        "Excel"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "product-owner",
      "charge-de-production"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "gestion-projet",
      "commerce-marketing"
    ]
  },
  {
    "id": "charge-dinnovation",
    "slug": "charge-dinnovation",
    "title": "Chargé d’Innovation Digitale",
    "aliases": [
      "Innovation Manager",
      "Responsable Innovation Numérique",
      "Lead Innovateur"
    ],
    "icon": "💡",
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "Innovation & Transformation Digitale",
    "subdomain": "Management de l’innovation",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +5 (Master Innovation, Management ou Ingénieur)",
    "salary": "600 000 - 1 800 000 FCFA / mois (Sénégal) • ~45k€ - 75k€ (France/Europe)",
    "simpleDefinition": "Il explore les nouvelles technologies (IA, blockchain, objets connectés) pour imaginer les futurs services ou produits de l’entreprise avant ses concurrents.",
    "shortDescription": "Détecte les technologies émergentes, teste des prototypes novateurs et diffuse la culture de l’innovation dans l’organisation.",
    "longDescription": "Toujours tourné vers l’avenir, le chargé d’innovation organise des hackathons, monte des partenariats avec des startups et des laboratoires universitaires, et teste de nouveaux concepts (PoC - Proof of Concept) pour vérifier si une nouvelle technologie peut résoudre un problème de façon révolutionnaire.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Veille prospective sur les technologies émergentes",
        "Méthodes de Design Thinking et prototypage rapide",
        "Organisation de hackathons et d’appels à projets",
        "Montage de partenariats écosystème startup / université"
      ],
      "analytical": [
        "Évaluation du potentiel économique des innovations"
      ],
      "creative": [
        "Vision disruptive et pensée hors des sentiers battus"
      ],
      "human": [
        "Enthousiasme contagieux, force de conviction et curiosité"
      ],
      "tools": [
        "Miro",
        "Notion",
        "Plateformes de veille tech",
        "Outils de prototypage no-code"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "consultant-strategie-digitale",
      "chief-digital-officer-cdo"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "recherche-innovation",
      "technologie-code",
      "gestion-projet"
    ]
  },
  {
    "id": "chief-digital-officer",
    "slug": "chief-digital-officer-cdo",
    "title": "Chief Digital Officer (CDO)",
    "aliases": [
      "Directeur de la Transformation Digitale",
      "Directeur du Numérique"
    ],
    "icon": "👑",
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "Innovation & Transformation Digitale",
    "subdomain": "Stratégie digitale & CDO",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +5 + Grande expérience de direction",
    "salary": "1 200 000 - 3 500 000 FCFA / mois (Sénégal) • ~80k€ - 140k€ (France/Europe)",
    "simpleDefinition": "Membre de la direction générale, il guide toute l’entreprise pour qu’elle se modernise grâce au numérique (outils des employés, relation client, nouveaux métiers).",
    "shortDescription": "Définit et pilote la stratégie globale de transformation numérique d’une organisation pour assurer sa compétitivité durable.",
    "longDescription": "Le Chief Digital Officer siège au comité de direction. Il n’est pas seulement un technicien : c’est un stratège qui transforme les manières de travailler, modernise la culture d’entreprise et fait du digital le moteur de la croissance future.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Stratégie d’entreprise et gouvernance numérique",
        "Conduite du changement à grande échelle",
        "Culture globale des architectures tech, cloud, data et IA"
      ],
      "analytical": [
        "Vision prospective sur les bouleversements de marché"
      ],
      "creative": [
        "Capacité à réinventer des modèles économiques entiers"
      ],
      "human": [
        "Leadership inspirant, intelligence émotionnelle et négociation"
      ],
      "tools": [
        "Outils de pilotage stratégique",
        "Tableaux de bord de direction",
        "Miro"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "charge-dinnovation",
      "consultant-strategie-digitale"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "gestion-projet",
      "recherche-innovation"
    ]
  },
  {
    "id": "consultant-strategie-digitale",
    "slug": "consultant-strategie-digitale",
    "title": "Consultant en Stratégie Digitale",
    "aliases": [
      "Digital Strategy Consultant",
      "Conseiller en Transformation Numérique"
    ],
    "icon": "🧭",
    "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
    "familyId": "droit-management",
    "familyName": "Droit, Administration, Management & Services Professionnels",
    "domain": "Innovation & Transformation Digitale",
    "subdomain": "Stratégie digitale & CDO",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +5 (Grande École ou Master)",
    "salary": "600 000 - 1 900 000 FCFA / mois (Sénégal) • ~48k€ - 80k€ (France/Europe)",
    "simpleDefinition": "C’est un expert externe qui aide les dirigeants d’entreprise à comprendre où investir dans le numérique pour gagner des parts de marché et ne pas se laisser dépasser.",
    "shortDescription": "Accompagne les dirigeants dans l’élaboration et la mise en œuvre de leur feuille de route de transformation technologique.",
    "longDescription": "Intervenant en cabinet de conseil ou en indépendant, le consultant en stratégie digitale ausculte l’organisation, benchmark les concurrents mondiaux et propose un plan d’action chiffré pour moderniser l’offre commerciale, former les équipes et digitaliser les processus.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Diagnostic de maturité digitale",
        "Benchmark concurrentiel international",
        "Modélisation financière et business plan digital",
        "Présentations percutantes pour comités de direction"
      ],
      "analytical": [
        "Esprit d’analyse stratégique et structuration d’arguments"
      ],
      "creative": [
        "Identification de relais de croissance inexploités"
      ],
      "human": [
        "Aisance relationnelle de haut niveau et sens du conseil"
      ],
      "tools": [
        "PowerPoint / Keynote",
        "Excel avancé",
        "Miro",
        "Gartner / Forrester"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "chief-digital-officer-cdo",
      "business-analyst",
      "charge-dinnovation"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "gestion-projet",
      "recherche-innovation"
    ]
  },
  {
    "id": "dev-app-web",
    "slug": "developpeur-dapplications-web",
    "title": "Développeur d’Applications Web",
    "aliases": [
      "Web App Developer",
      "Ingénieur Applications Web"
    ],
    "icon": "💻",
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "Informatique & Développement",
    "subdomain": "Développement web",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "450 000 - 1 350 000 FCFA / mois (Sénégal) • ~38k€ - 58k€ (France/Europe)",
    "simpleDefinition": "Il conçoit des logiciels complexes qui fonctionnent directement à l’intérieur d’un navigateur internet sans avoir besoin d’être installés sur l’ordinateur.",
    "shortDescription": "Développe des plateformes SaaS et applications web interactives, rapides et sécurisées pour les entreprises et le grand public.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "TypeScript / JavaScript",
        "React / Next.js",
        "APIs RESTful & WebSockets",
        "Gestion d’état complexe",
        "Bases de données SQL"
      ],
      "analytical": [
        "Résolution des problèmes de synchronisation en temps réel"
      ],
      "creative": [
        "Interfaces interactives et dynamiques"
      ],
      "human": [
        "Rigueur et esprit d’équipe"
      ],
      "tools": [
        "VS Code",
        "Git",
        "Postman",
        "Supabase",
        "Vercel"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "developpeur-fullstack",
      "developpeur-frontend",
      "architecte-web"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "technologie-code",
      "resoudre-problemes"
    ]
  },
  {
    "id": "ai-researcher",
    "slug": "ai-researcher",
    "title": "Chercheur en Intelligence Artificielle (AI Researcher)",
    "aliases": [
      "AI Scientist",
      "Chercheur Machine Learning",
      "Docteur en IA"
    ],
    "icon": "🔬",
    "image": "https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "Intelligence Artificielle & Machine Learning",
    "subdomain": "Deep Learning",
    "sourceESD": false,
    "isEmerging": true,
    "level": "Bac +8 (Doctorat / Ph.D en Informatique ou Mathématiques)",
    "salary": "900 000 - 3 000 000 FCFA / mois (Sénégal) • ~65k€ - 120k€ (France/Europe)",
    "simpleDefinition": "C’est le scientifique qui invente les nouveaux algorithmes d’intelligence artificielle de demain, en écrivant des théories mathématiques et en publiant des articles de recherche.",
    "shortDescription": "Explore les frontières scientifiques de l’apprentissage automatique et conçoit les architectures de réseaux neuronaux du futur.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Mathématiques pures et appliquées",
        "PyTorch / JAX",
        "Recherche fondamentale en Deep Learning",
        "Rédaction d’articles scientifiques (NeurIPS, ICML)",
        "Calcul haute performance (HPC / GPU clusters)"
      ],
      "analytical": [
        "Capacité d’abstraction scientifique hors pair"
      ],
      "creative": [
        "Invention de nouvelles approches d’apprentissage"
      ],
      "human": [
        "Patience, persévérance et rigueur scientifique"
      ],
      "tools": [
        "PyTorch",
        "Jupyter",
        "Linux / SLURM",
        "LaTeX",
        "ArXiv"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "ingenieur-ia",
      "machine-learning-engineer",
      "llm-engineer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "recherche-innovation",
      "technologie-code",
      "resoudre-problemes"
    ]
  },
  {
    "id": "llm-engineer",
    "slug": "llm-engineer",
    "title": "LLM Engineer (Large Language Model Engineer)",
    "aliases": [
      "Ingénieur Modèles de Langage",
      "Spécialiste LLM",
      "Fondation Model Engineer"
    ],
    "icon": "📚",
    "image": "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "Intelligence Artificielle & Machine Learning",
    "subdomain": "IA Générative & LLM",
    "sourceESD": false,
    "isEmerging": true,
    "level": "Bac +5 à Bac +8",
    "salary": "800 000 - 2 500 000 FCFA / mois (Sénégal) • ~60k€ - 110k€ (France/Europe)",
    "simpleDefinition": "Il est spécialisé dans les gigantesques modèles d’intelligence artificielle capables de comprendre et de parler les langues humaines pour les adapter aux besoins spécifiques des entreprises.",
    "shortDescription": "Adapte, affine (fine-tuning) et déploie des modèles de langage avancés pour traiter le texte, la voix et les documents à grande échelle.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Architecture Transformer",
        "Techniques de fine-tuning (LoRA, QLoRA)",
        "Inférence optimisée (vLLM, Ollama)",
        "RAG avancé & Vector Databases",
        "Python & PyTorch"
      ],
      "analytical": [
        "Évaluation objective de la qualité linguistique des réponses"
      ],
      "creative": [
        "Adaptation de modèles aux langues locales (Wolof, Pulaar, Sérère)"
      ],
      "human": [
        "Veille permanente face à l’évolution hebdomadaire des modèles"
      ],
      "tools": [
        "Hugging Face",
        "vLLM",
        "Ollama",
        "LangChain",
        "Python"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "generative-ai-engineer",
      "prompt-engineer",
      "ai-engineer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "technologie-code",
      "recherche-innovation"
    ]
  },
  {
    "id": "generative-ai-engineer",
    "slug": "generative-ai-engineer",
    "title": "Generative AI Engineer (Ingénieur en IA Générative)",
    "aliases": [
      "Ingénieur GenAI",
      "Spécialiste IA Générative Multimodale"
    ],
    "icon": "✨",
    "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "Intelligence Artificielle & Machine Learning",
    "subdomain": "IA Générative & LLM",
    "sourceESD": false,
    "isEmerging": true,
    "level": "Bac +5",
    "salary": "750 000 - 2 200 000 FCFA / mois (Sénégal) • ~55k€ - 95k€ (France/Europe)",
    "simpleDefinition": "Il crée des outils capables de générer automatiquement des images, des voix, du texte ou des vidéos à partir de simples instructions écrites.",
    "shortDescription": "Construit des solutions logicielles exploitant la génération automatique de texte, d’images, de code et d’audio.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Modèles multimodaux (Vision-Language, Audio, Image)",
        "Diffusion models (Stable Diffusion) & LLMs",
        "Orchestration d’agents (AutoGen, CrewAI)",
        "Intégration d’APIs d’IA générative"
      ],
      "analytical": [
        "Mesure de l’utilité et de la pertinence des créations synthétiques"
      ],
      "creative": [
        "Combinaison inédite de textes, sons et visuels"
      ],
      "human": [
        "Sensibilité aux questions de droits d’auteur et d’éthique"
      ],
      "tools": [
        "ComfyUI",
        "Hugging Face",
        "Python",
        "Docker",
        "CrewAI"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "prompt-engineer",
      "llm-engineer",
      "ai-engineer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "technologie-code",
      "creer-designer"
    ]
  },
  {
    "id": "bi-analyst",
    "slug": "bi-analyst",
    "title": "BI Analyst (Business Intelligence Analyst)",
    "aliases": [
      "Consultant Décisionnel",
      "Analyste BI",
      "Consultant Business Intelligence"
    ],
    "icon": "📊",
    "image": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80",
    "familyId": "data-decision",
    "familyName": "Data, Statistiques & Décision",
    "domain": "Data & Analytics",
    "subdomain": "Business Intelligence",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "450 000 - 1 350 000 FCFA / mois (Sénégal) • ~38k€ - 58k€ (France/Europe)",
    "simpleDefinition": "Il conçoit les tableaux de bord et indicateurs visuels que les directeurs consultent chaque matin pour savoir si l’entreprise va bien.",
    "shortDescription": "Modélise les données décisionnelles et développe des rapports automatisés pour guider le pilotage de l’entreprise.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Power BI, Tableau ou Qlik",
        "Modélisation en étoile et en flocon",
        "Langages DAX et SQL",
        "Processus ETL simples"
      ],
      "analytical": [
        "Compréhension des indicateurs de performance clés (KPI)"
      ],
      "creative": [
        "Mise en page ergonomique des tableaux de bord"
      ],
      "human": [
        "Pédagogie et sens du dialogue métier"
      ],
      "tools": [
        "Power BI",
        "SQL Server",
        "Excel avancé",
        "DAX Studio"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "data-analyst",
      "business-analyst",
      "data-engineer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "analyser-chiffres",
      "gestion-projet"
    ]
  },
  {
    "id": "analytics-engineer",
    "slug": "analytics-engineer",
    "title": "Analytics Engineer",
    "aliases": [
      "Ingénieur Analytics",
      "Analytics Developer",
      "Data Transformation Engineer"
    ],
    "icon": "📐",
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    "familyId": "data-decision",
    "familyName": "Data, Statistiques & Décision",
    "domain": "Data & Analytics",
    "subdomain": "Data Engineering",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "550 000 - 1 600 000 FCFA / mois (Sénégal) • ~45k€ - 68k€ (France/Europe)",
    "simpleDefinition": "À mi-chemin entre le Data Engineer et le Data Analyst, il nettoie et organise les données dans l’entrepôt pour que tout le monde puisse s’en servir sans se tromper.",
    "shortDescription": "Applique les bonnes pratiques du génie logiciel (versioning, tests, CI/CD) à la transformation des données métier.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "dbt (data build tool)",
        "SQL moderne avancé",
        "Data Warehouses Cloud (Snowflake, BigQuery)",
        "Git et tests de données automatisés"
      ],
      "analytical": [
        "Normalisation et gouvernance des définitions métier"
      ],
      "creative": [
        "Simplification des schémas de données"
      ],
      "human": [
        "Patience et rigueur documentaire"
      ],
      "tools": [
        "dbt",
        "BigQuery / Snowflake",
        "Git",
        "Airflow"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "data-engineer",
      "data-analyst",
      "data-architect"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "analyser-chiffres",
      "technologie-code"
    ]
  },
  {
    "id": "data-architect",
    "slug": "data-architect",
    "title": "Architecte Data (Data Architect)",
    "aliases": [
      "Architecte des Données",
      "Lead Data Architect"
    ],
    "icon": "🏛️",
    "image": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80",
    "familyId": "data-decision",
    "familyName": "Data, Statistiques & Décision",
    "domain": "Data & Analytics",
    "subdomain": "Data Architecture & Big Data",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +5 + Expérience",
    "salary": "900 000 - 2 500 000 FCFA / mois (Sénégal) • ~65k€ - 95k€ (France/Europe)",
    "simpleDefinition": "Il conçoit le plan d’urbanisation de toutes les données de l’entreprise pour qu’elles soient stockées en sécurité, faciles d’accès et conformes aux lois.",
    "shortDescription": "Définit la vision, les modèles et les standards d’infrastructure de données à l’échelle de l’organisation.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Architecture Data Lakehouse & Data Mesh",
        "Gouvernance et catalogage des données",
        "Conformité légale (RGPD, lois locales sur les données)",
        "Haute scalabilité et sécurité des données"
      ],
      "analytical": [
        "Vision globale des flux d’information d’un grand groupe"
      ],
      "creative": [
        "Harmonisation de systèmes informatiques hétérogènes"
      ],
      "human": [
        "Capacité à fédérer différentes directions"
      ],
      "tools": [
        "Snowflake / Databricks",
        "Data Catalog (Collibra, Amundsen)",
        "Cloud AWS / GCP",
        "Draw.io"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "data-engineer",
      "cloud-architect",
      "solutions-architect"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "resoudre-problemes",
      "analyser-chiffres"
    ]
  },
  {
    "id": "big-data-engineer",
    "slug": "big-data-engineer",
    "title": "Big Data Engineer",
    "aliases": [
      "Ingénieur Mégadonnées",
      "Hadoop / Spark Specialist"
    ],
    "icon": "🐘",
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
    "familyId": "data-decision",
    "familyName": "Data, Statistiques & Décision",
    "domain": "Data & Analytics",
    "subdomain": "Data Architecture & Big Data",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +5 (Ingénieur)",
    "salary": "650 000 - 2 000 000 FCFA / mois (Sénégal) • ~50k€ - 80k€ (France/Europe)",
    "simpleDefinition": "Il conçoit les systèmes capables de traiter des milliards de données par seconde, comme celles générées par les réseaux téléphoniques ou les cartes bancaires.",
    "shortDescription": "Développe des solutions de traitement massif et distribué de données volumineuses et véloces.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Calcul distribué (Apache Spark, Hadoop)",
        "Streaming de données (Kafka, Flink)",
        "Langages Scala, Python, Java",
        "Bases NoSQL distribuées (Cassandra, HBase)"
      ],
      "analytical": [
        "Résolution des contraintes de latence et de partitionnement"
      ],
      "creative": [
        "Optimisation extrême des calculs en cluster"
      ],
      "human": [
        "Rigueur d’ingénieur"
      ],
      "tools": [
        "Apache Spark",
        "Kafka",
        "Databricks",
        "Docker",
        "Linux"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "data-engineer",
      "data-architect",
      "cloud-engineer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "technologie-code",
      "resoudre-problemes"
    ]
  },
  {
    "id": "social-media-analyst",
    "slug": "social-media-analyst",
    "title": "Social Media Analyst",
    "aliases": [
      "Analyste des Réseaux Sociaux",
      "Social Data Analyst"
    ],
    "icon": "📈",
    "image": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80",
    "familyId": "data-decision",
    "familyName": "Data, Statistiques & Décision",
    "domain": "Data & Analytics",
    "subdomain": "Web & Social Media Analytics",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "400 000 - 1 100 000 FCFA / mois (Sénégal) • ~35k€ - 50k€ (France/Europe)",
    "simpleDefinition": "Il mesure la popularité et les réactions des internautes sur les réseaux sociaux pour dire à l’entreprise ce que les gens pensent vraiment d’elle.",
    "shortDescription": "Analyse l’engagement, les tendances et le sentiment des conversations sur les réseaux sociaux pour orienter la communication.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Social Listening et analyse de sentiment",
        "Métriques d’engagement social",
        "Outils de veille de marque (Brandwatch, Talkwalker)",
        "Tableaux de bord d’impact social"
      ],
      "analytical": [
        "Détection des signaux faibles et des bad buzz"
      ],
      "creative": [
        "Recommandations éditoriales basées sur les données"
      ],
      "human": [
        "Sensibilité aux tendances culturelles"
      ],
      "tools": [
        "Talkwalker",
        "Sprout Social",
        "Excel",
        "Canva",
        "Looker Studio"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "social-media-manager",
      "web-analyst",
      "charge-de-marketing-digital"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "analyser-chiffres",
      "commerce-marketing"
    ]
  },
  {
    "id": "consultant-data-marketing",
    "slug": "consultant-data-marketing",
    "title": "Consultant Data Marketing",
    "aliases": [
      "Marketing Data Consultant",
      "Data-Driven Marketer"
    ],
    "icon": "🎯",
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    "familyId": "commerce-marketing",
    "familyName": "Commerce, Vente, Marketing & E-Commerce",
    "domain": "Data & Analytics",
    "subdomain": "Web & Social Media Analytics",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +5",
    "salary": "500 000 - 1 500 000 FCFA / mois (Sénégal) • ~42k€ - 65k€ (France/Europe)",
    "simpleDefinition": "Il aide les services marketing à utiliser intelligemment les données pour envoyer la bonne publicité, au bon client, au bon moment.",
    "shortDescription": "Allie science des données et marketing stratégique pour segmenter les clients et personnaliser les campagnes à fort rendement.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Customer Data Platforms (CDP)",
        "Segmentation client (RFM, clustering)",
        "Marketing automation piloté par la donnée",
        "Attribution marketing multi-touch"
      ],
      "analytical": [
        "Mesure fine du ROI marketing"
      ],
      "creative": [
        "Scénarios de personnalisation innovants"
      ],
      "human": [
        "Pédagogie et esprit de conseil"
      ],
      "tools": [
        "Segment",
        "HubSpot",
        "BigQuery",
        "Tableau",
        "Google Ads"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "data-analyst",
      "growth-hacker",
      "web-analyst"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "commerce-marketing",
      "analyser-chiffres"
    ]
  },
  {
    "id": "incident-responder",
    "slug": "incident-responder",
    "title": "Incident Responder (Analyste Réponse à Incident)",
    "aliases": [
      "Spécialiste CSIRT / CERT",
      "Pompier de la Cybersécurité",
      "Incident Handler"
    ],
    "icon": "🚒",
    "image": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
    "familyId": "cybersecurite-reseaux",
    "familyName": "Cybersécurité & Réseaux",
    "domain": "Cybersécurité & Résilience",
    "subdomain": "SOC & Détection d’incidents",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +5 (Ingénieur Cybersécurité)",
    "salary": "700 000 - 2 200 000 FCFA / mois (Sénégal) • ~50k€ - 85k€ (France/Europe)",
    "simpleDefinition": "C’est le « pompier » qui intervient en urgence lorsqu’une entreprise est en train de se faire pirater, pour chasser les attaquants et sauver les serveurs.",
    "shortDescription": "Intervient en situation de crise pour endiguer les attaques informatiques, éradiquer les malwares et restaurer les activités.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Forensics (analyse légale de mémoire et disques)",
        "Isolation de réseaux infectés",
        "Analyse statique et dynamique de malwares",
        "Gestion de crise cyber"
      ],
      "analytical": [
        "Sang-froid et reconstitution de la chronologie de l’attaque"
      ],
      "creative": [
        "Tactiques rapides de contournement pour sauver les données"
      ],
      "human": [
        "Résistance exemplaire au stress et leadership"
      ],
      "tools": [
        "Volatility",
        "Autopsy",
        "Wireshark",
        "Velociraptor",
        "YARA"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "analyste-cybersecurite",
      "threat-hunter",
      "security-engineer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "securite-defense",
      "resoudre-problemes"
    ]
  },
  {
    "id": "threat-hunter",
    "slug": "threat-hunter",
    "title": "Threat Hunter (Chasseur de Cybermenaces)",
    "aliases": [
      "Cyber Threat Hunter",
      "Analyste Proactif de Menaces"
    ],
    "icon": "🏹",
    "image": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
    "familyId": "cybersecurite-reseaux",
    "familyName": "Cybersécurité & Réseaux",
    "domain": "Cybersécurité & Résilience",
    "subdomain": "SOC & Détection d’incidents",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +5",
    "salary": "750 000 - 2 300 000 FCFA / mois (Sénégal) • ~55k€ - 85k€ (France/Europe)",
    "simpleDefinition": "Il ne se contente pas d’attendre les alertes : il part activement fouiller dans les réseaux pour débusquer les pirates discrets déjà infiltrés.",
    "shortDescription": "Traque de manière proactive les cyberattaquants furtifs qui ont réussi à contourner les systèmes de défense automatiques.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Framework MITRE ATT&CK",
        "Recherche d’IoC (Indicateurs de Compromission)",
        "Requêtes SIEM avancées",
        "Comportements anormaux d’utilisateurs (UEBA)"
      ],
      "analytical": [
        "Intuition d’enquêteur et curiosité chirurgicale"
      ],
      "creative": [
        "Hypothèses d’infiltration novatrices"
      ],
      "human": [
        "Discrétion et rigueur d’analyse"
      ],
      "tools": [
        "Splunk",
        "Elastic Security",
        "Kql / Eql",
        "CyberChef"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "analyste-cybersecurite",
      "incident-responder",
      "pentester-hacker-ethique"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "securite-defense",
      "resoudre-problemes"
    ]
  },
  {
    "id": "security-architect",
    "slug": "security-architect",
    "title": "Architecte Cybersécurité",
    "aliases": [
      "Cybersecurity Architect",
      "Architecte Sécurité des SI"
    ],
    "icon": "🏰",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80",
    "familyId": "cybersecurite-reseaux",
    "familyName": "Cybersécurité & Réseaux",
    "domain": "Cybersécurité & Résilience",
    "subdomain": "Sécurité applicative & Cloud",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +5 (Ingénieur) + Expérience",
    "salary": "1 000 000 - 2 800 000 FCFA / mois (Sénégal) • ~70k€ - 105k€ (France/Europe)",
    "simpleDefinition": "Il dessine la forteresse numérique globale de l’entreprise pour que chaque morceau du système informatique soit protégé selon les règles de l’art.",
    "shortDescription": "Conçoit les politiques globales, les zones réseau sécurisées (Zero Trust) et les mécanismes de protection de bout en bout.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Modèle Zero Trust",
        "Cryptographie appliquée et PKI",
        "Sécurité Cloud et On-Premise",
        "Normes ISO 27001 et NIST"
      ],
      "analytical": [
        "Cartographie des surfaces d’attaque et modélisation de menaces (STRIDE)"
      ],
      "creative": [
        "Architecture de systèmes impénétrables"
      ],
      "human": [
        "Autorité technique et capacité à convaincre les comités de direction"
      ],
      "tools": [
        "Draw.io",
        "Threat Modeling Tool",
        "Cloud Security Posture (CSPM)"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "security-engineer",
      "cloud-security-engineer",
      "solutions-architect"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "securite-defense",
      "technologie-code"
    ]
  },
  {
    "id": "appsec-engineer",
    "slug": "application-security-engineer",
    "title": "Ingénieur Sécurité Applicative (AppSec)",
    "aliases": [
      "AppSec Engineer",
      "Application Security Specialist",
      "Auditeur de Code Sécurisé"
    ],
    "icon": "🛡️",
    "image": "https://images.unsplash.com/photo-1618060932014-4deda4932554?w=800&auto=format&fit=crop&q=80",
    "familyId": "cybersecurite-reseaux",
    "familyName": "Cybersécurité & Réseaux",
    "domain": "Cybersécurité & Résilience",
    "subdomain": "Sécurité applicative & Cloud",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +5",
    "salary": "700 000 - 2 200 000 FCFA / mois (Sénégal) • ~50k€ - 80k€ (France/Europe)",
    "simpleDefinition": "C’est un développeur expert en sécurité qui vérifie ligne par ligne le code des logiciels pour s’assurer qu’aucune porte dérobée ou vulnérabilité n’a été laissée.",
    "shortDescription": "Sensibilise et accompagne les développeurs pour éliminer les failles de sécurité dès l’écriture du code source.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "OWASP Top 10 web & mobile",
        "Revue de code sécurisée",
        "Outils SAST, DAST et SCA",
        "Sécurité des APIs (OAuth, rate limiting)"
      ],
      "analytical": [
        "Compréhension immédiate des vecteurs d’exploitation de failles"
      ],
      "creative": [
        "Contre-mesures élégantes qui ne dégradent pas les performances"
      ],
      "human": [
        "Pédagogie exemplaire avec les développeurs"
      ],
      "tools": [
        "Snyk",
        "SonarQube",
        "Checkmarx",
        "Burp Suite",
        "Git"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "devsecops-engineer",
      "pentester-hacker-ethique",
      "developpeur-fullstack"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "securite-defense",
      "technologie-code"
    ]
  },
  {
    "id": "cloud-security-engineer",
    "slug": "cloud-security-engineer",
    "title": "Cloud Security Engineer (Ingénieur Sécurité Cloud)",
    "aliases": [
      "Ingénieur Cybersécurité Cloud",
      "SecOps Cloud"
    ],
    "icon": "🌩️",
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    "familyId": "cybersecurite-reseaux",
    "familyName": "Cybersécurité & Réseaux",
    "domain": "Cybersécurité & Résilience",
    "subdomain": "Sécurité applicative & Cloud",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +5",
    "salary": "750 000 - 2 300 000 FCFA / mois (Sénégal) • ~52k€ - 85k€ (France/Europe)",
    "simpleDefinition": "Il veille à ce que les données et serveurs confiés aux hébergeurs Cloud (AWS, Google, Azure) soient fermés à clé et inaccessibles aux curieux.",
    "shortDescription": "Configure, automatise et surveille la sécurité des environnements informatiques hébergés dans le cloud.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "IAM Cloud avancé (moindre privilège)",
        "Chiffrement des données en transit et au repos (KMS)",
        "Sécurité Kubernetes et conteneurs",
        "Détection de mauvaises configurations cloud"
      ],
      "analytical": [
        "Audit continu des permissions et des clés d’accès"
      ],
      "creative": [
        "Automatisation du blocage des fuites de données"
      ],
      "human": [
        "Rigueur et veille permanente"
      ],
      "tools": [
        "AWS Security Hub",
        "Prisma Cloud",
        "Terraform",
        "Falco"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "cloud-engineer",
      "security-engineer",
      "devsecops-engineer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "securite-defense",
      "technologie-code"
    ]
  },
  {
    "id": "grc-analyst",
    "slug": "grc-analyst",
    "title": "Analyste GRC (Gouvernance, Risque & Conformité)",
    "aliases": [
      "Consultant GRC",
      "Auditeur Conformité Cyber",
      "Analyste des Risques Informatiques"
    ],
    "icon": "⚖️",
    "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
    "familyId": "cybersecurite-reseaux",
    "familyName": "Cybersécurité & Réseaux",
    "domain": "Cybersécurité & Résilience",
    "subdomain": "Gouvernance, Risques & Conformité (GRC)",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +5 (Droit du numérique, Commerce ou École d’Ingénieur)",
    "salary": "550 000 - 1 700 000 FCFA / mois (Sénégal) • ~42k€ - 68k€ (France/Europe)",
    "simpleDefinition": "Il s’assure que l’entreprise respecte les lois sur les données privées, rédige les règles de sécurité interne et prépare les audits officiels.",
    "shortDescription": "Évalue les risques cyber, formalise les politiques de sécurité et garantit le respect des réglementations en vigueur.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Normes ISO 27001, 27005",
        "Méthodes d’analyse de risque (EBIOS RM, MEHARI)",
        "Réglementations de protection des données (CDP Sénégal, RGPD)",
        "Plans de Continuité d’Activité (PCA)"
      ],
      "analytical": [
        "Évaluation méthodique des impacts juridiques et financiers"
      ],
      "creative": [
        "Sensibilisation ludique des salariés aux pièges du phishing"
      ],
      "human": [
        "Excellente plume, diplomatie et sens de la négociation"
      ],
      "tools": [
        "Logiciels GRC",
        "Excel / Word",
        "Plateformes de sensibilisation"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "security-engineer",
      "business-analyst"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "droit-justice",
      "securite-defense",
      "gestion-projet"
    ]
  },
  {
    "id": "solutions-architect",
    "slug": "solutions-architect",
    "title": "Architecte Solutions (Solutions Architect)",
    "aliases": [
      "Solutions Architect",
      "Architecte Fonctionnel & Technique"
    ],
    "icon": "🧩",
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "Cloud & Infrastructure",
    "subdomain": "Solutions Architecture",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +5 (Ingénieur)",
    "salary": "900 000 - 2 500 000 FCFA / mois (Sénégal) • ~65k€ - 95k€ (France/Europe)",
    "simpleDefinition": "C’est le conseiller technique qui écoute le problème d’un gros client et assemble les meilleurs briques logicielles et cloud pour construire la solution sur-mesure parfaite.",
    "shortDescription": "Conçoit l’assemblage global des logiciels, serveurs et réseaux pour répondre précisément aux besoins stratégiques d’un client.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Conception de solutions bout-en-bout",
        "Intégration d’APIs complexes",
        "Cloud AWS / Azure / GCP",
        "Présentation commerciale technique (Pre-Sales)"
      ],
      "analytical": [
        "Capacité à comprendre très vite les contraintes d’un secteur inconnu"
      ],
      "creative": [
        "Assemblage astucieux de technologies existantes"
      ],
      "human": [
        "Charisme, écoute et excellente aisance oratoire"
      ],
      "tools": [
        "Diagrammes d’architecture",
        "Calculateurs de coûts Cloud",
        "PowerPoint"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "cloud-architect",
      "architecte-web",
      "software-architect"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "resoudre-problemes",
      "gestion-projet",
      "technologie-code"
    ]
  },
  {
    "id": "network-engineer",
    "slug": "network-engineer",
    "title": "Ingénieur Réseaux & Télécoms",
    "aliases": [
      "Network Engineer",
      "Ingénieur Télécom",
      "Architecte Réseau"
    ],
    "icon": "📡",
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80",
    "familyId": "cybersecurite-reseaux",
    "familyName": "Cybersécurité & Réseaux",
    "domain": "Cloud & Infrastructure",
    "subdomain": "Systèmes & Réseaux",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +5 (Ingénieur)",
    "salary": "600 000 - 1 800 000 FCFA / mois (Sénégal) • ~45k€ - 70k€ (France/Europe)",
    "simpleDefinition": "Il conçoit et déploie les autoroutes de communication numériques (fibre optique, réseaux 4G/5G, liaisons satellites) reliant les pays et les entreprises.",
    "shortDescription": "Garantit l’interconnexion, le routage à grande vitesse et la disponibilité des flux de données entre sites distants.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Protocoles de routage avancés (BGP, OSPF, MPLS)",
        "Réseaux d’opérateurs télécoms et fibre optique",
        "SD-WAN et virtualisation de réseaux",
        "Sécurité périmétrique"
      ],
      "analytical": [
        "Diagnostic complexe de latence et de pertes de paquets"
      ],
      "creative": [
        "Conception de boucles de redondance sans interruption"
      ],
      "human": [
        "Rigueur et sens des responsabilités critiques"
      ],
      "tools": [
        "Cisco / Juniper / Huawei",
        "Wireshark",
        "GNS3",
        "Linux"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "administrateur-systemes-reseaux",
      "security-engineer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "technologie-code",
      "resoudre-problemes"
    ]
  },
  {
    "id": "infrastructure-engineer",
    "slug": "infrastructure-engineer",
    "title": "Ingénieur Infrastructure",
    "aliases": [
      "Infrastructure Engineer",
      "Ingénieur Systèmes & Plateformes"
    ],
    "icon": "🏗️",
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "Cloud & Infrastructure",
    "subdomain": "Infrastructure Cloud",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +5",
    "salary": "600 000 - 1 850 000 FCFA / mois (Sénégal) • ~45k€ - 72k€ (France/Europe)",
    "simpleDefinition": "Il gère les parcs de serveurs massifs et les systèmes de stockage pour s’assurer que les machines fonctionnent sans surchauffe ni panne.",
    "shortDescription": "Supervise, dimensionne et maintient les composants matériels et systèmes d’exploitation au cœur des centres de données.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Systèmes d’exploitation Linux à grande échelle",
        "Virtualisation et stockage (SAN/NAS)",
        "Automatisation (Ansible, Puppet)",
        "Supervision industrielle"
      ],
      "analytical": [
        "Planification de la capacité (Capacity Planning)"
      ],
      "creative": [
        "Scripts d’optimisation des performances matérielles"
      ],
      "human": [
        "Esprit d’équipe et calme opérationnel"
      ],
      "tools": [
        "Ansible",
        "Linux",
        "VMware",
        "Zabbix",
        "Prometheus"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "cloud-engineer",
      "administrateur-systemes-reseaux",
      "devops-engineer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "technologie-code",
      "resoudre-problemes"
    ]
  },
  {
    "id": "platform-engineer",
    "slug": "platform-engineer",
    "title": "Platform Engineer (Ingénieur Plateforme)",
    "aliases": [
      "Ingénieur Plateforme Cloud",
      "Internal Developer Platform Specialist"
    ],
    "icon": "🎛️",
    "image": "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "DevOps & Platform Engineering",
    "subdomain": "Platform Engineering",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +5 (Ingénieur)",
    "salary": "750 000 - 2 300 000 FCFA / mois (Sénégal) • ~55k€ - 85k€ (France/Europe)",
    "simpleDefinition": "Il crée des outils sur mesure pour les développeurs de son entreprise, pour qu’ils puissent tester et mettre en ligne leurs applications en un seul clic sans se soucier des serveurs.",
    "shortDescription": "Conçoit une plateforme interne en libre-service (IDP) pour booster la productivité et l’autonomie des développeurs.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Kubernetes avancé & Helm",
        "Portails développeurs (Backstage)",
        "Infrastructure as Code et GitOps (ArgoCD)",
        "Automatisation des environnements à la demande"
      ],
      "analytical": [
        "Mesure de l’expérience développeur (Developer Experience - DevEx)"
      ],
      "creative": [
        "Simplification radicale des démarches de déploiement"
      ],
      "human": [
        "Écoute et posture de service envers ses pairs développeurs"
      ],
      "tools": [
        "Kubernetes",
        "ArgoCD",
        "Backstage",
        "Terraform",
        "Crossplane"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "devops-engineer",
      "site-reliability-engineer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "technologie-code",
      "resoudre-problemes"
    ]
  },
  {
    "id": "ci-cd-engineer",
    "slug": "ci-cd-engineer",
    "title": "Ingénieur CI/CD (Intégration & Déploiement Continu)",
    "aliases": [
      "Automation Delivery Engineer",
      "Release Engineer"
    ],
    "icon": "🔁",
    "image": "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&auto=format&fit=crop&q=80",
    "familyId": "numerique-ia",
    "familyName": "Numérique, Informatique & IA",
    "domain": "DevOps & Platform Engineering",
    "subdomain": "CI/CD & Automatisation",
    "sourceESD": false,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "600 000 - 1 800 000 FCFA / mois (Sénégal) • ~45k€ - 70k€ (France/Europe)",
    "simpleDefinition": "Il programme les chaînes de montage automatiques qui vérifient, emballent et envoient les logiciels sur les serveurs chaque fois qu’un ingénieur écrit une mise à jour.",
    "shortDescription": "Spécialiste des pipelines d’automatisation garantissant des livraisons logicielles ultra-fréquentes et sans accroc.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "GitLab CI, GitHub Actions, Jenkins",
        "Stratégies de déploiement (Canary, Blue/Green)",
        "Gestion des versions et releases sémantiques",
        "Automatisation des tests"
      ],
      "analytical": [
        "Traque des lenteurs dans les temps de compilation"
      ],
      "creative": [
        "Workflows fluides et résilients"
      ],
      "human": [
        "Rigueur et esprit de synthèse"
      ],
      "tools": [
        "GitHub Actions",
        "GitLab CI",
        "Docker",
        "Bash",
        "SonarQube"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "devops-engineer",
      "platform-engineer",
      "developpeur-fullstack"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "technologie-code",
      "resoudre-problemes"
    ]
  },
  {
    "id": "lead-ux",
    "slug": "lead-ux",
    "title": "Lead UX (Responsable Expérience Utilisateur)",
    "aliases": [
      "Lead UX Designer",
      "Référent Expérience Utilisateur"
    ],
    "icon": "🧭",
    "image": "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&auto=format&fit=crop&q=80",
    "familyId": "culture-medias",
    "familyName": "Culture, Médias, Communication & Industries Créatives",
    "domain": "UX/UI & Product Design",
    "subdomain": "UX Research & Ergonomie",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +5 + Expérience",
    "salary": "700 000 - 2 000 000 FCFA / mois (Sénégal) • ~52k€ - 80k€ (France/Europe)",
    "simpleDefinition": "Il encadre l’équipe de designers UX et veille à ce que tous les produits de l’entreprise soient cohérents et agréables à utiliser.",
    "shortDescription": "Définit les standards méthodologiques d’expérience utilisateur et pilote l’équipe de designers sur des projets majeurs.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Méthodologies avancées de design centrée utilisateur",
        "Mentorat d’équipe de designers",
        "Stratégie UX globale",
        "Présentations exécutives"
      ],
      "analytical": [
        "Validation de la pertinence des tests utilisateurs"
      ],
      "creative": [
        "Orientation visionnaire des parcours"
      ],
      "human": [
        "Leadership bienveillant et pédagogie"
      ],
      "tools": [
        "Figma",
        "Miro",
        "Notion",
        "Maze"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "ux-manager",
      "ux-designer",
      "product-designer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "creer-designer",
      "gestion-projet"
    ]
  },
  {
    "id": "ux-manager",
    "slug": "ux-manager",
    "title": "UX Manager (Directeur de l’Expérience Utilisateur)",
    "aliases": [
      "Head of UX",
      "Directeur Design Expérience Client"
    ],
    "icon": "👑",
    "image": "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&auto=format&fit=crop&q=80",
    "familyId": "culture-medias",
    "familyName": "Culture, Médias, Communication & Industries Créatives",
    "domain": "UX/UI & Product Design",
    "subdomain": "UX Research & Ergonomie",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +5 + Expérience confirmée",
    "salary": "900 000 - 2 500 000 FCFA / mois (Sénégal) • ~65k€ - 95k€ (France/Europe)",
    "simpleDefinition": "Membre influent de l’entreprise, il défend les droits et le confort des utilisateurs auprès des directeurs pour que chaque produit soit humain et facile.",
    "shortDescription": "Inscrit l’excellence de l’expérience utilisateur au cœur de la stratégie d’entreprise et recrute les talents du design.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Management stratégique du design",
        "Recrutement et structuration de pôles design",
        "Alignement design et rentabilité financière"
      ],
      "analytical": [
        "Mesure de la maturité design de l’organisation"
      ],
      "creative": [
        "Culture d’innovation continue"
      ],
      "human": [
        "Leadership d’influence et intelligence relationnelle"
      ],
      "tools": [
        "Figma",
        "Miro",
        "Tableaux de bord de direction"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "lead-ux",
      "product-designer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "gestion-projet",
      "creer-designer"
    ]
  },
  {
    "id": "researcher-designer",
    "slug": "researcher-designer",
    "title": "Researcher & Designer (UX Researcher)",
    "aliases": [
      "Chercheur UX",
      "UX Researcher & Designer"
    ],
    "icon": "🔎",
    "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80",
    "familyId": "culture-medias",
    "familyName": "Culture, Médias, Communication & Industries Créatives",
    "domain": "UX/UI & Product Design",
    "subdomain": "UX Research & Ergonomie",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +5 (Sciences Humaines, Sociologie, Psychologie ou Design)",
    "salary": "500 000 - 1 500 000 FCFA / mois (Sénégal) • ~40k€ - 65k€ (France/Europe)",
    "simpleDefinition": "C’est un détective qui va sur le terrain rencontrer les gens, observer leurs habitudes et comprendre leurs blocages pour inspirer les créateurs d’applications.",
    "shortDescription": "Mène des enquêtes anthropologiques et des tests pour nourrir la conception de données qualitatives vérifiées.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Interviews qualitatives approfondies",
        "Observation ethnographique de terrain",
        "Tests d’utilisabilité modérés et non modérés",
        "Synthèse visuelle de recherche (Insights)"
      ],
      "analytical": [
        "Détection des besoins inavoués ou inconscients des usagers"
      ],
      "creative": [
        "Restitution captivante des enseignements"
      ],
      "human": [
        "Neutralité bienveillante et empathie profonde"
      ],
      "tools": [
        "Dovetail",
        "Figma",
        "Maze",
        "Otter.ai / Zoom"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "ux-designer",
      "ergonome-ihm",
      "product-designer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "creer-designer",
      "resoudre-problemes"
    ]
  },
  {
    "id": "ergonome-ihm",
    "slug": "ergonome-ihm",
    "title": "Ergonome IHM (Interface Homme-Machine)",
    "aliases": [
      "Ergonome Numérique",
      "Spécialiste Facteurs Humains & IHM"
    ],
    "icon": "🧠",
    "image": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",
    "familyId": "culture-medias",
    "familyName": "Culture, Médias, Communication & Industries Créatives",
    "domain": "UX/UI & Product Design",
    "subdomain": "UX Research & Ergonomie",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +5 (Ergonomie Cognitive ou Psychologie du Travail)",
    "salary": "500 000 - 1 550 000 FCFA / mois (Sénégal) • ~40k€ - 62k€ (France/Europe)",
    "simpleDefinition": "Il s’assure que l’ordinateur s’adapte aux limites du cerveau et des yeux de l’être humain (fatigue visuelle, charge mentale, rapidité d’action).",
    "shortDescription": "Applique les lois scientifiques de la cognition humaine pour garantir des interfaces sûres, intuitives et sans fatigue mentale.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Critères ergonomiques de Bastien et Scapin",
        "Évaluation de la charge mentale",
        "Accessibilité sensorielle et motrice",
        "Audit expert de logiciels professionnels critiques"
      ],
      "analytical": [
        "Mesure des temps de réaction et taux d’erreurs de manipulation"
      ],
      "creative": [
        "Optimisation de la disposition spatiale des commandes"
      ],
      "human": [
        "Sens de l’observation scientifique"
      ],
      "tools": [
        "Logiciels de tracking oculaire (Eye-Tracking)",
        "Figma",
        "Grilles d’évaluation normées"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "researcher-designer",
      "ux-designer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "creer-designer",
      "resoudre-problemes"
    ]
  },
  {
    "id": "consultant-design",
    "slug": "consultant-en-design",
    "title": "Consultant en Design & Innovation",
    "aliases": [
      "Design Strategist",
      "Consultant Design Thinking"
    ],
    "icon": "💡",
    "image": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80",
    "familyId": "culture-medias",
    "familyName": "Culture, Médias, Communication & Industries Créatives",
    "domain": "UX/UI & Product Design",
    "subdomain": "UX Research & Ergonomie",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +5",
    "salary": "550 000 - 1 650 000 FCFA / mois (Sénégal) • ~42k€ - 68k€ (France/Europe)",
    "simpleDefinition": "Il anime des ateliers créatifs pour aider les équipes d’une entreprise à résoudre ensemble des problèmes difficiles en utilisant les méthodes des designers.",
    "shortDescription": "Accompagne les organisations dans la transformation de leurs services par les méthodes créatives du Design Thinking.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Animation d’ateliers de Design Thinking",
        "Prototypage express de services",
        "Stratégie de design centrée sur l’humain"
      ],
      "analytical": [
        "Capacité à faire émerger un consensus clair dans un groupe diversifié"
      ],
      "creative": [
        "Facilitation graphique et inventivité"
      ],
      "human": [
        "Énergie communicative, écoute et charisme"
      ],
      "tools": [
        "Miro",
        "FigJam",
        "Post-it & matériel d’atelier",
        "Notion"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "charge-dinnovation",
      "product-designer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "creer-designer",
      "gestion-projet"
    ]
  },
  {
    "id": "digital-designer",
    "slug": "digital-designer",
    "title": "Digital Designer",
    "aliases": [
      "Designer Numérique Global",
      "Concepteur Visuel Digital"
    ],
    "icon": "🖌️",
    "image": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80",
    "familyId": "culture-medias",
    "familyName": "Culture, Médias, Communication & Industries Créatives",
    "domain": "Design Digital & Création Graphique",
    "subdomain": "Webdesign & Digital Design",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "450 000 - 1 300 000 FCFA / mois (Sénégal) • ~36k€ - 56k€ (France/Europe)",
    "simpleDefinition": "Il conçoit tous les éléments visuels modernes dont une entreprise a besoin sur internet (bannières animées, visuels de campagnes, illustrations de sites).",
    "shortDescription": "Créatif polyvalent maîtrisant l’ensemble des formats visuels numériques : interfaces, illustrations, bannières et micro-animations.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Suite Adobe (Photoshop, Illustrator, InDesign)",
        "Figma pour le digital",
        "Création d’assets vectoriels et visuels",
        "Bases de motion design"
      ],
      "analytical": [
        "Respect scrupuleux des chartes de marque"
      ],
      "creative": [
        "Direction artistique moderne et fraîche"
      ],
      "human": [
        "Réactivité et polyvalence"
      ],
      "tools": [
        "Adobe Creative Cloud",
        "Figma",
        "Canva",
        "Procreate"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "webdesigner",
      "brand-designer",
      "ui-designer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "creer-designer"
    ]
  },
  {
    "id": "directeur-artistique-web",
    "slug": "directeur-artistique-web",
    "title": "Directeur Artistique Web (DA Web)",
    "aliases": [
      "Directeur Artistique Numérique",
      "Digital Art Director",
      "Lead DA"
    ],
    "icon": "🎭",
    "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80",
    "familyId": "culture-medias",
    "familyName": "Culture, Médias, Communication & Industries Créatives",
    "domain": "Design Digital & Création Graphique",
    "subdomain": "Direction Artistique Web",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +5",
    "salary": "600 000 - 1 800 000 FCFA / mois (Sénégal) • ~45k€ - 75k€ (France/Europe)",
    "simpleDefinition": "C’est le chef d’orchestre visuel qui choisit le ton, l’ambiance et le style graphique général d’un projet pour qu’il soit beau et inoubliable.",
    "shortDescription": "Insuffle la vision esthétique, l’émotion et le concept créatif de campagnes ou de plateformes numériques majeures.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Culture visuelle pointue (typographie, photographie, cinéma)",
        "Storyboarding et direction de création",
        "Supervision d’équipes de graphistes et d’illustrateurs",
        "Présentation convaincante de concepts créatifs"
      ],
      "analytical": [
        "Compréhension des tendances artistiques mondiales et locales"
      ],
      "creative": [
        "Sens artistique exceptionnel et audace visuelle"
      ],
      "human": [
        "Leadership inspirant et défense d’idées fortes"
      ],
      "tools": [
        "Figma",
        "Photoshop",
        "Midjourney (moodboards)",
        "Keynote"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "brand-designer",
      "motion-designer",
      "ui-designer"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "creer-designer",
      "commerce-marketing"
    ]
  },
  {
    "id": "creative-technologist",
    "slug": "creative-technologist",
    "title": "Creative Technologist",
    "aliases": [
      "Technologue Créatif",
      "Creative Developer",
      "Développeur Créatif"
    ],
    "icon": "🔮",
    "image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80",
    "familyId": "culture-medias",
    "familyName": "Culture, Médias, Communication & Industries Créatives",
    "domain": "Design Digital & Création Graphique",
    "subdomain": "Creative Technology",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +5 (Profil hybride Art & Code)",
    "salary": "600 000 - 1 900 000 FCFA / mois (Sénégal) • ~48k€ - 78k€ (France/Europe)",
    "simpleDefinition": "Mi-artiste, mi-développeur, il programme des expériences interactives magiques (installations artistiques interactives, 3D sur le web, réalité augmentée).",
    "shortDescription": "Explore les ponts entre l’art et le code informatique pour inventer des expériences numériques immersives et spectaculaires.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "WebGL, Three.js, Shaders (GLSL)",
        "Creative Coding (p5.js, TouchDesigner)",
        "Réalité augmentée et virtuelle (AR/VR)",
        "Interaction avec capteurs physiques (Arduino, IoT)"
      ],
      "analytical": [
        "Optimisation de calculs géométriques et 3D en temps réel"
      ],
      "creative": [
        "Imagination sans limite mêlant son, lumière et pixels"
      ],
      "human": [
        "Curiosité insatiable et esprit d’expérimentation"
      ],
      "tools": [
        "Three.js",
        "TouchDesigner",
        "Blender",
        "VS Code",
        "Unity"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "animateur-3d",
      "motion-designer",
      "developpeur-frontend"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "creer-designer",
      "technologie-code",
      "recherche-innovation"
    ]
  },
  {
    "id": "charge-communication-web",
    "slug": "charge-de-communication-web",
    "title": "Chargé de Communication Web & Multimédia",
    "aliases": [
      "Digital Communications Officer",
      "Chargé de Com Digitale"
    ],
    "icon": "📢",
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80",
    "familyId": "culture-medias",
    "familyName": "Culture, Médias, Communication & Industries Créatives",
    "domain": "Audiovisuel & Digital Content",
    "subdomain": "Communication digitale multimédia",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "350 000 - 1 000 000 FCFA / mois (Sénégal) • ~32k€ - 48k€ (France/Europe)",
    "simpleDefinition": "Il conçoit les messages et les communiqués de l’entreprise diffusés sur le web, le site internet et les newsletters pour valoriser les actions de la marque.",
    "shortDescription": "Valorise l’image et les actualités d’une organisation sur tous ses supports digitaux à travers des contenus clairs et professionnels.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Rédaction institutionnelle pour le web",
        "Gestion de newsletters et intranet",
        "Relations presse en ligne et communiqués",
        "Organisation d’événements en ligne (webinaires)"
      ],
      "analytical": [
        "Veille médiatique et analyse des retombées"
      ],
      "creative": [
        "Ton juste adapté aux valeurs citoyennes de l’entreprise"
      ],
      "human": [
        "Excellente plume et diplomatie"
      ],
      "tools": [
        "WordPress",
        "Canva",
        "Brevo / Mailchimp",
        "Suite Office"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "social-media-manager",
      "content-creator",
      "content-manager"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "commerce-marketing",
      "creer-designer"
    ]
  },
  {
    "id": "traffic-manager",
    "slug": "traffic-manager",
    "title": "Traffic Manager (Gestionnaire de Trafic Web)",
    "aliases": [
      "Acquisition Traffic Specialist",
      "Responsable de Trafic"
    ],
    "icon": "🚦",
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    "familyId": "commerce-marketing",
    "familyName": "Commerce, Vente, Marketing & E-Commerce",
    "domain": "Marketing Digital & Acquisition",
    "subdomain": "Growth & Acquisition",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "450 000 - 1 350 000 FCFA / mois (Sénégal) • ~38k€ - 56k€ (France/Europe)",
    "simpleDefinition": "C’est le pilote qui amène des milliers de visiteurs sur le site web en activant et en optimisant tous les canaux publicitaires au meilleur prix.",
    "shortDescription": "Gère et optimise les budgets d’achat d’espace et les leviers d’acquisition payants pour attirer un trafic qualifié.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Google Ads & Meta Ads poussés",
        "Régies publicitaires locales et programmatiques",
        "Calcul du Coût Par Clic (CPC) et Coût Par Acquisition (CPA)",
        "Plans de taggage et pixels de conversion"
      ],
      "analytical": [
        "Optimisation constante des dépenses publicitaires"
      ],
      "creative": [
        "Tests d’annonces et d’angles marketing variés"
      ],
      "human": [
        "Rigueur de gestionnaire et réactivité"
      ],
      "tools": [
        "Google Ads",
        "Meta Ads Manager",
        "Looker Studio",
        "GA4"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "head-of-acquisition",
      "growth-hacker",
      "consultant-seo-sea"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "commerce-marketing",
      "analyser-chiffres"
    ]
  },
  {
    "id": "head-of-acquisition",
    "slug": "head-of-acquisition",
    "title": "Head of Acquisition (Responsable Acquisition & Croissance)",
    "aliases": [
      "Directeur de l’Acquisition",
      "Lead Growth & Acquisition"
    ],
    "icon": "🏆",
    "image": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80",
    "familyId": "commerce-marketing",
    "familyName": "Commerce, Vente, Marketing & E-Commerce",
    "domain": "Marketing Digital & Acquisition",
    "subdomain": "Growth & Acquisition",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +5",
    "salary": "700 000 - 2 200 000 FCFA / mois (Sénégal) • ~55k€ - 85k€ (France/Europe)",
    "simpleDefinition": "Il gère la totalité du budget publicitaire numérique de l’entreprise et dirige les équipes pour conquérir de nouveaux marchés à grande échelle.",
    "shortDescription": "Définit la stratégie globale et alloue les budgets de conquête de nouveaux clients à travers tous les canaux numériques.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Pilotage de budgets d’acquisition massifs",
        "Stratégie multi-canale (SEO, SEA, Social Ads, Affiliation, Influence)",
        "Modélisation du LTV / CAC",
        "Management d’équipe d’acquisition"
      ],
      "analytical": [
        "Vision mathématique et rentabilité business stricte"
      ],
      "creative": [
        "Ouverture de nouveaux canaux inexploités"
      ],
      "human": [
        "Leadership, négociation et rigueur financière"
      ],
      "tools": [
        "Google Ads",
        "Meta Suite",
        "Tableaux de bord BI",
        "Excel avancé"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "traffic-manager",
      "growth-hacker",
      "responsable-e-marketing"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "commerce-marketing",
      "gestion-projet"
    ]
  },
  {
    "id": "content-manager",
    "slug": "content-manager",
    "title": "Content Manager (Responsable Éditorial Digital)",
    "aliases": [
      "Responsable de Contenu",
      "Brand Content Manager",
      "Stratège Éditorial"
    ],
    "icon": "✍️",
    "image": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80",
    "familyId": "commerce-marketing",
    "familyName": "Commerce, Vente, Marketing & E-Commerce",
    "domain": "Marketing Digital & Acquisition",
    "subdomain": "Content Marketing",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "400 000 - 1 200 000 FCFA / mois (Sénégal) • ~36k€ - 54k€ (France/Europe)",
    "simpleDefinition": "Il choisit les sujets et écrit les articles de blog, livres blancs et guides qui intéressent les clients et prouvent l’expertise de l’entreprise.",
    "shortDescription": "Définit et déploie la stratégie de contenu écrit et visuel pour attirer, éduquer et convertir les prospects (Inbound Marketing).",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Stratégie d’Inbound Marketing",
        "Rédaction web optimisée pour le SEO",
        "Gestion de calendrier éditorial",
        "Coordination de rédacteurs et traducteurs"
      ],
      "analytical": [
        "Mesure de la performance des articles et guides"
      ],
      "creative": [
        "Capacité à passionner le lecteur sur des sujets techniques"
      ],
      "human": [
        "Excellente plume et culture générale"
      ],
      "tools": [
        "WordPress",
        "Notion",
        "Ahrefs",
        "Canva",
        "Google Docs"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "redacteur-web",
      "social-media-manager",
      "charge-de-marketing-digital"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "commerce-marketing",
      "creer-designer"
    ]
  },
  {
    "id": "redacteur-web",
    "slug": "redacteur-web",
    "title": "Rédacteur Web & SEO Copywriter",
    "aliases": [
      "Copywriter Web",
      "Rédacteur SEO",
      "Content Writer"
    ],
    "icon": "🖋️",
    "image": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80",
    "familyId": "culture-medias",
    "familyName": "Culture, Médias, Communication & Industries Créatives",
    "domain": "Marketing Digital & Acquisition",
    "subdomain": "Content Marketing",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +2 à Bac +3",
    "salary": "300 000 - 800 000 FCFA / mois (Sénégal) • ~30k€ - 44k€ (France/Europe)",
    "simpleDefinition": "Il écrit des textes fluides, agréables à lire et optimisés pour plaire à la fois aux internautes et aux robots de Google.",
    "shortDescription": "Rédige des articles, fiches produits et contenus persuasifs qui captivent le lecteur et grimpent dans les résultats de recherche.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Intégration naturelle de mots-clés SEO",
        "Techniques de persuasion écrite (Copywriting : AIDA, PAS)",
        "Structuration de texte pour la lecture rapide sur écran",
        "Orthographe et syntaxe irréprochables"
      ],
      "analytical": [
        "Recherche documentaire rapide et vérification des sources"
      ],
      "creative": [
        "Variété de vocabulaire et titres accrocheurs"
      ],
      "human": [
        "Curiosité d’esprit et adaptabilité de ton"
      ],
      "tools": [
        "Yoast SEO / RankMath",
        "Google Docs",
        "Surfer SEO / 1.fr",
        "WordPress"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "content-manager",
      "consultant-seo-sea"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "creer-designer",
      "commerce-marketing"
    ]
  },
  {
    "id": "charge-compte-adwords",
    "slug": "charge-de-compte-adwords",
    "title": "Chargé de Compte AdWords (Consultant SEA)",
    "aliases": [
      "Google Ads Specialist",
      "Gestionnaire de Campagnes Search",
      "Média Buyer Google"
    ],
    "icon": "🎯",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&auto=format&fit=crop&q=80",
    "familyId": "commerce-marketing",
    "familyName": "Commerce, Vente, Marketing & E-Commerce",
    "domain": "Marketing Digital & Acquisition",
    "subdomain": "SEA & Publicité en ligne",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "400 000 - 1 300 000 FCFA / mois (Sénégal) • ~36k€ - 55k€ (France/Europe)",
    "simpleDefinition": "C’est l’expert qui règle au centime près les enchères publicitaires sur Google pour que chaque euro dépensé rapporte un maximum de clients.",
    "shortDescription": "Crée, pilote et optimise les campagnes d’annonces payantes sur le moteur de recherche Google et son réseau partenaire.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Gestion experte de Google Ads",
        "Recherche de mots-clés négatifs et exclusions",
        "A/B testing d’annonces textuelles",
        "Suivi précis des conversions"
      ],
      "analytical": [
        "Analyse de rentabilité quotidienne par mot-clé"
      ],
      "creative": [
        "Rédaction d’arguments de vente percutants en 30 caractères"
      ],
      "human": [
        "Rigueur de gestionnaire financier"
      ],
      "tools": [
        "Google Ads",
        "Google Tag Manager",
        "Looker Studio",
        "Excel"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "consultant-seo-sea",
      "traffic-manager",
      "growth-hacker"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "commerce-marketing",
      "analyser-chiffres"
    ]
  },
  {
    "id": "consultant-sea",
    "slug": "consultant-sea",
    "title": "Consultant SEA (Search Engine Advertising)",
    "aliases": [
      "Spécialiste Référencement Payant",
      "SEA Strategist"
    ],
    "icon": "💸",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&auto=format&fit=crop&q=80",
    "familyId": "commerce-marketing",
    "familyName": "Commerce, Vente, Marketing & E-Commerce",
    "domain": "Marketing Digital & Acquisition",
    "subdomain": "SEA & Publicité en ligne",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "450 000 - 1 350 000 FCFA / mois (Sénégal) • ~38k€ - 56k€ (France/Europe)",
    "simpleDefinition": "Conseiller spécialisé dans les publicités payantes sur internet, il aide les marques à maximiser leur visibilité immédiate lors des recherches des clients.",
    "shortDescription": "Élabore la stratégie publicitaire payante sur les moteurs de recherche pour acquérir des prospects à fort potentiel.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Audit de comptes publicitaires",
        "Campagnes Performance Max et Shopping",
        "Retargeting (reciblage publicitaire)",
        "Analyse concurrentielle"
      ],
      "analytical": [
        "Optimisation du score de qualité (Quality Score) des annonces"
      ],
      "creative": [
        "Propositions de dispositifs publicitaires percutants"
      ],
      "human": [
        "Aisance relationnelle et pédagogie avec les clients d’agence"
      ],
      "tools": [
        "Google Ads Editor",
        "Semrush",
        "Looker Studio"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "charge-de-compte-adwords",
      "consultant-seo-sea",
      "traffic-manager"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "commerce-marketing",
      "analyser-chiffres"
    ]
  },
  {
    "id": "media-trader",
    "slug": "media-trader",
    "title": "Media Trader (Acheteur Programmatique)",
    "aliases": [
      "Programmatic Specialist",
      "Trader Média Digital",
      "Acheteur d’Espaces Publicitaires"
    ],
    "icon": "📊",
    "image": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80",
    "familyId": "commerce-marketing",
    "familyName": "Commerce, Vente, Marketing & E-Commerce",
    "domain": "Marketing Digital & Acquisition",
    "subdomain": "SEA & Publicité en ligne",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +5 (Finance, Économie ou Marketing)",
    "salary": "500 000 - 1 600 000 FCFA / mois (Sénégal) • ~42k€ - 65k€ (France/Europe)",
    "simpleDefinition": "Comme un trader en bourse, il achète des espaces publicitaires aux enchères en une fraction de seconde grâce à des logiciels automatiques.",
    "shortDescription": "Pilote les enchères automatiques en temps réel (RTB) sur les plateformes programmatiques pour diffuser des publicités au public ciblé.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Plateformes DSP (Demand-Side Platforms : DV360, The Trade Desk)",
        "Gestion des flux d’enchères en temps réel (RTB)",
        "Ciblage d’audiences et data marketplace",
        "Mesure de la visibilité (Viewability) et lutte contre la fraude publicitaire"
      ],
      "analytical": [
        "Vitesse d’analyse de tableaux chiffrés sous pression"
      ],
      "creative": [
        "Optimisation des combinaisons créatives dynamiques"
      ],
      "human": [
        "Rigueur mathématique et gestion du stress"
      ],
      "tools": [
        "Display & Video 360 (DV360)",
        "The Trade Desk",
        "Excel",
        "Google Analytics"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "traffic-manager",
      "head-of-acquisition",
      "web-analyst"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "analyser-chiffres",
      "commerce-marketing"
    ]
  },
  {
    "id": "consultant-social-media",
    "slug": "consultant-social-media",
    "title": "Consultant Social Media",
    "aliases": [
      "Conseiller en Stratégie Réseaux Sociaux",
      "Social Media Strategist"
    ],
    "icon": "📱",
    "image": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80",
    "familyId": "commerce-marketing",
    "familyName": "Commerce, Vente, Marketing & E-Commerce",
    "domain": "Marketing Digital & Acquisition",
    "subdomain": "Social Media Management & Community",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "450 000 - 1 400 000 FCFA / mois (Sénégal) • ~38k€ - 58k€ (France/Europe)",
    "simpleDefinition": "Expert externe, il forme et conseille les entreprises pour qu’elles sachent comment se comporter et briller sur les réseaux sociaux.",
    "shortDescription": "Audit, conseille et bâtit des stratégies sur-mesure de prise de parole et d’influence sociale pour les marques.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Audit de présence sociale concurrentielle",
        "Définition de lignes éditoriales et tonalités de marque",
        "Protocoles de communication de crise",
        "Stratégie de partenariats créateurs"
      ],
      "analytical": [
        "Compréhension des mutations d’algorithmes sociaux"
      ],
      "creative": [
        "Concepts de campagnes virales positives"
      ],
      "human": [
        "Sens du conseil et force d’entraînement"
      ],
      "tools": [
        "Hootsuite",
        "Brandwatch",
        "Miro",
        "Canva"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "social-media-manager",
      "content-creator"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "commerce-marketing",
      "creer-designer"
    ]
  },
  {
    "id": "responsable-dev-ecommerce",
    "slug": "responsable-developpement-e-commerce",
    "title": "Responsable Développement E-Commerce",
    "aliases": [
      "E-Commerce Development Lead",
      "Chef de Projet Développement E-Commerce"
    ],
    "icon": "🛍️",
    "image": "https://images.unsplash.com/photo-1556742049-0a67e5572293?w=800&auto=format&fit=crop&q=80",
    "familyId": "commerce-marketing",
    "familyName": "Commerce, Vente, Marketing & E-Commerce",
    "domain": "E-commerce & Marketplace",
    "subdomain": "Développement Produit E-commerce",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +5",
    "salary": "600 000 - 1 800 000 FCFA / mois (Sénégal) • ~45k€ - 72k€ (France/Europe)",
    "simpleDefinition": "Il supervise l’expansion de la boutique en ligne : ouverture de nouveaux pays, ajout de nouveaux moyens de paiement et amélioration de la vitesse du site.",
    "shortDescription": "Pilote les projets techniques et commerciaux d’expansion de la plateforme de vente en ligne.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Architecture de boutiques e-commerce",
        "Connexion aux ERP et logiciels de gestion de stock",
        "Passerelles de paiement internationales et locales",
        "Gestion de prestataires tech et agences web"
      ],
      "analytical": [
        "Calcul du retour sur investissement des nouvelles fonctionnalités"
      ],
      "creative": [
        "Expériences d’achat interactives et immersives"
      ],
      "human": [
        "Leadership de projet et coordination d’équipes mixtes"
      ],
      "tools": [
        "Shopify Plus / Magento",
        "Jira",
        "Google Analytics",
        "Excel"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "responsable-e-commerce",
      "product-manager"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "commerce-marketing",
      "gestion-projet"
    ]
  },
  {
    "id": "product-marketing-manager",
    "slug": "product-marketing-manager",
    "title": "Product Marketing Manager (PMM)",
    "aliases": [
      "Responsable Marketing Produit",
      "Go-To-Market Specialist"
    ],
    "icon": "🚀",
    "image": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80",
    "familyId": "commerce-marketing",
    "familyName": "Commerce, Vente, Marketing & E-Commerce",
    "domain": "Product Management & Digital Business",
    "subdomain": "Product Management & Ownership",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +5 (École de Commerce ou Master Marketing)",
    "salary": "650 000 - 1 900 000 FCFA / mois (Sénégal) • ~45k€ - 75k€ (France/Europe)",
    "simpleDefinition": "Il raconte l’histoire du produit : il trouve les bons mots pour expliquer aux clients pourquoi cette application va changer leur vie et organise son lancement en fanfare.",
    "shortDescription": "Définit le positionnement, la stratégie de lancement (Go-To-Market) et les argumentaires commerciaux des produits numériques.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Stratégie de lancement de produit (Go-To-Market)",
        "Positionnement de marque et propositions de valeur",
        "Création d’argumentaires de vente (Sales Enablement)",
        "Analyse de concurrence (Competitive Intelligence)"
      ],
      "analytical": [
        "Compréhension des motivations d’achat des clients"
      ],
      "creative": [
        "Création d’un storytelling produit percutant"
      ],
      "human": [
        "Alignement entre équipes produit, marketing et commerciaux"
      ],
      "tools": [
        "Notion",
        "HubSpot",
        "Figma",
        "Crayon / Klue"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "product-manager",
      "charge-de-marketing-digital"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "commerce-marketing",
      "gestion-projet"
    ]
  },
  {
    "id": "consultant-crm",
    "slug": "consultant-crm",
    "title": "Consultant CRM & Relation Client",
    "aliases": [
      "CRM Specialist",
      "Consultant Salesforce / HubSpot",
      "Gestionnaire Relation Client Digitale"
    ],
    "icon": "👥",
    "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80",
    "familyId": "commerce-marketing",
    "familyName": "Commerce, Vente, Marketing & E-Commerce",
    "domain": "Product Management & Digital Business",
    "subdomain": "Customer Success & CRM",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "500 000 - 1 600 000 FCFA / mois (Sénégal) • ~42k€ - 65k€ (France/Europe)",
    "simpleDefinition": "Il installe et paramètre les logiciels qui mémorisent tout l’historique des clients pour que l’entreprise ne perde jamais le contact avec eux.",
    "shortDescription": "Déploie et optimise les plateformes de gestion de la relation client pour fidéliser les usagers et automatiser les suivis.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Paramétrage d’outils CRM majeurs (Salesforce, HubSpot, Zoho)",
        "Automatisation des flux de vente et de support",
        "Nettoyage et déduplication de bases de données clients",
        "Création de rapports de performance commerciale"
      ],
      "analytical": [
        "Cartographie des étapes du cycle de vie client"
      ],
      "creative": [
        "Scénarios d’accompagnement personnalisés"
      ],
      "human": [
        "Pédagogie pour former les équipes commerciales"
      ],
      "tools": [
        "HubSpot",
        "Salesforce",
        "Make / Zapier",
        "Excel"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "customer-success-manager",
      "account-manager",
      "business-analyst"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "commerce-marketing",
      "gestion-projet"
    ]
  },
  {
    "id": "account-manager",
    "slug": "account-manager",
    "title": "Account Manager Digital",
    "aliases": [
      "Responsable de Comptes Clients",
      "Client Partner",
      "Key Account Manager Digital"
    ],
    "icon": "🤝",
    "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80",
    "familyId": "commerce-marketing",
    "familyName": "Commerce, Vente, Marketing & E-Commerce",
    "domain": "Product Management & Digital Business",
    "subdomain": "Customer Success & CRM",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +3 à Bac +5",
    "salary": "450 000 - 1 500 000 FCFA / mois (Sénégal) • ~38k€ - 62k€ (France/Europe)",
    "simpleDefinition": "En agence ou entreprise tech, il est le partenaire de confiance des clients importants : il s’assure de leur satisfaction et leur propose de nouveaux services.",
    "shortDescription": "Fidélise et développe le chiffre d’affaires d’un portefeuille de clients stratégiques dans le secteur digital.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Négociation commerciale de haut niveau",
        "Compréhension des enjeux numériques des clients",
        "Suivi de rentabilité des comptes",
        "Vente incitative et croisée (Upsell / Cross-sell)"
      ],
      "analytical": [
        "Analyse de la rentabilité de chaque contrat"
      ],
      "creative": [
        "Propositions de nouvelles opportunités business adaptées"
      ],
      "human": [
        "Excellence relationnelle, courtoisie et écoute active"
      ],
      "tools": [
        "CRM (HubSpot / Salesforce)",
        "LinkedIn Sales Navigator",
        "Excel"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "customer-success-manager",
      "chef-de-projet-digital"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "commerce-marketing",
      "gestion-projet"
    ]
  },
  {
    "id": "chef-projet-marketing",
    "slug": "chef-de-projet-marketing",
    "title": "Chef de Projet Marketing Digital",
    "aliases": [
      "Digital Marketing Project Manager",
      "Coordinateur Marketing Digital"
    ],
    "icon": "🗂️",
    "image": "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop&q=80",
    "familyId": "commerce-marketing",
    "familyName": "Commerce, Vente, Marketing & E-Commerce",
    "domain": "Product Management & Digital Business",
    "subdomain": "Direction de Projets Digitaux",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +5",
    "salary": "450 000 - 1 400 000 FCFA / mois (Sénégal) • ~38k€ - 58k€ (France/Europe)",
    "simpleDefinition": "Il coordonne toutes les étapes d’une campagne publicitaire numérique, de la première idée jusqu’au bilan des ventes.",
    "shortDescription": "Supervise la conception, la production et la diffusion des campagnes marketing multi-canales.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Planification de campagnes marketing",
        "Gestion des prestataires (créatifs, agences média)",
        "Gestion budgétaire",
        "Reporting et analyse post-campagne"
      ],
      "analytical": [
        "Suivi scrupuleux des étapes du calendrier"
      ],
      "creative": [
        "Harmonisation des messages promotionnels"
      ],
      "human": [
        "Leadership d’équipe et sens du relationnel"
      ],
      "tools": [
        "Asana / Trello",
        "Excel",
        "Meta Suite",
        "Google Analytics"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "chef-de-projet-digital",
      "charge-de-marketing-digital"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "commerce-marketing",
      "gestion-projet"
    ]
  },
  {
    "id": "change-manager",
    "slug": "chef-de-projet-daccompagnement-au-changement-en-entreprise",
    "title": "Chef de Projet Accompagnement au Changement",
    "aliases": [
      "Change Manager",
      "Consultant Conduite du Changement Numérique"
    ],
    "icon": "🌱",
    "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80",
    "familyId": "droit-management",
    "familyName": "Droit, Administration, Management & Services Professionnels",
    "domain": "Innovation & Transformation Digitale",
    "subdomain": "Conduite du changement",
    "sourceESD": true,
    "isEmerging": false,
    "level": "Bac +5 (Ressources Humaines, Psychologie du Travail ou Management)",
    "salary": "550 000 - 1 700 000 FCFA / mois (Sénégal) • ~42k€ - 70k€ (France/Europe)",
    "simpleDefinition": "Quand une entreprise adopte un nouvel outil informatique, il aide les salariés à ne pas avoir peur, à apprendre à l’utiliser avec le sourire et sans stress.",
    "shortDescription": "Accompagne les équipes humaines pour faciliter l’adoption des nouveaux outils technologiques et vaincre les résistances.",
    "mainObjective": "Concevoir et délivrer des solutions numériques fiables et performantes.",
    "companyRole": "Expert opérationnel garant de l’excellence technique et de l’expérience utilisateur.",
    "workEnvironment": [
      "💻 Travail sur ordinateur (100%)",
      "👥 Équipe agile multidisciplinaire",
      "🌍 Télétravail possible (local ou international)",
      "⚡ Apprentissage continu"
    ],
    "missions": {
      "main": [
        "Concevoir et développer les solutions selon les besoins",
        "Assurer la qualité, la sécurité et la pérennité des livrables"
      ],
      "secondary": [
        "Documenter le travail et transmettre les bonnes pratiques",
        "Effectuer une veille technologique continue"
      ]
    },
    "typicalDay": [
      {
        "time": "09:00",
        "title": "Point synchronisation d’équipe",
        "desc": "Coordination rapide pour aligner les priorités de la journée."
      },
      {
        "time": "10:00",
        "title": "Travail approfondi & Production",
        "desc": "Réalisation des tâches prioritaires de conception ou développement."
      },
      {
        "time": "14:00",
        "title": "Collaboration & Résolution",
        "desc": "Échanges avec les collègues, revues ou ateliers de conception."
      },
      {
        "time": "16:30",
        "title": "Validation, tests et clôture",
        "desc": "Vérification de la qualité des livrables et préparation du lendemain."
      }
    ],
    "skills": {
      "technical": [
        "Méthodologies de conduite du changement (ADKAR, Kotter)",
        "Conception de plans de formation et guides pratiques",
        "Communication interne bienveillante",
        "Mesure de l’adoption logicielle"
      ],
      "analytical": [
        "Cartographie des freins et des réticences psychologiques"
      ],
      "creative": [
        "Ateliers interactifs et ludiques d’apprentissage"
      ],
      "human": [
        "Écoute profonde, empathie, patience et pédagogie"
      ],
      "tools": [
        "Miro",
        "Logiciels d’e-learning",
        "PowerPoint",
        "Notion"
      ]
    },
    "specializations": [],
    "studies": {
      "schoolSubjects": [
        "Mathématiques",
        "Français & Anglais",
        "Sciences & Informatique"
      ],
      "pathway": [
        {
          "step": "Baccalauréat",
          "title": "Bac S, L, T ou équivalent",
          "desc": "Bases solides en raisonnement logique, curiosité ou créativité."
        },
        {
          "step": "Bac +2 / +3",
          "title": "BTS / DUT / Licence Informatique ou Digitale",
          "desc": "Fondations théoriques solides et mise en pratique opérationnelle."
        },
        {
          "step": "Bac +5",
          "title": "Master spécialisé ou Diplôme d’Ingénieur",
          "desc": "Expertise avancée, architecture de solutions complexes et leadership."
        }
      ],
      "schools": [
        {
          "name": "École Supérieure Polytechnique (ESP) de Dakar",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Multinationale des Télécommunications (ESMT)",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain d’Informatique (IAI)",
          "country": "Afrique Centrale",
          "scope": "Afrique"
        },
        {
          "name": "École Supérieure du Digital (ESD)",
          "country": "France",
          "scope": "International"
        }
      ],
      "certifications": [],
      "alternatives": "Accessible par bootcamps certifiants, académies tech locales (ex: Bakeli, Simplon, Sonatel Academy) et auto-formation guidée."
    },
    "career": {
      "sectors": [
        "Startups & Tech",
        "Sociétés de Services Numériques (ESN)",
        "Grandes entreprises & Banques",
        "Agences digitales"
      ],
      "employerTypes": [
        "Startups tech",
        "Entreprises de services numériques (ESN)",
        "PME / Multinationales",
        "Freelance remote"
      ],
      "teamInterlocutors": [
        "Product Managers",
        "Développeurs",
        "Designers",
        "Responsables métier"
      ],
      "evolution": "Junior ➔ Confirmé ➔ Senior ➔ Lead / Expert ➔ Management ou Entrepreneuriat",
      "pros": "Forte demande sur le marché, opportunités internationales, travail stimulant.",
      "cons": "Exige une actualisation permanente des compétences."
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un projet découverte pas-à-pas en suivant un tutoriel éprouvé.",
      "intermediateProject": "Bâtir une réalisation autonome répondant à un besoin réel concret.",
      "advancedProject": "Déployer un projet complet accessible au public ou collaborer en équipe.",
      "portfolioIdeas": [
        "Présenter 2 ou 3 réalisations concrètes avec le problème résolu et les résultats obtenus."
      ]
    },
    "reality": {
      "advantages": "Évolution salariale rapide, autonomie, possibilité d’impact visible.",
      "difficulties": "Nécessite persévérance face aux blocages et gestion rigoureuse du temps.",
      "continuousLearning": "Dédier un temps régulier chaque semaine à la découverte des nouveautés.",
      "constraints": "Travail prolongé sur écran nécessitant une bonne hygiène de posture."
    },
    "aiImpact": {
      "assistedTasks": "Recherche documentaire, génération d’ébauches, détection d’erreurs de base.",
      "automatedTasks": "Tâches répétitives de saisie, conversion de formats, modèles standardisés.",
      "crucialHumanSkills": "Jugement critique, créativité stratégique, compréhension culturelle et empathie relationnelle.",
      "emergingSpecializations": "Maîtrise des outils d’IA appliqués à la spécialité et supervision de la qualité."
    },
    "africaContext": {
      "localSectors": [
        "Écosystème technologique dakarois",
        "Services financiers mobiles",
        "E-santé & AgriTech",
        "Commerce connecté"
      ],
      "employerTypes": [
        "Pépinières (CTIC Dakar, Jokkolabs)",
        "Opérateurs télécoms",
        "Agences locales",
        "Missions en télétravail international"
      ],
      "remoteWork": "Forte ouverture sur les marchés francophones et internationaux depuis l’Afrique de l’Ouest.",
      "entrepreneurship": "Grand potentiel d’innovation pour résoudre les défis concrets du continent.",
      "senegalInsight": "Secteur en forte expansion porté par les initiatives nationales et l’émergence de pôles d’innovation."
    },
    "relatedJobSlugs": [
      "consultant-strategie-digitale",
      "chief-digital-officer-cdo"
    ],
    "resources": [],
    "sources": [
      "École Supérieure du Digital (ESD)",
      "Observatoire International des Métiers du Numérique"
    ],
    "interests": [
      "gestion-projet",
      "droit-justice"
    ]
  }
];

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
    console.log('✅ OrientationDigitalData : 103 métiers du numérique initialisés sur 13 domaines d\'excellence.');
  }
})();
