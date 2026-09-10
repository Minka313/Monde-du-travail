const prisma = require('../config/database');
const { NotFoundError, BadRequestError } = require('../utils/errors');

class JobService {
  // Liste publique : uniquement les métiers publiés
  static async getPublishedJobs(filter) {
    const where = { status: 'PUBLISHED' };
    if (typeof filter === 'string' && filter) {
      where.OR = [
        { category: filter.toUpperCase() },
        { domain: { equals: filter, mode: 'insensitive' } },
      ];
    } else if (typeof filter === 'object' && filter) {
      if (filter.category) where.category = filter.category;
      if (filter.domain) where.domain = { equals: filter.domain, mode: 'insensitive' };
      if (filter.search) {
        where.OR = [
          { title: { contains: filter.search, mode: 'insensitive' } },
          { description: { contains: filter.search, mode: 'insensitive' } },
          { domain: { contains: filter.search, mode: 'insensitive' } },
        ];
      }
    }

    return prisma.job.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
  }

  // Obtenir la liste distincte des domaines / catalogues
  static async getDomains() {
    const jobs = await prisma.job.findMany({
      where: { status: 'PUBLISHED' },
      select: { domain: true, category: true },
    });
    const domains = new Set();
    jobs.forEach(j => {
      if (j.domain && j.domain.trim()) domains.add(j.domain.trim());
    });
    return Array.from(domains);
  }

  // Liste admin : filtres par statut, auteur (« mes créations »), recherche
  static async getJobsForAdmin({ status, mine, userId, search, category, domain }) {
    const where = {};
    if (status) where.status = status;
    if (category) where.category = category;
    if (domain) where.domain = { contains: domain, mode: 'insensitive' };
    if (mine === 'true' || mine === true) where.createdById = userId;
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
        { domain: { contains: search, mode: 'insensitive' } },
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

  static parseSkills(skills) {
    if (!skills) return [];
    if (Array.isArray(skills)) return skills.map(s => String(s).trim()).filter(Boolean);
    if (typeof skills === 'string') return skills.split(',').map(s => s.trim()).filter(Boolean);
    return [];
  }

  static async createJob(data, userId) {
    const {
      title, description, content, category, domain, icon, image,
      salary, skills, prerequisites, studies, advantages, disadvantages,
      subProfessions, videoUrl, location
    } = data;

    return prisma.job.create({
      data: {
        title,
        description,
        content: content || null,
        category: category || 'TECH',
        domain: domain || null,
        icon: icon || null,
        image: image || null,
        salary: salary || null,
        skills: this.parseSkills(skills),
        prerequisites: prerequisites || null,
        studies: studies || null,
        advantages: advantages || null,
        disadvantages: disadvantages || null,
        subProfessions: this.parseSkills(subProfessions),
        videoUrl: videoUrl || null,
        location: location || null,
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
    const {
      title, description, content, category, domain, icon, image,
      salary, skills, prerequisites, studies, advantages, disadvantages,
      subProfessions, videoUrl, location
    } = data;

    const updateData = {};
    if (title !== undefined) updateData.title = title;
    if (description !== undefined) updateData.description = description;
    if (content !== undefined) updateData.content = content || null;
    if (category !== undefined) updateData.category = category;
    if (domain !== undefined) updateData.domain = domain || null;
    if (icon !== undefined) updateData.icon = icon || null;
    if (image !== undefined) updateData.image = image || null;
    if (salary !== undefined) updateData.salary = salary || null;
    if (skills !== undefined) updateData.skills = this.parseSkills(skills);
    if (prerequisites !== undefined) updateData.prerequisites = prerequisites || null;
    if (studies !== undefined) updateData.studies = studies || null;
    if (advantages !== undefined) updateData.advantages = advantages || null;
    if (disadvantages !== undefined) updateData.disadvantages = disadvantages || null;
    if (subProfessions !== undefined) updateData.subProfessions = this.parseSkills(subProfessions);
    if (videoUrl !== undefined) updateData.videoUrl = videoUrl || null;
    if (location !== undefined) updateData.location = location || null;

    return prisma.job.update({
      where: { id },
      data: updateData,
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

  // Suppression massive (action critique : ré-authentification au niveau route)
  static async deleteJobs(ids) {
    const result = await prisma.job.deleteMany({ where: { id: { in: ids } } });
    return result.count;
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
