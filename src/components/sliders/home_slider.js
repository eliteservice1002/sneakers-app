
import "slick-carousel/slick/slick.less"; 
import "slick-carousel/slick/slick-theme.less";


import {observer, inject} from 'mobx-react';
import React, { Component } from "react";
import Slider from "react-slick";
import { Link, NavLink } from 'react-router-dom';
import { routesMap , urlBuilder } from '~/routes';



@inject('stores') @observer class CustomSlide extends Component {

  constructor(props) {
    super(props);
    
    
        this.state = {
            opacityFlag:true,
        }
    
  }

  handleClick = (e)=>{
    // e.preventDefault();
    e
  }
  

  render() {
    const { idOfProduct,...props} = this.props;

    let productsPathInStore = this.props.stores.products.items[idOfProduct];

    
    return (
      
        <div {...props}   className="block" style={{display:"flex"}}>
          
          <div className="title"><span>{productsPathInStore.brand}</span> <br/>{productsPathInStore.model}</div>
          
            <div className="img_inner">
                  <Link  to={urlBuilder('products',{url:productsPathInStore.id})} >
                    <img  src={productsPathInStore.srcOfImg}  alt=""/>
                  </Link>
                <div className="price_inner">
                <div className="price" >
                <div className="price_img" >{productsPathInStore.price}$</div>
                </div>
                <div className="cart" ></div>
              </div>
            </div>
           
        </div>
        
      
    );
  }
}



@inject('stores') @observer class SimpleSlider extends Component {
  
  

  

  

  // componentDidUpdate(){
  //   document.querySelector(".slick-slide.slick-active.slick-current");
  // }

  render() {
    
    let  path = "../dist/imgs/imgsForMainSlider/sneakers0";
    
    let namesOfBrands = [
      "Nike","Adidas","New Balance","Nike"
    ]
    let namesOfSneakers = [
      "AIR270","Y-3-Kai.."," X 90"," M2K Te.."
    ]

    
    

    const settings = {
      
      dots: true,
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 3000,
      // centerMode:true,
     
      
      appendDots: dots => (
        <div >
          <ul className="dots" > {dots} </ul>
        </div>
      ),
      
      customPaging: (i) => (
        
        <div className="dot" >
          <div className="title" >{namesOfBrands[i]+","}
          <br/>
          <span>{namesOfSneakers[i]}</span>
        </div>
            <img src={path + (i+1) +".png"} alt=""/>
        </div>
      ),
      beforeChange: i =>{
        // this.priceTag.current.classList.add("dotExit");
        //console.log(i);
        // if(i !== 3){
        //   this.priceTag.current.classList.remove("dotExit");
          
        // }else{
        //   this.priceTag.current.classList.add("dotExit");
        // }
        // console.log(this.priceTag.current);
        
      },
     
      

      arrows:false
    };

    
    
    return (
      <div className="home_inner">
                                
      <Slider {...settings} >
          <CustomSlide onClick={()=>console.log(1)} idOfProduct={0} />
          <CustomSlide idOfProduct={1} />
          <CustomSlide idOfProduct={2} />
          <CustomSlide idOfProduct={3} />

          
        
      </Slider>
      </div>
    );
  }
}

export default SimpleSlider;