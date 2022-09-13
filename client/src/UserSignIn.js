import React, { useState } from 'react';
import UserSignInModal from './UserSignInModal';
import { useNavigate } from 'react-router-dom';

function UserSignIn({ setUser }) {
  const [formState, setFormState] = useState({});
  const [errors, setErrors] = useState(null);

  // let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const newFormObj = {
      email,
      password,
    };

    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFormObj),
    }).then(r => {
      if (r.ok) {
        r.json().then(data => setUser(data));
        // .then(navigate('/profile'));
      } else {
        r.json().then(err => setErrors(err.errors));
      }
    });
  }

  const { email, password } = formState;

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  }
  return (
    <div>
      <UserSignInModal
        handleFormChange={handleFormChange}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </div>
  );
}

export default UserSignIn;
