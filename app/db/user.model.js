import { createCollection } from "./mongo.js";
import { ObjectId } from "mongodb";
import * as user from "../jsdoc-models/user.model.js";
import {inspect} from 'util'

const userCollection = createCollection("users");

const insertUser = async (/**@type {user.User}*/ user) => {
  try {
    const inserted = await userCollection.insertOne(user);
    return inserted;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getUserByUsername = async (/**@type {user.User} */ user) => {
  try {
    const userFound = await userCollection.findOne({ username: user.username });
    console.log(inspect({userFound}, {showHidden: false, depth: null, colors: true}))
    
    if (!userFound) {
      throw new Error("no user with id");
    }
    return userFound
  } catch (error) {
    console.log(error);
    return null;
  }
};

export async function createUserIndexes() {
  await userCollection.createIndex({ username: 1 }, { unique: true });
}

export { insertUser,getUserByUsername };
