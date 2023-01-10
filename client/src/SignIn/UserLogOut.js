import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

function UserLogOut({ setUser }) {
  let navigate = useNavigate();

  function handleLogOut() {
    fetch('/logout', { method: 'DELETE' }).then(r => {
      if (r.ok) {
        setUser({});
      }
    });
    navigate('/');
  }

  return (
    <div>
      <Menu.Item onClick={handleLogOut}>Log Out</Menu.Item>
    </div>
  );
}

export default UserLogOut;
