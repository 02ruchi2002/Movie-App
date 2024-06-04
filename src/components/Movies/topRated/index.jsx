import React from "react";
import { useState,useEffect } from "react";
import { getAPI } from "../../../API/services";
import { API_ENDPOINTS } from "../../../API/integration";
import MovieCard from "../../../common (component)/movie-card";
import { useSearchParams } from "react-router-dom";
import Modal from "../../../atoms (input,search-bar,dropdown)/Modal";
import OverView from "../../overview";

const TopRated = () =>{
    const [movies,setMovies] = useState([])
    const [searchParam,setSearchParam] = useSearchParams()
    const [movieOverview,setMovieOverview] = useState(false)
    const [movieId,setMovieId] = useState(null)
    


    const getTopRatedMovies = async()=>{
        const response = await getAPI(API_ENDPOINTS.topRatedMovies)
        // console.log(data)
        setMovies(response?.data?.results)
    }

    useEffect(() => {
        getTopRatedMovies()
    }, [])

    useEffect(()=>{
      if(!searchParam.has('movieId')) return;
      
      const mId = searchParam.get('movieId')
      setMovieId(mId)
      setMovieOverview(true)

    },[searchParam])
   

    const handleMoviesOverview = (movieId) =>{
     const param = searchParam
     param.set("movieId",movieId)
     setSearchParam(param)
    }
    
    return(
        <>
        {
            movies.map((movie,index)=>(
                  <MovieCard handleOverview={()=>handleMoviesOverview(movie?.id)} key={index} movie={movie}/> 
            ))

        }
        {
            movieOverview ?
            <Modal>
               <OverView movieId={movieId}/>
            </Modal>
            : null
        }
       
        </>
    )
}

export default TopRated

