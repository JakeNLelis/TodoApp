import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import userRouter from "../routes/authRoute.js";
import cookieParser from "cookie-parser";
import todoRouter from "../routes/todoRoute.js";

dotenv.config();
const configureExpress = (app) => {
  app.use(express.json());
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));

  app.use("/api/user", userRouter);
  app.use("/api/todo", todoRouter);
};

export { configureExpress };
