import mongoose from "mongoose";
import { use } from "react";

const flashcardSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    documentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Document',
        required: true
    },
    cards:[
        {
            question: { type: String, required: true },
            answer: { type: String, required: true },
            difficulty: {
                type: String,
                enum: ['easy', 'medium', 'hard'],
                default: 'medium',
            },
            lastReviewed: {
                type: Date,
                default: null
            }
        }
    ]
});