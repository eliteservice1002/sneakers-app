import React, { useState, useEffect } from 'react';

import {Card,Button,Nav} from 'react-bootstrap'
import './style.less';



function Hook() {
  // Объявление переменной состояния, которую мы назовём "count"
  
  
  const url = "https://jsonplaceholder.typicode.com/users";

  const xhr = new XMLHttpRequest();

  xhr.open("GET",url)

  xhr.onload = () =>{
    console.log(JSON.parse(xhr.response))
  }

  xhr.send();
  




  return (
    <>
    <Nav className="nav_pr"
>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
</Nav>

<Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" >Go somewhere</Button>
  </Card.Body>
</Card>
</>
  );
}



export default Hook;
