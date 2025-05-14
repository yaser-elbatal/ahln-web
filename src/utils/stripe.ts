// utils/stripe.ts
import { Stripe, loadStripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
};

export async function createCheckoutSession(items: { price: string; quantity: number }[]) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/checkout/create-session`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items }),
    });
  
    const { sessionId } = await res.json();
    return sessionId;
  }