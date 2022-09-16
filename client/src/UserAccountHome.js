import React from 'react';
import { Header, Menu, Grid, Image, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import UserLogOut from './UserLogOut';
import landing from './komal.jpg';

function UserAccountHome({ setUser, user }) {
  return (
    <div>
      <Grid>
        <Grid.Row>
          {/* <Divider hidden></Divider> */}
          <img
            src={landing}
            alt="profile-landing"
            className="profile-landing"
          />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={3}>
            <Menu vertical>
              <Menu.Item>
                <Menu.Header>Profile</Menu.Header>

                <Menu.Menu>
                  <Menu.Item name="Orders" as={Link} to="/profile/orders" />
                </Menu.Menu>
              </Menu.Item>
              <Menu.Menu>
                <Menu.Header>Account</Menu.Header>
                <Menu.Item
                  name="Personal Info"
                  as={Link}
                  to="/profile/account"
                />
                <Divider hidden></Divider>
              </Menu.Menu>
              <Menu.Item>
                <Menu.Menu>
                  <Menu.Item>
                    <UserLogOut setUser={setUser} />
                  </Menu.Item>
                </Menu.Menu>
              </Menu.Item>
            </Menu>
          </Grid.Column>

          <Grid.Column width={10}>
            <Header as="h1">Hi, {user.first_name}!</Header>
            <Header as="h3">Welcome back.</Header>
            <Header as={Link} to="/newArrivals">
              Check out what's new!
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default UserAccountHome;
