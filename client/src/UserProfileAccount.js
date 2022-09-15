import React, { useState } from 'react';
import UserLogOut from './UserLogOut';
import {
  Form,
  Button,
  Input,
  Grid,
  Divider,
  Menu,
  Image,
  Header,
} from 'semantic-ui-react';
import { useNavigate, Link } from 'react-router-dom';

function UserProfileAccount({ user, setUser }) {
  const [formState, setFormState] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    address: user.address,
  });

  const { first_name, last_name, address } = formState;

  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const newFormObj = {
      first_name,
      last_name,
      address,
    };

    fetch(`/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFormObj),
    })
      .then(r => r.json())
      .then(data => setUser(data))
      .then(navigate('/profile'));
  }

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  }
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Divider hidden></Divider>
          <Image
            fluid
            centered
            src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/123918643_3303742496390317_6307368711531021789_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=HOxZzi0MTBYAX8M-5U0&_nc_oc=AQkVHdqWSEGL3zBCspgBO9tGvwkPkjT6vbzhI-U-4W9CQ-3xTUHFb5hx05rNbwKd0NPFpp7g-TKa2Ng74vf36qPl&_nc_ht=scontent-ort2-1.xx&oh=00_AT-KCwjPJyEP1Zy4j9uCi3fwM491WWzcVrI_BWKidFtf1Q&oe=63451494"
          ></Image>
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

          <Grid.Column width={1}></Grid.Column>

          <Grid.Column width={9} textAlign="left">
            <Header as="h2">Personal Information</Header>
            <Divider hidden></Divider>
            <Form onSubmit={handleSubmit}>
              <label htmlFor="first_name">First Name </label>
              <Input
                onChange={handleFormChange}
                type="text"
                id="first_name"
                name="first_name"
                value={first_name}
              ></Input>

              <Divider hidden></Divider>

              <label htmlFor="last_name">Last Name </label>
              <Input
                onChange={handleFormChange}
                type="text"
                id="last_name"
                name="last_name"
                value={last_name}
              ></Input>

              <Divider hidden></Divider>

              <label htmlFor="address">Address </label>
              <Input
                onChange={handleFormChange}
                type="text"
                id="address"
                name="address"
                value={address}
              ></Input>
              <Divider hidden></Divider>
              <Divider></Divider>
              <Divider hidden></Divider>
              <Button type="submit">Save Settings</Button>
            </Form>
          </Grid.Column>

          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default UserProfileAccount;
