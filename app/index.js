import "./initEnv.js";
import { initializeMongoConnection,testConnection } from "./db/mongo.js";
import { startServer } from "./server/server.js";
import { config } from "../config/config.js";
/* aspettando di avere  */
const DATABASE_URL = process.env.MONGO_URL;
const SERVER_PORT = process.env.PORT || 3000;
// console.log(temp_DATABASE_URL)
//console.log({DATABASE_URL})
console.log({ SERVER_PORT });
console.log(config);
async function main() {
  try {
    if (config.WITH_DB) {
      const client = await initializeMongoConnection();
      if(await testConnection(client)){
        console.log('connection succeded!')
      }else{
        console.log('connection failed')
      }
     
      if (!client) {
        throw new Error("Error connecting to mongodb");
      }
    }
    
    startServer(SERVER_PORT);
    console.log("the server started!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main().catch((e) => console.log("ERROR: ", e));
