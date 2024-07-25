/*
  Warnings:

  - Added the required column `url` to the `ProjectsEN` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProjectsEN" (
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
INSERT INTO "new_ProjectsEN" ("createdAt", "date", "description", "id", "image", "name", "tags", "updatedAt") SELECT "createdAt", "date", "description", "id", "image", "name", "tags", "updatedAt" FROM "ProjectsEN";
DROP TABLE "ProjectsEN";
ALTER TABLE "new_ProjectsEN" RENAME TO "ProjectsEN";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
