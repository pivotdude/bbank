/*
  Warnings:

  - You are about to drop the `Credits` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Loan" DROP CONSTRAINT "Loan_creditId_fkey";

-- DropTable
DROP TABLE "Credits";

-- CreateTable
CREATE TABLE "Credit" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,
    "term" TEXT NOT NULL,
    "conditions" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Credit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sentEmails" (
    "id" SERIAL NOT NULL,
    "theme" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "template" TEXT NOT NULL,
    "context" JSONB,

    CONSTRAINT "sentEmails_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_creditId_fkey" FOREIGN KEY ("creditId") REFERENCES "Credit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
