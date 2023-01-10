import { useState, useEffect } from 'react';
import { Table, Container, Checkbox, Image } from 'semantic-ui-react';
import AdminEditModal from './AdminEditModal';
import AdminAddModal from './AdminAddModal';

function AdminProductView() {
  const [products, setProducts] = useState([]);
  const [productID, setProductID] = useState(false);
  const [isActive, setIsActive] = useState(true);

  // console.log(isActive);

  function fetchProducts() {
    fetch('/products')
      .then(response => response.json())
      .then(data =>
        setProducts(data.sort((a, b) => (a.created_at - b.created_at ? 1 : -1)))
      );
  }

  useEffect(fetchProducts, []);

  const onAddProduct = newProduct => {
    setProducts(prevProducts => [...prevProducts, newProduct]);
  };

  const editProduct = updatedProduct => {
    setProducts(prevProducts => {
      const newProductArray = prevProducts.map(product => {
        if (product.id === updatedProduct.id) {
          return updatedProduct;
        } else {
          return product;
        }
      });
      return newProductArray;
    });
    setProductID(false);
  };

  function handleToggleClick(id) {
    setIsActive(isActive => !isActive);

    fetch(`/products/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isActive: isActive }),
    })
      .then(r => r.json())
      .then(data => setIsActive(data.isActive));
  }

  const productsMap = products.map(product => {
    return (
      <Table.Row key={product.id}>
        <Table.Cell collapsing>
          <Checkbox
            toggle
            onClick={() => handleToggleClick(product.id)}
          ></Checkbox>
        </Table.Cell>
        <Table.Cell>{product.title}</Table.Cell>
        <Table.Cell>{product.description}</Table.Cell>
        <Table.Cell>
          <Image src={product.image} size="tiny" />
        </Table.Cell>
        <Table.Cell>
          <p>${parseFloat(product.price).toFixed(2)}</p>
        </Table.Cell>
        <Table.Cell>{product.color}</Table.Cell>
        <Table.Cell>
          {product.categories.map(category => category.name)}
        </Table.Cell>
        <Table.Cell>
          <AdminEditModal product={product} editProduct={editProduct} />
        </Table.Cell>
      </Table.Row>
    );
  });

  return (
    <div>
      <br></br>
      <Container>
        <Table fixed size="small" padded="very">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>In Stock</Table.HeaderCell>
              <Table.HeaderCell>Product Title</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Image</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Color</Table.HeaderCell>
              <Table.HeaderCell>Category</Table.HeaderCell>

              <Table.HeaderCell colSpan="0">
                <AdminAddModal onAddProduct={onAddProduct} />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>{productsMap}</Table.Body>
        </Table>
      </Container>
    </div>
  );
}

export default AdminProductView;
