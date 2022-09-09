import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Grid, Header, Search } from 'semantic-ui-react';
import UserHeaderDropdown from './UserHeaderDropdown';

function UserLandingHeader({
  filterProducts,
  displayedProducts,
  productsMap,
  handleCategoryChange,
  selectedCategory,
  products,
  setSelectedCategory,
  setSearch,
}) {
  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

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
            setSearch={setSearch}
          />
        </Grid.Column>

        <Grid.Column width={11}>
          <Header as={Link} to="/" size="huge">
            RAAS
          </Header>
        </Grid.Column>

        <Grid.Column width={2}>
          <input onChange={handleSearchChange} />
        </Grid.Column>

        <Grid.Column width={1}>
          <Icon name="user" />
        </Grid.Column>

        <Grid.Column width={1} as={Link} to="/cart">
          <Icon.Group>
            <Icon name="cart" />
            {/* <Icon corner name="add" /> */}
          </Icon.Group>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default UserLandingHeader;
