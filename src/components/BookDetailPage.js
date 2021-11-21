import React from 'react'
import { useEffect , useState} from 'react'
import axios from 'axios'
import { Container , Row,Col,InputGroup,FormControl,Image,ListGroup,Button} from 'react-bootstrap'

const BookDetailPage = (props) => {
    const id = props.match.params.id
    const [detail, setdetail] = useState()
    const [comment, setcomment] = useState()

    useEffect(() => {
        const response= axios.get(' http://localhost:8001/books/'+id).then((data)=>setdetail(data.data))
     }, [])


    const handleClick=()=>{
        let xyz = {...detail}
        xyz.comments.push(comment)
        setdetail(xyz)
        axios.put(' http://localhost:8001/books/'+id,detail).then(value=>console.log("=================== ", value))
    }
        
    return (
        <Container className="fluid">
            <Row>
                <Col md="4">
                <Image src={detail?.link} fluid width="200"/>
                </Col>
               
                <Col md="7">
                    <Row><h1>{detail?.title}</h1></Row>
                    <Row><p>{detail?.details}</p></Row>
                    <Row><h3>Average Rating {detail?.rating.reduce((a, b) => a + b, 0)/ 5}</h3></Row>
                    <Row>
                    <ListGroup>
                        {
                            detail?.comments.map(value=>{
                                return(
                                    <ListGroup.Item disabled>{value}</ListGroup.Item>
                                )
                            })
                        }
                            
                            
                    </ListGroup>
                    </Row>
                    <Row>
                        <Col md="5">
                        <InputGroup style={{marginLeft:"-15px"}}>
                                    <InputGroup.Text id="basic-addon1" style={{width:'700'}}></InputGroup.Text>
                                    <FormControl
                                    placeholder="Comment"
                                    onChange={(e)=>setcomment(e.target.value)}
                                    />
                                </InputGroup>
                                
                        
                        </Col>
                        <Col>
                            <Button onClick={()=>handleClick(   )}>Add the comment</Button>
                        </Col>
                                
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default BookDetailPage
