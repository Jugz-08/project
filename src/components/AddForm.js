import React from 'react'
import { Form , Button } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'
const AddForm = () => {

    const [name, setname] = useState('')
    const [Details, setDetails] = useState('')
    const [url, seturl] = useState('')
    const [author, setauthor] = useState('')

    const handleClick=()=>{
        axios.post("http://localhost:8001/books",{
            title:name,
            details:Details,
            link:url,
            author
        })
    }
    return (
        <div style={{marginLeft : "25%" , width:"55rem",padding:'2rem'}}>
           <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" onChange={(e)=>setname(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Details</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={(e)=>setDetails(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Image Url</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={(e)=>setauthor(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Image Url</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={(e)=>seturl(e.target.value)} />
                </Form.Group>
                
            </Form>
            <Button variant="primary" style={{marginTop : "10px"}} onClick={()=>handleClick()}>Go somewhere</Button>
        </div>
    )
}

export default AddForm
