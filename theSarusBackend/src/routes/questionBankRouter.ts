import express, { Router } from "express";
import { addQuestionBank, getQuestionBankByID, getQuestionBanks, updateQuestionBank } from "../controllers/QuestionBank/questionBankController";
import { authMiddleware } from "../middleware/authMiddleware"; // optional, if you require auth

const questionRouter: Router = express.Router();

// ---------------- Add multiple questions ----------------
// Protected route
questionRouter.post("/add", addQuestionBank); //authMiddleware,

// ---------------- Get all questions with optional filters ----------------
questionRouter.get("/all", getQuestionBanks);

// ---------------- Get a single question by ID ----------------
questionRouter.get("/details", getQuestionBankByID);

// ---------------- Update a question by ID ----------------
// Protected route
questionRouter.put("/update", authMiddleware, updateQuestionBank);

export default questionRouter;
