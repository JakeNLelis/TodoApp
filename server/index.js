import express from "express";
import bodyParser from "body-parser";
import AuthRoute from "./routes/auth.js";
import TodoRoute from "./routes/todo.js";
import dotenv from "dotenv";

const app = express();
const PORT = 3000;

dotenv.config();
app.use(bodyParser.json());
app.use("/api/user", AuthRoute);
app.use("/api/todos", TodoRoute);

//Global error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({ error: message });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
