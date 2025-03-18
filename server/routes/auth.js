import express from "express";

const router = express.Router();

router.post("/login", (req, res, next) => {
  res.send("Login route");
});

router.post("/register", (req, res, next) => {
  res.send("Register route");
});

router.post("/logout", (req, res, next) => {
  res.send("Logout route");
});

export default router;
