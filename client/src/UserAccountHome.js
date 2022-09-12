import React, { useEffect } from 'react';
import { Header } from 'semantic-ui-react';
import UserLogOut from './UserLogOut';

function UserAccountHome({ setUser, user }) {
  useEffect(() => {
    fetch('/me').then(r => {
      if (r.ok) {
        r.json().then(user => setUser(user));
      }
    });
  }, []);

  return (
    <div>
      <Header as="h3">
        {user.first_name} {user.last_name}
      </Header>
      <Header as="h4">{user.address}</Header>
      <UserLogOut setUser={setUser} />
    </div>
  );
}

export default UserAccountHome;
