const fs = require('fs');
const path = require('path');
const logger = require('../utils/logger');

class EmailService {
  static getEmailConfig() {
    return {
      resendApiKey: process.env.RESEND_API_KEY || null,
      from: process.env.EMAIL_FROM || 'Le Monde du Travail <onboarding@resend.dev>',
      adminEmail: process.env.ULTRA_ADMIN_EMAIL || process.env.DEFAULT_ADMIN_EMAIL || 'admin@mondedutravail.com',
    };
  }

  static async sendMail({ to, subject, html, text }) {
    const config = this.getEmailConfig();
    const timestamp = new Date().toISOString();
    const messageId = `msg_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;

    const recipients = Array.isArray(to)
      ? to
      : (to ? to.split(',').map(e => e.trim()).filter(Boolean) : []);
    const cleanText = text || html.replace(/<[^>]+>/g, '');

    // 1. Envoi réel via l'API Resend si la clé d'API est configurée
    if (config.resendApiKey) {
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${config.resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: config.from,
            to: recipients,
            subject,
            html,
            text: cleanText,
          }),
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
          logger.warn('Erreur de distribution renvoyée par l\'API Resend', {
            status: response.status,
            error: data,
            to: recipients,
            subject,
          });
          return {
            success: false,
            error: data.message || 'Erreur API Resend',
            status: response.status,
          };
        }

        logger.info('Email distribué avec succès via Resend', {
          id: data.id,
          to: recipients,
          subject,
        });

        return {
          success: true,
          messageId: data.id,
          mode: 'resend',
        };
      } catch (err) {
        logger.error('Exception réseau lors de la communication avec Resend', {
          error: err.message,
          to: recipients,
          subject,
        });
        return {
          success: false,
          error: err.message,
        };
      }
    }

    // 2. Mode simulation / Sandbox (fallback si aucune clé RESEND_API_KEY n'est configurée)
    const emailRecord = {
      messageId,
      timestamp,
      from: config.from,
      to: recipients,
      subject,
      text: cleanText,
      html,
    };

    const logDir = path.resolve(__dirname, '../../logs');
    try {
      if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
      }
      const logFile = path.join(logDir, 'sent_emails.log');
      fs.appendFileSync(logFile, JSON.stringify(emailRecord) + '\n', 'utf8');
    } catch (err) {
      // Ignoré silencieusement en environnement Serverless (système de fichiers en lecture seule)
    }

    logger.info('Notification email simulée (Sandbox - RESEND_API_KEY manquante)', {
      messageId,
      to: recipients,
      subject,
      mode: 'sandbox',
    });

    return {
      success: true,
      messageId,
      mode: 'sandbox',
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

  // 1. Notification envoyée à l'administrateur lorsqu'un nouvel utilisateur soumet une demande d'adhésion
  static async notifyAdminNewMembership({ candidateName, candidateEmail, motivation, createdAt, adminUrl }) {
    const adminEmail = process.env.ULTRA_ADMIN_EMAIL || process.env.DEFAULT_ADMIN_EMAIL || 'admin@mondedutravail.com';
    const subject = `[Nouvelle Adhésion] Candidature de ${candidateName} en attente d'examen`;
    const dateStr = createdAt ? new Date(createdAt).toLocaleString('fr-FR', {
      day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'
    }) : new Date().toLocaleString('fr-FR');
    const baseUrl = (process.env.FRONTEND_URL || 'https://monde-du-travail.vercel.app').replace(/\/$/, '');
    const targetUrl = adminUrl || `${baseUrl}/admin-frontend/index.html#approvals`;

    const motivationText = motivation && motivation.trim().length > 0
      ? motivation.replace(/</g, '&lt;').replace(/>/g, '&gt;')
      : '(Aucune lettre de motivation rédigée par le candidat)';

    const html = `
      <div style="margin:0;padding:20px;background:#f1f5f9;font-family:'Segoe UI',Roboto,Helvetica,sans-serif;">
        <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;box-shadow:0 4px 15px rgba(0,0,0,0.05);">
          <div style="background:linear-gradient(135deg, #0f172a 0%, #1e293b 100%);padding:25px;text-align:center;">
            <h1 style="color:#ffffff;margin:0;font-size:1.35rem;letter-spacing:0.5px;">LE MONDE DU TRAVAIL</h1>
            <p style="color:#94a3b8;margin:5px 0 0;font-size:0.85rem;">Administration & Gouvernance du Club</p>
          </div>

          <div style="padding:28px 24px;">
            <div style="display:inline-block;padding:4px 12px;background:#fef3c7;color:#92400e;border-radius:9999px;font-size:0.75rem;font-weight:700;text-transform:uppercase;margin-bottom:15px;">
              ⚡ Nouvelle Candidature Reçue
            </div>

            <h2 style="color:#0f172a;margin:0 0 12px;font-size:1.2rem;">Une nouvelle personne souhaite rejoindre le club</h2>
            <p style="color:#475569;font-size:0.95rem;line-height:1.5;margin:0 0 18px;">
              Un nouvel utilisateur vient de finaliser son inscription sur la plateforme et a déposé son dossier d'adhésion.
            </p>

            <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:16px;margin-bottom:20px;">
              <p style="margin:4px 0;color:#334155;font-size:0.9rem;"><strong>👤 Candidat :</strong> ${candidateName}</p>
              <p style="margin:4px 0;color:#334155;font-size:0.9rem;"><strong>✉️ Email :</strong> ${candidateEmail}</p>
              <p style="margin:4px 0;color:#334155;font-size:0.9rem;"><strong>📅 Date de soumission :</strong> ${dateStr}</p>
            </div>

            <div style="background:#fffbeb;border-left:4px solid #f59e0b;padding:15px;border-radius:6px;margin-bottom:24px;">
              <h4 style="margin:0 0 8px;color:#92400e;font-size:0.95rem;">🎯 Ce qui le pousse à vouloir intégrer le club :</h4>
              <p style="margin:0;color:#1e293b;font-style:italic;font-size:0.92rem;line-height:1.6;">
                « ${motivationText} »
              </p>
            </div>

            <div style="text-align:center;margin:28px 0 10px;">
              <a href="${targetUrl}" style="background:#0284c7;color:#ffffff;padding:12px 26px;border-radius:8px;font-weight:700;text-decoration:none;display:inline-block;box-shadow:0 3px 8px rgba(2,132,199,0.3);">
                Examiner le dossier dans l'espace admin &rarr;
              </a>
            </div>
          </div>

          <div style="background:#f8fafc;padding:15px;text-align:center;border-top:1px solid #e2e8f0;font-size:0.75rem;color:#94a3b8;">
            Notification système automatique réservée aux administrateurs de la plateforme.
          </div>
        </div>
      </div>
    `;

    return this.sendMail({ to: adminEmail, subject, html });
  }

