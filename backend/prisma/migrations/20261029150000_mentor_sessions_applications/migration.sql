-- CreateTable
CREATE TABLE "mentor_sessions" (
    "id" TEXT NOT NULL,
    "mentorshipId" TEXT NOT NULL,
    "scheduledAt" TIMESTAMP(3) NOT NULL,
    "durationMinutes" INTEGER NOT NULL DEFAULT 60,
    "format" TEXT NOT NULL,
    "place" TEXT,
    "topic" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PLANNED',
    "visioStatus" TEXT NOT NULL DEFAULT 'CLOSED',
    "visioRoomId" TEXT,
    "reminderSentAt" TIMESTAMP(3),
    "createdById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "mentor_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mentor_applications" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "profession" TEXT NOT NULL,
    "organization" TEXT,
    "domains" TEXT NOT NULL,
    "experience" TEXT,
    "motivation" TEXT NOT NULL,
    "availability" TEXT,
    "linkedinUrl" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "response" TEXT,
    "roleGrantedAt" TIMESTAMP(3),
    "handledById" TEXT,
    "handledAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "mentor_applications_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "mentor_sessions_mentorshipId_scheduledAt_idx" ON "mentor_sessions"("mentorshipId", "scheduledAt");

-- CreateIndex
CREATE INDEX "mentor_sessions_status_scheduledAt_idx" ON "mentor_sessions"("status", "scheduledAt");

-- CreateIndex
CREATE INDEX "mentor_applications_status_createdAt_idx" ON "mentor_applications"("status", "createdAt");

-- CreateIndex
CREATE INDEX "mentor_applications_email_idx" ON "mentor_applications"("email");

-- AddForeignKey
ALTER TABLE "mentor_sessions" ADD CONSTRAINT "mentor_sessions_mentorshipId_fkey" FOREIGN KEY ("mentorshipId") REFERENCES "mentorships"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mentor_applications" ADD CONSTRAINT "mentor_applications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mentor_applications" ADD CONSTRAINT "mentor_applications_handledById_fkey" FOREIGN KEY ("handledById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

