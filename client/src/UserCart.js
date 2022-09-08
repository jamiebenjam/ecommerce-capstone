import React from 'react';


function UserCart( {cartProducts, onAddProduct, onRemoveProduct}) {

console.log(cartProducts)
    return (
        <div>
            <h2>Cart Items</h2>
            <div>
            {cartProducts.length === 0 && <div>Cart is empty</div>}
            {cartProducts.map((product) => {
                return <div key={product.id}>
                            <div>{product.title}</div>
                            <div>
                                <button onClick={() => onAddProduct(product)}>+</button>
                                <button onClick={() => onRemoveProduct(product)}>-</button>
                            </div>
                            <div>
                                {`${product.price}`}
                            </div>
                        </div>
            })}
            </div>
        </div>
    );
}

export default UserCart;
