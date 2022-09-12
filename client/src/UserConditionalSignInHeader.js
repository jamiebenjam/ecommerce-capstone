import React from 'react';
import { Button, Dropdown } from 'semantic-ui-react';
import UserSignIn from './UserSignIn';
import UserCreateAccount from './UserCreateAccount';
import { Link } from 'react-router-dom';

function UserLoggedInHeader({ user }) {
  console.log(user);
  console.log(user.id);
  if (user.id >= 1) {
    return (
      <div>
        <Dropdown item icon="user" simple>
          <Dropdown.Menu direction="left">
            <Dropdown.Item>Welcome back, {user.first_name}!</Dropdown.Item>
            <Dropdown.Item>
              <Button as={Link} to="/profile">
                Profile
              </Button>
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
              <UserSignIn />
            </Dropdown.Item>
            <Dropdown.Item>
              <UserCreateAccount />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default UserLoggedInHeader;
