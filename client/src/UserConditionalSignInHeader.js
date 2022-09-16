import React from 'react';
import { Button, Divider, Dropdown } from 'semantic-ui-react';
import UserSignIn from './UserSignIn';
import UserCreateAccount from './UserCreateAccount';
import { Link } from 'react-router-dom';
import UserLogOut from './UserLogOut';
import './App.css';

function UserLoggedInHeader({ user, setUser }) {
  if (user.email === 'admin') {
    return (
      <div>
        <Dropdown item icon="user" simple>
          <Dropdown.Menu direction="left">
            <Dropdown.Item>Welcome back, {user.first_name}!</Dropdown.Item>
            <Dropdown.Item>
              <Button
                basic
                color="black"
                content="Black"
                as={Link}
                to="/admin"
                style={{ borderRadius: 0 }}
              >
                Inventory
              </Button>
              <Button
                basic
                color="black"
                content="Black"
                as={Link}
                to="/admin/orders"
                style={{ borderRadius: 0 }}
              >
                Orders
              </Button>
              <Button
                basic
                color="black"
                content="Black"
                as={Link}
                to="/profile"
                style={{ borderRadius: 0 }}
              >
                Profile
              </Button>
              <Divider></Divider>

              <UserLogOut setUser={setUser} />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  } else if (user.id >= 1) {
    return (
      <div>
        <Dropdown item icon="user" simple>
          <Dropdown.Menu direction="left">
            <Dropdown.Item>Welcome back, {user.first_name}!</Dropdown.Item>
            <Dropdown.Item>
              <Button
                secondary
                as={Link}
                to="/profile"
                style={{ borderRadius: 0 }}
              >
                Profile
              </Button>
              <Divider></Divider>

              <UserLogOut setUser={setUser} />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  } else {
    return (
      <div>
        <Dropdown item icon="user" simple>
          <Dropdown.Menu direction="left">
            <Dropdown.Item>
              <UserSignIn setUser={setUser} />
            </Dropdown.Item>
            <Dropdown.Item>
              <UserCreateAccount setUser={setUser} />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default UserLoggedInHeader;
