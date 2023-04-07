import React, { useEffect, useState } from "react";
import './Cinefy.css';
import axios from "axios";
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
    function startPlaying(id){
        document.getElementById('cards').style.display="none";
        document.getElementById('player').style.display="block";
        document.getElementById('movie').setAttribute("src",id);
    }
    return (
        <div className="Cinefy">
            <div className="Cards" id="cards">
                {movies.map(movie => (
                    <button key={movie.src} onClick={()=>startPlaying(movie.src)}>
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
                <iframe width="100%" height="100%" src="" title="Cinefy Video Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen id="movie"></iframe>
            </div>
        </div>
    )
};
export default Cinefy;