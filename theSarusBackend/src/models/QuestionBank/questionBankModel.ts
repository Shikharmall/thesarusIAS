import mongoose, { Schema, Document, Model, Types } from "mongoose";
import { IQuestionBank } from "../../utils/types/questionBank";

// -------------------- Schema --------------------
const questionBankSchema: Schema<IQuestionBank> = new Schema(
  {
    image: { type: String, trim: true },
    name: { type: String, required: true, trim: true, index: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    totalQuestions: {
      easy: { type: Number, default: 0 },
      moderate: { type: Number, default: 0 },
      hard: { type: Number, default: 0 },
    },
    language: { type: String, default: "English", index: true },
    isPublished: { type: Boolean, default: false, index: true },
  },
  { timestamps: true }
);

// Optional: unique index for name per user
questionBankSchema.index({ name: 1, createdBy: 1 }, { unique: true });

// -------------------- Model --------------------
const QuestionBank: Model<IQuestionBank> = mongoose.model<IQuestionBank>(
  "QuestionBank",
  questionBankSchema
);

export default QuestionBank;
