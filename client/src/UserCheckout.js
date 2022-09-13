import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  GridColumn,
  Button,
  Header,
  Container,
  Divider,
} from 'semantic-ui-react';
import UserCartProductDisplay from './UserCartProductDisplay';
import UserCheckoutView from './UserCheckoutView';
import UserSignIn from './UserSignIn';

function UserCheckout({
  cartProducts,
  user,
  setUser,
  onAddProduct,
  onRemoveProduct,
}) {
  if (user.id >= 1) {
    return (
      <div>
        <UserCheckoutView
          cartProducts={cartProducts}
          onAddProduct={onAddProduct}
          onRemoveProduct={onRemoveProduct}
        />
      </div>
    );
  } else {
    return (
      <div>
        <Container>
          <Divider hidden></Divider>
          <Divider></Divider>
          <Header>Please sign in to continue to checkout</Header>

          <Button secondary>
            <UserSignIn setUser={setUser} />
          </Button>
          <Divider hidden></Divider>
          <Divider hidden></Divider>
          <Divider></Divider>
        </Container>
      </div>
    );
  }
}

export default UserCheckout;
