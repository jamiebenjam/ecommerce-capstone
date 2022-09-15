import React from 'react';
import {
  Grid,
  Image,
  Segment,
  Container,
  List,
  Header,
  Icon,
  Menu,
  Button,
  Divider,
} from 'semantic-ui-react';
import landing from './6.jpeg';
import fav1 from './e1.jpeg';
import fav2 from './e8.jpeg';
import fav3 from './8.jpeg';
import landing2 from './48.jpeg';
import header from './12.jpeg';
import './App.css';
import { Link } from 'react-router-dom';
import header2 from './13.jpeg';

function UserLandingLayout({ products }) {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column className="landing-img" width={16}>
            <Divider hidden></Divider>
            <Divider hidden></Divider>
            <Divider hidden></Divider>
            <Divider hidden></Divider>
            <Divider hidden></Divider>
            <Divider hidden></Divider>
            <Divider hidden></Divider>
            <Divider hidden></Divider>

            <Header inverted as="h1">
              The Velvet Edit
            </Header>
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
            <Header>Fall Winter 2022</Header>
            <img className="header-img" src={header} alt="header_1" />
            <Header sub>Introducing the green lehenga choli</Header>
          </Grid.Column>
          <Grid.Column>
            <img className="header2-img" src={header2} alt="header_2" />
          </Grid.Column>
        </Grid.Row>

        <Divider hidden></Divider>

        <Grid>
          <Grid.Row centered>
            <Header as="h1">Our Favorites</Header>
          </Grid.Row>

          <Grid.Row centered href="http://localhost:4000/products/2">
            <div>{products[0]?.title}</div>
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
        </Grid>

        <Divider hidden></Divider>

        <Grid.Row centered as={Link} to="/products">
          <Button size="large" inverted secondary style={{ borderRadius: 0 }}>
            VIEW ALL PRODUCTS
          </Button>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={6} stretched textAlign="left">
            <Segment padded="very">
              <Header>New York Fashion Week</Header>
              <div>
                Take a trip down memory lane wiht our Fiorire collection on hand
                embroidered pieces representing pure luxury.
              </div>
              <Button secondary style={{ borderRadius: 0 }}>
                Explore the Runway
              </Button>
            </Segment>
          </Grid.Column>
          <Grid.Column width={10}>
            <Image src={landing2} />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable textAlign="left">
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <List.Item as="a">Ethics and Sustainability</List.Item>
                  <List.Item as="a">Media</List.Item>
                  <List.Item as="a">Blog</List.Item>
                  <List.Item as="a">Sitemap</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Contact Us" />
                <List link inverted>
                  <List.Item as="a">Size Guide</List.Item>
                  <List.Item as="a">Become a retailer</List.Item>
                  <List.Item as="a">Join our community</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header as="h4" inverted>
                  Follow Us
                </Header>
                <Menu.Item
                  href="https://www.instagram.com/alwaysraas/"
                  target="_blank"
                >
                  <Icon inverted name="instagram" />
                </Menu.Item>
                <Menu.Item
                  href="https://www.facebook.com/alwaysraas"
                  target="_blank"
                >
                  <Icon inverted name="facebook" />
                </Menu.Item>
                <Menu.Item
                  href="https://www.pinterest.com/alwaysraas/"
                  target="_blank"
                >
                  <Icon inverted name="pinterest" />
                </Menu.Item>
                <Menu.Item
                  href="https://twitter.com/alwaysraas"
                  target="_blank"
                >
                  <Icon inverted name="twitter" />
                </Menu.Item>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}

export default UserLandingLayout;
