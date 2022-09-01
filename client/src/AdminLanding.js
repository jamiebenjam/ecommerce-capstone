import { useState, useEffect } from "react";
import { Table, Container, Checkbox, Image } from 'semantic-ui-react'
import AdminEditModal from "./AdminEditModal";
import AdminAddModal from "./AdminAddModal";


function AdminLanding(){
    const [products, setProducts] = useState([])
    const [productID, setProductID] = useState(false)

    console.log(products)

    function fetchProducts() {
        fetch("/products")
        .then(response => response.json())
        .then(data => setProducts(data))
    }
    
    useEffect(fetchProducts, []);
    
    const onAddProduct = ((newProduct) => {
        setProducts((prevProducts) => [...prevProducts, newProduct])
      })

    const editProduct = (updatedProduct) => {
        setProducts(prevProducts => {
            const newProductArray = prevProducts.map(product => {
            if(product.id === updatedProduct.id){
                return updatedProduct
            } else {
                return product
            }
            })
            return newProductArray
        })
        setProductID(false)
    } 
    
    const productsMap = products.map((product) => {
        return (
            <Table.Row key={product.id}>
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
                    <Image src={product.image} size="tiny"/>
                </Table.Cell>
                <Table.Cell>
                   <AdminEditModal product={product} editProduct={editProduct} />
                </Table.Cell>
            </Table.Row>
        )
    })

   return(
    <div>
        <Container>
            <Table fixed size="small" padded="very" >
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Active</Table.HeaderCell>
                        <Table.HeaderCell>Product Title</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Image</Table.HeaderCell>

                        <Table.HeaderCell colSpan='0'>
                            <AdminAddModal onAddProduct={onAddProduct}/>
                        </Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                  {productsMap}
                </Table.Body>
            </Table>
        </Container>

        
    </div>
   )
}

export default AdminLanding;