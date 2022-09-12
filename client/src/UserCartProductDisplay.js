import React from 'react';
import { Card, Image, Divider, Icon } from 'semantic-ui-react';

function UserCartProductDisplay({
  cartProducts,
  onAddProduct,
  onRemoveProduct,
}) {
  return (
    <div>
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

export default UserCartProductDisplay;
