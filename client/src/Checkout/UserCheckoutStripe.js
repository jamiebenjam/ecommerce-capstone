import React from 'react';
import StripeCard from './StripeCard';
import {
  Container,
  Grid,
  Header,
  Card,
  Icon,
  Divider,
} from 'semantic-ui-react';
import landing from '../Images/union.jpg';

const UserCheckoutStripe = ({ orders }) => {
  return (
    <div>
      <img src={landing} alt="payment-landing" className="payment-landing" />
      <Divider hidden></Divider>
      <Container>
        <Card raised fluid color="violet">
          <Card.Content>
            <Grid centered>
              <Grid.Column width={6}>
                <Divider hidden></Divider>
                <Header as="h1">
                  <Icon name="credit card" />
                  <Header.Content>Payment Method</Header.Content>
                </Header>
                <Divider></Divider>
                <StripeCard orders={orders} />
                <Divider hidden></Divider>
              </Grid.Column>
            </Grid>
          </Card.Content>
        </Card>
      </Container>
    </div>
  );
};

export default UserCheckoutStripe;
