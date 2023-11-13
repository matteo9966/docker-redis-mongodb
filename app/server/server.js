import express from "express";

const app = express();

//config the middleware here;
app.use(express.json());

function startServer(port) {
  app.get("/", (req, res) => {
    res.send("This is the server!");
    res.end();
  });
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

export { startServer };