  // 2. Accusé de réception envoyé au candidat dès son inscription
  static async notifyCandidateMembershipSubmitted({ to, candidateName }) {
    const subject = `Votre demande d'adhésion au club Le Monde du Travail a bien été reçue ✉️`;
    const html = `
      <div style="margin:0;padding:20px;background:#f1f5f9;font-family:'Segoe UI',Roboto,Helvetica,sans-serif;">
        <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;box-shadow:0 4px 15px rgba(0,0,0,0.05);">
          <div style="background:linear-gradient(135deg, #0284c7 0%, #0369a1 100%);padding:30px 20px;text-align:center;">
            <h1 style="color:#ffffff;margin:0;font-size:1.4rem;letter-spacing:0.5px;">LE MONDE DU TRAVAIL</h1>
            <p style="color:#e0f2fe;margin:6px 0 0;font-size:0.9rem;">Orientation &bull; Réseau &bull; Excellence Professionnelle</p>
          </div>

          <div style="padding:28px 24px;">
            <h2 style="color:#0f172a;margin:0 0 12px;font-size:1.25rem;">Bonjour ${candidateName || ''},</h2>
            <p style="color:#475569;font-size:0.95rem;line-height:1.6;margin:0 0 16px;">
              Nous avons bien reçu votre demande d'adhésion au club <strong>Le Monde du Travail</strong> et nous vous remercions vivement pour votre intérêt !
            </p>

            <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:18px;margin-bottom:20px;">
              <h4 style="margin:0 0 8px;color:#166534;font-size:0.95rem;">
                ⏳ Que se passe-t-il maintenant ?
              </h4>
              <p style="margin:0;color:#15803d;font-size:0.9rem;line-height:1.5;">
                Votre dossier et votre lettre de motivation sont actuellement en cours d'examen par notre équipe d'administration. Chaque candidature est étudiée afin de garantir la qualité et l'engagement des membres de notre communauté.
              </p>
            </div>

            <p style="color:#475569;font-size:0.95rem;line-height:1.6;margin:0 0 20px;">
              <strong>📬 Vous serez notifié(e) directement par email</strong> dès que votre demande aura été traitée par un administrateur. Vous recevrez alors votre message officiel de bienvenue ainsi que toutes les instructions pour accéder pleinement à votre espace membre.
            </p>

            <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:14px;font-size:0.85rem;color:#64748b;">
              <span style="display:block;margin-bottom:4px;"><strong>Identifiant de connexion :</strong> ${to}</span>
              <span><strong>Statut du compte :</strong> En attente d'approbation</span>
            </div>
          </div>

          <div style="background:#f8fafc;padding:18px;text-align:center;border-top:1px solid #e2e8f0;font-size:0.8rem;color:#94a3b8;">
            Le Monde du Travail &bull; Demain se prépare aujourd'hui.<br>
            Pour toute question, contactez-nous à <a href="mailto:contact@lemondedutravail.com" style="color:#0284c7;text-decoration:none;">contact@lemondedutravail.com</a>
          </div>
        </div>
      </div>
    `;

    return this.sendMail({ to, subject, html });
  }

