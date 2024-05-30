// src/mongoose-schemas/v1/session.schema.ts
import mongoose, { Schema } from 'mongoose';
import Session from '../../models/session.model';

const sessionSchema = new mongoose.Schema<Session & mongoose.Document>(
  {
    ownerId: {
      type: Schema.Types.UUID,
      required: true,
    },
    questionsId: {
      type: [Schema.Types.ObjectId],
      required: false,
    },
    participantsId: {
      type: [Schema.Types.ObjectId],
      required: false,
    },
    sessionName: {
      type: String,
      default: 'Session Name',
      required: false,
    },
    sessionDescription: {
      type: String,
      default: 'Session Description',
      required: false,
    },
    sessionCode: {
      type: Schema.Types.String,
      required: false,
    },
    originalSessionCode: {
      type: Schema.Types.String,
      required: false,
    },
    questionCollectionIds: {
      type: [Schema.Types.ObjectId],
      required: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    allowAnonymous: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const SessionModel = mongoose.model<Session & mongoose.Document>('Session', sessionSchema);

export default SessionModel;
