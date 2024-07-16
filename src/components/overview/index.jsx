import React, { useState } from "react";
import './style.css'
import starIcon from "../../asset (icon,image)/icons/star.svg"
import { IoStar } from "react-icons/io5";
import { IoDownloadOutline } from "react-icons/io5";
import { IoShareSocial } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineDislike } from "react-icons/ai";
import { getAPI } from "../../API/services";
import { useEffect } from "react";
import { API_ENDPOINTS } from "../../API/integration";
import MovieCard from "../../common (component)/movie-card";
import { useSearchParams } from "react-router-dom";
import { postAPI } from "../../API/services";

// const data = {
//   adult: false,
//   backdrop_path: "/zfbjgQE1uSd9wiPTX4VzsLi0rGG.jpg",
//   belongs_to_collection: null,
//   budget: 25000000,
//   genres: [
//     {
//       id: 18,
//       name: "Drama",
//     },
//     {
//       id: 80,
//       name: "Crime",
//     },
//   ],
//   homepage: "",
//   id: 278,
//   imdb_id: "tt0111161",
//   origin_country: ["US"],
//   original_language: "en",
//   original_title: "The Shawshank Redemption",
//   overview:
//     "Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
//   popularity: 116.038,
//   poster_path: "/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
//   production_companies: [
//     {
//       id: 97,
//       logo_path: "/7znWcbDd4PcJzJUlJxYqAlPPykp.png",
//       name: "Castle Rock Entertainment",
//       origin_country: "US",
//     },
//   ],
//   production_countries: [
//     {
//       iso_3166_1: "US",
//       name: "United States of America",
//     },
//   ],
//   release_date: "1994-09-23",                                           //
//   revenue: 28341469,
//   runtime: 142,                                                        //
//   spoken_languages: [
//     {
//       english_name: "English",                                       //
//       iso_639_1: "en",
//       name: "English",
//     },
//   ],
//   status: "Released",
//   tagline: "Fear can hold you prisoner. Hope can set you free.",             //
//   title: "The Shawshank Redemption",
//   video: false,
//   vote_average: 8.705,
//   vote_count: 26218,
// };

const Actions = [
  {
    label: "Add To Watchlater",
    icon: <IoDownloadOutline />
  },
  {
    label: "rating",
    icon: <IoShareSocial />
  },
  {
    label: "Add To Favorite",
    icon: <FaRegHeart />
  },
  {
    label: "Share",
    icon: <IoShareSocial />
  }
]



const OverView = ({ movieId }) => {
  console.log("movieId: ", movieId)

  const [data, setData] = useState({})
  const [recomn, setRecomn] = useState([])
  const [movieID,setMovieID] = useState()
  const [searchParam,setSearchParam] = useSearchParams()

  useEffect(() => {
       setMovieID(movieId)
  },[movieId])

  const fetchMovieDetail = async () => {
    const response = await getAPI(API_ENDPOINTS.getMovieDetailById(movieID))
    console.log("response",response)
    setData(response?.data)
  }
  

  // console.log("data",data)

  useEffect(() => {
    if (!movieID) return;
    fetchMovieDetail()
  }, [movieID])

  const fetchRecomendation = async () => {
    const recomnData = await getAPI(API_ENDPOINTS.getRecomendationMovie(movieId))
    setRecomn(recomnData?.data?.results)
  
  }

  useEffect(() => {
    fetchRecomendation()
  }, [movieID])



  const handleOverView = (movieId) => {
    console.log("movieId",movieId)
    const param = searchParam
    param.set('movieId',movieId)
    setSearchParam(param)
    setMovieID(movieId)
  }


  const favorite = {media_type: 'movie', media_id: movieId, favorite: true}
 const watchlist = {media_type: 'movie', media_id: movieId, watchlist: true}
  
  const handleClick = (label) =>{
    console.log("label =",label)
    if(label == "Add To Favorite"){
      console.log("helo2",label)
     postAPI(API_ENDPOINTS.addFavoriteMovie,favorite)
     
    }else if(label == "Add To Watchlater"){
      postAPI(API_ENDPOINTS.addWatchlistMovie,watchlist)
    }
   
  }


  return (
    <div className="overView">
      <div className="movie-detail">
        <div className="video">
          <img src={`https://image.tmdb.org/t/p/w500${data?.backdrop_path}`} alt="poster" />
        </div>
        <br />
        <div className="movie-detail-container">
          <div className="basic-detail">
            <div className="rating-duration">
            <span className="rating">
              <IoStar />
              {data?.vote_average}</span>
              <span className="time">{data?.runtime}</span>
              <span className="date">{new Date(data?.release_date).getFullYear()}</span>
            </div>
            <br />
            <div className="language">
              <span>languages:</span>
              {
                data?.spoken_languages?.map((lang, index) => (
                  <span key={index} className="language"> {lang?.name} {(data.spoken_languages.lenght-1==index) ? '' : ','}</span>
                ))
              }
            </div>
          </div>

          <br />
          <div className="title">
            <h2>{data?.title}</h2>
            <div className="tag-line">{data?.tagline}</div>
          </div>
          <br />
          <div className="genre-list">
            <span>Genres:</span>
            {
              data?.genres?.map((genre, index) =>
                <span className="genre">{genre?.name}{(data.genres.lenght - 1 == index) ? '' : ','}</span>
              )
            }
            
          </div>
        </div>
        <br />
        <div className="actions">
          {
            Actions?.map((action, index) =>
              <div className="action" key={index} onClick={()=> handleClick(action.label)} >
                {action?.icon}
                <span>{action?.label}</span>
              </div>
            )
          }
        </div>
        <br />
        <div className="separator"></div>
        <br />
        <p className="story-line"><span>Story Line:</span>{data.overview}</p>
        <br />
        <div className="top-cast"></div>
        <br />
      </div>
      <br />
      <div className="recomndation-container">
      <h1>Recomndation</h1>
      <div className="recomndation">
        {
          recomn?.map((item, index) => (
            <MovieCard key={index} movie={item} handleOverview={()=>handleOverView(item?.id)}  />
          ))
        }
        </div>

      </div>
    </div>


  )
}

export default OverView