  // 3. Email d'acceptation avec Mot de Bienvenue officiel de l'administrateur
  static async notifyCandidateMembershipApproved({ to, candidateName, welcomeMessage, loginUrl }) {
    const subject = `🎉 Félicitations ! Votre adhésion au club Le Monde du Travail est validée`;
    const baseUrl = (process.env.FRONTEND_URL || 'https://monde-du-travail.vercel.app').replace(/\/$/, '');
    const targetUrl = loginUrl || `${baseUrl}/frontend/login.html`;
    const defaultWelcome = "C'est un réel plaisir de vous accueillir parmi nous ! Vos motivations et votre dynamisme correspondent parfaitement aux valeurs d'excellence, de partage d'expérience et d'entraide de notre club. Nous avons hâte de découvrir vos contributions et de vous accompagner dans votre parcours professionnel. Bienvenue dans la grande famille du Monde du Travail !";
    const welcomeText = (welcomeMessage && welcomeMessage.trim().length > 0 ? welcomeMessage : defaultWelcome)
      .replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const html = `
      <div style="margin:0;padding:20px;background:#f1f5f9;font-family:'Segoe UI',Roboto,Helvetica,sans-serif;">
        <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;box-shadow:0 4px 15px rgba(0,0,0,0.05);">
          <div style="background:linear-gradient(135deg, #10b981 0%, #047857 100%);padding:30px 20px;text-align:center;">
            <h1 style="color:#ffffff;margin:0;font-size:1.45rem;letter-spacing:0.5px;">BIENVENUE AU CLUB !</h1>
            <p style="color:#d1fae5;margin:6px 0 0;font-size:0.92rem;">Votre adhésion a été officiellement approuvée 🎉</p>
          </div>

          <div style="padding:28px 24px;">
            <h2 style="color:#0f172a;margin:0 0 14px;font-size:1.25rem;">Félicitations ${candidateName || ''},</h2>
            <p style="color:#475569;font-size:0.95rem;line-height:1.6;margin:0 0 18px;">
              Nous avons le grand plaisir de vous annoncer que votre candidature d'adhésion au club <strong>Le Monde du Travail</strong> a été validée par notre équipe ! Votre compte membre est désormais <strong>pleinement actif</strong>.
            </p>

            <!-- MOT DE BIENVENUE DE L'ADMINISTRATEUR -->
            <div style="background:linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);border:1px solid #86efac;border-left:5px solid #10b981;border-radius:10px;padding:18px;margin-bottom:24px;">
              <h3 style="margin:0 0 8px;color:#14532d;font-size:1rem;">
                💬 Le Mot de Bienvenue de l'Administrateur
              </h3>
              <p style="margin:0;color:#166534;font-size:0.95rem;line-height:1.6;font-style:italic;">
                « ${welcomeText} »
              </p>
              <div style="margin-top:10px;text-align:right;font-size:0.82rem;font-weight:700;color:#15803d;">
                — L'Équipe d'Administration
              </div>
            </div>

            <h3 style="color:#0f172a;font-size:1.05rem;margin:0 0 12px;">Ce qui vous attend sur la plateforme :</h3>
            <ul style="color:#475569;font-size:0.92rem;line-height:1.6;padding-left:20px;margin:0 0 24px;">
              <li><strong>📚 Formations & Certifications :</strong> Participez aux sessions pratiques et ateliers.</li>
              <li><strong>💼 Fiches Métiers & Réalités terrain :</strong> Explorez les secteurs porteurs et compétences clés.</li>
              <li><strong>💬 Forum Communautaire :</strong> Échangez avec vos pairs et posez vos questions.</li>
              <li><strong>🎓 Collège des Mentors & Experts :</strong> Bénéficiez des retours d'expérience des professionnels.</li>
            </ul>

            <div style="text-align:center;margin:30px 0 10px;">
              <a href="${targetUrl}" style="background:#10b981;color:#ffffff;padding:13px 30px;border-radius:8px;font-weight:700;text-decoration:none;display:inline-block;box-shadow:0 3px 10px rgba(16,185,129,0.35);font-size:1rem;">
                Accéder à mon espace membre &rarr;
              </a>
            </div>
          </div>

          <div style="background:#f8fafc;padding:18px;text-align:center;border-top:1px solid #e2e8f0;font-size:0.8rem;color:#94a3b8;">
            Le Monde du Travail &bull; Demain se prépare aujourd'hui.<br>
            Identifiant : ${to}
          </div>
        </div>
      </div>
    `;

    return this.sendMail({ to, subject, html });
  }

