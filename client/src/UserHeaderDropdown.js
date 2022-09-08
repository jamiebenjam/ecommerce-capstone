import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';

function UserHeaderDropdown({
  filterProducts,
  displayedProducts,
  productsMap,
  handleCategoryChange,
  selectedCategory,
  setSelectedCategory,
}) {
  const [categories, setCategories] = useState([]);

  function fetchCategories() {
    fetch('/categories')
      .then(response => response.json())
      .then(data => setCategories(data));
  }

  useEffect(fetchCategories, []);

  //   function handleCategoryClick(e) {
  //     console.log('clicked');
  //     handleCategoryChange(e.target.value);
  console.log(selectedCategory);
  //     console.log(e);
  //     console.log(e.target.value);
  //   }

  return (
    <div>
      <Dropdown icon="bars" pointing className="link item">
        <Dropdown.Menu>
          <Dropdown.Header>Shop</Dropdown.Header>
          <Dropdown.Item value="All" onClick={() => setSelectedCategory('All')}>
            Shop All
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/newArrivals">
            New In
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown text="Clothing">
              <Dropdown.Menu>
                <Dropdown.Header>RAAS World</Dropdown.Header>
                <Dropdown.Item
                  value="All"
                  onClick={() => setSelectedCategory('All')}
                >
                  All
                </Dropdown.Item>
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
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default UserHeaderDropdown;
