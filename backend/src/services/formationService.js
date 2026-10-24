const prisma = require('../config/database');
const { NotFoundError, BadRequestError, ConflictError } = require('../utils/errors');
const logger = require('../utils/logger');
const crypto = require('crypto');
const RbacService = require('./rbacService');
const JaasService = require('./jaasService');

// Visio : JaaS (réunion intégrée au site) quand la clé est configurée, sinon service public
// meet.jit.si ouvert dans un nouvel onglet (l'intégration au site n'y est plus permise)
const VISIO_DOMAIN = 'meet.jit.si';

class FormationService {
  // Liste publique : uniquement les formations publiées
  static async getPublishedFormations(filter) {
    const where = { status: 'PUBLISHED' };
    if (typeof filter === 'string' && filter) {
      where.OR = [
        { category: { contains: filter, mode: 'insensitive' } },
        { title: { contains: filter, mode: 'insensitive' } },
      ];
    } else if (typeof filter === 'object' && filter) {
      if (filter.category) where.category = { contains: filter.category, mode: 'insensitive' };
      if (filter.search) {
        where.OR = [
          { title: { contains: filter.search, mode: 'insensitive' } },
          { description: { contains: filter.search, mode: 'insensitive' } },
          { category: { contains: filter.search, mode: 'insensitive' } },
        ];
      }
    }

    const formations = await prisma.formation.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
    return formations.map((f) => FormationService.withoutRoom(f));
  }

  // Le nom de la salle visio n'est donné qu'aux personnes qui y accèdent (getVisioSession)
  static withoutRoom(formation) {
    if (!formation) return formation;
    const rest = { ...formation };
    delete rest.visioRoomId;
    return rest;
  }

  // Catégories distinctes existantes via SQL distinct
  static async getCategories() {
    const formations = await prisma.formation.findMany({
      where: { status: 'PUBLISHED', category: { not: null } },
      distinct: ['category'],
      select: { category: true },
    });
    return formations.map(f => f.category.trim()).filter(Boolean);
  }

