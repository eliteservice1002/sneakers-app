import React from 'react';
import { routesMap , urlBuilder } from '~/routes';
import { Link, NavLink } from 'react-router-dom';
import {observer, inject} from 'mobx-react';


import './style.less';

import Brandslider from "~c/sliders/brand_slider";





@inject('stores') @observer class ProductList extends React.Component{

    constructor(props) {
        super(props);
        
        
        
        
      }


    
    

    
    render(){
        let productsCart = this.props.stores.products.items;
        let pruductsList = productsCart.map( (product,id) =>{

            return(
                <div key={product.id} className=" col-4  ">
                        <div className="block">
                                    <div className="title">{product.brand}
                                    <br/>
                                        <span>{product.model}</span>
                                    </div>
                                    <div className="right_slider_bar">
                                        <div className="price">${product.price}</div>
                                        <Link to={`${routesMap.products}/cart`}><i className="far fa-heart"></i></Link>
                                        <Link to={`${routesMap.products}/cart`}><i className="fas fa-shopping-cart"></i></Link>
                                    </div>
                                    <Link to={`${product.id}`}>
                                        <div  className=" main_img">
                                            <img className="col-11" src={product.srcOfImg} alt=""/>
                                        </div>
                                    </Link>
                                    <div className="block_fotter">
                                        <span>For {product.gender}, </span>
                                        <span>Made in {product.country}, </span> 
                                        <span>{product.yearOfModel}</span>
                                    </div>
                            </div>
                        </div>
            )  ;
        })
        return (

            // sorting
            <div className="product_list">
                <div className="container">
                    
                    <div className="col-5 filter__bar">
                        <div className="filter_cat1"><i className="fas fa-filter"></i>Filters </div>
                        <div className="filter_cat"><i className="fas fa-ellipsis-v"></i>For everyone</div>
                        <div className="filter_cat"><i className="fas fa-ellipsis-v"></i>Brand</div>
                        <div className="filter_cat"><i className="fas fa-ellipsis-v"></i>Size</div>
                        <div className="filter_cat"><i className="fas fa-ellipsis-v"></i>Color</div>
                    </div>

                        
                    <div className="  products__inner">
                            {pruductsList}
                        <div className="btn">Load More</div>
                    </div>
                <Brandslider />
                
                </div>
            </div>
            
        );
    }
}

export default ProductList;