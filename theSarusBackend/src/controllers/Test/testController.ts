// testController.ts
import { Request, Response } from "express";
import mongoose from "mongoose";
import Test, { ITest } from "../../models/Test/testModel";

// Extend Express Request to include `user`
declare global {
    namespace Express {
        interface Request {
            user?: { _id: string }; // can be IUser if needed
        }
    }
}

// -------------------- Create Test --------------------
export const createTest = async (req: Request, res: Response) => {
    try {
        const {
            name,
            description,
            questionBank,
            questions,
            duration,
            totalMarks,
            negativeMarking,
            startTime,
            endTime,
            isPublished,
            language,
        } = req.body;

        if (!req.user?._id)
            return res.status(401).json({ status: "failed", message: "Unauthorized" });

        const newTest = new Test({
            name,
            description,
            questionBank: new mongoose.Types.ObjectId(questionBank),
            questions: (questions || []).map((q: string) => new mongoose.Types.ObjectId(q)),
            duration,
            totalMarks,
            negativeMarking: negativeMarking || 0,
            createdBy: new mongoose.Types.ObjectId(req.user._id),
            startTime,
            endTime,
            isPublished: isPublished ?? false,
            language: language ?? "English",
        });

        const savedTest = await newTest.save();
        return res.status(201).json({ status: "success", data: savedTest });
    } catch (error: any) {
        console.error(error);
        return res.status(500).json({ status: "failed", message: error.message });
    }
};

// -------------------- Get All Tests --------------------
export const getAllTests = async (req: Request, res: Response) => {
    try {
        const { createdBy, isPublished, language } = req.query;

        const filter: any = {};
        if (createdBy) filter.createdBy = new mongoose.Types.ObjectId(createdBy as string);
        if (isPublished) filter.isPublished = isPublished === "true";
        if (language && language !== "all") filter.language = language;

        const tests = await Test.find(filter).sort({ createdAt: -1 }).lean();
        return res.status(200).json({ status: "success", data: tests });
    } catch (error: any) {
        console.error(error);
        return res.status(500).json({ status: "failed", message: error.message });
    }
};

// -------------------- Get Test by ID --------------------
export const getTestByID = async (req: Request, res: Response) => {
    try {
        const { testId } = req.query;
        if (!testId) return res.status(400).json({ status: "failed", message: "testId is required" });

        const test = await Test.findById(testId as string).lean();
        if (!test) return res.status(404).json({ status: "failed", message: "Test not found" });

        return res.status(200).json({ status: "success", data: test });
    } catch (error: any) {
        console.error(error);
        return res.status(500).json({ status: "failed", message: error.message });
    }
};

// -------------------- Update Test --------------------
export const updateTest = async (req: Request, res: Response) => {
    try {
        const { testId } = req.query;
        const updateData = req.body;

        if (!testId) return res.status(400).json({ status: "failed", message: "testId is required" });

        // Convert string IDs to ObjectId if necessary
        if (updateData.questionBank)
            updateData.questionBank = new mongoose.Types.ObjectId(updateData.questionBank);
        if (updateData.questions)
            updateData.questions = updateData.questions.map((q: string) => new mongoose.Types.ObjectId(q));

        const updatedTest = await Test.findByIdAndUpdate(testId as string, updateData, {
            new: true,
            runValidators: true,
        }).lean();

        if (!updatedTest) return res.status(404).json({ status: "failed", message: "Test not found" });

        return res.status(200).json({ status: "success", data: updatedTest });
    } catch (error: any) {
        console.error(error);
        return res.status(500).json({ status: "failed", message: error.message });
    }
};

// -------------------- Delete Test --------------------
export const deleteTest = async (req: Request, res: Response) => {
    try {
        const { testId } = req.query;
        if (!testId) return res.status(400).json({ status: "failed", message: "testId is required" });

        const deletedTest = await Test.findByIdAndDelete(testId as string).lean();
        if (!deletedTest) return res.status(404).json({ status: "failed", message: "Test not found" });

        return res.status(200).json({ status: "success", message: "Test deleted successfully" });
    } catch (error: any) {
        console.error(error);
        return res.status(500).json({ status: "failed", message: error.message });
    }
};
