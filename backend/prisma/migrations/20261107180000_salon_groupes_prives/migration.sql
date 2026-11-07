-- AlterTable
ALTER TABLE "chat_channels" ADD COLUMN "isPrivate" BOOLEAN NOT NULL DEFAULT false;

ALTER TABLE "chat_messages" ADD COLUMN "mentions" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN "attachments" JSONB;

-- CreateTable
CREATE TABLE "chat_members" (
    "id" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "chat_members_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "chat_members_channelId_userId_key" ON "chat_members"("channelId", "userId");
CREATE INDEX "chat_members_userId_idx" ON "chat_members"("userId");

-- AddForeignKey
ALTER TABLE "chat_members" ADD CONSTRAINT "chat_members_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "chat_channels"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "chat_members" ADD CONSTRAINT "chat_members_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
