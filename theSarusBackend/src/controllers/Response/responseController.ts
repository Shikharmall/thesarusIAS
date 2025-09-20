// responseController.ts
import { Request, Response as ExResponse } from "express";
import mongoose from "mongoose";
import ResponseModel, { IAnswer } from "../../models/Response/responseModel";

// ---------------- Add user response ----------------
export const addResponseToUser = async (req: Request, res: ExResponse) => {
  try {
    const { userId, examId, responses } = req.body as {
      userId: string;
      examId: string;
      responses: IAnswer[];
    };

    if (!userId || !examId || !responses?.length) {
      return res.status(400).json({ status: "failed", message: "Invalid data" });
    }

    // Convert to ObjectId if necessary
    const userObjectId = new mongoose.Types.ObjectId(userId);
    const examObjectId = new mongoose.Types.ObjectId(examId);

    // Upsert response document for user + exam
    const responseData = await ResponseModel.findOneAndUpdate(
      { userId: userObjectId, examId: examObjectId },
      {
        $setOnInsert: { userId: userObjectId, examId: examObjectId, startedAt: new Date() },
        $push: { responses: { $each: responses } },
      },
      { upsert: true, new: true }
    ).lean();

    return res.status(201).json({ status: "success", data: responseData });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

// ---------------- Fetch user responses for an exam ----------------
export const getUserResponse = async (req: Request, res: ExResponse) => {
  try {
    const userId = req.query.userId as string;
    const examId = req.query.examId as string;

    if (!userId || !examId) {
      return res.status(400).json({ status: "failed", message: "Missing parameters" });
    }

    const userObjectId = new mongoose.Types.ObjectId(userId);
    const examObjectId = new mongoose.Types.ObjectId(examId);

    const responseData = await ResponseModel.findOne({ userId: userObjectId, examId: examObjectId })
      .select("responses score submittedAt startedAt")
      .lean();

    if (!responseData) {
      return res.status(404).json({ status: "failed", message: "Response not found" });
    }

    return res.status(200).json({ status: "success", data: responseData });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};
