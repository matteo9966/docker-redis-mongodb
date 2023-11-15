import { insertUser } from "../controllers/userControllers/insertUser.controller.js";
import { config } from "../../config/config.js";
import { Router } from "express";
import { errorWrapper } from "../utils/errorWrapper.js";
const userRouter = Router();

userRouter.post(config.routes.users.children.signup, errorWrapper(insertUser));

export {userRouter}