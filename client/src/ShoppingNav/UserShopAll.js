import React from 'react';
import { Card, Container } from 'semantic-ui-react';
import LandingFooter from '../LandingPage/LandingFooter';
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
      <Container>
        <Card.Group itemsPerRow={4}>{productsMap}</Card.Group>
      </Container>
      <LandingFooter />
    </div>
  );
}

export default UserShopAll;
