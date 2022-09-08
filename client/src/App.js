import './App.css';
import React, { useState, useEffect } from 'react';
import AdminLanding from './AdminLanding';
import { Routes, Route, Link } from 'react-router-dom';
import UserLandingView from './UserLandingView';
import UserShopAll from './UserShopAll';
import UserNewArrivals from './UserNewArrivals';
import UserProductItem from './UserProductItem';
import { Card, Image } from 'semantic-ui-react';
import UserCart from './UserCart';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartProducts, setCartProducts] = useState([]);

  function fetchProducts() {
    fetch('/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }

  useEffect(fetchProducts, []);

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  console.log(selectedCategory);

  const filterProducts = products.filter(product =>
    product.categories.map(category => category.name).includes(selectedCategory)
  );

  console.log(filterProducts);

  const displayedProducts =
    selectedCategory === 'All' ? products : filterProducts;

  const productsMap = displayedProducts.map(product => {
    return (
      <Card key={product.id} as={Link} to={`/products/${product.id}`}>
        <Image src={product.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{product.title}</Card.Header>
          <Card.Meta>${parseFloat(product.price).toFixed(2)}</Card.Meta>
        </Card.Content>
      </Card>
    );
  });

  const onAddProduct = product => {
    console.log('clicked');
    const exist = cartProducts.find(x => x.id === product.id);
    if (exist) {
      const newCartProducts = cartProducts.map(x =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      );
      setCartProducts(newCartProducts);
    }
  };

  console.log(cartProducts);

  const onRemoveProduct = product => {
    const exist = cartProducts.find(x => x.id === product.id);
    if (exist.qty === 1) {
      setCartProducts(cartProducts.filter(x => x.id !== product.id));
    } else {
      setCartProducts(
        cartProducts.map(x =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  console.log(cartProducts);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserLandingView />} />
        <Route
          path="/products"
          element={
            <UserShopAll
              products={products}
              setProducts={setProducts}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              handleCategoryChange={handleCategoryChange}
              filterProducts={filterProducts}
              displayedProducts={displayedProducts}
              productsMap={productsMap}
            />
          }
        />
        <Route path="/newArrivals" element={<UserNewArrivals />} />
        <Route path="/admin" element={<AdminLanding />} />
        <Route
          path="/products/:id"
          element={
            <UserProductItem products={products} onAddProduct={onAddProduct} />
          }
        />
        <Route
          path="/cart"
          element={
            <UserCart
              cartProducts={cartProducts}
              onAddProduct={onAddProduct}
              onRemoveProduct={onRemoveProduct}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
