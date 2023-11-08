import './initEnv.js';
import { initializeMongoDB } from "./db/mongo.js";
import { startServer } from "./server/server.js";
const DATABASE_URL = process.env.MONGO_URL;
const SERVER_PORT = process.env.PORT || 3000 ;
console.log(DATABASE_URL)
console.log(SERVER_PORT)
async function main(){
    try {
        const client = await initializeMongoDB(DATABASE_URL);
        if(!client){
            throw new Error('Error connecting to mongodb');
        }
        startServer(SERVER_PORT)

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}