  // 4. Email en cas de refus avec motif bienveillant
  static async notifyCandidateMembershipRejected({ to, candidateName, reason }) {
    const subject = `Concernant votre demande d'adhésion au club Le Monde du Travail`;
    const defaultReason = "Les places pour notre actuelle promotion sont limitées afin de garantir un accompagnement de qualité. Nous vous encourageons à renouveler votre candidature lors de notre prochaine session d'ouverture ou à participer à nos conférences publiques.";
    const reasonText = (reason && reason.trim().length > 0 ? reason : defaultReason)
      .replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const html = `
      <div style="margin:0;padding:20px;background:#f1f5f9;font-family:'Segoe UI',Roboto,Helvetica,sans-serif;">
        <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;box-shadow:0 4px 15px rgba(0,0,0,0.05);">
          <div style="background:linear-gradient(135deg, #334155 0%, #1e293b 100%);padding:26px 20px;text-align:center;">
            <h1 style="color:#ffffff;margin:0;font-size:1.35rem;letter-spacing:0.5px;">LE MONDE DU TRAVAIL</h1>
            <p style="color:#94a3b8;margin:5px 0 0;font-size:0.85rem;">Information relative à votre candidature</p>
          </div>

          <div style="padding:28px 24px;">
            <h2 style="color:#0f172a;margin:0 0 12px;font-size:1.2rem;">Bonjour ${candidateName || ''},</h2>
            <p style="color:#475569;font-size:0.95rem;line-height:1.6;margin:0 0 16px;">
              Nous vous remercions sincèrement pour l'intérêt que vous portez au club <strong>Le Monde du Travail</strong> et pour avoir pris le temps de nous transmettre votre dossier.
            </p>
            <p style="color:#475569;font-size:0.95rem;line-height:1.6;margin:0 0 18px;">
              Après un examen attentif de l'ensemble des candidatures pour cette cohorte, nous avons le regret de vous informer que votre demande d'adhésion n'a pas pu être retenue pour le moment.
            </p>

            <div style="background:#fef2f2;border:1px solid #fecaca;border-left:4px solid #ef4444;border-radius:8px;padding:15px;margin-bottom:20px;">
              <h4 style="margin:0 0 6px;color:#991b1b;font-size:0.92rem;">Message de l'équipe d'admission :</h4>
              <p style="margin:0;color:#7f1d1d;font-size:0.9rem;line-height:1.5;">
                « ${reasonText} »
              </p>
            </div>

            <p style="color:#475569;font-size:0.92rem;line-height:1.5;margin:0;">
              Nos événements publics restent ouverts et nous vous souhaitons une pleine réussite dans vos projets professionnels.
            </p>
          </div>

          <div style="background:#f8fafc;padding:15px;text-align:center;border-top:1px solid #e2e8f0;font-size:0.78rem;color:#94a3b8;">
            Le Monde du Travail &bull; contact@lemondedutravail.com
          </div>
        </div>
      </div>
    `;

    return this.sendMail({ to, subject, html });
  }

