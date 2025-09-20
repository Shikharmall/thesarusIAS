import express, { Router } from "express";

import userRouter from "./userRouter";
import testRouter from "./testRouter";           // if you have a testRouter
import questionBankRouter from "./questionBankRouter"; // if you have a questionBankRouter
import questionRouter from "./questionRouter"; // if you have a questionBankRouter
import responseRouter from "./responseRouter";     // if you have a responseRouter

const router: Router = express.Router();

router.use("/users", userRouter);
router.use("/tests", testRouter);
router.use("/questionBanks", questionBankRouter);
router.use("/questions", questionRouter);
router.use("/responses", responseRouter);

// Optional: Health check route
router.get("/health", (_req, res) => res.status(200).json({ status: "success", message: "API is running" }));

export default router;
