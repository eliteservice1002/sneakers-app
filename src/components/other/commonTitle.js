import React from 'react';
import "./style.less"
import logo from "./Logo.png";
import { routesMap } from '~/routes';
import { Link, NavLink } from 'react-router-dom';



 class commonTitle extends React.Component {
    render(){

        
        
        

        return(
            <div className="common_title_wrapper">
                <Link to={routesMap.home} className="homeLink"><img src={logo} alt=""/></Link>
                <div className="common__title">
                    {this.props.titleName}
                    {this.props.bold_text}
                    
                </div>
                <div className="right_nav">
                    <div className="right_nav_inner">
                        <NavLink to={routesMap.cart}> <img className="search_icon" src="/dist/imgs/imgsForHomeUsage/avatar.png" alt=""/></NavLink>
                        <NavLink to={routesMap.cart}><img className="search_icon" src="/dist/imgs/imgsForHomeUsage/icons8-search-64.png" alt=""/></NavLink>
                        <NavLink to={routesMap.cart}><img className="search_icon" src="/dist/imgs/imgsForHomeUsage/icons8-heart-52.png" alt=""/></NavLink>
                        <NavLink to={routesMap.cart}><img className="search_icon" src="/dist/imgs/imgsForHomeUsage/icons8-shopping-cart-128.png" alt=""/></NavLink>
                    </div>
                </div>
            </div>
                
            
        );
    }
}


export default commonTitle;