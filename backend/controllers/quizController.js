import Quiz from '../models/Quiz.js';

// @desc Get all quizzes for a document
// @route GET /api/quizzes/:documentId
// @access Private
export const getQuizzes = async (req, res, next) => {
    try {
        const quizzes = await Quiz.find({
            userId: req.user._id,
            documentId: req.params.documentId,
        })
            .populate('documentId', 'title fileName')
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: quizzes.length,
            data: quizzes,
        });
    } catch (error) {
        next(error);
    }
}; 

// @desc Get a single quiz by ID
// @route GET /api/quizzes/quiz/:id
// @access Private
export const getQuizById = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error);
    }
};

// @desc Submit quiz answers
// @route POST /api/quizzes/:id/submit
// @access Private
export const submitQuiz = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error);
    }
};

// @desc Get quiz results
// @route GET /api/quizzes/:id/results
// @access Private
export const getQuizResults = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error);
    }
};

// @desc Delete a quiz
// @route DELETE /api/quizzes/:id
// @access Private
export const deleteQuiz = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error);
    }
};