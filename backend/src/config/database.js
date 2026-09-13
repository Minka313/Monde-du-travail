const { PrismaClient } = require('@prisma/client');

// Pattern Singleton officiel pour Prisma en environnement Serverless (Vercel)
// Empêche la multiplication des instances et la saturation du pool de connexions Supabase
const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma || new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
});

globalForPrisma.prisma = prisma;

module.exports = prisma;