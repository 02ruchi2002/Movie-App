import React from "react";
import './style.css'
import starIcon from "../../asset (icon,image)/icons/star.svg"


const MovieCard = ({movie,handleOverview}) => {
    return (
        <div className="movie-card" onClick={handleOverview}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie-poster" />
        <div className="detail">
            <div className="rating"><img src={starIcon} alt="star-icon" />{movie.vote_average}</div>
            <div className="name">{movie.title}</div>
        </div>
        </div>
    )
}

export default MovieCard