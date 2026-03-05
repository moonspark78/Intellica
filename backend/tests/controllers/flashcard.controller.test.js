import { jest } from '@jest/globals'

const mockFind = jest.fn()

jest.unstable_mockModule('../../models/Flashcard.js', () => ({
    default: {
        find: mockFind
    }
}))

const { getFlashcards } = await import('../../controllers/flashcardController.js')

describe("Flashcard Controller", () => {

    test("return flashcards", async () => {

        mockFind.mockReturnValue({
            populate: () => ({
                sort: () => Promise.resolve([])
            })
        })

        const req = {
            user: { _id: "123" },
            params: { documentId: "doc1" }
        }

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }

        const next = jest.fn()

        await getFlashcards(req, res, next)

        expect(res.status).toHaveBeenCalledWith(200)

    })

})