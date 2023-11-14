import express from "express";
import { router } from "../routes/router.js";
const app = express();

//config the middleware here;
app.set("view engine", "ejs");
app.set('views', './app/views')
app.use(express.json());
app.use(express.static("public"));

function startServer(port) {
  // app.get("/", (req, res) => {
  //   res.send("This is the server!");
  //   res.end();
  // });
  app.use(router())
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

export { startServer };
