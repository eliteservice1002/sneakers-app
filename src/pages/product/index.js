import React from 'react';
import { routesMap } from '~/routes';
import { Link, NavLink } from 'react-router-dom';
import {observer, inject} from 'mobx-react';


// assets
import './style.less';
import red from "./imgs/red.png";
import blue from "./imgs/blue.png";
import white from "./imgs/white.png";
import dark_blue from "./imgs/dark_blue.png";
import shapeSmall from "./imgs/shapeSmall.png";



import ProductSlider from "~c/sliders/products_slider/product_slider.js"
import Error404 from "~c/errors/404";






@inject('stores') @observer class Product extends React.Component{
    constructor(props){
        super(props);
        this.state =  {
          region:"EU",
          
        }
        this.slider = React.createRef();
    
     }

     componentDidMount(){
        window.scrollTo(0, 0);
     }

   

     changeSlide = (cnt) =>{
         this.slider.current.slider.slickGoTo(cnt);  
     }
    

    render(){
        let productStore = this.props.stores.products;
        let prCart = this.props.stores.cart;
        let id = this.props.match.params.url;
        let product = productStore.getById(id);

        if(product == null || product.id.toString() !== id ){
            return <Error404/>
        }

        let imgsArr = product.srcOfAddImg;

         const isAvailable = (objKey) =>{
            return objKey !== true ? "disabled":"";
        }

        
        
        let dots = imgsArr.map( (img,id)=>{
            return(
              <div key={id} className="dot_inner" onClick={() =>this.changeSlide(id)}>
                <img  src={img} alt="" />
              </div>
            );
        })
       
        let colors = product.availableColors;

        let colorsBtns = Object.keys(colors).map( (c,id)=>{
            
                return <img key={id}
                    className={`${isAvailable(colors[c])}  color ${c === this.state.color ? "border" : "" }` }  
                    src={`/dist/images/${c}.png`}
                    onClick={colors[c] == true ?()=> this.setState({color:c}) : null}

                    alt=""   />
        });

        let sizes = product.availableSize;

        let sizesCarts = Object.keys(sizes).map( (s,id) =>{
            return(
                <div key={id} className={`${isAvailable(sizes[s])} size col-2 ${s === this.state.size ? "border" : "" }` }  
                onClick={sizes[s] == true ? () =>this.setState({size:s}) :null}>
                    <div className="number">{s}</div>
                    <div className="region">{this.state.region}</div>
                </div>
            );
        })

        const regions = product.regions;

        let regionsCards = Object.keys(regions).map( (r,id)=> (
            <div key={r} className={`${isAvailable(regions[r])} region` } >{r}</div>
        ))
        
        
        
return (
    <div className="product">

        {!prCart.isItSelected.selectedAll ? // check did user select all params 
         <div className="didnt_select">Please choose color and size</div>
        :null}
        
        <div className="container">
            <div className="item_inner">
                
                <div className="row">
                    <div className="col-12  col-md-9 p-0">
                        <ProductSlider ref={this.slider} srcOfAddImg={product.srcOfAddImg}  id={id}/>

                    </div>

                    <div className="col-12 col-md-3">
                        <div className="product__order">
                            
                            <div className="price">{product.price+"$"}</div>    
                                <div className="mainTitle">
                                    <div className="brand">{product.brand}</div>
                                    <div className="model">{product.model},<br/>
                                    <span>{product.gender+"'s"}</span>
                                    </div>
                                </div>

                            
                                <div className="colorWrapper">
                                    <div className="title">Choose your favourite color</div>
                                    <div className="colors">
                                        {colorsBtns}
                                    </div>
                                </div>

                                <div className="size">
                                    <div className="title">
                                        <div className="choose">Choose your size</div>
                                        <div className="regions">
                                            {regionsCards}
                                        </div>
                                    </div>
                                    <div className="sizes">
                                        {sizesCarts}
                                    </div>
                                </div>
                                <div className="add_to_pr_cart " 
                                onClick={() => prCart.add(
                                    id,
                                    this.state.color,
                                    this.state.size,
                                    this.state.region
                                    )}>
                                
                                <i className="fas fa-shopping-cart"></i>
                                    Add to Cart
                                </div>
                                <div className="add_to_fav">
                                    <i className="far fa-heart"></i>Add to favourites
                                </div>
                                
                                                
                        </div>
                    </div>
                    

                    
                </div>
                <div className="dots_pr">
                            {dots}
                </div>
            </div>

            <div className="aboute__product col-7 offset-1" >
                    <div className=" title">
                        <img src={shapeSmall} alt=""/>
                        <div className="brand">{product.brand}</div>
                        <div className="model">{product.model}</div>
                    </div>
                    <div className="content">The Nike Air Max 270, which is Nike’s first lifestyle Air unit, is a balance of the old and the new. Built to withstand all-day wear for an active lifestyle, it has a design and features with performance in mind without the need of sacrificing a must-have style that Air Max followers have been yearning for. It flaunts an exaggerated heel Air unit (the tallest yet measuring 32-mm), a bootie construction, and a breathable knit and mesh upper in numerous colorways that collectively makes a statement and gives the silhouette a signature look that have gained the approval of sneakerheads, Nike Air Max followers, and the sneaker market in general.This contemporary Air Max model is as impressive as it looks. It ticks off all the boxes concerning comfort, support, superb fit, and lightness, which makes up for its expensive price point. Though, those with wide feet found this narrow-fitting in the toe box and opted for a half size bigger than their usual for a more comfortable fit. Quote from Runrepeat</div>
                </div>

            </div>
    </div>
            
        );
    }
}

export default Product;