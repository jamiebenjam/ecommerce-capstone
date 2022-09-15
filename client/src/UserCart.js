import React from 'react';
import { Link } from 'react-router-dom';
import UserCartProductDisplay from './UserCartProductDisplay';
import {
  Grid,
  Button,
  Header,
  Container,
  Divider,
  Step,
} from 'semantic-ui-react';

function UserCart({ cartProducts, onAddProduct, onRemoveProduct }) {
  const productsPrice = cartProducts.reduce((a, c) => a + c.qty * c.price, 0);

  function shippingPrice() {
    if (productsPrice > 99) {
      return 0 && <div>FREE shipping</div>;
    } else if (productsPrice < 99) {
      return 7.89;
    }
  }

  function freeShipping() {
    if (shippingPrice() === 0) {
      return <Header sub>FREE shipping</Header>;
    } else {
      return <div>${parseFloat(shippingPrice()).toFixed(2)}</div>;
    }
  }

  return (
    <div>
      <Container>
        <Header as="h2" textAlign="left">
          Cart Items
        </Header>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={12}>
              <UserCartProductDisplay
                cartProducts={cartProducts}
                onAddProduct={onAddProduct}
                onRemoveProduct={onRemoveProduct}
              />
            </Grid.Column>
            <Grid.Column width={4}>
              {cartProducts.length !== 0 && (
                <>
                  <Step.Group fluid size="mini">
                    <Step icon="truck" description="Free shipping over $99" />
                  </Step.Group>
                  <Divider hidden></Divider>
                  <Header sub floated="left">
                    Shipping
                  </Header>
                  <Header sub floated="right">
                    {freeShipping()}
                  </Header>
                  <Divider hidden></Divider>
                  <Divider hidden></Divider>

                  <Header sub floated="left">
                    EST Tax
                  </Header>
                  <Header sub floated="right">
                    Calculated at Checkout
                  </Header>
                  <Divider hidden></Divider>
                  <Divider hidden></Divider>
                  <Divider></Divider>
                  <Header sub floated="left">
                    Total Price
                  </Header>
                  <Header sub floated="right">
                    $
                    {(
                      parseFloat(productsPrice) + parseFloat(shippingPrice())
                    ).toFixed(2)}
                  </Header>
                </>
              )}
              <Divider hidden></Divider>
              <Divider hidden></Divider>
              <Divider hidden></Divider>
              <Button as={Link} to="/cart/checkout" size="large">
                Continue to checkout
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default UserCart;
