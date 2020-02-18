import React from 'react';

import {BrowserRouter as Router, Route, Switch, NavLink,Link, withRouter} from 'react-router-dom';
import routes, { routesMap } from '~/routes';
import withStore from '~/hocs/withStore';
import Menu from 'react-burger-menu/lib/menus/slide'

import Header from './../components/header/header.js';
import "./style.less"

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'



import { TransitionGroup, CSSTransition } from "react-transition-group";



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
                    
                            <Header cartCnt={cart.cartCnt} />
                       
                            
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
