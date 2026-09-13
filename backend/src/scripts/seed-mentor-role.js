const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const prisma = require('../config/database');

/**
 * Initialisation du rôle officiel MENTOR_EXPERT dans le système RBAC Supabase
 */
async function seedMentorRole() {
  console.log('🌱 Initialisation du rôle MENTOR_EXPERT...');

  const mentorPermCodes = [
    'formation.read',
    'formation.create',
    'formation.update',
    'metier.read',
    'metier.create',
    'blog.read',
    'blog.create',
    'blog.update',
    'forum.read',
    'forum.create',
    'forum.moderate',
    'event.read',
    'event.create',
  ];

  // 1. Récupérer les permissions correspondantes
  const permissions = await prisma.permission.findMany({
    where: { code: { in: mentorPermCodes } },
  });

  console.log(`Found ${permissions.length} matching permissions.`);

  // 2. Créer ou mettre à jour le rôle MENTOR_EXPERT
  const role = await prisma.adminRole.upsert({
    where: { name: 'MENTOR_EXPERT' },
    update: {
      description: "Mentor & Expert d'Industrie : accompagnement, animation d'ateliers, orientation et partage d'expérience.",
      isSystem: true,
    },
    create: {
      name: 'MENTOR_EXPERT',
      description: "Mentor & Expert d'Industrie : accompagnement, animation d'ateliers, orientation et partage d'expérience.",
      isSystem: true,
      requiresApproval: false,
    },
  });

  console.log(`Role MENTOR_EXPERT ready: ${role.id}`);

  // 3. Associer les permissions
  for (const perm of permissions) {
    await prisma.adminRolePermission.upsert({
      where: {
        adminRoleId_permissionId: {
          adminRoleId: role.id,
          permissionId: perm.id,
        },
      },
      update: {},
      create: {
        adminRoleId: role.id,
        permissionId: perm.id,
      },
    });
  }

  console.log('✅ Permissions associées au rôle MENTOR_EXPERT avec succès !');
}

if (require.main === module) {
  seedMentorRole()
    .then(() => {
      console.log('Seed MENTOR_EXPERT terminé.');
      process.exit(0);
    })
    .catch((err) => {
      console.error('Erreur seed MENTOR_EXPERT:', err);
      process.exit(1);
    });
}

module.exports = seedMentorRole;
