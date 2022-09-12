import React from 'react';
import UserLandingHeader from './UserLandingHeader';
import UserCartProductDisplay from './UserCartProductDisplay';
import {
  Grid,
  GridColumn,
  Card,
  Image,
  Button,
  Icon,
  Divider,
  Header,
} from 'semantic-ui-react';

function UserCart({ cartProducts, onAddProduct, onRemoveProduct }) {
  const productsPrice = cartProducts.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = productsPrice * 0.14;
  const shippingPrice = productsPrice > 200 ? 0 : 20;
  const totalPrice = productsPrice + taxPrice + shippingPrice;

  return (
    <div>
      {/* <UserLandingHeader /> */}
      <h2>Cart Items</h2>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={12}>
            <UserCartProductDisplay
              cartProducts={cartProducts}
              onAddProduct={onAddProduct}
              onRemoveProduct={onRemoveProduct}
            />
          </Grid.Column>
          <GridColumn width={4}>
            {cartProducts.length !== 0 && (
              <>
                <Header as="h2">Items Price</Header>
                <Header as="h4">${parseFloat(productsPrice).toFixed(2)}</Header>
                <div>Tax Price</div>
                <div>${parseFloat(taxPrice).toFixed(2)}</div>
                <hr></hr>
                <strong>Total Price</strong>
                <div>${parseFloat(totalPrice).toFixed(2)}</div>
              </>
            )}
            <Button>Continue to checkout</Button>
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default UserCart;
