import Flashcard from "../models/Flashcard";


// @desc Get all flashcards for a document
// @route GET /api/flashcards/document/:documentId
// @access Private
export const getFlashcards = async (req, res, next) => {
    try{

    } catch (error) {
        next(error);
    }
};


// @desc Get all flashcard sets for the user
// @route GET /api/flashcards
// @access Private
export const getAllFlashcardsSets = async (req, res, next) => {
    
};

// @desc Mark flashcard as reviewed
// @route POST /api/flashcards/:cardId/review
// @access Private
export const reviewFlashcard = async (req, res, next) => {

}


// @desc Toggle star/favorite on flashcard
// @route PUT /api/flashcards/:cardId/star
// @access Private
export const toggleStarFlashcard = async (req, res, next) => {};


// @desc Delete a flashcard set
// @route DELETE /api/flashcards/:id
// @access Private
export const deleteFlashcardSet = async (req, res, next) => {};