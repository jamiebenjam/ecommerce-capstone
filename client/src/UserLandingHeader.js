import React from 'react';
import { Link } from 'react-router-dom';
import UserHeaderDropdown from './UserHeaderDropdown';
import UserCartProductDisplay from './UserCartProductDisplay';
import UserLoggedInHeader from './UserConditionalSignInHeader';
import {
  Icon,
  Grid,
  Header,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Input,
  Popup,
} from 'semantic-ui-react';

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
  onAddProduct,
  onRemoveProduct,
  user,
  setUser,
}) {
  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="user_header">
      <Grid>
        <Grid.Column floated="left" width={1}>
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

        <Grid.Column width={10}>
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
          <UserLoggedInHeader user={user} setUser={setUser} />
        </Grid.Column>

        <Grid.Column width={1} as={Link} to="/cart">
          <Popup
            trigger={<Icon name="cart" />}
            flowing
            hoverable
            size="mini"
            wide
            content={
              <div>
                <UserCartProductDisplay
                  cartProducts={cartProducts}
                  onAddProduct={onAddProduct}
                  onRemoveProduct={onRemoveProduct}
                />
              </div>
            }
            position="bottom right"
          />
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default UserLandingHeader;
