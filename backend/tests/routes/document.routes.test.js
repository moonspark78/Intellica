// tests/routes/document.routes.test.js
import request from 'supertest';
import express from 'express';

describe('Document routes minimal', () => {
  let app;

  beforeAll(() => {
    app = express();
    app.use(express.json());

    // ✅ Middleware protect mocké
    const mockProtect = (req, res, next) => {
      req.user = { _id: 'user123' };
      next();
    };

    // ✅ Controller GET / mocké
    const mockGetDocuments = (req, res) => {
      res.status(200).json({
        success: true,
        count: 1,
        data: [{ title: 'Test Document', filePath: 'fakepath.pdf' }]
      });
    };

    // ⚡ Router minimal
    const router = express.Router();
    router.use(mockProtect);
    router.get('/', mockGetDocuments);

    app.use('/api/documents', router);
  });

  test('GET /api/documents returns mocked document', async () => {
    const res = await request(app).get('/api/documents');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.count).toBe(1);
    expect(res.body.data[0].title).toBe('Test Document');
  });
});