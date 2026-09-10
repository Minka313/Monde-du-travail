const fs = require('fs');
const path = require('path');
const logger = require('../utils/logger');

class EmailService {
  static getEmailConfig() {
    return {
      host: process.env.SMTP_HOST || null,
      port: parseInt(process.env.SMTP_PORT, 10) || 587,
      user: process.env.SMTP_USER || null,
      pass: process.env.SMTP_PASS || null,
      from: process.env.EMAIL_FROM || 'Le Monde du Travail <contact@lemondedutravail.com>',
    };
  }

  static async sendMail({ to, subject, html, text }) {
    const config = this.getEmailConfig();
    const timestamp = new Date().toISOString();
    const messageId = `msg_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;

    const emailRecord = {
      messageId,
      timestamp,
      from: config.from,
      to,
      subject,
      text: text || html.replace(/<[^>]+>/g, ''),
      html,
    };

    // Log in sandbox log
    const logDir = path.resolve(__dirname, '../../logs');
    try {
      if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
      }
      const logFile = path.join(logDir, 'sent_emails.log');
      fs.appendFileSync(logFile, JSON.stringify(emailRecord) + '\n', 'utf8');
    } catch (err) {
      logger.warn('Impossible d\'écrire dans sent_emails.log', { error: err.message });
    }

    logger.info('Notification email enregistrée', {
      messageId,
      to,
      subject,
      mode: config.host ? 'smtp' : 'sandbox',
    });

    return {
      success: true,
      messageId,
      mode: config.host ? 'smtp' : 'sandbox',
    };
  }

  static async notifyApproval({ to, recipientName, resourceType, title, reviewerName, comment }) {
    const subject = `[Approuvé] Votre proposition « ${title} » a été validée`;
    const html = `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:20px;border:1px solid #e2e8f0;border-radius:8px;">
        <h2 style="color:#10b981;margin-top:0;">Proposition validée et publiée !</h2>
        <p>Bonjour <strong>${recipientName || 'Collaborateur'}</strong>,</p>
        <p>Votre proposition relative à <strong>${resourceType} : « ${title} »</strong> a été officiellement approuvée par l'administration (${reviewerName || 'Ultra Admin'}).</p>
        ${comment ? `<div style="background:#f8fafc;padding:12px;border-left:4px solid #10b981;margin:15px 0;"><strong>Commentaire :</strong> ${comment}</div>` : ''}
        <p>Le contenu est désormais en ligne et consultable sur la plateforme publique.</p>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0;">
        <p style="font-size:12px;color:#64748b;">Plateforme « Le Monde du Travail » — Système de validation automatisé.</p>
      </div>
    `;
    return this.sendMail({ to, subject, html });
  }

  static async notifyRejection({ to, recipientName, resourceType, title, reviewerName, reason }) {
    const subject = `[Révision requise] Votre proposition « ${title} »`;
    const html = `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:20px;border:1px solid #e2e8f0;border-radius:8px;">
        <h2 style="color:#ef4444;margin-top:0;">Proposition non retenue</h2>
        <p>Bonjour <strong>${recipientName || 'Collaborateur'}</strong>,</p>
        <p>Votre proposition relative à <strong>${resourceType} : « ${title} »</strong> a été examinée par ${reviewerName || 'l\'administration'}.</p>
        <div style="background:#fef2f2;padding:12px;border-left:4px solid #ef4444;margin:15px 0;">
          <strong>Motif de révision / refus :</strong><br>
          ${reason || 'Certains critères de qualité ou de conformité nécessitent des ajustements.'}
        </div>
        <p>Vous pouvez modifier votre contenu depuis votre espace de travail et soumettre une nouvelle version pour relecture.</p>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0;">
        <p style="font-size:12px;color:#64748b;">Plateforme « Le Monde du Travail » — Système de validation automatisé.</p>
      </div>
    `;
    return this.sendMail({ to, subject, html });
  }

  static async notifyAdminAccountCreated({ to, recipientName, role, temporaryPassword, loginUrl }) {
    const subject = `[Accès Collaborateur] Votre compte administrateur sur Le Monde du Travail`;
    const html = `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:20px;border:1px solid #e2e8f0;border-radius:8px;">
        <h2 style="color:#4f46e5;margin-top:0;">Bienvenue dans l'équipe d'administration</h2>
        <p>Bonjour <strong>${recipientName}</strong>,</p>
        <p>Un compte d'administration avec le rôle <strong>${role}</strong> a été créé pour vous par l'Ultra Administrateur.</p>
        <div style="background:#f8fafc;padding:12px;border-left:4px solid #4f46e5;margin:15px 0;">
          <p style="margin:4px 0;"><strong>Identifiant :</strong> ${to}</p>
          <p style="margin:4px 0;"><strong>Mot de passe temporaire :</strong> <code>${temporaryPassword}</code></p>
          <p style="margin:4px 0;"><strong>Accès au back-office :</strong> <a href="${loginUrl || 'http://localhost:3000/admin-frontend/login.html'}">${loginUrl || 'Connexion Administration'}</a></p>
        </div>
        <p>Lors de votre première connexion, il vous est fortement conseillé de modifier votre mot de passe depuis vos paramètres.</p>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0;">
        <p style="font-size:12px;color:#64748b;">Plateforme « Le Monde du Travail » — Demain se prépare aujourd'hui !</p>
      </div>
    `;
    return this.sendMail({ to, subject, html });
  }
}

module.exports = EmailService;
