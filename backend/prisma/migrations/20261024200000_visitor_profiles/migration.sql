-- CreateTable
CREATE TABLE "visitor_profiles" (
    "id" TEXT NOT NULL,
    "sessionId" VARCHAR(128) NOT NULL,
    "userId" TEXT,
    "status" VARCHAR(50),
    "educationLevel" VARCHAR(60),
    "interests" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "country" VARCHAR(2),
    "region" VARCHAR(80),
    "city" VARCHAR(120),
    "device" VARCHAR(20),
    "firstSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "visitsCount" INTEGER NOT NULL DEFAULT 1,
    "pagesCount" INTEGER NOT NULL DEFAULT 0,
    "totalSeconds" INTEGER NOT NULL DEFAULT 0,
    "profiledAt" TIMESTAMP(3),

    CONSTRAINT "visitor_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "visitor_profiles_sessionId_key" ON "visitor_profiles"("sessionId");

-- CreateIndex
CREATE INDEX "visitor_profiles_status_idx" ON "visitor_profiles"("status");

-- CreateIndex
CREATE INDEX "visitor_profiles_country_idx" ON "visitor_profiles"("country");

-- CreateIndex
CREATE INDEX "visitor_profiles_lastSeenAt_idx" ON "visitor_profiles"("lastSeenAt");

-- CreateIndex
CREATE INDEX "visitor_profiles_firstSeenAt_idx" ON "visitor_profiles"("firstSeenAt");

