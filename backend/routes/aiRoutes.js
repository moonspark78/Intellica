import express from 'express';
import {
    generateFlashcards,
    generateQuiz,
    generateSummary,
    chat,
    explainConcept,
    getChatHistory
} from '../controllers/aiController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Protect all routes
router.use(protect);