import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodo,
  updateTodo,
} from "../controllers/todoController.js";

const todoRouter = express.Router();

todoRouter
  .route("/")
  .get(authMiddleware, getAllTodos)
  .post(authMiddleware, createTodo);

todoRouter
  .route("/:id")
  .get(authMiddleware, getTodo)
  .put(authMiddleware, updateTodo)
  .delete(authMiddleware, deleteTodo);

export default todoRouter;
