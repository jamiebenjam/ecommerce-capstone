import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import { Header, Form, Button, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const StripeCard = ({ orders }) => {
  // const stripe = useStripe();
  // const elements = useElements();
  console.log(parseFloat(orders[orders?.length - 1]?.amount).toFixed(2));
  return (
    <div>
      <Form id="payment-form">
        <label htmlFor="card-element">Card</label>
        <CardElement id="card-element" />
        <Divider hidden />
        <Button color="violet" fluid as={Link} to="/cart/checkout/purchase">
          Pay
        </Button>
      </Form>
    </div>
  );
};

export default StripeCard;
