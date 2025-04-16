-- CreateTable
CREATE TABLE "Customer" (
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clerkId" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("clerkId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_clerkId_key" ON "Customer"("clerkId");
