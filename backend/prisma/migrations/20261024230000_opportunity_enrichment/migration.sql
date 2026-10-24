-- AlterTable
ALTER TABLE "opportunities" ADD COLUMN     "ageLimit" TEXT,
ADD COLUMN     "applyMode" TEXT,
ADD COLUMN     "contact" TEXT,
ADD COLUMN     "exams" JSONB,
ADD COLUMN     "fees" TEXT,
ADD COLUMN     "places" INTEGER,
ADD COLUMN     "recurring" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "series" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "slug" TEXT,
ADD COLUMN     "sourceNote" TEXT,
ADD COLUMN     "usualPeriod" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "opportunities_slug_key" ON "opportunities"("slug");

