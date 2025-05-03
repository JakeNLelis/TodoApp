import express from "express";
import {
  register,
  login,
  logout,
  updateProfile,
  getCurrentUser,
  updatePassword,
  isAuthenticated,
  deleteAccount,
} from "../controllers/authController.js";
import authMiddleware from "../middlewares/auth.js";

const userRouter = express.Router();

//Public Links
userRouter.post("/login", login);
userRouter.post("/register", register);

//Private Links
userRouter.get("/me", authMiddleware, getCurrentUser);
userRouter.get("/is-auth", authMiddleware, isAuthenticated);
userRouter.put("/profile", authMiddleware, updateProfile);
userRouter.put("/password", authMiddleware, updatePassword);
userRouter.post("/delete", authMiddleware, deleteAccount);
userRouter.post("/logout", authMiddleware, logout);

export default userRouter;
