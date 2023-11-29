import express from "express";
// import { router } from "../routes/router.js";
import { router as postsRouter } from "../routes/postRouter.js";
import { userRouter } from "../routes/userRouter.js";
import { config } from "../../config/config.js";
import cors from "cors";
import { addRedisMiddleWare } from "../redis/store.js";
const app = express();

//config the middleware here;
app.set("view engine", "ejs");
app.set("views", "./app/views");
app.enable("trust proxy");
app.use(express.json());
app.use(express.static("public"));
app.use(cors());
addRedisMiddleWare(app); //INIT REDIS
function startServer(port) {
  app.get(config.routes.base, (req, res) => {
    res.send(
      "<h1>This is the server!</h1>" +
        "<br>" +
        new Date().toLocaleString() +
        " " +
        ""
    );
    res.end();
  });
  // app.use(router())
  app.use(config.routes.base + config.routes.posts.base, postsRouter);
  app.use(config.routes.base + config.routes.users.base, userRouter);

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

export { startServer };
