import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import client from "./src/config/DB.js";
import expenseRoutes from "./src/routes/expenses.routes.js";
import userRoutes from "./src/routes/user.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/api", expenseRoutes);
app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`server is running on the port ${port}`);
});
