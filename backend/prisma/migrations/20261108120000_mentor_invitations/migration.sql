-- CreateTable
CREATE TABLE "mentor_invitations" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "createdById" TEXT NOT NULL,
    "inviteeName" TEXT,
    "inviteeEmail" TEXT,
    "message" TEXT,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "emailedAt" TIMESTAMP(3),
    "revokedAt" TIMESTAMP(3),
    "usedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "mentor_invitations_pkey" PRIMARY KEY ("id")
);

-- AlterTable
ALTER TABLE "mentor_applications" ADD COLUMN "invitationId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "mentor_invitations_token_key" ON "mentor_invitations"("token");
CREATE INDEX "mentor_invitations_createdById_createdAt_idx" ON "mentor_invitations"("createdById", "createdAt");

-- AddForeignKey
ALTER TABLE "mentor_invitations" ADD CONSTRAINT "mentor_invitations_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "mentor_applications" ADD CONSTRAINT "mentor_applications_invitationId_fkey" FOREIGN KEY ("invitationId") REFERENCES "mentor_invitations"("id") ON DELETE SET NULL ON UPDATE CASCADE;
