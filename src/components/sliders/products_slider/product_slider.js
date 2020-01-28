


import {observer, inject} from 'mobx-react';
import React, { Component } from "react";
import Slider from "react-slick";
import { object } from 'prop-types';
import { keys } from 'mobx';

import "./style.less";



@inject('stores') @observer class CustomSlide extends Component {

  

  


  
  

  render() {
    
    

    
    if(this.props.idOfProduct >= 1){
      return (
        
      <div  className=" product_block" >
        <img   className="col-xl-11" src={this.props.addimg} alt=""/>

      </div>
      );
    }else{
      return (
        <div   className=" product_block" >
          <img  src={this.props.img} alt=""/>
  
        </div>
      );
    }
  }
}



@inject('stores') @observer class SimpleSlider extends Component {
  
  

  

  

  // componentDidUpdate(){
  //   document.querySelector(".slick-slide.slick-active.slick-current");
  // }

  render() {
    
    
    
    // let = this.props.stores.product.item

    
    

    const settings = {
      
      dots: true,
      // infinite: true,
      speed: 500,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 3000,
      // centerMode:true,
     
      
      // appendDots: dots => (
      //   null
      // ),
      
      customPaging: (i) => (
        
        <div className="dot" >
          
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

    let srcOfAddImg = this.props.srcOfAddImg;

    let slides = srcOfAddImg.map( (img,id) =>{
      return(
        <CustomSlide img ={this.props.img} key={id} addimg={img} idOfProduct={id} />
      );
    })

    

    
    
    
    
    return (
      <div className="home_inner">
                                
      <Slider {...settings} >
        {slides}

          
        
      </Slider>
      </div>
    );
  }
}

export default SimpleSlider;