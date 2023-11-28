import { insertUser } from "../controllers/userControllers/insertUser.controller.js";
import { loginUser } from "../controllers/userControllers/loginUser.controller.js";
import { config } from "../../config/config.js";
import { Router } from "express";
import { errorWrapper } from "../utils/errorWrapper.js";
const userRouter = Router();

userRouter.post(config.routes.users.children.signup, errorWrapper(insertUser));
userRouter.post(config.routes.users.children.login, errorWrapper(loginUser));

export { userRouter };
