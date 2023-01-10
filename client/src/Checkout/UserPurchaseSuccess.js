import React from 'react';
import { Header, Button, Container, Card, Divider } from 'semantic-ui-react';
import checkout from '../Images/checkout.jpg';
import { Link } from 'react-router-dom';

function UserPurchaseSuccess({ orders }) {
  const recentOrder = orders[orders?.length - 1];

  console.log(orders);
  console.log(recentOrder);
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
          <Card fluid color="green" key={recentOrder?.id}>
            <Card.Content header>Order #{recentOrder?.id}</Card.Content>
            <Card.Content>
              <Card.Meta>Name: {recentOrder?.name}</Card.Meta>
              <Card.Meta>Shipping Address: {recentOrder?.address}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
              Amount: ${parseFloat(recentOrder?.amount).toFixed(2)}
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
