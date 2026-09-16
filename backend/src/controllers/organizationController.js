/**
 * @file organizationController.js
 * @description Contrôleur Express pour l'organisation, les postes et le bureau du club.
 */

const OrganizationService = require('../services/organizationService');

class OrganizationController {
  /**
   * Récupère la composition du bureau du club et de ses pôles.
   */
  static async getBureau(req, res, next) {
    try {
      const data = await OrganizationService.getBureau(req.query);
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Récupère la liste de tous les postes configurés.
   */
  static async getAllPositions(req, res, next) {
    try {
      const data = await OrganizationService.getAllPositions();
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Récupère les détails d'un poste spécifique.
   */
  static async getPosition(req, res, next) {
    try {
      const data = await OrganizationService.getPositionById(req.params.id);
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Crée un nouveau poste personnalisé (Ultra Admin uniquement).
   */
  static async createPosition(req, res, next) {
    try {
      const data = await OrganizationService.createPosition(req.body, req.user.id);
      res.status(201).json({
        success: true,
        message: 'Poste créé avec succès.',
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Modifie un poste existant (Ultra Admin uniquement).
   */
  static async updatePosition(req, res, next) {
    try {
      const data = await OrganizationService.updatePosition(req.params.id, req.body, req.user.id);
      res.status(200).json({
        success: true,
        message: 'Poste mis à jour avec succès.',
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Supprime un poste (Ultra Admin uniquement).
   */
  static async deletePosition(req, res, next) {
    try {
      const data = await OrganizationService.deletePosition(req.params.id, req.user.id);
      res.status(200).json({
        success: true,
        message: 'Poste supprimé avec succès.',
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Récupère la liste des affectations de postes.
   */
  static async getAllAssignments(req, res, next) {
    try {
      const data = await OrganizationService.getAllAssignments(req.query);
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Assigne un membre à un poste (Ultra Admin uniquement).
   */
  static async assignPosition(req, res, next) {
    try {
      const data = await OrganizationService.assignPosition(req.body, req.user.id);
      res.status(201).json({
        success: true,
        message: 'Poste attribué avec succès.',
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Modifie une affectation de poste (Ultra Admin uniquement).
   */
  static async updateAssignment(req, res, next) {
    try {
      const data = await OrganizationService.updateAssignment(req.params.id, req.body, req.user.id);
      res.status(200).json({
        success: true,
        message: 'Affectation mise à jour avec succès.',
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Supprime / libère une affectation de poste (Ultra Admin uniquement).
   */
  static async removeAssignment(req, res, next) {
    try {
      const data = await OrganizationService.removeAssignment(req.params.id, req.user.id);
      res.status(200).json({
        success: true,
        message: 'Affectation retirée avec succès.',
        data,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = OrganizationController;
