import cartStore from './cart';
import productsStore from './products';
import orderStore from './order';
import filterStore from './filter';

import todoStore from './todolist';


class RootStore{
    constructor(){
        this.cart = new cartStore(this);
        this.products = new productsStore(this);
        this.order = new orderStore(this);
        this.filter = new filterStore(this);
        this.todolist = new todoStore(this);
    }    
}

export default new RootStore();