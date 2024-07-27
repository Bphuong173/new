/*
  Warnings:

  - The primary key for the `todo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `todolabel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "todo" DROP CONSTRAINT "todo_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "todo_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "todo_id_seq";

-- AlterTable
ALTER TABLE "todolabel" DROP CONSTRAINT "todolabel_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "todolabel_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "todolabel_id_seq";

-- AlterTable
ALTER TABLE "user" DROP CONSTRAINT "user_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "user_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "user_id_seq";
