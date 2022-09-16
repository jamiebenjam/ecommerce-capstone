import { Table, Container, Divider } from 'semantic-ui-react';

function AdminOrderView({ orders }) {
  const ordersMap = orders?.map(order => {
    return (
      <Table.Row key={order.id}>
        <Table.Cell>{order.name}</Table.Cell>
        <Table.Cell>{order.address}</Table.Cell>
        <Table.Cell>
          <p>${parseFloat(order.amount).toFixed(2)}</p>
        </Table.Cell>
      </Table.Row>
    );
  });
  return (
    <div>
      <Divider hidden></Divider>
      <Container>
        <Table fixed size="small" padded="very">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              <Table.HeaderCell>Amount</Table.HeaderCell>
              {/* <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell> */}
            </Table.Row>
          </Table.Header>

          <Table.Body>{ordersMap}</Table.Body>
        </Table>
      </Container>
    </div>
  );
}

export default AdminOrderView;
