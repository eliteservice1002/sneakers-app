import {observable, computed, action} from 'mobx';

export default class{
   
    
    constructor(rootStore){
        this.rootStore = rootStore;
        
    } 

    @observable brands = [
        {
            nameOfBrand:"NIKE",
            urlOfImfg:"/dist/imgs/imgsForBrandSlider/nike.png",
        },
        {
            nameOfBrand:"New balance",
            urlOfImfg:"/dist/imgs/imgsForBrandSlider/New_balance.png",
        },
        {
            nameOfBrand:"ADIDAS",
            urlOfImfg:"/dist/imgs/imgsForBrandSlider/adidas.png",
        },
        {
            nameOfBrand:"LE COQ SPORTIF",
            urlOfImfg:"/dist/imgs/imgsForBrandSlider/LE_COQ_SPORTIF.png",
        },
    ];

    @observable reviews = [
        {
            name:"JENS ",
            surName:"ANDERSON",
            srcOfImg:"/dist/imgs/imgsForReviewsSlider/person1.png",
            firstPar:"That may sound too good to be true but on my first go in the Uncaged I ran my fastest 10K for 18 months and the following day equalled my 10K PB set nearly three years ago. ",
            secondPar:"But if you don’t want to spend $180 on a “fashion runner,” then don’t, but don’t let the Ultra Boost Uncaged fool you-it performs as well or better than ANY other shoe out there, provided you acknowledge the support factor.",
        },
        {
            name:"LUNA",
            surName:"ANDREWS",
            srcOfImg:"/dist/imgs/imgsForReviewsSlider/person2.png",
            firstPar:"I purchased the Nike Airzoom Winflo 4 at a sale to wear it mostly as a dressing shoe as the White Nike swoosh on the black fabric looked the part.",
            secondPar:"Never did I realize then that these would become my favorite neutral running shoe. I’ll nit-pick everything I can in the review below of Nike Air Zoom Winflo 4.",
        },
        {
            name:"ALEX",
            surName:"MORELLO",
            srcOfImg:"/dist/imgs/imgsForReviewsSlider/person3.png",
            firstPar:"That may sound too good to be true but on my first go in the Uncaged I ran my fastest 10K for 18 months and the following day equalled my 10K PB set nearly three years ago. ",
            secondPar:"But if you don’t want to spend $180 on a “fashion runner,” then don’t, but don’t let the Ultra Boost Uncaged fool you-it performs as well or better than ANY other shoe out there, provided you acknowledge the support factor.",
        },
        {
            name:"ANNIE",
            surName:"BLOOM",
            srcOfImg:"/dist/imgs/imgsForReviewsSlider/person4.png",
            firstPar:"Start the Journey Looks are only the start of the journey because when you first try them on, you will feel like floating. A plane taking off will be the rush felt with these on your feet.",
            secondPar:"The sock liner material of this shoe welcomes you and provides a comfortable step without the compromise of a heavy shoe.",
        },
    ]
    

    
    
    
    @observable items = getProducts();




    @computed get productsMap(){
        let map = {};
        

        this.items.forEach((pr, i) => {
            map[pr.id.toString()] = i;
            
        });
        
        return map;
        
        
    }

    

    @action  typeOfProducts(type){

        if(type !== ""){
            this.items = getProducts(); 
            this.items = this.items.filter((pr) =>pr.type == type);
        }else{
            this.items = getProducts();
        }

    }

    @observable productState = {
            id:"", 
            color:"",
            choosenSize:"",
            region:""
        }
    

    @action selectColor(color,id){
         let i = this.productsMap[id];
         let pr = this.items[i]
         this.productState.color = color;
    }

    @action selceSize(color,id){
         
         this.productState.color = color;

    }

    

    getById(id){
        let index = this.productsMap[id];
        if(index === undefined){
            return null;
        }
        
        return this.items[index];
        
    }

   

    
}


