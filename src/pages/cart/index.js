import React from 'react';
import { routesMap } from '~/routes';
import { Link, NavLink } from 'react-router-dom';
import {observer, inject} from 'mobx-react';


import './style.less';

import {Col,Row,Container} from 'react-bootstrap';





@inject('stores') @observer class Cart extends React.Component{

    

    

    render(){
        let prCart = this.props.stores.cart;

        let cart_prs = prCart.productsDetailed.map( (pr,id) =>{
            
            return(
                <div key={id} className="cart_item">
                    <div className="img_wrapper col-5">
                        <img   className="img_cart " src={pr.srcOfImg} alt=""/>
                    </div>
                    <div className="pr_info col-5">
                            <div className="title">
                                <div className="brand">{pr.brand}</div>
                                <div className="model">{pr.model}</div>
                            </div>
                            <div className="minmax">{null}</div>
                            <div className="price">{null}</div>
                            <div className="nav_bar">
                                <div className="gender">{null}</div>
                                <div className="color">{null}</div>
                                <div className="size price">{null}</div>
                            </div>
                    </div>

                    <div className="delete col-1 offset-1" onClick={() =>prCart.remove(pr.id)} >X</div>
                    
                </div>
            );
        })
        return (
            <div className="cart">
                
                    <div className="cart_inner">
                        {cart_prs}
                    </div>
            
            </div>
            
        );
    }
}

export default Cart;