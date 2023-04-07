import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.png';
import './Dashboard.css';
import Cinefy from '../Cinefy/Cinefy';
import Wishlist from '../Wishlist/Wishlist';
function Dashboard() {
    const [navId, setNavId] = useState(1);
    function homeDashboard() {
        setNavId(1);
    }
    function wishlistDashboard() {
        setNavId(2);
    }
    function logOut() {
        localStorage.token = "";
        window.location.href = '/';
    }
    return (
        <div className="Dashboard">
            <div className="Navbar" id="navbar">
                <button id="logo" onClick={homeDashboard}>
                    <img src={logo} alt="" />
                </button>
                <button id="wishlist" onClick={wishlistDashboard}>Wishlist</button>
                <div className="Gap"></div>
                <button id="logout" onClick={logOut}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                </button>
            </div>
            {navId === 1 ? (
                <Cinefy />
            ) : (
                <Wishlist />
            )}
        </div>
    )
};
export default Dashboard;