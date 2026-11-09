-- AlterTable
ALTER TABLE "meetings" ADD COLUMN "reminderDaySentAt" TIMESTAMP(3),
ADD COLUMN "reminderSoonSentAt" TIMESTAMP(3),
ADD COLUMN "manualReminderAt" TIMESTAMP(3);
