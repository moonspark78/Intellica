import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Check, X, Zap, Crown, Sparkles, ArrowRight } from 'lucide-react';
import axios from 'axios';

const plans = [
  {
    id: 'free',
    name: 'Free',
    emoji: '🔹',
    description: 'Start exploring for free',
    price: { monthly: 0, yearly: 0 },
    badge: null,
    icon: Sparkles,
    gradient: 'from-slate-400 to-slate-500',
    shadow: 'shadow-slate-200/60',
    border: 'border-slate-200/60',
    buttonStyle: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
    buttonText: 'Current Plan',
    features: [
      { text: 'Basic AI access', included: true },
      { text: 'Limited generations / day', included: true },
      { text: 'Documents & Flashcards', included: true },
      { text: 'Daily usage limit', included: false },
      { text: 'Advanced AI model (Pro)', included: false },
      { text: 'PDF Export', included: false },
      { text: 'Server priority', included: false },
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    emoji: '🚀',
    description: 'The best plan to level up',
    price: { monthly: 9.99, yearly: 7.99 },
    badge: 'Most Popular',
    icon: Zap,
    gradient: 'from-emerald-400 to-teal-500',
    shadow: 'shadow-emerald-500/25',
    border: 'border-emerald-300/60',
    buttonStyle:
      'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 shadow-lg shadow-emerald-500/30',
    buttonText: 'Upgrade to Pro',
    features: [
      { text: 'Advanced AI model (Pro)', included: true },
      { text: 'Unlimited generations', included: true },
      { text: 'Faster responses', included: true },
      { text: 'PDF & format export', included: true },
      { text: 'Server priority', included: true },
      { text: 'Documents & Flashcards', included: true },
      { text: 'API & integrations', included: false },
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    emoji: '👑',
    description: 'For teams & power users',
    price: { monthly: 24.99, yearly: 19.99 },
    badge: null,
    icon: Crown,
    gradient: 'from-violet-400 to-purple-500',
    shadow: 'shadow-violet-500/25',
    border: 'border-violet-200/60',
    buttonStyle:
      'bg-gradient-to-r from-violet-500 to-purple-500 text-white hover:from-violet-600 hover:to-purple-600 shadow-lg shadow-violet-500/30',
    buttonText: 'Go Premium',
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Truly unlimited generations', included: true },
      { text: 'Exclusive early-access features', included: true },
      { text: 'API & advanced integrations', included: true },
      { text: '24/7 priority support', included: true },
      { text: 'Multi-user access (Team)', included: true },
      { text: 'Analytics dashboard', included: true },
    ],
  },
];

const PricingPage = () => {
  const [billing, setBilling] = useState('monthly');
  const [loading, setLoading] = useState(false);

  // Fonction pour rediriger vers Stripe Checkout
  const handleCheckout = async (planId) => {
    if (planId === 'free') return;
    
    setLoading(true);
    
    try {
      // Appel au backend pour créer une session Stripe
      const response = await axios.post(
        'http://localhost:8000/api/stripe/checkout',
        { plan: planId, billing }
      );

      // ✅ Redirection directe vers Stripe (méthode supportée)
      window.location.href = response.data.url;
      
    } catch (error) {
      console.error('Stripe checkout error:', error);
      let errorMessage = 'Erreur lors de la redirection vers le paiement';
      if (error.response?.data?.error) {
        errorMessage += `: ${error.response.data.error}`;
      }
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative">
      <Helmet>
        <title>Tarifs — Intellica</title>
        <meta name="description" content="Découvrez les offres Intellica : plan gratuit, Pro et Premium. Générez des résumés, flashcards et quiz à partir de vos PDF grâce à l'IA." />
        <meta name="keywords" content="tarifs, prix, plan pro, apprentissage IA, résumé PDF, flashcards, quiz, Intellica" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://intellica.app/pricing" />
      </Helmet>
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px] opacity-30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-3">
            Choose your plan
          </h1>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            Start for free, upgrade when you're ready. Cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-1 mt-6 bg-slate-100 p-1 rounded-xl border border-slate-200/60">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                billing === 'monthly'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('yearly')}
              disabled={true}
              className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 flex items-center gap-2 ${
                billing === 'yearly'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-400 cursor-not-allowed'
              }`}
            >
              Yearly
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
                Soon
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          {plans.map((plan) => {
            const isPro = plan.id === 'pro' || plan.id === 'premium';
            const price = billing === 'monthly' ? plan.price.monthly : plan.price.yearly;

            return (
              <div
                key={plan.id}
                className={`relative flex-1 bg-white/80 backdrop-blur-xl border rounded-2xl p-7 transition-all duration-300
                  hover:-translate-y-1 hover:shadow-2xl
                  ${isPro
                    ? 'border-emerald-300/80 shadow-xl shadow-emerald-500/20 ring-2 ring-emerald-400/30'
                    : `${plan.border} shadow-xl shadow-slate-200/50 hover:shadow-slate-300/50`
                  }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-white
                      bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-lg shadow-emerald-500/30 whitespace-nowrap">
                      ⭐ {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${plan.gradient} shadow-lg ${plan.shadow}
                    flex items-center justify-center`}>
                    <plan.icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                      {plan.emoji} {plan.name}
                    </h2>
                    <p className="text-xs text-slate-500">{plan.description}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  {price === 0 ? (
                    <span className="text-4xl font-bold text-slate-900">Free</span>
                  ) : (
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-bold text-slate-900">${price}</span>
                      <span className="text-slate-400 text-sm mb-1.5">/mo</span>
                    </div>
                  )}
                  {billing === 'yearly' && price > 0 && (
                    <p className="text-xs text-emerald-600 font-medium mt-1">
                      Billed annually · Save ${((plan.price.monthly - price) * 12).toFixed(0)}/year
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-bold
                    transition-all duration-200 mb-6 ${plan.buttonStyle}`}
                  disabled={plan.id === 'free' || loading}
                  onClick={() => handleCheckout(plan.id)}
                >
                  {loading ? 'Chargement...' : plan.buttonText}
                  {plan.id !== 'free' && !loading && <ArrowRight size={16} strokeWidth={2.5} />}
                </button>

                {/* Divider */}
                <div className="border-t border-slate-100 mb-5" />

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      {feature.included ? (
                        <span className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient}
                          flex items-center justify-center shadow-sm`}>
                          <Check size={11} className="text-white" strokeWidth={3} />
                        </span>
                      ) : (
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center">
                          <X size={11} className="text-slate-400" strokeWidth={3} />
                        </span>
                      )}
                      <span className={`text-sm ${feature.included ? 'text-slate-700' : 'text-slate-400'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-slate-400 mt-8">
          No credit card required for the free plan · Cancel anytime · Secure payment
        </p>

         {/* External GDPR link */}
        <p className="text-center text-xs text-slate-400 mt-3">
          <a
            href="https://gdpr.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-slate-600 transition-colors"
          >
            Learn more about data protection (GDPR)
          </a>
        </p>

      </div>
    </div>
  );
};

export default PricingPage;