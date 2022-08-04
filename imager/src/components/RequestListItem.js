import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { ListGroupItem } from "react-bootstrap";
import Axios from 'axios'



export default function RequestListItem(props,num){


    let username = "";
        let email ="";
        let updatedAt ="";
        let id;
        let number;

    try{
     id = props._id ;
     username = props.username;
     email =props.email;
     updatedAt = props.updatedAt
     number = num;
    }
    catch(e){
        console.log(e)
        username = "";
        email ="";
        updatedAt ="";
    }


    return (

    
        <Container className="requestListItem">
            <Row>
            <Col sm={8}>
            <Badge variant="light">{number}</Badge>{' '}
            <ListGroup>
            <ListGroupItem>Name :{username} </ListGroupItem>
            <ListGroupItem>Email : {email}</ListGroupItem>
            <ListGroupItem>Updated at: {updatedAt}</ListGroupItem>  
            </ListGroup>
            </Col>
            <Col sm={4} >
            <Button variant="success" className="reqlistitemButton" onClick={()=> {
                console.log(`id ${id}`)
                Axios.post(`http://localhost:8000/api/admin/accept/${id}`)
                .then(function(response){
                    console.log(response);
                    
                })
                .catch((e)=>console.log(e)) 

                }}>Accept</Button>
                
            <Button variant="danger" className="reqlistitemButton" onClick={()=> {
                console.log(`id ${id}`)
                Axios.post(`http://localhost:8000/api/admin/delete/${id}`)
                .then(function(response){
                    console.log(response);
                    
                })
                .catch((e)=>console.log(e)) 

                }}> Decline</Button>
            </Col>
            </Row>
        </Container>
    )

    }
