import mongoose from "mongoose";
import { use } from "react";

const flashcardSchema = new mongoose.Schema({
    userId: {},
    documentId: {},
    cards:[
        {},
    ]
});