import { jest } from "@jest/globals"

const mockAggregate = jest.fn()

jest.unstable_mockModule("../../models/Document.js", () => ({
  default: {
    aggregate: mockAggregate
  }
}))

const { getDocuments } = await import("../../controllers/documentController.js")

describe("Document Controller", () => {

  const req = {
    user: { _id: "507f1f77bcf86cd799439011" } // ObjectId valide
  }

  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
  }

  const next = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test("should return documents", async () => {

    mockAggregate.mockResolvedValue([
      { title: "doc1" }
    ])

    await getDocuments(req, res, next)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalled()

  })

})