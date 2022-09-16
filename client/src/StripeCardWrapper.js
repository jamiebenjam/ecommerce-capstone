import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripeCard from './StripeCard';

const stripePromise = loadStripe('STRIPE_PUBLISHABLE_API_KEY');

const StripeCardWrapper = props => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <StripeCard {...props} />
      </Elements>
    </div>
  );
};

export default StripeCardWrapper;
