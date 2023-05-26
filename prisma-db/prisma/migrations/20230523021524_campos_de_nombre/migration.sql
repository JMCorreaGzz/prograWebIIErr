/*
  Warnings:

  - Added the required column `lastName` to the `userNotes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `userNotes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `usernotes` ADD COLUMN `lastName` VARCHAR(150) NOT NULL,
    ADD COLUMN `name` VARCHAR(150) NOT NULL;
