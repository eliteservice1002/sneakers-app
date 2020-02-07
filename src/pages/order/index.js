import React,{useState} from 'react';
import { routesMap } from '~/routes';
import { Link, NavLink,Route,Switch } from 'react-router-dom';
import {observer, inject} from 'mobx-react';
import PropTypes from 'prop-types';

import Payment from "~p/order/payment";

import './style.less';





 const Order = inject('stores') (observer( (props) => {
    const [showModal,show] = useState(false);
    const [isOpen,showPayment] = useState(true);
    const [option,payBy] = useState("cart");
   
    
    
    let orderModel = props.stores.order;
        let cartModel = props.stores.cart;
        let formFields = [];
    
    

        for(let name in orderModel.formData){
            let field = orderModel.formData[name];
            
            formFields.push(
                <div className={`co_input p-0  ${field.specialClass} `} key={name}>
                <input 
                placeholder={field.label}
                 type="text"
                 value={field.value}
                 onChange={(e) => orderModel.change(name, e.target.value)}
                />
                    {field.valid === null || field.valid ? '' : 
                            <div className="wrong_input" >{field.errorText}</div>
                        }
                </div>
            );
        }

        let products = cartModel.productsDetailed.map( (pr,id)=>{
            return(
            <div key={id} className="item">
                <div className="editing_btn"></div>
                <img src={pr.srcOfImg} alt=""/>
                <div className="editing">
                    <div className="f_row">
                        <div className="title">
                            <div className="brand">{pr.brand}</div>
                            <div className="model">{pr.model}</div>
                        </div>
                        <div className="minmax"></div>
                    </div>
                    <div className="s_row">
                        <div className="gender">{pr.gender}</div>
                        <div className="color">{pr.color}</div>
                        <div className="size">{pr.size}</div>
                        <div className="price">{pr.price}</div>
                    </div>
                </div>
            </div>
            );
        })

        
        
 

    return(
        <>
       <div className="check_out">

           <div className="form_inner col-12 col-md-6 p-0 offset-md-1">
            <div className="title">{isOpen?"SHIPPING DETAILS":"PAYMENT"}</div>
                            
                    {isOpen ?  <>
                           
                            <div className="inputs_wrapper">
                                {formFields}
                            </div>
                        </> : <Payment/>}

               
                    {isOpen ? 
                    <button className="submit_btn" disabled={!orderModel.formValid}  onClick={()=>showPayment(!isOpen)} >Go to paymen</button>:
                    <button className="submit_btn" disabled={!orderModel.formValid} onClick={()=>showPayment(!isOpen)} >PAY</button> }
                 
                
            </div>  

            <div className="order-products_list pr-0 col-12 col-md-4 offset-md-1">
                <div className="items">
                    {products}
                </div>
                {!isOpen ? <div className="info_inner">
                     <div className="title_wrapper">
                         SHIPPING DETAILS
                         <button onClick={()=>showPayment(!isOpen)} className="edit">Edit</button>
                         </div>
                     <div className="detailed_info">
                        <div className="row">
                            <div className="name col-6">{orderModel.data.name}</div>
                            <div className="lastname col-6">{orderModel.data.LastName}</div>
                        </div>
                        
                        <div className="row">
                            <div className="email col-6">{orderModel.data.email}</div>
                            <div className="phone col-6">{orderModel.data.phone}</div>
                        </div>
                        <div className="row">
                            <div className="adress col-5">{orderModel.data.AddressLine}</div>
                            <div className="postcode col-3">{orderModel.data.PostCode}</div>
                            <div className="city col-4">{orderModel.data.City}</div>
                        </div>
                    
                    </div>
                </div>:null}
            </div>
        </div>

        </>
    );
}));
    




  export default Order;

