import React from 'react';
import StripeCard from './StripeCard';
import UserCheckoutView from './UserCheckoutView';
import { Container, Segment } from 'semantic-ui-react';

const UserCheckoutStripe = () => {
  return (
    <div>
      <Container>
        <Segment>
          <StripeCard />
        </Segment>
      </Container>
    </div>
  );
};

export default UserCheckoutStripe;
