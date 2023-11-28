import { Router } from "express";
// import { router as postRouter } from "./postRouter";
export function router() {
  const router = Router();
  router.get("", (req, res, next) => {
    res.render("index");
  });

  router.all("/*", (req, res) => {
    res.redirect("");
  });

  return router;
}
