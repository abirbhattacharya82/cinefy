import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import './Wishlist.css';
import axios from "axios";
import ReactPlayer from 'react-player/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong as BackIcon } from '@fortawesome/free-solid-svg-icons';

function Wishlist() {
    const [movies, setMovies] = useState([]);
    const [url,setUrl] = useState("");
    useEffect(() => {
        const fetchMovies = async () => {
            const token=localStorage.token;
            const url = `https://tiny-cyan-sockeye-shoe.cyclic.app/fetchWatchlist?token=${token}`;
            axios.get(url)
                .then(res => {
                    setMovies(res.data.watchlist);
                })
        };
        fetchMovies();
    }, []);
    function startPlaying(id) {
        document.getElementById('cards').style.display = "none";
        document.getElementById('navbar').style.display = "none";
        document.getElementById('player').style.display = "block";
        setUrl(id);
    }
    return (
        <div className="Wishlist">
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
                </div>
                <ReactPlayer url={url} width="100%" height="99%" playing="true" controls="true"/>
            </div>
            <Outlet />
        </div>
    )
};
export default Wishlist;