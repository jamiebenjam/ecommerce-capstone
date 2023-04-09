import React from 'react';
import {
  Grid,
  Image,
  Segment,
  Header,
  Button,
  Divider,
  Statistic,
} from 'semantic-ui-react';
import fav1 from '../Images/e1.jpeg';
import fav2 from '../Images/e8.jpeg';
import fav3 from '../Images/8.jpeg';
import header from '../Images/12.jpeg';
import '../App.css';
import { Link } from 'react-router-dom';
import header2 from '../Images/13.jpeg';
import nyfw from '../Images/nyfw.jpg';
import LandingFooter from './LandingFooter';

function UserLandingLayout({ products }) {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column className="landing-img" largeScreen={16}>
            <Divider hidden></Divider>
            <Divider hidden></Divider>
            <Divider hidden></Divider>
            <Divider hidden></Divider>
            <Divider hidden></Divider>
            <Divider hidden></Divider>
            <Divider hidden></Divider>
            <Divider hidden></Divider>

            <Statistic inverted size="small">
              <Statistic.Label>The</Statistic.Label>
              <Statistic.Value>Velvet Edit</Statistic.Value>
            </Statistic>

            <Header inverted sub>
              Classic silhouettes meet soft elegance
            </Header>
            <Divider hidden></Divider>
            <Button basic inverted style={{ borderRadius: 0 }}>
              Discover the Collection
            </Button>
            <Divider hidden></Divider>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column>
            <Statistic size="mini">
              <Statistic.Value>FALL WINTER 2022</Statistic.Value>
            </Statistic>
            <Divider hidden></Divider>
            <img className="header-img" src={header} alt="header_1" />
            <Header as="h4">Introducing the green lehenga choli</Header>
            <Button basic color="black" style={{ borderRadius: 0 }}>
              Shop Now
            </Button>
          </Grid.Column>
          <Grid.Column>
            <img className="header2-img" src={header2} alt="header_2" />
          </Grid.Column>
        </Grid.Row>

        <div className="spacer"></div>

        <Grid>
          <Grid.Row centered>
            <Statistic>
              <Statistic.Label>The</Statistic.Label>
              <Statistic.Value>Beach Edit</Statistic.Value>
            </Statistic>
          </Grid.Row>

          <Grid.Row centered href="http://localhost:4000/products/2">
            <Grid.Column width={4}>
              <Image src={fav1} alt="Model wearing clothing" />
            </Grid.Column>
            <Grid.Column width={4}>
              <Image src={fav3} alt="Model wearing clothing" />
            </Grid.Column>
            <Grid.Column width={4}>
              <Image src={fav2} alt="Model wearing clothing" />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Divider hidden></Divider>

        <Grid.Row centered as={Link} to="/products">
          <Button size="large" inverted secondary style={{ borderRadius: 0 }}>
            SHOP THE COLLECTION
          </Button>
        </Grid.Row>

        <Divider hidden></Divider>

        <Grid.Row>
          <Grid.Column width={6} stretched textAlign="left">
            <Segment style={{ padding: '10em 10em' }}>
              <Header as="h1">New York Fashion Week</Header>
              <div>
                Take a trip down memory lane with our Fiorire collection on hand
                embroidered pieces representing pure luxury.
              </div>
              <Divider hidden></Divider>
              <Button secondary style={{ borderRadius: 0 }}>
                Explore the Runway
              </Button>
            </Segment>
          </Grid.Column>
          <Grid.Column width={10}>
            <img className="nyfw" src={nyfw} alt="nyfw" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <LandingFooter />
    </div>
  );
}

export default UserLandingLayout;
