-- CreateTable
CREATE TABLE "Posts" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,

    CONSTRAINT "Posts_pkey" PRIMARY KEY ("id")
);
