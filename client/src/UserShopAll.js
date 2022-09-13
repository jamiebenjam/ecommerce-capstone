import React from 'react';
import { Card } from 'semantic-ui-react';
import UserShopHeader from './UserShopHeader';

function UserShopAll({
  selectedCategory,
  handleCategoryChange,
  productsMap,
  setSelectedSort,
  selectedSort,
}) {
  return (
    <div>
      <UserShopHeader
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
        setSelectedSort={setSelectedSort}
        selectedSort={selectedSort}
      />
      <Card.Group itemsPerRow={4}>{productsMap}</Card.Group>
    </div>
  );
}

export default UserShopAll;
