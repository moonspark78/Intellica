import { jest } from '@jest/globals';
import express from 'express';
import request from 'supertest';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// 1️⃣ Mock avant import
const mockFindOne = jest.fn();
const mockCreate = jest.fn();
const mockFindById = jest.fn();

await jest.unstable_mockModule('../../models/User.js', () => ({
  default: {
    findOne: mockFindOne,
    create: mockCreate,
    findById: mockFindById,
  },
}));

// 2️⃣ Import après le mock
const authRoutesModule = await import('../../routes/authRoutes.js');
const authRoutes = authRoutesModule.default;

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);

const testUserId = new mongoose.Types.ObjectId();
let token = jwt.sign(
  { id: testUserId.toString(), email: 'testuser@example.com' },
  process.env.JWT_SECRET,
  { expiresIn: '1h' }
);

describe('Auth Routes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('POST /register - succès', async () => {
    const mockUser = {
      _id: testUserId,
      username: 'testuser',
      email: 'testuser@example.com',
      save: jest.fn().mockResolvedValue(true)
    };

    mockFindOne.mockResolvedValue(null);
    mockCreate.mockResolvedValue(mockUser);

    const res = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'testuser',
        email: 'testuser@example.com',
        password: 'Password123!@#'
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.data).toHaveProperty('token');
    token = res.body.data.token;
  });
});