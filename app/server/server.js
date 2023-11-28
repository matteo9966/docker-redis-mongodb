import express from "express";
// import { router } from "../routes/router.js";
import { router as postsRouter } from "../routes/postRouter.js";
import { userRouter } from "../routes/userRouter.js";
import { config } from "../../config/config.js";
import {addRedisMiddleWare} from '../redis/store.js';
const app = express();

//config the middleware here;
app.set("view engine", "ejs");
app.set("views", "./app/views");
app.use(express.json());
app.use(express.static("public"));
addRedisMiddleWare(app); //INIT REDIS
function startServer(port) {
  app.get("/", (req, res) => {
    res.send("This is the server!"+" "+ new Date().toLocaleString());
    res.end();
  });
  // app.use(router())
  app.use(config.routes.posts.base, postsRouter);
  app.use(config.routes.users.base, userRouter);

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

export { startServer };
