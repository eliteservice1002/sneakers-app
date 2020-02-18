import React, { useState, useEffect } from 'react';
import {observer, inject} from 'mobx-react';
import {Card,Button,Nav} from 'react-bootstrap'
import axios from 'axios';

import './style.less';




const Hook = inject('stores') (observer((props) =>{
    const [users, userFun] = useState([]);
    
  
    console.log(props);
  
    return (
      <div className="tmp">
        <img src="/dist/imgs/imgsForMainSlider/sneakers01.png" alt=""/>
      </div>
  
      
    );
  
}))



export default Hook;
