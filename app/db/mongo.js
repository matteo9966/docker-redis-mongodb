import { MongoClient } from "mongodb";


async function initializeMongoDB(url){
    try {
        const client = new MongoClient(url);
        await client.connect()
        const connected = await client.db("admin").command({ping:1});
        if(connected){
            return client
        }else {
            return null
        }
    } catch (error) {
        console.log(error)
        return null
    }
}

/**
 * 
 * @param {MongoClient} client 
 */
function closeConnection(client){
    return client.close() 
}

export {closeConnection,initializeMongoDB}