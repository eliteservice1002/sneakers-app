import React from 'react';
import {observer, inject} from 'mobx-react';
import { Route, Link } from "react-router-dom";
import { withRouter } from "react-router";

// import Test from "./components/childs/test.js.js"

import {Card,Button,Nav} from 'react-bootstrap'

import Note from './components/note.js'
import "./style.less";


function Welcome(props) {
    const showMessage = () => {
      alert('Followed ' + props.user);
    };
  
    const handleClick = () => {
      setTimeout(showMessage, 200);
    };
  
    return (
      <button onClick={handleClick}>Follow</button>
    );
  }


    


@inject('stores') @observer class Todolist extends React.Component{

    constructor(props){
        super(props)
      this.textInput =null;
        this.setTextInputRef = element => {
          
          this.textInput = element;
        };
         
    }
    
   

    


    render(){
        
        const todostore = this.props.stores.todolist;


        
        let notes = todostore.notes.map( (note,id) =>{
            return <Note key={id} value={note} id={id}/>
        })
        
        return(
            <>
            <h1>todolist</h1>
            
            <form onSubmit={ (e)=>todostore.makeNote(e)} >
                <input
                onChange={ (e)=> todostore.getValue(e)}

                 />

                <input type="submit" 
                
                />
            </form>
            
            
            <div className="value">{todostore.data}</div>

            {notes}

           <Welcome/>

           <div className="in">
             <div className="cl">1234</div>
           </div>
        </>
        );
    }
}

export default Todolist;