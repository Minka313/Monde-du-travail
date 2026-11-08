-- AlterTable
ALTER TABLE "club_positions" ADD COLUMN "reportObligation" TEXT NOT NULL DEFAULT 'REQUIRED';

-- Les postes d'adjoint : rapport facultatif (la Présidence peut en demander un quand elle le souhaite)
UPDATE "club_positions" SET "reportObligation" = 'OPTIONAL' WHERE "title" ILIKE '%adjoint%';

-- CreateTable
CREATE TABLE "position_report_requests" (
    "id" TEXT NOT NULL,
    "positionId" TEXT NOT NULL,
    "periodKey" TEXT,
    "message" TEXT,
    "dueAt" TIMESTAMP(3) NOT NULL,
    "requestedById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "canceledAt" TIMESTAMP(3),

    CONSTRAINT "position_report_requests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "position_report_requests_positionId_createdAt_idx" ON "position_report_requests"("positionId", "createdAt");

-- AddForeignKey
ALTER TABLE "position_report_requests" ADD CONSTRAINT "position_report_requests_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "club_positions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "position_report_requests" ADD CONSTRAINT "position_report_requests_requestedById_fkey" FOREIGN KEY ("requestedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
