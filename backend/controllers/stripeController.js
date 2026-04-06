// controllers/stripeController.js
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // Ta clé privée dans .env

export const createCheckoutSession = async (req, res) => {
  const { plan, billing } = req.body;

  // 🔹 Mappe tes plans aux IDs Stripe (remplace par tes vrais price IDs)
  const priceIdMap = {
    pro: {
      monthly: 'price_1XXXXXXX_monthly',
      yearly: 'price_1XXXXXXX_yearly',
    },
    premium: {
      monthly: 'price_1YYYYYYY_monthly',
      yearly: 'price_1YYYYYYY_yearly',
    },
  };

  const priceId = priceIdMap[plan]?.[billing];
  if (!priceId) return res.status(400).json({ error: 'Invalid plan or billing type' });

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription', // ou 'payment' si paiement unique
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.CLIENT_URL}/pricing?success=true`,
      cancel_url: `${process.env.CLIENT_URL}/pricing?canceled=true`,
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error('Stripe error:', error);
    res.status(500).json({ error: 'Something went wrong with Stripe' });
  }
};