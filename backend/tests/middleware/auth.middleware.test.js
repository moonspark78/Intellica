import request from 'supertest';
import express from 'express';
import protect from '../../middleware/auth.js';

// App Express minimal pour tester le middleware
const app = express();

app.get('/protected', protect, (req, res) => {
    res.status(200).json({ success: true });
});

describe('Middleware protect', () => {

    test('❌ doit refuser l’accès si aucun token n’est fourni', async () => {
        const res = await request(app).get('/protected');

        expect(res.statusCode).toBe(401);
        expect(res.body.success).toBe(false);
        expect(res.body.error).toBe('Not authorized, no token');
    });

});

it('❌ doit refuser l’accès si le token est invalide', async () => {
  const response = await request(app)
    .get('/api/auth/profile')
    .set('Authorization', 'Bearer invalidtoken123');

  expect(response.status).toBe(401);
  expect(response.body.success).toBe(false);
});