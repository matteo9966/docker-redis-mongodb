import { insertPost as insertPostModel } from "../../db/post.model.js";
import express from "express";
import { responseBodyFactory } from "../../utils/responseBodyFactory.js";
import * as gb from "../../jsdoc-models/requestBodies/insertPost.request.js";
import { CustomServerError } from "../../errors/CustomServerErrror.js";

/**
 * @type {express.RequestHandler}
 */
export const insertPost = async (req, res, next) => {
  /**@type {gb.InsertPostRequestBody} */ const body = req.body;
  if (!body?.body || !body?.title) {
    throw new CustomServerError("missing body or title for post", 400);
  }
  const result = await insertPostModel(body);
  if (result) {
    res.json(responseBodyFactory(200, { success: true }));
  } else {
    res.status(500);
    res.end();
  }
};
