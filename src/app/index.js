import React from 'react';

import {BrowserRouter as Router, Route, Switch, NavLink,Link, withRouter} from 'react-router-dom';
import routes, { routesMap } from '~/routes';
import withStore from '~/hocs/withStore';

import "./style.less"
import Menu from 'react-burger-menu/lib/menus/slide'
import rightNav from "./imgs/Menu-Cart.png";






import { TransitionGroup, CSSTransition } from "react-transition-group";
import { reaction, when } from 'mobx';


class App extends React.Component{
    
    constructor(props) {
        super(props);
         
        
      }
   
    
    render(){
        
        
        

        let routesComponents = routes.map((route) => {
            
            return <Route path={route.url}
                          component={route.component}     
                                                              
                          exact={route.exact} 
                          key={route.url}
                          
                    />;
        });

        let cart = this.props.stores.cart;


        return (
            
                <Router>
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
                                        <div className="cnt_Cart">{cart.cartCnt}</div>
                                    </NavLink>
                                    
                                </div>
                            </div>
                                
                       
                            <Switch > 
                                {routesComponents}
                            </Switch>
                        {/* </Route> */}

                        {/* <div className="cont">
                        
                        <Route  render={({location}) =>
                            <TransitionGroup >
                                <CSSTransition
                                key={location.key}
                                timeout={300}
                                classNames="page"
                                
                                >
                                    <Switch location={location}> 
                                        {routesComponents}
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>}>
                            
                        </Route>
                    </div> */}
                </Router>

                
            
        )
    }
}


export default withStore(App) ;
