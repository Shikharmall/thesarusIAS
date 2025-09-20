import mongoose from "mongoose";

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