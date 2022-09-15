import React, { useState, useEffect } from 'react';
import { Card, Menu, Grid, Image, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import UserLogOut from './UserLogOut';

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
          <Image
            fluid
            centered
            src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/123918643_3303742496390317_6307368711531021789_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=HOxZzi0MTBYAX8M-5U0&_nc_oc=AQkVHdqWSEGL3zBCspgBO9tGvwkPkjT6vbzhI-U-4W9CQ-3xTUHFb5hx05rNbwKd0NPFpp7g-TKa2Ng74vf36qPl&_nc_ht=scontent-ort2-1.xx&oh=00_AT-KCwjPJyEP1Zy4j9uCi3fwM491WWzcVrI_BWKidFtf1Q&oe=63451494"
          ></Image>
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
