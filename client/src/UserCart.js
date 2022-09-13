import React from 'react';
import { Link } from 'react-router-dom';
import UserCartProductDisplay from './UserCartProductDisplay';
import { Grid, Button, Header, Container, Divider } from 'semantic-ui-react';

function UserCart({ cartProducts, onAddProduct, onRemoveProduct }) {
  const productsPrice = cartProducts.reduce((a, c) => a + c.qty * c.price, 0);

  function freeShipping() {
    if (productsPrice > 99) {
      return 0 && <div>FREE shipping</div>;
    } else if (productsPrice < 99) {
      return 7.89;
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
                  {/* <Header as="h2">Items Price</Header>
                  <Header as="h4">
                    ${parseFloat(productsPrice).toFixed(2)}
                  </Header> */}
                  <span>Shipping</span>
                  <span> ${parseFloat(freeShipping()).toFixed(2)}</span>

                  <div>EST Tax | Calculated at Checkout</div>
                  <Divider hidden></Divider>

                  <strong>Total Price</strong>
                  <div>${parseFloat(productsPrice).toFixed(2)}</div>
                </>
              )}
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
