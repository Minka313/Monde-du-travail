-- CreateTable
CREATE TABLE "opportunities" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "organization" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "details" TEXT,
    "eligibility" TEXT,
    "levels" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "destination" TEXT,
    "country" TEXT,
    "openingDate" TIMESTAMP(3),
    "deadline" TIMESTAMP(3),
    "keyDates" JSONB,
    "documents" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "benefits" TEXT,
    "officialUrl" TEXT,
    "lastVerifiedAt" TIMESTAMP(3),
    "phaseOverride" TEXT,
    "image" TEXT,
    "status" "ContentStatus" NOT NULL DEFAULT 'DRAFT',
    "createdById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "opportunities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "opportunities_status_deadline_idx" ON "opportunities"("status", "deadline");

-- CreateIndex
CREATE INDEX "opportunities_category_idx" ON "opportunities"("category");

-- AddForeignKey
ALTER TABLE "opportunities" ADD CONSTRAINT "opportunities_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;


-- Accès uniquement via l'API (Prisma, propriétaire de la table) : la clé publique
-- Supabase (PostgREST) ne peut ni lire ni écrire cette table.
ALTER TABLE "opportunities" ENABLE ROW LEVEL SECURITY;

-- Permissions du module et rôle ADMIN_OPPORTUNITE (mêmes valeurs que
-- src/scripts/seed-rbac.js). Idempotent : rien n'est modifié s'ils existent déjà.
INSERT INTO "permissions" ("id", "code", "module", "action", "description") VALUES
    (gen_random_uuid()::text, 'opportunite.read', 'opportunite', 'read', 'Consulter les concours et opportunités'),
    (gen_random_uuid()::text, 'opportunite.create', 'opportunite', 'create', 'Créer des annonces (bourses, concours, examens, admissions)'),
    (gen_random_uuid()::text, 'opportunite.update', 'opportunite', 'update', 'Modifier et vérifier des annonces'),
    (gen_random_uuid()::text, 'opportunite.delete', 'opportunite', 'delete', 'Supprimer des annonces'),
    (gen_random_uuid()::text, 'opportunite.publish', 'opportunite', 'publish', 'Publier / dépublier des annonces'),
    (gen_random_uuid()::text, 'opportunite.archive', 'opportunite', 'archive', 'Archiver des annonces')
ON CONFLICT ("code") DO NOTHING;

INSERT INTO "admin_roles" ("id", "name", "description", "isSystem", "requiresApproval", "updatedAt") VALUES
    (gen_random_uuid()::text, 'ADMIN_OPPORTUNITE', 'Gestion complète de la rubrique Concours & opportunités', true, true, CURRENT_TIMESTAMP)
ON CONFLICT ("name") DO NOTHING;

-- Rattachées au nouveau rôle et au rôle ULTRA_ADMIN (s'il existe)
INSERT INTO "admin_role_permissions" ("id", "adminRoleId", "permissionId")
SELECT gen_random_uuid()::text, r."id", p."id"
FROM "admin_roles" r
CROSS JOIN "permissions" p
WHERE r."name" IN ('ADMIN_OPPORTUNITE', 'ULTRA_ADMIN')
  AND p."code" LIKE 'opportunite.%'
ON CONFLICT ("adminRoleId", "permissionId") DO NOTHING;
