import express from "express";
import {
  register,
  login,
  logout,
  updateProfile,
  getCurrentUser,
  updatePassword,
} from "../controllers/auth.js";
import authMiddleware from "../middlewares/auth.js";

const userRouter = express.Router();

//Public Links
userRouter.post("/login", login);
userRouter.post("/register", register);

//Private Links
userRouter.get("/me", authMiddleware, getCurrentUser);
userRouter.put("/profile", authMiddleware, updateProfile);
userRouter.put("/password", authMiddleware, updatePassword);
userRouter.post("/logout", authMiddleware, logout);

export default userRouter;
