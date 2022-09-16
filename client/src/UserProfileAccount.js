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
import landing from './16.jpg';

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