// server api
function getProducts(){
    return [
        {
            id: 100,
            brand: 'Nike',
            model:"Air270",
            gender:"Women", 
            country:"China",
            yearOfModel:"2018",
            availableColors:{
                red:true,
                blue:true,
                white:true,
                dark_blue:false
            },
            availableSize:{
                "36":false,
                "37":false,
                "38":false,
                "39":true,
                "40":true,
                "41":true,
                "42":true,
                "43":true,
                "44":true,
                "45":true,
            },
            regions:{
                "EU":false,
                "US":true,
                "UK":true,

            },
            srcOfImg:"/dist/imgs/imgsForMainSlider/sneakers01.png",
            srcOfAddImg:[
                "/dist/imgs/imgsForMainSlider/sneakers01.png",
                "https://via.placeholder.com/736x480.png",
                "https://via.placeholder.com/736x480.png",
                
            ],
            price: 120,
            rest: 10
        },
        {
            id: 101,
            brand: 'Adidas',
            model:"Y-3-KAIWA",
            gender:"Men", 
            country:"China",
            yearOfModel:"2017",
            availableColors:{
                red:true,
                blue:true,
                white:true,
                dark_blue:true
            },
            availableSize:{
                "36":true,
                "37":true,
                "38":true,
                "39":true,
                "40":true,
                "41":true,
                "42":true,
                "43":true,
                "44":true,
                "45":true,
            },
            regions:{
                "EU":true,
                "US":true,
                "UK":true,

            },
            srcOfImg:"../dist/imgs/imgsForMainSlider/sneakers02.png",
            srcOfAddImg:[
                "/dist/imgs/imgsForMainSlider/sneakers02.png",
                "https://via.placeholder.com/600x300.png",
                "https://via.placeholder.com/600x300.png",
            ],
            price: 130,
            rest: 10
        },
        {
            id: 102,
            brand: 'New Balance',
            model:"X 90",
            gender:"Men", 
            country:"China",
            yearOfModel:"2019",
            availableColors:{
                red:true,
                blue:true,
                white:true,
                dark_blue:true
            },
            availableSize:{
                "36":true,
                "37":true,
                "38":true,
                "39":true,
                "40":true,
                "41":true,
                "42":true,
                "43":true,
                "44":true,
                "45":true,
            },
            regions:{
                "EU":true,
                "US":true,
                "UK":true,

            },
            srcOfImg:"../dist/imgs/imgsForMainSlider/sneakers03.png",
            srcOfAddImg:[
                "/dist/imgs/imgsForMainSlider/sneakers03.png",
                "https://via.placeholder.com/600x300.png",
                "https://via.placeholder.com/600x300.png",
            ],
            price: 200,
            rest: 10
        },
        {
            id: 103,
            brand: 'Nike',
            model:"M2K Tekno",
            gender:"Men", 
            country:"China",
            yearOfModel:"2020",
            availableColors:{
                red:true,
                blue:true,
                white:true,
                dark_blue:true
            },
            availableSize:{
                "36":true,
                "37":true,
                "38":true,
                "39":true,
                "40":true,
                "41":true,
                "42":true,
                "43":true,
                "44":true,
                "45":true,
            },
            regions:{
                "EU":true,
                "US":true,
                "UK":true,

            },
            srcOfImg:"../dist/imgs/imgsForMainSlider/sneakers04.png",
            srcOfAddImg:[
                "/dist/imgs/imgsForMainSlider/sneakers04.png",
                "https://via.placeholder.com/600x300.png",
                "https://via.placeholder.com/600x300.png",
            ],
            price: 250,
            rest: 10
        },
        {
            id: 104,
            brand: 'Nike',
            model:"Air270 Black",
            gender:"Men", 
            country:"China",
            yearOfModel:"2020",
            availableColors:{
                red:true,
                blue:true,
                white:true,
                dark_blue:true
            },
            availableSize:{
                "36":true,
                "37":true,
                "38":true,
                "39":true,
                "40":true,
                "41":true,
                "42":true,
                "43":true,
                "44":true,
                "45":true,
            },
            regions:{
                "EU":true,
                "US":true,
                "UK":true,

            },
            srcOfImg:"../dist/imgs/imgsForSecondSlider/sneakers06.png",
            srcOfAddImg:[
                "/dist/imgs/imgsForSecondSlider/sneakers06.png",
                "https://via.placeholder.com/600x300.png",
                "https://via.placeholder.com/600x300.png",
            ],
            price: 200,
            rest: 10
        },
        {
            id: 105,
            brand: 'Adidas',
            model:"Falcon",
            gender:"Women", 
            country:"China",
            yearOfModel:"2020",
            availableColors:{
                red:true,
                blue:true,
                white:true,
                dark_blue:true
            },
            availableSize:{
                "36":true,
                "37":true,
                "38":true,
                "39":true,
                "40":true,
                "41":true,
                "42":true,
                "43":true,
                "44":true,
                "45":true,
            },
            regions:{
                "EU":true,
                "US":true,
                "UK":true,

            },
            srcOfImg:"../dist/imgs/imgsForSecondSlider/sneakers05.png",
            srcOfAddImg:[
                "/dist/imgs/imgsForSecondSlider/sneakers05.png",
                "https://via.placeholder.com/600x300.png",
                "https://via.placeholder.com/600x300.png",
            ],
            price: 130,
            rest: 10
        },
        {
            id: 106,
            brand: 'Nike',
            model:"M2K Tekno",
            gender:"Men", 
            country:"China",
            yearOfModel:"2020",
            availableColors:{
                red:true,
                blue:true,
                white:true,
                dark_blue:true
            },
            availableSize:{
                "36":true,
                "37":true,
                "38":true,
                "39":true,
                "40":true,
                "41":true,
                "42":true,
                "43":true,
                "44":true,
                "45":true,
            },
            regions:{
                "EU":true,
                "US":true,
                "UK":true,

            },
            srcOfImg:"../dist/imgs/imgsForSecondSlider/sneakers07.png",
            srcOfAddImg:[
                "/dist/imgs/imgsForSecondSlider/sneakers07.png",
                "https://via.placeholder.com/600x300.png",
                "https://via.placeholder.com/600x300.png",
            ],
            price: 250,
            rest: 10
        },
        {
            id: 107,
            brand: 'PUMA',
            model:"Clyde Court ",
            gender:"Men", 
            country:"China",
            yearOfModel:"2020",
            availableColors:{
                red:true,
                blue:true,
                white:true,
                dark_blue:true
            },
            availableSize:{
                "36":true,
                "37":true,
                "38":true,
                "39":true,
                "40":true,
                "41":true,
                "42":true,
                "43":true,
                "44":true,
                "45":true,
            },
            regions:{
                "EU":true,
                "US":true,
                "UK":true,

            },
            srcOfImg:"../dist/imgs/imgsForSecondSlider/sneakers08.png",
            srcOfAddImg:[
                "/dist/imgs/imgsForSecondSlider/sneakers08.png",
                "https://via.placeholder.com/600x300.png",
                "https://via.placeholder.com/600x300.png",
            ],
            price: 250,
            rest: 10
        },
        {
            id: 108,
            brand: 'ADIDAS',
            model:"Y-3 Tekno ",
            gender:"Men", 
            country:"China",
            yearOfModel:"2020",
            availableColors:{
                red:true,
                blue:true,
                white:true,
                dark_blue:true
            },
            availableSize:{
                "36":true,
                "37":true,
                "38":true,
                "39":true,
                "40":true,
                "41":true,
                "42":true,
                "43":true,
                "44":true,
                "45":true,
            },
            regions:{
                "EU":true,
                "US":true,
                "UK":true,

            },
            srcOfImg:"../dist/imgs/imgsForSecondSlider/sneakers09.png",
            srcOfAddImg:[
                "/dist/imgs/imgsForSecondSlider/sneakers09.png",
                "https://via.placeholder.com/600x300.png",
                "https://via.placeholder.com/600x300.png",
            ],
            price: 127,
            rest: 10
        },
        {
            id: 109,
            brand: 'PUMA',
            model:"HOT WHEELS RS-X TOYS CAMARO",
            gender:"Men", 
            country:"China",
            yearOfModel:"2020",
            availableColors:{
                red:true,
                blue:true,
                white:true,
                dark_blue:true
            },
            availableSize:{
                "36":true,
                "37":true,
                "38":true,
                "39":true,
                "40":true,
                "41":true,
                "42":true,
                "43":true,
                "44":true,
                "45":true,
            },
            regions:{
                "EU":true,
                "US":true,
                "UK":true,

            },
            srcOfImg:"../dist/imgs/imgsForSecondSlider/sneakers10.png",
            srcOfAddImg:[
                "/dist/imgs/imgsForSecondSlider/sneakers10.png",
                "https://via.placeholder.com/600x300.png",
                "https://via.placeholder.com/600x300.png",
            ],
            price: 130,
            rest: 10
        },
        {
            id: 110,
            brand: 'REEBOK',
            model:"FUTSAL FUSION R58 ",
            gender:"Men", 
            country:"China",
            yearOfModel:"2020",
            availableColors:{
                red:true,
                blue:true,
                white:true,
                dark_blue:true
            },
            availableSize:{
                "36":true,
                "37":true,
                "38":true,
                "39":true,
                "40":true,
                "41":true,
                "42":true,
                "43":true,
                "44":true,
                "45":true,
            },
            regions:{
                "EU":true,
                "US":true,
                "UK":true,

            },
            srcOfImg:"../dist/imgs/imgsForSecondSlider/sneakers11.png",
            srcOfAddImg:[
                "/dist/imgs/imgsForSecondSlider/sneakers11.png",
                "https://via.placeholder.com/600x300.png",
                "https://via.placeholder.com/600x300.png",
            ],
            price: 120,
            rest: 10
        },
        {
            id: 111,
            brand: 'NIKE',
            model:"Air Zoom Zero Premium",
            gender:"Men", 
            country:"China",
            yearOfModel:"2020",
            availableColors:{
                red:true,
                blue:true,
                white:true,
                dark_blue:true
            },
            availableSize:{
                "36":true,
                "37":true,
                "38":true,
                "39":true,
                "40":true,
                "41":true,
                "42":true,
                "43":true,
                "44":true,
                "45":true,
            },
            regions:{
                "EU":true,
                "US":true,
                "UK":true,

            },
            srcOfImg:"../dist/imgs/imgsForSecondSlider/sneakers12.png",
            srcOfAddImg:[
                "/dist/imgs/imgsForSecondSlider/sneakers12.png",
                "https://via.placeholder.com/600x300.png",
                "https://via.placeholder.com/600x300.png",
            ],
            price: 251,
            rest: 10
        },
        
        
    ];

    
}