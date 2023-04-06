import React from "react";
import './Home.css';
import logo from './logo.png';
import RegisterArea from '../RegisteringArea/RegisteringArea'
function Home(){
    return(
        <div className="Home">
            <div className="Left">
                <div className="Logo">
                    <img src={logo} alt="" />
                </div>
                <div className="Text">
                    Cinefy is your one-stop destination for indulging in nostalgia with some of the best Indian movies from the 2000s era. Sign up now and dive into a world of free entertainment, with an extensive collection of classic Bollywood flicks waiting to be streamed.
                </div>
            </div>
            <div className="Right">
                <RegisterArea />
            </div>
        </div>
    )
};
export default Home;