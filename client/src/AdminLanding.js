import AdminAddProduct from "./AdminAddProduct";
import AdminProductView from "./AdminProductView";
import { useState, useEffect } from "react";

function AdminLanding(){
    const [products, setProducts] = useState([])

    console.log(products)

    
    function fetchProducts() {
        fetch("/products")
        .then(response => response.json())
        .then(productData => setProducts(productData))
    }
    
    useEffect(fetchProducts, []);
    
    const onAddProduct = ((newProduct) => {
        setProducts((prevProducts) => [...prevProducts, newProduct])
      })
    
    const productsMap = products.map((product) => {
        return <AdminProductView
        key={product.id}
        product={product}
        />
    })

   return(
    <div>
        <AdminAddProduct onAddProduct={onAddProduct}/>
        <div>{productsMap}</div>
    </div>
   )
}

export default AdminLanding;