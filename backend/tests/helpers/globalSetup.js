/**
 * Exécuté une fois avant toutes les suites :
 * 1. refuse de tourner sur une base distante (les suites vident des tables entières) ;
 * 2. garantit que les rôles et permissions système existent, pour que les tests
 *    tournent sur une base vierge.
 */
const LOCAL_HOSTS = ['localhost', '127.0.0.1', '::1', 'postgres', 'db'];

function assertLocalDatabase(url) {
  let host;
  try {
    host = new URL(url).hostname.replace(/^\[|\]$/g, '');
  } catch (_) {
    throw new Error('DATABASE_URL absente ou invalide : les tests nécessitent une base PostgreSQL locale.');
  }
  if (!LOCAL_HOSTS.includes(host) && process.env.ALLOW_REMOTE_TEST_DB !== '1') {
    throw new Error(
      `Tests refusés sur la base distante « ${host} » : ils suppriment des données. ` +
      'Utilisez une base locale (ou ALLOW_REMOTE_TEST_DB=1 sur une base jetable).'
    );
  }
}

module.exports = async () => {
  require('dotenv').config();
  assertLocalDatabase(process.env.DATABASE_URL);

  const { PrismaClient } = require('@prisma/client');
  const { seedRbac } = require('../../src/scripts/seed-rbac');
  const prisma = new PrismaClient();
  try {
    await seedRbac(prisma);
  } finally {
    await prisma.$disconnect();
  }
};
