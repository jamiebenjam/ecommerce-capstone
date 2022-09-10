import React from 'react';
import UserLandingHeader from './UserLandingHeader';
import {
  Grid,
  GridColumn,
  Card,
  Image,
  Button,
  Icon,
  Divider,
} from 'semantic-ui-react';

function UserCart({ cartProducts, onAddProduct, onRemoveProduct }) {
  const productsPrice = cartProducts.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = productsPrice * 0.14;
  const shippingPrice = productsPrice > 200 ? 0 : 20;
  const totalPrice = productsPrice + taxPrice + shippingPrice;
  return (
    <div>
      <UserLandingHeader />
      <h2>Cart Items</h2>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={12}>
            {/* <Card key={product.id} as={Link} to={`/products/${product.id}`}>
        <Image src={product.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{product.title}</Card.Header>
          <Card.Meta>${parseFloat(product.price).toFixed(2)}</Card.Meta>
        </Card.Content>
      </Card> */}
            {cartProducts.length === 0 && <div>Cart is empty</div>}
            {cartProducts.map(product => {
              return (
                <Card key={product.id} fluid floated="left">
                  <Card.Content textAlign="left">
                    <Image size="small" floated="left" src={product.image} />
                    <Divider hidden />
                    <Divider hidden />
                    <Divider hidden />
                    <Card.Header>{product.title}</Card.Header>
                    <Divider hidden />
                    <Card.Meta>qty: {product.qty}</Card.Meta>
                    <Card.Meta>
                      ${parseFloat(product.price).toFixed(2)}
                    </Card.Meta>
                    <div>
                      {/* <Button onClick={() => onAddProduct(product)}> */}
                      <Icon name="plus" onClick={() => onAddProduct(product)} />
                      {/* </Button> */}
                      {/* <Button onClick={() => onRemoveProduct(product)}> */}
                      <Icon
                        size="small"
                        name="trash"
                        onClick={() => onRemoveProduct(product)}
                      />
                      {/* </Button> */}
                    </div>
                  </Card.Content>
                </Card>
              );
            })}
          </Grid.Column>
          <GridColumn width={4}>
            {cartProducts.length !== 0 && (
              <>
                <div>Items Price</div>
                <div>${parseFloat(productsPrice).toFixed(2)}</div>
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
      <div>
        {/* {cartProducts.length === 0 && <div>Cart is empty</div>}
        {cartProducts.map(product => {
          return (
            <div key={product.id}>
              <div>{product.title}</div>
              <Image size="small" src={product.image} />
              <div>
                <button onClick={() => onAddProduct(product)}>+</button>
                <button onClick={() => onRemoveProduct(product)}>-</button>
              </div>
              <div>
                {product.qty} | ${parseFloat(product.price).toFixed(2)}
              </div>
            </div>
          );
        })}
        {cartProducts.length !== 0 && (
          <>
            <hr></hr>
            <div>Items Price</div>
            <div>${parseFloat(productsPrice).toFixed(2)}</div>
            <div>Tax Price</div>
            <div>${parseFloat(taxPrice).toFixed(2)}</div>
            <strong>Total Price</strong>
            <div>${parseFloat(totalPrice).toFixed(2)}</div>
          </>
        )} */}
      </div>
    </div>
  );
}

export default UserCart;
