import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Divider } from 'semantic-ui-react';

function UserHeaderDropdown({ setSelectedCategory }) {
  const [categories, setCategories] = useState([]);

  function fetchCategories() {
    fetch('/categories')
      .then(response => response.json())
      .then(data => setCategories(data));
  }

  useEffect(fetchCategories, []);

  return (
    <div>
      <Dropdown icon="bars" pointing direction="right" className="link item">
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/newArrivals">
            New Arrivals
          </Dropdown.Item>
          <Dropdown.Item
            as={Link}
            to="/products"
            value="All"
            onClick={() => setSelectedCategory('All')}
          >
            Shop All
          </Dropdown.Item>
          <Divider></Divider>
          <Dropdown.Header>RAAS World</Dropdown.Header>
          {categories.map(category => (
            <Dropdown.Item
              key={category.name}
              value={category.value}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default UserHeaderDropdown;
