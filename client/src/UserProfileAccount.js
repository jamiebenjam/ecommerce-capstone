import React, { useState } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

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
      <h1>Personal Information</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="first_name">First Name</label>
        <Input
          onChange={handleFormChange}
          type="text"
          id="first_name"
          name="first_name"
          value={first_name}
        ></Input>

        <label htmlFor="last_name">Last Name</label>
        <Input
          onChange={handleFormChange}
          type="text"
          id="last_name"
          name="last_name"
          value={last_name}
        ></Input>

        <label htmlFor="address">Address</label>
        <Input
          onChange={handleFormChange}
          type="text"
          id="address"
          name="address"
          value={address}
        ></Input>

        <Button type="submit">Save Settings</Button>
      </Form>
    </div>
  );
}

export default UserProfileAccount;
