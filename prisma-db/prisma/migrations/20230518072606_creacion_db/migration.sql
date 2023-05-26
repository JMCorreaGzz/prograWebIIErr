-- CreateTable
CREATE TABLE `userNotes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userName` VARCHAR(150) NOT NULL,
    `psswrd` VARCHAR(16) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `birthDay` DATETIME(3) NOT NULL,
    `createDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `gender` VARCHAR(1) NOT NULL,
    `privateStatus` BOOLEAN NOT NULL DEFAULT false,
    `profilepic` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `blog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `blogTitle` VARCHAR(150) NOT NULL,
    `blogDescription` VARCHAR(200) NOT NULL,
    `privateStatus` BOOLEAN NOT NULL DEFAULT false,
    `createdBy` INTEGER NOT NULL,
    `createDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `noteTitle` VARCHAR(150) NOT NULL,
    `noteContent` MEDIUMTEXT NOT NULL,
    `privateStatus` BOOLEAN NOT NULL DEFAULT false,
    `createdBy` INTEGER NOT NULL,
    `inBlog` INTEGER NOT NULL,
    `createDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `coments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `comentContent` MEDIUMTEXT NOT NULL,
    `createdBy` INTEGER NOT NULL,
    `createDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `categoryTitle` VARCHAR(150) NOT NULL,
    `categoryDescription` VARCHAR(200) NOT NULL,
    `createdBy` INTEGER NOT NULL,
    `createDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `blog` ADD CONSTRAINT `blog_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `userNotes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notes` ADD CONSTRAINT `notes_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `userNotes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notes` ADD CONSTRAINT `notes_inBlog_fkey` FOREIGN KEY (`inBlog`) REFERENCES `blog`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `coments` ADD CONSTRAINT `coments_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `userNotes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `categories` ADD CONSTRAINT `categories_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `userNotes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
