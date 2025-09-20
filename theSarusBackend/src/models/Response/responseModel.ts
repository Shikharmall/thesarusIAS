import mongoose, { Schema, Model } from "mongoose";
import { IResponse } from "../../utils/types/response";

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
