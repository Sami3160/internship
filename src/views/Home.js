import React from 'react'
import './Home.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setPopularMovies } from '../slices/movieSlice'
import MovieCard from '../components/MovieCard'

export default function Home() {
  const [page, updatePage] = useState(1)
  const dispatch = useDispatch()
  const popularMovies = useSelector((state) => state.movies.popular)
  console.log(`${process.env.REACT_APP_BASE_URL}/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
  useEffect(() => {
    const fetchPopularMovies = async () => {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
      dispatch(setPopularMovies(response.data.results))
    }
    fetchPopularMovies()
  }, [dispatch, page])
  return (
    <div className="home">
      <div className="movies-grid" style={{ paddingRight: '10px ' }}>
        {popularMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className='page-component'>
        <button onClick={() => {
          if (page == 1) {
            alert("page is at 1")
          } else {
            updatePage((p) => p - 1)
          }
        }}>load previous</button>
        <p>Page: {page}</p>
        <button onClick={() => updatePage((p) => p + 1)}>load next</button>
      </div>
    </div>
  )
}
