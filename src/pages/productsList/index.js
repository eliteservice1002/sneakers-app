import React,{useState, useEffect} from 'react';
import {observer, inject} from 'mobx-react';
import uniq from 'lodash/uniq';

import ProductItems from "../../components/productItems"
import Filter from "./../../components/filter"


import './style.less';

import Brandslider from "~c/sliders/brand_slider";



const ProductList = inject('stores') (observer((props) =>{

        useEffect(()=>{
            productsStore.getProudcts()
        },[])
        let storeCart = props.stores.cart;
        let storeFilter = props.stores.filter;
        let productsStore = props.stores.products;

        

        return (
            
            <div className="product_list">
                <div className="container">
                    
                    
                    {!productsStore.fetchedProducts.isLoading ? 
                    <>
                    <Filter
                    brands={storeFilter.brandsMap}
                    colors={storeFilter.colorsMap}
                    sizes={storeFilter.sizesMap}
                    inputValue={storeFilter.filterParams.seacrhValue}
                    search={(value) => storeFilter.filterByInput(value)}
                    filterBy={(type) => storeFilter.filterByType(type)}
                    />
                    <ProductItems
                    items ={storeFilter.filteredProducts}
                    addToCart={() => storeCart.add()}
                    /><Brandslider />
                    </>
                    :<Loader/>}
                    
                        
                    
                
                </div>  
            </div>
    )
}))

const Loader = () =>(<div className="loader_wrapper">
                        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    </div>)

export default ProductList;