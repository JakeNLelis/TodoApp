import { createError } from "../config/error.js";
import { connectToDb } from "../config/connect.js";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";

const TOKEN_EXPIRE = "24h";
const createToken = (userId) =>
  jwt.sign({ id: userId }, process.env.JWT, { expiresIn: TOKEN_EXPIRE });

export async function register(req, res, next) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return next(createError(400, "Missing Fields"));
  }
  if (!validator.isEmail(email)) {
    return next(createError(400, "Invalid Email"));
  }
  if (
    !validator.isStrongPassword(password, {
      minLength: 8,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
  ) {
    return next(createError(400, "Weak Password"));
  }
  try {
    if (await User.exists({ email }))
      return next(createError(409, "Email is already used."));
    const salt = bcrypt.genSaltSync(10);
    const hash = await bcrypt.hash(password, salt);
    const newUser = await User.create({ name, email, password: hash });
    const token = createToken(newUser._id);
    res.status(201).json({
      message: "User created successfully",
      success: true,
      token,
      user: { id: newUser._id, name: newUser.name, email: newUser.email },
    });
  } catch (error) {
    console.log(error);
    return next(createError(500, "Server Error"));
  }
}

export async function login(req, res, next) {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(createError(400, "Missing Fields"));
  }
  try {
    const user = await User.findOne({ email: email });
    if (!user) return next(createError(401, "Wrong email or password!"));
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong email or password!"));
    const token = createToken(user._id);
    res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      })
      .status(200)
      .json({
        success: true,
        token,
        user: { id: user._id, name: user.name, email: user.email },
        message: "Logged in!",
      });
  } catch (error) {
    console.log(error);
    return next(createError(500, "Server Error"));
  }
}

export async function getCurrentUser(req, res, next) {
  try {
    const user = await User.findById(req.user.id).select("name email");
    if (!user) return next(createError(400, "User not found"));
    res.json({
      success: true,
      user: { name: user.name, email: user.email },
      message: "User Returned!",
    });
  } catch (error) {
    console.log(error);
    return next(createError(500, "Server Error"));
  }
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

export async function updateProfile(req, res, next) {
  const { name, email } = req.body;
  if (!name || !email || !validator.isEmail(email)) {
    return next(createError(400, "Valid name and email required"));
  }
  try {
    const exist = await User.findOne({ email, _id: { $ne: req.user.id } });
    if (exist) return next(createError(409, "Email is already used."));
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { name, email },
      { new: true, runValidators: true, select: "name email" }
    );
    res.json({ success: true, message: "Profile updated successfully", user });
  } catch (error) {
    console.log(error);
    return next(createError(500, "Server Error"));
  }
}

export async function updatePassword(req, res, next) {
  const { currentPassword, newPassword } = req.body;
  if (
    !currentPassword ||
    !newPassword ||
    !validator.isStrongPassword(password, {
      minLength: 8,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
  ) {
    return next(createError(400, "Password Invalid"));
  }

  try {
    const user = await User.findById(req.user.id).select("password");
    if (!user) {
      return next(createError(404, "User not found!"));
    }
    const match = await bcrypt.compare(currentPassword, user.password);
    if (!match) return next(createError(401, "Current Password incorrect"));
    const salt = bcrypt.genSaltSync(10);
    user.password = await bcrypt.hash(newPassword, salt);
    await user.save();
    res.json({ success: true, message: "Password changed!" });
  } catch (error) {
    console.log(error);
    return next(createError(500, "Server Error"));
  }
}
