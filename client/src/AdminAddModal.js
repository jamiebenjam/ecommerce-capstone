import { Modal, Button, Icon, Header } from 'semantic-ui-react';
import AdminAddProduct from './AdminAddProduct';
import { useState } from 'react';

function AdminAddModal({ onAddProduct }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Modal
        closeIcon
        open={open}
        trigger={
          <Button floated="right" icon labelPosition="left" primary size="tiny">
            <Icon name="plus" /> Add Product
          </Button>
        }
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Header icon="archive" content="Add a Product" />
        <Modal.Content>
          <AdminAddProduct onAddProduct={onAddProduct} />
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={() => setOpen(false)}>
            <Icon name="add" /> Add
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default AdminAddModal;
