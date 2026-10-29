const MentoringService = require('../services/mentoringService');
const ContentSuggestionService = require('../services/contentSuggestionService');
const MentorApplicationService = require('../services/mentorApplicationService');

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

  createSession: handle((req) => MentoringService.createSession(req.user, req.params.id, req.body, meta(req)), { status: 201, message: 'Séance planifiée : ton mentoré est prévenu' }),
  updateSession: handle((req) => MentoringService.updateSession(req.user, req.params.id, req.body, meta(req)), { message: 'Séance mise à jour' }),
  getSessionVisio: handle((req) => MentoringService.getSessionVisio(req.user, req.params.id)),
  startSessionVisio: handle((req) => MentoringService.setSessionVisio(req.user, req.params.id, true), { message: 'Salle virtuelle ouverte' }),
  stopSessionVisio: handle((req) => MentoringService.setSessionVisio(req.user, req.params.id, false), { message: 'Salle virtuelle fermée' }),
  joinSessionVisio: handle((req) => MentoringService.joinSessionVisio(req.user, req.params.id, req.body?.name)),

  submitSessionFeedback: handle((req) => MentoringService.submitSessionFeedback(req.user, req.params.id, req.body), { message: 'Merci pour ton avis !' }),
  reportConcern: handle((req) => MentoringService.reportConcern(req.user, req.params.id, req.body.message), { status: 201, message: 'Ton signalement est transmis à la Présidence, en toute confidentialité.' }),
  listConcerns: handle((req) => MentoringService.listConcerns(req.user)),
  resolveConcern: handle((req) => MentoringService.resolveConcern(req.user, req.params.id, req.body.resolution, meta(req)), { message: 'Signalement traité' }),

  listApplications: handle((req) => MentorApplicationService.list(req.user)),
  decideApplication: handle((req) => MentorApplicationService.decide(req.user, req.params.id, req.body, meta(req)), { message: 'Décision enregistrée : le candidat est prévenu par e-mail' }),

  getMyMentoring: handle((req) => MentoringService.getMyMentoring(req.user)),
  requestMentor: handle((req) => MentoringService.requestMentor(req.user, req.body), { status: 201, message: 'Demande envoyée à la Présidence' }),
  cancelMentorRequest: handle((req) => MentoringService.cancelMentorRequest(req.user, req.params.id), { message: 'Demande retirée' }),
  listMentorRequests: handle((req) => MentoringService.listMentorRequests(req.user)),
  declineMentorRequest: handle((req) => MentoringService.declineMentorRequest(req.user, req.params.id, req.body.response, meta(req)), { message: 'Réponse envoyée' }),

  searchSuggestionTargets: handle((req) => ContentSuggestionService.searchTargets(req.user, req.query.type, req.query.q)),
  listSuggestions: handle((req) => (req.query.scope === 'review'
    ? ContentSuggestionService.listForReview(req.user, req.query)
    : ContentSuggestionService.listMine(req.user))),
  createSuggestion: handle((req) => ContentSuggestionService.create(req.user, req.body), { status: 201, message: 'Merci ! Ta proposition est transmise aux responsables des fiches.' }),
  resolveSuggestion: handle((req) => ContentSuggestionService.resolve(req.user, req.params.id, req.body, meta(req)), { message: 'Décision enregistrée' }),

  listThreads: handle((req) => MentoringService.listThreads(req.user)),
  getMessages: handle((req) => MentoringService.getMessages(req.user, req.query.thread)),
  sendMessage: handle((req) => MentoringService.sendMessage(req.user, req.body), { status: 201 }),
};

module.exports = MentoringController;
