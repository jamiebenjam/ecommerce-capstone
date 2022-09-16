import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import { Header, Form, Button, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const StripeCard = props => {
  // const stripe = useStripe();
  // const elements = useElements();

  return (
    <div>
      <Header>Card</Header>
      <Form id="payment-form">
        <label htmlFor="card-element">Card</label>
        <CardElement id="card-element" />
        <br></br>
        <Button as={Link} to="/cart/checkout/purchase">
          Pay
        </Button>
      </Form>
    </div>
  );
};

export default StripeCard;
