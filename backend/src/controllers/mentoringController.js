const MentoringService = require('../services/mentoringService');

const meta = (req) => ({ ipAddress: req.ip, userAgent: req.get('user-agent') });

// Enveloppe commune : réponse { success, data } et erreurs transmises au gestionnaire global
const handle = (fn, { status = 200, message } = {}) => async (req, res, next) => {
  try {
    const data = await fn(req);
    res.status(status).json({ success: true, ...(message ? { message } : {}), data: data === undefined ? null : data });
  } catch (error) {
    next(error);
  }
};

const MentoringController = {
  getContext: handle((req) => MentoringService.getContext(req.user)),

  listMentors: handle((req) => MentoringService.listMentors(req.user)),
  searchMembers: handle((req) => MentoringService.searchMembers(req.user, req.query.q)),
  createMentorship: handle((req) => MentoringService.createMentorship(req.user, req.body, meta(req)), { status: 201, message: 'Binôme créé' }),
  updateMentorship: handle((req) => MentoringService.updateMentorship(req.user, req.params.id, req.body, meta(req)), { message: 'Binôme mis à jour' }),

  assignTrainer: handle((req) => MentoringService.setTrainer(req.user, req.params.id, req.body.userId, true, meta(req)), { message: 'Animateur ajouté' }),
  removeTrainer: handle((req) => MentoringService.setTrainer(req.user, req.params.id, req.params.userId, false, meta(req)), { message: 'Animateur retiré' }),
  getRegistrations: handle((req) => MentoringService.getRegistrations(req.user, req.params.id)),
  updateRegistration: handle((req) => MentoringService.updateRegistrationStatus(req.user, req.params.id, req.body.status), { message: 'Inscription mise à jour' }),
  updateSchedule: handle((req) => MentoringService.updateSchedule(req.user, req.params.id, req.body, meta(req)), { message: 'Planning mis à jour' }),
  startVisio: handle((req) => MentoringService.startVisio(req.user, req.params.id, req.body.scheduledAt), { message: 'Salle virtuelle ouverte' }),
  stopVisio: handle((req) => MentoringService.stopVisio(req.user, req.params.id), { message: 'Salle virtuelle fermée' }),

  listReports: handle((req) => MentoringService.listReports(req.user, req.query)),
  getReport: handle((req) => MentoringService.getReport(req.user, req.params.id)),
  createReport: handle((req) => MentoringService.createReport(req.user, req.body), { status: 201, message: 'Brouillon enregistré' }),
  updateReport: handle((req) => MentoringService.updateReport(req.user, req.params.id, req.body), { message: 'Compte rendu enregistré' }),
  deleteReport: handle((req) => MentoringService.deleteReport(req.user, req.params.id, meta(req)), { message: 'Compte rendu supprimé' }),
  submitReport: handle((req) => MentoringService.submitReport(req.user, req.params.id, meta(req)), { message: 'Compte rendu soumis à la Présidence' }),
  reviewReport: handle((req) => MentoringService.reviewReport(req.user, req.params.id, req.body, meta(req)), { message: 'Décision enregistrée' }),

  listThreads: handle((req) => MentoringService.listThreads(req.user)),
  getMessages: handle((req) => MentoringService.getMessages(req.user, req.query.thread)),
  sendMessage: handle((req) => MentoringService.sendMessage(req.user, req.body), { status: 201 }),
};

module.exports = MentoringController;
