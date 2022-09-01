import { Modal, Button, Icon, Header } from 'semantic-ui-react';
import AdminEditProduct from './AdminEditProduct';
import { useState } from 'react'

function AdminEditModal( {product} ){
    const [open, setOpen] = useState(false)

    return(
        <div>
             <Modal
                closeIcon
                open={open}
                trigger={<Button  
                floated='right'
                icon
                labelPosition='left'
                size='small'>
                <Icon name='edit' /> Edit</Button>}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                >
                <Header icon='edit' content='Edit Product' />
                <Modal.Content>
                    <AdminEditProduct product={product} />
                </Modal.Content>
                <Modal.Actions>
                    <Button color='green' onClick={() => setOpen(false)}>
                    <Icon name='add' /> Add
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}

export default AdminEditModal;