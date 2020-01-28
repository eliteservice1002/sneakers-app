import {observable, computed, action} from 'mobx';

export default class{

    

    @observable newsItems = [
        {
            id: 100,
            title: "The Story of #MODERN",
            content:"",
            srcOfImg:"news_1" +".png",
            specialStyleForBlock : {
                background: "#fff",
                
            },
        
        },
        {
            id: 101,
            title: " Where is MY AIR ?",
            content:"",
            srcOfImg:"bg1"+".png",
            specialStyleForBlock : {
                background: "#fff",
                
            },
        
        },
        {
            id: 102,
            title: "Inspirational Look book from young&passion designers",
            content:"",
            srcOfImg:"news_2"+".png",
            specialStyleForBlock : {
                background: "#fff",
                
            },
        
        },
        {
            id: 103,
            title: "/// 50% BLACK FRIDAY ////S*LE",
            content:"",
            srcOfImg:"bg2"+".png"
            
        },
        {
            id: 104,
            title: "NEON L//GHTS of the Instagram",
            content:"",
            srcOfImg:"news_3"+".png",
            
        
        },
    ]

    
}