/**
 * @file organizationService.js
 * @description Service de gestion de l'organisation, des postes et du bureau du club (Architecture 3-Couches).
 */

const prisma = require('../config/database');
const { NotFoundError, BadRequestError, ConflictError } = require('../utils/errors');
const AuditService = require('./auditService');

/**
 * Service gérant la structure hiérarchique, les postes associatifs et la composition du bureau du club.
 */
class OrganizationService {
  /**
   * Récupère la composition actuelle du bureau du club avec tous les postes et leurs titulaires actifs.
   * @param {Object} [options={}] - Options de filtrage
   * @param {string} [options.category] - Filtrer par catégorie de pôle
   * @returns {Promise<Array<Object>>} Liste ordonnée des postes avec affectations
   */
  static async getBureau(options = {}) {
    const { category } = options;
    const where = {};
    if (category) {
      where.category = category;
    }

    const positions = await prisma.clubPosition.findMany({
      where,
      orderBy: [
        { order: 'asc' },
        { createdAt: 'asc' },
      ],
      include: {
        assignments: {
          where: { isActive: true },
          orderBy: { startDate: 'asc' },
          include: {
            user: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
                role: true,
                isActive: true,
              },
            },
            assignedBy: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
              },
            },
          },
        },
      },
    });

    return positions.map((pos) => ({
      id: pos.id,
      title: pos.title,
      description: pos.description,
      category: pos.category,
      order: pos.order,
      isSystem: pos.isSystem,
      isOccupied: pos.assignments.length > 0,
      activeHoldersCount: pos.assignments.length,
      currentHolders: pos.assignments.map((a) => ({
        assignmentId: a.id,
        userId: a.user.id,
        fullName: `${a.user.firstName} ${a.user.lastName}`.trim(),
        firstName: a.user.firstName,
        lastName: a.user.lastName,
        email: a.user.email,
        role: a.user.role,
        mandateYear: a.mandateYear,
        startDate: a.startDate,
        notes: a.notes,
        assignedBy: a.assignedBy ? `${a.assignedBy.firstName} ${a.assignedBy.lastName}`.trim() : null,
      })),
      createdAt: pos.createdAt,
      updatedAt: pos.updatedAt,
    }));
  }

  /**
   * Récupère tous les postes définis dans le club.
   * @returns {Promise<Array<Object>>}
   */
  static async getAllPositions() {
    const positions = await prisma.clubPosition.findMany({
      orderBy: [
        { order: 'asc' },
        { createdAt: 'asc' },
      ],
      include: {
        _count: {
          select: {
            assignments: {
              where: { isActive: true },
            },
          },
        },
      },
    });

    return positions.map((p) => ({
      id: p.id,
      title: p.title,
      description: p.description,
      category: p.category,
      order: p.order,
      isSystem: p.isSystem,
      activeMembersCount: p._count.assignments,
      createdAt: p.createdAt,
      updatedAt: p.updatedAt,
    }));
  }

  /**
   * Récupère les détails complets d'un poste par son identifiant.
   * @param {string} id - ID du poste
   * @returns {Promise<Object>}
   */
  static async getPositionById(id) {
    const position = await prisma.clubPosition.findUnique({
      where: { id },
      include: {
        assignments: {
          orderBy: { startDate: 'desc' },
          include: {
            user: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
                role: true,
              },
            },
          },
        },
      },
    });

    if (!position) {
      throw new NotFoundError('Poste introuvable');
    }

    return position;
  }

  /**
   * Crée un nouveau poste (action réservée Ultra Admin).
   * @param {Object} data - Données du poste
   * @param {string} data.title - Intitulé du poste
   * @param {string} [data.description] - Missions du poste
   * @param {string} [data.category] - Pôle d'appartenance
   * @param {number} [data.order] - Rang hiérarchique
   * @param {string} adminUserId - ID de l'Ultra Admin
   * @returns {Promise<Object>}
   */
  static async createPosition(data, adminUserId) {
    const { title, description, category = 'BUREAU_EXECUTIF', order = 0 } = data;

    const trimmedTitle = title?.trim();
    if (!trimmedTitle || trimmedTitle.length < 2) {
      throw new BadRequestError('Le titre du poste doit comporter au moins 2 caractères.');
    }

    const existing = await prisma.clubPosition.findUnique({
      where: { title: trimmedTitle },
    });
    if (existing) {
      throw new ConflictError(`Un poste intitulé "${trimmedTitle}" existe déjà.`);
    }

    const position = await prisma.clubPosition.create({
      data: {
        title: trimmedTitle,
        description: description?.trim() || null,
        category: category?.trim() || 'BUREAU_EXECUTIF',
        order: Number.isInteger(order) ? order : 0,
        isSystem: false,
      },
    });

    await AuditService.log({
      userId: adminUserId,
      action: 'organization.position.create',
      module: 'organization',
      resource: 'ClubPosition',
      resourceId: position.id,
      metadata: { title: position.title, category: position.category, order: position.order },
      result: 'SUCCESS',
    });

    return position;
  }

  /**
   * Met à jour un poste existant.
   * @param {string} id - ID du poste
   * @param {Object} data - Données à mettre à jour
   * @param {string} adminUserId - ID de l'Ultra Admin
   * @returns {Promise<Object>}
   */
  static async updatePosition(id, data, adminUserId) {
    const position = await prisma.clubPosition.findUnique({ where: { id } });
    if (!position) {
      throw new NotFoundError('Poste introuvable');
    }

    const updateData = {};
    if (data.title !== undefined) {
      const trimmedTitle = data.title.trim();
      if (!trimmedTitle || trimmedTitle.length < 2) {
        throw new BadRequestError('Le titre du poste doit comporter au moins 2 caractères.');
      }
      if (trimmedTitle !== position.title) {
        const titleConflict = await prisma.clubPosition.findUnique({
          where: { title: trimmedTitle },
        });
        if (titleConflict) {
          throw new ConflictError(`Un poste intitulé "${trimmedTitle}" existe déjà.`);
        }
      }
      updateData.title = trimmedTitle;
    }

    if (data.description !== undefined) {
      updateData.description = data.description ? data.description.trim() : null;
    }
    if (data.category !== undefined) {
      updateData.category = data.category.trim();
    }
    if (data.order !== undefined) {
      updateData.order = parseInt(data.order, 10) || 0;
    }

    const updated = await prisma.clubPosition.update({
      where: { id },
      data: updateData,
    });

    await AuditService.log({
      userId: adminUserId,
      action: 'organization.position.update',
      module: 'organization',
      resource: 'ClubPosition',
      resourceId: id,
      metadata: { previous: position, updated: updateData },
      result: 'SUCCESS',
    });

    return updated;
  }

  /**
   * Supprime un poste associatif.
   * @param {string} id - ID du poste
   * @param {string} adminUserId - ID de l'Ultra Admin
   * @returns {Promise<{ deleted: boolean, id: string }>}
   */
  static async deletePosition(id, adminUserId) {
    const position = await prisma.clubPosition.findUnique({
      where: { id },
      include: {
        _count: {
          select: { assignments: { where: { isActive: true } } },
        },
      },
    });

    if (!position) {
      throw new NotFoundError('Poste introuvable');
    }

    await prisma.clubPosition.delete({
      where: { id },
    });

    await AuditService.log({
      userId: adminUserId,
      action: 'organization.position.delete',
      module: 'organization',
      resource: 'ClubPosition',
      resourceId: id,
      metadata: { deletedTitle: position.title, activeMembersWere: position._count.assignments },
      result: 'SUCCESS',
    });

    return { deleted: true, id };
  }

  /**
   * Récupère la liste des affectations de postes (avec filtres).
   * @param {Object} [filters={}]
   * @returns {Promise<Array<Object>>}
   */
  static async getAllAssignments(filters = {}) {
    const where = {};
    if (filters.isActive !== undefined) {
      where.isActive = filters.isActive === 'true' || filters.isActive === true;
    }
    if (filters.userId) {
      where.userId = filters.userId;
    }
    if (filters.positionId) {
      where.positionId = filters.positionId;
    }

    return prisma.clubAssignment.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      include: {
        position: {
          select: { id: true, title: true, category: true, order: true },
        },
        user: {
          select: { id: true, firstName: true, lastName: true, email: true, role: true },
        },
        assignedBy: {
          select: { id: true, firstName: true, lastName: true },
        },
      },
    });
  }

  /**
   * Assigne ou réassigne un membre à un poste du club (action réservée Ultra Admin).
   * @param {Object} data - Détails d'affectation
   * @param {string} data.positionId - ID du poste
   * @param {string} data.userId - ID de l'utilisateur
   * @param {string} [data.mandateYear] - Année du mandat (ex: "2025-2026")
   * @param {boolean} [data.replaceCurrent=false] - Si true, désactive les titulaires actifs actuels pour ce poste
   * @param {string} [data.notes] - Remarques éventuelles
   * @param {string} adminUserId - ID de l'Ultra Admin
   * @returns {Promise<Object>} Affectation créée
   */
  static async assignPosition(data, adminUserId) {
    const { positionId, userId, mandateYear, replaceCurrent = false, notes } = data;

    if (!positionId || !userId) {
      throw new BadRequestError('positionId et userId sont obligatoires.');
    }

    const [position, user] = await Promise.all([
      prisma.clubPosition.findUnique({ where: { id: positionId } }),
      prisma.user.findUnique({ where: { id: userId } }),
    ]);

    if (!position) {
      throw new NotFoundError('Poste introuvable.');
    }
    if (!user) {
      throw new NotFoundError('Utilisateur introuvable.');
    }

    // Vérifier si l'utilisateur est déjà actif sur ce poste
    const existingActiveAssignment = await prisma.clubAssignment.findFirst({
      where: {
        positionId,
        userId,
        isActive: true,
      },
    });

    if (existingActiveAssignment) {
      // Met à jour les informations du mandat
      const updated = await prisma.clubAssignment.update({
        where: { id: existingActiveAssignment.id },
        data: {
          mandateYear: mandateYear || existingActiveAssignment.mandateYear,
          notes: notes !== undefined ? notes : existingActiveAssignment.notes,
          assignedById: adminUserId,
        },
        include: {
          position: true,
          user: { select: { id: true, firstName: true, lastName: true, email: true } },
        },
      });
      return updated;
    }

    // Si replaceCurrent est actif, archiver les mandats actifs actuels de ce poste
    if (replaceCurrent) {
      await prisma.clubAssignment.updateMany({
        where: {
          positionId,
          isActive: true,
        },
        data: {
          isActive: false,
          endDate: new Date(),
        },
      });
    }

    const assignment = await prisma.clubAssignment.create({
      data: {
        positionId,
        userId,
        mandateYear: mandateYear || `${new Date().getFullYear()}-${new Date().getFullYear() + 1}`,
        startDate: new Date(),
        isActive: true,
        notes: notes?.trim() || null,
        assignedById: adminUserId,
      },
      include: {
        position: true,
        user: { select: { id: true, firstName: true, lastName: true, email: true, role: true } },
        assignedBy: { select: { id: true, firstName: true, lastName: true } },
      },
    });

    await AuditService.log({
      userId: adminUserId,
      action: 'organization.assignment.create',
      module: 'organization',
      resource: 'ClubAssignment',
      resourceId: assignment.id,
      metadata: {
        positionTitle: position.title,
        userName: `${user.firstName} ${user.lastName}`.trim(),
        mandateYear: assignment.mandateYear,
      },
      result: 'SUCCESS',
    });

    return assignment;
  }

  /**
   * Met à jour une affectation existante (changer le mandat, la date de fin, le statut, les notes).
   * @param {string} id - ID de l'affectation
   * @param {Object} data - Données de modification
   * @param {string} adminUserId - ID de l'Ultra Admin
   * @returns {Promise<Object>}
   */
  static async updateAssignment(id, data, adminUserId) {
    const assignment = await prisma.clubAssignment.findUnique({
      where: { id },
      include: { position: true, user: true },
    });

    if (!assignment) {
      throw new NotFoundError('Affectation introuvable.');
    }

    const updateData = {};
    if (data.positionId !== undefined) {
      const newPos = await prisma.clubPosition.findUnique({ where: { id: data.positionId } });
      if (!newPos) throw new NotFoundError('Nouveau poste introuvable.');
      updateData.positionId = data.positionId;
    }
    if (data.mandateYear !== undefined) {
      updateData.mandateYear = data.mandateYear ? data.mandateYear.trim() : null;
    }
    if (data.isActive !== undefined) {
      updateData.isActive = Boolean(data.isActive);
      if (!updateData.isActive && !assignment.endDate) {
        updateData.endDate = new Date();
      }
    }
    if (data.notes !== undefined) {
      updateData.notes = data.notes ? data.notes.trim() : null;
    }
    if (data.endDate !== undefined) {
      updateData.endDate = data.endDate ? new Date(data.endDate) : null;
    }

    const updated = await prisma.clubAssignment.update({
      where: { id },
      data: updateData,
      include: {
        position: true,
        user: { select: { id: true, firstName: true, lastName: true, email: true } },
      },
    });

    await AuditService.log({
      userId: adminUserId,
      action: 'organization.assignment.update',
      module: 'organization',
      resource: 'ClubAssignment',
      resourceId: id,
      metadata: { previous: assignment, updated: updateData },
      result: 'SUCCESS',
    });

    return updated;
  }

  /**
   * Révoque ou supprime une affectation de poste.
   * @param {string} id - ID de l'affectation
   * @param {string} adminUserId - ID de l'Ultra Admin
   * @returns {Promise<{ removed: boolean, id: string }>}
   */
  static async removeAssignment(id, adminUserId) {
    const assignment = await prisma.clubAssignment.findUnique({
      where: { id },
      include: { position: true, user: true },
    });

    if (!assignment) {
      throw new NotFoundError('Affectation introuvable.');
    }

    await prisma.clubAssignment.delete({ where: { id } });

    await AuditService.log({
      userId: adminUserId,
      action: 'organization.assignment.remove',
      module: 'organization',
      resource: 'ClubAssignment',
      resourceId: id,
      metadata: {
        revokedPosition: assignment.position.title,
        revokedUser: `${assignment.user.firstName} ${assignment.user.lastName}`.trim(),
      },
      result: 'SUCCESS',
    });

    return { removed: true, id };
  }
}

module.exports = OrganizationService;
