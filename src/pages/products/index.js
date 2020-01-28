import React from 'react';
import { routesMap , urlBuilder } from '~/routes';
import { Link, NavLink } from 'react-router-dom';
import {observer, inject} from 'mobx-react';


import './style.less';


import Title from "~c/other/commonTitle.js";
import ProductCart from "~c/other2/productCart/productCart.js";

import Brandslider from "~c/sliders/brand_slider.js";





@inject('stores') @observer class Products extends React.Component{

    constructor(props) {
        super(props);
        
        
        
        
      }

    
    handleClick(){
        return e.target.clientWidth;
    }

    
    

    
    render(){
        let productsCart = this.props.stores.products.items;
        let pruductsList = productsCart.map( (product,id) =>{

             

            
                return(
                    <ProductCart 
                    
                    key={product.id}
                    brand={product.brand}
                    model={product.model}
                    price={product.price}
                    id={product.id}
                    srcOfImg={product.srcOfImg}
                    gender={product.gender}
                    country={product.country}
                    yearOfModel={product.yearOfModel}
                      />
                    
                    );
            
                
                    
                
                    
            
            
        })
        return (
            <div className="product_list">
                <div className="container">
                    <Title titleName="FIND YOUR BEST TRAINERS"/>
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

export default Products;