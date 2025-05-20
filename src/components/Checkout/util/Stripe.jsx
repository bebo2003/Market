// utils/stripe.js
import { loadStripe } from '@stripe/stripe-js';

// ضع المفتاح العام الخاص بـ Stripe (Publishable key) هنا
export const stripePromise = loadStripe('pk_test_51RJkblDAuyRtx6Il19fwT1KZa69jmf3qhUTFvvy4qg3D6v3A4OGk26UtVEBKto9UBvHwBZEPb1FiCaxdbMxpTjvg00d2sBaOrR');
