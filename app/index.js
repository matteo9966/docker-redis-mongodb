import './initEnv.js';
import { initializeMongoDB } from "./db/mongo.js";
import { startServer } from "./server/server.js";
/* aspettando di avere  */
const DATABASE_URL = process.env.MONGO_URL;
const temp_DATABASE_URL = 'mongodb://matteodatabase:mypassword@172.18.0.2:27017?authSource=admin'
const SERVER_PORT = process.env.PORT || 3000 ;
console.log(temp_DATABASE_URL)
//console.log({DATABASE_URL})
console.log({SERVER_PORT})
console.log()
async function main(){
    try {
        const client = await initializeMongoDB(temp_DATABASE_URL);

        if(!client){
            throw new Error('Error connecting to mongodb');
        }
        startServer(SERVER_PORT)
        console.log('the server started!')
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

main().catch((e)=>console.log('ERROR: ',e));