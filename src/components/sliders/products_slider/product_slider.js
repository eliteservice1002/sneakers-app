

import "slick-carousel/slick/slick.less"; 
import "slick-carousel/slick/slick-theme.less";

import React, { Component } from "react";
import Slider from "react-slick";
import { object } from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

import "./style.less";



class CustomSlide extends Component {

  render() {

        return (
          
            <div   className=" product_block" >
              <img  src={this.props.imgs} alt=""/>
            
            </div>
          
        );
    
  }
}



 class SimpleSlider extends Component {

  state = {
    slideIndex: 0,
  };
  

  

  

  render() {
    
    
    
    
    
    
    

    const settings = {
      
      dots: false,
      infinite: false,
      speed: 500,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 3000,
      // centerMode:true,
     
      
      appendDots: dots => (
      <div className="dots">{dots}</div>
      ),
      beforeChange: (current, next) => this.setState({ slideIndex: next }),
    
     
      

      arrows:false,
      
    };

    let slides;
    let imgsArr =  this.props.srcOfAddImg;
    imgsArr.unshift(this.props.img);

    
    
    if(imgsArr.length >3){
      imgsArr.shift(this.props.img);
      slides = imgsArr.map( (img) =>{
        return(
          <CustomSlide imgs = {img} key={img}   />
        );
      })

    }else{
      slides = imgsArr.map( (img) =>{
        return(
          <CustomSlide imgs = {img} key={img}   />
        );
      })
    }
    


  let dots = imgsArr.map( (img,id)=>{
      return(
        <div key={id} className="dot_inner">
          <img  src={img} alt=""   onClick={()=>this.slider.slickGoTo(id)}/>
        </div>
      );
  })

    
    
    
    
    return (
      <>
      <div className="home_inner">
                                
      <Slider ref={slider => (this.slider = slider)} {...settings} >
        {slides}

          
        
      </Slider>
        
      </div>
      <div className="dots_pr">
          {dots}
        </div>
      </>
    );
  }
}

export default SimpleSlider;