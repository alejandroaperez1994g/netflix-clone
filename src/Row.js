import React, { useState, useEffect } from 'react'
import YouTube from "react-youtube";
import axios from './axios';
import './Row.css'
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchURL, isLargeRow }) {
    const [movies, SetMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            SetMovies(request.data.results);
            return request;

        }
        fetchData();
    }, [fetchURL]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            //
            autoplay: 1,
        }

    }


    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer((movie?.name || movie?.title).toString() || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                    console.log(urlParams)
                }).catch(error => console.log(error))
        }
    }


    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie => (
                    <img key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
