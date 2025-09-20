import { Request, Response } from "express";
import QuestionBank from "../../models/QuestionBank/questionBankModel";
import { AuthRequest } from "../../middleware/authMiddleware";

// ---------------- Create Question Bank ----------------
export const createQuestionBank = async (req: AuthRequest, res: Response) => {
  try {
    const { name, image, language, isPublished } = req.body;

    if (!name || !language) {
      return res.status(400).json({ status: "failed", message: "Name and language are required" });
    }

    const questionBank = await QuestionBank.create({
      name,
      image,
      language,
      isPublished: isPublished ?? false,
      totalQuestions: {
        easy: 0,
        moderate: 0,
        hard: 0
      },
      createdBy: req.user?._id, // from AuthRequest
      // createdBy: "68cea111ddadb572267f5b2b", // from AuthRequest
    });

    return res.status(201).json({ status: "success", data: questionBank });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

// ---------------- Get All Question Banks ----------------
export const getAllQuestionBanks = async (_req: Request, res: Response) => {
  try {
    const banks = await QuestionBank.find().sort({ createdAt: -1 }).lean();
    return res.status(200).json({ status: "success", data: banks });
  } catch (error: any) {
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

// ---------------- Get Single Question Bank ----------------
export const getQuestionBankById = async (req: Request, res: Response) => {
  try {
    const { bank_id } = req.params; // ✅ use params

    if (!bank_id) {
      return res.status(400).json({ status: "failed", message: "Bank ID is required" });
    }

    const bank = await QuestionBank.findById(bank_id).lean();

    if (!bank) {
      return res.status(404).json({ status: "failed", message: "Question bank not found" });
    }

    return res.status(200).json({ status: "success", data: bank });
  } catch (error: any) {
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

// ---------------- Update Question Bank ----------------
export const updateQuestionBank = async (req: Request, res: Response) => {
  try {
    const { bank_id } = req.params;
    const { name, image, language, isPublished, totalQuestions } = req.body;

    if (!bank_id) {
      return res.status(400).json({ status: "failed", message: "Bank ID is required" });
    }

    const updated = await QuestionBank.findByIdAndUpdate(
      bank_id,
      { $set: { name, image, language, isPublished, totalQuestions } },
      { new: true, runValidators: true }
    ).lean();

    if (!updated) {
      return res.status(404).json({ status: "failed", message: "Question bank not found" });
    }

    return res.status(200).json({ status: "success", data: updated });
  } catch (error: any) {
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

// ---------------- Delete Question Bank ----------------
export const deleteQuestionBank = async (req: Request, res: Response) => {
  try {
    const { bank_id } = req.params;

    if (!bank_id) {
      return res.status(400).json({ status: "failed", message: "Bank ID is required" });
    }

    const deleted = await QuestionBank.findByIdAndDelete(bank_id);

    if (!deleted) {
      return res.status(404).json({ status: "failed", message: "Question bank not found" });
    }

    return res.status(200).json({ status: "success", message: "Question bank deleted successfully" });
  } catch (error: any) {
    return res.status(500).json({ status: "failed", message: error.message });
  }
};
