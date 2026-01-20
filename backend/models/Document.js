import mongoose from 'mongoose';

const documentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: [true, "Please provide a title for the document"],
        trim: true,
    },
    fileName: {
        
    },
    filePath: {},
});