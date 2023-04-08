import React from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Background from '../Background/Background';
import logo from './logo.png';
import './LoadingPage.css';
function LoadingPage(){
    const token=localStorage.token;
    useEffect(() => {
        async function checkTokenValidity() {
          try {
            if (!token) {
                window.location.href = '/home';
            }
            const response = await fetch(`https://tiny-cyan-sockeye-shoe.cyclic.app/checkTokenValidity?token=${token}`);
            console.log(response);
            if (response.status === 202) {
                window.location.href = '/dashboard';
            } else {
                window.location.href = '/home';
            }
          } catch (error) {
            window.location.href = '/home';
          }
        }
        checkTokenValidity();
      }, [token]);
    return(
        <div className="LoadingPage">
            <Background />
            <div className="contain">
                <div className="Image">
                    <img src={logo} alt="" />
                </div>
            </div>
            <Outlet />
        </div>
    )
};
export default LoadingPage;