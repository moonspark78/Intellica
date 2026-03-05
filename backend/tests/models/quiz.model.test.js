// tests/models/quiz.model.test.js
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import Quiz from '../../models/Quiz.js';

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
  await Quiz.deleteMany();
});

describe('Quiz Model', () => {

  test('doit créer un quiz valide', async () => {
    const quiz = new Quiz({
      userId: new mongoose.Types.ObjectId(),
      documentId: new mongoose.Types.ObjectId(),
      title: 'Test Quiz',
      questions: [
        { question: 'Q1', options: ['A','B','C','D'], correctAnswer: 'A' }
      ],
      totalQuestions: 1
    });

    const savedQuiz = await quiz.save();

    expect(savedQuiz._id).toBeDefined();
    expect(savedQuiz.questions.length).toBe(1);
    expect(savedQuiz.questions[0].difficulty).toBe('medium'); // valeur par défaut
  });

  test('doit échouer si questions n’ont pas 4 options', async () => {
    const quiz = new Quiz({
      userId: new mongoose.Types.ObjectId(),
      documentId: new mongoose.Types.ObjectId(),
      title: 'Bad Quiz',
      questions: [{ question: 'Q1', options: ['A','B'], correctAnswer: 'A' }],
      totalQuestions: 1
    });

    let err;
    try {
      await quiz.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors['questions.0.options']).toBeDefined();
  });

});