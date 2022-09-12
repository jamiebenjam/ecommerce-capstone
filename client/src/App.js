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
import StripeCard from './StripeCard';
import UserLandingHeader from './UserLandingHeader';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartProducts, setCartProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedSort, setSelectedSort] = useState('default');
  const [toggleAddToCartButton, setToggleAddToCartButton] = useState(false);

  function fetchProducts() {
    fetch('/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }

  useEffect(fetchProducts, []);

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const filterProducts = () => {
    if (selectedCategory === 'All') {
      return products;
    }
    return products.filter(product => {
      return product.categories
        .map(category => category.name)
        .includes(selectedCategory);
    });
  };

  const sortProducts = () => {
    // const filterPriceLow = filterProducts().sort(function (a, b) {
    //   return b.id - a.id;
    // });
    // const filterPriceHigh = filterProducts().sort(function (a, b) {
    //   return a.id - b.id;
    // });
    if (selectedSort === 'low') {
      return filterProducts().sort(function (a, b) {
        return b.id - a.id;
      });
    } else if (selectedSort === 'high') {
      return filterProducts().sort(function (a, b) {
        return a.id - b.id;
      });
    } else {
      return filterProducts();
    }
  };

  const searchFilter = sortProducts().filter(
    product =>
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.color.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
  );

  const displayedProducts = searchFilter;

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
    const exist = cartProducts.find(x => x.id === product.id);
    if (exist) {
      const newCartProducts = cartProducts.map(x =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      );
      setToggleAddToCartButton(toggleAddToCartButton => !toggleAddToCartButton);
      setCartProducts(newCartProducts);

      localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
    } else {
      const newCartProducts = [...cartProducts, { ...product, qty: 1 }];
      setCartProducts(newCartProducts);
      localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
    }
  };

  const onRemoveProduct = product => {
    const exist = cartProducts.find(x => x.id === product.id);
    if (exist.qty === 1) {
      const newCartProducts = cartProducts.filter(x => x.id !== product.id);
      setCartProducts(newCartProducts);
      localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
    } else {
      const newCartProducts = cartProducts.map(x =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      );
      setCartProducts(newCartProducts);
      localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
    }
  };

  useEffect(() => {
    setCartProducts(
      localStorage.getItem('cartProducts')
        ? JSON.parse(localStorage.getItem('cartProducts'))
        : []
    );
  }, []);

  return (
    <div className="App">
      <UserLandingHeader
        filterProducts={filterProducts}
        displayedProducts={displayedProducts}
        productsMap={productsMap}
        handleCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
        products={products}
        setSelectedCategory={setSelectedCategory}
        setSearch={setSearch}
        cartProducts={cartProducts}
        onAddProduct={onAddProduct}
        onRemoveProduct={onRemoveProduct}
      />
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
              setSelectedSort={setSelectedSort}
              selectedSort={selectedSort}
              setSearch={setSearch}
              cartProducts={cartProducts}
            />
          }
        />
        <Route path="/newArrivals" element={<UserNewArrivals />} />
        <Route path="/admin" element={<AdminLanding />} />
        <Route
          path="/products/:id"
          element={
            <UserProductItem
              products={products}
              onAddProduct={onAddProduct}
              toggleAddToCartButton={toggleAddToCartButton}
            />
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
        <Route path="/card" element={<StripeCard />} />
      </Routes>
    </div>
  );
}

export default App;
