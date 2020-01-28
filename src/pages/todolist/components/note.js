import React from 'react';

import {Card,Button,Modal,InputGroup,FormControl,Form} from 'react-bootstrap'
    


class Note extends React.Component{

    constructor(props){
        super(props)

        this.editInput = React.createRef();
        
        this.state={
            
            value:this.props.value,
            isOpenInput:false,
        }
    }

editNote = (e) =>{
   this.setState({
       value:e.target.value
   })
}




submitEditInput = (e) =>{
    e.preventDefault();
    this.setState({isOpenInput:!this.state.isOpenInput}) 
    this.props.getEditNote(this.state.value,this.props.id);

}
    
    

    
    render(){

        
        

        let editModal  

        if(this.state.isOpenInput){
            
            editModal =     <>
                
                <Modal.Dialog>
                        <Modal.Header onClick={() => this.setState({isOpenInput:false})} closeButton>
                            <Modal.Title>edit Note</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>

                        <Form onSubmit={(e) =>this.submitEditInput(e)} >
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>note value is:</Form.Label>
                                <Form.Control 
                                type="text" placeholder="new text note"
                                ref={this.editInput}
                                onChange={this.editNote}
                                value={this.state.value}
                                
                                />
                                
                            </Form.Group>

                            
                            
                            <Button onSubmit={(e) =>this.submitEditInput(e)} variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                            
                            
                        </Modal.Body>

                        <Modal.Footer>
                            <Button onClick={() => this.setState({isOpenInput:false})} variant="secondary">Close</Button>
                            <Button onClick={(e) =>this.submitEditInput(e)} type="submit" variant="primary">Save changes</Button>
                        </Modal.Footer>
                </Modal.Dialog>
                </>
            
        }else{
            null
        }
        
        return(
            <>
        <Card style={{ width: '40rem' }}>
        
            <Card.Body >
                <Card.Title>{this.props.value}</Card.Title>
                <Button onClick={() => this.setState({ isOpenInput:true})} variant="outline-success">edit</Button>
                
            </Card.Body>
            <Button onClick={() => { this.props.deleteNote(this.props.id)}} variant="danger">X</Button>
            
        </Card>
        
        {editModal}
        
       </>
        );
    }
}

export default Note;