import { findPostById } from "../../db/post.model.js";
import * as express from "express";
import { responseBodyFactory } from "../../utils/responseBodyFactory.js";
// import * as gb from "../../jsdoc-models/requestBodies/getPost.request.js";
import { CustomServerError } from "../../errors/CustomServerErrror.js";
/**
 * @type {express.RequestHandler}
 */
export async function getPostById(req, res, next) {

  if (!req.params.id) {
    throw new CustomServerError("missing id!", 400);
  }
  const result = await findPostById(req.params.id);
  if (!result) {
    throw new CustomServerError("error while finding your post", 404);
  }
  const responseBody = responseBodyFactory(200, result);
  res.status(200);
  res.json(responseBody);
}
