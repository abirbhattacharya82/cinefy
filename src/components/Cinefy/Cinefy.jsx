import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import './Cinefy.css';
import axios from "axios";
import ReactPlayer from 'react-player/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong as BackIcon, faClock as WatchLaterIcon } from '@fortawesome/free-solid-svg-icons';

function Cinefy() {
    const [movies, setMovies] = useState([]);
    const [url,setUrl] = useState("");
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
        setUrl(id);
    }
    function addToWatchlist(){
        document.getElementById('l').style.display="block";
        const movie_id=document.getElementById('movie').src;
        const movie_name=document.getElementById('movie').title;
        const token=localStorage.token;
        const url=`https://tiny-cyan-sockeye-shoe.cyclic.app/addToWatchlist?token=${token}&movie_id=${movie_id}&movie_name=${movie_name}`;
        axios.post(url)
        .then((res)=>{
            if(res.status===200){
                alert("Successfully Added");
                document.getElementById('l').style.display="none";
            }
            else{
                alert("Server Down Try Later");
                document.getElementById('l').style.display="none";
            }
        })
        .catch((err)=>{
            alert("Server Down Try Later");
            document.getElementById('l').style.display="none";
        });
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
                    <div class="loaderCircle" id="l"></div>
                    <a href="/dashboard">
                        <FontAwesomeIcon icon={BackIcon} />
                    </a>
                    <button onClick={addToWatchlist}>
                        <FontAwesomeIcon icon={WatchLaterIcon} />
                    </button>
                </div>
                <ReactPlayer url={url} width="100%" height="99%" playing="true" controls="true"/>
            </div>
            <Outlet />
        </div>
    )
};
export default Cinefy;