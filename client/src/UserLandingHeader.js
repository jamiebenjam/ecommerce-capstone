import React from 'react';
import { Link } from 'react-router-dom';
import UserHeaderDropdown from './UserHeaderDropdown';
import UserCartPopup from './UserCartPopup';
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
  totalItems,
}) {
  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="user_header">
      <Grid>
        <Grid.Column floated="left" width={2}>
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

        {/* <Grid.Column width={1} as={Link} to="/cart">
          <Icon color="black" name="heart" />
        </Grid.Column> */}

        <Grid.Column width={1}>
          <UserLoggedInHeader user={user} setUser={setUser} />
        </Grid.Column>

        <Grid.Column width={1} as={Link} to="/cart">
          <span>({totalItems})</span>
          <Popup
            trigger={<Icon color="black" name="shopping bag" />}
            flowing
            hoverable
            size="mini"
            wide
            content={
              <div>
                <UserCartPopup
                  cartProducts={cartProducts}
                  onAddProduct={onAddProduct}
                  onRemoveProduct={onRemoveProduct}
                  totalItems={totalItems}
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
