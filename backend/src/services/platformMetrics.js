const prisma = require('../config/database');

/**
 * Chiffres de la plateforme : une seule définition, partagée par le site public
 * (accueil, À propos) et le tableau de bord de l'administration, pour que le même
 * indicateur affiche partout la même valeur.
 *
 * - formations : formations publiées ; trainings = formations + ateliers et événements
 * - jobs : fiches métiers publiées (le catalogue d'orientation est importé en base)
 * - members : comptes actifs ; mentors : rôle Mentor & Expert approuvé et actif
 * - interactions : sujets + réponses du forum
 */
async function getPlatformCounts() {
  const [formations, events, jobs, articles, members, mentors, topics, replies] = await Promise.all([
    prisma.formation.count({ where: { status: 'PUBLISHED' } }),
    prisma.event.count(),
    prisma.job.count({ where: { status: 'PUBLISHED' } }),
    prisma.post.count({ where: { status: 'PUBLISHED' } }),
    prisma.user.count({ where: { isActive: true } }),
    prisma.userAdminRole.count({ where: { role: { name: 'MENTOR_EXPERT' }, status: 'APPROVED', isActive: true } }),
    prisma.topic.count(),
    prisma.reply.count(),
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
  };
}

module.exports = { getPlatformCounts };
