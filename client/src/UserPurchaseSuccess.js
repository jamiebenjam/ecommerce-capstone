import React from 'react';
import { Header, Button, Container, Card, Divider } from 'semantic-ui-react';
import checkout from './checkout.jpg';
import { Link } from 'react-router-dom';

function UserPurchaseSuccess({ orders }) {
  return (
    <div>
      <img
        src={checkout}
        alt="purchase-success-landing"
        className="purchase-landing"
      />
      <Container>
        <Header>Thank you for your purchase!</Header>
        <Header>Order Summary</Header>
        <Card.Group>
          <Card fluid color="green" key={orders[orders?.length - 1]?.id}>
            <Card.Content header>
              Order #{orders[orders?.length - 1]?.id}
            </Card.Content>
            <Card.Content>
              <Card.Meta>Name: {orders[orders?.length - 1]?.name}</Card.Meta>
              <Card.Meta>
                Shipping Address: {orders[orders?.length - 1]?.address}
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              Amount: $
              {parseFloat(orders[orders?.length - 1]?.amount).toFixed(2)}
            </Card.Content>
          </Card>
        </Card.Group>
        <Divider hidden></Divider>
        <Button
          basic
          color="black"
          content="Black"
          as={Link}
          to="/products"
          style={{ borderRadius: 0 }}
        >
          Continue Shopping
        </Button>
      </Container>
    </div>
  );
}

export default UserPurchaseSuccess;
