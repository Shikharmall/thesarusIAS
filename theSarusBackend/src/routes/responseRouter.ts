import express, { Router } from "express";
import { addResponseToUser, getUserResponse } from "../controllers/Response/responseController";
import { authMiddleware } from "../middleware/authMiddleware";

const responseRouter: Router = express.Router();

// Add a user's response to an exam (protected route)
responseRouter.post("/add", authMiddleware, addResponseToUser);

// Get a user's responses for a specific exam (protected route)
responseRouter.get("/get", authMiddleware, getUserResponse);

export default responseRouter;
