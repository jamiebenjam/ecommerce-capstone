import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Grid,
  Image,
  Container,
  Rating,
  Header,
  Icon,
  Button,
  Divider,
} from 'semantic-ui-react';
import UserLandingHeader from './UserLandingHeader';
import UserBreadcrumb from './UserBreadcrumb';

function UserProductItem({ onAddProduct }) {
  const [product, setProduct] = useState([]);

  let params = useParams();

  function fetchProduct() {
    fetch(`/products/${params.id}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }

  useEffect(fetchProduct, []);

  return (
    <div>
      <UserLandingHeader />
      <Container>
        <Grid>
          <Grid.Column width={6}>
            <Image size="big" src={product.image} />
          </Grid.Column>
          <Grid.Column width={10}>
            <UserBreadcrumb product={product} />

            <Divider hidden />

            <Rating maxRating={5} clearable />
            <Header>{product.title}</Header>
            <span>${parseFloat(product.price).toFixed(2)}</span>

            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />

            <Icon.Group>
              <Icon name="truck" />
              <span>Free shipping USA on order above $99</span>
            </Icon.Group>
            <br></br>
            <Icon.Group>
              <Icon name="shipping fast" />
              <span>Contact us about 2-day and overnight shipping</span>
            </Icon.Group>

            <Divider hidden />

            <span>{product.description}</span>

            <Divider hidden />

            <Button fluid onClick={() => onAddProduct(product)}>
              Add To Cart
            </Button>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

export default UserProductItem;
