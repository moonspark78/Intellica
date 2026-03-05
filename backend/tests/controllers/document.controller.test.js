import { jest } from "@jest/globals"

const mockAggregate = jest.fn()
const mockFindOne = jest.fn()
const mockCreate = jest.fn()
const mockFindByIdAndUpdate = jest.fn()

const mockCountDocuments = jest.fn()
const mockUnlink = jest.fn()

// MOCK DOCUMENT MODEL
jest.unstable_mockModule("../../models/Document.js", () => ({
  default: {
    aggregate: mockAggregate,
    findOne: mockFindOne,
    create: mockCreate,
    findByIdAndUpdate: mockFindByIdAndUpdate
  }
}))

// MOCK FLASHCARD MODEL
jest.unstable_mockModule("../../models/Flashcard.js", () => ({
  default: {
    countDocuments: mockCountDocuments
  }
}))

// MOCK QUIZ MODEL
jest.unstable_mockModule("../../models/Quiz.js", () => ({
  default: {
    countDocuments: mockCountDocuments
  }
}))

// MOCK FS
jest.unstable_mockModule("fs/promises", () => ({
  default: {
    unlink: mockUnlink,
    readFile: jest.fn()
  }
}))

// MOCK PDF PARSER
jest.unstable_mockModule("../../utils/pdfParser.js", () => ({
  extractTextFromPDF: jest.fn().mockResolvedValue({
    text: "sample text"
  })
}))

// MOCK TEXT CHUNKER
jest.unstable_mockModule("../../utils/textChunker.js", () => ({
  chunkText: jest.fn().mockReturnValue(["chunk1", "chunk2"])
}))

const {
  getDocuments,
  getDocument,
  deleteDocument,
  uploadDocument
} = await import("../../controllers/documentController.js")

describe("Document Controller", () => {

  let req
  let res
  let next

  beforeEach(() => {

    jest.clearAllMocks()

    req = {
      user: { _id: "507f1f77bcf86cd799439011", id: "507f1f77bcf86cd799439011" },
      params: { id: "507f1f77bcf86cd799439011" },
      body: { title: "Test Document" },
      file: {
        path: "test.pdf",
        filename: "test.pdf",
        originalname: "test.pdf",
        size: 1234
      }
    }

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }

    next = jest.fn()
  })

  // ======================
  // GET DOCUMENTS
  // ======================

  test("getDocuments should return documents", async () => {

    mockAggregate.mockResolvedValue([
      { title: "doc1" }
    ])

    await getDocuments(req, res, next)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalled()
  })


  // ======================
  // GET DOCUMENT
  // ======================

  test("getDocument should return a document", async () => {

    const mockDoc = {
      _id: "507f1f77bcf86cd799439011",
      title: "doc",
      save: jest.fn(),
      toObject: () => ({ title: "doc" })
    }

    mockFindOne.mockResolvedValue(mockDoc)
    mockCountDocuments.mockResolvedValue(2)

    await getDocument(req, res, next)

    expect(mockFindOne).toHaveBeenCalled()
    expect(res.status).toHaveBeenCalledWith(200)
  })


  test("getDocument should return 404 if document not found", async () => {

    mockFindOne.mockResolvedValue(null)

    await getDocument(req, res, next)

    expect(res.status).toHaveBeenCalledWith(404)
  })


  // ======================
  // DELETE DOCUMENT
  // ======================

  test("deleteDocument should delete a document", async () => {

    const mockDoc = {
      filePath: "http://localhost:8000/uploads/documents/test.pdf",
      deleteOne: jest.fn().mockResolvedValue(true)
    }

    mockFindOne.mockResolvedValue(mockDoc)
    mockUnlink.mockResolvedValue()

    await deleteDocument(req, res, next)

    expect(mockFindOne).toHaveBeenCalledWith({
      _id: req.params.id,
      userId: req.user._id
    })
    expect(mockUnlink).toHaveBeenCalledWith("http://localhost:8000/uploads/documents/test.pdf")
    expect(mockDoc.deleteOne).toHaveBeenCalled()
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: "Document deleted successfully."
    })
  })


  test("deleteDocument should return 404 if document not found", async () => {

    mockFindOne.mockResolvedValue(null)

    await deleteDocument(req, res, next)

    expect(res.status).toHaveBeenCalledWith(404)
  })


  // ======================
  // UPLOAD DOCUMENT
  // ======================

  test("uploadDocument should create document", async () => {

    mockCreate.mockResolvedValue({
      _id: "123",
      title: "Test Document"
    })

    await uploadDocument(req, res, next)

    expect(mockCreate).toHaveBeenCalled()
    expect(res.status).toHaveBeenCalledWith(201)
  })


  test("uploadDocument should fail if no file", async () => {

    req.file = null

    await uploadDocument(req, res, next)

    expect(res.status).toHaveBeenCalledWith(400)
  })


  test("uploadDocument should fail if no title", async () => {

    req.body.title = null

    await uploadDocument(req, res, next)

    expect(mockUnlink).toHaveBeenCalled()
    expect(res.status).toHaveBeenCalledWith(400)
  })

})