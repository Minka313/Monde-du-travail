-- CreateTable
CREATE TABLE "user_saved_data" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_saved_data_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_saved_data_userId_key_key" ON "user_saved_data"("userId", "key");

-- AddForeignKey
ALTER TABLE "user_saved_data" ADD CONSTRAINT "user_saved_data_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

