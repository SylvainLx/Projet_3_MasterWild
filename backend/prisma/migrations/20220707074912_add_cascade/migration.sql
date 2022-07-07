-- DropForeignKey
ALTER TABLE `masterclass_has_keyword` DROP FOREIGN KEY `masterclass_has_keyword_keyword_Id_fkey`;

-- DropForeignKey
ALTER TABLE `masterclass_has_keyword` DROP FOREIGN KEY `masterclass_has_keyword_masterclass_Id_fkey`;

-- AddForeignKey
ALTER TABLE `masterclass_has_keyword` ADD CONSTRAINT `masterclass_has_keyword_keyword_Id_fkey` FOREIGN KEY (`keyword_Id`) REFERENCES `keyword`(`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `masterclass_has_keyword` ADD CONSTRAINT `masterclass_has_keyword_masterclass_Id_fkey` FOREIGN KEY (`masterclass_Id`) REFERENCES `masterclass`(`Id`) ON DELETE CASCADE ON UPDATE CASCADE;
