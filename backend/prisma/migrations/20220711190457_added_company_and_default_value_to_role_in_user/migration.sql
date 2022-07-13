/*
  Warnings:

  - Made the column `role` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `company` VARCHAR(300) NULL,
    MODIFY `role` VARCHAR(3000) NOT NULL DEFAULT 'user';
