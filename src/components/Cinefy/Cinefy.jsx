import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import './Cinefy.css';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong as BackIcon, faClock as WatchLaterIcon } from '@fortawesome/free-solid-svg-icons';

function Cinefy() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchMovies = async () => {
            const url = "https://tiny-cyan-sockeye-shoe.cyclic.app/movies";
            axios.get(url)
                .then(res => {
                    setMovies(res.data.movies);
                })
        };
        fetchMovies();
    }, []);
    function startPlaying(id) {
        document.getElementById('cards').style.display = "none";
        document.getElementById('navbar').style.display = "none";
        document.getElementById('player').style.display = "block";
        document.getElementById('movie').setAttribute("src", id);
    }
    return (
        <div className="Cinefy">
            <div className="Cards" id="cards">
                {movies.map(movie => (
                    <button key={movie.src} onClick={() => startPlaying(movie.src)} className="MovieButton">
                        <div className="Image">
                            <img src={`https://img.youtube.com/vi/${movie.src.substring(movie.src.lastIndexOf("/") + 1)}/hqdefault.jpg`} alt="" />
                        </div>
                        <div className="Title">
                            {movie.name}
                        </div>
                    </button>
                ))}
            </div>
            <div className="Player" id="player">
                <div className="InvisibleNav" id="playerNav">
                    <a href="/dashboard">
                        <FontAwesomeIcon icon={BackIcon} />
                    </a>
                    <button>
                        <FontAwesomeIcon icon={WatchLaterIcon} />
                    </button>
                </div>
                <iframe width="100%" height="99%" src="" title="Cinefy Video Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" id="movie"></iframe>
            </div>
            <Outlet />
        </div>
    )
};
export default Cinefy;