// src/lib/stripe.js
import { loadStripe } from "@stripe/stripe-js";

// Remplace "pk_test_xxxxx" par ta clé publique Stripe
export const stripePromise = loadStripe("pk_test_51TJDTmPd57aTPWh9NyNBEc6hz7lGX9k5SLdNEUcyi3l6nPsf18HwmHB0qXd9HZt3VSBEf1sg38dkpfLOvpNHZYmT00eh4JDyLx");