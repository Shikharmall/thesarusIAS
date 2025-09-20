// questionController.ts
import { Request, Response } from "express"; // assuming you export IQuestion interface from model
import { IQuestion } from "../../models/QuestionBank/questionModel";

// ---------------- Add multiple questions at once ----------------
export const addQuestion = async (req: Request, res: Response) => {
  try {
    const questions: {
      question: string;
      option1: string;
      option2: string;
      option3: string;
      option4: string;
      level: string;
      language: string;
    }[] = req.body.questions;

    if (!questions || questions.length === 0) {
      return res.status(400).json({ status: "failed", message: "Please add some questions" });
    }

    const docs: Partial<IQuestion>[] = questions.map((q) => ({
      question: q.question,
      options: [
        { label: q.option1, isCorrect: true },
        { label: q.option2, isCorrect: false },
        { label: q.option3, isCorrect: false },
        { label: q.option4, isCorrect: false },
      ],
      difficulty: q.level,
      language: q.language,
    }));

    await Question.insertMany(docs, { ordered: false });

    return res.status(201).json({ status: "success", message: "Questions added successfully" });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ status: "failed", message: error.message });
  }
};

// ---------------- Get all questions with filtering ----------------
export const getQuestions = async (req: Request, res: Response) => {
  try {
    const language = req.query.language as string;
    const difficulty = req.query.difficulty as string;

    const query: Partial<IQuestion> = {};

    if (language && language !== "all") query.language = language;
    if (difficulty && difficulty !== "all") query.difficulty = difficulty;

    const questionsData = await Question.find(query).lean();

    return res.status(200).json({ status: "success", data: questionsData });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ status: "failed", message: error.message });
  }
};

// ---------------- Get a question by ID ----------------
export const getQuestionByID = async (req: Request, res: Response) => {
  try {
    const question_id = req.query.question_id as string;

    const questionData = await Question.findById(question_id).lean();
    if (!questionData) {
      return res.status(404).json({ status: "failed", message: "Question not found" });
    }

    return res.status(200).json({ status: "success", data: questionData });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ status: "failed", message: error.message });
  }
};

// ---------------- Update question by ID ----------------
export const updateQuestion = async (req: Request, res: Response) => {
  try {
    const question_id = req.query.question_id as string;
    const { question, option1, option2, option3, option4, level, language } = req.body;

    const updated = await Question.findByIdAndUpdate(
      question_id,
      {
        $set: {
          question,
          options: [
            { label: option1, isCorrect: true },
            { label: option2, isCorrect: false },
            { label: option3, isCorrect: false },
            { label: option4, isCorrect: false },
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
    res.status(500).json({ status: "failed", message: error.message });
  }
};
