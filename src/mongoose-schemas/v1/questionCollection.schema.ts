// src/mongoose-schemas/v1/questionCollection.schema.ts
import mongoose, { Schema } from 'mongoose';
import QuestionCollection from '../../models/questionCollection.model';

const questionCollectionSchema = new mongoose.Schema<QuestionCollection & mongoose.Document>(
  {
    sessionId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    questionsIds: {
      type: [Schema.Types.ObjectId],
      required: false,
    },
    title: {
      type: String,
      default: '',
      required: false,
    },
    description: {
      type: String,
      default: '',
      required: false,
    },
  },
  { timestamps: true }
);

const QuestionCollectionModel = mongoose.model<QuestionCollection & mongoose.Document>(
  'QuestionCollection',
  questionCollectionSchema
);

export default QuestionCollectionModel;
