import { Request, Response } from "express";
import Question from "../../models/QuestionBank/questionModel";
import { AuthRequest } from "../../middleware/authMiddleware";
import { QuestionInput } from "../../utils/types/questionBank";

// ---------------- Add multiple questions ----------------
export const addQuestions = async (req: AuthRequest, res: Response) => {
  try {
    const { questions } = req.body as { questions: QuestionInput[] };

    if (!questions || !questions.length) {
      return res.status(400).json({ status: "failed", message: "Please provide questions" });
    }

    const docs = questions.map((q) => ({
      questionBank: q.questionBankId,
      question: q.question,
      options: [
        { label: q.option1, isCorrect: true },
        { label: q.option2 },
        { label: q.option3 },
        { label: q.option4 },
      ],
      difficulty: q.level,
      language: q.language,
    }));

    await Question.insertMany(docs, { ordered: false });

    return res.status(201).json({ status: "success", message: "Questions added successfully" });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

// ---------------- Get questions with optional filters ----------------
export const getQuestions = async (req: Request, res: Response) => {
  try {
    const { language, difficulty, questionBankId } = req.query as {
      language?: string;
      difficulty?: string;
      questionBankId?: string;
    };

    const query: Record<string, any> = {};

    if (language && language !== "all") query.language = language;
    if (difficulty && difficulty !== "all") query.difficulty = difficulty;
    if (questionBankId) query.questionBank = questionBankId;

    const questions = await Question.find(query).lean();

    return res.status(200).json({ status: "success", data: questions });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

// ---------------- Get a single question by ID ----------------
export const getQuestionByID = async (req: Request, res: Response) => {
  try {
    const { question_id } = req.query as { question_id?: string };

    if (!question_id) {
      return res.status(400).json({ status: "failed", message: "Question ID is required" });
    }

    const question = await Question.findById(question_id).lean();

    if (!question) {
      return res.status(404).json({ status: "failed", message: "Question not found" });
    }

    return res.status(200).json({ status: "success", data: question });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

// ---------------- Update question by ID ----------------
export const updateQuestion = async (req: Request, res: Response) => {
  try {
    const { question_id } = req.query as { question_id?: string };
    const { question, option1, option2, option3, option4, level, language } = req.body as QuestionInput;

    if (!question_id) {
      return res.status(400).json({ status: "failed", message: "Question ID is required" });
    }

    const updated = await Question.findByIdAndUpdate(
      question_id,
      {
        $set: {
          question,
          options: [
            { label: option1, isCorrect: true },
            { label: option2 },
            { label: option3 },
            { label: option4 },
          ],
          difficulty: level,
          language,
        },
      },
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
