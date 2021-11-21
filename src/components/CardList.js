import React from 'react'
import { Container , Row,Col,InputGroup,FormControl} from 'react-bootstrap'
import BookCard from './BookCard'
import { useEffect , useState} from 'react'
import axios from 'axios'

const CardList = () => {

    const [books, setbooks] = useState([])
    const [keyword, setkeyword] = useState('')
    useEffect(() => {
       const response= axios.get(' http://localhost:8001/books').then((data)=>setbooks(data.data))
       console.log(books)
    }, [])

    
    return (
        
        <Container className='fluid' style={{marginLeft:'10px'}}>
            <InputGroup className="mb-3" style={{marginLeft:'40px'}}>
                <InputGroup.Text id="basic-addon1">Search Books</InputGroup.Text>
                <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e)=>setkeyword(e.target.value)}
                />
            </InputGroup>
            <Row>
                {books.map(value=>{
                    console.log("*************************")
                    if(keyword){
                        console.log(keyword , value.author,value.title)
                        if(value.title.toLowerCase().includes(keyword) || value.author.toLowerCase().includes(keyword)){
                            return (
                                <Col md={4}><BookCard details={value}/></Col>
                            )
                        }
                    }
                    else{
                        return (
                            <Col md={4}><BookCard details={value}/></Col>
                        )
                    }
                })}
            </Row>
        </Container>
        
    )
}

export default CardList
