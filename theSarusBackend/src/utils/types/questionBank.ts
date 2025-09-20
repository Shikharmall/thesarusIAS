import mongoose, { Types } from "mongoose";

export interface ITotalQuestions {
  easy: number;
  moderate: number;
  hard: number;
}

export interface IQuestionBank extends Document {
  _id: Types.ObjectId;
  image?: string;
  name: string;
  createdBy: Types.ObjectId;
  totalQuestions: ITotalQuestions;
  language: string;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IOption {
  label: string; // HTML allowed
  isCorrect?: boolean;
}

export interface IQuestion extends Document {
  questionBank: mongoose.Types.ObjectId;
  question: string;
  options: IOption[];
  solution?: string;
  difficulty: "easy" | "moderate" | "hard";
  language: string;
  createdAt: Date;
  updatedAt: Date;
}

// Extend Express Request to include `user` if needed
interface AuthRequest extends Request {
  user?: {
    _id: string;
  };
}

// ---------------- Types for input ----------------
export interface QuestionInput {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  level: "easy" | "moderate" | "hard";
  language: string;
  questionBankId: string;
}

export interface AddQuestionBankBody {
  questions: QuestionInput[];
}

export interface UpdateQuestionBankBody {
  name?: string;
  language?: string;
  isPublished?: boolean;
}