import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';

const StripeCard = () => {
  return (
    <div>
      <h1>Card</h1>
      <form id="payment-form">
        <label htmlFor="card-element"></label>
        <CardElement />
        <button>Pay</button>
      </form>
    </div>
  );
};

export default StripeCard;
