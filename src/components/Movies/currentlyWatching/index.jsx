import React from "react";
import { useState,useEffect } from "react";
import { getAPI } from "../../../API/services";
import { API_ENDPOINTS } from "../../../API/integration";
import MovieCard from "../../../common (component)/movie-card";
import { useSearchParams } from "react-router-dom";
import Modal from "../../../atoms (input,search-bar,dropdown)/Modal";
import OverView from "../../overview";



const CurrentlyWatching = () =>{
    const [movies,setMovies] = useState([])
    const [searchParams,setSearchParams] = useSearchParams()
    const [showMovieOverview,setMovieOverview] = useState(false)
    const [movieId,setMovieId] = useState(null)

    const getCurrentlyWatching = async()=>{
        const response = await getAPI(API_ENDPOINTS.currentWatchingMovies)
        setMovies(response?.data?.results)
    }

    useEffect(() => {
        getCurrentlyWatching()
    }, [])

    useEffect(()=>{
        if(!searchParams.has('movieId')) return;
   
        const mid = searchParams.get('movieId')
        setMovieId(mid)
        setMovieOverview(true)
   
       },[searchParams])
   
       
       
       const handleMoviesOverview = (movieId) =>{
         const param = searchParams
         param.set("movieId",movieId)
         setSearchParams(param)
       }
    
    return(
        <>
        {
            movies.map((movie,index)=>(
                  <MovieCard  handleOverview={()=>handleMoviesOverview(movie?.id)} key={index} movie={movie}/> 
            ))

        }

        {
           showMovieOverview ?
           <Modal>
             <OverView movieId={movieId} />
           </Modal>  
           : null
       
        }
       
        </>
    )
}

export default CurrentlyWatching

