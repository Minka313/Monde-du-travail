const { PrismaClient } = require('../backend/node_modules/@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Enriching Job dossiers...');

  const jobUpdates = [
    {
      title: 'Développeur Web',
      domain: 'Technologies & Développement',
      category: 'TECH',
      salary: '450 000 - 1 200 000 FCFA / mois',
      skills: ['JavaScript', 'TypeScript', 'Node.js', 'React', 'PostgreSQL', 'Git & CI/CD', 'API REST'],
      prerequisites: 'Appétence logique, maîtrise de base de l\'anglais technique, curiosité intellectuelle et persévérance dans la résolution de problèmes.',
      studies: 'Bac+2 à Bac+5 en Informatique (DUT, BTS, Licence Pro, Master MIAGE) ou parcours intensif certifiant (Bootcamp d\'ingénierie logicielle).',
      advantages: 'Forte demande sur le marché local et international, opportunités étendues de télétravail (freelance / remote), création d\'impact direct, salaire attractif et évolution continue.',
      disadvantages: 'Rythme d\'obsolescence rapide des frameworks exigeant une veille permanente, travail prolongé sur écran et pression sur les livraisons de sprint.',
      subProfessions: ['Développeur Frontend', 'Développeur Backend', 'Développeur Fullstack', 'Ingénieur DevOps', 'Architecte Logiciel', 'Développeur Mobile'],
      videoUrl: 'https://www.youtube.com/watch?v=k2qgadLk4F4',
      content: 'Le développeur web conçoit, programme et maintient des applications web et plateformes interactives. Il traduit les spécifications fonctionnelles en code robuste et performant.'
    },
    {
      title: 'Analyste Cybersécurité',
      domain: 'Cybersécurité & Réseaux',
      category: 'SECURITE',
      salary: '600 000 - 1 500 000 FCFA / mois',
      skills: ['SIEM & SOC', 'Analyse de logs', 'Réseaux TCP/IP', 'Normes ISO 27001', 'Forensics', 'Bash / Python', 'Gestion de crise'],
      prerequisites: 'Solide bagage en réseaux et systèmes d\'exploitation (Linux/Windows), rigueur absolue, sens de l\'éthique et sang-froid.',
      studies: 'Bac+3 à Bac+5 spécialité Cybersécurité, Réseaux ou Sécurité des Systèmes d\'Information, complété par des certifications (Security+, CEH, CISSP).',
      advantages: 'Pénurie mondiale d\'experts (employabilité garantie à 100%), missions captivantes au cœur de la souveraineté numérique, rémunération de premier plan.',
      disadvantages: 'Astreintes éventuelles lors des incidents, stress lors de violations de données, responsabilité juridique et opérationnelle élevée.',
      subProfessions: ['Analyste SOC (N1/N2/N3)', 'Pentester / Hacker Éthique', 'Consultant GRC (Gouvernance)', 'Auditeur Sécurité', 'Ingénieur Réponse à Incident (CSIRT)'],
      videoUrl: 'https://www.youtube.com/watch?v=inWWhr5tnEA',
      content: 'L\'analyste en cybersécurité veille sur les infrastructures numériques contre les attaques, intrusions et ransomwares. Il audite, détecte et coordonne la riposte.'
    },
    {
      title: 'Pentester / Cybersécurité',
      domain: 'Cybersécurité & Réseaux',
      category: 'SECURITE',
      salary: '650 000 - 1 600 000 FCFA / mois',
      skills: ['Tests d\'intrusion', 'Metasploit', 'Burp Suite', 'Reverse Engineering', 'OWASP Top 10', 'Python / Scripting'],
      prerequisites: 'Maîtrise approfondie des protocoles web, bases de données, kernel et cryptographie. Casier judiciaire vierge obligatoire.',
      studies: 'École d\'ingénieurs, Master Cybersécurité, certifications réputées (OSCP, CEH Practical, eWPT).',
      advantages: 'Défis intellectuels permanents, reconnaissance élevée dans la communauté tech, forte liberté dans les méthodologies d\'investigation.',
      disadvantages: 'Exige une rigueur éthique sans faille, rédaction volumineuse de rapports d\'audit détaillés pour les comités exécutifs.',
      subProfessions: ['Red Teamer', 'Chercheur en Vulnérabilités (Bug Hunter)', 'Auditeur de code source', 'Spécialiste Sécurité Cloud'],
      videoUrl: 'https://www.youtube.com/watch?v=3Kq1MIfTWCE',
      content: 'Le pentester teste la résistance des systèmes d\'information en simulant des cyberattaques réelles, afin d\'identifier les failles avant les attaquants malveillants.'
    },
    {
      title: 'Designer UX/UI',
      domain: 'Design & Création Numérique',
      category: 'TECH',
      salary: '400 000 - 950 000 FCFA / mois',
      skills: ['Figma', 'User Research', 'Prototypage interactif', 'Design Systems', 'Micro-interactions', 'Architecture de l\'information'],
      prerequisites: 'Sens artistique développé, empathie utilisateur, esprit d\'analyse et bonne compréhension des contraintes techniques de développement.',
      studies: 'Bac+3 à Bac+5 en Design Graphique, Design d\'Interaction, Écoles du Web ou Gobelins / Masters Human-Computer Interaction.',
      advantages: 'Créativité valorisée, visibilité concrète des réalisations auprès du grand public, passerelle naturelle entre les besoins métier et la tech.',
      disadvantages: 'Nombreuses révisions de maquettes, nécessité de justifier ses choix face à des parties prenantes subjectives.',
      subProfessions: ['Product Designer', 'UX Researcher', 'UI Designer', 'Motion Designer', 'Design System Lead'],
      videoUrl: 'https://www.youtube.com/watch?v=qdu_74zYy_s',
      content: 'Le designer UX/UI crée des interfaces attrayantes, ergonomiques et faciles à utiliser, alliant psychologie comportementale et perfection visuelle.'
    },
    {
      title: 'Expert Comptable',
      domain: 'Finance, Audit & Gestion',
      category: 'FINANCE',
      salary: '700 000 - 2 500 000 FCFA / mois',
      skills: ['SYSCOHADA révisé', 'Fiscalité d\'entreprise', 'Audit financier', 'Consolidation des comptes', 'Pilotage de trésorerie', 'ERP Finance'],
      prerequisites: 'Rigueur absolue des chiffres, discrétion et secret professionnel, sens de la synthèse et aptitudes managériales.',
      studies: 'Parcours DEC (Diplôme d\'Expertise Comptable) via DCG (Bac+3), DSCG (Bac+5) puis 3 ans de stage professionnel certifié.',
      advantages: 'Statut réglementé prestigieux, statut d\'interlocuteur privilégié des chefs d\'entreprise, indépendance professionnelle totale possible en cabinet.',
      disadvantages: 'Pics d\'activité intenses lors de la période fiscale de clôture des comptes, responsabilité civile et pénale engagée.',
      subProfessions: ['Commissaire aux Comptes', 'Directeur Administratif et Financier (DAF)', 'Contrôleur de Gestion', 'Auditeur Financier Senior', 'Consultant M&A'],
      videoUrl: 'https://www.youtube.com/watch?v=F3_6eO8W9n4',
      content: 'L\'expert-comptable est le garant de la santé financière des entreprises. Au-delà des comptes, il conseille le dirigeant dans ses choix juridiques, fiscaux et stratégiques.'
    },
    {
      title: 'Énergies Renouvelables',
      domain: 'Énergie & Transition Écologique',
      category: 'ENERGIE',
      salary: '500 000 - 1 300 000 FCFA / mois',
      skills: ['Dimensionnement photovoltaïque', 'Gestion de micro-réseaux', 'Efficacité énergétique', 'Réglementation environnementale', 'Supervision SCADA'],
      prerequisites: 'Base scientifique solide en physique, électrotechnique ou génie thermique. Sensibilité aux problématiques climatiques.',
      studies: 'Licence ou Master Pro Énergies Renouvelables, Écoles d\'Ingénieurs (Génie Électrique / Génie Énergétique).',
      advantages: 'Secteur en plein essor au Sénégal et en Afrique (Mix énergétique, Plan Solaire), fort impact environnemental positif, projets d\'envergure.',
      disadvantages: 'Chantiers parfois isolés en zone rurale, météo et contraintes physiques sur le terrain.',
      subProfessions: ['Chef de projet Solaire PV', 'Ingénieur Efficacité Énergétique', 'Technicien de Maintenance Éolien/Solaire', 'Développeur de Projets EnR'],
      videoUrl: 'https://www.youtube.com/watch?v=1kUE0BZtTRc',
      content: 'L\'ingénieur ou technicien en énergies renouvelables conçoit et déploie des installations solaires, éoliennes ou biomasse pour fournir une énergie propre et durable.'
    }
  ];

  for (const job of jobUpdates) {
    await prisma.job.updateMany({
      where: { title: job.title },
      data: {
        domain: job.domain,
        category: job.category,
        salary: job.salary,
        skills: job.skills,
        prerequisites: job.prerequisites,
        studies: job.studies,
        advantages: job.advantages,
        disadvantages: job.disadvantages,
        subProfessions: job.subProfessions,
        videoUrl: job.videoUrl,
        content: job.content,
      }
    });
  }

  console.log('Enriching Formation dossiers...');

  const formationUpdates = [
    {
      title: 'Prise de parole en public',
      category: 'Soft Skills & Communication',
      duration: '4 semaines (30h)',
      location: 'Dakar & En ligne',
      objectives: 'Maîtriser la gestion du stress, structurer un pitch percutant, captiver son auditoire par la voix et le langage non verbal, et remporter l\'adhésion lors de réunions stratégiques.',
      prerequisites: 'Aucun prérequis technique. Volonté d\'expérimenter et de sortir de sa zone de confort en toute bienveillance.',
      targetAudience: 'Étudiants, jeunes diplômés, managers d\'équipe, entrepreneurs et professionnels souhaitant développer leur charisme oratoire.',
      certification: 'Certificat d\'Aptitude à l\'Éloquence et à la Négociation Professionnelle (Club Le Monde du Travail).',
      videoUrl: 'https://www.youtube.com/watch?v=i0a61wFaQD8',
      syllabus: [
        {
          module: 'Module 1 : Vaincre le trac et maîtriser son non-verbal',
          duration: '1 semaine (7h30)',
          lessons: ['Physiologie du stress et techniques de respiration ventrale', 'Postures d\'ancrage, regard et gestion de l\'espace scénique', 'Poser sa voix, moduler le rythme et utiliser les silences']
        },
        {
          module: 'Module 2 : L\'art de la narration et du Storytelling',
          duration: '1 semaine (7h30)',
          lessons: ['L\'arc narratif captivant inspiré des talks TED', 'Accroches mémorables et métaphores percutantes', 'Construire un support visuel épuré au service de son propos']
        },
        {
          module: 'Module 3 : Pitch d\'impact et argumentation persuasive',
          duration: '1 semaine (7h30)',
          lessons: ['La méthode CAB (Caractéristiques, Avantages, Bénéfices)', 'Réfuter les objections courantes avec diplomatie', 'Exercice de l\'Elevator Pitch en 90 secondes chrono']
        },
        {
          module: 'Module 4 : Grand Oral et Mise en Situation Réelle',
          duration: '1 semaine (7h30)',
          lessons: ['Simulation de soutenance face à un jury d\'experts', 'Débriefing vidéo individualisé', 'Plan de perfectionnement personnel continu']
        }
      ]
    },
    {
      title: 'Leadership & Management',
      category: 'Management & Direction',
      duration: '6 semaines (45h)',
      location: 'Hybride (Dakar / Zoom)',
      objectives: 'Développer un leadership inspirant et inclusif, animer des réunions hautement productives, déléguer avec confiance et piloter la performance collective.',
      prerequisites: 'Avoir une première expérience en équipe ou occuper une fonction de coordination / chefferie de projet.',
      targetAudience: 'Chefs de projet, managers de proximité, directeurs de pôles, entrepreneurs en phase de scale-up.',
      certification: 'Certification Professionnelle en Management Collaboratif & Leadership Éthique.',
      videoUrl: 'https://www.youtube.com/watch?v=ReRcHdeUG9Y',
      syllabus: [
        {
          module: 'Module 1 : De l\'expert au leader inspirant',
          duration: '1 semaine (7h30)',
          lessons: ['Les styles de leadership (directif, persuasif, participatif, délégatif)', 'Connaissance de soi et intelligence émotionnelle appliquée', 'Construire une vision commune motivante']
        },
        {
          module: 'Module 2 : Délégation et responsabilisation d\'équipe',
          duration: '2 semaines (15h)',
          lessons: ['Fixer des objectifs SMART et des OKRs ambitieux', 'L\'art du feedback constructif (Méthode DESC)', 'Accompagner l\'autonomie et valoriser les réussites']
        },
        {
          module: 'Module 3 : Gestion de conflits et climat de travail',
          duration: '2 semaines (15h)',
          lessons: ['Désamorcer les tensions et médiation active', 'Prévention des risques psychosociaux et burn-out', 'Animer des rituels agiles stimulants (standup, rétrospectives)']
        },
        {
          module: 'Module 4 : Prise de décision et conduite du changement',
          duration: '1 semaine (7h30)',
          lessons: ['Modèles décisionnels sous incertitude', 'Embarquer les résistances au changement organisationnel', 'Évaluation de fin de parcours sur cas d\'entreprise']
        }
      ]
    },
    {
      title: 'Entrepreneuriat',
      category: 'Entrepreneuriat & Innovation',
      duration: '8 semaines (60h)',
      location: 'Incubateur Le Monde du Travail & Visio',
      objectives: 'Transformer une idée brute en modèle économique rentable, valider son marché par des méthodes Lean Startup, concevoir son prévisionnel financier et lever des fonds d\'amorçage.',
      prerequisites: 'Porteur d\'idée de projet ou volonté forte d\'entreprendre en Afrique de l\'Ouest.',
      targetAudience: 'Porteurs de projets innovants, diplômés souhaitant créer leur entreprise, repreneurs d\'activités.',
      certification: 'Attestation Supérieure d\'Incubation & Création d\'Entreprise.',
      videoUrl: 'https://www.youtube.com/watch?v=b4Z6p2qWp5c',
      syllabus: [
        {
          module: 'Module 1 : Idéation, Problème-Solution & Empathie client',
          duration: '2 semaines',
          lessons: ['Design Thinking appliqué au contexte local', 'Interviews de découverte et persona détaillé', 'Value Proposition Canvas']
        },
        {
          module: 'Module 2 : Business Model & Prototypage Lean',
          duration: '2 semaines',
          lessons: ['Business Model Canvas (BMC)', 'Construire un MVP sans coder (No-Code)', 'Tester son offre avec ses 50 premiers utilisateurs']
        },
        {
          module: 'Module 3 : Cadre Juridique, Fiscal & Modèle Financier',
          duration: '2 semaines',
          lessons: ['Choix de la forme juridique (SAS, SARL, GIE au Sénégal)', 'Compte de résultat prévisionnel et BFR', 'Gestion des flux de trésorerie']
        },
        {
          module: 'Module 4 : Pitch aux investisseurs & Stratégie Go-To-Market',
          duration: '2 semaines',
          lessons: ['Deck investisseur percutant (10 slides max)', 'Canaux d\'acquisition digitaux et B2B', 'Demo Day devant investisseurs et business angels']
        }
      ]
    },
    {
      title: 'Énergies renouvelables',
      category: 'Transition Écologique & Climat',
      duration: '5 semaines (40h)',
      location: 'Atelier Pratique & Terrain',
      objectives: 'Comprendre les principes fondamentaux du photovoltaïque, dimensionner une installation solaire autonome ou raccordée au réseau, et maîtriser les normes de sécurité électrique.',
      prerequisites: 'Notions de base en électricité ou sciences physiques niveau Bac.',
      targetAudience: 'Techniciens en reconversion, ingénieurs juniors, gestionnaires de projets d\'électrification rurale.',
      certification: 'Habilitation Pratique Technicien Photovoltaïque Autonome.',
      videoUrl: 'https://www.youtube.com/watch?v=1kUE0BZtTRc',
      syllabus: [
        {
          module: 'Module 1 : Gisement solaire et composants clés',
          duration: '1 semaine',
          lessons: ['Rayonnement, inclinaison et masques solaires', 'Technologies de panneaux (monocristallin, polycristallin)', 'Batteries, onduleurs et régulateurs de charge']
        },
        {
          module: 'Module 2 : Étude de cas et dimensionnement pratique',
          duration: '2 semaines',
          lessons: ['Bilan de puissance et estimation des consommations', 'Calcul des capacités batteries et onduleurs', 'Utilisation d\'outils de simulation (PVSyst)']
        },
        {
          module: 'Module 3 : Câblage, installation et sécurité',
          duration: '2 semaines',
          lessons: ['Protection contre les surtensions et mise à la terre', 'Diagnostic de pannes courantes et maintenance préventive', 'Atelier pratique sur banc d\'essai réel']
        }
      ]
    },
    {
      title: 'Développement personnel',
      category: 'Soft Skills & Épanouissement',
      duration: '3 semaines (20h)',
      location: 'En ligne & Séances de coaching',
      objectives: 'Cultiver un esprit de croissance (Growth Mindset), vaincre la procrastination, clarifier ses valeurs fondamentales et aligner sa trajectoire de carrière avec son bien-être.',
      prerequisites: 'Aucun. Engagement personnel actif requis.',
      targetAudience: 'Toute personne en quête de clarté professionnelle ou de surpassement de soi.',
      certification: 'Certificat de Compétences Personnelles & Mindset Professionnel.',
      videoUrl: 'https://www.youtube.com/watch?v=mgmVOuLgFB0',
      syllabus: [
        {
          module: 'Module 1 : Alignement personnel et clarté de vision',
          duration: '1 semaine',
          lessons: ['L\'Ikigai : convergence entre passion, talents et opportunités', 'Identifier et déconstruire ses croyances limitantes', 'Établir sa boussole de valeurs']
        },
        {
          module: 'Module 2 : Discipline, habitudes et gestion de l\'énergie',
          duration: '1 semaine',
          lessons: ['La science des micro-habitudes (Atomic Habits)', 'Gestion du temps : Deep Work vs distraction digitale', 'Rythmes circadiens et récupération mentale']
        },
        {
          module: 'Module 3 : Résilience et passage à l\'action',
          duration: '1 semaine',
          lessons: ['Embrasser l\'échec comme retour d\'expérience', 'Plan d\'action personnalisé à 90 jours', 'Session de coaching individuel']
        }
      ]
    },
    {
      title: 'Communication efficace',
      category: 'Soft Skills & Communication',
      duration: '3 semaines (25h)',
      location: 'Dakar & En ligne',
      objectives: 'Adopter une écoute active bienveillante, formuler des critiques constructives avec tact, négocier des accords gagnant-gagnant et fluidifier la collaboration inter-équipes.',
      prerequisites: 'Ouvert à tous les profils professionnels.',
      targetAudience: 'Collaborateurs en entreprise, consultants, chargés de clientèle.',
      certification: 'Attestation d\'Excellence Relationnelle & Communication Interpersonnelle.',
      videoUrl: 'https://www.youtube.com/watch?v=F6Q_o_v3oZ0',
      syllabus: [
        {
          module: 'Module 1 : Les bases de la communication interpersonnelle',
          duration: '1 semaine',
          lessons: ['Les axiomes de la communication et filtres perceptuels', 'Écoute active et reformulation bienveillante', 'L\'art de poser les bonnes questions']
        },
        {
          module: 'Module 2 : Communication Non Violente (CNV)',
          duration: '1 semaine',
          lessons: ['Observation neutre des faits', 'Exprimer ses sentiments sans accuser', 'Formuler une demande claire, positive et négociable']
        },
        {
          module: 'Module 3 : Négociation et résolution de désaccords',
          duration: '1 semaine',
          lessons: ['La négociation raisonnée de Harvard (BATNA / MESORE)', 'Gérer les personnalités complexes avec sérénité', 'Mises en situation pratiques filmées']
        }
      ]
    }
  ];

  for (const form of formationUpdates) {
    await prisma.formation.updateMany({
      where: { title: form.title },
      data: {
        category: form.category,
        duration: form.duration,
        location: form.location,
        objectives: form.objectives,
        prerequisites: form.prerequisites,
        targetAudience: form.targetAudience,
        certification: form.certification,
        videoUrl: form.videoUrl,
        syllabus: form.syllabus,
      }
    });
  }

  console.log('Enrichment completed successfully!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
