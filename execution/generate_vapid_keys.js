/**
 * Deterministic VAPID key generator for Web Push Notifications.
 * Reads backend/.env and generates VAPID keys if not already present.
 */
const fs = require('fs');
const path = require('path');
const webpush = require(path.resolve(__dirname, '../backend/node_modules/web-push'));

const envPath = path.resolve(__dirname, '../backend/.env');

function setupVapidKeys() {
  let envContent = '';
  if (fs.existsSync(envPath)) {
    envContent = fs.readFileSync(envPath, 'utf8');
  }

  const hasPublic = envContent.includes('VAPID_PUBLIC_KEY=');
  const hasPrivate = envContent.includes('VAPID_PRIVATE_KEY=');

  if (hasPublic && hasPrivate) {
    console.log('[VAPID] Keys already present in backend/.env');
    return;
  }

  const vapidKeys = webpush.generateVAPIDKeys();
  const additions = [
    '',
    '# Web Push Notifications (VAPID)',
    `VAPID_PUBLIC_KEY=${vapidKeys.publicKey}`,
    `VAPID_PRIVATE_KEY=${vapidKeys.privateKey}`,
    'VAPID_SUBJECT=mailto:khadimoulbarham@gmail.com',
    '',
  ].join('\n');

  fs.appendFileSync(envPath, additions, 'utf8');
  console.log('[VAPID] Successfully generated and wrote VAPID keys to backend/.env');
  console.log('[VAPID] Public Key:', vapidKeys.publicKey);
}

if (require.main === module) {
  setupVapidKeys();
}

module.exports = { setupVapidKeys };
