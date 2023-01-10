import { Form, Container, Button, Icon } from 'semantic-ui-react';
import { useState } from 'react';

function AdminAddProduct({ onAddProduct }) {
  const [formState, setFormState] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const newFormObj = {
      title,
      description,
      image,
      price,
      color,
    };

    fetch('/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFormObj),
    })
      .then(r => r.json())
      .then(data => onAddProduct(data));
  }

  const { title, description, image, price, color } = formState;

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  }

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            onChange={handleFormChange}
            type="text"
            id="title"
            name="title"
          ></input>

          <label htmlFor="description">Description</label>
          <input
            onChange={handleFormChange}
            type="text"
            id="description"
            name="description"
          ></input>

          <label htmlFor="image">Image</label>
          <input
            onChange={handleFormChange}
            type="text"
            id="image"
            name="image"
          ></input>

          <label htmlFor="price">Price</label>
          <input
            onChange={handleFormChange}
            type="number"
            id="price"
            name="price"
          ></input>

          <label htmlFor="color">Color</label>
          <input
            onChange={handleFormChange}
            type="text"
            id="color"
            name="color"
          ></input>

          {/* <label htmlFor="category">Category</label>
          <input
            onChange={handleFormChange}
            type="text"
            id="category"
            name="category"
          ></input>

          <label htmlFor="isActive">In Stock</label>
          <input
            onChange={handleFormChange}
            type="radio"
            id="isActive"
            name="isActive"
          ></input> */}

          <br></br>
          <br></br>
          <Button color="green" type="submit">
            <Icon name="add" />
            Add
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default AdminAddProduct;
