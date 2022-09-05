import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import landing from './6.jpeg'
import fav1 from './e1.jpeg'
import fav2 from './e8.jpeg'
import fav3 from './8.jpeg'
import landing2 from './48.jpeg'

function UserLandingLayout(){
    return (
        <div>
            <Grid celled>
                <Grid.Row>
                <Grid.Column width={10}>
                    <Image src={landing} />
                </Grid.Column>
                <Grid.Column width={6}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />
                </Grid.Column>
                </Grid.Row>

                <Grid.Row centered={true}>
                <Grid.Column width={4}>
                    <Image src={fav1} />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Image src={fav3} />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Image src={fav2} />
                </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                <Grid.Column width={6}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />
                </Grid.Column>
                <Grid.Column width={10}>
                    <Image src={landing2} />
                </Grid.Column>
                </Grid.Row>

            </Grid>
        </div>
    );
}

export default UserLandingLayout;
