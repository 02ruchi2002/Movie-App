import React from "react";
import './style.css'
import { IoIosSearch } from "react-icons/io";



export const SearchBar = (props) =>{
    const {value, onChange } = props
    return(
        <div id="input-wrapper">
        <IoIosSearch className="search-icon" />
        <input 
        type="text"
        placeholder="Search..." 
        name="search"
        value={value}
        onChange={onChange}
        required = {false}
       />
        </div>
    )
}