  // Liste admin : filtres par statut, auteur (« mes créations »), recherche
  static async getFormationsForAdmin({ status, mine, userId, search, category }) {
    const where = {};
    if (status) where.status = status;
    if (category) where.category = { contains: category, mode: 'insensitive' };
    if (mine === 'true' || mine === true) where.createdById = userId;
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
        { category: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [formations, total] = await Promise.all([
      prisma.formation.findMany({
        where,
        orderBy: { updatedAt: 'desc' },
        include: {
          createdBy: { select: { id: true, firstName: true, lastName: true } },
        },
      }),
      prisma.formation.count({ where }),
    ]);

    return {
      formations,
      pagination: { total },
    };
  }

  // Accepte l'identifiant ou le slug (lien depuis la fiche pédagogique formation-detail.html)
  static async getFormationById(id) {
    const formation = await prisma.formation.findFirst({
      where: { OR: [{ id }, { slug: id }] },
      include: {
        createdBy: { select: { id: true, firstName: true, lastName: true } },
      },
    });

    if (!formation) {
      throw new NotFoundError('Formation non trouvée');
    }

    return formation;
  }

  static async createFormation(data, userId) {
    const {
      title, description, content, icon, image, category,
      startDate, endDate, duration, location, objectives,
      prerequisites, targetAudience, syllabus, certification, videoUrl
    } = data;
    const parsedStartDate = startDate && typeof startDate === 'string' && startDate.trim() ? new Date(startDate) : null;
    const parsedEndDate = endDate && typeof endDate === 'string' && endDate.trim() ? new Date(endDate) : null;

    return prisma.formation.create({
      data: {
        title,
        description,
        content: content || null,
        icon: icon || null,
        image: image || null,
        category: category || null,
        startDate: parsedStartDate,
        endDate: parsedEndDate,
        duration: duration || null,
        location: location || null,
        objectives: objectives || null,
        prerequisites: prerequisites || null,
        targetAudience: targetAudience || null,
        syllabus: syllabus ? (typeof syllabus === 'string' ? JSON.parse(syllabus) : syllabus) : null,
        certification: certification || null,
        videoUrl: videoUrl || null,
        status: 'DRAFT',
        createdById: userId,
      },
      include: {
        createdBy: { select: { id: true, firstName: true, lastName: true } },
      },
    });
  }

  static async updateFormation(id, data) {
    await this.getFormationOrThrow(id);
    const {
      title, description, content, icon, image, category,
      startDate, endDate, duration, location, objectives,
      prerequisites, targetAudience, syllabus, certification, videoUrl
    } = data;

    const updateData = {};
    if (title !== undefined) updateData.title = title;
    if (description !== undefined) updateData.description = description;
    if (content !== undefined) updateData.content = content || null;
    if (icon !== undefined) updateData.icon = icon || null;
    if (image !== undefined) updateData.image = image || null;
    if (category !== undefined) updateData.category = category || null;
    if (startDate !== undefined) {
      updateData.startDate = startDate && typeof startDate === 'string' && startDate.trim() ? new Date(startDate) : null;
    }
    if (endDate !== undefined) {
      updateData.endDate = endDate && typeof endDate === 'string' && endDate.trim() ? new Date(endDate) : null;
    }
    if (duration !== undefined) updateData.duration = duration || null;
    if (location !== undefined) updateData.location = location || null;
    if (objectives !== undefined) updateData.objectives = objectives || null;
    if (prerequisites !== undefined) updateData.prerequisites = prerequisites || null;
    if (targetAudience !== undefined) updateData.targetAudience = targetAudience || null;
    if (syllabus !== undefined) {
      updateData.syllabus = syllabus ? (typeof syllabus === 'string' ? JSON.parse(syllabus) : syllabus) : null;
    }
    if (certification !== undefined) updateData.certification = certification || null;
    if (videoUrl !== undefined) updateData.videoUrl = videoUrl || null;

    return prisma.formation.update({
      where: { id },
      data: updateData,
      include: {
        createdBy: { select: { id: true, firstName: true, lastName: true } },
      },
    });
  }

  // Soumission à validation : DRAFT/ARCHIVED -> PENDING_REVIEW
  static async submitFormation(id) {
    const formation = await this.getFormationOrThrow(id);

    if (formation.status === 'PENDING_REVIEW') {
      throw new BadRequestError('Cette formation est déjà en attente de validation');
    }
    if (formation.status === 'PUBLISHED') {
      throw new BadRequestError('Cette formation est déjà publiée');
    }

    return prisma.formation.update({
      where: { id },
      data: { status: 'PENDING_REVIEW' },
      include: {
        createdBy: { select: { id: true, firstName: true, lastName: true } },
      },
    });
  }

  // Publication directe (permission formation.publish requise au niveau route)
  static async publishFormation(id) {
    await this.getFormationOrThrow(id);

    const formation = await prisma.formation.update({
      where: { id },
      data: { status: 'PUBLISHED' },
      include: {
        createdBy: { select: { id: true, firstName: true, lastName: true } },
      },
    });

    // Une éventuelle demande d'approbation en attente devient inutile
    await prisma.approvalWorkflow.updateMany({
      where: {
        resourceType: 'Formation',
        resourceId: id,
        action: 'publish',
        status: 'PENDING',
      },
      data: { status: 'CANCELLED', reviewedAt: new Date() },
    });

    // Déclencher la notification push et in-app automatique
    try {
      const notificationService = require('./notificationService');
      await notificationService.broadcastNotification({
        type: 'FORMATION',
        title: '🎓 Nouvelle formation disponible !',
        message: `${formation.title} : découvrez le programme et participez dès maintenant.`,
        url: `/frontend/formations.html#${formation.id}`,
        imageUrl: formation.image || null,
        dedupeKey: `FORMATION:${formation.id}:PUBLISHED`,
      });
    } catch (err) {
      logger.warn('Notification formation non créée après publication', { formationId: id, error: err.message });
    }

    return formation;
  }

  static async unpublishFormation(id) {
    const formation = await this.getFormationOrThrow(id);

    if (formation.status !== 'PUBLISHED') {
      throw new BadRequestError('Seule une formation publiée peut être dépubliée');
    }

    return prisma.formation.update({
      where: { id },
      data: { status: 'DRAFT' },
      include: {
        createdBy: { select: { id: true, firstName: true, lastName: true } },
      },
    });
  }

  static async archiveFormation(id) {
    const formation = await this.getFormationOrThrow(id);

    if (formation.status === 'ARCHIVED') {
      throw new BadRequestError('Cette formation est déjà archivée');
    }

    const updated = await prisma.formation.update({
      where: { id },
      data: { status: 'ARCHIVED' },
      include: {
        createdBy: { select: { id: true, firstName: true, lastName: true } },
      },
    });

    await prisma.approvalWorkflow.updateMany({
      where: {
        resourceType: 'Formation',
        resourceId: id,
        action: 'publish',
        status: 'PENDING',
      },
      data: { status: 'CANCELLED', reviewedAt: new Date() },
    });

    return updated;
  }

  static async deleteFormation(id) {
    await this.getFormationOrThrow(id);
    await prisma.formation.delete({ where: { id } });
  }

  // Suppression massive (action critique : ré-authentification au niveau route)
  static async deleteFormations(ids) {
    const result = await prisma.formation.deleteMany({ where: { id: { in: ids } } });
    return result.count;
  }

  // Accepte l'identifiant ou le slug de la fiche pédagogique
  static async getFormationOrThrow(id) {
    const formation = await prisma.formation.findFirst({ where: { OR: [{ id }, { slug: id }] } });
    if (!formation) {
      throw new NotFoundError('Formation non trouvée');
    }
    return formation;
  }

  // 1. Inscription d'un apprenant à une formation avec notification email
  static async registerCandidate({ formationId, name, email, phone, motivation, userId }) {
    const formation = await this.getFormationOrThrow(formationId);

    // Initialisation résiliente de la table formation_registrations si non encore créée
    try {
      await prisma.$executeRawUnsafe(`
        CREATE TABLE IF NOT EXISTS formation_registrations (
          id TEXT PRIMARY KEY,
          "formationId" TEXT NOT NULL REFERENCES formations(id) ON DELETE CASCADE,
          "userId" TEXT REFERENCES users(id) ON DELETE SET NULL,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          phone TEXT,
          motivation TEXT,
          status TEXT NOT NULL DEFAULT 'CONFIRMED',
          "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
        );
        CREATE INDEX IF NOT EXISTS formation_reg_fid_idx ON formation_registrations ("formationId");
        CREATE INDEX IF NOT EXISTS formation_reg_email_idx ON formation_registrations (email);
      `);
    } catch (e) {
      // Table already created or statement ignored
    }

    let registration = null;
    const regId = 'freg_' + Date.now() + '_' + Math.random().toString(36).substring(2, 8);

    try {
      if (prisma.formationRegistration) {
        registration = await prisma.formationRegistration.create({
          data: {
            id: regId,
            formationId: formation.id,
            userId: userId || null,
            name: name.trim(),
            email: email.trim().toLowerCase(),
            phone: phone ? phone.trim() : null,
            motivation: motivation ? motivation.trim() : null,
            status: 'CONFIRMED',
          },
        });
      } else {
        await prisma.$executeRawUnsafe(`
          INSERT INTO formation_registrations (id, "formationId", "userId", name, email, phone, motivation, status, "createdAt", "updatedAt")
          VALUES ($1, $2, $3, $4, $5, $6, $7, 'CONFIRMED', NOW(), NOW())
        `, regId, formation.id, userId || null, name.trim(), email.trim().toLowerCase(), phone ? phone.trim() : null, motivation ? motivation.trim() : null);
        registration = {
          id: regId,
          formationId: formation.id,
          userId: userId || null,
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone ? phone.trim() : null,
          motivation: motivation ? motivation.trim() : null,
          status: 'CONFIRMED',
          createdAt: new Date(),
        };
      }
    } catch (err) {
      logger.error("Erreur lors de l'enregistrement de l'inscription formation", { error: err.message, formationId });
      registration = {
        id: regId,
        formationId: formation.id,
        userId: userId || null,
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone ? phone.trim() : null,
        motivation: motivation ? motivation.trim() : null,
        status: 'CONFIRMED',
        createdAt: new Date(),
      };
    }

    // Déclenchement asynchrone des emails de confirmation et d'alerte admin (non bloquant)
    const EmailService = require('./emailService');
    Promise.allSettled([
      EmailService.notifyFormationRegistrationConfirmation({
        to: email.trim().toLowerCase(),
        candidateName: name.trim(),
        formationTitle: formation.title,
        formationLocation: formation.location,
        formationDuration: formation.duration,
        startDate: formation.startDate,
      }),
      EmailService.notifyAdminNewFormationRegistration({
        candidateName: name.trim(),
        candidateEmail: email.trim().toLowerCase(),
        candidatePhone: phone ? phone.trim() : null,
        formationTitle: formation.title,
        motivation: motivation ? motivation.trim() : null,
        createdAt: registration.createdAt,
      }),
    ]).catch((err) => {
      logger.warn("Erreur lors de l'envoi des notifications d'inscription formation", { error: err.message });
    });

    return { registration, formation };
  }

  // 2. Consultation des inscrits à une formation (Espace Admin)
  static async getRegistrations(formationId, { status, search, page = 1, pageSize = 50 } = {}) {
    const formation = await this.getFormationOrThrow(formationId);

    try {
      if (prisma.formationRegistration) {
        const where = { formationId: formation.id };
        if (status) where.status = status;
        if (search) {
          where.OR = [
            { name: { contains: search, mode: 'insensitive' } },
            { email: { contains: search, mode: 'insensitive' } },
            { phone: { contains: search, mode: 'insensitive' } },
          ];
        }

        const skip = (Math.max(1, parseInt(page, 10)) - 1) * parseInt(pageSize, 10);
        const [registrations, total] = await Promise.all([
          prisma.formationRegistration.findMany({
            where,
            orderBy: { createdAt: 'desc' },
            skip,
            take: parseInt(pageSize, 10),
            include: {
              user: { select: { id: true, firstName: true, lastName: true, avatarUrl: true } },
            },
          }),
          prisma.formationRegistration.count({ where }),
        ]);

        return { formation, registrations, total, page: parseInt(page, 10), pageSize: parseInt(pageSize, 10) };
      }
    } catch (e) {
      logger.warn('Prisma model FormationRegistration non disponible, fallback SQL direct', { error: e.message });
    }

    try {
      const rows = await prisma.$queryRawUnsafe(`
        SELECT r.*, u."firstName", u."lastName", u."avatar_url" as "avatarUrl"
        FROM formation_registrations r
        LEFT JOIN users u ON r."userId" = u.id
        WHERE r."formationId" = $1
        ORDER BY r."createdAt" DESC
        LIMIT $2 OFFSET $3
      `, formation.id, parseInt(pageSize, 10), (Math.max(1, parseInt(page, 10)) - 1) * parseInt(pageSize, 10));

      const countResult = await prisma.$queryRawUnsafe(`
        SELECT COUNT(*)::int as total FROM formation_registrations WHERE "formationId" = $1
      `, formation.id);

      return {
        formation,
        registrations: rows,
        total: countResult[0]?.total || rows.length,
        page: parseInt(page, 10),
        pageSize: parseInt(pageSize, 10),
      };
    } catch (err) {
      return { formation, registrations: [], total: 0, page: 1, pageSize };
    }
  }

  // 3. Mise à jour du statut d'une inscription (CONFIRMED, ATTENDED, CANCELLED)
  static async updateRegistrationStatus(registrationId, status) {
    if (!['PENDING', 'CONFIRMED', 'ATTENDED', 'CANCELLED'].includes(status)) {
      throw new BadRequestError("Statut d'inscription invalide");
    }

    try {
      if (prisma.formationRegistration) {
        return await prisma.formationRegistration.update({
          where: { id: registrationId },
          data: { status },
        });
      }
    } catch (e) {}

    await prisma.$executeRawUnsafe(`
      UPDATE formation_registrations SET status = $1, "updatedAt" = NOW() WHERE id = $2
    `, status, registrationId);

    return { id: registrationId, status };
  }

  // 4. Démarrer ou initialiser une session de visioconférence
  static async startVisioSession(formationId, { user, scheduledAt } = {}) {
    const formation = await this.getFormationOrThrow(formationId);

    // Auto-migration résiliente des colonnes visio si non existantes
    try {
      await prisma.$executeRawUnsafe(`
        ALTER TABLE formations ADD COLUMN IF NOT EXISTS "visioEnabled" BOOLEAN DEFAULT FALSE;
        ALTER TABLE formations ADD COLUMN IF NOT EXISTS "visioRoomId" TEXT;
        ALTER TABLE formations ADD COLUMN IF NOT EXISTS "visioStatus" TEXT DEFAULT 'INACTIVE';
        ALTER TABLE formations ADD COLUMN IF NOT EXISTS "visioScheduledAt" TIMESTAMP(3);
        ALTER TABLE formations ADD COLUMN IF NOT EXISTS "visioRecordingUrl" TEXT;
      `);
    } catch (e) {
      // Ignoré si déjà présent ou non supporté
    }

    // Nom de salle unique et normalisé pour Jitsi Meet
    const cleanSlug = (formation.title || 'atelier')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')
      .slice(0, 30);
    
    // Nom de salle imprévisible, renouvelé à chaque nouvelle session (l'ancien lien ne sert plus)
    const roomId = formation.visioStatus === 'LIVE' && formation.visioRoomId
      ? formation.visioRoomId
      : `lmdt-${cleanSlug}-${crypto.randomBytes(6).toString('hex')}`;

    try {
      await prisma.formation.update({
        where: { id: formation.id },
        data: {
          visioEnabled: true,
          visioRoomId: roomId,
          visioStatus: 'LIVE',
          visioScheduledAt: scheduledAt ? new Date(scheduledAt) : (formation.visioScheduledAt || new Date()),
        },
      });
    } catch (e) {
      try {
        await prisma.$executeRawUnsafe(`
          UPDATE formations 
          SET "visioEnabled" = TRUE, "visioRoomId" = $1, "visioStatus" = 'LIVE', "updatedAt" = NOW()
          WHERE id = $2
        `, roomId, formation.id);
      } catch (err) {}
    }

    return {
      formationId: formation.id,
      formationTitle: formation.title,
      roomId,
      visioStatus: 'LIVE',
      isModerator: await this.canHostVisio(user, formation.id),
      domain: VISIO_DOMAIN,
      meetingUrl: `https://${VISIO_DOMAIN}/${roomId}`,
      userName: user ? `${user.firstName || ''} ${user.lastName || ''}`.trim() : 'Apprenant Invité',
      userEmail: user?.email || '',
      userAvatar: user?.avatarUrl || null,
      scheduledAt: formation.visioScheduledAt || new Date(),
    };
  }

  // 5. Clôturer une session de visioconférence
  static async stopVisioSession(formationId) {
    const formation = await this.getFormationOrThrow(formationId);

    try {
      await prisma.formation.update({
        where: { id: formation.id },
        data: {
          visioStatus: 'ENDED',
        },
      });
    } catch (e) {
      try {
        await prisma.$executeRawUnsafe(`
          UPDATE formations SET "visioStatus" = 'ENDED', "updatedAt" = NOW() WHERE id = $1
        `, formation.id);
      } catch (err) {}
    }

    return { formationId: formation.id, visioStatus: 'ENDED' };
  }

  /**
   * Animateur d'une salle : Présidence et administrateurs, mentors à qui la formation
   * est confiée, comptes autorisés à modifier les formations.
   * `user` peut être le contenu du jeton (optionalAuth) : seuls id et role sont utilisés.
   */
  static async canHostVisio(user, formationId) {
    if (!user?.id) return false;
    if (['ULTRA_ADMIN', 'ADMIN'].includes(user.role)) return true;
    const trainer = await prisma.formationTrainer.findUnique({ where: { formationId_userId: { formationId, userId: user.id } } });
    if (trainer) return true;
    const { permissions } = await RbacService.getUserAdminContext(user.id);
    return permissions.includes('*') || permissions.includes('formation.update');
  }

  // 6. Consulter le statut de la session visio (lien de la salle uniquement quand elle est ouverte)
  static async getVisioSession(formationId, { user } = {}) {
    const formation = await this.getFormationOrThrow(formationId);
    const isModerator = await this.canHostVisio(user, formation.id);
    const live = formation.visioStatus === 'LIVE' && Boolean(formation.visioRoomId);
    const jaas = JaasService.isConfigured();

    return {
      formationId: formation.id,
      slug: formation.slug,
      formationTitle: formation.title,
      title: formation.title,
      category: formation.category,
      duration: formation.duration,
      location: formation.location,
      objectives: formation.objectives,
      syllabus: formation.syllabus,
      startDate: formation.startDate,
      visioEnabled: !!formation.visioEnabled,
      visioStatus: live ? 'LIVE' : (formation.visioStatus === 'LIVE' ? 'INACTIVE' : formation.visioStatus || 'INACTIVE'),
      visioScheduledAt: formation.visioScheduledAt || null,
      roomId: live ? formation.visioRoomId : null,
      // JaaS : pas de lien direct, chacun rejoint depuis le site avec son jeton (joinVisio)
      provider: jaas ? 'jaas' : 'jitsi',
      meetingUrl: live && !jaas ? `https://${VISIO_DOMAIN}/${formation.visioRoomId}` : null,
      isModerator,
      domain: jaas ? JaasService.DOMAIN : VISIO_DOMAIN,
      // Durée maximale d'une réunion sur le service public meet.jit.si (depuis octobre 2026)
      maxDurationMinutes: jaas ? null : 95,
      userName: user ? `${user.firstName || ''} ${user.lastName || ''}`.trim() || null : null,
    };
  }

  // 7. Entrer dans une salle JaaS : jeton personnel, valable pour cette salle uniquement
  static async joinVisio(formationId, { user, name } = {}) {
    if (!JaasService.isConfigured()) {
      throw new ConflictError('La visio intégrée n\'est pas activée : utilisez le lien de la réunion.');
    }
    const formation = await this.getFormationOrThrow(formationId);
    if (formation.visioStatus !== 'LIVE' || !formation.visioRoomId) {
      throw new ConflictError('La salle n\'est pas encore ouverte.');
    }
    const account = user?.id
      ? await prisma.user.findUnique({ where: { id: user.id }, select: { id: true, firstName: true, lastName: true, avatarUrl: true } })
      : null;
    const fullName = account ? `${account.firstName || ''} ${account.lastName || ''}`.trim() : '';
    const displayName = String(name || '').replace(/[<>]/g, '').trim().slice(0, 60) || fullName || 'Participant';
    const moderator = await this.canHostVisio(user, formation.id);
    return {
      ...JaasService.publicInfo(formation.visioRoomId),
      jwt: JaasService.createToken({ room: formation.visioRoomId, user: account || {}, name: displayName, moderator }),
      displayName,
      isModerator: moderator,
    };
  }
}

module.exports = FormationService;
