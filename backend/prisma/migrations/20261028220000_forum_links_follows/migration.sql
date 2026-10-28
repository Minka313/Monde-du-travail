-- AlterTable
ALTER TABLE "replies" ADD COLUMN IF NOT EXISTS "endorsedAt" TIMESTAMP(3),
ADD COLUMN IF NOT EXISTS "endorsedById" TEXT;

-- AlterTable
ALTER TABLE "topics" ADD COLUMN IF NOT EXISTS "contextId" TEXT,
ADD COLUMN IF NOT EXISTS "contextTitle" TEXT,
ADD COLUMN IF NOT EXISTS "contextType" TEXT;

-- CreateTable
CREATE TABLE IF NOT EXISTS "topic_follows" (
    "id" TEXT NOT NULL,
    "topicId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "topic_follows_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX IF NOT EXISTS "topic_follows_userId_idx" ON "topic_follows"("userId");

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "topic_follows_topicId_userId_key" ON "topic_follows"("topicId", "userId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "topics_contextType_contextId_idx" ON "topics"("contextType", "contextId");

-- AddForeignKey
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'replies_endorsedById_fkey' AND conrelid = '"replies"'::regclass) THEN
        ALTER TABLE "replies" ADD CONSTRAINT "replies_endorsedById_fkey" FOREIGN KEY ("endorsedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
    END IF;
END $$;

-- AddForeignKey
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'topic_follows_topicId_fkey' AND conrelid = '"topic_follows"'::regclass) THEN
        ALTER TABLE "topic_follows" ADD CONSTRAINT "topic_follows_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "topics"("id") ON DELETE CASCADE ON UPDATE CASCADE;
    END IF;
END $$;

-- AddForeignKey
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'topic_follows_userId_fkey' AND conrelid = '"topic_follows"'::regclass) THEN
        ALTER TABLE "topic_follows" ADD CONSTRAINT "topic_follows_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
    END IF;
END $$;
