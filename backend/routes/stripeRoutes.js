// routes/stripeRoutes.js
import express from 'express';
import { createCheckoutSession } from '../controllers/stripeController.js';

const router = express.Router();

// POST /api/stripe/checkout
router.post('/checkout', createCheckoutSession);

export default router;