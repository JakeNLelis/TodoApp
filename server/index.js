import express from "express";
import { configureExpress } from "./config/express.js";
import { connectToDb } from "./config/connect.js";

const app = express();
const PORT = process.env.PORT || 3000;

connectToDb();
configureExpress(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
