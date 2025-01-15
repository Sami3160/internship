import React from 'react'
import './MovieCard.css'
import { useNavigate } from 'react-router'
export default function MovieCard({movie}) {
  const navigate=useNavigate()
  return (
    <div className="main-card" onClick={()=>navigate(`/moviesdetails?id=${movie.id}`)}>
        <img className="img" src={`${process.env.REACT_APP_BASE_IMAGE_URL+movie.poster_path}`} alt="some img"/>
        <p className="title">{movie.original_title}</p>
        <p className="rating">Rating: {movie.vote_average}</p>
    </div>
  )
}
