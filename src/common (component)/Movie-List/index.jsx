import React from "react";
import './styles.css'
import MovieCard from "../movie-card";

const MovieList = ({
    movies ,
    handleOverview ,
     page ,
     totalPage ,
     totalMovieResult , 
     inputHandler , 
     gotoNextBtn,
     gotoPrevBtn ,
    
    }) => {
        const start = page*20 - 20 + 1
        const end = page*20
    return(
        <>
         {
            movies?.map((movie,index)=>(
                  <MovieCard handleOverview={()=>handleOverview(movie?.id)} key={index} movie={movie}/> 
            ))

        }

        <div className="pagination">
            <h3>Showing {start} - {end} of {totalMovieResult} results</h3>
            <div className="body">
                <button className="btn prev" onClick={gotoPrevBtn} >prev</button>
                <div className="input">
                <span>page</span>
                <input type="text" value={page} onChange={inputHandler} />
                <span> / {totalPage} </span>
                </div>
                <button className="btn next" onClick={gotoNextBtn}>next</button>

            </div>
        </div>
       
        </>
    )
}

export default MovieList