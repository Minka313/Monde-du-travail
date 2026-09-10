const prisma = require('../config/database');
const { NotFoundError, BadRequestError } = require('../utils/errors');

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

    return prisma.formation.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
  }

  // Catégories distinctes existantes
  static async getCategories() {
    const formations = await prisma.formation.findMany({
      where: { status: 'PUBLISHED' },
      select: { category: true },
    });
    const categories = new Set();
    formations.forEach(f => {
      if (f.category && f.category.trim()) categories.add(f.category.trim());
    });
    return Array.from(categories);
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
