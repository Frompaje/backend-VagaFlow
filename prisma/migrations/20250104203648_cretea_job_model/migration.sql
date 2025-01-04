-- CreateTable
CREATE TABLE "Jobs" (
    "id" TEXT NOT NULL,
    "recruiter_name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "company_link" TEXT NOT NULL,
    "vacancy_link" TEXT NOT NULL,
    "recruiter_profile_link" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Jobs_pkey" PRIMARY KEY ("id")
);
