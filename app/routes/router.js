import { Router } from "express";

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
