import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Grid, Header } from 'semantic-ui-react';
import UserHeaderDropdown from './UserHeaderDropdown';

function UserLandingHeader({
  filterProducts,
  displayedProducts,
  productsMap,
  handleCategoryChange,
  selectedCategory,
  products,
  setSelectedCategory,
}) {
  return (
    <div className="user_header">
      <Grid>
        <Grid.Column float="left" width={1}>
          <UserHeaderDropdown
            filterProducts={filterProducts}
            displayedProducts={displayedProducts}
            productsMap={productsMap}
            handleCategoryChange={handleCategoryChange}
            selectedCategory={selectedCategory}
            products={products}
            setSelectedCategory={setSelectedCategory}
          />
        </Grid.Column>

        <Grid.Column width={12}>
          <Header as={Link} to="/">
            RAAS
          </Header>
        </Grid.Column>

        <Grid.Column width={1}>
          <Icon name="search" />
        </Grid.Column>

        <Grid.Column width={1}>
          <Icon name="user" />
        </Grid.Column>

        <Grid.Column width={1} as={Link} to="/cart">
          <Icon name="cart" />
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default UserLandingHeader;
