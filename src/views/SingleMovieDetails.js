import React from 'react'
import { useLocation, useSearchParams } from 'react-router'
import axios from 'axios'
import "./SingleMoviePage.css"
export default function SingleMovieDetails() {
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const movieId = queryParams.get('id');
    const [info, setInfo] = React.useState({})
    const [cast, setCast] = React.useState({})
    const [gernes, setGernes] = React.useState("")
    React.useEffect(() => {
        const fetchSingleMovie = async () => {
            const response1 = await axios.get(`${process.env.REACT_APP_BASE_URL}/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
            const response2 = await axios.get(`${process.env.REACT_APP_BASE_URL}/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
            // console.log(response1)
            console.log(response2.data)
            let g = "";
            response1.data.genres.map((ele) => g += ele.name + ",")
            g = g.slice(0, g.length - 1)
            setGernes(g)
            setInfo(response1.data)
            setCast(response2.data)
        }
        fetchSingleMovie()
    }, [])
    return (
        <div style={{ backgroundColor: '#282C33', paddingTop: '10px', minHeight: '100vh' }}>
            <div className="heading" >
                <div className="details">
                    <div style={{ padding: '5px', display: 'flex', gap: '10px' }}>
                        <img className="poster" src={`${process.env.REACT_APP_BASE_IMAGE_URL + info.poster_path}`} alt="" />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <p style={{ margin: '0', color: 'white', fontSize: '30px' }}>{info.title}</p>
                            <p style={{ margin: '0', color: '#789DC7', fontSize: '20px', marginBottom: '10px' }}>Rating: {info.vote_average}</p>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <div style={{ padding: '5px ', border: 'solid 1.5px rgb(53, 52, 52)', borderRadius: '5px', color: 'white', fontSize: '12px' }}>{info.runtime} min</div>
                                <div style={{ display: 'flex', color: '#AFC3DB', fontSize: '14px' }}>{gernes}</div>
                            </div>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <div style={{ color: 'white', fontSize: '14px', marginTop: '10px' }}>Release Date: {info.release_date}</div>
                            </div>
                        </div>

                    </div>
                    <div className="overview">
                        <p style={{ margin: '10px 0 0 0', color: 'white', fontSize: '26px' }}>
                            Overview
                        </p>
                        <p style={{ margin: '10px 0 0 0', color: 'white', fontSize: '13px' }}>
                            {info.overview}

                        </p>
                    </div>
                </div>
                <img className="banner" src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${info.backdrop_path}`} alt="movie img" />
            </div>
            <div style={{ padding: '10px' }}>
                <h2 style={{ color: 'white' }}>Cast</h2>
                <div className="cast">
                    {cast?.cast?.map((ele) => <CastCard c={ele} />)}
                </div>
            </div>
            <div style={{ padding: '10px' }}>
                <h2 style={{ color: 'white' }}>Crew</h2>
                <div className="cast">
                    {cast?.crew?.map((ele) => <CastCard c={ele} crew={true} />)}
                </div>
            </div>
        </div>
    )
}


const CastCard = ({ c, crew }) => {
    return <div className="main-card">
        <img width="250px" className="img1" src={`${process.env.REACT_APP_BASE_IMAGE_URL + c.profile_path}`} alt="some img" />
        <p className="title">{c.name}</p>
        {crew ?
            <p className="rating">Job: {c.job}</p>
            :

            <p className="rating">Character: {c.character}</p>
        }
    </div>
}