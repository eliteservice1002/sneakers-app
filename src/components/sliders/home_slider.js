
import "slick-carousel/slick/slick.less"; 
import "slick-carousel/slick/slick-theme.less";


import {observer, inject} from 'mobx-react';
import React, { Component } from "react";
import Slider from "react-slick";
import { Link, NavLink } from 'react-router-dom';
import { routesMap , urlBuilder } from '~/routes';



@inject('stores') @observer class CustomSlide extends Component {

 
  
  

  render() {
    const { idOfProduct,...props} = this.props;

    let productsPathInStore = this.props.stores.products.items[idOfProduct];

    // console.log(productsPathInStore.id)
    return (
      
        <div {...props}   className="block " style={{display:"flex"}}>
          
          <div className="title"><span>{productsPathInStore.brand}</span> <br/>{productsPathInStore.model}</div>
          
            <div className="img_inner">
                  {/* <Link  to={'products/' + productsPathInStore.id} > */}
                    <img className=" col-xl-12 col-9 col-md-10" src={productsPathInStore.srcOfImg}  alt=""/>
                  {/* </Link> */}
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



 class SimpleSlider extends Component {
  
  constructor(props){
    super(props);
      this.state =  {
        slideIndex: 0,
      }
    

 }

  

  

  

  render() {

    const settings = {
      
     
      infinite: false,
      speed: 500,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 3000,
      // centerMode:true,
     
  
      arrows:false
    };

    
    
    return (
      <div className="home_inner">
                                
      <Slider ref={slider => (this.slider = slider)}  {...settings} >
          <CustomSlide  idOfProduct={0} />
          <CustomSlide idOfProduct={1} />
          <CustomSlide idOfProduct={2} />
          <CustomSlide idOfProduct={3} />

          
        
      </Slider>
      
      </div>
    );
  }
}

export default SimpleSlider;