import React from 'react';
import UserLandingHeader from './UserLandingHeader';
import { Image } from 'semantic-ui-react';

function UserCart({ cartProducts, onAddProduct, onRemoveProduct }) {
  const productsPrice = cartProducts.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = productsPrice * 0.14;
  const shippingPrice = productsPrice > 200 ? 0 : 20;
  const totalPrice = productsPrice + taxPrice + shippingPrice;
  return (
    <div>
      <UserLandingHeader />
      <h2>Cart Items</h2>
      <div>
        {cartProducts.length === 0 && <div>Cart is empty</div>}
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
        )}
      </div>
    </div>
  );
}

export default UserCart;
