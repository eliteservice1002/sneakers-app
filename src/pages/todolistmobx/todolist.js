import React from 'react';
import {observer, inject} from 'mobx-react';
import { Route, Link } from "react-router-dom";


// import Test from "./components/childs/test.js.js"

import {Card,Button,Nav} from 'react-bootstrap'

import Note from './components/note.js'
import { flow } from 'mobx';
    


@inject('stores') @observer class Todolist extends React.Component{

    constructor(props){
        super(props)

        
    }   

    


    render(){
        const todostore = this.props.stores.todolist;
        
        let notes = todostore.notes.map( (note,id) =>{
            return <Note key={id} value={note} id={id}/>
        })
        
        return(
            <>
            <h1>todolist</h1>
            
            <form onSubmit={(e)=>todostore.makeNote(e)} >
                <input
                onChange={(e)=> todostore.getValue(e)}

                 />

                <input type="submit" 
                
                />
            </form>
            
            
            <div className="value">{todostore.data}</div>

            {notes}
            

        </>
        );
    }
}

export default Todolist;