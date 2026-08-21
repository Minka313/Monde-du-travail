const prisma = require('../config/database');
const { NotFoundError, BadRequestError } = require('../utils/errors');

class FormationService {
  // Liste publique : uniquement les formations publiées
  static async getPublishedFormations(category) {
    const where = { status: 'PUBLISHED' };
    if (category) where.category = category;

    return prisma.formation.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
  }

  // Liste admin : filtres par statut, auteur (« mes créations »), recherche
  static async getFormationsForAdmin({ status, mine, userId, search, category }) {
    const where = {};
    if (status) where.status = status;
    if (category) where.category = category;
    if (mine === 'true' || mine === true) where.createdById = userId;
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
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

  static async getFormationById(id) {
    const formation = await prisma.formation.findUnique({
      where: { id },
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
    const { title, description, icon, category } = data;
    return prisma.formation.create({
      data: {
        title,
        description,
        icon,
        category,
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
    const { title, description, icon, category } = data;

    return prisma.formation.update({
      where: { id },
      data: {
        ...(title !== undefined && { title }),
        ...(description !== undefined && { description }),
        ...(icon !== undefined && { icon }),
        ...(category !== undefined && { category }),
      },
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

  static async getFormationOrThrow(id) {
    const formation = await prisma.formation.findUnique({ where: { id } });
    if (!formation) {
      throw new NotFoundError('Formation non trouvée');
    }
    return formation;
  }
}

module.exports = FormationService;
