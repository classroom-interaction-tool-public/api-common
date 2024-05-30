// src/models/v1/question.model.ts
import mongoose from 'mongoose';

export default interface Question {
  id: string | mongoose.Types.ObjectId;
  questionCollectionId: string | mongoose.Types.ObjectId;
  title: string;
  description: string;
  questionData: {};
  metaInfo: {};
  timeLimit: number;
  timerStart: string;
}
