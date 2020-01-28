
import "slick-carousel/slick/slick.less"; 
import "slick-carousel/slick/slick-theme.less";


import {observer, inject} from 'mobx-react';
import React, { Component } from "react";
import Slider from "react-slick";




@inject('stores') @observer class CustomSlide extends Component {
  

  render() {
    const { idOfReviews,...props} = this.props;

    let reviewsPathInStore = this.props.stores.products.reviews[idOfReviews];

    
    return (
      <div className="block_inner">
        
          
          
              <div className="maskImg">
                <img src={reviewsPathInStore.srcOfImg} alt=""/>
              </div>
              <div className="content">
                <div className="fisrt_par">{reviewsPathInStore.firstPar}</div>
                <div className="second_par">{reviewsPathInStore.secondPar}</div>
              </div>
              <div className="name">
                <div className="reviewer_name">{reviewsPathInStore.name}</div>
                <div className="reviewer_surname">{reviewsPathInStore.surName}</div>
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
      autoplaySpeed: 6000,
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

      // beforeChange: (current, next) =>{
      //   console.log(current);
      //   console.log(next);
        
      // },

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

    let rewiewsStore = this.props.stores.products.reviews;
    
    
    return (
      <div className="home_inner">
                                
      <Slider {...settings} >
          <CustomSlide idOfReviews={0} />
          <CustomSlide idOfReviews={1} />
          <CustomSlide idOfReviews={2} />
          <CustomSlide idOfReviews={3} />
          <CustomSlide idOfReviews={1} />

          
          

          
        
      </Slider>
      </div>
    );
  }
}

export default SimpleSlider;