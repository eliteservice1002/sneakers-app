




let routes = [,
    {
        name: 'home',
        url: '/',
        component: Home,
        exact: true
    },
    {
        name: 'products',
        url: '/products',
        component: Products,
        exact: false,
    },
    
    {
        name: 'todolist',
        url: '/todolist',
        component: Todolist,
        exact: false,

    },
    {
        name: 'hook',
        url: '/hook',
        component: Weather,
        exact: true,

    },
    
    
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