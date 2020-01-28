import {observable, computed, action} from 'mobx';

export default class{

    constructor(rootStore){
        this.rootStore = rootStore;
        
    }

    @observable notes= [];

    @observable state = {
            value:'',   
    }

    @action getValue(e){
        this.state.value = e.target.value 
    }

    @computed get data(){
        return this.state.value;
    }

    @action makeNote(e){
        e.preventDefault();
        this.notes.push(this.state.value);
    }

    

    @action getEditInputValue(e){
            this.state.value = e.target.value;  
    }

    @action deleteNote(id){
        this.notes.splice(id,1);
    }

    @action submitEditNote(id,e){
        if(e !== undefined){
            e.preventDefault();
            this.notes.splice(id,1,this.state.value);
        }else{
            this.notes.splice(id,1,this.state.value);
        }
        
    }
    

}