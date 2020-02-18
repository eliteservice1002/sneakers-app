import React from 'react';
import { routesMap , urlBuilder } from '~/routes';
import { Link, NavLink, Switch,Route } from 'react-router-dom';
import {observer, inject} from 'mobx-react';
import loadable from '@loadable/component'


import './style.less';
// routes 
// import Product from '~p/product';
const  ProductsList = loadable(()=> import("~p/productsList"));
const  Product = loadable(()=> import("~p/product"));

import Cart from '~p/cart';
import Order from '~p/order';

// other

// import Title from "~c/other/header/header.js"












@inject('stores') @observer class Products extends React.Component{

    constructor(props) {
        super(props);
       
        
            this.state = {
                lastScrollTop:0,
            }
        
      }

    

      componentDidMount(){
          window.scrollTo(0, 0);
          
        
        
           
        
    }



    render(){
        
        let cartStore = this.props.stores.cart;
        
        return(
       <>
        
    
                <Switch>
                    <Route exact={true} path="/products/list" component={ProductsList}/>
                    <Route exact={true} path="/products/cart" component={Cart}/>
                    <Route exact={false} path="/products/order" component={Order}/>
                    <Route exact={true} path="/products/:url" component={Product}/>
                </Switch>

        </>
        );
    }
        
        
}

export default Products;