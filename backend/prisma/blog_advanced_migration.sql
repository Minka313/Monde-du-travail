-- ============================================================================
-- LE MONDE DU TRAVAIL — MIGRATION MODULE BLOG & ACTUALITÉS AVANCÉ
-- À exécuter dans Supabase SQL Editor si besoin
-- ============================================================================

-- 1. Nouvelles colonnes pour les Articles (Posts)
ALTER TABLE posts
  ADD COLUMN IF NOT EXISTS "views" INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS "readingTime" INTEGER NOT NULL DEFAULT 3,
  ADD COLUMN IF NOT EXISTS "likeCount" INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS "tags" TEXT[] NOT NULL DEFAULT '{}';

-- 2. Index de performance
CREATE INDEX IF NOT EXISTS posts_views_idx ON posts ("views");
CREATE INDEX IF NOT EXISTS posts_like_count_idx ON posts ("likeCount");

-- 3. Table des likes sur les articles (PostLike)
CREATE TABLE IF NOT EXISTS post_likes (
  id TEXT PRIMARY KEY,
  "postId" TEXT NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  "userId" TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT post_likes_post_user_unique UNIQUE ("postId", "userId")
);

CREATE INDEX IF NOT EXISTS post_likes_post_idx ON post_likes ("postId");
CREATE INDEX IF NOT EXISTS post_likes_user_idx ON post_likes ("userId");
