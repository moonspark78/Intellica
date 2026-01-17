import mogoose from 'mongoose';

const quizSchema = new mogoose.Schema({
    userId: {
        type: mogoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    documentId: {
        type: mogoose.Schema.Types.ObjectId,
        ref: 'Document',
        required: true
    },
    title:{
        type: String,
        required: true
    },
});