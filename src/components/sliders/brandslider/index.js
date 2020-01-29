
import "slick-carousel/slick/slick.less"; 
import "slick-carousel/slick/slick-theme.less";


import {observer, inject} from 'mobx-react';
import React, { Component } from "react";
import Slider from "react-slick";

import "./brands.less"

import adidas from "./imgs/adidas.png";
import newbalance from "./imgs/New_balance.png";
import nike from "./imgs/nike.png";
import LE_COQ_SPORTIF from "./imgs/LE_COQ_SPORTIF.png";


@inject('stores') @observer class CustomSlide extends Component {
  

  render() {
    const { idOfBrand,...props} = this.props;

    let brandsPathInStore = this.props.stores.products.brands[idOfBrand];

    


   
    
    return (
      <div className="bloks_inner">
        <div className="block_of_brand">
          <img src={brandsPathInStore.urlOfImfg} alt=""/>
          <div className="brand_name">{brandsPathInStore.nameOfBrand}</div>
        </div>
      </div>
    );
  }
}



@inject('stores') @observer class SimpleSlider extends Component {
  
  

  render() {
    
    

    
    

    const settings = {
      
      dots: true,
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4 ,
      arrows:false,
      // centerMode:true,
     
      
      appendDots: dots => (
        <div >
          <ul className="dots" > {dots} </ul>
        </div>
      ),
      
      customPaging: (i) => (
        <div  className="dot ">
          <div className="div">{i}</div>
        </div>
      ),
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

     
      

      
    };

    
    
    return (<div className="popular_brands">
      
          <div className="inner_brands">
              <div className="title">
                  <div className="line"></div>
                  <div className="title_content">POPULAR BRANDS</div>
              </div>
              <div className="brand_slider">
              <div className="home_inner">
                                  
                                  <Slider {...settings} >
                                      <CustomSlide idOfBrand={0} />
                                      <CustomSlide idOfBrand={1} />
                                      <CustomSlide idOfBrand={2} />
                                      <CustomSlide idOfBrand={3} />
                                      <CustomSlide idOfBrand={2} />
                                      
                          
                                      
                                    
                                  </Slider>
                                </div>
              </div>
              
          </div>
      
  </div>
      
    );
  }
}

export default SimpleSlider;