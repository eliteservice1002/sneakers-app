import React from 'react';

import { Route, Link } from "react-router-dom";


import Test from "./components/childs/test.js"

import {Card,Button,Nav} from 'react-bootstrap'

import Note from './components/note.js'
    


class Todolist extends React.Component{

    constructor(props){
        super(props)

        this.state={
            value:'',
            notes:[],
            deleteId:"",
            validInput:true,
            
        }
    }


    handelChange = (e) =>{
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        if(e.target.value == "1"){
            this.setState({
                validInput:true,
            })
        }else{
            this.setState({
                validInput:false,
            })
        }

        this.setState({
            value:e.target.value.toString(),
            
        })
    }

    handelSubmit = () =>{
        event.preventDefault(); 
        
        const currentNotes = this.state.notes;
        currentNotes.push(this.state.value)

        this.setState({
            notes:currentNotes,
        })

        
    }

    deleteNote = (id) => {
        const currentNotes = this.state.notes;
        currentNotes.splice(id,1);
        this.setState({
            notes: currentNotes,
        })
     }

    getEditNoteFromChild = (valueOfEditNote,id) =>{
        const currentNotes = this.state.notes;
        currentNotes.splice(id,1 , valueOfEditNote);

        this.setState({
            notes:currentNotes
        })
    }


      
    
    render(){

        console.log(this.props)
       
        let notes = this.state.notes.map( (note,id) =>{
            //  validation 
            if(note !== ""){ 
                return(
                    <Note 
                    key={id}
                    arrId={id}
                    value={note}
                    deleteNote={this.deleteNote}
                    getEditNote={this.getEditNoteFromChild}
                    />
                );
            }else{
                null
                
            }

            
        })

        return(
            <>
            <h1>todolist</h1>
            
            <form onSubmit={this.handelSubmit}>
                <input 
                value={this.state.value}
                // onSubmit={console.log(e => e.target.value)}
                onChange={this.handelChange}
                
                type="text"/>

                <input type="submit" 
                    // onClick={e=>this.alername()}
                />
            </form>
            {/* {!this.state.validInput ? <div className="div">wrong</div> : null} */}
            

            {notes}
            
                    <Button><Link to="/" >home</Link></Button>
                

                    <Button><Link  to="/todolist/test" >test</Link></Button>
                    
                    
                    <Route exact path={`/todolist/:url`} component={Test}/>
                 
                
                 
        
        </>
        );
    }
}

export default Todolist;