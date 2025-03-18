import express from "express";
import AuthRoute from "./routes/auth.js";

const app = express();
const PORT = 3000;

app.use("/api/user", AuthRoute);

app.get("/", (req, res, next) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
