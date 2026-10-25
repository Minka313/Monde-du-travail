-- AlterTable
ALTER TABLE "opportunities" ADD COLUMN     "domains" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "faq" JSONB,
ADD COLUMN     "funding" TEXT,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "resources" JSONB,
ADD COLUMN     "selectionSteps" JSONB,
ADD COLUMN     "sessionLabel" TEXT,
ADD COLUMN     "tips" TEXT;

-- CreateTable
CREATE TABLE "opportunity_reports" (
    "id" TEXT NOT NULL,
    "opportunityId" TEXT NOT NULL,
    "kind" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "contact" TEXT,
    "status" TEXT NOT NULL DEFAULT 'OPEN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolvedAt" TIMESTAMP(3),

    CONSTRAINT "opportunity_reports_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "opportunity_reports_status_createdAt_idx" ON "opportunity_reports"("status", "createdAt");

-- CreateIndex
CREATE INDEX "opportunity_reports_opportunityId_idx" ON "opportunity_reports"("opportunityId");

-- AddForeignKey
ALTER TABLE "opportunity_reports" ADD CONSTRAINT "opportunity_reports_opportunityId_fkey" FOREIGN KEY ("opportunityId") REFERENCES "opportunities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

