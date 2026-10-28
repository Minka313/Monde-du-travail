-- CreateTable
CREATE TABLE "opportunity_alerts" (
    "id" TEXT NOT NULL,
    "opportunityId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "confirmedAt" TIMESTAMP(3),
    "confirmSentAt" TIMESTAMP(3),
    "sentKeys" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "announceSession" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "opportunity_alerts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "opportunity_alerts_token_key" ON "opportunity_alerts"("token");

-- CreateIndex
CREATE INDEX "opportunity_alerts_confirmedAt_idx" ON "opportunity_alerts"("confirmedAt");

-- CreateIndex
CREATE UNIQUE INDEX "opportunity_alerts_opportunityId_email_key" ON "opportunity_alerts"("opportunityId", "email");

-- AddForeignKey
ALTER TABLE "opportunity_alerts" ADD CONSTRAINT "opportunity_alerts_opportunityId_fkey" FOREIGN KEY ("opportunityId") REFERENCES "opportunities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

