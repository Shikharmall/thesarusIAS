// testModel.ts
import mongoose, { Schema, Document, Model } from "mongoose";

// -------------------- Interfaces --------------------
export interface ITest extends Document {
    name: string;
    description?: string;
    questionBank: mongoose.Types.ObjectId;
    questions: mongoose.Types.ObjectId[];
    duration: number; // in minutes
    totalMarks: number;
    negativeMarking: number;
    createdBy: mongoose.Types.ObjectId;
    startTime: Date;
    endTime: Date;
    isPublished: boolean;
    language: string;
    createdAt: Date;
    updatedAt: Date;
}

// -------------------- Schema --------------------
const testSchema: Schema<ITest> = new Schema(
    {
        name: { type: String, required: true, trim: true },
        description: { type: String, trim: true },
        questionBank: { type: Schema.Types.ObjectId, ref: "QuestionBank", required: true, index: true },
        questions: [
            { type: Schema.Types.ObjectId, ref: "Question", required: true }
        ],
        duration: { type: Number, required: true },
        totalMarks: { type: Number, required: true },
        negativeMarking: { type: Number, default: 0 },
        createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
        startTime: { type: Date, required: true },
        endTime: { type: Date, required: true },
        isPublished: { type: Boolean, default: false, index: true },
        language: { type: String, default: "English", trim: true },
    },
    { timestamps: true }
);

// Compound index for fast filtering by creator + publication status
testSchema.index({ createdBy: 1, isPublished: 1 }, { background: true });

// -------------------- Model --------------------
const Test: Model<ITest> = mongoose.model<ITest>("Test", testSchema);

export default Test;
