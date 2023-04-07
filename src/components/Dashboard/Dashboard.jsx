import React from "react";
import { useState } from "react";
import logo from './logo.png';
import './Dashboard.css';
function Dashboard(){
    const [navId,setNavId]=useState(1);
    return(
        <div className="Dashboard">
            <div className="Navbar">
                <button id="logo">
                    <img src={logo} alt="" />
                </button>
                <button id="wishlist">Wishlist</button>
                <div className="Gap"></div>
                <button id="logout">LogOut</button>
            </div>
        </div>
    )
};
export default Dashboard;