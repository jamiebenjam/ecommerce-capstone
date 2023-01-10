import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import { Form, Button, Divider, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const StripeCard = ({ orders }) => {
  const recentOrder = orders[orders?.length - 1];

  console.log(orders);
  return (
    <div>
      <Form id="payment-form">
        <label htmlFor="card-element">Card</label>
        <CardElement id="card-element" />
        <Divider hidden />
        <Button color="violet" fluid as={Link} to="/cart/checkout/purchase">
          <Icon name="lock" />
          Pay ${parseFloat(recentOrder.amount).toFixed(2)}
        </Button>
      </Form>
    </div>
  );
};

export default StripeCard;
