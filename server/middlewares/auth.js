import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import { createError } from "../config/error.js";

export default async function authMiddleware(req, res, next) {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "Not authorized, token missing"));
  }

  try {
    const payload = jwt.verify(token, process.env.JWT);
    const user = await User.findById(payload.id).select("-password");

    if (!user) {
      return next(createError(401, "User not found"));
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("JWT verification failed", error);
    return next(createError(401, "Token invalid or expired"));
  }
}
