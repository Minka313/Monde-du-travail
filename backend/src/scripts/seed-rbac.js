// Seed RBAC canonique : source unique du catalogue de permissions et des
// rôles système. Utilisé par `npm run prisma:seed` (via prisma/seed.js) et
// exécutable directement : `node src/scripts/seed-rbac.js`.

const PERMISSIONS = [
  // Formations
  { code: 'formation.read', module: 'formation', action: 'read', description: 'Consulter les formations' },
  { code: 'formation.create', module: 'formation', action: 'create', description: 'Créer des formations' },
  { code: 'formation.update', module: 'formation', action: 'update', description: 'Modifier des formations' },
  { code: 'formation.delete', module: 'formation', action: 'delete', description: 'Supprimer des formations' },
  { code: 'formation.publish', module: 'formation', action: 'publish', description: 'Publier / dépublier des formations' },
  { code: 'formation.archive', module: 'formation', action: 'archive', description: 'Archiver des formations' },
  // Métiers
  { code: 'metier.read', module: 'metier', action: 'read', description: 'Consulter les métiers' },
  { code: 'metier.create', module: 'metier', action: 'create', description: 'Créer des métiers' },
  { code: 'metier.update', module: 'metier', action: 'update', description: 'Modifier des métiers' },
  { code: 'metier.delete', module: 'metier', action: 'delete', description: 'Supprimer des métiers' },
  { code: 'metier.publish', module: 'metier', action: 'publish', description: 'Publier / dépublier des métiers' },
  { code: 'metier.archive', module: 'metier', action: 'archive', description: 'Archiver des métiers' },
  // Blog
  { code: 'blog.read', module: 'blog', action: 'read', description: 'Consulter les articles' },
  { code: 'blog.create', module: 'blog', action: 'create', description: 'Créer des articles' },
  { code: 'blog.update', module: 'blog', action: 'update', description: 'Modifier des articles' },
  { code: 'blog.publish', module: 'blog', action: 'publish', description: 'Publier / dépublier des articles' },
  { code: 'blog.delete', module: 'blog', action: 'delete', description: 'Supprimer des articles' },
  { code: 'blog.archive', module: 'blog', action: 'archive', description: 'Archiver des articles' },
  // Forum
  { code: 'forum.read', module: 'forum', action: 'read', description: 'Consulter le forum' },
  { code: 'forum.create', module: 'forum', action: 'create', description: 'Créer des sujets / réponses' },
  { code: 'forum.update', module: 'forum', action: 'update', description: 'Modifier des sujets / réponses' },
  { code: 'forum.delete', module: 'forum', action: 'delete', description: 'Supprimer des sujets / réponses' },
  { code: 'forum.moderate', module: 'forum', action: 'moderate', description: 'Modérer le forum (épingler, verrouiller, résoudre)' },
  // Événements
  { code: 'event.read', module: 'event', action: 'read', description: 'Consulter les événements' },
  { code: 'event.create', module: 'event', action: 'create', description: 'Créer des événements' },
  { code: 'event.update', module: 'event', action: 'update', description: 'Modifier des événements' },
  { code: 'event.delete', module: 'event', action: 'delete', description: 'Supprimer des événements' },
  // Utilisateurs & adhésions
  { code: 'users.read', module: 'users', action: 'read', description: 'Consulter les utilisateurs' },
  { code: 'users.update', module: 'users', action: 'update', description: 'Modifier les utilisateurs' },
  { code: 'users.delete', module: 'users', action: 'delete', description: 'Supprimer des utilisateurs' },
  { code: 'users.verify', module: 'users', action: 'verify', description: 'Vérifier les comptes' },
  { code: 'users.suspend', module: 'users', action: 'suspend', description: 'Activer / désactiver / suspendre des comptes' },
  { code: 'membership.read', module: 'membership', action: 'read', description: 'Consulter les demandes d\'adhésion' },
  { code: 'membership.approve', module: 'membership', action: 'approve', description: 'Approuver / refuser des adhésions' },
  // Administration & rôles
  { code: 'admins.read', module: 'admins', action: 'read', description: 'Consulter les administrateurs et la hiérarchie' },
  { code: 'admins.create', module: 'admins', action: 'create', description: 'Créer des rôles administrateurs' },
  { code: 'admins.update', module: 'admins', action: 'update', description: 'Modifier des rôles et leurs permissions' },
  { code: 'admins.delete', module: 'admins', action: 'delete', description: 'Désactiver / supprimer des rôles' },
  { code: 'admins.assign', module: 'admins', action: 'assign', description: 'Attribuer / retirer un rôle à un utilisateur' },
  { code: 'admins.approve', module: 'admins', action: 'approve', description: 'Approuver / refuser une attribution de rôle' },
  { code: 'admins.suspend', module: 'admins', action: 'suspend', description: 'Suspendre / réactiver un administrateur' },
  { code: 'admins.revoke', module: 'admins', action: 'revoke', description: 'Révoquer un rôle administrateur' },
  // Workflows d'approbation
  { code: 'approvals.read', module: 'approvals', action: 'read', description: 'Consulter les demandes d\'approbation' },
  { code: 'approvals.manage', module: 'approvals', action: 'manage', description: 'Approuver / rejeter / annuler des demandes' },
  // Plateforme
  { code: 'settings.manage', module: 'settings', action: 'manage', description: 'Gérer les paramètres de la plateforme' },
  // Audit
  { code: 'logs.read', module: 'logs', action: 'read', description: 'Consulter le journal d\'audit' },
  // Médias
  { code: 'media.manage', module: 'media', action: 'manage', description: 'Gérer les médias' },
];

