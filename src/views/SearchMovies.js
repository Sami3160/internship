import React from 'react'
import './Home.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchResults } from '../slices/movieSlice'
import MovieCard from '../components/MovieCard'
import { useLocation, useNavigate } from 'react-router'

export default function SearchMovies() {

    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const movieName = queryParams.get('name');
    const navigate = useNavigate();
    useEffect(() => {
        if (!movieName) navigate('/')
    }, [])


    const [page, updatePage] = useState(1)
    const dispatch = useDispatch()
    const searchMovie = useSelector((state) => state.movies.searchResults)
    console.log(`${process.env.REACT_APP_BASE_URL}/?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${movieName}&page=${page}`)

    useEffect(() => {
        const fetchPopularMovies = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${movieName.trim()}&page=${page}`)
            dispatch(setSearchResults(response.data.results))
        }
        fetchPopularMovies()
    }, [dispatch, page, movieName])
    return (
        <div className="home">
            <div className="movies-grid" style={{ paddingRight: '10px ' }}>
                {searchMovie.map((movie) => (
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
