import React,{useState,useRef,useEffect} from 'react';
import "./style.less"

import FilterItem from "./../filterItem"

const Filter = ({inputValue,search,filterBy,colors,sizes,brands}) => {
    const [allFilterItem, setallFilterItem] = useState("");


    let categories = {
    "Brands":brands,
    "Color":colors,
    "Size":sizes}
    ;

    return (
        // pointer-events: none;
        
        <ul className=" filter__bar ">
            <li className="filter_cat"><i className="fas fa-filter"></i>Filters </li>
            <li onClick={() =>filterBy("all")} className={`filter_cat_btn `}><i className="fas fa-filter"></i>For everyone </li>
            
            {Object.keys(categories).map((cat)=>(
                <FilterItem
                key={cat}
                array={categories[cat]}
                cat={cat}
                filterBy={(type) =>filterBy(type)}
                
                />
            ))}

            <input 
            type="text"
            className="filter_input"
            onChange={e => search(e.target.value)}
            value={inputValue}
            />
        </ul>
        
        
    );
}

export default Filter;