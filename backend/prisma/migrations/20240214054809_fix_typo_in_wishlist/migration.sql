/*
  Warnings:

  - You are about to drop the `WhishList` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `WhishList` DROP FOREIGN KEY `WhishList_productId_fkey`;

-- DropTable
DROP TABLE `WhishList`;

-- CreateTable
CREATE TABLE `WishList` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(191) NOT NULL,
    `productId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `WishList` ADD CONSTRAINT `WishList_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
