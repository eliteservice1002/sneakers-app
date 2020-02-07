import {observable, computed, action} from 'mobx';

export default class{
    @observable products = [{id:100,cnt:1},{id:101,cnt:1},{id:102,cnt:1},{id:103,cnt:1},];

    constructor(rootStore){
        this.rootStore = rootStore;
        
    }

    

    @computed get productsDetailed(){
        return this.products.map((pr) => {
            let product = this.rootStore.products.getById(pr.id);
            return {...product, 
                cnt:  pr.cnt, 
                color:pr.color,
                size:pr.size,
                region:pr.region
            };
        });
        
    }

    @computed get inCart(){
        return (id) => this.products.some((product) => product.id === id);
    }
    
    

    @computed get total(){
        return this.productsDetailed.reduce((t, pr) => {
            return t + pr.price * pr.cnt;
        }, 0);
    }
    
    @computed get cartCnt(){
        return this.products.length; 
    }

    @observable isItSelected = {
        selectedAll:true
    }


    @action add(id,color,size,region){
        if( (color && size) !== undefined ){
            let isThere = !this.products.some((product) => product.id === id);
            if( isThere){
                this.products.push({id, cnt: 1,color,size,region});
                this.isItSelected.selectedAll =  true;
            }else{
                console.log("alredy in cart")
            }
                
        }else{
            this.isItSelected.selectedAll =  false;
        }
    }



    @action change(id, cnt){
        let index = this.products.findIndex((pr) => pr.id === id);

        if(index !== -1){
            this.products[index].cnt = cnt;
        }
    }

    @action remove(id){
            this.products.splice(id, 1);
    }
    // @action remove(id){
    //     let index = this.products.findIndex((pr) => pr.id === id);
        
    //     if(index !== -1){
    //         this.products.splice(index, 1);
    //     }
    // }
}










