/*
  Warnings:

  - You are about to drop the column `deletedAt` on the `Event` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Event` DROP COLUMN `deletedAt`,
    ADD COLUMN `canceledAt` DATETIME(3) NULL;
