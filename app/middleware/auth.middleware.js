import { CustomServerError } from "../errors/CustomServerErrror.js";

export const protectMiddleware = (req, res, next) => {
  const { user } = req.session;
  if (!user) {
    throw new CustomServerError("Unauthorized", 401);
  }
  next();
};
