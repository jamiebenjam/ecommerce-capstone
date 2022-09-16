import { Form, Container, Button } from 'semantic-ui-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminEditProduct({ product, editProduct }) {
  const [formState, setFormState] = useState({
    title: product.title,
    description: product.description,
    image: product.image,
    price: product.price,
    color: product.color,
    category: product.categories.map(category => category.name),
  });

  const { title, description, image, price, color, category } = formState;

  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`/products/${product.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState),
    })
      .then(r => r.json())
      .then(data => editProduct(data))
      .then(navigate('/admin'));
  }

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
            value={title}
          ></input>

          <label htmlFor="description">Description</label>
          <input
            onChange={handleFormChange}
            type="text"
            id="description"
            name="description"
            value={description}
          ></input>

          <label htmlFor="image">Image</label>
          <input
            onChange={handleFormChange}
            type="text"
            id="image"
            name="image"
            value={image}
          ></input>

          <label htmlFor="price">Price</label>
          <input
            onChange={handleFormChange}
            type="number"
            id="price"
            name="price"
            value={price}
          ></input>

          <label htmlFor="color">Color</label>
          <input
            onChange={handleFormChange}
            type="text"
            id="color"
            name="color"
            value={color}
          ></input>

          <label htmlFor="category">Category</label>
          <input
            onChange={handleFormChange}
            type="text"
            id="category"
            name="category"
            value={category}
          ></input>

          <br></br>
          <br></br>
          <Button type="submit">Submit</Button>
          <br></br>
        </Form>
      </Container>
    </div>
  );
}

export default AdminEditProduct;
