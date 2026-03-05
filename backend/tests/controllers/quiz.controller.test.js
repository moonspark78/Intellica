import { jest } from '@jest/globals'

const mockFindOne = jest.fn()

jest.unstable_mockModule("../../models/Quiz.js", () => ({
    default: {
        findOne: mockFindOne
    }
}))

const { getQuizById, deleteQuiz } = await import("../../controllers/quizController.js")

describe("Quiz Controller", () => {

    const req = {
        params: { id: "quiz123" },
        user: { _id: "user123" }
    }

    const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    }

    const next = jest.fn()

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test("should return quiz", async () => {

        mockFindOne.mockResolvedValue({
            _id: "quiz123",
            title: "Quiz test"
        })

        await getQuizById(req, res, next)

        expect(res.status).toHaveBeenCalledWith(200)

    })

    test("should return 404 if quiz not found", async () => {

        mockFindOne.mockResolvedValue(null)

        await getQuizById(req, res, next)

        expect(res.status).toHaveBeenCalledWith(404)

    })

})