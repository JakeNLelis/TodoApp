import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import userRouter from "../routes/auth.js";
import cookieParser from "cookie-parser";

dotenv.config();
const configureExpress = (app) => {
  app.use(express.json());
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  app.use("/api/user", userRouter);
};

export { configureExpress };
