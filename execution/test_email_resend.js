/**
 * Script de test déterministe pour la passerelle d'emailing (Resend / Sandbox)
 * Usage: node execution/test_email_resend.js
 */
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../backend/.env') });

const EmailService = require('../backend/src/services/emailService');

async function run() {
  console.log('--- Test de la passerelle Email ---');
  const config = EmailService.getEmailConfig();
  console.log('Configuration détectée :');
  console.log(`- Clé Resend : ${config.resendApiKey ? 'Présente (' + config.resendApiKey.slice(0, 7) + '...)' : 'Non renseignée (Mode Sandbox)'}`);
  console.log(`- Expéditeur  : ${config.from}`);
  console.log(`- Admin email : ${config.adminEmail}`);

  const targetEmail = process.env.TEST_EMAIL_TO || config.adminEmail;

  console.log(`\nEnvoi d'un email de test vers : ${targetEmail}...`);

  const result = await EmailService.notifyAdminNewMembership({
    candidateName: 'Test Automatisé',
    candidateEmail: 'candidat.test@example.com',
    motivation: 'Test de réception de notification d\'adhésion via Resend / Le Monde du Travail.',
    createdAt: new Date(),
    adminUrl: 'https://mondedutravail.com/admin-frontend/index.html#approvals',
  });

  console.log('\nRésultat :');
  console.log(JSON.stringify(result, null, 2));

  if (result.success) {
    console.log(`\n✅ Succès : notification générée en mode [${result.mode}] (ID: ${result.messageId})`);
  } else {
    console.error(`\n❌ Échec de distribution : ${result.error}`);
    process.exit(1);
  }
}

run().catch(err => {
  console.error('Erreur inattendue:', err);
  process.exit(1);
});
