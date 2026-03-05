// tests/models/user.model.test.js
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import User from '../../models/User.js';
import bcrypt from 'bcryptjs';

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
  await User.deleteMany();
});

describe('User Model', () => {

  test('doit créer un utilisateur valide', async () => {
    const user = new User({
      username: 'testuser',
      email: 'test@example.com',
      password: 'Abcd1234!@#$'  // valide avec majuscule, minuscule, chiffre, symbole
    });

    const savedUser = await user.save();

    expect(savedUser._id).toBeDefined();
    expect(savedUser.username).toBe('testuser');
    expect(savedUser.email).toBe('test@example.com');
    expect(savedUser.password).not.toBe('Abcd1234!@#$'); // hashé
  });

  test('doit échouer si email invalide', async () => {
    const user = new User({
      username: 'user2',
      email: 'invalidemail',
      password: 'Abcd1234!@#$'
    });

    let err;
    try {
      await user.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.email).toBeDefined();
  });

  test('méthode matchPassword fonctionne', async () => {
    const rawPassword = 'Abcd1234!@#$';
    const user = new User({
      username: 'user3',
      email: 'user3@example.com',
      password: rawPassword
    });
    await user.save();

    const foundUser = await User.findOne({ email: 'user3@example.com' }).select('+password');
    const isMatch = await foundUser.matchPassword(rawPassword);

    expect(isMatch).toBe(true);
    const isWrong = await foundUser.matchPassword('WrongPassword123!');
    expect(isWrong).toBe(false);
  });

});