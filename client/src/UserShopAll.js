import React, { useState, useEffect } from 'react';
import UserLandingHeader from './UserLandingHeader';
import { Card, Image } from 'semantic-ui-react';
import Filter from './UserCategoryFilter';

function UserShopAll() {
    const [products, setProducts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("All");

    function fetchProducts() {
        fetch("/products")
        .then(response => response.json())
        .then(data => setProducts(data))
    }
    
    useEffect(fetchProducts, []);

    function handleCategoryChange(category) {
        setSelectedCategory(category);
    }

    let selectedProducts = []

    products?.map(product => 
        product.categories?.filter(
            category => {
                if (selectedCategory === 'All') {
                    return category.name !== null && selectedProducts.push(product)
                } else {
                    return category.name === selectedCategory && selectedProducts.push(product)
                }
            }
        )
    )

    console.log(products)

    const productsMap = selectedProducts?.map((product) => {
        return (
            <Card key={product.id} >
                <Image src={product.image} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{product.title}</Card.Header>
                    <Card.Meta>${parseFloat(product.price).toFixed(2)}</Card.Meta>
                    {/* {product.categories.map((category) =>{
                        return <Card.Meta key={category.id} >{category.name}</Card.Meta>
                    })} */}
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