  // 5. Email de réinitialisation de mot de passe (Forgot Password)
  static async notifyPasswordReset({ to, recipientName, resetUrl }) {
    const subject = `Réinitialisation de votre mot de passe 🔒 — Le Monde du Travail`;
    const baseUrl = (process.env.FRONTEND_URL || 'https://monde-du-travail.vercel.app').replace(/\/$/, '');
    const targetUrl = resetUrl || `${baseUrl}/frontend/login.html`;

    const html = `
      <div style="margin:0;padding:20px;background:#f1f5f9;font-family:'Segoe UI',Roboto,Helvetica,sans-serif;">
        <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;box-shadow:0 4px 15px rgba(0,0,0,0.05);">
          <div style="background:linear-gradient(135deg, #0f172a 0%, #1e293b 100%);padding:28px 20px;text-align:center;">
            <h1 style="color:#ffffff;margin:0;font-size:1.35rem;letter-spacing:0.5px;">LE MONDE DU TRAVAIL</h1>
            <p style="color:#94a3b8;margin:5px 0 0;font-size:0.85rem;">Sécurité & Protection du Compte</p>
          </div>

          <div style="padding:28px 24px;">
            <h2 style="color:#0f172a;margin:0 0 12px;font-size:1.25rem;">Bonjour ${recipientName || ''},</h2>
            <p style="color:#475569;font-size:0.95rem;line-height:1.6;margin:0 0 18px;">
              Une demande de réinitialisation de mot de passe a été initiée pour votre compte sur la plateforme <strong>Le Monde du Travail</strong>.
            </p>

            <div style="background:#f0f9ff;border:1px solid #bae6fd;border-left:4px solid #0284c7;border-radius:8px;padding:16px;margin-bottom:24px;">
              <p style="margin:0;color:#0369a1;font-size:0.92rem;line-height:1.5;">
                Pour définir un nouveau mot de passe et déverrouiller votre espace membre, veuillez cliquer sur le bouton ci-dessous :
              </p>
            </div>

            <div style="text-align:center;margin:32px 0 24px;">
              <a href="${targetUrl}" style="background:#0284c7;color:#ffffff;padding:14px 32px;border-radius:8px;font-weight:700;text-decoration:none;display:inline-block;box-shadow:0 4px 12px rgba(2,132,199,0.35);font-size:1rem;">
                Réinitialiser mon mot de passe &rarr;
              </a>
            </div>

            <div style="background:#fffbeb;border:1px solid #fef3c7;border-radius:8px;padding:14px;font-size:0.85rem;color:#92400e;margin-bottom:20px;">
              ⏳ <strong>Attention :</strong> Ce lien sécurisé est à usage unique et expire automatiquement dans <strong>15 minutes</strong>.
            </div>

            <p style="color:#64748b;font-size:0.85rem;line-height:1.5;margin:0 0 12px;">
              Si le bouton ne fonctionne pas, copiez et collez ce lien directement dans votre navigateur :<br>
              <a href="${targetUrl}" style="color:#0284c7;word-break:break-all;font-size:0.82rem;">${targetUrl}</a>
            </p>

            <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0;">

            <p style="color:#94a3b8;font-size:0.82rem;line-height:1.5;margin:0;">
              🛡️ <em>Si vous n'êtes pas à l'origine de cette demande, ignorez simplement cet email. Votre mot de passe actuel reste inchangé et votre compte est en sécurité.</em>
            </p>
          </div>

          <div style="background:#f8fafc;padding:16px;text-align:center;border-top:1px solid #e2e8f0;font-size:0.78rem;color:#94a3b8;">
            Le Monde du Travail &bull; Demain se prépare aujourd'hui.<br>
            Identifiant concerné : ${to}
          </div>
        </div>
      </div>
    `;

    return this.sendMail({ to, subject, html });
  }
}

module.exports = EmailService;
