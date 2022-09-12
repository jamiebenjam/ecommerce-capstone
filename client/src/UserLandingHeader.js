import React from 'react';
import { Link } from 'react-router-dom';
import UserCartProductDisplay from './UserCartProductDisplay';
import {
  Icon,
  Grid,
  Header,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Input,
  Popup,
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
  onAddProduct,
  onRemoveProduct,
}) {
  const productsPrice = cartProducts.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = productsPrice * 0.14;
  const shippingPrice = productsPrice > 200 ? 0 : 20;
  const totalPrice = productsPrice + taxPrice + shippingPrice;

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
          <Dropdown item icon="user" simple>
            <DropdownMenu direction="left">
              <DropdownItem>
                <Button secondary>Sign In</Button>
              </DropdownItem>
              <DropdownItem>Sign-Up</DropdownItem>
            </DropdownMenu>
          </Dropdown>
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
                <strong>
                  Total Price | ${parseFloat(totalPrice).toFixed(2)}
                </strong>
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
