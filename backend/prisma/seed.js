require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

function requiredEnv(name) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`${name} doit être défini pour exécuter le seed`);
  }
  return value;
}

// Crée l'enregistrement uniquement s'il n'existe pas déjà : le seed est
// idempotent, le relancer ne duplique jamais le contenu.
async function ensureMany(model, key, items, label) {
  let created = 0;
  for (const item of items) {
    const existing = await model.findFirst({ where: { [key]: item[key] } });
    if (!existing) {
      await model.create({ data: item });
      created += 1;
    }
  }
  console.log(`✅ ${created}/${items.length} ${label} créés${created < items.length ? ' (le reste existait déjà)' : ''}`);
}

async function main() {
  console.log('🌱 Début du seed...');

  // Créer des formations
  await ensureMany(prisma.formation, 'title', [
    { title: 'Prise de parole en public', description: 'Maîtrisez l\'art de la présentation et de l\'éloquence pour convaincre et captiver votre audience.', icon: '🗣️', status: 'PUBLISHED' },
    { title: 'Leadership & Management', description: 'Développez votre capacité à inspirer, à fédérer et à piloter des équipes vers des objectifs communs.', icon: '🤝', status: 'PUBLISHED' },
    { title: 'Développement personnel', description: 'Travaillez sur votre mindset, votre confiance en vous et votre capacité à vous dépasser.', icon: '🧠', status: 'PUBLISHED' },
    { title: 'Entrepreneuriat', description: 'Apprenez à transformer vos idées en projets viables et à créer votre propre opportunité.', icon: '💡', status: 'PUBLISHED' },
    { title: 'Communication efficace', description: 'Améliorez vos interactions professionnelles et apprenez à transmettre vos messages clairement.', icon: '💬', status: 'PUBLISHED' },
    { title: 'Énergies renouvelables', description: 'Sensibilisez-vous aux enjeux énergétiques et aux métiers verts d\'avenir.', icon: '🌱', status: 'PUBLISHED' },
  ], 'formations');

  // Créer des métiers
  await ensureMany(prisma.job, 'title', [
    { title: 'Développeur Web', description: 'Créez les outils numériques de demain. Un métier en constante évolution offrant d\'innombrables opportunités.', category: 'TECH', icon: '💻', status: 'PUBLISHED' },
    { title: 'Pentester / Cybersécurité', description: 'Protégez les données et les systèmes contre les attaques informatiques. Un métier d\'avenir essentiel.', category: 'SECURITE', icon: '🛡️', status: 'PUBLISHED' },
    { title: 'Énergies Renouvelables', description: 'Travaillez sur le solaire, l\'éolien ou d\'autres solutions durables pour un monde plus respectueux.', category: 'ENERGIE', icon: '⚡', status: 'PUBLISHED' },
    { title: 'Expert Comptable', description: 'Le cœur de la gestion d\'entreprise et de la stratégie financière. Un métier stable et stratégique.', category: 'FINANCE', icon: '📊', status: 'PUBLISHED' },
    { title: 'Analyste Cybersécurité', description: 'Surveillez, détectez et répondez aux incidents de sécurité pour protéger les organisations.', category: 'SECURITE', icon: '🔒', status: 'PUBLISHED' },
    { title: 'Designer UX/UI', description: 'Concevez des expériences utilisateur intuitives et esthétiques pour les applications et sites web.', category: 'TECH', icon: '🎨', status: 'PUBLISHED' },
  ], 'métiers');

  // Récupérer ou créer l'utilisateur ULTRA_ADMIN (unique propriétaire de la plateforme)
  const ultraAdminEmail = requiredEnv('ULTRA_ADMIN_EMAIL');
  const ultraAdminPassword = requiredEnv('ULTRA_ADMIN_PASSWORD');
  const ultraAdmin = await prisma.user.upsert({
    where: { email: ultraAdminEmail },
    update: {
      role: 'ULTRA_ADMIN',
      isActive: true,
      isVerified: true,
    },
    create: {
      email: ultraAdminEmail,
      password: await bcrypt.hash(ultraAdminPassword, 12),
      firstName: 'Khadimoul',
      lastName: 'Barham',
      role: 'ULTRA_ADMIN',
      isActive: true,
      isVerified: true,
    },
  });
  console.log(`✅ ULTRA_ADMIN vérifié/créé : ${ultraAdmin.email}`);

  // Créer des événements de base rattachés à l'Ultra Admin
  await ensureMany(prisma.event, 'title', [
    { title: 'Atelier Prise de Parole en Public', description: 'Maîtrisez l\'art de la communication orale et gagnez en confiance lors de vos présentations professionnelles.', type: 'ATELIER', location: 'Dakar', eventDate: new Date('2026-09-15'), createdById: ultraAdmin.id },
    { title: 'Conférence : Leadership en Afrique', description: 'Découvrez les clés du leadership moderne et les opportunités pour les jeunes leaders africains.', type: 'CONFERENCE', location: 'En ligne', eventDate: new Date('2026-09-22'), createdById: ultraAdmin.id },
    { title: 'Networking : Rencontres Professionnelles', description: 'Échangez avec des professionnels et élargissez votre réseau dans une ambiance conviviale.', type: 'RENCONTRE', location: 'Dakar', eventDate: new Date('2026-10-05'), createdById: ultraAdmin.id },
    { title: 'Formation : Cybersécurité Initiation', description: 'Apprenez les bases de la cybersécurité et protégez vos données numériques efficacement.', type: 'FORMATION', location: 'Laboratoire', eventDate: new Date('2026-10-12'), createdById: ultraAdmin.id },
    { title: 'Atelier Gestion du Stress', description: 'Découvrez des techniques éprouvées pour mieux gérer le stress et les pressions du monde professionnel.', type: 'ATELIER', location: 'Salle de conférence', eventDate: new Date('2026-10-18'), createdById: ultraAdmin.id },
    { title: 'Conférence : Innovation & Entrepreneuriat', description: 'Comment transformer vos idées en projets concrets ? Retours d\'expérience de jeunes entrepreneurs.', type: 'CONFERENCE', location: 'En ligne', eventDate: new Date('2026-10-25'), createdById: ultraAdmin.id },
  ], 'événements');

  // Créer des sujets de forum rattachés à l'Ultra Admin
  await ensureMany(prisma.topic, 'title', [
    { title: 'Comment choisir entre Pentesting et Blue Teaming ?', content: 'Je suis intéressé par la cybersécurité mais je ne sais pas quelle voie choisir. Quelqu\'un peut partager son expérience ?', category: 'Orientation & Métiers', authorId: ultraAdmin.id },
    { title: 'Les débouchés dans les énergies renouvelables au Sénégal', content: 'Quelles sont les opportunités professionnelles dans le secteur des énergies renouvelables au Sénégal ?', category: 'Orientation & Métiers', authorId: ultraAdmin.id },
    { title: 'Suggestions pour le prochain atelier Soft Skills', content: 'Nous organisons un atelier sur les soft skills, avez-vous des suggestions de thèmes à aborder ?', category: 'Vie du Club & Contributions', authorId: ultraAdmin.id },
    { title: 'Avis sur le nouveau design du site web', content: 'Que pensez-vous de la nouvelle version du site du club ? Partagez vos retours !', category: 'Vie du Club & Contributions', authorId: ultraAdmin.id },
  ], 'sujets de forum');

  // Créer des articles de blog (le blog est vide par défaut)
  function generateSlug(title) {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  const blogPosts = [
    {
      title: 'Lancement officiel du Club Le Monde du Travail',
      slug: generateSlug('Lancement officiel du Club Le Monde du Travail'),
      excerpt: 'Retour sur la cérémonie de lancement du club et les ambitions qui animent notre communauté de jeunes professionnels.',
      content: 'Le Club Le Monde du Travail a officiellement vu le jour lors d\'une cérémonie qui a rassemblé plus de 50 jeunes passionnés par le développement professionnel.\n\nNotre fondateur a présenté la vision du club : créer un espace d\'apprentissage, d\'échange et de préparation concret pour la jeunesse africaine. Le monde professionnel est de plus en plus compétitif, et il est devenu vital pour les jeunes de se préparer très tôt.\n\nParmi les axes principaux du club :\n- Formations en soft skills et compétences techniques\n- Ateliers pratiques de prise de parole et leadership\n- Rencontres avec des professionnels expérimentés\n- Forum d\'échange et d\'entraide entre membres\n\nRejoignez-nous dans cette aventure pour construire ensemble le futur professionnel de notre génération !',
      category: 'CLUB',
      status: 'PUBLISHED',
      featured: true,
      coverImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
      publishedAt: new Date('2026-08-01'),
      authorId: ultraAdmin.id,
    },
    {
      title: 'Formation : Maîtriser la prise de parole en public',
      slug: generateSlug('Formation Maitriser la prise de parole en public'),
      excerpt: 'Découvrez les techniques essentielles pour captiver votre audience et gagner en confiance lors de vos présentations.',
      content: 'La prise de parole en public est l\'une des compétences les plus recherchées dans le monde professionnel. Notre formation dédiée a permis à 30 participants de découvrir les fondamentaux de l\'éloquence.\n\nAu programme de cette session :\n- Gestion du trac et techniques de respiration\n- Structure d\'un discours impactant\n- Communication non-verbale et langage corporel\n- Exercices pratiques avec feedback personnalisé\n\nLes participants ont particulièrement apprécié les mises en situation réelles et les retours constructifs de nos formateurs. La prochaine session est prévue pour le mois prochain !',
      category: 'FORMATION',
      status: 'PUBLISHED',
      featured: false,
      coverImage: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
      publishedAt: new Date('2026-08-10'),
      authorId: ultraAdmin.id,
    },
    {
      title: 'Atelier pratique : Rédiger un CV qui se démarque',
      slug: generateSlug('Atelier pratique Rediger un CV qui se demarque'),
      excerpt: 'Les secrets d\'un CV efficace dévoilés lors de notre dernier atelier avec un recruteur professionnel.',
      content: 'Notre dernier atelier a réuni 25 jeunes autour d\'un thème crucial : comment rédiger un CV qui capte l\'attention des recruteurs en moins de 30 secondes ?\n\nNotre intervenant, recruteur senior dans une entreprise internationale, a partagé ses conseils :\n- Adapter son CV à chaque offre d\'emploi\n- Mettre en avant les réalisations plutôt que les tâches\n- Soigner la mise en page et la lisibilité\n- Éviter les erreurs classiques qui éliminent un candidat\n\nChaque participant a pu retravailler son CV avec un accompagnement personnalisé. Les retours ont été unanimes : cet atelier a transformé leur approche de la candidature.',
      category: 'ATELIER',
      status: 'PUBLISHED',
      featured: false,
      coverImage: 'https://images.unsplash.com/photo-1521737711867-e3b97375f052?w=800&q=80',
      publishedAt: new Date('2026-08-15'),
      authorId: ultraAdmin.id,
    },
    {
      title: 'Rencontre avec des entrepreneurs sénégalais inspirants',
      slug: generateSlug('Rencontre avec des entrepreneurs senegalais inspirants'),
      excerpt: 'Trois entrepreneurs partagent leurs parcours, leurs échecs et les leçons qui ont forgé leur succès.',
      content: 'Le club a organisé une rencontre exceptionnelle avec trois entrepreneurs sénégalais qui ont bâti des entreprises à succès dans la tech, l\'agroalimentaire et les énergies renouvelables.\n\nChacun a partagé son parcours avec authenticité :\n- Les défis du financement en Afrique de l\'Ouest\n- L\'importance du réseau et du mentorat\n- Comment transformer un échec en opportunité\n- Les secteurs porteurs pour la jeunesse africaine\n\nLa session de questions-réponses a été particulièrement riche, avec des échanges sincères sur les réalités de l\'entrepreneuriat. Un moment inspirant qui a motivé plusieurs membres à concrétiser leurs projets.',
      category: 'RENCONTRE',
      status: 'PUBLISHED',
      featured: false,
      coverImage: 'https://images.unsplash.com/photo-1528605248644-14dd04022db1?w=800&q=80',
      publishedAt: new Date('2026-08-20'),
      authorId: ultraAdmin.id,
    },
    {
      title: 'Conférence : Les métiers de demain en Afrique',
      slug: generateSlug('Conference Les metiers de demain en Afrique'),
      excerpt: 'Quels sont les secteurs qui recruteront le plus dans les 10 prochaines années sur le continent africain ?',
      content: 'Notre conférence sur les métiers de demain a rassemblé plus de 100 participants en ligne et en présentiel pour explorer les tendances du marché de l\'emploi en Afrique.\n\nLes secteurs identifiés comme les plus prometteurs :\n- Technologies de l\'information et cybersécurité\n- Énergies renouvelables et développement durable\n- Fintech et services financiers numériques\n- Santé digitale et biotechnologies\n- Agriculture moderne et agritech\n\nLes intervenants ont insisté sur l\'importance de développer à la fois des compétences techniques et des soft skills pour rester compétitif dans un monde en constante évolution.',
      category: 'CONFERENCE',
      status: 'PUBLISHED',
      featured: false,
      coverImage: 'https://images.unsplash.com/photo-1544531585-9847b68c8c86?w=800&q=80',
      publishedAt: new Date('2026-08-25'),
      authorId: ultraAdmin.id,
    },
    {
      title: 'Projet communautaire : Mentorat pour les lycéens',
      slug: generateSlug('Projet communautaire Mentorat pour les lyceens'),
      excerpt: 'Le club lance un programme de mentorat pour accompagner les lycéens dans leur orientation professionnelle.',
      content: 'Le Club Le Monde du Travail est fier d\'annoncer le lancement de son programme de mentorat destiné aux lycéens de la région de Dakar.\n\nObjectifs du programme :\n- Accompagner 50 lycéens dans leur choix d\'orientation\n- Organiser des visites d\'entreprises et de campus universitaires\n- Mettre en relation chaque lycéen avec un mentor professionnel\n- Développer la confiance en soi et les compétences interpersonnelles\n\nLes membres du club se sont portés volontaires comme mentors, partageant leur expérience et leurs connaissances avec la prochaine génération. Ce projet incarne notre valeur fondamentale : préparer la relève de qualité pour notre continent.',
      category: 'PROJET',
      status: 'PUBLISHED',
      featured: false,
      coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      publishedAt: new Date('2026-09-01'),
      authorId: ultraAdmin.id,
    },
    {
      title: 'Témoignage : « Le club a changé ma vision du travail »',
      slug: generateSlug('Temoignage Le club a change ma vision du travail'),
      excerpt: 'Fatou, membre depuis 6 mois, raconte comment le club a transformé son approche professionnelle.',
      content: '« Avant de rejoindre le club, j\'avais une vision très floue de mon avenir professionnel. Je savais que je voulais réussir, mais je ne savais pas par où commencer. »\n\nFatou Sow, étudiante en gestion, est membre du club depuis six mois. Elle témoigne de son parcours :\n\n« Les formations en prise de parole m\'ont donné une confiance que je n\'avais jamais eue. Lors de mon dernier stage, j\'ai pu présenter un projet devant le comité de direction sans trembler. »\n\n« Le réseau que j\'ai construit ici est inestimable. J\'ai rencontré des professionnels qui m\'ont ouvert des portes et des camarades qui partagent les mêmes ambitions. »\n\n« Mon conseil aux jeunes qui hésitent : rejoignez le club. L\'investissement en temps et en énergie vous sera rendu au centuple dans votre carrière. »',
      category: 'TEMOIGNAGE',
      status: 'PUBLISHED',
      featured: false,
      coverImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
      publishedAt: new Date('2026-09-05'),
      authorId: ultraAdmin.id,
    },
    {
      title: 'Inscription ouverte : Prochaine session de formations',
      slug: generateSlug('Inscription ouverte Prochaine session de formations'),
      excerpt: 'Les inscriptions pour la nouvelle session de formations du club sont ouvertes. Découvrez le programme complet.',
      content: 'Le Club Le Monde du Travail ouvre les inscriptions pour sa prochaine session de formations qui débutera en octobre 2026.\n\nProgramme de la session :\n- Leadership & Management (3 séances)\n- Communication efficace et prise de parole (2 séances)\n- Entrepreneuriat : de l\'idée au projet (4 séances)\n- Développement personnel et gestion du stress (2 séances)\n- Cybersécurité : les bases essentielles (3 séances)\n\nLes formations sont animées par des professionnels expérimentés et sont ouvertes à tous les membres du club. Les places sont limitées à 30 participants par module pour garantir un accompagnement de qualité.\n\nPour vous inscrire, rendez-vous dans la section Formations de notre site ou contactez-nous directement.',
      category: 'ANNONCE',
      status: 'PUBLISHED',
      featured: false,
      coverImage: 'https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=800&q=80',
      publishedAt: new Date('2026-09-08'),
      authorId: ultraAdmin.id,
    },
  ];

  // Insertion idempotente par slug (clé unique)
  let blogCreated = 0;
  for (const post of blogPosts) {
    const existing = await prisma.post.findUnique({ where: { slug: post.slug } });
    if (!existing) {
      await prisma.post.create({ data: post });
      blogCreated += 1;
    }
  }
  console.log(`✅ ${blogCreated}/${blogPosts.length} articles de blog créés${blogCreated < blogPosts.length ? ' (le reste existait déjà)' : ''}`);

  // ===== RBAC : catalogue canonique (permissions + rôles système) =====
  const { seedRbac } = require('../src/scripts/seed-rbac');
  await seedRbac(prisma);

  // ===== Paramètres de plateforme (valeurs par défaut) =====
  const SettingsService = require('../src/services/settingsService');
  await SettingsService.ensureDefaults();
  console.log('✅ Paramètres de plateforme initialisés');

  // Rattacher le rôle RBAC ULTRA_ADMIN au propriétaire
  const ultraRole = await prisma.adminRole.findUnique({ where: { name: 'ULTRA_ADMIN' } });
  if (ultraRole) {
    await prisma.userAdminRole.upsert({
      where: {
        userId_adminRoleId: {
          userId: ultraAdmin.id,
          adminRoleId: ultraRole.id,
        },
      },
      update: { status: 'APPROVED', isActive: true, reviewedBy: ultraAdmin.id, reviewedAt: new Date() },
      create: {
        userId: ultraAdmin.id,
        adminRoleId: ultraRole.id,
        assignedBy: ultraAdmin.id,
        status: 'APPROVED',
        reviewedBy: ultraAdmin.id,
        reviewedAt: new Date(),
      },
    });
    console.log('✅ Rôle ULTRA_ADMIN assigné et approuvé');
  }

  console.log('🎉 Seed terminé avec succès (zéro compte fictif) !');
}

main()
  .catch((e) => {
    console.error('❌ Erreur lors du seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
