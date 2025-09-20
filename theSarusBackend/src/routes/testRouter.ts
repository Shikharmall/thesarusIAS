import express, { Router } from "express";
import {
    createTest,
    getAllTests,
    getTestByID,
    updateTest,
    deleteTest,
} from "../controllers/Test/testController";
import { authMiddleware } from "../middleware/authMiddleware"; // optional, if you require auth

const testRouter: Router = express.Router();

// ---------------- Create a Test ----------------
// Protected route
testRouter.post("/create", authMiddleware, createTest);

// ---------------- Get all Tests ----------------
testRouter.get("/all", getAllTests);

// ---------------- Get a Test by ID ----------------
testRouter.get("/details", getTestByID);

// ---------------- Update a Test ----------------
// Protected route
testRouter.put("/update", authMiddleware, updateTest);

// ---------------- Delete a Test ----------------
// Protected route
testRouter.delete("/delete", authMiddleware, deleteTest);

export default testRouter;
