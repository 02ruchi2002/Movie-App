import React, { useEffect, useState } from "react";
import "./index.css"
import TopRated from "./topRated";
import Trending from "./trending";
import CurrentlyWatching from "./currentlyWatching";
import Upcoming from "./upcoming";
import { useSearchParams } from "react-router-dom";
import Popular from "./popular";

const Tabs = [
    {
        title:"Top Rated",
        icon:"",
        component: TopRated,
        param: "top-rated"
    },
    {
        title:"Trending",
        icon:"",
        component: Trending,
        param:"trending"
    },
    {
        title:"Currently Watching",
        icon:"",
        component: CurrentlyWatching,
        param:"waching"
    },
    {
        title:"Upcoming",
        icon:"",
        component: Upcoming,
        param:"upcoming"
    },
    {
        title:"Popular",
        icon:"",
        component: Popular,
        param:"popular"
    }
]

const Movies = () =>{
    const [activeTabIndex,setActiveTabIndex] = useState(0)
    const tabObject = Tabs[activeTabIndex] // arr[index]
    const ActiveComponent = tabObject?.component
  

     const [SearchParam,setUseSearchParam] = useSearchParams()
     
     

    const handleClick = (event,index,tab) =>{
        const activeEle = event.target
        const allTab = document.querySelectorAll(".tab-title")
        allTab?.forEach(element => {
            if(element.classList.contains("active")){
                element.classList.remove("active")
            }
        });
        activeEle.classList.add("active")
         setActiveTabIndex(index)
         setUseSearchParam({type:tab.param})

    
    }

    useEffect(()=>{
       setUseSearchParam({type:"top-rated"})
    },[])


    
    return(
        <div className="movie-container">     
           <div className="tab-container">

            {
                Tabs?.map((tab,index)=>(
                   <div key={index} onClick={(event)=>handleClick(event,index,tab)} className={`tab-title ${activeTabIndex==index ? "active" : ""} `}>{tab?.title}</div>
                ))
            }
           </div>
           <div className="wrapper">
             <ActiveComponent/>
           </div>
        </div>
    )
}

export default Movies


/* ()=>setActiveTabIndex(index)

const handle = (event) =>{
const activeTab = event.target
const alltab = document.queryselecter(".table-title")
alltab.forEach((element)=>{
   if(element.classList.Containes("active")){
    element.classlist.remove("active")
   }
})
}

activeTab.classList.add("active")



*/