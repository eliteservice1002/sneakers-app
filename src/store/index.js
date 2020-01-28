import cartStore from './cart';
import productsStore from './products';
import orderStore from './order';
import newsStore from './news';
import todoStore from './todolist';


class RootStore{
    constructor(){
        this.cart = new cartStore(this);
        this.products = new productsStore(this);
        this.order = new orderStore(this);
        this.news = new newsStore(this);
        this.todolist = new todoStore(this);
    }    
}

export default new RootStore();