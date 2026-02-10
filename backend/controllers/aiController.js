import Document from '../models/Document.js';
import Flashcard from '../models/Flashcard.js';
import Quiz from '../models/Quiz.js';
import ChatMessage from '../models/ChatMessage.js';
import * as geminiService from '../utils/geminiServices.js';
import { findRelevantChunks } from '../utils/textChunker.js'
import { body } from 'express-validator';


// @desc      Generate flashcards from a document
// @route     POST /api/ai/generate-flashcards
// @access    Private
export const generateFlashcards = async (req, res, next) => {
    try {
        const { documentId, count = 10 } = req.body;

        if (!documentId) {
            return res.status(400).json({
                success: false,
                error: "Please provide documentId",
                statusCode: 400
            })
        }
        const document = await Document.findOne({
            _id: documentId,
            userId: req.user._id
            
        });
    } catch (error) {
        next(error);
    }
};

// @desc      Generate a quiz from a document
// @route     POST /api/ai/generate-quiz
// @access    Private
export const generateQuiz = async (req, res, next) => {};


// @desc      Generate document summary
// @route     POST /api/ai/generate-summary
// @access    Private
export const generateSummary = async (req, res, next) => {};

// @desc      Chat with document
// @route     POST /api/ai/chat
// @access    Private
export const chat = async (req, res, next) => {};


// @desc     Explain a concept from  document
// @route     POST /api/ai/explain-concept
// @access    Private
export const explainConcept = async (req, res, next) => {};


// @desc      Get chat history for a document
// @route     GET /api/ai/chat-history/:documentId
// @access    Private
export const getChatHistory = async (req, res, next) => {};