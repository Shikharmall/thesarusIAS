// questionModel.ts
import mongoose, { Schema, Document, Model } from "mongoose";

// -------------------- Interfaces --------------------
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

// -------------------- Schema --------------------
const questionSchema: Schema<IQuestion> = new Schema(
  {
    questionBank: {
      type: Schema.Types.ObjectId,
      ref: "QuestionBank",
      required: true,
      index: true, // quickly get all questions in a bank
    },
    question: {
      type: String,
      required: true,
      trim: true,
    },
    options: [
      {
        label: {
          type: String,
          required: true,
          trim: true,
        },
        isCorrect: {
          type: Boolean,
          default: false,
        },
      },
    ],
    solution: {
      type: String,
      trim: true,
    },
    difficulty: {
      type: String,
      enum: ["easy", "moderate", "hard"],
      required: true,
      index: true,
    },
    language: {
      type: String,
      required: true,
      index: true,
    }
  },
  { timestamps: true }
);

// Compound index for queries by bank + difficulty + language
questionSchema.index({ questionBank: 1, difficulty: 1, language: 1 }, { background: true });

// -------------------- Model --------------------
const Question: Model<IQuestion> = mongoose.model<IQuestion>("Question", questionSchema);

export default Question;
