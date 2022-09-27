import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, Image } from 'semantic-ui-react';
import UserShopHeader from './UserShopHeader';

function UserNewArrivals() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSort, setSelectedSort] = useState('default');
  const [search, setSearch] = useState('');

  function fetchProducts() {
    fetch('/products')
      .then(response => response.json())
      .then(data =>
        setProducts(data.sort((a, b) => (a.created_at - b.created_at ? 1 : -1)))
      );
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
        />
        <Card.Content>
          <Card.Header>{product.title}</Card.Header>
          <Card.Meta>${parseFloat(product.price).toFixed(2)}</Card.Meta>
        </Card.Content>
      </Card>
    );
  });

  return (
    <div>
      <UserShopHeader
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
        setSelectedSort={setSelectedSort}
        selectedSort={selectedSort}
      />
      <Container>
        <Card.Group itemsPerRow={4}>{productsMap}</Card.Group>
      </Container>
    </div>
  );
}

export default UserNewArrivals;
