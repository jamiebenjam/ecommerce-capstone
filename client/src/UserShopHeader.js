import React from 'react';
import Filter from './UserCategoryFilter';
import { Grid, GridColumn } from 'semantic-ui-react';

function UserShopHeader( {selectedCategory, handleCategoryChange} ) {
    return (
        <div>
            <Grid>
                <Grid.Column float="left" width={2} />

                <GridColumn width={11}/>

                <Grid.Column width={3} >
                    <Filter selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange}/>
                </Grid.Column>
            </Grid>
        </div>
    );
}

export default UserShopHeader;
