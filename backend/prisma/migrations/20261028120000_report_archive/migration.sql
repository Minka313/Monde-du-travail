-- AlterTable
ALTER TABLE "position_reports" ADD COLUMN     "archivedAt" TIMESTAMP(3),
ADD COLUMN     "archivedById" TEXT;

-- CreateIndex
CREATE INDEX "position_reports_archivedAt_idx" ON "position_reports"("archivedAt");

