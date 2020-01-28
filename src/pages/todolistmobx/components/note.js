import React from 'react';
import {observer, inject} from 'mobx-react';
import {Card,Button,Modal,InputGroup,FormControl,Form} from 'react-bootstrap'
    


@inject('stores') @observer class Note extends React.Component{

    constructor(props){
        super(props)

        this.state={
            openModal:false,
        }
    }

    
    render(){
        const todostore =  this.props.stores.todolist;
        
        
        let editModal
        

        if(this.state.openModal){
            
             editModal=    <>
                
                <Modal.Dialog>
                        <Modal.Header onClick={() => this.setState({openModal:false})} closeButton>
                            <Modal.Title>edit Note</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>

                        <Form onSubmit={e =>todostore.submitEditNote(this.props.id,e)} >
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>note value is:</Form.Label>
                                <Form.Control 
                                type="text" placeholder="new text note"
                                onChange={(e) =>todostore.getEditInputValue(e)}
                                defaultValue={todostore.data}
                                // value={todostore.}
                                />
                                
                            </Form.Group>

                            
                            
                            <Button  variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                            
                            
                        </Modal.Body>

                        <Modal.Footer>
                            <Button onClick={() => this.setState({openModal:!this.state.openModal})} variant="secondary">Close</Button>
                            <Button  onClick={() => todostore.submitEditNote(this.props.id)}  type="submit" variant="primary">Save changes</Button>
                        </Modal.Footer>
                </Modal.Dialog>
                </>
        }
        
        
        return(
            <>
        <Card style={{ width: '40rem' }}>
        
            <Card.Body >
                <Card.Title>{this.props.value}</Card.Title>
                <Button onClick={()=>this.setState({openModal:!this.state.openModal})} variant="outline-success">edit</Button>
            </Card.Body>
            <Button onClick={() => todostore.deleteNote(this.props.id)} variant="danger">X</Button>
            
        </Card>
        
        {editModal}
        
       </>
        );
    }
}

export default Note;