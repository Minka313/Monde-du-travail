-- CreateTable
CREATE TABLE "meetings" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "startsAt" TIMESTAMP(3) NOT NULL,
    "durationMinutes" INTEGER NOT NULL DEFAULT 60,
    "audiences" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdById" TEXT NOT NULL,
    "visioStatus" TEXT NOT NULL DEFAULT 'CLOSED',
    "visioRoomId" TEXT,
    "cancelledAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "meetings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "meeting_invitees" (
    "id" TEXT NOT NULL,
    "meetingId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "meeting_invitees_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "meetings_startsAt_idx" ON "meetings"("startsAt");
CREATE INDEX "meetings_createdById_idx" ON "meetings"("createdById");
CREATE UNIQUE INDEX "meeting_invitees_meetingId_userId_key" ON "meeting_invitees"("meetingId", "userId");
CREATE INDEX "meeting_invitees_userId_idx" ON "meeting_invitees"("userId");

-- AddForeignKey
ALTER TABLE "meetings" ADD CONSTRAINT "meetings_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "meeting_invitees" ADD CONSTRAINT "meeting_invitees_meetingId_fkey" FOREIGN KEY ("meetingId") REFERENCES "meetings"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "meeting_invitees" ADD CONSTRAINT "meeting_invitees_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
