// src/models/v1/answer.model.ts
import mongoose from 'mongoose';

export default interface Answer {
  id: string | mongoose.Types.ObjectId;
  ownerId: string;
  questionId: string | mongoose.Types.ObjectId;
  sessionId: string | mongoose.Types.ObjectId;
  content: {};
}
