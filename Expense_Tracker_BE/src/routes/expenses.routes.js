import express from "express";
import { addExpense, getExpenses } from "../controllers/expenses.controller.js";
import { validateExpense } from "../validations/expenses.validation.js";

const router = express.Router();

router.get("/expenses", getExpenses);
router.post("/add-expense", validateExpense, addExpense);

export default router;
