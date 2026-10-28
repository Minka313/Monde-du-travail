-- AlterTable
ALTER TABLE "users" ADD COLUMN     "twoFactorEmailAttempts" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "twoFactorEmailCode" TEXT,
ADD COLUMN     "twoFactorEmailExpires" TIMESTAMP(3),
ADD COLUMN     "twoFactorMethod" TEXT NOT NULL DEFAULT 'TOTP';

