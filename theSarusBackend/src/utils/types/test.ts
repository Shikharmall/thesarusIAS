import mongoose from "mongoose";

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