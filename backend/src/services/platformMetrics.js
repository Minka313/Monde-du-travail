const prisma = require('../config/database');

/**
 * Chiffres de la plateforme : une seule définition, partagée par le site public
 * (accueil, À propos) et le tableau de bord de l'administration, pour que le même
 * indicateur affiche partout la même valeur.
 *
 * - formations : formations publiées ; trainings = formations + ateliers et événements
 * - jobs : fiches métiers publiées (le catalogue d'orientation est importé en base)
 * - members : adhérents actifs (hors comptes visiteurs) ; visitorAccounts : comptes visiteurs actifs
 * - mentors : rôle Mentor & Expert approuvé et actif
 * - interactions : sujets + réponses du forum
 */
async function getPlatformCounts() {
  const [formations, events, jobs, articles, members, mentors, topics, replies, visitorAccounts] = await Promise.all([
    prisma.formation.count({ where: { status: 'PUBLISHED' } }),
    prisma.event.count(),
    prisma.job.count({ where: { status: 'PUBLISHED' } }),
    prisma.post.count({ where: { status: 'PUBLISHED' } }),
    // Adhérents : comptes actifs hors comptes visiteurs
    prisma.user.count({ where: { isActive: true, role: { not: 'VISITOR' } } }),
    prisma.userAdminRole.count({ where: { role: { name: 'MENTOR_EXPERT' }, status: 'APPROVED', isActive: true } }),
    prisma.topic.count(),
    prisma.reply.count(),
    prisma.user.count({ where: { isActive: true, role: 'VISITOR' } }),
  ]);
  return {
    formations,
    events,
    trainings: formations + events,
    jobs,
    articles,
    guides: jobs + articles,
    members,
    mentors,
    topics,
    replies,
    interactions: topics + replies,
    visitorAccounts,
  };
}

module.exports = { getPlatformCounts };
