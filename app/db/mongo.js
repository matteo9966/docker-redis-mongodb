import { MongoClient } from "mongodb";
import { config } from "../../config/config.js";
const url = `mongodb://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_IP}:${config.MONGO_PORT}/${config.MONGO_DB_NAME}?authSource=admin`;

const currentUrl = url;

const mongoClient = new MongoClient(currentUrl);

async function initializeMongoConnection() {
  try {
    const client = mongoClient;
    await MongoClient.connect(currentUrl);
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

async function testConnection(client) {
  try {
    if (!client) return false;
    await client.db("admin").command({ ping: 1 });
    return true;
  } catch (error) {
    return false;
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

export {
  closeConnection,
  getClient,
  initializeMongoConnection,
  testConnection,
};