const SYSTEM_ROLES = [
  {
    name: 'ULTRA_ADMIN',
    description: 'Contrôle total de la plateforme',
    isSystem: true,
    requiresApproval: false,
    permissions: PERMISSIONS.map(p => p.code),
  },
  {
    name: 'ADMIN_FORMATION',
    description: 'Gestion complète du module Formations',
    isSystem: true,
    requiresApproval: true,
    permissions: ['formation.read', 'formation.create', 'formation.update', 'formation.delete', 'formation.publish', 'formation.archive'],
  },
  {
    name: 'ADMIN_METIER',
    description: 'Gestion complète du module Métiers',
    isSystem: true,
    requiresApproval: true,
    permissions: ['metier.read', 'metier.create', 'metier.update', 'metier.delete', 'metier.publish', 'metier.archive'],
  },
  {
    name: 'ADMIN_BLOG',
    description: 'Gestion complète du module Blog',
    isSystem: true,
    requiresApproval: true,
    permissions: ['blog.read', 'blog.create', 'blog.update', 'blog.publish', 'blog.delete', 'blog.archive'],
  },
  {
    name: 'ADMIN_FORUM',
    description: 'Modération du module Forum',
    isSystem: true,
    requiresApproval: true,
    permissions: ['forum.read', 'forum.create', 'forum.update', 'forum.delete', 'forum.moderate'],
  },
];

async function seedRbac(prisma) {
  console.log('🌱 Seed RBAC (catalogue canonique)...');

  for (const permission of PERMISSIONS) {
    await prisma.permission.upsert({
      where: { code: permission.code },
      update: permission,
      create: permission,
    });
  }
  console.log(`✅ ${PERMISSIONS.length} permissions créées / normalisées`);

  // Retirer les permissions obsolètes (hors catalogue) pour garder une table canonique
  const stale = await prisma.permission.deleteMany({
    where: { code: { notIn: PERMISSIONS.map(p => p.code) } },
  });
  if (stale.count > 0) {
    console.log(`🧹 ${stale.count} permissions obsolètes supprimées`);
  }

  for (const role of SYSTEM_ROLES) {
    const { permissions: codes, ...roleData } = role;
    await prisma.adminRole.upsert({
      where: { name: role.name },
      update: roleData,
      create: roleData,
    });

    const savedRole = await prisma.adminRole.findUnique({ where: { name: role.name } });
    await prisma.adminRolePermission.deleteMany({ where: { adminRoleId: savedRole.id } });
    const records = await prisma.permission.findMany({ where: { code: { in: codes } } });
    await prisma.adminRolePermission.createMany({
      data: records.map(p => ({ adminRoleId: savedRole.id, permissionId: p.id })),
    });

    console.log(`✅ Rôle ${role.name} : ${records.length} permissions`);
  }
}

module.exports = { seedRbac, PERMISSIONS, SYSTEM_ROLES };

if (require.main === module) {
  const { PrismaClient } = require('@prisma/client');
  const prisma = new PrismaClient();
  seedRbac(prisma)
    .catch(e => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}
