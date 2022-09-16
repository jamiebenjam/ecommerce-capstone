import React from 'react';
import Filter from './UserPriceFilter';
import { Grid, GridColumn } from 'semantic-ui-react';

function UserShopHeader({
  selectedCategory,
  handleCategoryChange,
  setSelectedSort,
  selectedSort,
}) {
  return (
    <div>
      <Grid>
        <Grid.Column float="left" width={2} />

        <GridColumn width={11} />

        <Grid.Column width={3}>
          <Filter
            selectedCategory={selectedCategory}
            handleCategoryChange={handleCategoryChange}
            setSelectedSort={setSelectedSort}
            selectedSort={selectedSort}
          />
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default UserShopHeader;
