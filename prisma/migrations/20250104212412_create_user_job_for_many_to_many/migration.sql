/*
  Warnings:

  - You are about to drop the column `jobId` on the `Users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_jobId_fkey";

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "jobId";

-- CreateTable
CREATE TABLE "UserJob" (
    "id" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserJob_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserJob" ADD CONSTRAINT "UserJob_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Jobs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserJob" ADD CONSTRAINT "UserJob_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
