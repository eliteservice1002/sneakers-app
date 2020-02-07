import React, { useState, useEffect } from 'react';

import {Card,Button,Nav} from 'react-bootstrap'
import axios from 'axios';
import Select from 'react-select'

import './style.less';




function Hook() {

  const url = "https://jsonplaceholder.typicode.com/users";
  const [users, userFun] = useState([]);
  useEffect( () => {
  async function loadJson(){
    
      // const response =  await fetch(url)
      // const data = await response.json();
      
      // userFun(data[1].name)

       await axios.get(url)
       .then(res=>{
        const persons = res.data;
        userFun(persons)
        
      })

  }

  loadJson()
 
  
},[])

 



  

  
// let userss = users.map( u =><div>{u}</div>)
 


  return (
    <div>
      
    </div>

    
  );
}



export default Hook;
