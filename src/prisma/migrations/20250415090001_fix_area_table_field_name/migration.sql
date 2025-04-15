/*
  Warnings:

  - You are about to drop the column `postalCode` on the `Area` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[postcode]` on the table `Area` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `postcode` to the `Area` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Area_postalCode_key` ON `Area`;

-- AlterTable
ALTER TABLE `Area` DROP COLUMN `postalCode`,
    ADD COLUMN `postcode` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Area_postcode_key` ON `Area`(`postcode`);
