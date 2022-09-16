import React from 'react';
import {
  Header,
  Grid,
  Container,
  Form,
  Divider,
  Button,
  Input,
  Image,
  Segment,
  Modal,
} from 'semantic-ui-react';

function UserPurchaseSuccess({ orders }) {
  return (
    <div>
      <Container>
        <Header>Order Summary</Header>
        {orders.map(order => order.id)}
      </Container>
    </div>
  );
}

export default UserPurchaseSuccess;
