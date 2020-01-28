import React from 'react';
import { routesMap } from '~/routes';
import { Link } from 'react-router-dom';



export default function(){
    return (
        <div className="error404">
            <h1>Error 404, page not found</h1>
            
            <div className="error404_inner">
                
                    <Link className="link_to" to={routesMap.home}>Go to home page</Link>
                
            </div>
        </div>
    );
}