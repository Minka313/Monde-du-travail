-- AlterTable
ALTER TABLE "mentor_sessions" ADD COLUMN     "feedbackAt" TIMESTAMP(3),
ADD COLUMN     "menteeComment" TEXT,
ADD COLUMN     "menteeRating" INTEGER;

-- CreateTable
CREATE TABLE "mentorship_concerns" (
    "id" TEXT NOT NULL,
    "mentorshipId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'OPEN',
    "resolution" TEXT,
    "resolvedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "mentorship_concerns_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "mentorship_concerns_status_createdAt_idx" ON "mentorship_concerns"("status", "createdAt");

-- AddForeignKey
ALTER TABLE "mentorship_concerns" ADD CONSTRAINT "mentorship_concerns_mentorshipId_fkey" FOREIGN KEY ("mentorshipId") REFERENCES "mentorships"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mentorship_concerns" ADD CONSTRAINT "mentorship_concerns_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

