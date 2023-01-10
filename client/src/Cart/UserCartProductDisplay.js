import React from 'react';
import { Card, Image, Divider, Icon, Header } from 'semantic-ui-react';

function UserCartProductDisplay({
  cartProducts,
  onAddProduct,
  onRemoveProduct,
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
                <Icon name="plus" onClick={() => onAddProduct(product)} />
                <Card.Meta>${parseFloat(product.price).toFixed(2)}</Card.Meta>
                <div>
                  <Icon
                    size="small"
                    name="trash"
                    onClick={() => onRemoveProduct(product)}
                  />
                </div>
              </Card.Content>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default UserCartProductDisplay;
