import React from 'react';
import { Container, Icon, Grid, Header } from 'semantic-ui-react'

function UserLandingView(){
    return (
        <div>
            <Container>
                <Grid textAlign="center">
                <Grid.Column width={3} >
                    <Header>Shop</Header>
                </Grid.Column>
                
                <Grid.Column width={11} >
                    <Header>RAAS</Header>
                </Grid.Column>

                <Grid.Column width={1} >
                    <Icon name='user' />
                </Grid.Column>

                <Grid.Column width={1} >
                    <Icon name='cart' />
                </Grid.Column>
                
                </Grid>
            </Container>
        </div>
    );
};


export default UserLandingView;
