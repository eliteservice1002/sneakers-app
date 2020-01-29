import React from 'react';
import { routesMap } from '~/routes';
import { Link, NavLink } from 'react-router-dom';
import {observer, inject} from 'mobx-react';

import './style.less';

import {Col,Row,Container} from 'react-bootstrap';





@inject('stores') @observer class Cart extends React.Component{
    render(){
        return (
            <div className="cart">
                <div className="container">
                    
                    
                </div>
            </div>
            
        );
    }
}

export default Cart;