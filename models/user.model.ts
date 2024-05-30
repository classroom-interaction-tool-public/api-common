import mongoose from 'mongoose';

// src/models/v1/user.model.ts
export default interface User {
  id: string | mongoose.Types.ObjectId;
  email: string;
  passwordHash: string;
  role: string;
  sessionsId?: string[] | mongoose.Types.ObjectId[];
}
