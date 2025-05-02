import Todo from "../models/todoModel.js";
import { createError } from "../config/error.js";

export async function createTodo(req, res, next) {
  try {
    const { title, description, priority, dueDate, completed } = req.body;
    const todo = new Todo({
      owner: req.user.id,
      title,
      description,
      priority,
      dueDate,
      completed: completed === "Yes" || completed === true,
    });
    const saved = await todo.save();
    res.status(201).json({
      status: "success",
      task: saved,
    });
  } catch (error) {
    console.log(error);
    return next(createError(400, error.message));
  }
}

export async function getAllTodos(req, res, next) {
  try {
    const todos = await Todo.find({ owner: req.user.id }).sort({
      createdAt: -1,
    });
    res.json({
      status: true,
      tasks: todos,
    });
  } catch (error) {
    console.log(error);
    return next(createError(500, error.message));
  }
}

export async function getTodo(req, res, next) {
  try {
    const todo = await Todo.findById({
      _id: req.params.id,
      owner: req.user.id,
    });
    if (!todo) return next(createError(404, "Todo not found!"));
    res.status(200).json({
      success: true,
      task: todo,
    });
  } catch (error) {
    console.log(error);
    return next(createError(500, error.message));
  }
}

export async function updateTodo(req, res, next) {
  try {
    const data = { ...req.body };
    if (data.completed !== undefined) {
      data.completed = data.completed === "Yes" || data.completed === true;
    }

    const updated = await Todo.findByIdAndUpdate(
      { _id: req.params.id, owner: req.user.id },
      data,
      { new: true, runValidators: true }
    );

    if (!updated) return next(createError(404, "Todo not found!"));
    res.status(200).json({
      status: "success",
      task: updated,
    });
  } catch (error) {
    console.log(error);
    return next(createError(400, error.message));
  }
}

export async function deleteTodo(req, res, next) {
  try {
    const deleted = await Todo.findOneAndDelete({
      _id: req.params.id,
      owner: req.user.id,
    });
    if (!deleted) return next(createError(404, "Todo not found!"));
    res.status(200).json({
      status: "success",
      message: "Todo deleted successfully!",
    });
  } catch (error) {
    console.log(error);
    return next(createError(500, error.message));
  }
}
