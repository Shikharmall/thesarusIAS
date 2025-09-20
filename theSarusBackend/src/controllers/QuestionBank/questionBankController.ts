// questionBankController.ts
import { Request, Response } from "express";
import QuestionBank, { IQuestionBank } from "../../models/QuestionBank/questionBankModel";

// Extend Express Request to include `user` (set by auth middleware)
interface AuthRequest extends Request {
  user?: {
    _id: string; // or mongoose.Types.ObjectId
  };
}

// ---------------- Types for input ----------------
interface QuestionInput {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  level: "easy" | "moderate" | "hard";
  language: string;
}

interface AddQuestionBankBody {
  questions: QuestionInput[];
}

interface UpdateQuestionBankBody {
  name?: string;
  language?: string;
  isPublished?: boolean;
}

// ---------------- Add multiple question banks ----------------
export const addQuestionBank = async (req: AuthRequest, res: Response) => {
  try {
    const { questions } = req.body as AddQuestionBankBody;

    if (!questions || !questions.length) {
      return res.status(400).json({ status: "failed", message: "Please add some questions" });
    }

    const userId = req.user?._id;
    if (!userId) {
      return res.status(401).json({ status: "failed", message: "Unauthorized" });
    }

    // Prepare QuestionBank documents
    const docs = questions.map((q) => ({
      name: q.question,
      totalQuestions: { easy: 0, moderate: 0, hard: 0 },
      language: q.language,
      isPublished: false,
      image: undefined,
      createdBy: userId,
    }));

    await QuestionBank.insertMany(docs, { ordered: false });

    return res.status(201).json({ status: "success", message: "Questions added successfully" });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

// ---------------- Get all question banks with optional filtering ----------------
export const getQuestionBanks = async (req: Request, res: Response) => {
  try {
    const { language } = req.query as { language?: string };
    const query: Record<string, any> = {};

    if (language && language !== "all") query.language = language;

    const questionBanks = await QuestionBank.find(query).lean();

    return res.status(200).json({ status: "success", data: questionBanks });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

// ---------------- Get a single question bank by ID ----------------
export const getQuestionBankByID = async (req: Request, res: Response) => {
  try {
    const { question_id } = req.query as { question_id?: string };

    if (!question_id) {
      return res.status(400).json({ status: "failed", message: "Question ID is required" });
    }

    const questionBank = await QuestionBank.findById(question_id).lean();

    if (!questionBank) {
      return res.status(404).json({ status: "failed", message: "Question not found" });
    }

    return res.status(200).json({ status: "success", data: questionBank });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

// ---------------- Update question bank by ID ----------------
export const updateQuestionBank = async (req: Request, res: Response) => {
  try {
    const { question_id } = req.query as { question_id?: string };
    const { name, language, isPublished } = req.body as UpdateQuestionBankBody;

    if (!question_id) {
      return res.status(400).json({ status: "failed", message: "Question ID is required" });
    }

    const updated = await QuestionBank.findByIdAndUpdate(
      question_id,
      { $set: { name, language, isPublished } },
      { new: true, runValidators: true }
    ).lean();

    if (!updated) {
      return res.status(404).json({ status: "failed", message: "Question not found" });
    }

    return res.status(200).json({ status: "success", data: updated });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};
