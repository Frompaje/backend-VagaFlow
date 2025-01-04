import dotenv from "dotenv";

dotenv.config();

export const env = {
  HOSTNAME: process.env["HOSTNAME"],
  PORT: process.env["PORT"],
  PG_USERNAME: process.env["PG_USERNAME"],
  PG_PASSWORD: process.env["PG_PASSWORD"],
  PG_DATABASE: process.env["PG_DATABASE"],
  DATABASE_URL: process.env["DATABASE_URL"],
};
