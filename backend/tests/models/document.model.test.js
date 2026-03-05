import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import Document from '../../models/Document.js';

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

afterEach(async () => {
  await Document.deleteMany(); // Nettoyer après chaque test
});

describe('Document Model', () => {

  test('doit créer un document valide', async () => {
    const doc = new Document({
      userId: new mongoose.Types.ObjectId(),
      title: 'Test Document',
      fileName: 'test.pdf',
      filePath: '/uploads/test.pdf',
      fileSize: 12345,
      chunks: [{ content: 'page 1', chunkIndex: 0 }]
    });

    const savedDoc = await doc.save();

    expect(savedDoc._id).toBeDefined();
    expect(savedDoc.title).toBe('Test Document');
    expect(savedDoc.status).toBe('processing'); // valeur par défaut
  });

  test('doit échouer si title manquant', async () => {
    const doc = new Document({
      userId: new mongoose.Types.ObjectId(),
      fileName: 'test.pdf',
      filePath: '/uploads/test.pdf',
      fileSize: 12345,
      chunks: [{ content: 'page 1', chunkIndex: 0 }]
    });

    let err;
    try {
      await doc.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.title).toBeDefined();
  });

});