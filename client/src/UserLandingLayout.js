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
import './App.css';

function UserLandingLayout() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            <Image src={landing} />
          </Grid.Column>
          <Grid.Column width={6} stretched>
            <Segment padded="very">
              <Button secondary style={{ borderRadius: 0 }}>
                Shop Now
              </Button>
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Divider hidden></Divider>

        <Grid>
          <Grid.Row centered>
            <Header as="h1">Our Favorites</Header>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={4}>
              <Image src={fav1} />
              <Button
                basic
                color="teal"
                content="teal"
                style={{ borderRadius: 0 }}
              >
                Shop
              </Button>
            </Grid.Column>
            <Grid.Column width={4}>
              <Image src={fav3} />
              <Button
                basic
                color="teal"
                content="teal"
                style={{ borderRadius: 0 }}
              >
                Shop
              </Button>
            </Grid.Column>
            <Grid.Column width={4}>
              <Image src={fav2} />
              <Button
                basic
                color="teal"
                content="teal"
                style={{ borderRadius: 0 }}
              >
                Shop
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Button
                basic
                color="teal"
                content="teal"
                style={{ borderRadius: 0 }}
              >
                Shop
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button
                basic
                color="teal"
                content="teal"
                style={{ borderRadius: 0 }}
              >
                Shop
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button
                basic
                color="teal"
                content="teal"
                style={{ borderRadius: 0 }}
              >
                Shop
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>

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
