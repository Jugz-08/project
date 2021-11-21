import React from 'react'
import { Card , Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BookCard = ({details}) => {
    const image = './logo192.png'
    const path = '/book/'+details.id
    return (
        <div style={{ width: '30rem', border:'2px solid black', margin:'40px',padding:'10px' , fontSize:'12px'}}>
            <Card >
                <Card.Img variant="bottom" src={details.link} style={{marginLeft:'4rem'}} />
                <Card.Body>
                    <h2>{details.title}</h2>
                    <Card.Text>
                    {details.details}
                    </Card.Text>
                   
                    <Button><Link to={path} style={{color:'white'}}>View this book</Link></Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default BookCard
