// controllers/stripeController.js
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckoutSession = async (req, res) => {
  const { plan, billing } = req.body;

  // Vos vrais Price IDs
  const priceIdMap = {
    pro: {
      monthly: 'price_1TJFDqPd57aTPWh9uClGvXTz',  // Pro Monthly
      yearly: null, // Pas encore créé
    },
    premium: {
      monthly: 'price_1TJFEiPd57aTPWh91KxuxmBb',  // Premium Monthly
      yearly: null, // Pas encore créé
    },
  };

  const priceId = priceIdMap[plan]?.[billing];
  
  if (!priceId) {
    return res.status(400).json({ 
      error: 'Invalid plan or billing type',
      details: `Plan: ${plan}, Billing: ${billing}`
    });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.CLIENT_URL || 'http://localhost:5173'}/pricing?success=true`,
      cancel_url: `${process.env.CLIENT_URL || 'http://localhost:5173'}/pricing?canceled=true`,
    });

    // ✅ Retourner l'URL de session pour la redirection
    res.status(200).json({ 
      id: session.id,
      url: session.url  // ← Clé importante pour la redirection
    });
    
  } catch (error) {
    console.error('Stripe error:', error);
    res.status(500).json({ error: error.message });
  }
};