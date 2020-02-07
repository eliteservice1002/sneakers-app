import React,{useState} from 'react';
import {observer, inject} from 'mobx-react';
import {Route,Link,useRouteMatch} from "react-router-dom";

import './payment.less';

const Payment =  inject('stores') (observer( (props) => {
    props.stores.order.data
    return(
        <>
        <div className="pay_by">
            <div  className="option option_card">
            <i className="far fa-credit-card"></i>Pay by card
            </div>

            <div  className="option option_payPal">
            <i className="fab fa-paypal"></i> Pay by Paypal
            </div> 
            
        </div>
        <div className="card_order">
            <div className="card-number_wrapper">
                <div className="title">Card Number</div>
                <div className="card_number"></div>
            </div>
        </div>
        </>
    );
}));



export default Payment;