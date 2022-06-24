-- CreateTable
CREATE TABLE `author` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(150) NOT NULL,
    `lastname` VARCHAR(150) NOT NULL,
    `speciality` VARCHAR(150) NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `category` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(150) NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `favorite` (
    `user_Id` INTEGER NOT NULL,
    `masterclass_Id` INTEGER NOT NULL,

    INDEX `fk_user_has_masterclass_masterclass1_idx`(`masterclass_Id`),
    INDEX `fk_user_has_masterclass_user1_idx`(`user_Id`),
    PRIMARY KEY (`user_Id`, `masterclass_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `keyword` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(150) NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `masterclass` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(150) NOT NULL,
    `source` VARCHAR(1000) NOT NULL,
    `description` VARCHAR(3000) NOT NULL,
    `author_Id` INTEGER NOT NULL,

    INDEX `fk_masterclass_author1_idx`(`author_Id`),
    PRIMARY KEY (`Id`, `author_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `masterclass_has_category` (
    `masterclass_Id` INTEGER NOT NULL,
    `category_Id` INTEGER NOT NULL,

    INDEX `fk_masterclass_has_category_category1_idx`(`category_Id`),
    INDEX `fk_masterclass_has_category_masterclass_idx`(`masterclass_Id`),
    PRIMARY KEY (`masterclass_Id`, `category_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `masterclass_has_keyword` (
    `masterclass_Id` INTEGER NOT NULL,
    `keyword_Id` INTEGER NOT NULL,

    INDEX `fk_masterclass_has_keyword_keyword1_idx`(`keyword_Id`),
    INDEX `fk_masterclass_has_keyword_masterclass1_idx`(`masterclass_Id`),
    PRIMARY KEY (`masterclass_Id`, `keyword_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `photo` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(150) NOT NULL,
    `source` VARCHAR(255) NOT NULL,
    `author_Id` INTEGER NOT NULL,

    INDEX `fk_photo_author1_idx`(`author_Id`),
    PRIMARY KEY (`Id`, `author_Id`)
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

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `favorite` ADD CONSTRAINT `fk_user_has_masterclass_masterclass10` FOREIGN KEY (`masterclass_Id`) REFERENCES `masterclass`(`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `favorite` ADD CONSTRAINT `fk_user_has_masterclass_user10` FOREIGN KEY (`user_Id`) REFERENCES `user`(`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `masterclass` ADD CONSTRAINT `fk_masterclass_author1` FOREIGN KEY (`author_Id`) REFERENCES `author`(`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `masterclass_has_category` ADD CONSTRAINT `fk_masterclass_has_category_category1` FOREIGN KEY (`category_Id`) REFERENCES `category`(`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `masterclass_has_category` ADD CONSTRAINT `fk_masterclass_has_category_masterclass` FOREIGN KEY (`masterclass_Id`) REFERENCES `masterclass`(`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `masterclass_has_keyword` ADD CONSTRAINT `fk_masterclass_has_keyword_keyword1` FOREIGN KEY (`keyword_Id`) REFERENCES `keyword`(`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `masterclass_has_keyword` ADD CONSTRAINT `fk_masterclass_has_keyword_masterclass1` FOREIGN KEY (`masterclass_Id`) REFERENCES `masterclass`(`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `photo` ADD CONSTRAINT `fk_photo_author1` FOREIGN KEY (`author_Id`) REFERENCES `author`(`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
