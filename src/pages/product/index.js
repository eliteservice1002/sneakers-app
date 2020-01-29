import React from 'react';
import { routesMap } from '~/routes';
import { Link, NavLink } from 'react-router-dom';
import {observer, inject} from 'mobx-react';

import './style.less';
import red from "./imgs/red.png";
import blue from "./imgs/brightBlue.png";
import grey from "./imgs/grey.png";
import brightBlue from "./imgs/blue.png";



import ProductSlider from "~c/sliders/products_slider/product_slider.js"
import Error404 from "~c/errors/404"




@inject('stores') @observer class Product extends React.Component{

    

    render(){
        let productStore = this.props.stores.products;
        let id = this.props.match.params.url;

        
        
        let product = productStore.getById(id);

        
        
        if(product == null || product.id.toString() !== id ){
            return <Error404/>
        }
        return (
            <div className="product">
                <div className="container ">
                    
                    <div className="item_inner">
                        {/*  */}
                        <div className="row">
                            <div className="col-9 col-xl-9">
                                <ProductSlider srcOfAddImg={product.srcOfAddImg} img={product.srcOfImg} id={id}/>
                            </div>

                            <div className="col-3 col-xl-3">
                                <div className="product__order">
                                    
                                    <div className="price">{product.price+"$"}</div>    
                                    <div className="title">
                                        <div className="brand">{product.brand}</div>
                                        <div className="model">{product.model},<br/>
                                        <span>{product.gender+"'s"}</span>
                                        </div>
                                    </div>

                                    
                                        <div className="color">
                                            <div className="title">Choose your favourite color</div>
                                            <div className="colors">
                                                
                                            </div>
                                        </div>
                                        <div className="size">
                                            <div className="title">
                                                <div className="choose"></div>
                                                <div className="regions"></div>
                                            </div>
                                            <div className="sizes">
                                                <div className="options"></div>
                                                <div className="options"></div>
                                                <div className="options"></div>
                                            </div>
                                        </div>
                                                        
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
            
            // {/* slider */}
            // <ProductSlider img={product.srcOfImg} otherImgs={{}}/>

        );
    }
}

export default Product;