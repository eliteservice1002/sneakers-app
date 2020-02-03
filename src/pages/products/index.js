import React from 'react';
import { routesMap , urlBuilder } from '~/routes';
import { Link, NavLink, Switch,Route } from 'react-router-dom';
import {observer, inject} from 'mobx-react';

import './style.less';
// routes 
import Product from '~p/product';
import ProductsList from '~p/productsList';
import Cart from '~p/cart';

// other

// import Title from "~c/other/header/header.js"



import logo from "./assets/Logo.png";
import rightNav from "./assets/Menu-Cart.png";








@inject('stores') @observer class Header extends React.Component{

    constructor(props) {
        super(props);
        this.nav = React.createRef();
        
            this.state = {
                scrollTop: 0,
                
                lastScrollTop:0,
            }
        
      }

    

      componentDidMount(){
          window.scrollTo(0, 0);
          
        window.addEventListener('scroll', this.handleScroll);
        
           
        
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        
        let nav = this.nav.current;
        
        

        let st = this.state.scrollTop;
        

        if(st > this.state.lastScrollTop ){
            
            // down
            nav.classList.add("scrollDown")
            nav.classList.remove("scrollUp")

    }else if(st < this.state.lastScrollTop && st !==0){  
            // up
            nav.classList.add("scrollUp")
            nav.classList.remove("scrollDown")

    }
    
        this.state.lastScrollTop = st;



        
        this.setState({
            scrollTop:window.scrollY
        });

       
    }
    

    render(){
        

        let cartStore = this.props.stores.cart;
        
        return(
       
        <div className="container products">
            <div ref={this.nav} className="common_title_wrapper">
                <div className="leftside_inner">
                    <Link to={routesMap.home} className="homeLink"><img src={logo} alt=""/></Link>
                    <div className="common__title"> FIND YOUR BEST AIR </div>
                </div>
                <div className="right_nav col-xl-3 col-lg-4 col-5">
                    <img className="right_nav_bg" src={rightNav} alt=""/>
                    <div className="right_nav_inner">
                        <NavLink  activeClassName="selected" className="search_icon" exact to={`${routesMap.products}/cart`}>
                            <i className="fas fa-search fa-lg "></i>
                        </NavLink>
                        <NavLink  activeClassName="selected" className="search_icon" exact to={`${routesMap.products}/cart`}>
                            <i className="far fa-user fa-lg "></i>
                        </NavLink>
                        <NavLink  activeClassName="selected" className="search_icon" exact to={`${routesMap.products}/cart`}>
                            <i className="far fa-heart fa-lg "></i>
                            </NavLink>
                        <NavLink  activeClassName="selected " className="search_icon" exact to={`${routesMap.products}/cart`}>
                            <i className="fas fa-shopping-cart fa-lg "></i>
                            {cartStore !== 0 ? <div className="cnt_Cart">{cartStore.cartCnt}</div>:null}
                        </NavLink>
                        
                        
                    </div>
                </div>
            </div>
                <Switch>
                    <Route exact={true} path="/products/list" component={ProductsList}/>
                    <Route exact={true} path="/products/cart" component={Cart}/>
                    <Route exact={true} path="/products/:url" component={Product}/>
                </Switch>

        </div>
        );
    }
        
        
}

export default Header;