import mongoose from 'mongoose';
import Question from '../../models/question.model';

const questionSchema = new mongoose.Schema<Question & mongoose.Document>(
  {
    questionCollectionId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    questionData: {
      type: {},
      required: true,
    },
    metaInfo: {
      type: {},
      required: false,
    },
    timeLimit: {
      type: Number,
      required: false,
    },
    timerStart: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const QuestionModel = mongoose.model<Question & mongoose.Document>('Question', questionSchema);

export default QuestionModel;
