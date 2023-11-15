import { routes } from "./routes.js";

export const config = {
  MONGO_IP: process.env.MONGO_IP || "mongo",
  MONGO_PORT: process.env.MONGO_PORT || 27017,
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
  MONGO_DB_NAME: process.env.MONGO_DB_NAME || "docker_test_db",
  WITH_DB: process.env.WITH_DB == "true" ? true : false,
  ENVIRONMENT: process.env.ENVIRONMENT || "development",
  MONGO_DEV_URL:process.env.MONGO_DEV_URL,
  routes:routes
};
