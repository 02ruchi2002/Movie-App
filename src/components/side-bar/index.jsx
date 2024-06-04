import React, { useEffect } from "react";
import { PiStarFill } from "react-icons/pi";
import { IoDownloadOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import './style.css'

const SideBar = () =>{
    useEffect(()=>{
        const sideEle = document.querySelector("#side-bar")
        const lableEle = document.querySelectorAll(".lable")
        sideEle.addEventListener("mouseover",()=>{
           lableEle.forEach((lables)=>{
             lables.style.display = "inline-block"
           })
           
        })

        sideEle.addEventListener("mouseleave",()=>{
         lableEle.forEach((lables)=>{
            lables.style.display = "none"
          })
      })
       },[])

      
    return(
       <div id="side-bar">
        <div className="side-list">
        <PiStarFill />
        <label className="lable">favorite</label>
        </div>
        <div className="side-list">
        <IoDownloadOutline  />
        <label className="lable">download</label>
        </div>
        <div className="side-list">
        <MdOutlineWatchLater />
        <label className="lable">watch later</label>
        </div>
       </div>
    )
    
}

export default SideBar