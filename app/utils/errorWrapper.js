import { CustomServerError } from "../errors/CustomServerErrror.js";
import { responseBodyFactory } from "./responseBodyFactory.js";

export const errorWrapper = (controller) => {
  return async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      console.log(error);
      if (error instanceof CustomServerError) {
        res.status(error.status);
        res.json(responseBodyFactory(error.status, { error: error.message }));
      } else {
        res.status(500);
        res.end();
      }
    }
  };
};
