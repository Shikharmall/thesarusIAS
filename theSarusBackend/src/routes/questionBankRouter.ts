import express, { Router } from "express";
import {
  addQuestions,
  getQuestions,
  getQuestionByID,
  updateQuestion,
} from "../controllers/QuestionBank/questionController";
import { authMiddleware } from "../middleware/authMiddleware"; // optional, if you require auth

const questionRouter: Router = express.Router();

// ---------------- Add multiple questions ----------------
// Protected route
questionRouter.post("/add", authMiddleware, addQuestions);

// ---------------- Get all questions with optional filters ----------------
questionRouter.get("/all", getQuestions);

// ---------------- Get a single question by ID ----------------
questionRouter.get("/details", getQuestionByID);

// ---------------- Update a question by ID ----------------
// Protected route
questionRouter.put("/update", authMiddleware, updateQuestion);

export default questionRouter;
