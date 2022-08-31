import { Table } from 'semantic-ui-react'

function AdminProductView({product}){
    return(
    // <Table fixed>
    //     <Table.Header>
    //         <Table.Row>
    //             <Table.HeaderCell>Product Title</Table.HeaderCell>
    //             <Table.HeaderCell>Description</Table.HeaderCell>
    //             <Table.HeaderCell>Image</Table.HeaderCell>
    //         </Table.Row>
    //     </Table.Header>

    //     <Table.Body>
    //         <Table.Row>
    //             <Table.Cell>{product.title}</Table.Cell>
    //             <Table.Cell>{product.image}</Table.Cell>
    //             <Table.Cell>{product.description}</Table.Cell>
    //         </Table.Row>
    //         <Table.Row>
    //         <Table.Cell>{product.title}</Table.Cell>
    //             <Table.Cell>{product.image}</Table.Cell>
    //             <Table.Cell>{product.description}</Table.Cell>
    //         </Table.Row>
    //         <Table.Row>
    //         <Table.Cell>{product.title}</Table.Cell>
    //             <Table.Cell>{product.image}</Table.Cell>
    //             <Table.Cell>{product.description}</Table.Cell>
    //         </Table.Row>
    //     </Table.Body>
    // </Table>

        // <div>
        //     <p>{product.title}</p>
        //     <p>{product.description}</p>
        //     <img src={product.image} alt="pic"/>
        // </div>
    )
}

export default AdminProductView;