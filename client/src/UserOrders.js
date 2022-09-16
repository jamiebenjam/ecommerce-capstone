import React from 'react';
import { Card, Menu, Grid, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import UserLogOut from './UserLogOut';
import landing from './komal.jpg';

function UserOrders({ setUser, user, setOrders, orders }) {
  // function ordersFetch() {
  //   fetch('/orders')
  //     .then(response => response.json())
  //     .then(data => setOrders(data));
  // }

  // useEffect(ordersFetch, []);

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Divider hidden></Divider>
          <img
            src={landing}
            alt="profile-landing"
            className="profile-landing"
          />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={3}>
            <Menu vertical>
              <Menu.Item>
                <Menu.Header>Profile</Menu.Header>

                <Menu.Menu>
                  <Menu.Item name="Orders" as={Link} to="/profile/orders" />
                </Menu.Menu>
              </Menu.Item>
              <Menu.Menu>
                <Menu.Header>Account</Menu.Header>
                <Menu.Item
                  name="Personal Info"
                  as={Link}
                  to="/profile/account"
                />
                <Divider hidden></Divider>
              </Menu.Menu>
              <Menu.Item>
                <Menu.Menu>
                  <Menu.Item>
                    <UserLogOut setUser={setUser} />
                  </Menu.Item>
                </Menu.Menu>
              </Menu.Item>
            </Menu>
          </Grid.Column>

          <Grid.Column width={1}></Grid.Column>

          <Grid.Column width={9}>
            {orders?.map(order => {
              return (
                <div>
                  <Card.Group>
                    <Card fluid color="green" key={order.id}>
                      <Card.Content header>Order #{order.id}</Card.Content>
                      <Card.Content>
                        <Card.Meta>Name: {order.name}</Card.Meta>
                        <Card.Meta>Shipping Address: {order.address}</Card.Meta>
                        <Card.Meta>
                          Amount: ${parseFloat(order.amount).toFixed(2)}
                        </Card.Meta>
                      </Card.Content>
                      <Card.Content extra>
                        Amount: ${parseFloat(order.amount).toFixed(2)}
                      </Card.Content>
                    </Card>
                  </Card.Group>
                </div>
              );
            })}
          </Grid.Column>

          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default UserOrders;
