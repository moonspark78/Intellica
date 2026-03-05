import { jest } from '@jest/globals'

// Mocks
const mockFindOne = jest.fn()
const mockFindById = jest.fn()
const mockCreate = jest.fn()
const mockSave = jest.fn()
const mockMatchPassword = jest.fn()

// Mock User model
jest.unstable_mockModule('../../models/User.js', () => ({
    default: {
        findOne: mockFindOne,
        findById: mockFindById,
        create: mockCreate
    }
}))

// Mock jwt - VERSION CORRECTE POUR COMMONJS
jest.unstable_mockModule('jsonwebtoken', () => ({
    __esModule: true,
    default: {
        sign: jest.fn().mockReturnValue('fake-token-123')
    }
}))

// Importer le contrôleur
const authController = await import('../../controllers/authController.js')
const register = authController.register
const login = authController.login
const getProfile = authController.getProfile
const updateProfile = authController.updateProfile
const changePassword = authController.changePassword

describe("Auth Controller", () => {
    let req, res, next

    beforeEach(() => {
        jest.clearAllMocks()
        
        req = {
            body: {},
            user: { _id: "507f1f77bcf86cd799439011" }
        }
        
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }
        
        next = jest.fn()
        
        process.env.JWT_SECRET = 'test-secret'
        process.env.JWT_EXPIRES_IN = '7d'
    })

    // REGISTER TESTS
    describe("register", () => {
        test("should register a new user successfully", async () => {
            req.body = {
                username: "omar",
                email: "omar@test.com",
                password: "password123"
            }

            mockFindOne.mockResolvedValue(null)
            
            const mockUser = {
                _id: "user123",
                username: "omar",
                email: "omar@test.com",
                profileImage: null,
                createdAt: new Date(),
                save: mockSave
            }
            mockCreate.mockResolvedValue(mockUser)

            await register(req, res, next)

            expect(res.status).toHaveBeenCalledWith(201)
        })

        test("should return 400 if email already exists", async () => {
            req.body = {
                username: "omar",
                email: "existing@test.com",
                password: "123456"
            }

            mockFindOne.mockResolvedValue({ email: "existing@test.com" })

            await register(req, res, next)

            expect(res.status).toHaveBeenCalledWith(400)
        })

        test("should call next with error on exception", async () => {
            req.body = {
                username: "omar",
                email: "omar@test.com",
                password: "123456"
            }

            mockFindOne.mockRejectedValue(new Error("Database error"))

            await register(req, res, next)

            expect(next).toHaveBeenCalled()
        })
    })

    // LOGIN TESTS
    describe("login", () => {
        test("should login user successfully", async () => {
            req.body = {
                email: "omar@test.com",
                password: "correctpassword"
            }

            const mockUser = {
                _id: "user123",
                username: "omar",
                email: "omar@test.com",
                profileImage: null,
                matchPassword: mockMatchPassword
            }

            const selectFn = jest.fn().mockResolvedValue(mockUser)
            mockFindOne.mockReturnValue({ select: selectFn })
            mockMatchPassword.mockResolvedValue(true)

            await login(req, res, next)

            expect(res.status).toHaveBeenCalledWith(200)
        })

        test("should return 400 if email or password missing", async () => {
            req.body = { email: "omar@test.com" }

            await login(req, res, next)

            expect(res.status).toHaveBeenCalledWith(400)
        })

        test("should return 401 if user not found", async () => {
            req.body = {
                email: "omar@test.com",
                password: "password123"
            }

            const selectFn = jest.fn().mockResolvedValue(null)
            mockFindOne.mockReturnValue({ select: selectFn })

            await login(req, res, next)

            expect(res.status).toHaveBeenCalledWith(401)
        })

        test("should return 401 if password does not match", async () => {
            req.body = {
                email: "omar@test.com",
                password: "wrongpassword"
            }

            const mockUser = { matchPassword: mockMatchPassword }
            const selectFn = jest.fn().mockResolvedValue(mockUser)
            mockFindOne.mockReturnValue({ select: selectFn })
            mockMatchPassword.mockResolvedValue(false)

            await login(req, res, next)

            expect(res.status).toHaveBeenCalledWith(401)
        })

        test("should call next with error on exception", async () => {
            req.body = {
                email: "omar@test.com",
                password: "password123"
            }

            const selectFn = jest.fn().mockRejectedValue(new Error("Database error"))
            mockFindOne.mockReturnValue({ select: selectFn })

            await login(req, res, next)

            expect(next).toHaveBeenCalled()
        })
    })

    // GET PROFILE TESTS
    describe("getProfile", () => {
        test("should return user profile", async () => {
            const mockUser = {
                _id: "507f1f77bcf86cd799439011",
                username: "omar",
                email: "omar@test.com",
                profileImage: "image.jpg",
                createdAt: new Date("2024-01-01"),
                updatedAt: new Date("2024-01-02")
            }

            mockFindById.mockResolvedValue(mockUser)

            await getProfile(req, res, next)

            expect(res.status).toHaveBeenCalledWith(200)
        })

        test("should call next with error on exception", async () => {
            mockFindById.mockRejectedValue(new Error("Database error"))

            await getProfile(req, res, next)

            expect(next).toHaveBeenCalled()
        })
    })

    // UPDATE PROFILE TESTS
    describe("updateProfile", () => {
        test("should update user profile successfully", async () => {
            req.body = {
                username: "omar_updated",
                email: "omar_updated@test.com",
                profileImage: "new-image.jpg"
            }

            const mockUser = {
                _id: "507f1f77bcf86cd799439011",
                username: "omar",
                email: "omar@test.com",
                profileImage: "old-image.jpg",
                save: mockSave.mockResolvedValue(true)
            }

            mockFindById.mockResolvedValue(mockUser)

            await updateProfile(req, res, next)

            expect(res.status).toHaveBeenCalledWith(200)
        })

        test("should update only provided fields", async () => {
            req.body = { username: "omar_updated" }

            const mockUser = {
                _id: "507f1f77bcf86cd799439011",
                username: "omar",
                email: "omar@test.com",
                profileImage: "old-image.jpg",
                save: mockSave.mockResolvedValue(true)
            }

            mockFindById.mockResolvedValue(mockUser)

            await updateProfile(req, res, next)

            expect(res.status).toHaveBeenCalledWith(200)
        })

        test("should call next with error on exception", async () => {
            req.body = { username: "omar_updated" }
            mockFindById.mockRejectedValue(new Error("Database error"))

            await updateProfile(req, res, next)

            expect(next).toHaveBeenCalled()
        })
    })

    // CHANGE PASSWORD TESTS
    describe("changePassword", () => {
        test("should change password successfully", async () => {
            req.body = {
                currentPassword: "oldPassword123!",
                newPassword: "NewPassword123!@#"
            }

            const mockUser = {
                _id: "507f1f77bcf86cd799439011",
                password: "hashedOldPassword",
                matchPassword: mockMatchPassword,
                save: mockSave.mockResolvedValue(true)
            }

            const selectFn = jest.fn().mockResolvedValue(mockUser)
            mockFindById.mockReturnValue({ select: selectFn })
            mockMatchPassword.mockResolvedValue(true)

            await changePassword(req, res, next)

            expect(res.status).toHaveBeenCalledWith(200)
        })

        test("should return 400 if passwords missing", async () => {
            req.body = { currentPassword: "oldPassword123!" }

            await changePassword(req, res, next)

            expect(res.status).toHaveBeenCalledWith(400)
        })

        test("should return 401 if current password is incorrect", async () => {
            req.body = {
                currentPassword: "wrongPassword123!",
                newPassword: "NewPassword123!@#"
            }

            const mockUser = { matchPassword: mockMatchPassword }
            const selectFn = jest.fn().mockResolvedValue(mockUser)
            mockFindById.mockReturnValue({ select: selectFn })
            mockMatchPassword.mockResolvedValue(false)

            await changePassword(req, res, next)

            expect(res.status).toHaveBeenCalledWith(401)
        })

        test("should return 400 if new password does not meet requirements", async () => {
            req.body = {
                currentPassword: "oldPassword123!",
                newPassword: "weak"
            }

            const mockUser = { matchPassword: mockMatchPassword }
            const selectFn = jest.fn().mockResolvedValue(mockUser)
            mockFindById.mockReturnValue({ select: selectFn })
            mockMatchPassword.mockResolvedValue(true)

            await changePassword(req, res, next)

            expect(res.status).toHaveBeenCalledWith(400)
        })

        test("should call next with error on exception", async () => {
            req.body = {
                currentPassword: "oldPassword123!",
                newPassword: "NewPassword123!@#"
            }

            const selectFn = jest.fn().mockRejectedValue(new Error("Database error"))
            mockFindById.mockReturnValue({ select: selectFn })

            await changePassword(req, res, next)

            expect(next).toHaveBeenCalled()
        })
    })
})