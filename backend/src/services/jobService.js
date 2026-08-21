const prisma = require('../config/database');
const { NotFoundError, BadRequestError } = require('../utils/errors');

class JobService {
  // Liste publique : uniquement les métiers publiés
  static async getPublishedJobs(category) {
    const where = { status: 'PUBLISHED' };
    if (category) where.category = category;

    return prisma.job.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
  }

  // Liste admin : filtres par statut, auteur (« mes créations »), recherche
  static async getJobsForAdmin({ status, mine, userId, search, category }) {
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

    const [jobs, total] = await Promise.all([
      prisma.job.findMany({
        where,
        orderBy: { updatedAt: 'desc' },
        include: {
          createdBy: { select: { id: true, firstName: true, lastName: true } },
        },
      }),
      prisma.job.count({ where }),
    ]);

    return {
      jobs,
      pagination: { total },
    };
  }

  static async getJobById(id) {
    const job = await prisma.job.findUnique({
      where: { id },
      include: {
        createdBy: { select: { id: true, firstName: true, lastName: true } },
      },
    });

    if (!job) {
      throw new NotFoundError('Métier non trouvé');
    }

    return job;
  }

  static async createJob(data, userId) {
    const { title, description, category, icon } = data;
    return prisma.job.create({
      data: {
        title,
        description,
        category,
        icon,
        status: 'DRAFT',
        createdById: userId,
      },
      include: {
        createdBy: { select: { id: true, firstName: true, lastName: true } },
      },
    });
  }

  static async updateJob(id, data) {
    await this.getJobOrThrow(id);
    const { title, description, category, icon } = data;

    return prisma.job.update({
      where: { id },
      data: {
        ...(title !== undefined && { title }),
        ...(description !== undefined && { description }),
        ...(category !== undefined && { category }),
        ...(icon !== undefined && { icon }),
      },
      include: {
        createdBy: { select: { id: true, firstName: true, lastName: true } },
      },
    });
  }

  // Soumission à validation : DRAFT/ARCHIVED -> PENDING_REVIEW
  static async submitJob(id) {
    const job = await this.getJobOrThrow(id);

    if (job.status === 'PENDING_REVIEW') {
      throw new BadRequestError('Ce métier est déjà en attente de validation');
    }
    if (job.status === 'PUBLISHED') {
      throw new BadRequestError('Ce métier est déjà publié');
    }

    return prisma.job.update({
      where: { id },
      data: { status: 'PENDING_REVIEW' },
      include: {
        createdBy: { select: { id: true, firstName: true, lastName: true } },
      },
    });
  }

  // Publication directe (permission metier.publish requise au niveau route)
  static async publishJob(id) {
    await this.getJobOrThrow(id);

    const job = await prisma.job.update({
      where: { id },
      data: { status: 'PUBLISHED' },
      include: {
        createdBy: { select: { id: true, firstName: true, lastName: true } },
      },
    });

    // Une éventuelle demande d'approbation en attente devient inutile
    await prisma.approvalWorkflow.updateMany({
      where: {
        resourceType: 'Job',
        resourceId: id,
        action: 'publish',
        status: 'PENDING',
      },
      data: { status: 'CANCELLED', reviewedAt: new Date() },
    });

    return job;
  }

  static async unpublishJob(id) {
    const job = await this.getJobOrThrow(id);

    if (job.status !== 'PUBLISHED') {
      throw new BadRequestError('Seul un métier publié peut être dépublié');
    }

    return prisma.job.update({
      where: { id },
      data: { status: 'DRAFT' },
      include: {
        createdBy: { select: { id: true, firstName: true, lastName: true } },
      },
    });
  }

  static async archiveJob(id) {
    const job = await this.getJobOrThrow(id);

    if (job.status === 'ARCHIVED') {
      throw new BadRequestError('Ce métier est déjà archivé');
    }

    const updated = await prisma.job.update({
      where: { id },
      data: { status: 'ARCHIVED' },
      include: {
        createdBy: { select: { id: true, firstName: true, lastName: true } },
      },
    });

    await prisma.approvalWorkflow.updateMany({
      where: {
        resourceType: 'Job',
        resourceId: id,
        action: 'publish',
        status: 'PENDING',
      },
      data: { status: 'CANCELLED', reviewedAt: new Date() },
    });

    return updated;
  }

  static async deleteJob(id) {
    await this.getJobOrThrow(id);
    await prisma.job.delete({ where: { id } });
  }

  static async getJobOrThrow(id) {
    const job = await prisma.job.findUnique({ where: { id } });
    if (!job) {
      throw new NotFoundError('Métier non trouvé');
    }
    return job;
  }
}

module.exports = JobService;
