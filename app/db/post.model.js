import { createCollection } from "./mongo";
import { ObjectId } from "mongodb";
import * as updateBody from "../jsdoc-models/requestBodies/updatePostById.request.js";
const postsCollection = createCollection("posts");

const findPostById = async (/**@type {string}*/ id) => {
  try {
    const result = await postsCollection.findOne({ _id: new ObjectId(id) });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const updatePostById = async (
  /**@type {updateBody.UbdateByIdRequestBody} */ data
) => {
  const { id, ...body } = data;
  try {
    return postsCollection.findOneAndUpdate(
      { _id: new ObjectId(data.id) },
      body
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { postsCollection, findPostById, updatePostById };
