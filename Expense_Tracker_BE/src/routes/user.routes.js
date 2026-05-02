import express from "express";
import { loginUser } from "../controllers/users.controller.js";
import { validateUser } from "../validations/users.validation.js";

const router = express.Router();

router.post("/login", validateUser, loginUser);

export default router;
