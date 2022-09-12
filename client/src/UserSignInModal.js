import React, { useState } from 'react';
import { Button, Divider, Form, Modal, Header } from 'semantic-ui-react';

function UserSignInModal({ handleSubmit, handleFormChange, errors }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Modal
        size="mini"
        closeIcon
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Sign In</Button>}
      >
        <Modal.Header>Sign in</Modal.Header>
        <Modal.Content>
          <Form onSubmit={handleSubmit} className="form">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleFormChange}
              type="text"
              id="email"
              placeholder="Email"
              name="email"
            ></input>

            <label htmlFor="password">Password</label>
            <input
              onChange={handleFormChange}
              type="password"
              id="password"
              placeholder="Password"
              name="password"
            ></input>
            <Divider hidden />
            <Button type="submit">Sign in</Button>
          </Form>
          <Header as="h5">{errors ? <span>{errors}</span> : null}</Header>
        </Modal.Content>
      </Modal>
    </div>
  );
}

export default UserSignInModal;
