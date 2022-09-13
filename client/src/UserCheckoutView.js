import React, { useState } from 'react';
import {
  Header,
  Grid,
  Container,
  Form,
  Divider,
  Button,
  Input,
  Image,
  Segment,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function UserCheckoutView({ cartProducts, onAddProduct, onRemoveProduct }) {
  const productsPrice = cartProducts.reduce((a, c) => a + c.qty * c.price, 0);
  const [formState, setFormState] = useState({});
  const [errors, setErrors] = useState(null);
  //   const [orders, setOrders] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const newFormObj = {
      name,
      address,
    };

    fetch('/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFormObj),
    }).then(r => {
      if (r.ok) {
        r.json().then(data => console.log(data));
      } else {
        r.json().then(err => setErrors(err.errors));
      }
    });
  }

  const { name, address } = formState;

  function freeShipping() {
    if (productsPrice > 99) {
      return 0 && <div>FREE shipping</div>;
    } else if (productsPrice < 99) {
      return 7.89;
    }
  }

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  }

  return (
    <div>
      <Container>
        <Segment.Group>
          <Grid columns={2}>
            <Header as="h2" textAlign="left">
              Checkout
            </Header>
            <Grid.Row>
              <Grid.Column width={10}>
                <Segment padded secondary textAlign="left">
                  <Header as="h4" textAlign="left">
                    My Information
                  </Header>
                  <Form onSubmit={handleSubmit} className="form">
                    {/* <label htmlFor="name">Name: </label> */}
                    <Input
                      onChange={handleFormChange}
                      type="text"
                      id="name"
                      placeholder="First and last name"
                      name="name"
                    ></Input>
                    <Divider hidden></Divider>
                    {/* <label htmlFor="address">Address: </label> */}
                    <Input
                      onChange={handleFormChange}
                      type="address"
                      id="address"
                      placeholder="Address"
                      name="address"
                    ></Input>
                    <Divider hidden />
                    <Button secondary>Save</Button>
                    <Divider hidden />
                  </Form>

                  <Header textAlign="left">View Order Details</Header>
                  <Header textAlign="left" as="h5">
                    {cartProducts.length} items
                  </Header>
                  <div>
                    {cartProducts.map(product => {
                      return <Image size="small" src={product.image} />;
                    })}
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column width={4} textAlign="left">
                {cartProducts.length !== 0 && (
                  <>
                    <Header as="h2">Order Value</Header>
                    <Header as="h4">
                      ${parseFloat(productsPrice).toFixed(2)}
                    </Header>
                    <div>Shipping</div>
                    <div>${freeShipping()}</div>
                    <div>Tax : ${(productsPrice * 0.1025).toFixed(2)}</div>
                    {/* <div>${(productsPrice * 0.1025).toFixed(2)}</div> */}
                    <hr></hr>
                    <strong>Total Price</strong>
                    <div>
                      $
                      {(
                        parseFloat(productsPrice) + parseFloat(freeShipping())
                      ).toFixed(2)}
                    </div>
                  </>
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment.Group>
      </Container>
    </div>
  );
}

export default UserCheckoutView;
