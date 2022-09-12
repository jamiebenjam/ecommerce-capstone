import React, { useState, useEffect } from 'react';
import UserLandingHeader from './UserLandingHeader';
import { Card, Image } from 'semantic-ui-react';
import UserShopHeader from './UserShopHeader';

function UserNewArrivals() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  function fetchNewArrivals() {
    fetch('/products')
      .then(response => response.json())
      .then(data =>
        setProducts(data.sort((a, b) => (a.created_at - b.created_at ? 1 : -1)))
      );
  }

  useEffect(fetchNewArrivals, []);

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  let selectedProducts = [];

  products?.map(product =>
    product.categories?.filter(category => {
      if (selectedCategory === 'All') {
        return category.name !== null && selectedProducts.push(product);
      } else {
        return (
          category.name === selectedCategory && selectedProducts.push(product)
        );
      }
    })
  );

  const productsMap = selectedProducts?.map(product => {
    return (
      <Card key={product.id}>
        <Image src={product.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{product.title}</Card.Header>
          <Card.Meta>${parseFloat(product.price).toFixed(2)}</Card.Meta>
        </Card.Content>
      </Card>
    );
  });

  return (
    <div>
      {/* <UserLandingHeader /> */}
      <UserShopHeader
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
      <Card.Group itemsPerRow={4}>{productsMap}</Card.Group>
    </div>
  );
}

export default UserNewArrivals;
