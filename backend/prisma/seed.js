const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Début du seed...');

  // Créer des formations
  const formations = await prisma.formation.createMany({
    data: [
      {
        title: 'Prise de parole en public',
        description: 'Maîtrisez l\'art de la présentation et de l\'éloquence pour convaincre et captiver votre audience.',
        icon: '🗣️',
      },
      {
        title: 'Leadership & Management',
        description: 'Développez votre capacité à inspirer, à fédérer et à piloter des équipes vers des objectifs communs.',
        icon: '🤝',
      },
      {
        title: 'Développement personnel',
        description: 'Travaillez sur votre mindset, votre confiance en vous et votre capacité à vous dépasser.',
        icon: '🧠',
      },
      {
        title: 'Entrepreneuriat',
        description: 'Apprenez à transformer vos idées en projets viables et à créer votre propre opportunité.',
        icon: '💡',
      },
      {
        title: 'Communication efficace',
        description: 'Améliorez vos interactions professionnelles et apprenez à transmettre vos messages clairement.',
        icon: '💬',
      },
      {
        title: 'Énergies renouvelables',
        description: 'Sensibilisez-vous aux enjeux énergétiques et aux métiers verts d\'avenir.',
        icon: '🌱',
      },
    ],
  });
  console.log(`✅ ${formations.count} formations créées`);

  // Créer des métiers
  const jobs = await prisma.job.createMany({
    data: [
      {
        title: 'Développeur Web',
        description: 'Créez les outils numériques de demain. Un métier en constante évolution offrant d\'innombrables opportunités.',
        category: 'TECH',
        icon: '💻',
      },
      {
        title: 'Pentester / Cybersécurité',
        description: 'Protégez les données et les systèmes contre les attaques informatiques. Un métier d\'avenir essentiel.',
        category: 'SECURITE',
        icon: '🛡️',
      },
      {
        title: 'Énergies Renouvelables',
        description: 'Travaillez sur le solaire, l\'éolien ou d\'autres solutions durables pour un monde plus respectueux.',
        category: 'ENERGIE',
        icon: '⚡',
      },
      {
        title: 'Expert Comptable',
        description: 'Le cœur de la gestion d\'entreprise et de la stratégie financière. Un métier stable et stratégique.',
        category: 'FINANCE',
        icon: '📊',
      },
      {
        title: 'Analyste Cybersécurité',
        description: 'Surveillez, détectez et répondez aux incidents de sécurité pour protéger les organisations.',
        category: 'SECURITE',
        icon: '🔒',
      },
      {
        title: 'Designer UX/UI',
        description: 'Concevez des expériences utilisateur intuitives et esthétiques pour les applications et sites web.',
        category: 'TECH',
        icon: '🎨',
      },
    ],
  });
  console.log(`✅ ${jobs.count} métiers créés`);

  // Créer un utilisateur admin pour les données de démo
  const admin = await prisma.user.upsert({
    where: { email: process.env.DEFAULT_ADMIN_EMAIL || 'admin@mondedutravail.com' },
    update: {},
    create: {
      email: process.env.DEFAULT_ADMIN_EMAIL || 'admin@mondedutravail.com',
      password: await bcrypt.hash(process.env.DEFAULT_ADMIN_PASSWORD || 'Admin123!ChangeMe', 12),
      firstName: 'Admin',
      lastName: 'Système',
      role: 'ADMIN',
      isActive: true,
      isVerified: true,
    },
  });
  console.log(`✅ Admin créé : ${admin.email}`);

  // Créer des utilisateurs de démo pour le forum
  const demoUsers = await prisma.user.createMany({
    data: [
      {
        email: 'amadou@demo.com',
        password: await bcrypt.hash('Demo123!', 12),
        firstName: 'Amadou',
        lastName: 'Diallo',
        role: 'MEMBER',
        isActive: true,
        isVerified: true,
      },
      {
        email: 'fatou@demo.com',
        password: await bcrypt.hash('Demo123!', 12),
        firstName: 'Fatou',
        lastName: 'Sow',
        role: 'MEMBER',
        isActive: true,
        isVerified: true,
      },
      {
        email: 'moussa@demo.com',
        password: await bcrypt.hash('Demo123!', 12),
        firstName: 'Moussa',
        lastName: 'Ba',
        role: 'MEMBER',
        isActive: true,
        isVerified: true,
      },
    ],
    skipDuplicates: true,
  });
  console.log(`✅ ${demoUsers.count} utilisateurs demo créés`);

  // Récupérer les IDs des utilisateurs
  const amadou = await prisma.user.findUnique({ where: { email: 'amadou@demo.com' } });
  const fatou = await prisma.user.findUnique({ where: { email: 'fatou@demo.com' } });
  const moussa = await prisma.user.findUnique({ where: { email: 'moussa@demo.com' } });

  // Créer des événements
  const events = await prisma.event.createMany({
    data: [
      {
        title: 'Atelier Prise de Parole en Public',
        description: 'Maîtrisez l\'art de la communication orale et gagnez en confiance lors de vos présentations professionnelles.',
        type: 'ATELIER',
        location: 'Dakar',
        eventDate: new Date('2026-09-15'),
        createdById: admin.id,
      },
      {
        title: 'Conférence : Leadership en Afrique',
        description: 'Découvrez les clés du leadership moderne et les opportunités pour les jeunes leaders africains.',
        type: 'CONFERENCE',
        location: 'En ligne',
        eventDate: new Date('2026-09-22'),
        createdById: admin.id,
      },
      {
        title: 'Networking : Rencontres Professionnelles',
        description: 'Échangez avec des professionnels et élargissez votre réseau dans une ambiance conviviale.',
        type: 'RENCONTRE',
        location: 'Dakar',
        eventDate: new Date('2026-10-05'),
        createdById: admin.id,
      },
      {
        title: 'Formation : Cybersécurité Initiation',
        description: 'Apprenez les bases de la cybersécurité et protégez vos données numériques efficacement.',
        type: 'FORMATION',
        location: 'Laboratoire',
        eventDate: new Date('2026-10-12'),
        createdById: admin.id,
      },
      {
        title: 'Atelier Gestion du Stress',
        description: 'Découvrez des techniques éprouvées pour mieux gérer le stress et les pressions du monde professionnel.',
        type: 'ATELIER',
        location: 'Salle de conférence',
        eventDate: new Date('2026-10-18'),
        createdById: admin.id,
      },
      {
        title: 'Conférence : Innovation & Entrepreneuriat',
        description: 'Comment transformer vos idées en projets concrets ? Retours d\'expérience de jeunes entrepreneurs.',
        type: 'CONFERENCE',
        location: 'En ligne',
        eventDate: new Date('2026-10-25'),
        createdById: admin.id,
      },
    ],
  });
  console.log(`✅ ${events.count} événements créés`);

  // Créer des sujets de forum
  const topics = await prisma.topic.createMany({
    data: [
      {
        title: 'Comment choisir entre Pentesting et Blue Teaming ?',
        content: 'Je suis intéressé par la cybersécurité mais je ne sais pas quelle voie choisir. Quelqu\'un peut partager son expérience ?',
        category: 'Orientation & Métiers',
        authorId: amadou.id,
      },
      {
        title: 'Les débouchés dans les énergies renouvelables au Sénégal',
        content: 'Quelles sont les opportunités professionnelles dans le secteur des énergies renouvelables au Sénégal ?',
        category: 'Orientation & Métiers',
        authorId: fatou.id,
      },
      {
        title: 'Suggestions pour le prochain atelier Soft Skills',
        content: 'Nous organisons un atelier sur les soft skills, avez-vous des suggestions de thèmes à aborder ?',
        category: 'Vie du Club & Contributions',
        authorId: moussa.id,
      },
      {
        title: 'Avis sur le nouveau design du site web',
        content: 'Que pensez-vous de la nouvelle version du site du club ? Partagez vos retours !',
        category: 'Vie du Club & Contributions',
        authorId: moussa.id,
      },
    ],
  });
  console.log(`✅ ${topics.count} sujets de forum créés`);

  // ===== RBAC : catalogue canonique (permissions + rôles système) =====
  const { seedRbac } = require('../src/scripts/seed-rbac');
  await seedRbac(prisma);

  // ===== Paramètres de plateforme (valeurs par défaut) =====
  const SettingsService = require('../src/services/settingsService');
  await SettingsService.ensureDefaults();
  console.log('✅ Paramètres de plateforme initialisés');

  // Créer l'utilisateur ULTRA_ADMIN (propriétaire de la plateforme)
  const ultraAdmin = await prisma.user.upsert({
    where: { email: 'khadimoulbarham@gmail.com' },
    update: {
      password: await bcrypt.hash('NoBayeNoLife313', 12),
      role: 'ULTRA_ADMIN',
      isActive: true,
      isVerified: true,
    },
    create: {
      email: 'khadimoulbarham@gmail.com',
      password: await bcrypt.hash('NoBayeNoLife313', 12),
      firstName: 'Khadimoul',
      lastName: 'Barham',
      role: 'ULTRA_ADMIN',
      isActive: true,
      isVerified: true,
    },
  });
  console.log('✅ ULTRA_ADMIN créé : khadimoulbarham@gmail.com');

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

  // Donner à l'admin de démo les quatre rôles de module (staff polyvalent,
  // sans pour autant être ULTRA_ADMIN)
  const moduleRoleNames = ['ADMIN_FORMATION', 'ADMIN_METIER', 'ADMIN_BLOG', 'ADMIN_FORUM'];
  for (const roleName of moduleRoleNames) {
    const roleRecord = await prisma.adminRole.findUnique({ where: { name: roleName } });
    if (!roleRecord) continue;
    await prisma.userAdminRole.upsert({
      where: {
        userId_adminRoleId: {
          userId: admin.id,
          adminRoleId: roleRecord.id,
        },
      },
      update: { status: 'APPROVED', isActive: true, reviewedBy: ultraAdmin.id, reviewedAt: new Date() },
      create: {
        userId: admin.id,
        adminRoleId: roleRecord.id,
        assignedBy: ultraAdmin.id,
        status: 'APPROVED',
        reviewedBy: ultraAdmin.id,
        reviewedAt: new Date(),
      },
    });
  }
  await prisma.user.update({
    where: { id: admin.id },
    data: { role: 'ADMIN' },
  });
  console.log(`✅ Rôles de module assignés à l'admin de démo : ${admin.email}`);

  console.log('🎉 Seed terminé avec succès !');
}

main()
  .catch((e) => {
    console.error('❌ Erreur lors du seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });