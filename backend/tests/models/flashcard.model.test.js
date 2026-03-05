// tests/models/flashcard.model.test.js
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import Flashcard from '../../models/Flashcard.js';

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
  await Flashcard.deleteMany();
});

describe('Flashcard Model', () => {

  test('doit créer un flashcard valide', async () => {
    const flashcard = new Flashcard({
      userId: new mongoose.Types.ObjectId(),
      documentId: new mongoose.Types.ObjectId(),
      cards: [
        { question: 'Q1', answer: 'A1', difficulty: 'easy' },
        { question: 'Q2', answer: 'A2' }
      ]
    });

    const savedFlashcard = await flashcard.save();

    expect(savedFlashcard._id).toBeDefined();
    expect(savedFlashcard.cards.length).toBe(2);
    expect(savedFlashcard.cards[0].difficulty).toBe('easy');
    expect(savedFlashcard.cards[1].difficulty).toBe('medium'); // valeur par défaut
  });

  test('doit échouer si card sans question', async () => {
    const flashcard = new Flashcard({
      userId: new mongoose.Types.ObjectId(),
      documentId: new mongoose.Types.ObjectId(),
      cards: [{ answer: 'A1' }]
    });

    let err;
    try {
      await flashcard.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors['cards.0.question']).toBeDefined();
  });

});