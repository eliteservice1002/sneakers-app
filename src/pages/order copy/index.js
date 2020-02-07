import React,{useState} from 'react';
import { routesMap } from './node_modules/~/routes';
import { Link, NavLink } from 'react-router-dom';
import {observer, inject} from 'mobx-react';
import PropTypes from 'prop-types';
import {Form, Button, Modal} from 'react-bootstrap';

import './style.less';






 const Order = inject('stores') (observer( (props) => {
    const [showModal,show] = useState(false);
   
     let confirm = () => {
        show(!showModal);
        props.history.push(routesMap.result);
    }
    
        let orderModel = props.stores.order;
        let cartModel = props.stores.cart;
        let formFields = [];

        

        for(let name in orderModel.formData){
            let field = orderModel.formData[name];
            
            formFields.push(
                <Form.Group  key={name} controlId={'order-form-' + name}>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control 
                        className="input_co"
                        type="text" 
                        value={field.value}
                        onChange={(e) => orderModel.change(name, e.target.value)}
                    />
                    {field.valid === null || field.valid ? '' : 
                        <Form.Text className="text-muted">
                            {field.errorText}
                        </Form.Text>
                    }
                </Form.Group>
            );
        }

    return(
       <div className="check_out">

           <div className="form_inner col-12 col-md-6  offset-md-1">
               <div className="title">
                    SHIPPING DETAILS
               </div>
           
                <Form>
                    {formFields}
                </Form>
                <Link className="btn btn-warning" to="/products/cart">
                    Back to cart
                </Link>
                &nbsp;
                <Button variant="primary" 
                        onClick={()=>show(!showModal)} 
                        disabled={!orderModel.formValid}>
                    Apply order
                </Button>
                <Modal show={showModal} backdrop="static" onHide={show}>
                    <Modal.Header closeButton>
                        <Modal.Title>Check information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <strong>Total: {cartModel.total}</strong>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => show(!showModal)}>
                            Ooops
                        </Button>
                        <Button variant="primary" onClick={confirm}>
                            All right
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}));
    




  export default Order;

