import { CustomServerError } from "../../errors/CustomServerErrror.js";
import express from "express";
import * as user from "../../jsdoc-models/user.model.js";
import { insertUser as insertUserInDB } from "../../db/user.model.js";
import { responseBodyFactory } from "../../utils/responseBodyFactory.js";
import { hashPassword } from "../../utils/argon.js";
/**
 *
 * @type {express.RequestHandler}
 */
export const insertUser = async (req, res, next) => {
  /**@type {user.User}*/ const body = req.body;
  if (!body.password || !body.username) {
    throw new CustomServerError(400, "missing password or username");
  }
  const hashedP = await hashPassword(body.password);
  /**@type {user.User}*/ const userToInsert = {
    password: hashedP,
    username: body.username,
  };
  const result = await insertUserInDB(userToInsert);
  if (result) {
    res.json(responseBodyFactory(200, { id: result.insertedId.toString() }));
    req.session.user = userToInsert
  } else {
    throw new CustomServerError("error while inserting new user", 500);
  }
};
