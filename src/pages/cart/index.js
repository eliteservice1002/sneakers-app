import React from 'react';
import { routesMap } from '~/routes';
import { Link, NavLink } from 'react-router-dom';
import {observer, inject} from 'mobx-react';


import './style.less';

import Minmax from "~c/inputs/minmax";




@inject('stores') @observer class Cart extends React.Component{

    

    

    render(){
        let prCart = this.props.stores.cart;
        let cart_prs = prCart.productsDetailed.map( (pr,id) =>{
            return(
                
                <div key={id} className="cart_item">
                    <div className="img_wrapper col-5">
                        <img   className="img_cart" src={pr.srcOfImg} alt=""/>
                    </div>
                    <div className="pr_info col-5">
                            <div className="sp_row">
                                <div className="title">
                                    <div className="brand">{pr.brand}</div>
                                    <div className="model">{pr.model}</div>
                                </div>
                                <div className="minmax">
                                    <Minmax
                                    min={1}
                                    max={5}
                                    cnt={pr.cnt}
                                    onChange={(cnt)=>prCart.change(pr.id,cnt)}
                                /></div>
                                <div className="price">{pr.price}$</div>
                            </div>
                            <div className="nav_bar">
                                <div className="gender">{pr.gender}'s shoe</div>
                                <div className="color">Color:{pr.color}</div>
                                <div className="size price">Size:{pr.size}</div>
                            </div>
                    </div>
                    
                    <div className="delete col-1 offset-1" onClick={() =>prCart.remove(id)} >X</div>
                    
                </div>
                
                
            
            );
        });

       
        return (
            <div className="cart">
                
                    <div className="cart_inner">
                        {cart_prs}
                        {prCart.cartCnt == 0  ? 
                                    <div className="empty_cart">
                                        You have not selected more than one product <br/> :(
                                    </div>
                            :<div className="total_bar col-6">
                                <div className="total col-6">TOTAL AMOUNT: ${prCart.total}</div>
                                <Link className="col-6 check_out_cart" to="/products/order">
                                    <div className=" ">Check out</div>
                                </Link>
                            </div>}
                                
                    </div>
                    
            </div>
            
        );
    }
}

export default Cart;