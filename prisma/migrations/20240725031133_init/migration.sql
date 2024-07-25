/*
  Warnings:

  - Added the required column `url` to the `ProjectsPT` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProjectsPT" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "image" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_ProjectsPT" ("createdAt", "date", "description", "id", "image", "name", "tags", "updatedAt") SELECT "createdAt", "date", "description", "id", "image", "name", "tags", "updatedAt" FROM "ProjectsPT";
DROP TABLE "ProjectsPT";
ALTER TABLE "new_ProjectsPT" RENAME TO "ProjectsPT";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
