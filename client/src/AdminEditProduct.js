import { Form, Container, Button, Select } from 'semantic-ui-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminEditProduct( {product, editProduct} ){
    const [formState, setFormState] = useState({
        title: product.title,
        description: product.description,
        image: product.image,
        price: product.price,
        color: product.color,
        category: product.category,
        isActive: product.isActive
    })

    const {title, description, image, price, color, category, isActive} = formState
    
    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        
        fetch(`/products/${product.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formState),
        })
        .then((r) => r.json())
        .then((data) => editProduct(data))
        .then(navigate('/products'))
    }
    


    function handleFormChange(e) {
        const {name, value} = e.target
        setFormState((prevState) => ({...prevState, [name]:value}))
    }

    console.log(formState)

    const options = [
        { key: 's', text: 'Saree', value: 'saree' },
        { key: 'f', text: 'Female', value: 'female' },
        { key: 'o', text: 'Other', value: 'other' },
      ]

    return(
        <div>
        <Container>
            <Form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input onChange={handleFormChange} type="text" id="title" name="title" value={title} ></input>

                <label htmlFor="description">Description</label>
                <input onChange={handleFormChange} type="text" id="description" name="description" value={description} ></input>

                <label htmlFor="image">Image</label>
                <input onChange={handleFormChange} type="text" id="image" name="image" value={image} ></input>

                <label htmlFor="price">Price</label>
                <input onChange={handleFormChange} type="number" id="price" name="price" value={price}></input>

                <label htmlFor="color">Color</label>
                <input onChange={handleFormChange} type="text" id="color" name="color" value={color}></input>

                <Form.Field onChange={handleFormChange} control={Select} label='Category' options={options} value={category}/>

                <label htmlFor="isActive">In Stock</label>
                <input onChange={handleFormChange} type="radio" id="isActive" name="isActive" value={isActive}></input>


                <br></br>
                <br></br>
                <Button type="submit" >Submit</Button>
                <br></br>
            </Form>
        </Container>
        </div>
    )
}

export default AdminEditProduct;