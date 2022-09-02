import { useEffect } from "react";
import { Table, Container } from 'semantic-ui-react'

function AdminOrderView() {
    // const [orders, setOrders] = useState([])

    function fetchProducts() {
        fetch("/orders")
        .then(response => response.json())
        .then(data => console.log(data))
    }
    
    useEffect(fetchProducts, []);

    return(
        <div>
            <Container>
            <Table fixed size="small" padded="very" >
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Amount</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Address</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                  {/* {productsMap} */}
                </Table.Body>
            </Table>
        </Container>
        </div>
    )
}

export default AdminOrderView;