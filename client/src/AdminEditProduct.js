import { Form, Container, Button } from 'semantic-ui-react'
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

function AdminEditProduct( {product} ){
    const [formState, setFormState] = useState({})

    // let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const newFormObj = {
            title,
            description,
            image
        }
        
        fetch(`/products/${product.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFormObj),
        })
        .then((r) => r.json())
        .then((data) => console.log(data))
        // .then(navigate('/profile'))
    }
    
    const {title, description, image} = formState


    function handleFormChange(e) {
        const {name, value} = e.target
        setFormState((prevState) => ({...prevState, [name]:value}))
    }

    return(
        <div>
        <Container>
            <Form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input onChange={handleFormChange} type="text" id="title" name="title" placeholder={product.title} ></input>

                <label htmlFor="description">Description</label>
                <input onChange={handleFormChange} type="text" id="description" name="description" placeholder={product.description} ></input>

                <label htmlFor="image">Image</label>
                <input onChange={handleFormChange} type="text" id="image" name="image" placeholder={product.image} ></input>

            <Button type="submit" >Submit</Button>
                <br></br>
            </Form>
        </Container>
        </div>
    )
}

export default AdminEditProduct;