import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

function UserCheckoutView({
  cartProducts,
  onAddProduct,
  onRemoveProduct,
  totalItems,
  user,
  setCartProducts,
  setOrders,
  orders,
}) {
  const productsPrice = cartProducts?.reduce((a, c) => a + c.qty * c.price, 0);
  const [formState, setFormState] = useState({});
  const [errors, setErrors] = useState(null);

  const taxPrice = (productsPrice * 0.1025).toFixed(2);
  const totalPrice = (
    parseFloat(taxPrice) +
    parseFloat(productsPrice) +
    parseFloat(shippingPrice())
  ).toFixed(2);

  let navigate = useNavigate();

  function shippingPrice() {
    if (productsPrice > 99) {
      return 0;
    } else if (productsPrice < 99) {
      return 7.89;
    }
  }

  function freeShipping() {
    if (shippingPrice() === 0) {
      return <Header sub>FREE shipping</Header>;
    } else {
      return <div>${parseFloat(shippingPrice()).toFixed(2)}</div>;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newFormObj = {
      name,
      address,
      user_id: user.id,
      amount: totalPrice,
      email: user.email,
    };

    console.log(totalPrice);

    fetch('/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFormObj),
    }).then(r => {
      if (r.ok) {
        r.json()
          .then(data => setOrders([...orders, data]))
          .then(setCartProducts([]))
          .then(navigate('/cart/checkout/payment'));
      } else {
        r.json().then(err => setErrors(err.errors));
      }
    });
  }

  const { name, address } = formState;

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  }

  return (
    <div>
      <Container>
        <Segment>
          <Grid>
            <Grid.Row verticalAlign="top">
              <Grid.Column width={10}>
                <Segment padded secondary textAlign="left">
                  <Header as="h2" textAlign="left">
                    Checkout
                  </Header>
                  <Header as="h4" textAlign="left">
                    My Information
                  </Header>
                  <Form onSubmit={handleSubmit} className="form">
                    <Input
                      onChange={handleFormChange}
                      type="text"
                      id="name"
                      placeholder="First and last name"
                      name="name"
                    ></Input>
                    <Divider hidden></Divider>
                    <Input
                      onChange={handleFormChange}
                      type="address"
                      id="address"
                      placeholder="Address"
                      name="address"
                    ></Input>
                    <Divider hidden />

                    <Button secondary type="submit">
                      Continue to Payment
                    </Button>
                    <Divider hidden />
                  </Form>

                  <Header textAlign="left">View Order Details</Header>
                  <Header textAlign="left" as="h5">
                    {totalItems} items
                  </Header>
                  <div>
                    {cartProducts?.map(product => {
                      return (
                        <Image
                          label={{ as: 'a', corner: 'left', icon: 'trash' }}
                          size="small"
                          src={product.image}
                          onClick={() => onRemoveProduct(product)}
                        />
                      );
                    })}
                  </div>
                </Segment>
              </Grid.Column>

              <Grid.Column width={1}></Grid.Column>

              <Segment padded vertical textAlign="left">
                <Grid.Column width={6} textAlign="left">
                  {cartProducts?.length !== 0 && (
                    <>
                      <Header as="h2">Order Value</Header>
                      <Divider hidden></Divider>
                      <Divider hidden></Divider>

                      <Header sub floated="left">
                        Shipping
                      </Header>
                      <Header sub floated="right">
                        {freeShipping()}
                      </Header>
                      <Divider hidden></Divider>
                      <Divider hidden></Divider>

                      <Header sub floated="left">
                        Tax
                      </Header>
                      <Header sub floated="right">
                        ${(productsPrice * 0.1025).toFixed(2)}
                      </Header>
                      <Divider hidden></Divider>
                      <Divider hidden></Divider>
                      <Divider></Divider>
                      <Header sub floated="left">
                        Total Price
                      </Header>
                      <Header sub floated="right">
                        ${totalPrice}
                      </Header>
                    </>
                  )}
                </Grid.Column>
              </Segment>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    </div>
  );
}

export default UserCheckoutView;
