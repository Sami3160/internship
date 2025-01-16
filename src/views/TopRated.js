import React from 'react'
import './Home.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {  setTopRatedMovies } from '../slices/movieSlice'
import MovieCard from '../components/MovieCard'

export default function Home() {
  const [page, updatePage] = useState(1)
  const dispatch = useDispatch()
  const topRated = useSelector((state) => state.movies.topRated)
  console.log(`${process.env.REACT_APP_BASE_URL}/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
  useEffect(() => {
    const fetchTopRated = async () => {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
      dispatch(setTopRatedMovies(response.data.results))
    }
    fetchTopRated()
  }, [dispatch])
  return (
    <div className="home">
      <div className="movies-grid" style={{paddingRight:'10px '}}>
        {topRated.map((movie) => (
          <MovieCard key={movie.id} movie={movie}/>
        ))}
      </div>
    </div>
  )
}
