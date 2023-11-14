import { MongoClient } from "mongodb";
import { config } from "../../config/config.js";
const url = `mongodb://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_IP}:${config.MONGO_PORT}?authSource=admin`;
const mongoClient = new MongoClient(url);

async function initializeMongoConnection(mongoClient) {
  try {
    const client = mongoClient;
    await client.connect();
    const connected = await client.db("admin").command({ ping: 1 });
    if (connected) {
      return client;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}

/**
 *
 * @param {MongoClient} client
 * @param {string} name
 */
export function createCollection(name) {
  if (!mongoClient) {
    return null;
  }
  console.log("created " + name + " " + "collection");
  return mongoClient.db().collection(name);
}

/**
 *
 * @param {MongoClient} client
 */
function closeConnection(client) {
  return client.close();
}

/**
 *
 * @returns {MongoClient}
 */
function getClient() {
  return mongoClient;
}

export { closeConnection, initializeMongoConnection, getClient };
