import React from 'react';

import {Card,Button,Modal,InputGroup,FormControl,Form} from 'react-bootstrap'

import TestInner from './testInner'

import { Route, Link} from "react-router-dom";
    


class Test extends React.Component{

    constructor(props){
        super(props)

        
    }

    
    
    

    
    render(){
        
        return(
            <>
            <Card style={{ width: '18rem' }}>
                
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary"></Button>
                </Card.Body>
            </Card>
            
            
            
       </>
        );
    }
}

export default Test;