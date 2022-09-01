import AdminAddProduct from "./AdminAddProduct";
import { useState, useEffect } from "react";
import { Table, Container, Checkbox, Button, Icon, Modal, Header, Image } from 'semantic-ui-react'
import AdminEditModal from "./AdminEditModal";


function AdminLanding(){
    const [products, setProducts] = useState([])
    const [open, setOpen] = useState(false)

    console.log(products)

    
    function fetchProducts() {
        fetch("/products")
        .then(response => response.json())
        .then(productData => setProducts(productData))
    }
    
    useEffect(fetchProducts, []);
    
    const onAddProduct = ((newProduct) => {
        setProducts((prevProducts) => [...prevProducts, newProduct])
      })
    
    const productsMap = products.map((product) => {
        return (
            <Table.Row>
                <Table.Cell collapsing>
                    <Checkbox slider />
                </Table.Cell>
                <Table.Cell>
                    {product.title}
                </Table.Cell>
                <Table.Cell>
                    {product.description}
                </Table.Cell>
                <Table.Cell>
                    <Image src={product.image} fluid size="tiny"/>
                </Table.Cell>
                <Table.Cell>
                   <AdminEditModal product={product} />
                </Table.Cell>
            </Table.Row>
        )
    })

   return(
    <div>
        <Container>
            <Table fixed size="small" padded="very" compact="true">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Active</Table.HeaderCell>
                        <Table.HeaderCell>Product Title</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Image</Table.HeaderCell>
                        <Table.HeaderCell> </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                  {productsMap}
                </Table.Body>

                <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell colSpan='4'>
                            <Modal
                                closeIcon
                                open={open}
                                trigger={<Button  
                                floated='right'
                                icon
                                labelPosition='left'
                                primary
                                size='small'>
                                <Icon name='plus' /> Add Product</Button>}
                                onClose={() => setOpen(false)}
                                onOpen={() => setOpen(true)}
                                >
                                <Header icon='archive' content='Add a Product' />
                                <Modal.Content>
                                    <AdminAddProduct onAddProduct={onAddProduct}/>
                                </Modal.Content>
                                <Modal.Actions>
                                    <Button color='green' onClick={() => setOpen(false)}>
                                    <Icon name='add' /> Add
                                    </Button>
                                </Modal.Actions>
                            </Modal>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </Container>

        
    </div>
   )
}

export default AdminLanding;