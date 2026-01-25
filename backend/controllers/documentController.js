import  Document  from "../models/Document.js";
import  Flashcard from '../models/Flashcard';
import Quiz from '../models/Quiz';
import {extractTextFromPDF} from '../utils/pdfParser.js';
import {chunkText} from '../utils/textChunker.js';
import fs from 'fs/promises';
import mongoose from "mongoose";


// @desc   Upload PDF document
// @route  POST /api/documents/upload
// @access Private
export const uploadDocument = async (req, res, next) => {
    try {} catch (error) {}
};