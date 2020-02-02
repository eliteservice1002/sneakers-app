

import "slick-carousel/slick/slick.less"; 
import "slick-carousel/slick/slick-theme.less";

import React, { Component } from "react";
import Slider from "react-slick";
import { object } from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

import "./style.less";



class CustomSlide extends Component {

  constructor(props){
    super(props);
    this.img = React.createRef();
    this.state={
      imgw:""
    }
  }
  

  propertyWidthForImg = () =>{
    let img = this.img.current;
    this.setState({imgw:img.naturalWidth});
    if(img.naturalWidth < 400){
      
      img.classList.add('vertical_img');
      img.classList.remove('col-xl-8','col-lg-10', 'col-md-12');
    }else{
      img.classList.remove('vertical_img');
    }
  }
  render() {

        return (
          
            <div className=" product_block " >
              <img className=" col-xl-8 col-lg-10 col-md-12" onLoad={()=>this.propertyWidthForImg()} ref={this.img} src={this.props.imgs} alt=""/>
            
            </div>
          
        );
    
  }
}



 class SimpleSlider extends Component {

  constructor(props){
    super(props);
    this.state =  {
      slideIndex: 0,
    }
    

 }


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

    
    let imgsArr =  this.props.srcOfAddImg;
    
  
    let slides = slides = imgsArr.map( (img) =>{
        return(
          <CustomSlide imgs = {img} key={img}   />
        );
      })
    
    


  

    
    
    
    
    return (
      <>
      <div className="home_inner">
                                
      <Slider ref={slider => (this.slider = slider)} {...settings} >
        {slides}
      </Slider>
        
      </div>
        
      </>
    );
  }
}

export default SimpleSlider;