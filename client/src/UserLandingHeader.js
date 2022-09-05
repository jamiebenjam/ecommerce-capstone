import React from 'react';
import { Icon, Grid, Header } from 'semantic-ui-react'
import UserHeaderDropdown from './UserHeaderDropdown';

function UserLandingHeader(){
    return (
        <div className='user_header'>
            <Grid>
                <Grid.Column float="left" width={1} >
                    <UserHeaderDropdown />
                </Grid.Column>
                
                <Grid.Column width={12} >
                    <Header>RAAS</Header>
                </Grid.Column>

                <Grid.Column width={1} >
                    <Icon name='search' />
                </Grid.Column>
                
                <Grid.Column width={1} >
                    <Icon name='user' />
                </Grid.Column>

                <Grid.Column width={1} >
                    <Icon name='cart' />
                </Grid.Column>
            </Grid>
        </div>
    );
};


export default UserLandingHeader;
