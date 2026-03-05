import { jest } from '@jest/globals'

const mockFindOne = jest.fn()

jest.unstable_mockModule('../../models/User.js', () => ({
    default: {
        findOne: mockFindOne
    }
}))

const { register } = await import('../../controllers/authController.js')

describe("Auth Controller", () => {

    test("user déjà existant", async () => {

        mockFindOne.mockResolvedValue({ email: "test@test.com" })

        const req = {
            body: {
                username: "omar",
                email: "test@test.com",
                password: "123456"
            }
        }

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }

        const next = jest.fn()

        await register(req, res, next)

        expect(res.status).toHaveBeenCalledWith(400)

    })

})