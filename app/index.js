import "./initEnv.js";
import { initializeMongoConnection, testConnection } from "./db/mongo.js";
import { startServer } from "./server/server.js";
import { config } from "../config/config.js";
import { configCollections } from "./db/configCollections.js";
const SERVER_PORT = process.env.PORT || 3000;
console.log({ SERVER_PORT });
console.log(config);
console.log('made a change!')
async function main() {
  try {
    const client = await initializeMongoConnection();
    if (await testConnection(client)) {
      const configured = await configCollections();
      if (!configured) {
        throw new Error("Error while configuring the collections");
      }
    } else {
      console.log("connection failed");
    }

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
