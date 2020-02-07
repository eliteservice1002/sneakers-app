
import "slick-carousel/slick/slick.less"; 
import "slick-carousel/slick/slick-theme.less";


import {observer, inject} from 'mobx-react';
import React, { Component } from "react";
import Slider from "react-slick";
import { Link} from 'react-router-dom';
import { routesMap , urlBuilder } from '~/routes';



@inject('stores') @observer class CustomSlide extends Component {

 
  
  

  render() {
    const { idOfProduct,...props} = this.props;
    let storeCart =this.props.stores.cart;
    let productsPathInStore = this.props.stores.products.items[idOfProduct];

    // console.log(productsPathInStore.id)
    return (
      
        <div   className="block " style={{display:"flex"}}>
          
          <div className="title"><span>{productsPathInStore.brand}</span> <br/>{productsPathInStore.model}</div>
          
            <div className="img_inner">
                  
                    <img  src={productsPathInStore.srcOfImg}  alt=""/>
                  
                <div className="price_inner">
                  <div className="price" >
                    <div className="price_img" >{productsPathInStore.price}$</div>
                  </div>
                
                  <div  className="cart" >
                    <Link to={'products/' + productsPathInStore.id} >
                      <i className="fas fa-shopping-cart "></i>
                    </Link>
                  </div>
                
              </div>
            </div>
           
        </div>
        
      
    );
  }
}



 class SimpleSlider extends Component {
  
  constructor(props){
    super(props);
      this.state={
        slideIndex:""
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
      // dots: true,
      beforeChange: (current, next) =>{
        this.setState({ slideIndex: next });
        
      },
      // customPaging: function(i) {
      //   return (
      //    <div></div>
      //   );
      // },
  
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