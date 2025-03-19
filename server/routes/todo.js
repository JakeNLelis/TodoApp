import express from "express";
import {
  createTodo,
  deletTodo,
  getAllTodos,
  getTodo,
  updateTodo,
} from "../controllers/todo.js";

const router = express.Router();

router.get("/", getAllTodos);

router.get("/:id", getTodo);

router.post("/", createTodo);

router.put("/:id", updateTodo);

router.delete("/:id", deletTodo);

export default router;
