import React, { useState } from "react";
import { filters } from "../../utils/constant";
import './style.css'
import { SearchBar } from "../../atoms (input,search-bar,dropdown)/search-bar";
import { CgProfile } from "react-icons/cg";
import logo from "../../asset (icon,image)/images/logo.png"
import { NavLink } from "react-router-dom";

const NavBar = () =>{
  const [searchValue,setSearchValue] = useState("")
    return(
        
         <nav>
          <img className="company-logo" src={logo} alt="company-logo" />
            <div className="filters">
             {filters?.map((item,index)=>(
               <NavLink to={item?.path}className="filter" key={index}>{item?.title}</NavLink>
             ))}
            </div>
            <div className="search-bar">
             <SearchBar value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
            </div>
            <div className="profile">
            <CgProfile className="profile-icon" />
            </div>
         </nav>
        
    )
}

export default NavBar