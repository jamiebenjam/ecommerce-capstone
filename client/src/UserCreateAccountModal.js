import React, { useState } from 'react';
import { Button, Checkbox, Form, Menu, Modal, Header } from 'semantic-ui-react';

function UserCreateAccountModal({ handleFormChange, handleSubmit, errors }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div>
        <Modal
          closeIcon
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Menu.Item>Not a Member yet? Join here.</Menu.Item>}
        >
          <Modal.Header>Create an account</Modal.Header>
          <Modal.Content>
            <Form onSubmit={handleSubmit}>
              <Form.Field required>
                <label>First Name</label>
                <input
                  onChange={handleFormChange}
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="First Name"
                />
              </Form.Field>
              <Form.Field required>
                <label>Last Name</label>
                <input
                  onChange={handleFormChange}
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder="Last Name"
                />
              </Form.Field>
              <Form.Field required>
                <label>Email</label>
                <input
                  onChange={handleFormChange}
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </Form.Field>
              <Form.Field required>
                <label>Address</label>
                <input
                  onChange={handleFormChange}
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Address"
                />
              </Form.Field>

              <div>
                <br></br>
                <p className="password">
                  Please choose a password with at least
                </p>
                <ul className="password_list">
                  <li>8 characters</li>
                  <li>1 capitalized letter</li>
                  <li>1 number</li>
                </ul>
              </div>

              <br></br>

              <Form.Field required>
                <label>Password</label>
                <input
                  onChange={handleFormChange}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
              </Form.Field>
              <Form.Field required>
                <label>Password Confirmation</label>
                <input
                  onChange={handleFormChange}
                  type="password"
                  id="password_confirmation"
                  name="password_confirmation"
                  placeholder="Confirm Password"
                />
              </Form.Field>
              <Form.Field required>
                <Checkbox label="I agree to the Terms and Conditions" />
              </Form.Field>
              <Button type="submit" secondary style={{ borderRadius: 0 }}>
                Submit
              </Button>
            </Form>
            <Header as="h5">{errors ? <span>{errors}</span> : null}</Header>
          </Modal.Content>
        </Modal>
      </div>
    </div>
  );
}

export default UserCreateAccountModal;
