-- CreateTable
CREATE TABLE `entreprise` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(150) NOT NULL,
    `speciality` VARCHAR(150) NOT NULL,
    `logo_source` VARCHAR(250) NOT NULL,
    `logo_name` VARCHAR(150) NOT NULL,

    UNIQUE INDEX `entreprise_name_key`(`name`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `category` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(150) NOT NULL,

    UNIQUE INDEX `category_name_key`(`name`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `favorite` (
    `user_Id` INTEGER NOT NULL,
    `masterclass_Id` INTEGER NOT NULL,

    PRIMARY KEY (`user_Id`, `masterclass_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `keyword` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(150) NOT NULL,

    UNIQUE INDEX `keyword_name_key`(`name`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `masterclass` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(150) NOT NULL,
    `source` VARCHAR(1000) NOT NULL,
    `description` VARCHAR(3000) NOT NULL,
    `entreprise_Id` INTEGER NULL,
    `category_Id` INTEGER NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `masterclass_has_keyword` (
    `masterclass_Id` INTEGER NOT NULL,
    `keyword_Id` INTEGER NOT NULL,

    PRIMARY KEY (`masterclass_Id`, `keyword_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(150) NOT NULL,
    `lastname` VARCHAR(150) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(3000) NOT NULL,
    `birthday_date` DATETIME(0) NULL,
    `role` VARCHAR(3000) NULL,

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `favorite` ADD CONSTRAINT `favorite_masterclass_Id_fkey` FOREIGN KEY (`masterclass_Id`) REFERENCES `masterclass`(`Id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `favorite` ADD CONSTRAINT `favorite_user_Id_fkey` FOREIGN KEY (`user_Id`) REFERENCES `user`(`Id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `masterclass` ADD CONSTRAINT `masterclass_entreprise_Id_fkey` FOREIGN KEY (`entreprise_Id`) REFERENCES `entreprise`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `masterclass` ADD CONSTRAINT `masterclass_category_Id_fkey` FOREIGN KEY (`category_Id`) REFERENCES `category`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `masterclass_has_keyword` ADD CONSTRAINT `masterclass_has_keyword_keyword_Id_fkey` FOREIGN KEY (`keyword_Id`) REFERENCES `keyword`(`Id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `masterclass_has_keyword` ADD CONSTRAINT `masterclass_has_keyword_masterclass_Id_fkey` FOREIGN KEY (`masterclass_Id`) REFERENCES `masterclass`(`Id`) ON DELETE CASCADE ON UPDATE NO ACTION;
