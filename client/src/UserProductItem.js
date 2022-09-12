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
  Modal,
} from 'semantic-ui-react';
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
      <Grid className="product_item_container" padded={true} textAlign="left">
        <Grid.Column width={8}>
          <Image size="huge" src={product.image} />
        </Grid.Column>
        <Grid.Column width={8}>
          <UserBreadcrumb product={product} />

          <Divider hidden />

          <Rating maxRating={5} clearable />
          <Header>{product.title}</Header>
          <Rating icon="heart" defaultRating={0} maxRating={1} />
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

          <Modal
            size="mini"
            trigger={
              <Button fluid toggle onClick={() => onAddProduct(product)}>
                Add To Cart
              </Button>
            }
            header="Thank you!"
            content="Your item has been added to the cart"
            actions={['Close']}
          />
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default UserProductItem;
