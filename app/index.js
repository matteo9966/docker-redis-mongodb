import "./initEnv.js";
import { initializeMongoDB } from "./db/mongo.js";
import { startServer } from "./server/server.js";
import { config } from "../config/config.js";
/* aspettando di avere  */
const DATABASE_URL = process.env.MONGO_URL;
const SERVER_PORT = process.env.PORT || 3000;
// console.log(temp_DATABASE_URL)
//console.log({DATABASE_URL})
console.log({ SERVER_PORT });
console.log(config);
const temp_DATABASE_URL = `mongodb://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_IP}:${config.MONGO_PORT}?authSource=admin`;
async function main() {
  try {
    const client = await initializeMongoDB(temp_DATABASE_URL);
    console.log("connected to the MONGO DATABASE");
    if (!client) {
      throw new Error("Error connecting to mongodb");
    }
    startServer(SERVER_PORT);
    console.log("the server started!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main().catch((e) => console.log("ERROR: ", e));
