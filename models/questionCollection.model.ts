// src/models/v1/questionCollection.model.ts
import mongoose from 'mongoose';

export default interface QuestionCollection {
  id: string | mongoose.Types.ObjectId;
  sessionId: string | mongoose.Types.ObjectId;
  questionsIds: string[] | mongoose.Types.ObjectId[];
  title?: string;
  description?: string;
}
