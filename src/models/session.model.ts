// src/models/v1/session.model.ts
import mongoose from 'mongoose';

export default interface Session {
  id: string | mongoose.Types.ObjectId;
  ownerId: string | mongoose.Types.UUID;
  questionsId?: string[] | mongoose.Types.ObjectId[];
  participantsId?: string[] | mongoose.Types.ObjectId[];
  sessionName?: string;
  sessionDescription?: string;
  sessionCode: string;
  originalSessionCode: string;
  questionCollectionIds?: string[] | mongoose.Types.ObjectId[];
  isActive?: boolean;
  allowAnonymous: boolean;
}
