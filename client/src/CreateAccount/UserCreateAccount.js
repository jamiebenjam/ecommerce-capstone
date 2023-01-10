import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserCreateAccountModal from './UserCreateAccountModal';

function UserCreateAccount({ setUser }) {
  const [formState, setFormState] = useState({});

  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const newFormObj = {
      first_name,
      last_name,
      email,
      address,
      password,
      password_confirmation,
    };

    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFormObj),
    })
      .then(r => r.json())
      .then(data => setUser(data))
      .then(navigate('/profile'));
  }

  const {
    first_name,
    last_name,
    email,
    address,
    password,
    password_confirmation,
  } = formState;

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  }

  return (
    <div>
      <UserCreateAccountModal
        handleSubmit={handleSubmit}
        handleFormChange={handleFormChange}
      />
    </div>
  );
}

export default UserCreateAccount;
