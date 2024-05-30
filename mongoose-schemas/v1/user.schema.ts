// src/mongoose-schemas/v1/user.schema.ts
import mongoose from 'mongoose';
import User from '../../models/user.model';

const userSchema = new mongoose.Schema<User & mongoose.Document>(
  {
    email: { type: String, required: true, match: /.+\@.+\..+/ },
    passwordHash: { type: String, required: true },
    role: { type: String, required: true, default: 'user' },
    sessionsId: [{ type: mongoose.Schema.ObjectId, required: false, default: [] }],
  },
  { timestamps: true }
);

const UserModel = mongoose.model<User & mongoose.Document>('User', userSchema);

export default UserModel;
