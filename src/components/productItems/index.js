import React from 'react';
import { Link } from 'react-router-dom';
import "./style.less"
import NotFound from "./error.svg"


const ProductItems = ({items,addToCart}) => {
    

    if(items.length == 0){
        return <div className="products_not-found">On your request nothing has been found 
        <img className="products_not-found_icon" src={NotFound} alt=""/>
        </div>
    }
    return (
        
        <div className="products__inner">
            
            {items.map((pr)=>(
            <div key={pr.id} className="block_wrapper col-6 col-lg-4  ">
                <div className="block">
                        <div className="title">{pr.brand}
                            <span>{pr.model}</span>
                        </div>
                    <div className="right_slider_bar">
                        <div className="price">${pr.price}</div>
                        <div  className="icon"><i  className="far fa-heart"></i></div>
                        <div onClick={()=>addToCart(pr.id)} className="icon"><i className="fas fa-shopping-cart"></i></div>
                    </div>
                    <Link to={`${pr.id}`}>
                        <div  className=" main_img">
                            <img className="col-11 " src={pr.srcOfImg} alt=""/>
                        </div>
                    </Link>
                    <div className="block_fotter">
                        <span>For {pr.gender}, </span>
                        <span>Made in {pr.country}, </span> 
                        <span>{pr.yearOfModel}</span>
                    </div>
                </div>
            </div> 
            ))}
            <div className="btn-load-more_wrapper">
                <div className="btn-load-more">Load More</div>
            </div>               
            
        </div>
        
        
    );
}

export default ProductItems;

// import React from 'react';
// import { Link } from 'react-router-dom';


// const ProductItems = ({brand,model,price,id,srcOfImg,gender,country,yearOfModel,addToCart}) => {
// console.log("TCL: addToCart", addToCart)
    
//     return (
//         <div key={id} className="block_wrapper col-6 col-lg-4  ">
//         <div className="block">
//                 <div className="title">{brand}
//                     <span>{model}</span>
//                 </div>
//             <div className="right_slider_bar">
//                 <div className="price">${price}</div>
//                 <div  className="icon"><i  className="far fa-heart"></i></div>
//                 <div onClick={()=>addToCart(id)} className="icon"><i className="fas fa-shopping-cart"></i></div>
//             </div>
//             <Link to={`${id}`}>
//                 <div  className=" main_img">
//                     <img className="col-11 " src={srcOfImg} alt=""/>
//                 </div>
//             </Link>
//             <div className="block_fotter">
//                 <span>For {gender}, </span>
//                 <span>Made in {country}, </span> 
//                 <span>{yearOfModel}</span>
//             </div>
//         </div>
//         </div>
        
//     );
// }

// export default ProductItems;

