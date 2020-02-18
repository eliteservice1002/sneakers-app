import {observable, computed, action} from 'mobx';
import orderBy from 'lodash/orderBy';
import uniq from 'lodash/uniq';
import concat from 'lodash/concat';

export default class{

    constructor(rootStore){
        this.rootStore = rootStore;
    } 


    @observable filteredProducts = this.rootStore.products.items;   

    @observable filterParams = {
        type:"",
        seacrhValue:""
    }

    @computed get colorsMap(){
        let colors = [];
        this.rootStore.products.items.map((p)=>Object.keys(p.availableColors).map(c => colors.push(c)));
        return uniq(colors)
    }
    @computed get sizesMap(){
        let sizes = [];
        this.rootStore.products.items.map((p)=>Object.keys(p.availableSize).map(s => sizes.push(s)));
        return uniq(sizes)
    }
    @computed get brandsMap(){
        let brands = [];
        this.rootStore.products.items.map((p)=>brands.push(p.brand));
        return uniq(brands)
    }

    @computed get getFilteredProductsByType(){
        return (categories,type) =>{
            this.filteredProducts = this.rootStore.products.items.filter(
                pr => Object.keys(pr[categories]).filter(
                    (c) => pr[categories][c] == true).find((c)=> c == type) == type)
        }
    }

    @action filterByType(type){
        this.filterParams.type = type;

        if(this.colorsMap.some((color) => color == type)){
            this.getFilteredProductsByType("availableColors",type);
        }else if(this.sizesMap.some((size) => size == type)){
            this.getFilteredProductsByType("availableSize",type);
        }else if(this.brandsMap.some((brand) => brand == type)){
            this.filteredProducts = this.rootStore.products.items.filter(
                pr => pr.brand == type
            )
        }else if(type == "all"){
            this.filteredProducts = this.rootStore.products.items
        }
    }
    
    @action filterByInput(seacrhValue){
        this.filterParams.seacrhValue = seacrhValue;
        this.filteredProducts = this.rootStore.products.items.filter( o => o.model.toLowerCase().indexOf(seacrhValue.toLowerCase()) >= 0)
    }



}