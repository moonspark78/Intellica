// tests/models/chatHistory.model.test.js
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import ChatHistory from '../../models/ChatHistory.js';

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
  await ChatHistory.deleteMany();
});

describe('ChatHistory Model', () => {

  test('doit créer un chatHistory valide', async () => {
    const chat = new ChatHistory({
      userId: new mongoose.Types.ObjectId(),
      documentId: new mongoose.Types.ObjectId(),
      messages: [
        { role: 'user', content: 'Hello' },
        { role: 'assistant', content: 'Hi there!' }
      ]
    });

    const savedChat = await chat.save();

    expect(savedChat._id).toBeDefined();
    expect(savedChat.messages.length).toBe(2);
    expect(savedChat.messages[0].role).toBe('user');
    expect(savedChat.messages[1].role).toBe('assistant');
  });

  test('doit échouer si message sans role', async () => {
    const chat = new ChatHistory({
      userId: new mongoose.Types.ObjectId(),
      documentId: new mongoose.Types.ObjectId(),
      messages: [{ content: 'Hello' }]
    });

    let err;
    try {
      await chat.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors['messages.0.role']).toBeDefined();
  });

});