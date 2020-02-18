import React,{useEffect,useRef,useState} from 'react';
import "./style.less"

const FilterItem = ({filterBy,cat,array}) => {
    const [isDropDown, openCloseDropDown] = useState("");
    const [dropItem, setDropItem] = useState("");

    let dropDownRef = useRef(null);
    
    let  handleClickOutside = (event) => {
        if (dropDownRef.current && !dropDownRef.current.contains(event.target) ) {
            openCloseDropDown(false)
            setDropItem("")
        }
      }
      useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      })

      
    return (
        <li ref={dropDownRef} className="filter_cat">
            <div className="filter_cat_btn" onClick={()=>{
                openCloseDropDown(isDropDown == "brand"? !isDropDown :"brand")
            }}><i className="fas fa-ellipsis-v"></i>{cat}</div>
            <ul className={`filter_dropdown ${isDropDown == "brand"?"filter_dropdown-active":""}`}>
                {array.map((type)=>
                <li key={type} onClick={() => {
                    filterBy(type)
                    setDropItem(type)
                }} 
                className={`filter_dropdown_item ${dropItem == type ? "filter_dropdown_item_active":""}`}>{type}</li>)}
            </ul>
        </li>
    );
}

export default FilterItem;
