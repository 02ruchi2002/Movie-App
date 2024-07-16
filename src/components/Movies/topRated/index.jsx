import React from "react";
import { useState,useEffect } from "react";
import { getAPI } from "../../../API/services";
import { API_ENDPOINTS } from "../../../API/integration";
import MovieList from "../../../common (component)/Movie-List";
import { useSearchParams } from "react-router-dom";
import Modal from "../../../atoms (input,search-bar,dropdown)/Modal";
import OverView from "../../overview";

const TopRated = () =>{
    const [movies,setMovies] = useState([])
    const [searchParam,setSearchParam] = useSearchParams()
    const [movieOverview,setMovieOverview] = useState(false)
    const [movieId,setMovieId] = useState(null)
    const [page,setPage] = useState(1)
    const [totalPage,setTotalPage] = useState(0)
    const [totalMovieResult,setTotalMovieResult] = useState(0)
    

    const getTopRatedMovies = async()=>{
        const response = await getAPI(API_ENDPOINTS.topRatedMovies,{page})
        setMovies(response?.data?.results)
        setTotalPage(response?.data?.total_pages)
        setTotalMovieResult(response?.data?.total_results)
    }

    useEffect(() => {
        getTopRatedMovies()
    }, [page])

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

    const handleClose = () =>{
        setMovieOverview(false)
        searchParam.delete('movieId')
        setSearchParam(searchParam)
    }
    
    return(
        <>
         <MovieList handleOverview={handleMoviesOverview}
         movies={movies}
         page={page}
         totalPage={totalPage}
         gotoPrevBtn={()=>setPage(page - 1)}
         gotoNextBtn={()=>setPage(page + 1)}
         inputHandler={(e)=>setPage(e.target.value)}
         totalMovieResult={totalMovieResult} />
        
        {
            movieOverview ?
            <Modal handleCancel={handleClose}>
               <OverView movieId={movieId}/>
            </Modal>
            : null
        }
       
        </>
    )
}

export default TopRated

