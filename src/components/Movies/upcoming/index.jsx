import React from "react";
import { useState,useEffect } from "react";
import { getAPI } from "../../../API/services";
import { API_ENDPOINTS } from "../../../API/integration";
import MovieCard from "../../../common (component)/movie-card";
import { useSearchParams } from "react-router-dom";
import Modal from "../../../atoms (input,search-bar,dropdown)/Modal";
import OverView from "../../overview";


const Upcoming = () =>{
    const [movies,setMovies] = useState([])
    const [searchParam,setSearchParam] = useSearchParams()
    const [movieOverview,setMovieOverview] = useState(false)
    const [movieId,setMovieId] = useState(null)

    const getUpcoming = async()=>{
        const response = await getAPI(API_ENDPOINTS.upcoming)
        // console.log(data)
        setMovies(response?.data?.results)
    }

    useEffect(() => {
        getUpcoming()
    }, [])

    useEffect(()=>{
       if(!searchParam.has('movieId')) return;
       const mId = searchParam.get('movieId')
       setMovieId(mId)
       setMovieOverview(true)
       
    },[searchParam])



    const handleMovieOverview = (movieId) =>{
      const param = searchParam
      param.set("movieId",movieId)
      setSearchParam(param)
    }

    const handleClose = () =>{
        setMovieOverview(false)
        searchParam.delete('movieId')
        setSearchParam(searchParam)
    }
    
    return(
        <>
        {
            movies.map((movie,index)=>(
                  <MovieCard handleOverview={()=>handleMovieOverview(movie?.id)} key={index} movie={movie}/> 
            ))

        }
        {
            movieOverview ?
            <Modal handleCancel={handleClose}>
                <OverView movieId={movieId}  />
            </Modal>
            : null
        }
       
       
        </>
    )
}

export default Upcoming

