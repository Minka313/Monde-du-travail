/**
 * Script déterministe pour consolider l'Ultra Admin unique de la plateforme.
 * 
 * Objectif :
 * - Assurer que seul "khadimoulbarham@gmail.com" (Khadimoul Barham) est l'ULTRA_ADMIN unique.
 * - Supprimer les comptes doublons / tests (minka124000@gmail.com, ultra@p45.test.com).
 * - Nettoyer les assignations RBAC correspondantes.
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../backend/.env') });
const { PrismaClient } = require(path.join(__dirname, '../backend/node_modules/@prisma/client'));

const prisma = new PrismaClient();

const TARGET_ULTRA_EMAIL = 'khadimoulbarham@gmail.com';
const ACCOUNTS_TO_REMOVE = ['minka124000@gmail.com', 'ultra@p45.test.com'];

async function execute() {
  console.log('--- Début de la consolidation de l\'Ultra Admin unique ---');

  // 1. Vérifier / Mettre à jour l'Ultra Admin légitime
  let ultraUser = await prisma.user.findUnique({
    where: { email: TARGET_ULTRA_EMAIL }
  });

  if (!ultraUser) {
    throw new Error(`L'utilisateur cible ${TARGET_ULTRA_EMAIL} n'existe pas en base !`);
  }

  ultraUser = await prisma.user.update({
    where: { id: ultraUser.id },
    data: {
      role: 'ULTRA_ADMIN',
      firstName: 'Khadimoul',
      lastName: 'Barham',
      isActive: true,
      isVerified: true
    }
  });
  console.log(`✅ Ultra Admin confirmé : ${ultraUser.firstName} ${ultraUser.lastName} (${ultraUser.email})`);

  // 2. Vérifier / Assigner le rôle RBAC ULTRA_ADMIN
  const ultraRole = await prisma.adminRole.findUnique({
    where: { name: 'ULTRA_ADMIN' }
  });

  if (ultraRole) {
    await prisma.userAdminRole.upsert({
      where: {
        userId_adminRoleId: {
          userId: ultraUser.id,
          adminRoleId: ultraRole.id
        }
      },
      update: {
        status: 'APPROVED',
        isActive: true,
        reviewedBy: ultraUser.id,
        reviewedAt: new Date()
      },
      create: {
        userId: ultraUser.id,
        adminRoleId: ultraRole.id,
        assignedBy: ultraUser.id,
        status: 'APPROVED',
        isActive: true,
        reviewedBy: ultraUser.id,
        reviewedAt: new Date()
      }
    });
    console.log('✅ Rôle RBAC ULTRA_ADMIN assigné et approuvé pour l\'unique titulaire.');
  }

  // 3. Traiter les autres comptes Ultra Admin
  for (const email of ACCOUNTS_TO_REMOVE) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      console.log(`ℹ️ Compte ${email} déjà inexistant.`);
      continue;
    }

    console.log(`🧹 Nettoyage du compte doublon / test : ${email} (${user.id})...`);

    // Supprimer les rôles admin RBAC rattachés
    await prisma.userAdminRole.deleteMany({
      where: { userId: user.id }
    });

    // Réassigner les rôles attribués ou revus par ce compte vers l'Ultra Admin légitime
    await prisma.userAdminRole.updateMany({
      where: { assignedBy: user.id },
      data: { assignedBy: ultraUser.id }
    });
    await prisma.userAdminRole.updateMany({
      where: { reviewedBy: user.id },
      data: { reviewedBy: ultraUser.id }
    });

    // Réassigner ou supprimer les logs d'audit
    await prisma.auditLog.deleteMany({
      where: { userId: user.id }
    });

    // Supprimer le compte utilisateur
    await prisma.user.delete({
      where: { id: user.id }
    });

    console.log(`✅ Compte ${email} supprimé avec succès.`);
  }

  // 4. Rétrograder tout autre compte qui aurait le rôle ULTRA_ADMIN par erreur
  const otherUltras = await prisma.user.findMany({
    where: {
      role: 'ULTRA_ADMIN',
      id: { not: ultraUser.id }
    }
  });

  if (otherUltras.length > 0) {
    console.log(`⚠️ Rétrogradation de ${otherUltras.length} autre(s) compte(s) vers MEMBER...`);
    for (const u of otherUltras) {
      await prisma.user.update({
        where: { id: u.id },
        data: { role: 'MEMBER' }
      });
      // Supprimer le rôle RBAC ULTRA_ADMIN s'il existe
      if (ultraRole) {
        await prisma.userAdminRole.deleteMany({
          where: {
            userId: u.id,
            adminRoleId: ultraRole.id
          }
        });
      }
      console.log(`  -> ${u.email} rétrogradé en MEMBER.`);
    }
  }

  // 5. Vérification finale
  const finalUltras = await prisma.user.findMany({
    where: { role: 'ULTRA_ADMIN' },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      role: true
    }
  });

  console.log('\n=== VÉRIFICATION FINALE (TOUS LES ULTRA ADMINS) ===');
  console.table(finalUltras);

  if (finalUltras.length === 1 && finalUltras[0].email === TARGET_ULTRA_EMAIL) {
    console.log('🎉 SUCCÈS : Il n\'y a désormais qu\'UN SEUL Ultra Admin sur la plateforme :');
    console.log(`   ${finalUltras[0].firstName} ${finalUltras[0].lastName} <${finalUltras[0].email}>`);
  } else {
    throw new Error('Anomalie : La vérification finale n\'a pas retourné exactement un seul Ultra Admin !');
  }
}

execute()
  .catch((err) => {
    console.error('❌ Erreur lors de l\'exécution :', err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
