-- CreateEnum
CREATE TYPE "PositionReportStatus" AS ENUM ('DRAFT', 'SUBMITTED', 'NEEDS_CHANGES', 'VALIDATED');

-- AlterTable
ALTER TABLE "club_positions" ADD COLUMN     "reportDueDays" INTEGER NOT NULL DEFAULT 7,
ADD COLUMN     "reportFrequency" TEXT NOT NULL DEFAULT 'MONTHLY',
ADD COLUMN     "reportTemplate" TEXT,
ADD COLUMN     "reportsToId" TEXT,
ADD COLUMN     "seesAllReports" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "position_reports" (
    "id" TEXT NOT NULL,
    "positionId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "periodKey" TEXT,
    "title" TEXT NOT NULL,
    "content" JSONB NOT NULL DEFAULT '{}',
    "attachments" JSONB NOT NULL DEFAULT '[]',
    "status" "PositionReportStatus" NOT NULL DEFAULT 'DRAFT',
    "incomeTotal" INTEGER NOT NULL DEFAULT 0,
    "expenseTotal" INTEGER NOT NULL DEFAULT 0,
    "submittedAt" TIMESTAMP(3),
    "reviewedAt" TIMESTAMP(3),
    "reviewedById" TEXT,
    "reviewComment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "position_reports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "position_report_events" (
    "id" TEXT NOT NULL,
    "reportId" TEXT NOT NULL,
    "actorId" TEXT,
    "action" TEXT NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "position_report_events_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "position_reports_positionId_periodKey_idx" ON "position_reports"("positionId", "periodKey");

-- CreateIndex
CREATE INDEX "position_reports_authorId_idx" ON "position_reports"("authorId");

-- CreateIndex
CREATE INDEX "position_reports_status_idx" ON "position_reports"("status");

-- CreateIndex
CREATE INDEX "position_report_events_reportId_idx" ON "position_report_events"("reportId");

-- AddForeignKey
ALTER TABLE "club_positions" ADD CONSTRAINT "club_positions_reportsToId_fkey" FOREIGN KEY ("reportsToId") REFERENCES "club_positions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "position_reports" ADD CONSTRAINT "position_reports_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "club_positions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "position_reports" ADD CONSTRAINT "position_reports_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "position_reports" ADD CONSTRAINT "position_reports_reviewedById_fkey" FOREIGN KEY ("reviewedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "position_report_events" ADD CONSTRAINT "position_report_events_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "position_reports"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "position_report_events" ADD CONSTRAINT "position_report_events_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Paramétrage initial des postes généraux (sans effet si un poste n'existe pas)
UPDATE "club_positions" SET "seesAllReports" = true, "reportTemplate" = 'COORDINATION'
  WHERE "title" IN ('Président(e)', 'Vice-Président(e)');
UPDATE "club_positions" SET "reportTemplate" = 'SECRETARIAT'
  WHERE "title" IN ('Secrétaire Général(e)', 'Secrétaire Général(e) Adjoint(e)');
UPDATE "club_positions" SET "reportTemplate" = 'TRESORERIE'
  WHERE "title" IN ('Trésorier(ère) Général(e)', 'Trésorier(ère) Adjoint(e)');
UPDATE "club_positions" SET "reportTemplate" = 'COMMUNICATION' WHERE "title" = 'Responsable Communication & Médias';
UPDATE "club_positions" SET "reportTemplate" = 'LOGISTIQUE' WHERE "title" = 'Responsable Organisation & Logistique';
UPDATE "club_positions" SET "reportTemplate" = 'PEDAGOGIE' WHERE "title" = 'Responsable Pédagogique & Formations';
UPDATE "club_positions" SET "reportTemplate" = 'PARTENARIATS' WHERE "title" = 'Responsable Partenariats & Relations Extérieures';
UPDATE "club_positions" SET "reportTemplate" = 'PROJETS' WHERE "title" = 'Responsable Projets & Innovation';
UPDATE "club_positions" SET "reportTemplate" = 'VIE_ASSOCIATIVE' WHERE "title" = 'Responsable Accueil & Vie Associative';

UPDATE "club_positions" AS adj SET "reportsToId" = sup."id"
  FROM "club_positions" AS sup
  WHERE adj."title" = 'Secrétaire Général(e) Adjoint(e)' AND sup."title" = 'Secrétaire Général(e)';
UPDATE "club_positions" AS adj SET "reportsToId" = sup."id"
  FROM "club_positions" AS sup
  WHERE adj."title" = 'Trésorier(ère) Adjoint(e)' AND sup."title" = 'Trésorier(ère) Général(e)';
UPDATE "club_positions" AS vp SET "reportsToId" = pres."id"
  FROM "club_positions" AS pres
  WHERE vp."title" = 'Vice-Président(e)' AND pres."title" = 'Président(e)';
