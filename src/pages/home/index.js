import React from 'react';
import { routesMap } from '~/routes';
import { Link, NavLink } from 'react-router-dom';
import {observer, inject} from 'mobx-react';


// sliders
import SliderHome from '~c/sliders/home_slider.js';
import SliderPopular from '~c/sliders/popular_slider.js';
import SliderBrand from '~c/sliders/brand_slider';
import SliderReviews from '~c/sliders/reviews_slider.js';



// other

import "./style/news.less";
import "./style/home_inner.less";
import logo from "./imgs/Logo.png"
import firstNews from "./imgs/news_1.png";
import secondNews from "./imgs/news_2.png";
import thirdNews from "./imgs/news_3.png";







import $ from 'jquery'

@inject('stores') @observer class Home extends React.Component{
    constructor(props) {
        super(props);
        this.nav = React.createRef();
        
            this.state = {
                scrollTop: 0,
                slideIndex: 0,
                lastScrollTop:0,
            }
            this.slider = React.createRef();
      }

      componentDidMount(){
        
        window.addEventListener('scroll', this.handleScroll);
           
        
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    componentDidUpdate(prevProps) {
        if (
          this.props.location.pathname !== prevProps.location.pathname
        ) {
          window.scrollTo(0, 0);
        }
      }
    
    

    handleScroll = () => {
        
        let nav = this.nav.current;
        
        

        let st = this.state.scrollTop;
        

        if(st > this.state.lastScrollTop ){
            
            // down
            nav.classList.add("scrollDown")
            nav.classList.remove("scrollUp")

    }else if(st < this.state.lastScrollTop && st !==0){  
            // up
            nav.classList.add("scrollUp")
            nav.classList.remove("scrollDown")

    }
    
        this.state.lastScrollTop = st;



        
        this.setState({
            scrollTop:window.scrollY
        });

       
    }

    changeSlide = (cnt) =>{
        this.slider.current.slider.slickGoTo(cnt);  
    }
    


    render(){
        let newsStore = this.props.stores.products.reviews;
        
        
    
        let namesOfBrands = [
        "Nike","Adidas","New Balance","Nike"
        ]
        let namesOfSneakers = [
        "AIR270","Y-3-Kai.."," X 90"," M2K Te.."
        ]

        let arr = [1,2,3,4];
        
        

        let dots = arr.map( (img,i) =>{
            return(
            <div className="dot" key={i} onClick={() =>this.changeSlide(i)}>
                <div className="title" >{namesOfBrands[i]+","}
                <br/>
                <span>{namesOfSneakers[i]}</span>
                </div>
                    <img src={"/dist/imgs/imgsForMainSlider/sneakers0" + (i+1) +".png"} alt=""/>
            </div>
            );
        })

        return (
            <div className="home">
                {/* intro */}

                <div ref={this.nav}  className="intro" >
                            <div className="container">
                                <div className="nav">
                                    
                                    <NavLink   exact to={routesMap.home}><img src={logo} alt=""/></NavLink>
                                    

                                    <div className="nav_items" >
                                        <NavLink  activeClassName="selected" exact to="/products/list">Products</NavLink>
                                        <NavLink  activeClassName="selected" exact to={`${routesMap.products}/cart`}>cart</NavLink>
                                        <NavLink  activeClassName="selected" exact to={routesMap.todolist}>toDoList</NavLink>
                                        <NavLink  activeClassName="selected" exact to={routesMap.hook}>hook</NavLink>
                                        <a   >Men</a>
                                        <a >Women</a>
                                        <a >Kids</a>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="right_nav">
                                <div className="right_nav_inner">
                                    <NavLink  activeClassName="selected" exact to={`${routesMap.products}/cart`}><img className="search_icon" src="/dist/imgs/imgsForHomeUsage/avatar.png" alt=""/></NavLink>
                                    <NavLink  activeClassName="selected" exact to={`${routesMap.products}/cart`}><img className="search_icon" src="/dist/imgs/imgsForHomeUsage/icons8-search-64.png" alt=""/></NavLink>
                                    <NavLink  activeClassName="selected" exact to={`${routesMap.products}/cart`}><img className="search_icon" src="/dist/imgs/imgsForHomeUsage/icons8-heart-52.png" alt=""/></NavLink>
                                    <NavLink  activeClassName="selected" exact to={`${routesMap.products}/cart`}><img className="search_icon" src="/dist/imgs/imgsForHomeUsage/icons8-shopping-cart-128.png" alt=""/></NavLink>
                                    
                                    
                                </div>
                            </div>
                        </div>



                <div className="home_intro" >
                        
                                <SliderHome ref={this.slider}/>
                                
                                
                                    <div className="dots" > {dots} </div>
                                

                                <div className="bottom_nav">
                                    <div className="links">
                                        <div className="link">Products</div>
                                        <div className="link">Shipping</div>
                                        <div className="link">Articles</div>
                                        <div className="link">About us</div>
                                        <div className="link">Menu </div>
                                    </div>
                                </div>
                </div>

    {/* most_popular_slide */}

                <div className="most_popular">
                    <div className="main_inner">
                        <div className="title_inner col-3 col-md-3 col-sm-12  ">
                            <img src="../dist/imgs/imgsForHomeUsage/shapes-small.png" alt=""/>
                            <div className="title">
                                <span className="span1">THE MOST
                                <div className="text_line"></div> 
                                </span>
                                
                                <br/>
                                <span className="span2">POPULAR</span>
                            </div>
                        </div>
                        <div className="second_slider col-9 col-md-9 col-sm-12">
                            <SliderPopular/>
                        </div>
                    </div>
                </div>

    {/* NEWS */}

                <div className="news">
                    <div className="container">
                    <div className="news_inner">
                        <div className="col-xl-9 col-md-12 content">
                            <div className="title">
                                <div className="line"></div>
                                <div className="title_content">FEATURED NEWS</div>
                            </div>

                            <div className="col-12 blocks_of_news">
                                    <div className=" col-xl-8 col-12  ">
                                        <div className="block__news">
                                            <img src={firstNews} alt=""/>
                                            <div className="title_block">The Story of #MODERN <br/>   urban culture</div>
                                        </div>
                                    </div>
                                    <div className=" col-xl-4 col-6  ">
                                        <div className="block__news">
                                            <div className="title_block">The Story of #MODERN <br/>   urban culture</div>
                                        </div>
                                        
                                        
                                    </div>
                                    <div className=" col-xl-4 col-6 ">
                                        <div className="block__news">
                                            <img src={secondNews} alt=""/>
                                            <div className="title_block">Inspirational Look book from <br/>young&passion designers</div>
                                        </div>
                                        
                                        
                                    </div>
                                    <div className="col-xl-4 col-6 ">
                                        <div className="block__news">
                                            <div className="title_block">/// <br/>50% <br/>LACK FRIDAY <br/>////S*LE</div>
                                    </div>
                                        
                                        
                                        
                                    </div>
                                    <div className=" col-xl-4 col-6 ">
                                        <div className="block__news">
                                            <img src={thirdNews} alt=""/>
                                            <div className="title_block">/// <br/>50% <br/>LACK FRIDAY <br/>////S*LE</div>
                                        </div>
                                        
                                        
                                    </div>
                            </div>
                            
                            
                               
                                

                                {/* <div className="block">/// <br/> Where is <br/>MY AIR ?</div>
                                <div className="block">Inspirational Look book from <br/>young&passion designers</div>
                                <div className="block">/// <br/>50% <br/>LACK FRIDAY <br/>////S*LE</div>
                                <div className="block"><span>NEON L//GHTS  <br/>of the Instagram</span></div> */}
                             
                        </div>
                        
                                <div className="adv_of_boosts col-3 ">
                                    <img className=" cros" src="../dist/imgs/imgsForNews/Shoes_right_side.png" alt=""/>
                                        <div className="bg_title">
                                        
                                            <Link className="btn_to_boost" to={routesMap.home}>
                                                <div className="img"></div>
                                            
                                            </Link>
                                            <div className="first_block_of_title">
                                                
                                                <span className="first" >B</span>
                                                <span className="second" >O</span>
                                            </div>
                                            <div className="second_block_of_title">
                                                <span className="third" >R</span>
                                                <span className="forft" >N</span>
                                            </div>
                                            
                                            
                                            <div className="bg_mine_title">TO <br/>BOOST</div>
                                        </div>

                                    
                                </div>
                        
                        
                        
                        
                    </div>
                    </div>
                </div>


                {/* POPULAR BRANDS */}
                <div style={{background:"#EEECEC"}} className="container">
                        <SliderBrand/>    
                </div>
                

            {/* OUR REVIEWS */}

            <div className="reviews">
                <div className="container">
                    <div className="reviews_inner">
                        <div className="title">
                                
                                <div className="title_content">OUR REVIEWS</div>
                        </div>
                        
                            <SliderReviews/>
                        
                    </div>
                </div>
            </div>

        {/* fotter */}
        <footer>
           <div className="bg"></div>
        </footer>

                



                
            </div>
        );
    }
}

export default Home;
