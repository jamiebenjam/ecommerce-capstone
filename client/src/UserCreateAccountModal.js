import React, { useState } from 'react';
import { Button, Checkbox, Form, Modal } from 'semantic-ui-react';

function UserCreateAccountModal({ handleFormChange, handleSubmit }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div>
        <Modal
          closeIcon
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Button>Sign Up</Button>}
        >
          <Modal.Header>Create an account</Modal.Header>
          <Modal.Content>
            <Form onSubmit={handleSubmit}>
              <Form.Field>
                <label>First Name</label>
                <input
                  onChange={handleFormChange}
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="First Name"
                />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input
                  onChange={handleFormChange}
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder="Last Name"
                />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input
                  onChange={handleFormChange}
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </Form.Field>
              <Form.Field>
                <label>Address</label>
                <input
                  onChange={handleFormChange}
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Address"
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  onChange={handleFormChange}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
              </Form.Field>
              <Form.Field>
                <label>Password Confirmation</label>
                <input
                  onChange={handleFormChange}
                  type="password"
                  id="password_confirmation"
                  name="password_confirmation"
                  placeholder="Confirm Password"
                />
              </Form.Field>
              <Form.Field>
                <Checkbox label="I agree to the Terms and Conditions" />
              </Form.Field>
              <Button type="submit">Submit</Button>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    </div>
  );
}

export default UserCreateAccountModal;
