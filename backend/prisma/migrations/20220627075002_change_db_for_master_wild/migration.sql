/*
  Warnings:

  - The primary key for the `masterclass` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `author_Id` on the `masterclass` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `masterclass` table. All the data in the column will be lost.
  - You are about to drop the `author` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `photo` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `entreprise_Id` to the `masterclass` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `masterclass` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `masterclass` DROP FOREIGN KEY `fk_masterclass_author1`;

-- DropForeignKey
ALTER TABLE `photo` DROP FOREIGN KEY `fk_photo_author1`;

-- AlterTable
ALTER TABLE `masterclass` DROP PRIMARY KEY,
    DROP COLUMN `author_Id`,
    DROP COLUMN `name`,
    ADD COLUMN `entreprise_Id` INTEGER NOT NULL,
    ADD COLUMN `title` VARCHAR(150) NOT NULL,
    ADD PRIMARY KEY (`Id`, `entreprise_Id`);

-- DropTable
DROP TABLE `author`;

-- DropTable
DROP TABLE `photo`;

-- CreateTable
CREATE TABLE `entreprise` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(150) NOT NULL,
    `speciality` VARCHAR(150) NOT NULL,
    `logo_source` VARCHAR(250) NOT NULL,
    `logo_name` VARCHAR(150) NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `fk_masterclass_entreprise1_idx` ON `masterclass`(`entreprise_Id`);

-- AddForeignKey
ALTER TABLE `masterclass` ADD CONSTRAINT `fk_masterclass_entreprise1` FOREIGN KEY (`entreprise_Id`) REFERENCES `entreprise`(`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
