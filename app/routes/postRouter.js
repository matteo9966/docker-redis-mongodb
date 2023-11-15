import { Router } from "express";
import { config } from "../../config/config.js";
import { errorWrapper } from "../utils/errorWrapper.js";
import { getPostById } from "../controllers/postControllers/getPostById.controller.js";
import { insertPost } from "../controllers/postControllers/insertPost.controller.js";
import { updatePost } from "../controllers/postControllers/updateById.controller.js";
import { getAllPosts } from "../controllers/postControllers/getAllPosts.controller.js";
const router = Router();

router.get(config.routes.posts.children.getPost, errorWrapper(getPostById));
router.get(config.routes.posts.children.getAllPosts,errorWrapper(getAllPosts))
router.post(config.routes.posts.children.insertPost, errorWrapper(insertPost));
// router.delete(config.routes.posts.children.deletePost,errorWrapper(dele))
router.patch(config.routes.posts.children.updatePost, errorWrapper(updatePost));

export { router };
