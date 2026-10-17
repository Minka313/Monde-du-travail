/**
 * Comptes de test autonomes : chaque suite crée ses propres utilisateurs
 * (jamais de vrais comptes ni de mots de passe réels dans le dépôt),
 * puis les supprime avec le contenu qu'ils ont produit.
 */
const bcrypt = require('bcryptjs');
const prisma = require('../../src/config/database');
const { seedRbac } = require('../../src/scripts/seed-rbac');

const TEST_PASSWORD = 'Test123!';

let rbacReady = null;
// Les rôles système (ADMIN_BLOG, ADMIN_FORUM...) doivent exister ; le seed RBAC est idempotent.
function ensureRbac() {
  if (!rbacReady) {
    rbacReady = seedRbac(prisma);
  }
  return rbacReady;
}

/**
 * Crée (ou recrée) un utilisateur de test actif.
 * @param {object} opts
 * @param {string} opts.email
 * @param {'MEMBER'|'ADMIN'|'ULTRA_ADMIN'} [opts.role]
 * @param {string} [opts.adminRole] rôle RBAC approuvé à attribuer (ex. 'ADMIN_BLOG')
 */
async function createTestUser({ email, role = 'MEMBER', adminRole, firstName = 'Test', lastName = 'User' }) {
  await ensureRbac();
  await cleanupTestUsers([email]);

  const user = await prisma.user.create({
    data: {
      email,
      password: await bcrypt.hash(TEST_PASSWORD, 10),
      firstName,
      lastName,
      role,
      isActive: true,
      isVerified: true,
    },
  });

  if (adminRole) {
    const roleRecord = await prisma.adminRole.findUnique({ where: { name: adminRole } });
    await prisma.userAdminRole.create({
      data: {
        userId: user.id,
        adminRoleId: roleRecord.id,
        status: 'APPROVED',
        reviewedAt: new Date(),
      },
    });
  }

  return user;
}

/** Supprime les utilisateurs de test et le contenu dont ils sont auteurs. */
async function cleanupTestUsers(emails) {
  const users = await prisma.user.findMany({ where: { email: { in: emails } }, select: { id: true } });
  const ids = users.map((u) => u.id);
  if (ids.length === 0) return;

  await prisma.reply.deleteMany({ where: { authorId: { in: ids } } });
  await prisma.topic.deleteMany({ where: { authorId: { in: ids } } });
  await prisma.post.deleteMany({ where: { authorId: { in: ids } } });
  await prisma.event.deleteMany({ where: { createdById: { in: ids } } });
  await prisma.approvalWorkflow.deleteMany({ where: { createdById: { in: ids } } });
  await prisma.userAdminRole.deleteMany({ where: { userId: { in: ids } } });
  await prisma.user.deleteMany({ where: { id: { in: ids } } });
}

module.exports = { TEST_PASSWORD, createTestUser, cleanupTestUsers, prisma };
