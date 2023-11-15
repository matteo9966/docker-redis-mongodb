import { updatePostById } from "../../db/post.model.js";
import  express from "express";
import { responseBodyFactory } from "../../utils/responseBodyFactory.js";
import * as gb from "../../jsdoc-models/requestBodies/updatePostById.request.js";
import { CustomServerError } from "../../errors/CustomServerErrror.js";

/**
 * @type {express.RequestHandler}
 */
export const updatePost = async (req, res, next) => {
  /**@type {gb.UbdateByIdRequestBody}*/ const body = req.body;
  if (!body.id) {
    throw new CustomServerError("missing id", 400);
  }

  const result = await updatePostById(body);
  if (result._id) {
    res.json(responseBodyFactory(200, { success: true }));
  } else {
    res.status(500);
    res.end();
  }
};
