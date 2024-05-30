import mongoose, { Schema } from 'mongoose';
import Answer from '../../models/answer.model';

const answerSchema = new mongoose.Schema<Answer & mongoose.Document>(
  {
    ownerId: { type: Schema.Types.String, required: true },
    questionId: { type: Schema.Types.ObjectId, required: true },
    sessionId: { type: Schema.Types.ObjectId, required: true },
    content: { type: Schema.Types.Mixed, required: true },
  },
  { timestamps: true }
);

const AnswerModel = mongoose.model<Answer & mongoose.Document>('Answer', answerSchema);

export default AnswerModel;
