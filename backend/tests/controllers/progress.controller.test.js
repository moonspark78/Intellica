import { jest } from '@jest/globals';
import { getDashboard } from '../../controllers/progressController.js';
import Document from '../../models/Document.js';
import Flashcard from '../../models/Flashcard.js';
import Quiz from '../../models/Quiz.js';

describe('Progress Controller', () => {

    const req = {
        user: { _id: '123' }
    };

    const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    };

    const next = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return dashboard statistics', async () => {

        // Mock counts
        Document.countDocuments = jest.fn()
            .mockResolvedValueOnce(5);

        Flashcard.countDocuments = jest.fn()
            .mockResolvedValueOnce(3);

        Quiz.countDocuments = jest.fn()
            .mockResolvedValueOnce(4)
            .mockResolvedValueOnce(2);

        // Mock flashcards
        Flashcard.find = jest.fn().mockResolvedValue([
            {
                cards: [
                    { reviewCount: 1, isStarred: true },
                    { reviewCount: 0, isStarred: false }
                ]
            }
        ]);

        // Mock quizzes
        Quiz.find = jest.fn()
            .mockResolvedValueOnce([
                { score: 80 },
                { score: 60 }
            ])
            .mockReturnValueOnce({
                sort: jest.fn().mockReturnThis(),
                limit: jest.fn().mockReturnThis(),
                populate: jest.fn().mockReturnThis(),
                select: jest.fn().mockResolvedValue([])
            });

        // Mock documents
        Document.find = jest.fn().mockReturnValue({
            sort: jest.fn().mockReturnThis(),
            limit: jest.fn().mockReturnThis(),
            select: jest.fn().mockResolvedValue([])
        });

        await getDashboard(req, res, next);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalled();

    });

});