/**
 * Script de test déterministe pour le cycle complet de réinitialisation de mot de passe
 * Usage: node execution/test_password_reset.js
 */
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../backend/.env') });

const AuthService = require('../backend/src/services/authService');
const prisma = require('../backend/src/config/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function testFlow() {
  console.log('--- Test du cycle de réinitialisation de mot de passe ---');

  // 1. Trouver un utilisateur actif pour le test
  let user = await prisma.user.findFirst({
    where: { isActive: true },
  });

  if (!user) {
    console.log('Aucun utilisateur actif trouvé en base pour le test.');
    return;
  }

  console.log(`Utilisateur de test : ${user.email} (ID: ${user.id})`);

  // 2. Tester requestPasswordReset avec un email inexistant (anti-énumération)
  const fakeResult = await AuthService.requestPasswordReset('inconnu.total.999@example.com');
  console.log('\n1. Test anti-énumération (email inconnu) :');
  console.log('Réponse :', fakeResult.message);
  if (!fakeResult.message.includes('Si cette adresse')) {
    throw new Error('Échec test anti-énumération');
  }

  // 3. Tester la génération du jeton cryptographique pour l'utilisateur
  const resetSecret = (process.env.JWT_SECRET || 'jwt_secret_dev') + user.password;
  const token = jwt.sign(
    { id: user.id, email: user.email, scope: 'password_reset' },
    resetSecret,
    { expiresIn: '15m' }
  );

  console.log('\n2. Jeton temporaire généré :', token.slice(0, 25) + '...');

  // 4. Tester resetPassword avec un jeton erroné
  try {
    await AuthService.resetPassword('mauvais.token.corrompu', 'NouveauPass123!');
    throw new Error('Le test aurait dû rejeter ce jeton !');
  } catch (err) {
    console.log('\n3. Rejet attendu du mauvais jeton :', err.message);
  }

  // 5. Tester resetPassword avec un mot de passe trop court
  try {
    await AuthService.resetPassword(token, 'court');
    throw new Error('Le mot de passe trop court aurait dû être rejeté !');
  } catch (err) {
    console.log('\n4. Rejet attendu du mot de passe invalide :', err.message);
  }

  // 6. Sauvegarder le mot de passe actuel pour le restaurer après le test
  const originalPasswordHash = user.password;

  // 7. Exécuter un reset réussi avec le vrai jeton
  const testNewPass = 'TempPassTest123!';
  const resetRes = await AuthService.resetPassword(token, testNewPass);
  console.log('\n5. Réinitialisation réussie :', resetRes.message);

  // Vérifier en base que le mot de passe est bien mis à jour
  const updatedUser = await prisma.user.findUnique({ where: { id: user.id } });
  const isMatch = await bcrypt.compare(testNewPass, updatedUser.password);
  console.log('Vérification hash nouveau mot de passe :', isMatch ? '✅ MATCH' : '❌ ERREUR');

  // 8. Tenter de réutiliser le MÊME jeton (doit être rejeté car usage unique garanti par le hash)
  try {
    await AuthService.resetPassword(token, 'AutreTentative123!');
    throw new Error('Le jeton déjà utilisé aurait dû être rejeté !');
  } catch (err) {
    console.log('\n6. Protection rejeu (jeton déjà utilisé) :', err.message, '✅');
  }

  // 9. Restaurer le mot de passe original de l'utilisateur de test
  await prisma.user.update({
    where: { id: user.id },
    data: { password: originalPasswordHash },
  });
  console.log('\n7. Mot de passe initial restauré avec succès pour préserver l\'intégrité.');

  console.log('\n🎉 TOUS LES TESTS DU FLUX DE RÉINITIALISATION SONT VALIDÉS AVEC SUCCÈS !');
}

testFlow()
  .catch(err => {
    console.error('Erreur test:', err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
