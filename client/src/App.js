import './App.css';
import React, { useState, useEffect } from 'react';
import AdminLanding from './Admin/AdminLanding';
import { Routes, Route, Link } from 'react-router-dom';
import UserShopAll from './ShoppingNav/UserShopAll';
import UserNewArrivals from './ShoppingNav/UserNewArrivals';
import UserProductItem from './IndividualProduct/UserProductItem';
import { Card, Image } from 'semantic-ui-react';
import UserCart from './Cart/UserCart';
import UserLandingHeader from './LandingPage/UserLandingHeader';
import UserCreateAccount from './CreateAccount/UserCreateAccount';
import UserAccountHome from './UserProfile/UserAccountHome';
import UserSignIn from './SignIn/UserSignIn';
import UserProfileAccount from './UserProfile/UserProfileAccount';
import UserCheckout from './Checkout/UserCheckout';
import UserOrders from './UserProfile/UserOrders';
import UserPurchaseSuccess from './Checkout/UserPurchaseSuccess';
import AdminOrderView from './Admin/AdminOrderView';
import UserLandingLayout from './LandingPage/UserLandingLayout';
import UserCheckoutStripe from './Checkout/UserCheckoutStripe';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartProducts, setCartProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedSort, setSelectedSort] = useState('default');
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('/me').then(r => {
      if (r.ok) {
        r.json().then(user => setUser(user));
      }
    });
  }, []);

  function fetchProducts() {
    fetch('/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }

  useEffect(fetchProducts, []);

  function ordersFetch() {
    fetch('/orders')
      .then(response => response.json())
      .then(data => {
        setOrders(data);
      });
  }

  useEffect(ordersFetch, []);

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
    if (selectedSort === 'high') {
      return filterProducts().sort(function (a, b) {
        return b.price - a.price;
      });
    } else if (selectedSort === 'low') {
      return filterProducts().sort(function (a, b) {
        return a.price - b.price;
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
        <Image
          style={{ borderRadius: 0 }}
          src={product.image}
          wrapped
          ui={false}
          alt="Model wearing clothing"
        />
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

  const totalItems = cartProducts
    .map(product => product.qty)
    .reduce((a, c) => {
      return a + c;
    }, 0);

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
        user={user}
        setUser={setUser}
        totalItems={totalItems}
      />
      <Routes>
        <Route path="/" element={<UserLandingLayout products={products} />} />
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
        <Route
          path="/newArrivals"
          element={
            <UserNewArrivals
              handleCategoryChange={handleCategoryChange}
              selectedCategory={selectedCategory}
              productsMap={productsMap}
              setSelectedSort={setSelectedSort}
              selectedSort={selectedSort}
              displayedProducts={displayedProducts}
            />
          }
        />
        <Route path="/admin" element={<AdminLanding />} />
        <Route
          path="/admin/orders"
          element={<AdminOrderView orders={orders} />}
        />
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
        <Route
          path="/createAccount"
          element={<UserCreateAccount setUser={setUser} />}
        />
        <Route
          path="/profile"
          element={<UserAccountHome setUser={setUser} user={user} />}
        />
        <Route path="/signin" element={<UserSignIn setUser={setUser} />} />
        <Route
          path="/profile/account"
          element={<UserProfileAccount user={user} setUser={setUser} />}
        />
        <Route
          path="/cart/checkout"
          element={
            <UserCheckout
              cartProducts={cartProducts}
              user={user}
              setUser={setUser}
              onAddProduct={onAddProduct}
              onRemoveProduct={onRemoveProduct}
              totalItems={totalItems}
              setCartProducts={setCartProducts}
              setOrders={setOrders}
              orders={orders}
            />
          }
        />
        <Route
          path="/cart/checkout/payment"
          element={<UserCheckoutStripe orders={orders} />}
        />
        <Route
          path="/profile/orders"
          element={
            <UserOrders
              setUser={setUser}
              user={user}
              setOrders={setOrders}
              orders={orders}
            />
          }
        />
        <Route
          path="/cart/checkout/purchase"
          element={<UserPurchaseSuccess orders={orders} />}
        />
      </Routes>
    </div>
  );
}

export default App;
