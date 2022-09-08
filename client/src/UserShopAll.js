import React from 'react';
import UserLandingHeader from './UserLandingHeader';
import { Card } from 'semantic-ui-react';
import UserShopHeader from './UserShopHeader';

function UserShopAll({
  products,
  selectedCategory,
  handleCategoryChange,
  filterProducts,
  displayedProducts,
  productsMap,
  setSelectedCategory,
}) {
  return (
    <div>
      <UserLandingHeader
        filterProducts={filterProducts}
        displayedProducts={displayedProducts}
        productsMap={productsMap}
        handleCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
        products={products}
        setSelectedCategory={setSelectedCategory}
      />
      <UserShopHeader
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
      <Card.Group itemsPerRow={4}>{productsMap}</Card.Group>
    </div>
  );
}

export default UserShopAll;
