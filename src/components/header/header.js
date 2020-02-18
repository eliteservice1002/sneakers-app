import React,{useState,useEffect,useRef} from 'react';
import { NavLink,Link} from 'react-router-dom';
import  { routesMap } from '~/routes';
import rightNav from "./Menu-Cart.png";
import logo from "./Logo.svg"
import { withRouter, useLocation } from 'react-router-dom';

let  lastScrollTop = 0;

import "./style.less"

const Header = (props) =>{

    const navRef = useRef({});
    const urlPath = useLocation().pathname;
    
    
    useEffect( ()=>{
     
    

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[])
    
    
    function handleScroll(){
        
        let nav = navRef.current;
        
        
    
        // let st = this.state.scrollTop;
        let st = window.scrollY;
        
    
        if(st >lastScrollTop && st > 100 ){
            // down
            
            nav.classList.add("scrollDown")
            nav.classList.remove("scrollUp")
    
        }else if(st < lastScrollTop ){  
                // up
                
                nav.classList.add("scrollUp")
                nav.classList.remove("scrollDown")
    
        }
    
        if(window.scrollY ==  0){
            nav.classList.add("scrollUp");
            nav.classList.remove("scrollDown")
        }
    
        lastScrollTop = st;
    
    
    }



    

    return(
        
        <header ref={navRef}  className="header" >
            <div className="container">
  
                
                {urlPath !== "/"?<div className="header__links_right">
                        <Link to={routesMap.home} className="header__link_home"><img src={logo} alt=""/></Link>
                        <h1 className="header__title_main"> FIND YOUR BEST AIR </h1>
                    </div>:
                <div className="header__nav">
                    
                    <NavLink className="header__logo"   exact to={routesMap.home}><img src={logo} alt=""/></NavLink>
                    

                    <div className="header__nav_right" >
                        <NavLink  activeClassName="selected" exact to="/products/list">Products</NavLink>
                        <NavLink  activeClassName="selected" exact to={`${routesMap.products}/cart`}>cart</NavLink>
                        {/* <NavLink  activeClassName="selected" exact to={routesMap.todolist}>toDoList</NavLink> */}
                        <NavLink  activeClassName="selected" exact to={routesMap.hook}>News</NavLink>
                        <a>Men</a>
                        <a >Women</a>
                        <a >Kids</a>
                    </div>
                </div>}
                
                
            </div>
            
                <div className="right_nav col-xl-3 col-lg-4 col-5">
                    <img className="right_nav_bg" src={rightNav} alt=""/>
                    <div className="right_nav_inner">
                        <NavLink  activeClassName="header-selected-icon" className="search_icon" exact to={`${routesMap.products}/list`}>
                            <i className="fas fa-search fa-lg "></i>
                        </NavLink>
                        <NavLink  activeClassName="header-selected-icon" className="search_icon" exact to={`${routesMap.products}/cart`}>
                            <i className="far fa-user fa-lg "></i>
                        </NavLink>
                        <NavLink  activeClassName="header-selected-icon" className="search_icon" exact to={`${routesMap.products}/cart`}>
                            <i className="far fa-heart fa-lg "></i>
                        </NavLink>
                        <NavLink  activeClassName="header-selected-icon" className="search_icon" exact to={`${routesMap.products}/cart`}>
                            <i className="fas fa-shopping-cart fa-lg "></i>
                            <div className="cnt_Cart">{props.cartCnt}</div>
                        </NavLink>
                        
                    </div>
                </div>
            
        </header>
);
    
}


export default withRouter(Header);

 







  