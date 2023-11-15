import { createCollection } from "./mongo.js";
import { ObjectId } from "mongodb";
import * as user from "../jsdoc-models/user.model.js";

const userCollection = createCollection("users");

const insertUser = async (/**@type {user.User}*/ user) => {
  try {
    const inserted = await userCollection.insertOne(user);
    return inserted;
  } catch (error) {
    return null;
  }
};


export {insertUser}