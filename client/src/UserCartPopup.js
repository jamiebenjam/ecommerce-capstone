import React from 'react';
import { Card, Image, Divider, Header } from 'semantic-ui-react';

function UserCartPopup({
  cartProducts,
  onAddProduct,
  onRemoveProduct,
  totalItems,
}) {
  if (cartProducts.length === 0) {
    return (
      <div>
        <Divider hidden></Divider>
        <Header sub textAlign="left">
          Your cart is empty!
        </Header>
      </div>
    );
  } else {
    return (
      <div>
        <Header>{totalItems} items in cart</Header>
        {cartProducts.map(product => {
          return (
            <Card key={product.id} fluid floated="left">
              <Card.Content textAlign="left">
                <Image
                  size="small"
                  floated="left"
                  label={{ as: 'a', corner: 'left', icon: 'trash' }}
                  src={product.image}
                  onClick={() => onRemoveProduct(product)}
                />
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Card.Header>{product.title}</Card.Header>
                <Divider hidden />
                <Card.Meta>qty: {product.qty}</Card.Meta>
                <Card.Meta>${parseFloat(product.price).toFixed(2)}</Card.Meta>
              </Card.Content>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default UserCartPopup;
