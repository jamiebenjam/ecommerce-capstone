import React from 'react';
import {
  Segment,
  Container,
  Grid,
  Header,
  Icon,
  Menu,
  List,
  Divider,
} from 'semantic-ui-react';

const LandingFooter = () => {
  return (
    <div>
      <Divider hidden></Divider>
      <Segment
        attached="bottom"
        inverted
        vertical
        style={{ padding: '5em 0em' }}
      >
        <Container>
          <Grid divided inverted stackable textAlign="left">
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h3" content="About" />
                <List link inverted>
                  <List.Item as="a">Ethics and Sustainability</List.Item>
                  <List.Item as="a">Media</List.Item>
                  <List.Item as="a">Blog</List.Item>
                  <List.Item as="a">Sitemap</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h3" content="Contact Us" />
                <List link inverted>
                  <List.Item as="a">Size Guide</List.Item>
                  <List.Item as="a">Become a retailer</List.Item>
                  <List.Item as="a">Join our community</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header as="h3" inverted>
                  Follow Us
                </Header>
                <Menu.Item
                  href="https://www.instagram.com/alwaysraas/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <Icon inverted name="instagram" />
                </Menu.Item>
                <Menu.Item
                  href="https://www.facebook.com/alwaysraas"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <Icon inverted name="facebook" />
                </Menu.Item>
                <Menu.Item
                  href="https://www.pinterest.com/alwaysraas/"
                  target="_blank"
                  aria-label="Pinterest"
                >
                  <Icon inverted name="pinterest" />
                </Menu.Item>
                <Menu.Item
                  href="https://twitter.com/alwaysraas"
                  target="_blank"
                  aria-label="Twitter"
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
};

export default LandingFooter;
