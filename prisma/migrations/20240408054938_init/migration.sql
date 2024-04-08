/*
  Warnings:

  - You are about to drop the column `iconBrand` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the column `iconName` on the `Skill` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Skill" DROP COLUMN "iconBrand",
DROP COLUMN "iconName";
