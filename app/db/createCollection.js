import { MongoClient } from "mongodb";
/**
 *
 * @param {MongoClient} client
 * @param {string} name
 */
export function createCollection(client, name) {
  if (!client) {
    return null;
  }
  return client.db().collection(name);
}
