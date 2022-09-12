import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

function UserLogOut({ setUser }) {
  let navigate = useNavigate();

  function handleLogOut() {
    fetch('/logout', { method: 'DELETE' }).then(r => {
      if (r.ok) {
        setUser(null);
      }
    });
    navigate('/');
  }

  return (
    <div>
      <Button onClick={handleLogOut}>Log Out</Button>
    </div>
  );
}

export default UserLogOut;
