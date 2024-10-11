"use client"

import { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/lib/store';
import { useRouter } from 'next/navigation';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const { clearCart } = useCartStore();
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/order-confirmation`,
      },
    });

    if (error) {
      setError(error.message);
      setProcessing(false);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      clearCart();
      router.push('/order-confirmation');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      {error && <div className="text-red-500 mt-4">{error}</div>}
      <Button
        type="submit"
        disabled={!stripe || processing}
        className="w-full mt-8"
      >
        {processing ? 'Processing...' : 'Pay now'}
      </Button>
    </form>
  );
}