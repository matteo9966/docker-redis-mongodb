import * as postModel from "../../jsdoc-models.js";
import { postsCollection } from "../../db/post.model.js";
import { RequestHandler } from "express";
import { responseBodyFactory } from "../../utils/responseBodyFactory.js";
/**
 * @type {RequestHandler}
 */
export const getAllPosts = async (req, res, next) => {
  try {
    const posts = await postsCollection.find({}).toArray();
    const responseBody = responseBodyFactory(200, { posts });
    res.status(200);
    res.json(responseBody);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.end();
  }
};
