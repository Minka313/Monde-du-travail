-- ============================================================================
-- LE MONDE DU TRAVAIL — MIGRATION MODULE FORUM AVANCÉ
-- À exécuter dans Supabase SQL Editor si besoin
-- ============================================================================

-- 1. Nouvelles colonnes pour les Sujets (Topics)
ALTER TABLE topics
  ADD COLUMN IF NOT EXISTS "likeCount" INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS "bestReplyId" TEXT,
  ADD COLUMN IF NOT EXISTS "isEdited" BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS "editedAt" TIMESTAMPTZ;

-- 2. Nouvelles colonnes pour les Réponses (Replies)
ALTER TABLE replies
  ADD COLUMN IF NOT EXISTS "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ADD COLUMN IF NOT EXISTS "isSolution" BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS "isEdited" BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS "editedAt" TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS "likeCount" INTEGER NOT NULL DEFAULT 0;

-- Index pour accélérer la recherche des réponses certifiées solutions
CREATE INDEX IF NOT EXISTS replies_is_solution_idx ON replies ("isSolution");

-- 3. Table des likes sur les sujets (TopicLike)
CREATE TABLE IF NOT EXISTS topic_likes (
  id TEXT PRIMARY KEY,
  "topicId" TEXT NOT NULL REFERENCES topics(id) ON DELETE CASCADE,
  "userId" TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT topic_likes_topic_user_unique UNIQUE ("topicId", "userId")
);

CREATE INDEX IF NOT EXISTS topic_likes_topic_idx ON topic_likes ("topicId");
CREATE INDEX IF NOT EXISTS topic_likes_user_idx ON topic_likes ("userId");

-- 4. Table des likes sur les réponses (ReplyLike)
CREATE TABLE IF NOT EXISTS reply_likes (
  id TEXT PRIMARY KEY,
  "replyId" TEXT NOT NULL REFERENCES replies(id) ON DELETE CASCADE,
  "userId" TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT reply_likes_reply_user_unique UNIQUE ("replyId", "userId")
);

CREATE INDEX IF NOT EXISTS reply_likes_reply_idx ON reply_likes ("replyId");
CREATE INDEX IF NOT EXISTS reply_likes_user_idx ON reply_likes ("userId");

-- 5. Type énuméré pour le statut des signalements
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'ForumReportStatus') THEN
    CREATE TYPE "ForumReportStatus" AS ENUM ('PENDING', 'REVIEWED', 'DISMISSED');
  END IF;
END$$;

-- 6. Table des signalements communautaires (ForumReport)
CREATE TABLE IF NOT EXISTS forum_reports (
  id TEXT PRIMARY KEY,
  reason TEXT NOT NULL,
  details TEXT,
  status "ForumReportStatus" NOT NULL DEFAULT 'PENDING',
  "reporterId" TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  "topicId" TEXT REFERENCES topics(id) ON DELETE CASCADE,
  "replyId" TEXT REFERENCES replies(id) ON DELETE CASCADE,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS forum_reports_status_idx ON forum_reports (status);
CREATE INDEX IF NOT EXISTS forum_reports_topic_idx ON forum_reports ("topicId");
CREATE INDEX IF NOT EXISTS forum_reports_reply_idx ON forum_reports ("replyId");
CREATE INDEX IF NOT EXISTS forum_reports_reporter_idx ON forum_reports ("reporterId");
