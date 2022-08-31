import { Form, Container, Button } from 'semantic-ui-react'
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

function AdminAddProduct( {onAddProduct} ){
    const [formState, setFormState] = useState({})

    // let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const newFormObj = {
            title,
            description,
            image
        }
        
        fetch("/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFormObj),
        })
        .then((r) => r.json())
        .then((data) => onAddProduct(data))
        // .then(navigate('/homefeed'))
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
                <label htmlFor="title">title</label>
                <input onChange={handleFormChange} type="text" id="title" name="title" ></input>

                <label htmlFor="description">description</label>
                <input onChange={handleFormChange} type="text" id="description" name="description"></input>

                <label htmlFor="image">image</label>
                <input onChange={handleFormChange} type="text" id="image" name="image"></input>

            <Button color='violet' type="submit" >Submit</Button>
                <br></br>
            </Form>
        </Container>
        </div>
    )
}

export default AdminAddProduct;