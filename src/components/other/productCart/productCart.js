import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import { routesMap , urlBuilder } from '~/routes';



class ProductCart extends React.Component{

    
    
    render(){
        return(
            <div  className="col-xl-4 col-sm-6">
                        <div key={this.props.id} className="block vertical__block">
                            
                                <div className="title">{this.props.brand}
                                <br/>
                                    <span>{this.props.model}</span>
                                </div>
                                <div className="right_slider_bar">
                                    <div className="price">${this.props.price}</div>
                                    <Link to={`${routesMap.products}/cart`}><i className="far fa-heart"></i></Link>
                                    <Link to={`${routesMap.products}/cart`}><i className="fas fa-shopping-cart"></i></Link>
                                </div>
                                <Link to={urlBuilder('products',{url:this.props.id})}>
                                    <div    className=" main_img">
                                        <img    className="col-xl-11"  src={this.props.srcOfImg} alt=""/>
                                    </div>
                                </Link>
                                <div className="block_fotter">
                                    <span>For {this.props.gender}, </span>
                                    <span>Made in {this.props.country}, </span> 
                                    <span>{this.props.yearOfModel}</span>
                                </div>
                        </div>
                    </div>
                );
    }
}


export default ProductCart;