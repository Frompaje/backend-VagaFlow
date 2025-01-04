import dotenv from "dotenv";

dotenv.config();

export const env = {
  HOSTNAME: process.env["HOSTNAME"] || "localhost",
  PORT: process.env["PORT"] || "3000",
  PG_USERNAME: process.env["PG_USERNAME"] || "postgres",
  PG_PASSWORD: process.env["PG_PASSWORD"] || "password",
  PG_DATABASE: process.env["PG_DATABASE"] || "default_pg",
  DATABASE_URL:
    process.env["DATABASE_URL"] ||
    "postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public",
};
