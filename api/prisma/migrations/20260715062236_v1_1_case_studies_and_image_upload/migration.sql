/*
  Warnings:

  - Added the required column `key` to the `project_images` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CaseStudyStatus" AS ENUM ('draft', 'published', 'archived');

-- AlterTable
ALTER TABLE "project_images" ADD COLUMN     "key" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "case_studies" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "project_id" TEXT,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "excerpt" TEXT,
    "cover_image_url" TEXT,
    "cover_image_key" TEXT,
    "overview" TEXT,
    "problem" TEXT,
    "approach" TEXT,
    "solution" TEXT,
    "results" TEXT,
    "status" "CaseStudyStatus" NOT NULL DEFAULT 'draft',
    "is_featured" BOOLEAN NOT NULL DEFAULT false,
    "display_order" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "case_studies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "case_studies_project_id_key" ON "case_studies"("project_id");

-- CreateIndex
CREATE INDEX "case_studies_user_id_status_deleted_at_idx" ON "case_studies"("user_id", "status", "deleted_at");

-- CreateIndex
CREATE UNIQUE INDEX "case_studies_user_id_slug_key" ON "case_studies"("user_id", "slug");

-- AddForeignKey
ALTER TABLE "case_studies" ADD CONSTRAINT "case_studies_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "case_studies" ADD CONSTRAINT "case_studies_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE SET NULL ON UPDATE CASCADE;
