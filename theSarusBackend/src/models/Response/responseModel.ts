// responseModel.ts
import mongoose, { Schema, Document, Model } from "mongoose";

// -------------------- Interfaces --------------------
export interface IAnswer {
  questionId: mongoose.Types.ObjectId;
  selectedOption: string; // could also be ObjectId if options are separate documents
  timeTaken?: number; // in seconds
}

export interface IResponse extends Document {
  examId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  responses: IAnswer[];
  startedAt: Date;
  submittedAt?: Date;
  score: number;
  createdAt: Date;
  updatedAt: Date;
}

// -------------------- Schema --------------------
const responseSchema: Schema<IResponse> = new Schema(
  {
    examId: {
      type: Schema.Types.ObjectId,
      ref: "Exam",
      required: true,
      index: true, // optimize queries by exam
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true, // optimize queries by user
    },
    responses: [
      {
        questionId: {
          type: Schema.Types.ObjectId,
          ref: "Question",
          required: true,
        },
        selectedOption: {
          type: String,
          required: true,
        },
        timeTaken: {
          type: Number,
        },
      },
    ],
    startedAt: {
      type: Date,
      default: Date.now,
    },
    submittedAt: {
      type: Date,
    },
    score: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// Prevent duplicate responses for same exam + user
responseSchema.index({ examId: 1, userId: 1 }, { unique: true });

// -------------------- Model --------------------
const Response: Model<IResponse> = mongoose.model<IResponse>("Response", responseSchema);

export default Response;
