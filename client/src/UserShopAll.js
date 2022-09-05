import React, { useState, useEffect } from 'react';
import UserLandingHeader from './UserLandingHeader';
import { Card, Image } from 'semantic-ui-react';
import Filter from './UserCategoryFilter';

function UserShopAll() {
    const [products, setProducts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [category, setCategory] = useState("Saree");

    function fetchProducts() {
        fetch("/products")
        .then(response => response.json())
        .then(data => setProducts(data))
    }
    
    useEffect(fetchProducts, []);

    function handleCategoryChange(category) {
        setSelectedCategory(category);
      }


      //if category name === selectedCategory then display that product
    const productsToDisplay = products.filter((product) => {
        if (selectedCategory === "All") return true;
    
        return product.categories.map((category) => {
            // if (selectedCategory === "All") return true;
            // console.log(category.name);

            return category.name === selectedCategory;
        }) 
      });

      console.log(productsToDisplay);
      console.log(selectedCategory);

    const productsMap = productsToDisplay.map((product) => {
        return (
            <Card key={product.id} >
                <Image src={product.image} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{product.title}</Card.Header>
                    <Card.Meta>{product.price}</Card.Meta>
                    {product.categories.map((category) =>{
                        return <Card.Meta key={category.id} >{category.name}</Card.Meta>
                    })}
                </Card.Content>
            </Card>
        )
    })

    return (
        <div>
            <UserLandingHeader />
            <Filter selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange}/>
            <Card.Group itemsPerRow={4}>
                    {productsMap}
            </Card.Group>
        </div>
    );
}

export default UserShopAll;
