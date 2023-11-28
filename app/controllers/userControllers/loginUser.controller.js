import { CustomServerError } from "../../errors/CustomServerErrror.js";
import express from "express";
import * as user from "../../jsdoc-models/user.model.js";
import { getUserByUsername } from "../../db/user.model.js";
import { responseBodyFactory } from "../../utils/responseBodyFactory.js";
import { verifyPassword } from "../../utils/argon.js";
/**
 *
 * @type {express.RequestHandler}
 */
export const loginUser = async (req, res, next) => {
  /**@type {user.User}*/ const body = req.body;
  if (!body.password || !body.username) {
    throw new CustomServerError(400, "missing password or username");
  }

  const dbUser = await getUserByUsername({
    password: body.password,
    username: body.username,
  });
  if (!dbUser) {
    throw new CustomServerError("invalid credentials", 401);
  }

  console.log({ dbPassword: dbUser?.password, bodyPassword: body.password });
  const validPassword = await verifyPassword(dbUser?.password, body.password);
  console.log({validPassword})
  if (!validPassword) {
    throw new CustomServerError("invalid credentials", 401);
  } else {
    req.session.user = dbUser
    res.status(200);
    const responseBody = responseBodyFactory(200, { success: true });
    res.json(responseBody);
  }
};
