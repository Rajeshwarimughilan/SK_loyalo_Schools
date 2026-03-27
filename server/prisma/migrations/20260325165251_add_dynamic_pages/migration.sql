-- CreateTable
CREATE TABLE "TransportInfo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "routeCode" TEXT,
    "description" TEXT NOT NULL,
    "busNo" TEXT,
    "driverName" TEXT,
    "contactPhone" TEXT,
    "morningPickup" TEXT,
    "departureTime" TEXT,
    "stopsJson" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PUBLISHED',
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "UniformInfo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "category" TEXT,
    "description" TEXT NOT NULL,
    "details" TEXT,
    "priceRange" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PUBLISHED',
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "EbookInfo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "subject" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "publisher" TEXT,
    "linkUrl" TEXT,
    "description" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PUBLISHED',
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Administrator" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "groupType" TEXT NOT NULL DEFAULT 'STAFF',
    "department" TEXT,
    "qualification" TEXT,
    "experience" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "linkedinUrl" TEXT,
    "photoUrl" TEXT,
    "message" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PUBLISHED',
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "AlumniProfile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "photoUrl" TEXT,
    "batch" TEXT,
    "profession" TEXT,
    "company" TEXT,
    "location" TEXT,
    "quote" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PUBLISHED',
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "BlogPost" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "excerpt" TEXT,
    "content" TEXT,
    "author" TEXT,
    "imageUrl" TEXT,
    "externalUrl" TEXT,
    "publishedAt" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PUBLISHED',
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
