import React, { useState, useEffect } from 'react'
import axios from './axios';
import './Row.css'

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchURL, isLargeRow }) {
    const [movies, SetMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            SetMovies(request.data.results);
            return request;

        }
        fetchData();
    }, [fetchURL]);


    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie => (
                    <img key={movie.id}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Row
