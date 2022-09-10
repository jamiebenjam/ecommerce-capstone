import React from 'react';
import { Link } from 'react-router-dom';
import {
  Icon,
  Grid,
  Header,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Input,
} from 'semantic-ui-react';
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
  cartProducts,
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

        <Grid.Column width={1}>
          <Dropdown item icon="search" simple>
            <DropdownMenu direction="left">
              <DropdownItem>
                <Input
                  focus
                  onChange={handleSearchChange}
                  placeholder="Search products..."
                />
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Grid.Column>

        <Grid.Column width={1} as={Link} to="/cart">
          <Icon name="heart" />
        </Grid.Column>

        <Grid.Column width={1}>
          <Dropdown item icon="user" simple>
            <DropdownMenu direction="left">
              <DropdownItem>
                <Button secondary>Sign In</Button>
              </DropdownItem>
              <DropdownItem>Sign-Up</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Grid.Column>

        <Grid.Column width={1}>
          <Dropdown item icon="cart" simple as={Link} to="/cart">
            <DropdownMenu direction="left">
              {/* <DropdownItem>{cartProducts}</DropdownItem> */}
            </DropdownMenu>
          </Dropdown>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default UserLandingHeader;
