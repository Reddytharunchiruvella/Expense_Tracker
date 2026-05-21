import express from "express";
import { loginUser, registerUser } from "../controllers/users.controller.js";
import {
  validateLoginUser,
  validateRegisterUser,
} from "../validations/users.validation.js";
import { saveSalaryController } from "../controllers/savesalary.controller.js";

const router = express.Router();

router.post("/login", validateLoginUser, loginUser);
router.post("/register", validateRegisterUser, registerUser);
router.post("/savesalary", saveSalaryController);

export default router;
