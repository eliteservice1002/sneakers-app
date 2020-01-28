import Home from '~p/home';
import Page404 from '~p/error404';
import Cart from '~p/cart';
import Product from '~p/product';
import Products from '~p/products';
import Todolist from '~p/todolistmobx/todolist.js';

import Test from '~p/todolist/components/childs/test.js';
import TestInner from '~p/todolist/components/childs/testInner.js';

// import ProductsList from '~p/productsList';

// import BlogNews from '~c/cmdFiles/block_of_news.js';


let routes = [,
    {
        name: 'home',
        url: '/',
        component: Home,
        exact: true
    },
    {
        name: 'cart',
        url: '/cart',
        component: Cart,
        exact: true
    },
    {
        name: 'products',
        url: '/products',
        component: Products,
        exact: true
    },
    {
        name: 'product',
        url: '/product/:url',
        component: Product,
        exact: true
    },
    {
        name: 'todolist',
        url: '/todolist',
        component: Todolist,
        exact: false,
        routes:[
            {
                name:"test",
                url:"/todolist/test",
                component:Test,
            },
            {
                name:"testinet",
                url:"/todolist/testList",
                component:TestInner,

            },
        ]
        
    },
    // {
    //     name: 'todolist',
    //     url: '/todolist/:url',
    //     component: Todolist,
    //     exact: true,
    // },
    
    {
        url: '**',
        component: Page404
    }
];

let routesMap = {};




routes.forEach((route) => {
    if(route.hasOwnProperty('name')){
        routesMap[route.name] = route.url;
    }
    
});

let urlBuilder = function(name, params){
    if(!routesMap.hasOwnProperty(name)){
        return null;
    }

    

    let url = routesMap[name]; // news/:id

    for(let key in params){
        url = url.replace(':' + key, params[key]);
    }

    return url;
}

export default routes;
export {routesMap, urlBuilder};