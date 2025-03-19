import { createError } from "../utils.js/error.js";
import { connectToDb } from "../utils.js/connect.js";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function register(req, res, next) {
  const data = req.body;
  if (!data?.email || !data?.password) {
    return next(createError(400, "Missing Fields"));
  }
  await connectToDb();
  const alreadyRegistered = await User.exists({ email: data.email });
  if (alreadyRegistered)
    return next(createError(400, "Email is already used."));

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  const newUser = new User({ ...req.body, password: hash });
  await newUser.save();
  res.status(201).json("User created successfully!");
}

export async function login(req, res, next) {
  const data = req.body;
  if (!data?.email || !data?.password) {
    return next(createError(400, "Missing Fields"));
  }
  await connectToDb();
  const user = await User.findOne({ email: req.body.email });
  if (!user) return next(createError(400, "Wrong email or password!"));
  const isPasswordCorrect = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!isPasswordCorrect)
    return next(createError(400, "Wrong email or password!"));
  const token = jwt.sign({ id: user._id }, process.env.JWT);
  console.log(token);
  res
    .cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    })
    .status(200)
    .json("Logged in!");
}

export async function logout(req, res, next) {
  res
    .clearCookie("access_token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    })
    .status(200)
    .json({ message: "Logged out successfully" });
}
