import express, { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware"; // optional, if you require auth
import { createQuestionBank, deleteQuestionBank, getAllQuestionBanks, getQuestionBankById, updateQuestionBank } from "../controllers/QuestionBank/questionBankController";

const questionRouter: Router = express.Router();

// ---------------- Add multiple questions ----------------
// Protected route
questionRouter.post("/create", createQuestionBank); //authMiddleware,

// ---------------- Get all questions with optional filters ----------------
questionRouter.get("/all", getAllQuestionBanks);

// ---------------- Get a single question by ID ----------------
questionRouter.get("/details", getQuestionBankById);

// ---------------- Update a question by ID ----------------
// Protected route
questionRouter.put("/update", authMiddleware, updateQuestionBank);

// ---------------- Update a question by ID ----------------
// Protected route
questionRouter.delete("/delete", authMiddleware, deleteQuestionBank);

export default questionRouter;
