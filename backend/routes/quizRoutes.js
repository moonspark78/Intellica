import express from 'express';
import {
    getQuizzes,
    getQuizById,
    submitQuiz,
    getQuizResults,
    deleteQuiz,
} from '../controllers/quizController.js';

import protect from '../middleware/auth.js';

const router = express.Router();
