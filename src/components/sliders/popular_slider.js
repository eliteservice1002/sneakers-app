import React, { Component } from "react";
import SliderMain from "react-slick";



import {observer, inject} from 'mobx-react';




@inject('stores') @observer class CustomSlide extends Component {
    render() {
      const { idOfProduct, ...props } = this.props;
      
      let productsPathInStore = this.props.stores.products.items[idOfProduct];
      return (
        <div {...props} style={{display:"flex"}} className="block">
            <div className="title">{productsPathInStore.brand}
            <br/>
                <span>{productsPathInStore.model}</span>
            </div>
            <div className="right_slider_bar">
                <div className="price">${productsPathInStore.price}</div>
                <div className="some"></div>
                <div className="some"></div>
            </div>
            <div className="main_img">
                <img src={productsPathInStore.srcOfImg} alt=""/>
            </div>
            <div className="block_fotter">
                <span>For {productsPathInStore.gender}, </span>
                <span>Made in {productsPathInStore.country}, </span> 
                <span>{productsPathInStore.yearOfModel}</span>
            </div>
        </div>
      );
    }
  }





  

  @inject('stores') @observer class SlickGoTo extends React.Component {
  state = { 
    slideIndex: 0,
    
  };

  render() {
      
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3   ,
      slidesToScroll: 1,
      arrows:false,
      
      beforeChange: (current, next) => this.setState({ slideIndex: next }),
      
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
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

   
    return (
      <div className="p_slider_inner">
        <SliderMain ref={slider => (this.slider = slider)} {...settings}>
          <CustomSlide idOfProduct={4}/>
          <CustomSlide idOfProduct={5}/>
          <CustomSlide idOfProduct={7}/>
          <CustomSlide idOfProduct={4}/>
          <CustomSlide idOfProduct={5}/>
          <CustomSlide idOfProduct={6}/>
          
          
          
          
        </SliderMain>
        <input 
          
          onChange={e => this.slider.slickGoTo(e.target.value)}
          value={this.state.slideIndex}
          type="range"
          min={0}
          max={6}
        />

      
      </div>   
    );
  }
}

export default SlickGoTo;

