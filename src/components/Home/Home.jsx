import React from "react";
import './Home.css';
import logo from './logo.png';
import RegisterArea from '../RegisteringArea/RegisteringArea'
function Home() {
    return (
        <div className="Home">
            <div className="Logo">
                <img src={logo} alt="" />
            </div>
            <div className="RArea">
                <RegisterArea />
            </div>
        </div>
    )
};
export default Home;