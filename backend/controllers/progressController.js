import Document from '../models/Document.js';
import Flashcard from '../models/Flashcard.js';
import Quiz from '../models/Quiz.js';

// @desc Get user learning statistics
// @route GET /api/progress/dashboard
// @access Private
export const getDashboard = async (req, res, next) => {
    try {
        const userId = req.user._id;

        // Get counts
        const totalDocuments = await Document.countDocuments({userId});
        const totalFlashcardSets = await Flashcard.countDocuments({userId});
        const totalQuizzes = await Quiz.countDocuments({userId});
        const completedQuizzes = await Quiz.countDocuments({userId, completedAt: {$ne: null}});

        // Get flashcard statistics
        const flashcardSets = await Flashcard.find({userId});
        let totalFlashcards = 0;
        let reviewedFlashcards = 0;
        let starredFlashcards = 0;

        flashcardSets.forEach(set => {
            totalFlashcards += set.cards.length;
            reviewedFlashcards += set.cards.filter(c => c.reviewCount > 0).length;
            starredFlashcards += set.cards.filter(c => c.isStarred).length;
        })
    } catch (error) {
        next(error);
    }
};